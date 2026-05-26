"""One-click deploy: sync chrome-extens/ to server with version check.

Avoids deploying older code over newer code on the server.
Stores the deployed git commit hash in .deployed-version on the server.
"""
import paramiko
import os
import sys
import subprocess

HOST = "8.146.205.102"
USER = "root"
LOCAL_DIR = os.path.join(os.path.dirname(os.path.abspath(__file__)), "chrome-extens")
REMOTE_DIR = "/usr/ydj/chrome-extens-html"
REMOTE_VERSION_FILE = REMOTE_DIR + "/.deployed-version"


def get_local_version():
    """Return the current local git commit hash."""
    result = subprocess.run(
        ["git", "rev-parse", "HEAD"],
        capture_output=True, text=True, cwd=os.path.dirname(os.path.abspath(__file__))
    )
    return result.stdout.strip()


def get_remote_version(sftp):
    """Read the deployed commit hash from the server, or None."""
    try:
        with sftp.open(REMOTE_VERSION_FILE, "r") as f:
            return f.read().strip()
    except FileNotFoundError:
        return None


def check_version(local_ver, remote_ver):
    """Compare versions. Return True if safe to deploy."""
    if remote_ver is None:
        print(f"[INFO] Server has no version标记，首次部署。")
        return True

    if local_ver == remote_ver:
        print(f"[SKIP] 服务器已是最新版本 ({local_ver[:8]})，无需部署。")
        return False

    # Check if local is ancestor of remote (local is older → regression risk)
    result = subprocess.run(
        ["git", "merge-base", "--is-ancestor", local_ver, remote_ver],
        capture_output=True, text=True,
        cwd=os.path.dirname(os.path.abspath(__file__))
    )
    if result.returncode == 0:
        print(f"[WARN] 本地版本 ({local_ver[:8]}) 旧于服务器版本 ({remote_ver[:8]})。")
        print("[WARN] 继续部署将回退服务器代码。使用 --force 可忽略。")
        return False

    return True


def ensure_dir(sftp, path):
    try:
        sftp.stat(path)
    except FileNotFoundError:
        parts = path.strip("/").split("/")
        current = ""
        for part in parts:
            current = current + "/" + part
            try:
                sftp.stat(current)
            except FileNotFoundError:
                sftp.mkdir(current)


def deploy(force=False):
    local_ver = get_local_version()
    print(f"[LOCAL] commit: {local_ver[:8]} ({local_ver[:16]}...)")

    print(f"Connecting to {HOST}...")
    ssh = paramiko.SSHClient()
    ssh.set_missing_host_key_policy(paramiko.AutoAddPolicy())
    ssh.connect(HOST, 22, USER)
    sftp = ssh.open_sftp()

    # Version check
    remote_ver = get_remote_version(sftp)
    if remote_ver:
        print(f"[SERVER] commit: {remote_ver[:8]} ({remote_ver[:16]}...)")
    else:
        print(f"[SERVER] 无版本标记")

    if not check_version(local_ver, remote_ver):
        if not force:
            sftp.close()
            ssh.close()
            print("如需强制部署请运行: python deploy.py --force")
            return
        print("[FORCE] 强制部署...")

    upload_count = 0
    for root, dirs, files in os.walk(LOCAL_DIR):
        for dir_name in dirs:
            if dir_name.startswith("."):
                continue
            local_sub = os.path.join(root, dir_name)
            rel_path = os.path.relpath(local_sub, LOCAL_DIR)
            ensure_dir(sftp, REMOTE_DIR + "/" + rel_path.replace("\\", "/"))

        for file_name in files:
            if file_name.startswith("."):
                continue
            local_file = os.path.join(root, file_name)
            rel_path = os.path.relpath(local_file, LOCAL_DIR)
            remote_file = REMOTE_DIR + "/" + rel_path.replace("\\", "/")

            ensure_dir(sftp, os.path.dirname(remote_file))
            sftp.put(local_file, remote_file)
            upload_count += 1

    # Write version file to server
    with sftp.open(REMOTE_VERSION_FILE, "w") as f:
        f.write(local_ver + "\n")

    sftp.close()

    # Reload nginx
    stdin, stdout, stderr = ssh.exec_command("nginx -s reload")
    stdout.channel.recv_exit_status()

    ssh.close()
    print(f"\nDone: {upload_count} uploaded")
    if upload_count > 0:
        print(f"Deployed version: {local_ver[:8]}")
        print("Nginx reloaded.")


if __name__ == "__main__":
    force = "--force" in sys.argv
    deploy(force=force)

"""One-click deploy: sync chrome-extens/ to server"""
import paramiko
import os
import sys

HOST = "8.146.205.102"
USER = "root"
LOCAL_DIR = os.path.join(os.path.dirname(os.path.abspath(__file__)), "chrome-extens")
REMOTE_DIR = "/usr/ydj/chrome-extens-html"

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

def deploy():
    print(f"Connecting to {HOST}...")
    ssh = paramiko.SSHClient()
    ssh.set_missing_host_key_policy(paramiko.AutoAddPolicy())
    ssh.connect(HOST, 22, USER)
    sftp = ssh.open_sftp()

    upload_count = 0
    skip_count = 0
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

            try:
                remote_attr = sftp.stat(remote_file)
                if remote_attr.st_size == os.path.getsize(local_file):
                    skip_count += 1
                    continue
            except FileNotFoundError:
                pass

            ensure_dir(sftp, os.path.dirname(remote_file))
            sftp.put(local_file, remote_file)
            upload_count += 1

    sftp.close()

    # Reload nginx
    stdin, stdout, stderr = ssh.exec_command("nginx -s reload")
    stdout.channel.recv_exit_status()

    ssh.close()
    print(f"\nDone: {upload_count} uploaded, {skip_count} skipped (unchanged)")
    if upload_count > 0:
        print("Nginx reloaded.")

if __name__ == "__main__":
    deploy()

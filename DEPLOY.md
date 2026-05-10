# Deploy Guide — chrome-extens

## Overview

Deploy the `chrome-extens/` static site to the production server.

- **Server**: 8.146.205.102
- **Target path**: `/usr/ydj/chrome-extens-html/`
- **Domain**: https://extension.nextself.top
- **Nginx**: reverse proxy + static file serving (SSL via Let's Encrypt)

## One-Click Deploy

```bash
python3 deploy.py
```

This syncs changed files from `chrome-extens/` to the server and reloads Nginx. Unchanged files are skipped.

## Prerequisites

- Python 3 with `paramiko` (`pip install paramiko`)
- SSH key configured (done once, see below)

## Initial Server Setup

Run these steps **once** when setting up a new machine:

### 1. Generate SSH Key

```bash
ssh-keygen -t ed25519 -C "github-key"
```

### 2. Add Public Key to Server

```bash
# On first connection, use password to deploy the key
ssh-copy-id root@8.146.205.102
# Or manually:
cat ~/.ssh/id_ed25519.pub | ssh root@8.146.205.102 "mkdir -p ~/.ssh && cat >> ~/.ssh/authorized_keys"
```

### 3. Verify Connection

```bash
ssh root@8.146.205.102 "ls /usr/ydj/chrome-extens-html/"
```

## Multi-Machine Workflow

```
Laptop A (Trae)
  ├── python3 deploy.py    →  Push to server
  └── git push              →  Push to GitHub
                                 |
                            GitHub
                                 |
                            git pull
                                 |
                            Laptop B (Trae)  →  python3 deploy.py
```

- **Each machine**: Run `deploy.py` to push local changes to the server
- **Sync between machines**: Use `git push` / `git pull` via GitHub

## File Structure

```
chrome-extens/         ← Static site content (what gets deployed)
  ├── index.html
  ├── css/
  ├── js/
  ├── assets/
  └── docs/
deploy.py              ← Deploy script
file-server.conf       ← Nginx configuration (reference)
```

## Server Details

| Item | Value |
|------|-------|
| IP | `8.146.205.102` |
| User | `root` |
| Web root | `/usr/ydj/chrome-extens-html/` |
| Domain | `extension.nextself.top` |
| Nginx config | `/etc/nginx/nginx.conf` |

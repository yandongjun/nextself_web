# 部署指南 — chrome-extens

## 概述

将 `chrome-extens/` 静态站点部署到生产服务器。

- **服务器**：8.146.205.102
- **目标路径**：`/usr/ydj/chrome-extens-html/`
- **域名**：https://extension.nextself.top
- **Nginx**：反向代理 + 静态文件服务（SSL 通过 Let's Encrypt）

## 一键部署

```bash
python3 deploy.py
```

自动同步 `chrome-extens/` 中变更的文件到服务器，并重载 Nginx。未变更的文件自动跳过。

## 环境要求

- Python 3 + `paramiko` 库（`pip install paramiko`）
- 已配置 SSH 密钥（首次配置一次即可，见下方）

## 首次配置

在新机器上**只需执行一次**的初始化步骤：

### 1. 生成 SSH 密钥

```bash
ssh-keygen -t ed25519 -C "github-key"
```

### 2. 将公钥添加到服务器

```bash
# 首次连接使用密码部署密钥
ssh-copy-id root@8.146.205.102
# 或手动添加：
cat ~/.ssh/id_ed25519.pub | ssh root@8.146.205.102 "mkdir -p ~/.ssh && cat >> ~/.ssh/authorized_keys"
```

### 3. 验证连接

```bash
ssh root@8.146.205.102 "ls /usr/ydj/chrome-extens-html/"
```

## 多机协作流程

```
笔记本A (Trae)
  ├── python3 deploy.py    →  部署到服务器
  └── git push              →  推送到 GitHub
                                 |
                            GitHub
                                 |
                            git pull
                                 |
                            笔记本B (Trae)  →  python3 deploy.py
```

- **每台机器**：执行 `python3 deploy.py` 将本地修改部署到服务器
- **机器间同步**：通过 GitHub 使用 `git push` / `git pull` 同步代码

## 文件结构

```
chrome-extens/         ← 静态站点内容（部署的目标目录）
  ├── index.html
  ├── css/
  ├── js/
  ├── assets/
  └── docs/
deploy.py              ← 部署脚本
file-server.conf       ← Nginx 配置（参考）
```

## 服务器信息

| 项目 | 值 |
|------|-----|
| IP 地址 | `8.146.205.102` |
| 登录用户 | `root` |
| 网站根目录 | `/usr/ydj/chrome-extens-html/` |
| 域名 | `extension.nextself.top` |
| Nginx 配置 | `/etc/nginx/nginx.conf` |

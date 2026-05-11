# AI Prompt Workspace

`AI Prompt Workspace` 是一个面向浏览器插件产品的静态官网项目，当前站点定位为：

- 右键保存 Prompt
- AI 自动分类与打标签
- 右键粘贴最近使用或置顶 Prompt
- 中英双语切换，默认英文

本项目是纯静态站点，不依赖前端框架构建流程；页面由 HTML + CSS + JavaScript + 图片/GIF 素材组成，适合直接部署到 GitHub Pages、Nginx、CDN 或任意静态服务器。

## 项目目录

```text
chrome-extens/
├── index.html
├── pricing.html
├── privacy.html
├── terms.html
├── refund.html
├── css/
│   └── style.css
├── js/
│   └── main.js
├── assets/
│   ├── icons/
│   ├── images/
│   └── screenshots/
└── docs/
    ├── install.html
    ├── faq.html
    └── changelog.html
```

## 页面说明

- `index.html`
  - 首页
  - 包含产品定位、功能、使用流程、真实演示、FAQ
- `pricing.html`
  - 定价页
  - 中英文价格可切换
  - 当前中文价格：`¥18 / 季`、`¥70 / 年`
- `privacy.html`
  - 隐私政策
- `terms.html`
  - 服务条款
- `refund.html`
  - 退款政策
- `docs/install.html`
  - 安装与快速上手
- `docs/faq.html`
  - 常见问题
- `docs/changelog.html`
  - 更新日志

## 本地启动

因为这是纯静态站点，本地只需要启动一个静态文件服务器即可。

### 方式一：Python

```powershell
cd d:\workspace\nextself_web\chrome-extens
python -m http.server 5173
```

访问：

- `http://localhost:5173/`

停止：

- 在终端按 `Ctrl + C`

### 方式二：Node

```powershell
cd d:\workspace\nextself_web\chrome-extens
npx http-server . -p 5173
```

或：

```powershell
npx serve -l 5173
```

### 方式三：VS Code

- 安装 `Live Server`
- 右键 `index.html`
- 选择 `Open with Live Server`

## 多语言机制

多语言逻辑在：

- `js/main.js`

实现方式：

- 使用前端字典对象管理 `en / zh`
- 通过 `data-i18n` 替换文案
- 通过 `data-lang="en"` / `data-lang="zh"` 控制中英文素材显示
- 默认英文
- 当前语言会优先写入本地存储；如果浏览器环境不支持本地存储，也不会影响切换

### 图片/GIF 语言切换规则

当前演示素材已接入：

- 英文后台：`assets/images/英文版管理后台png.png`
- 中文后台：`assets/images/中文管理后台.png`
- 英文保存流程：`assets/images/英文版保存.gif`
- 中文保存流程：`assets/images/中文版保存.gif`
- 英文右键呼出/复制：`assets/images/英文提示词复制和右键呼出.gif`
- 中文右键呼出/复制：`assets/images/中文提示词复制和右键呼出.gif`
- 通用删除动画：`assets/images/删除动画.gif`

规则：

- 英文模式展示英文素材
- 中文模式展示中文素材
- 通用素材在两种模式下都展示

## 支付接入（Paddle）

当前已在 `pricing.html` 接入 Paddle.js，并绑定两个套餐按钮：

- `quarterly`（季度）
- `yearly`（年度）

实现文件：

- `pricing.html`（引入 Paddle.js + 配置对象 + 订阅按钮）
- `js/billing.js`（初始化 Paddle 并拉起 Checkout）

### 你需要配置的参数

在 `pricing.html` 里找到：

```js
window.PADDLE_CONFIG = {
  environment: "sandbox",
  clientToken: "",
  prices: {
    quarterly: "",
    yearly: ""
  }
};
```

需要你提供并填入：

- `clientToken`
  - Paddle 前端 Token（测试环境通常以 `test_` 开头）
- `prices.quarterly`
  - 季度套餐对应的 Paddle `priceId`（通常形如 `pri_...`）
- `prices.yearly`
  - 年度套餐对应的 Paddle `priceId`

### 切到生产环境

测试完成后将：

- `environment: "sandbox"` 改为 `environment: "live"`
- 同时替换为生产 `clientToken` 与生产 `priceId`

### 说明

- 当前实现为前端拉起 Checkout（overlay 模式）
- 前端接入只能完成“发起支付”
- 如果你要做“开通会员/权限变更/订单校验”，还需要服务端 Webhook

## 对接支付还需要你提供什么

为完成完整收费闭环（不仅仅是打开支付窗），建议你再提供：

- Paddle 商户后台中的正式产品与价格配置
- Webhook 接收地址（后端 API）
- 业务侧用户标识方案（例如 userId/email）
- 支付成功后跳转页面（如 `/docs/install.html` 或 `/success.html`）
- 取消支付跳转页面（如 `/pricing.html`）

如果你需要，我可以下一步继续帮你：

- 增加 `success.html` / `cancel.html`
- 在 Checkout 里补充成功与取消跳转参数
- 设计一版后端 Webhook 验签与订阅状态落库的接口规范

## 当前支付联调状态

已完成：

- 前端接入 Paddle.js（`pricing.html` + `js/billing.js`）
- 按钮可拉起沙箱 Checkout（季度/年度各自 `priceId`）
- 支付流程页：
  - `success.html`（支付成功回跳）
  - `cancel.html`（取消支付回跳）
- 定价页增加支付状态提示与按钮 loading 态

## Webhook 对接清单（后端必做）

前端拉起支付只代表“可支付”，要真正开通会员，后端必须接 Paddle Webhook：

- 新建后端接口：`POST /api/paddle/webhook`
- 校验 Paddle 签名（拒绝未验签请求）
- 幂等处理事件（按事件 ID 去重，避免重复开通）
- 记录原始事件与处理结果（便于审计与排错）

建议至少处理的事件：

- `transaction.completed`
- `subscription.created`
- `subscription.updated`
- `subscription.canceled`
- `subscription.past_due`

建议落库字段：

- `user_id`（你系统内用户）
- `paddle_customer_id`
- `subscription_id`
- `price_id`
- `status`（active/canceled/past_due...）
- `current_period_end`
- `updated_at`

联调验收标准：

- 沙箱完成支付后，用户状态在后端变为已开通
- 取消/过期事件能正确回写用户权限
- 重放同一 webhook 事件不会重复发放权益

## 路径规范

本项目为了兼容 GitHub Pages 子路径部署，资源路径统一使用相对路径：

- 正确：`./assets/...`
- 正确：`../assets/...`
- 不建议：`/assets/...`

如果未来继续部署到 GitHub Pages、子目录站点、Nginx 子路径或 CDN 子目录，这个规范非常重要。

## 如何替换品牌信息

当前仍有一些占位信息需要替换：

- GitHub 地址：
  - `https://github.com/yourname/chrome-extens`
- Chrome Web Store 地址：
  - `https://chromewebstore.google.com/detail/your-extension-id`
- 联系邮箱：
  - `support@yourdomain.com`

建议在上线前统一全局替换。

## 如何部署到云服务器

因为本项目是静态站点，最推荐的云部署方式是：

- Linux 云服务器
- Nginx
- 域名 + HTTPS

下面给出一套最直接、最好维护的部署方案。

### 方案一：部署到 Linux + Nginx

适用平台：

- 阿里云 ECS
- 腾讯云 CVM
- 华为云 ECS
- AWS EC2
- Vultr / DigitalOcean

### 第一步：准备服务器

建议服务器环境：

- Ubuntu 22.04 LTS
- 已开放 `80` 和 `443` 端口
- 已解析域名到服务器公网 IP

### 第二步：安装 Nginx

```bash
sudo apt update
sudo apt install -y nginx
```

启动并设置开机自启：

```bash
sudo systemctl enable nginx
sudo systemctl start nginx
```

### 第三步：上传站点文件

把整个 `chrome-extens` 目录上传到服务器，例如：

```bash
/var/www/chrome-extens
```

如果你在本地用 `scp` 上传，可以这样：

```bash
scp -r d:/workspace/nextself_web/chrome-extens user@your-server-ip:/var/www/
```

如果在 Windows 上使用图形工具，也可以通过：

- WinSCP
- Xftp
- FileZilla

### 第四步：配置 Nginx

创建站点配置：

```bash
sudo nano /etc/nginx/sites-available/chrome-extens
```

写入：

```nginx
server {
    listen 80;
    server_name yourdomain.com www.yourdomain.com;

    root /var/www/chrome-extens;
    index index.html;

    location / {
        try_files $uri $uri/ =404;
    }

    location ~* \.(png|jpg|jpeg|gif|webp|svg|css|js)$ {
        expires 30d;
        add_header Cache-Control "public, max-age=2592000";
    }
}
```

启用配置：

```bash
sudo ln -s /etc/nginx/sites-available/chrome-extens /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
```

### 第五步：开启 HTTPS

安装 Certbot：

```bash
sudo apt install -y certbot python3-certbot-nginx
```

申请证书：

```bash
sudo certbot --nginx -d yourdomain.com -d www.yourdomain.com
```

完成后，站点就会自动切到 HTTPS。

## 如果要部署到子路径

例如你要部署成：

- `https://yourdomain.com/chrome-extens/`

建议两种方式二选一：

### 方式 A：把 `chrome-extens` 作为独立站点根目录

最简单，不需要改结构。

### 方式 B：Nginx 配置子路径

例如：

```nginx
location /chrome-extens/ {
    alias /var/www/chrome-extens/;
    index index.html;
}
```

因为项目资源已经使用相对路径，所以通常可以正常工作。

## 如何部署到 GitHub Pages

如果你不想买服务器，也可以直接部署到 GitHub Pages。

### 做法

1. 把 `chrome-extens` 内容推送到仓库
2. 打开 GitHub 仓库设置
3. 进入 `Pages`
4. 选择部署来源：
   - `Deploy from a branch`
5. 选择正确目录

注意：

- GitHub Pages 最好让 `index.html` 位于发布目录根部
- 所有资源路径必须保持相对路径

## 推荐上线方式

如果你希望：

- 最稳
- 最容易接域名
- 最容易加 HTTPS
- 后续可以接日志、反向代理、后端接口

推荐直接使用：

- 云服务器 + Nginx

如果你希望：

- 免费
- 快速上线
- 纯静态展示

推荐使用：

- GitHub Pages

## 上线前检查清单

- 替换所有占位链接与邮箱
- 检查中英文切换是否正常
- 检查 GIF 素材在中英文模式下是否匹配
- 检查 `pricing.html` 中文价格是否正确
- 检查移动端菜单是否正常
- 检查 `privacy / terms / refund` 内容是否符合你的真实业务
- 检查 HTTPS 是否可用
- 检查域名解析是否生效

## 后续建议

下一步可以继续完善：

- 增加 `README` 中的发布脚本
- 增加 `package.json`，统一用 `npm run dev`
- 增加自动部署脚本
- 增加 Nginx 缓存与 gzip 配置
- 增加埋点与访问统计

如果你愿意，我下一步可以继续帮你做两件事里的一个：

- 给这个项目补一个 `package.json`，以后统一 `npm run dev`
- 直接再给你生成一份 `Nginx 部署配置文件` 和 `上线操作清单`

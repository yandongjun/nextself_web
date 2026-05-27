(() => {
  const qs = (s, el = document) => el.querySelector(s);
  const qsa = (s, el = document) => Array.from(el.querySelectorAll(s));

  const DICT = {
    en: {
      common: {
        skip: 'Skip to content',
        brandTag: 'Right‑click prompt library',
        nav: {
          features: 'Features',
          pricing: 'Pricing',
          docs: 'Docs',
          privacy: 'Privacy',
          github: 'GitHub',
          install: 'Download',
          ctaPricing: 'See pricing',
          ctaFeatures: 'See features',
          ctaInstall: 'Chrome Web Store',
          openMenu: 'Open menu',
        },
        footer: {
          product: 'Product',
          legal: 'Legal',
          contact: 'Contact',
        },
        lang: {
          toZh: '中文',
          toEn: 'EN',
        },
      },
      index: {
        title: 'AI Prompt Workspace — Save & paste prompts by right‑click',
        desc: 'Right‑click to save prompts. AI auto tags and categorizes. Right‑click to paste recent or pinned prompts into any input.',
        hero: {
          badge: 'Right‑click save · AI auto tag · Right‑click paste',
          subhead:
            'Save prompts instantly from your browser. AI automatically categorizes and tags them. When you need them, right‑click to paste recent or pinned prompts anywhere.',
          ctaInstall: 'Install from Store',
          ctaFeatures: 'See features',
          note: 'Core: Right‑click save · AI auto tag · Recent & Pinned · Right‑click paste',
          kpi1t: 'Save from right‑click',
          kpi1d: 'Highlight text or use the page context menu to save prompts in seconds.',
          kpi2t: 'AI auto categorize & tag',
          kpi2d: 'No manual organization. AI keeps your library clean and searchable.',
          kpi3t: 'Right‑click paste',
          kpi3d: 'Paste recent or pinned prompts directly into the current input box.',
        },
        pain: {
          title: 'Where are your prompts today?',
          desc: 'Prompts scattered across chats and notes cost you time every day.',
          c1t: 'Scattered',
          c1d: 'Chat apps, docs, notes — multiple versions everywhere.',
          c2t: 'Hard to find',
          c2d: 'When you need it, you can’t find the right one fast enough.',
          c3t: 'Hard to reuse',
          c3d: 'Copy‑paste and re‑edit over and over. Nothing compounds.',
        },
        features: {
          title: 'Key features',
          desc: 'Built around a simple loop: save → auto organize → paste.',
          f1t: 'Right‑click Save',
          f1d: 'Save selected text or a prepared prompt from the browser context menu.',
          f2t: 'AI Tagging',
          f2d: 'AI adds tags and categories automatically so you don’t have to.',
          f3t: 'Recent & Pinned',
          f3d: 'Keep a short list for daily use and pin your must‑have prompts.',
          f4t: 'Right‑click Paste',
          f4d: 'Paste directly into the current input — faster than switching tabs.',
          f5t: 'Search & Filter',
          f5d: 'Quickly find prompts by tags, categories, and keywords.',
          f6t: 'Works anywhere',
          f6d: 'Use it across common AI chat sites and web apps (as supported).',
        },
        flow: {
          title: 'How it works',
          desc: 'A frictionless prompt workflow inside your browser.',
          s1t: 'Right‑click save',
          s1d: 'Save from any page or selection without leaving your work.',
          s2t: 'AI organizes',
          s2d: 'Automatic categories and tags keep your library tidy.',
          s3t: 'Pick recent or pinned',
          s3d: 'From the context menu, choose what you want to use right now.',
          s4t: 'Paste into input',
          s4d: 'Insert the prompt where you’re typing and continue immediately.',
        },
        shots: {
          title: 'Live product demo',
          desc: 'Real screenshots and GIF demos from the actual workflow.',
          a: 'Admin dashboard',
          b: 'Save prompt by right‑click',
          c: 'Open and copy from context menu',
          d: 'Delete and keep the library clean',
          note: 'All media below comes from real captures placed in ./assets/images/.',
        },
        faq: {
          title: 'FAQ',
          desc: 'Pricing, language, data, and compatibility — answered.',
          q1: 'How much does it cost?',
          a1: 'Quarterly: $9.9. Yearly: $36. Details on the pricing page.',
          q2: 'Is it bilingual (EN/中文)?',
          a2: 'Yes. You can switch between English and Chinese in the top bar. Default is English.',
          q3: 'Does it support my AI site?',
          a3: 'The goal is to work wherever you type. Compatibility depends on the site and is continuously improved.',
          q4: 'Is my data stored locally?',
          a4: 'By default, prompts are stored locally in your browser. See the privacy policy for details.',
        },
      },
      pricing: {
        title: 'Pricing — AI Prompt Workspace',
        desc: 'Quarterly $9.9 or yearly $36. Simple pricing for right‑click prompt workflows.',
        badge: 'Simple pricing',
        h1: 'Pricing',
        sub: 'One product, two plans. Choose quarterly or save with yearly.',
        qName: 'Quarterly',
        yName: 'Yearly',
        qPrice: '$9.9',
        qUnit: 'Quarter',
        yPrice: '$36',
        yUnit: 'Year',
        yTag: 'Best value',
        item1: 'Right‑click save prompts',
        item2: 'AI auto categorize & tag',
        item3: 'Right‑click paste (recent & pinned)',
        item4: 'Bilingual (EN/中文)',
        btn: 'Install Extension',
        note: 'Prices are in USD. Billing handled by your payment provider.',
        checkoutSuccess: 'Payment completed. Your subscription status is updating. Please return to the extension and refresh the account panel.',
        checkoutCancel: 'Payment was canceled. You can choose a plan and try again anytime.',
        payQuarter: 'Subscribe Quarterly',
        payYear: 'Subscribe Yearly',
        payProcessing: 'Processing...',
        payReady: 'Ready to checkout. Complete payment in the popup window.',
        payNeedLogin: 'Please log in to continue checkout.',
        payEmailPrompt: 'Enter your account email',
        payPasswordPrompt: 'Enter your account password',
        payCanceled: 'Checkout canceled by user.',
        payNotReady: 'Billing service is not ready. Please try again later.',
        payFailed: 'Checkout failed. Please try again.',
        payBoundAccount: 'Checkout is bound to account: {email}',
        payNeedToken: 'Open this pricing page from the extension account panel. Direct access is not allowed for checkout.',
        payTokenExpired: 'Your checkout session is invalid or expired. Please return to the extension and start again.',
        payCheckoutErrorDetail: 'Checkout error: {detail}',
        payGuidePrompt: 'Download the extension first, then sign in inside the extension to bind your subscription before checkout.',
        guideTitle: 'Download the extension first, then sign in inside the extension to bind your subscription.',
        guideInstall: 'Open Chrome Web Store',
        guideDocs: 'View Install Guide',
        providerLabel: 'Payment channel',
        providerAuto: 'Auto',
        providerPaddle: 'Paddle',
        providerCreem: 'Creem',
        providerSwitched: 'Payment channel switched: {from} → {to}',
      },
      docsInstall: {
        title: 'Install — AI Prompt Workspace Docs',
        desc: 'Install from the Chrome Web Store or download the ZIP package from our site.',
        h1: 'Install & download',
        sub: 'Use the official Chrome Web Store for one-click install, or download the ZIP package for manual loading.',
        s1t: 'Recommended: Chrome Web Store',
        s1a: 'Open the official Chrome Web Store page',
        s1b: 'Click “Add to Chrome”',
        s1c: 'Pin the extension to the toolbar if needed',
        open: 'View download options',
        s2t: 'First use',
        s2a: 'Select text → right‑click → Save as Prompt',
        s2b: 'AI auto categorizes and tags it',
        s2c: 'In any input: right‑click → Paste recent or pinned prompt',
        s2d: 'Keep your daily prompts pinned',
        indexTitle: 'Docs index',
        indexDesc: 'Keep docs organized under /docs for future expansion.',
        cardInstallDesc: 'Install & quick start',
        cardFaqDesc: 'Common questions',
        cardChangelogDesc: 'Release notes',
        demoTitle: 'Demo walkthrough',
        demoDesc: 'Use real screenshots and GIFs to show what users will see after installation.',
        footerDesc: 'Extend docs with shortcuts, templates, and troubleshooting as you grow.',
      },
      download: {
        title: 'Download — AI Prompt Workspace',
        desc: 'Choose between direct ZIP download and the official Chrome Web Store page.',
        badge: 'Download options',
        h1: 'Download AI Prompt Workspace',
        sub: 'Choose the path that fits your use case: direct ZIP download for manual loading, or the official Chrome Web Store page for standard installation.',
        cardZipTitle: 'Direct ZIP download',
        cardZipDesc: 'Download the packaged extension file from our website. Use this if you want to unpack it manually and load it through chrome://extensions.',
        cardZipBtn: 'Download ZIP package',
        cardStoreTitle: 'Chrome Web Store',
        cardStoreDesc: 'Open the official store listing and install the extension through Chrome’s standard flow.',
        cardStoreBtn: 'Open Chrome Web Store',
        noteTitle: 'What is the difference?',
        noteZip: 'ZIP download: unzip it locally, then enable Developer mode and use Load unpacked in chrome://extensions.',
        noteStore: 'Chrome Web Store: recommended for most users because installation and updates are handled by Chrome.',
      },
      docsFaq: {
        title: 'FAQ — AI Prompt Workspace Docs',
        desc: 'Pricing, bilingual, storage, and troubleshooting.',
        h1: 'FAQ',
        sub: 'Pricing, language, storage, and troubleshooting — answered.',
        q1: 'How much does it cost?',
        a1: 'Quarterly: $9.9. Yearly: $36. See the pricing page.',
        q2: 'Is it bilingual (EN/中文)?',
        a2: 'Yes. Switch languages in the top bar. Default is English.',
        q3: 'Is my data stored locally?',
        a3: 'By default, prompts are stored locally in your browser. See the privacy policy for details.',
        q4: 'Does it work on my site?',
        a4: 'Compatibility depends on the site and is continuously improved.',
        q5: 'Nothing shows up after install — what to do?',
        a5: 'Try: restart Chrome, ensure the extension is enabled, pin it to the toolbar, and check enterprise policies.',
        q6: 'Why can’t I find my saved prompt?',
        a6: 'If you use multiple devices, make sure you’re using the same browser profile. Local data does not automatically sync across devices unless you build a sync feature.',
        footerDesc: 'Keep FAQ up to date to reduce support load and build trust.',
      },
      docsChangelog: {
        title: 'Changelog — AI Prompt Workspace Docs',
        desc: 'Product updates and improvements.',
        h1: 'Changelog',
        sub: 'Release notes that build trust over time.',
        init1: 'Initialized the marketing site and docs structure.',
        init2: 'Updated copy to focus on right‑click save/paste, AI auto tagging, and bilingual support.',
        templateTitle: 'Template',
        footerDesc: 'Keep changelog updated — especially for browser extensions.',
      },
      legal: {
        privacyTitle: 'Privacy Policy — AI Prompt Workspace',
        termsTitle: 'Terms of Service — AI Prompt Workspace',
        refundTitle: 'Refund Policy — AI Prompt Workspace',
      },
    },
    zh: {
      common: {
        skip: '跳到主要内容',
        brandTag: '右键提示词资产库',
        nav: {
          features: '功能',
          pricing: '定价',
          docs: '文档',
          privacy: '隐私',
          github: 'GitHub',
          install: '下载插件',
          ctaPricing: '查看定价',
          ctaFeatures: '查看功能',
          ctaInstall: 'Chrome 商店',
          openMenu: '打开菜单',
        },
        footer: {
          product: '产品',
          legal: '法律',
          contact: '联系',
        },
        lang: {
          toZh: '中文',
          toEn: 'EN',
        },
      },
      index: {
        title: 'AI Prompt Workspace — 右键保存与右键粘贴提示词',
        desc: '右键保存 Prompt，AI 自动分类打标签。使用时右键粘贴最近使用或置顶提示词到任意输入框。',
        hero: {
          badge: '右键保存 · AI 自动分类打标签 · 右键粘贴',
          subhead:
            '在浏览器里一键沉淀 Prompt：右键保存，AI 自动分类与打标签。需要使用时，右键直接粘贴最近使用或置顶提示词到当前输入框。',
          ctaInstall: '从商店安装',
          ctaFeatures: '查看功能',
          note: '核心：右键保存 · AI 自动打标签 · 最近使用/置顶 · 右键粘贴',
          kpi1t: '右键保存',
          kpi1d: '选中文本或在页面右键菜单中快速保存提示词。',
          kpi2t: 'AI 自动分类打标签',
          kpi2d: '不用手动整理，AI 帮你把 Prompt 库变得清晰可找。',
          kpi3t: '右键粘贴',
          kpi3d: '直接把最近使用或置顶提示词粘贴到当前输入框。',
        },
        pain: {
          title: '你的 Prompt 现在分散在哪里？',
          desc: 'Prompt 分散在各处的成本不是“写”，而是“找不到”和“复用不了”。',
          c1t: '分散',
          c1d: '聊天窗口、文档、备忘录……到处都是不同版本。',
          c2t: '难找',
          c2d: '需要的时候搜不到，工作流被频繁打断。',
          c3t: '难复用',
          c3d: '反复复制粘贴再改，长期积累变成碎片。',
        },
        features: {
          title: '核心功能',
          desc: '围绕一个简单闭环：保存 → 自动整理 → 粘贴使用。',
          f1t: '右键保存',
          f1d: '通过右键菜单保存选中文本或准备好的 Prompt。',
          f2t: 'AI 自动打标签',
          f2d: 'AI 自动补全分类与标签，减少整理成本。',
          f3t: '最近使用 / 置顶',
          f3d: '把常用 Prompt 放进“最近使用”，并置顶关键模板。',
          f4t: '右键粘贴',
          f4d: '在当前输入框右键直接粘贴，减少切换与复制。',
          f5t: '搜索与筛选',
          f5d: '通过标签、分类与关键词快速找到正确模板。',
          f6t: '尽量全场景可用',
          f6d: '在常见 AI 站点与 Web 应用中使用（以实际兼容为准）。',
        },
        flow: {
          title: '使用流程',
          desc: '把 Prompt 工作流内嵌到浏览器里，尽可能少打断。',
          s1t: '右键保存',
          s1d: '在任意页面快速沉淀，不离开当前工作。',
          s2t: 'AI 自动整理',
          s2d: '自动分类与打标签，让 Prompt 库保持干净。',
          s3t: '选择最近/置顶',
          s3d: '从右键菜单直接选择要用的 Prompt。',
          s4t: '粘贴到输入框',
          s4d: '插入到你正在输入的位置，继续工作流。',
        },
        shots: {
          title: '真实演示',
          desc: '使用真实截图与 GIF 展示产品的核心工作流。',
          a: '管理后台',
          b: '右键保存 Prompt',
          c: '右键呼出并复制',
          d: '删除与清理',
          note: '下方媒体均来自你放入 ./assets/images/ 的真实演示素材。',
        },
        faq: {
          title: 'FAQ',
          desc: '价格、语言、数据与兼容性，一次讲清楚。',
          q1: '怎么收费？',
          a1: '按订阅收费：季度 $9.9；年付 $36。详见定价页。',
          q2: '是否支持中英双语切换？',
          a2: '支持。可在顶部导航切换语言，默认英语。',
          q3: '是否支持我的 AI 网站？',
          a3: '目标是“能输入的地方就能用”。不同站点兼容性会持续改进。',
          q4: '数据是否本地存储？',
          a4: '默认优先本地存储。详细说明见隐私政策。',
        },
      },
      pricing: {
        title: '定价 — AI Prompt Workspace',
        desc: '季度订阅 ¥18，年度订阅 ¥70。简单清晰的右键 Prompt 工作流定价。',
        badge: '简单定价',
        h1: '定价',
        sub: '一个产品，两种订阅：季度付费或年付更省。',
        qName: '季度订阅',
        yName: '年度订阅',
        qPrice: '¥18',
        qUnit: '季',
        yPrice: '¥70',
        yUnit: '年',
        yTag: '更划算',
        item1: '右键保存 Prompt',
        item2: 'AI 自动分类打标签',
        item3: '右键粘贴（最近使用/置顶）',
        item4: '中英双语（EN/中文）',
        btn: '安装插件',
        note: '中文版价格以人民币展示：每季 18 元，每年 70 元。账单与付款由支付平台处理。',
        checkoutSuccess: '支付已完成，订阅状态正在更新。请返回插件账号面板刷新查看。',
        checkoutCancel: '你已取消本次支付，可随时重新选择套餐继续。',
        payQuarter: '订阅季度版',
        payYear: '订阅年度版',
        payProcessing: '处理中...',
        payReady: '已拉起支付，请在弹窗中完成付款。',
        payNeedLogin: '请先登录账号再进行支付。',
        payEmailPrompt: '请输入账号邮箱',
        payPasswordPrompt: '请输入账号密码',
        payCanceled: '你已取消本次支付。',
        payNotReady: '支付服务暂未就绪，请稍后重试。',
        payFailed: '发起支付失败，请稍后重试。',
        payBoundAccount: '当前支付将绑定到账户：{email}',
        payNeedToken: '请从扩展的账户面板进入支付页，不能直接在网页发起结算。',
        payTokenExpired: '当前支付会话无效或已过期，请返回扩展重新发起。',
        payCheckoutErrorDetail: '支付错误：{detail}',
        payGuidePrompt: '请先下载并安装插件，并在插件内注册或登录账号，再进行订阅绑定和支付。',
        guideTitle: '请先下载并安装插件，并在插件内注册或登录账号，再绑定订阅并支付。',
        guideInstall: '打开 Chrome 商店',
        guideDocs: '查看安装说明',
        providerLabel: '支付通道',
        providerAuto: '自动',
        providerPaddle: 'Paddle',
        providerCreem: 'Creem',
        providerSwitched: '已自动切换支付通道：{from} → {to}',
      },
      docsInstall: {
        title: '安装 — AI Prompt Workspace 文档',
        desc: '可通过 Chrome 商店安装，也可从官网下载安装包。',
        h1: '安装与下载',
        sub: '推荐使用 Chrome 商店一键安装；如需手动加载，也可以下载 ZIP 安装包。',
        s1t: '推荐方式：Chrome 商店',
        s1a: '打开官方 Chrome Web Store 页面',
        s1b: '点击“添加至 Chrome”',
        s1c: '如有需要，可将插件固定到工具栏',
        open: '查看下载方式',
        s2t: '首次使用',
        s2a: '选中文本 → 右键 → 保存为 Prompt',
        s2b: 'AI 自动分类并打标签',
        s2c: '在任意输入框：右键 → 粘贴最近/置顶 Prompt',
        s2d: '把常用 Prompt 置顶，形成固定工作流',
        indexTitle: '文档索引',
        indexDesc: '后续扩展到多产品体系时，把每个产品的 docs 放在对应目录即可。',
        cardInstallDesc: '安装与上手指南',
        cardFaqDesc: '常见问题与排错',
        cardChangelogDesc: '版本更新记录',
        demoTitle: '操作演示',
        demoDesc: '通过真实截图与 GIF，让用户一眼看懂安装后的使用方式。',
        footerDesc: '如果你需要补充快捷键、模板规范或权限说明，建议继续扩展 docs 目录。',
      },
      download: {
        title: '下载 — AI Prompt Workspace',
        desc: '在官网 ZIP 下载和 Chrome Web Store 官方页面之间选择一种方式。',
        badge: '下载方式',
        h1: '下载 AI Prompt Workspace',
        sub: '按你的使用场景选择路径：直接下载 ZIP 适合手动加载，Chrome 商店适合标准安装。',
        cardZipTitle: '直接下载 ZIP',
        cardZipDesc: '从官网下载安装包。适合你手动解压后，通过 chrome://extensions 自行加载已解压插件。',
        cardZipBtn: '下载 ZIP 安装包',
        cardStoreTitle: 'Chrome Web Store',
        cardStoreDesc: '打开官方商店页面，通过 Chrome 的标准流程安装插件。',
        cardStoreBtn: '打开 Chrome 商店',
        noteTitle: '两种方式有什么区别？',
        noteZip: 'ZIP 下载：需要先在本地解压，再到 chrome://extensions 开启开发者模式并使用“加载已解压的扩展程序”。',
        noteStore: 'Chrome 商店：更适合大多数用户，安装和后续更新都由 Chrome 统一处理。',
      },
      docsFaq: {
        title: 'FAQ — AI Prompt Workspace 文档',
        desc: '价格、双语、存储与排错。',
        h1: 'FAQ',
        sub: '把最关键的不确定性一次讲清楚：价格、语言、数据与排错。',
        q1: '怎么收费？',
        a1: '按订阅收费：季度 $9.9；年付 $36。详见定价页。',
        q2: '是否支持中英双语切换？',
        a2: '支持。可在顶部导航切换语言，默认英语。',
        q3: '数据是否本地存储？',
        a3: '默认优先使用浏览器本地存储。详见隐私政策。',
        q4: '是否支持我的网站？',
        a4: '不同站点兼容性会持续改进，建议以更新日志与安装说明为准。',
        q5: '安装后没有出现？',
        a5: '可尝试：重启浏览器、确认已启用、固定到工具栏、检查企业策略限制。',
        q6: '为什么找不到我保存的 Prompt？',
        a6: '若你在多设备使用，本地数据不会自动同步；请确认使用的是同一浏览器配置文件，或后续接入同步能力。',
        footerDesc: '把常见问题留在文档里，减少客服成本，也让审核更顺畅。',
      },
      docsChangelog: {
        title: '更新日志 — AI Prompt Workspace 文档',
        desc: '产品更新与改进记录。',
        h1: '更新日志',
        sub: '用更新日志持续建立信任：告诉用户你在修什么、加什么、为什么加。',
        init1: '初始化产品官网与文档站结构。',
        init2: '更新文案：右键保存/右键粘贴、AI 自动分类打标签与中英双语。',
        templateTitle: '模板（可复制）',
        footerDesc: '更新日志建议长期维护，尤其对 AI 工具和浏览器插件更重要。',
      },
      legal: {
        privacyTitle: '隐私政策 — AI Prompt Workspace',
        termsTitle: '服务条款 — AI Prompt Workspace',
        refundTitle: '退款政策 — AI Prompt Workspace',
      },
    },
  };

  const storageGet = (key) => {
    try {
      return localStorage.getItem(key);
    } catch {
      return null;
    }
  };
  const storageSet = (key, value) => {
    try {
      localStorage.setItem(key, value);
    } catch {
      return;
    }
  };

  const getLang = () => {
    const v = storageGet('apw_lang');
    return v === 'zh' ? 'zh' : 'en';
  };
  const setLang = (lang) => {
    storageSet('apw_lang', lang);
  };
  const t = (lang, key) => {
    const parts = key.split('.');
    let cur = DICT[lang];
    for (const p of parts) {
      if (!cur || typeof cur !== 'object') return '';
      cur = cur[p];
    }
    return typeof cur === 'string' ? cur : '';
  };

  const formatText = (lang, key, vars = {}) => {
    const raw = t(lang, key);
    return String(raw || '').replace(/\{(\w+)\}/g, (_, name) => String(vars[name] ?? ''));
  };

  const applyLang = (lang) => {
    document.documentElement.setAttribute('lang', lang === 'zh' ? 'zh-CN' : 'en');

    qsa('[data-lang]').forEach((el) => {
      el.hidden = el.getAttribute('data-lang') !== lang;
    });

    qsa('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n');
      const val = key ? t(lang, key) : '';
      if (val) el.textContent = val;
    });

    qsa('[data-i18n-html]').forEach((el) => {
      const key = el.getAttribute('data-i18n-html');
      const val = key ? t(lang, key) : '';
      if (val) el.innerHTML = val;
    });

    qsa('[data-i18n-content]').forEach((el) => {
      const key = el.getAttribute('data-i18n-content');
      const val = key ? t(lang, key) : '';
      if (val) el.setAttribute('content', val);
    });

    const page = document.body && document.body.getAttribute('data-page');
    if (page) {
      const titleKey = `${page}.title`;
      const metaKey = `${page}.desc`;
      const pageTitle = t(lang, titleKey);
      if (pageTitle) document.title = pageTitle;
      const meta = qs('meta[name="description"]');
      const metaDesc = t(lang, metaKey);
      if (meta && metaDesc) meta.setAttribute('content', metaDesc);
    }

    const toggleBtns = qsa('[data-lang-toggle]');
    toggleBtns.forEach((btn) => {
      btn.textContent = lang === 'zh' ? t(lang, 'common.lang.toEn') : t(lang, 'common.lang.toZh');
      btn.setAttribute('aria-label', lang === 'zh' ? 'Switch to English' : '切换到中文');
    });

    renderCheckoutNotice(lang);
    renderBillingProviderSelector(lang);
  };

  const renderCheckoutNotice = (lang) => {
    const page = document.body && document.body.getAttribute('data-page');
    if (page !== 'pricing') return;
    const old = qs('[data-checkout-notice]');
    if (old) old.remove();
    const params = new URLSearchParams(window.location.search || '');
    const checkout = (params.get('checkout') || '').trim().toLowerCase();
    if (checkout !== 'success' && checkout !== 'cancel') return;
    const key = checkout === 'success' ? 'pricing.checkoutSuccess' : 'pricing.checkoutCancel';
    const text = t(lang, key);
    if (!text) return;
    const container = qs('.pageHeader .container') || qs('main .container');
    if (!container) return;
    const box = document.createElement('div');
    box.className = 'notice';
    box.setAttribute('data-checkout-notice', checkout);
    box.style.marginTop = '12px';
    box.style.borderColor = checkout === 'success' ? '#16a34a' : '#f59e0b';
    box.textContent = text;
    container.appendChild(box);
  };

  const API_BASE = (() => {
    const params = new URLSearchParams(window.location.search || '');
    const fromQuery = (params.get('api_base') || '').trim();
    if (fromQuery) return fromQuery.replace(/\/+$/, '');
    return 'https://api.nextself.top';
  })();
  const BILLING_TOKEN = (() => {
    const params = new URLSearchParams(window.location.search || '');
    return (params.get('billing_token') || '').trim();
  })();

  const LOCAL_DEBUG_HOSTS = new Set(['127.0.0.1', 'localhost']);
  const normalizeBillingProvider = (value) => {
    const raw = String(value || '').trim().toLowerCase();
    if (raw === 'paddle' || raw === 'creem') return raw;
    return 'auto';
  };
  const getQueryBillingProvider = () => {
    const params = new URLSearchParams(window.location.search || '');
    const fromQuery = normalizeBillingProvider(params.get('provider'));
    return fromQuery !== 'auto' ? fromQuery : '';
  };
  let billingProviderSelection = '';
  let billingProvidersInfo = null;
  const getBillingProvider = () => {
    if (billingProviderSelection) return billingProviderSelection;
    const fromQuery = getQueryBillingProvider();
    if (fromQuery) return fromQuery;
    const fromServer = normalizeBillingProvider(billingProvidersInfo && billingProvidersInfo.default_provider);
    return fromServer !== 'auto' ? fromServer : 'creem';
  };
  const setBillingProvider = (value) => {
    billingProviderSelection = normalizeBillingProvider(value);
  };
  const shouldOmitPaddleCancelUrl = () => {
    const params = new URLSearchParams(window.location.search || '');
    const raw = String(params.get('omit_paddle_cancel_url') || '').trim().toLowerCase();
    if (raw === '1' || raw === 'true' || raw === 'yes') return true;
    return LOCAL_DEBUG_HOSTS.has(String(window.location.hostname || '').trim().toLowerCase());
  };

  let billingSessionInfo = null;

  const callApi = async (path, options = {}) => {
    const headers = Object.assign(
      { 'Content-Type': 'application/json' },
      options.headers || {}
    );
    const res = await fetch(`${API_BASE}${path}`, {
      method: options.method || 'GET',
      headers,
      body: options.body ? JSON.stringify(options.body) : undefined,
    });
    let data = null;
    try {
      data = await res.json();
    } catch {
      data = null;
    }
    if (!res.ok) {
      const message = (data && (data.message || data.error)) || `HTTP_${res.status}`;
      const err = new Error(message);
      err.status = res.status;
      err.payload = data;
      throw err;
    }
    return data || {};
  };

  const setPayButtonsBusy = (busy, lang) => {
    qsa('[data-pay-cycle]').forEach((btn) => {
      const el = btn;
      if (!(el instanceof HTMLButtonElement)) return;
      if (busy) {
        if (!el.dataset.rawText) el.dataset.rawText = el.textContent || '';
        el.disabled = true;
        el.textContent = t(lang, 'pricing.payProcessing');
      } else {
        el.disabled = false;
        if (el.dataset.rawText) el.textContent = el.dataset.rawText;
      }
    });
  };

  const setPayButtonsEnabled = (enabled) => {
    qsa('[data-pay-cycle]').forEach((btn) => {
      if (btn instanceof HTMLButtonElement) btn.disabled = !enabled;
    });
  };

  const showPayNotice = (lang, text, tone) => {
    const page = document.body && document.body.getAttribute('data-page');
    if (page !== 'pricing') return;
    const container = qs('.pageHeader .container') || qs('main .container');
    if (!container) return;
    const old = qs('[data-pay-notice]');
    if (old) old.remove();
    const box = document.createElement('div');
    box.className = 'notice';
    box.setAttribute('data-pay-notice', '1');
    box.style.marginTop = '12px';
    if (tone === 'error') box.style.borderColor = '#ef4444';
    if (tone === 'warn') box.style.borderColor = '#f59e0b';
    if (tone === 'ok') box.style.borderColor = '#16a34a';
    box.textContent = text;
    container.appendChild(box);
  };

  const renderBillingAccount = (lang) => {
    const box = qs('[data-billing-account]');
    if (!box) return;
    const email = String(billingSessionInfo && billingSessionInfo.user && billingSessionInfo.user.email || '').trim();
    if (!email) {
      box.hidden = true;
      box.textContent = '';
      return;
    }
    box.hidden = false;
    box.textContent = formatText(lang, 'pricing.payBoundAccount', { email });
  };

  const renderBillingGuide = (lang, visible) => {
    const box = qs('[data-billing-guide]');
    if (!box) return;
    box.hidden = !visible;
    if (visible) {
      const title = qs('[data-i18n="pricing.guideTitle"]', box);
      if (title) title.textContent = t(lang, 'pricing.guideTitle');
    }
  };

  const renderBillingProviderSelector = (lang) => {
    const page = document.body && document.body.getAttribute('data-page');
    if (page !== 'pricing') return;
    const sel = qs('[data-billing-provider]');
    if (!(sel instanceof HTMLSelectElement)) return;
    const textKey = { auto: 'pricing.providerAuto', paddle: 'pricing.providerPaddle', creem: 'pricing.providerCreem' };
    Array.from(sel.options || []).forEach((opt) => {
      const key = textKey[String(opt.value || '').trim().toLowerCase()] || '';
      if (key) opt.textContent = t(lang, key);
    });
    sel.value = getBillingProvider();
    if (!sel.dataset.bound) {
      sel.dataset.bound = '1';
      sel.addEventListener('change', () => {
        setBillingProvider(sel.value);
      });
    }
  };

  const loadBillingProviders = async () => {
    const page = document.body && document.body.getAttribute('data-page');
    if (page !== 'pricing') return;
    try {
      billingProvidersInfo = await callApi('/api/billing/providers', { method: 'GET' });
    } catch {
      billingProvidersInfo = null;
    }
    renderBillingProviderSelector(getLang());
  };

  const loadBillingSession = async (lang) => {
    if (!BILLING_TOKEN) {
      billingSessionInfo = null;
      renderBillingAccount(lang);
      renderBillingGuide(lang, true);
      setPayButtonsEnabled(true);
      return false;
    }
    try {
      billingSessionInfo = await callApi(`/api/billing/session?billing_token=${encodeURIComponent(BILLING_TOKEN)}`, {
        method: 'GET',
      });
      renderBillingAccount(lang);
      renderBillingGuide(lang, false);
      setPayButtonsEnabled(true);
      return true;
    } catch {
      billingSessionInfo = null;
      renderBillingAccount(lang);
      renderBillingGuide(lang, true);
      setPayButtonsEnabled(true);
      showPayNotice(lang, t(lang, 'pricing.payTokenExpired'), 'warn');
      return false;
    }
  };

  const startCheckout = async (cycle, lang) => {
    if (!BILLING_TOKEN) {
      renderBillingGuide(lang, true);
      showPayNotice(lang, t(lang, 'pricing.payGuidePrompt'), 'warn');
      return;
    }
    setPayButtonsBusy(true, lang);
    try {
      if (!billingSessionInfo) {
        const ok = await loadBillingSession(lang);
        if (!ok) return;
      }
      const sel = qs('[data-billing-provider]');
      const preferred = normalizeBillingProvider(sel && sel.value);
      setBillingProvider(preferred);
      try {
        console.info('[BILLING_CHECKOUT_REQUEST]', {
          cycle,
          preferred,
          selected: sel && sel.value ? String(sel.value) : '',
          billingTokenPrefix: BILLING_TOKEN ? String(BILLING_TOKEN).slice(0, 12) : '',
        });
      } catch {
        // noop
      }
      const data = await callApi('/api/billing/checkout', {
        method: 'POST',
        body: {
          cycle,
          billing_token: BILLING_TOKEN,
          provider: preferred,
          omit_paddle_cancel_url: shouldOmitPaddleCancelUrl(),
        },
      });
      const used = normalizeBillingProvider(data.provider_used || data.provider);
      try {
        console.info('[BILLING_CHECKOUT_RESPONSE]', {
          preferred,
          used,
          fallbackUsed: !!data.fallback_used,
          action: data.action || '',
          provider: data.provider || '',
          checkoutUrl: data.checkout_url ? String(data.checkout_url).slice(0, 80) : '',
          tokenPrefix: data.token ? String(data.token).slice(0, 12) : '',
          priceId: data.checkout && data.checkout.items && data.checkout.items[0] ? data.checkout.items[0].priceId : '',
        });
      } catch {
        // noop
      }
      if (preferred !== 'auto' && used !== preferred) {
        showPayNotice(lang, `Payment channel mismatch: selected ${preferred}, actual ${used}. Please refresh and retry.`, 'error');
        try {
          console.error('[BILLING_PROVIDER_MISMATCH]', { preferred, used, data });
        } catch {
          // noop
        }
        return;
      }
      if (data.fallback_used && used) {
        showPayNotice(lang, formatText(lang, 'pricing.providerSwitched', { from: preferred, to: used }), 'warn');
      }
      if (used === 'creem') {
        const url = String(data.checkout_url || '').trim();
        if (!url) throw new Error('CHECKOUT_NOT_READY');
        window.open(url, '_blank', 'noreferrer');
        showPayNotice(lang, t(lang, 'pricing.payReady'), 'ok');
        return;
      }

      const token = String(data.token || '').trim();
      const checkout = data.checkout && typeof data.checkout === 'object' ? data.checkout : null;
      if (!token || !checkout) throw new Error('CHECKOUT_NOT_READY');
      if (!window.Paddle || typeof window.Paddle.Initialize !== 'function' || !window.Paddle.Checkout) {
        const fallback = await callApi('/api/billing/checkout', {
          method: 'POST',
          body: { cycle, billing_token: BILLING_TOKEN, provider: 'creem' },
        });
        const url = String(fallback.checkout_url || '').trim();
        if (!url) throw new Error('CHECKOUT_NOT_READY');
        showPayNotice(lang, formatText(lang, 'pricing.providerSwitched', { from: 'paddle', to: 'creem' }), 'warn');
        window.open(url, '_blank', 'noreferrer');
        showPayNotice(lang, t(lang, 'pricing.payReady'), 'ok');
        return;
      }
      if (window.Paddle.Environment && typeof window.Paddle.Environment.set === 'function') {
        if (token.startsWith('test_')) window.Paddle.Environment.set('sandbox');
      }
      window.Paddle.Initialize({
        token,
        eventCallback: (evt) => {
          const lang = getLang();
          try {
            if (!evt || typeof evt !== 'object') return;
            const type = String(evt.type || '').trim();
            if (type === 'checkout.completed') {
              showPayNotice(lang, t(lang, 'pricing.checkoutSuccess'), 'ok');
              try {
                console.info('[PADDLE_CHECKOUT_COMPLETED]', evt);
              } catch {
                // noop
              }
              return;
            }
            if (type !== 'checkout.error') return;
            const detail = String(evt.detail || evt.message || evt.code || 'unknown').trim();
            try {
              console.error('[PADDLE_CHECKOUT_ERROR]', evt);
            } catch {
              // noop
            }
            showPayNotice(lang, formatText(lang, 'pricing.payCheckoutErrorDetail', { detail }), 'error');
          } catch {
            return;
          }
        },
      });
      try {
        console.info('[PADDLE_CHECKOUT_OPEN]', {
          preferred,
          used,
          tokenPrefix: token.slice(0, 12),
          priceId: checkout && checkout.items && checkout.items[0] ? checkout.items[0].priceId : '',
          customerEmail: checkout && checkout.customer ? checkout.customer.email : '',
        });
      } catch {
        // noop
      }
      window.Paddle.Checkout.open(checkout);
      showPayNotice(lang, t(lang, 'pricing.payReady'), 'ok');
    } catch (err) {
      try {
        console.error('[BILLING_CHECKOUT_THROW]', err);
      } catch {
        // noop
      }
      if (err && (err.message === 'CHECKOUT_CLOSED')) {
        showPayNotice(lang, t(lang, 'pricing.payCanceled'), 'warn');
      } else if (err && (err.status === 401 || err.message === 'UNAUTHORIZED' || err.message === 'INVALID_BILLING_TOKEN')) {
        billingSessionInfo = null;
        renderBillingGuide(lang, true);
        setPayButtonsEnabled(true);
        showPayNotice(lang, t(lang, 'pricing.payTokenExpired'), 'warn');
      } else {
        const fallback = t(lang, 'pricing.payFailed');
        const detail = err && err.message ? ` (${err.message})` : '';
        showPayNotice(lang, `${fallback}${detail}`, 'error');
      }
    } finally {
      setPayButtonsBusy(false, lang);
    }
  };

  const initPricingCheckout = () => {
    const page = document.body && document.body.getAttribute('data-page');
    if (page !== 'pricing') return;
    setPayButtonsEnabled(true);
    renderBillingProviderSelector(getLang());
    qsa('[data-pay-cycle]').forEach((btn) => {
      btn.addEventListener('click', async () => {
        const cycle = (btn.getAttribute('data-pay-cycle') || '').trim().toLowerCase();
        if (cycle !== 'quarterly' && cycle !== 'yearly') return;
        const lang = getLang();
        await startCheckout(cycle, lang);
      });
    });
    loadBillingProviders().catch(() => {});
    loadBillingSession(getLang()).catch(() => {});
  };

  const burger = qs('[data-burger]');
  const mobileMenu = qs('[data-mobile-menu]');
  if (burger && mobileMenu) {
    const toggle = () => {
      const open = mobileMenu.classList.toggle('open');
      burger.setAttribute('aria-expanded', open ? 'true' : 'false');
    };
    burger.addEventListener('click', toggle);

    qsa('a', mobileMenu).forEach((a) => {
      a.addEventListener('click', () => {
        mobileMenu.classList.remove('open');
        burger.setAttribute('aria-expanded', 'false');
      });
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        mobileMenu.classList.remove('open');
        burger.setAttribute('aria-expanded', 'false');
      }
    });
  }

  qsa('a[href^="#"]').forEach((a) => {
    a.addEventListener('click', (e) => {
      const href = a.getAttribute('href');
      if (!href || href === '#') return;
      const target = qs(href);
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      history.replaceState(null, '', href);
    });
  });

  const initLang = () => {
    const initial = getLang();
    applyLang(initial);
    qsa('[data-lang-toggle]').forEach((btn) => {
      btn.addEventListener('click', () => {
        const cur = getLang();
        const next = cur === 'zh' ? 'en' : 'zh';
        setLang(next);
        applyLang(next);
      });
    });
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      initLang();
      initPricingCheckout();
    });
  } else {
    initLang();
    initPricingCheckout();
  }
})();

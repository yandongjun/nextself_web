(() => {
  const getLang = () => {
    try {
      const v = localStorage.getItem("apw_lang");
      return v === "zh" ? "zh" : "en";
    } catch {
      return "en";
    }
  };

  const msg = {
    en: {
      missingConfig: "Paddle is not configured yet. Please set clientToken and price IDs in pricing.html.",
      missingPlan: "Price ID is missing for this plan.",
      notLoaded: "Paddle.js did not load. Please refresh and try again.",
      failed: "Unable to open checkout. Please try again later.",
      opening: "Opening secure checkout...",
      redirectingSuccess: "Payment successful. Redirecting...",
      redirectingCancel: "Checkout cancelled. Redirecting..."
    },
    zh: {
      missingConfig: "Paddle 尚未配置，请先在 pricing.html 填写 clientToken 和价格 priceId。",
      missingPlan: "当前套餐缺少 priceId 配置。",
      notLoaded: "Paddle.js 未加载成功，请刷新后重试。",
      failed: "拉起支付失败，请稍后再试。",
      opening: "正在打开安全支付窗口...",
      redirectingSuccess: "支付成功，正在跳转...",
      redirectingCancel: "已取消支付，正在跳转..."
    }
  };

  const getMessage = (key) => {
    const lang = getLang();
    return msg[lang][key] || msg.en[key];
  };

  const notify = (key) => {
    alert(getMessage(key));
  };

  const setStatus = (key, isError = false) => {
    const el = document.querySelector("[data-billing-status]");
    if (!el) return;
    el.textContent = getMessage(key);
    el.hidden = false;
    el.classList.toggle("is-error", isError);
  };

  const clearStatus = () => {
    const el = document.querySelector("[data-billing-status]");
    if (!el) return;
    el.hidden = true;
    el.classList.remove("is-error");
    el.textContent = "";
  };

  const setLoading = (button, loading) => {
    if (!button) return;
    button.disabled = loading;
    button.classList.toggle("is-loading", loading);
    button.setAttribute("aria-busy", loading ? "true" : "false");
  };

  const getCheckoutUrls = () => {
    const u = new URL(window.location.href);
    const base = `${u.protocol}//${u.host}`;
    return {
      successUrl: `${base}/success.html`,
      cancelUrl: `${base}/cancel.html`
    };
  };

  const initPaddle = (cfg, onEvent) => {
    if (!window.Paddle) {
      notify("notLoaded");
      return false;
    }
    if (!cfg.clientToken) {
      notify("missingConfig");
      return false;
    }

    if ((cfg.environment || "sandbox") === "sandbox") {
      window.Paddle.Environment.set("sandbox");
    }

    window.Paddle.Initialize({
      token: cfg.clientToken,
      eventCallback: (event) => {
        if (typeof onEvent === "function") onEvent(event);
      }
    });
    return true;
  };

  let checkoutCompleted = false;
  let activeButton = null;
  let shouldRedirectOnClose = false;

  const openCheckout = (plan, button) => {
    const cfg = window.PADDLE_CONFIG || {};
    const priceId = cfg.prices && cfg.prices[plan];
    if (!priceId) {
      setStatus("missingPlan", true);
      return;
    }

    const locale = getLang() === "zh" ? "zh" : "en";
    const { successUrl } = getCheckoutUrls();
    checkoutCompleted = false;
    shouldRedirectOnClose = true;
    activeButton = button;
    setLoading(button, true);
    setStatus("opening");

    try {
      window.Paddle.Checkout.open({
        items: [{ priceId, quantity: 1 }],
        successUrl,
        settings: {
          displayMode: "overlay",
          theme: "dark",
          locale
        }
      });
    } catch {
      shouldRedirectOnClose = false;
      setLoading(button, false);
      setStatus("failed", true);
    }
  };

  const bindCheckoutButtons = () => {
    const cfg = window.PADDLE_CONFIG || {};
    if (!initPaddle(cfg, (event) => {
      const name = event && event.name;
      if (name === "checkout.completed") {
        checkoutCompleted = true;
        setStatus("redirectingSuccess");
      }
      if (name === "checkout.closed") {
        setLoading(activeButton, false);
        if (shouldRedirectOnClose && !checkoutCompleted) {
          setStatus("redirectingCancel");
          const { cancelUrl } = getCheckoutUrls();
          window.location.assign(cancelUrl);
          return;
        }
        clearStatus();
      }
    })) return;

    const buttons = Array.from(document.querySelectorAll("[data-paddle-checkout]"));
    buttons.forEach((button) => {
      const plan = button.getAttribute("data-paddle-checkout");
      button.addEventListener("click", () => openCheckout(plan, button));
    });
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", bindCheckoutButtons);
  } else {
    bindCheckoutButtons();
  }
})();

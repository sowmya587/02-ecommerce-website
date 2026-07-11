// ============================================
// CLERK AUTH
// Paste your publishable key below — get it from
// clerk.com → your app → API Keys. Everything else
// in the site reads from this one constant.
// ============================================
const CLERK_PUBLISHABLE_KEY = "pk_test_c291bmQtcmFwdG9yLTcwLmNsZXJrLmFjY291bnRzLmRldiQ";

function loadClerkScript() {
  return new Promise((resolve, reject) => {
    if (document.querySelector("script[data-clerk-publishable-key]")) {
      resolve();
      return;
    }
    const script = document.createElement("script");
    script.async = true;
    script.crossOrigin = "anonymous";
    script.setAttribute("data-clerk-publishable-key", CLERK_PUBLISHABLE_KEY);
    script.src = "https://cdn.jsdelivr.net/npm/@clerk/clerk-js@latest/dist/clerk.browser.js";
    script.onload = resolve;
    script.onerror = reject;
    document.head.appendChild(script);
  });
}

async function initClerk() {
  if (CLERK_PUBLISHABLE_KEY.includes("REPLACE_ME")) {
    console.warn("VoltCart: add your Clerk publishable key in js/auth.js before auth will work.");
    renderAuthPlaceholder();
    return;
  }
  try {
    await loadClerkScript();
    await window.Clerk.load();
    renderAuthUI();
    window.Clerk.addListener(() => {
      renderAuthUI();
      document.dispatchEvent(new CustomEvent("clerk-change"));
    });
    document.dispatchEvent(new CustomEvent("clerk-ready"));
  } catch (err) {
    console.error("Clerk failed to load:", err);
  }
}

function renderAuthPlaceholder() {
  const slot = document.getElementById("clerk-auth-slot");
  if (!slot) return;
  slot.innerHTML = `<span class="nav__auth-warning" title="Add your Clerk publishable key in js/auth.js">Sign in (not configured)</span>`;
}

function renderAuthUI() {
  const slot = document.getElementById("clerk-auth-slot");
  if (!slot || !window.Clerk) return;
  slot.innerHTML = "";

  if (window.Clerk.user) {
    const mountPoint = document.createElement("div");
    slot.appendChild(mountPoint);
    window.Clerk.mountUserButton(mountPoint);
  } else {
    const btn = document.createElement("button");
    btn.className = "btn btn--ghost btn--small";
    btn.textContent = "Sign in";
    btn.addEventListener("click", () => window.Clerk.openSignIn({}));
    slot.appendChild(btn);
  }
}

function isSignedIn() {
  return !!(window.Clerk && window.Clerk.user);
}

window.addEventListener("load", initClerk);

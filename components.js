// ============================================
// SHARED HEADER / FOOTER
// Every page has <div id="site-header"></div> and
// <div id="site-footer"></div>; this fills them in
// so nav markup lives in exactly one place.
// ============================================
function renderHeader(activePage) {
  const el = document.getElementById("site-header");
  if (!el) return;

  const link = (href, label, page) =>
    `<a href="${href}" class="${activePage === page ? "is-active" : ""}">${label}</a>`;

  el.innerHTML = `
    <div class="nav__inner">
      <a href="index.html" class="nav__logo">Volt<span>Cart</span></a>
      <nav class="nav__links" id="navLinks">
        ${link("index.html", "Home", "home")}
        ${link("shop.html", "Shop", "shop")}
        ${link("cart.html", "Cart", "cart")}
      </nav>
      <div class="nav__right">
        <a href="cart.html" class="nav__cart-icon" aria-label="Cart">
          🛒<span class="cart-badge" data-cart-badge>0</span>
        </a>
        <div id="clerk-auth-slot" class="nav__auth"></div>
        <button class="nav__toggle" id="navToggle" aria-label="Toggle menu" aria-expanded="false">
          <span></span><span></span><span></span>
        </button>
      </div>
    </div>
  `;

  const toggle = document.getElementById("navToggle");
  const links = document.getElementById("navLinks");
  toggle.addEventListener("click", () => {
    const isOpen = links.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });

  updateCartBadge();
}

function renderFooter() {
  const el = document.getElementById("site-footer");
  if (!el) return;
  el.innerHTML = `
    <p>VoltCart — built for the TAP Academy frontend sprint.</p>
    <p>HTML, CSS &amp; vanilla JS. Auth by Clerk.</p>
  `;
}

document.addEventListener("DOMContentLoaded", renderFooter);

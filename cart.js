// ============================================
// CART — persisted in localStorage as
// [{ id, qty }, ...]. Every page includes this
// file and can call these functions directly.
// ============================================
const CART_KEY = "voltcart_cart_v1";

function getCart() {
  try {
    const raw = localStorage.getItem(CART_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function saveCart(cart) {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
  updateCartBadge();
}

function addToCart(id, qty = 1) {
  const cart = getCart();
  const existing = cart.find(item => item.id === Number(id));
  if (existing) {
    existing.qty += qty;
  } else {
    cart.push({ id: Number(id), qty });
  }
  saveCart(cart);
}

function updateQty(id, qty) {
  let cart = getCart();
  if (qty <= 0) {
    cart = cart.filter(item => item.id !== Number(id));
  } else {
    const item = cart.find(item => item.id === Number(id));
    if (item) item.qty = qty;
  }
  saveCart(cart);
}

function removeFromCart(id) {
  const cart = getCart().filter(item => item.id !== Number(id));
  saveCart(cart);
}

function clearCart() {
  saveCart([]);
}

function getCartDetailed() {
  return getCart()
    .map(item => {
      const product = getProductById(item.id);
      if (!product) return null;
      return { ...product, qty: item.qty, lineTotal: product.price * item.qty };
    })
    .filter(Boolean);
}

function getCartCount() {
  return getCart().reduce((sum, item) => sum + item.qty, 0);
}

function getCartTotal() {
  return getCartDetailed().reduce((sum, item) => sum + item.lineTotal, 0);
}

function updateCartBadge() {
  const badge = document.querySelector("[data-cart-badge]");
  if (!badge) return;
  const count = getCartCount();
  badge.textContent = count;
  badge.style.display = count > 0 ? "flex" : "none";
}

document.addEventListener("DOMContentLoaded", updateCartBadge);

# VoltCart — E-commerce Website

A small desk-gear and tech accessories store: browse, filter by category, view product detail, manage a cart, and check out — gated behind Google sign-in via Clerk.

**Live demo:** https://sowmya587.github.io/02-ecommerce-website/

## Screenshots

> Add screenshots before submitting: home, shop (with a category filter active), product detail, cart with items, and the checkout sign-in gate. Save under `/assets/` and reference them here, e.g.
> `![Shop page](assets/screenshot-shop.png)`

## Features

- **Home** — hero, category chips, featured products
- **Shop** — full catalog (12 products) with client-side category filtering
- **Product detail** — quantity selector, add to cart, description
- **Cart** — quantity update, remove item, subtotal + shipping + total, persists via `localStorage`
- **Checkout** — locked behind Google sign-in (Clerk); shows order summary once signed in, "Place order" clears the cart
- Live cart-count badge in the navbar on every page, kept in sync via a shared `cart.js`
- Mobile nav toggle, fully responsive from 360px to desktop

## Tech stack

- HTML5, CSS3 (custom properties, mobile-first, no framework)
- Vanilla JavaScript — no build step, no bundler
- **Clerk** for Google authentication (`@clerk/clerk-js` loaded via CDN script tag)
- Product images via picsum.photos placeholders (swap for real product photos any time — just edit `image` in `js/data.js`)

## Setup — Clerk key

Auth won't work until you add your own key:

1. Open `js/auth.js`
2. Replace `pk_test_REPLACE_ME` on line 7 with your real Clerk publishable key (from clerk.com → your app → API Keys)
3. Once deployed, add your live GitHub Pages URL as an allowed origin in Clerk → Configure → Domains

## Design references

- Refero.design — studied product-grid and cart-drawer patterns from real e-commerce sites
- Coolors — locked the accent palette against the dark surface tokens
- Godly.website — restrained dark-UI reference for the checkout gate screen

## AI tools used

Built with Claude. AI was used to:
- Scaffold the four-page structure (home/shop/product/cart) and the shared header/footer/cart/auth modules
- Build the Clerk integration (sign-in gating, auth-state listeners, user button)
- Write the checkout page, including the sign-in gate and order-confirmation flow

I directed the overall structure, product catalog, and content, and can explain any 10 lines of the CSS or JS on request — including the cart's localStorage read/write cycle, the Clerk auth-state event listeners, and the category-filter logic on the shop page.

## What I learned

Wiring up Clerk without a build tool (just a CDN script tag) meant learning to work with `window.Clerk` directly and listen for its own auth-change events rather than using React hooks, which is how most Clerk tutorials assume you're using it. Structuring the cart as a single source of truth in `localStorage`, read fresh on every render, also made the multi-page flow (product → cart → checkout) much simpler than trying to pass state between pages directly.

---

## About TAP Academy

{{PASTE THE OFFICIAL TAP ACADEMY SECTION FROM THE ASSIGNMENT HUB TEMPLATE HERE — KEEP IT EXACTLY AS PROVIDED, DO NOT EDIT}}

> Note: grab this from the Project 02 tab on https://harshit-tapacademy.github.io/assignments/ using the "Copy template" button, and paste it in here exactly.

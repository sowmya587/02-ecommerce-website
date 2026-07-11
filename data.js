// ============================================
// PRODUCT DATA — VoltCart
// A small maker/gadget store. Swap in real
// products + images any time; the rest of the
// app just reads from this array.
// ============================================
const PRODUCTS = [
  { id: 1,  name: "Wireless Earbuds Pro",     category: "Audio",       price: 2499, oldPrice: 3299, rating: 4.5, image: "https://picsum.photos/seed/volt-earbuds/600/600",
    description: "Active noise cancellation, 30-hour battery life with the case, and a snug in-ear fit built for long work sessions." },
  { id: 2,  name: "Mechanical Keyboard 87-Key", category: "Peripherals", price: 3999, oldPrice: null, rating: 4.7, image: "https://picsum.photos/seed/volt-keyboard/600/600",
    description: "Hot-swappable switches, per-key backlighting, and a compact 87-key layout that leaves room for your mouse." },
  { id: 3,  name: "Smartwatch Series X",       category: "Wearables",   price: 5999, oldPrice: 7499, rating: 4.3, image: "https://picsum.photos/seed/volt-smartwatch/600/600",
    description: "Heart-rate and SpO2 tracking, 7-day battery, and always-on AMOLED display in a slim aluminium case." },
  { id: 4,  name: "1080p Webcam",              category: "Peripherals", price: 1899, oldPrice: null, rating: 4.1, image: "https://picsum.photos/seed/volt-webcam/600/600",
    description: "Autofocus 1080p at 30fps with a built-in ring light — clips onto any monitor from 10 to 27 inches." },
  { id: 5,  name: "Adjustable Desk Lamp",      category: "Desk Setup",  price: 1299, oldPrice: 1599, rating: 4.6, image: "https://picsum.photos/seed/volt-lamp/600/600",
    description: "Stepless dimming, 3 color temperatures, USB-C powered — folds flat when you're done for the day." },
  { id: 6,  name: "20000mAh Power Bank",       category: "Power",       price: 1799, oldPrice: null, rating: 4.4, image: "https://picsum.photos/seed/volt-powerbank/600/600",
    description: "65W fast charging, three ports, enough capacity for a laptop top-up and two full phone charges." },
  { id: 7,  name: "Bluetooth Speaker Mini",    category: "Audio",       price: 1499, oldPrice: 1999, rating: 4.2, image: "https://picsum.photos/seed/volt-speaker/600/600",
    description: "Pocket-sized with surprisingly deep bass, IPX6 splash resistance, and 12-hour playtime." },
  { id: 8,  name: "Aluminium Monitor Stand",   category: "Desk Setup",  price: 2199, oldPrice: null, rating: 4.5, image: "https://picsum.photos/seed/volt-monitorstand/600/600",
    description: "Raises your monitor to eye level and clears desk space underneath for a keyboard tray or storage." },
  { id: 9,  name: "7-in-1 USB-C Hub",          category: "Peripherals", price: 2099, oldPrice: 2599, rating: 4.3, image: "https://picsum.photos/seed/volt-hub/600/600",
    description: "HDMI, SD card, three USB-A ports and 100W pass-through charging from a single USB-C cable." },
  { id: 10, name: "Wireless Ergo Mouse",       category: "Peripherals", price: 1399, oldPrice: null, rating: 4.6, image: "https://picsum.photos/seed/volt-mouse/600/600",
    description: "Vertical grip design that keeps your wrist in a natural position through long coding sessions." },
  { id: 11, name: "15\" Laptop Sleeve",        category: "Accessories", price: 899,  oldPrice: 1199, rating: 4.4, image: "https://picsum.photos/seed/volt-sleeve/600/600",
    description: "Water-resistant shell with a soft fleece lining and a front pocket for cables and a charger." },
  { id: 12, name: "Adjustable Phone Stand",    category: "Accessories", price: 599,  oldPrice: null, rating: 4.0, image: "https://picsum.photos/seed/volt-phonestand/600/600",
    description: "Foldable aluminium stand that adjusts for video calls, reading, or watching while you cook." }
];

function getProductById(id) {
  return PRODUCTS.find(p => p.id === Number(id));
}

function formatPrice(n) {
  return "₹" + n.toLocaleString("en-IN");
}

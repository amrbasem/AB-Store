/* ==========================================================================
   A.B STORE - CENTRAL CART SYSTEM (cart-system.js)
   This script handles adding, removing, and saving items to the browser.
   ========================================================================== */

// 1. Initialize Cart from LocalStorage (keeps items saved if user closes browser)
let cart = JSON.parse(localStorage.getItem('AB_CART')) || [];

// 2. Function: Add Item to Cart
function addToCart(productId, name, price, img) {
    const existingItem = cart.find(item => item.id === productId);

    if (existingItem) {
        existingItem.qty += 1;
    } else {
        cart.push({
            id: productId,
            name: name,
            price: parseFloat(price),
            img: img,
            qty: 1
        });
    }

    saveCart();
    updateCartUI();
    showNotification(`${name} added to your bag!`);
}

// 3. Function: Remove Item
function removeItem(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCart();
    // If we are on the cart page, this will refresh the list
    if (typeof renderCart === "function") renderCart();
    updateCartUI();
}

// 4. Function: Change Quantity
function updateQuantity(productId, delta) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.qty += delta;
        if (item.qty <= 0) {
            removeItem(productId);
        } else {
            saveCart();
            if (typeof renderCart === "function") renderCart();
            updateCartUI();
        }
    }
}

// 5. Save to Browser Storage
function saveCart() {
    localStorage.setItem('AB_CART', JSON.stringify(cart));
}

// 6. Update the Cart Badge (the number on the 🛒 icon)
function updateCartUI() {
    const badges = document.querySelectorAll('.cart-badge');
    const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);
    
    badges.forEach(badge => {
        badge.innerText = totalItems;
        badge.style.display = totalItems > 0 ? 'flex' : 'none';
    });
}

// 7. Toast Notification (Premium Popup)
function showNotification(message) {
    // Check if a toast already exists, remove it
    const oldToast = document.querySelector('.ab-toast');
    if (oldToast) oldToast.remove();

    const toast = document.createElement('div');
    toast.className = 'ab-toast';
    toast.style.cssText = `
        position: fixed; bottom: 30px; right: 30px;
        background: #0A0F2C; color: #C9A84C; padding: 15px 25px;
        border-radius: 4px; font-weight: 700; font-family: 'DM Sans', sans-serif;
        box-shadow: 0 10px 30px rgba(0,0,0,0.3); z-index: 9999;
        border-left: 4px solid #C9A84C; animation: abFadeIn 0.4s ease forwards;
    `;
    toast.innerText = message;
    document.body.appendChild(toast);

    // Auto-remove after 3 seconds
    setTimeout(() => {
        toast.style.animation = 'abFadeOut 0.4s ease forwards';
        setTimeout(() => toast.remove(), 400);
    }, 3000);
}

// 8. Add CSS Animations for the Notification
const style = document.createElement('style');
style.innerHTML = `
    @keyframes abFadeIn { from { transform: translateY(20px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }
    @keyframes abFadeOut { from { transform: translateY(0); opacity: 1; } to { transform: translateY(20px); opacity: 0; } }
`;
document.head.appendChild(style);

// 9. Initial Run
document.addEventListener('DOMContentLoaded', updateCartUI);
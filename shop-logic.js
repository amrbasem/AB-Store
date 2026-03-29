/* ==========================================================================
   A.B STORE - المخزن الشامل (Men, Women, Tech, Luxury)
   ========================================================================== */

const AB_INVENTORY = [
    // --- قسم الساعات (Luxury Watches) ---
    { 
        id: 101, 
        name: "Automatic Skeleton Watch", 
        price: 2450, 
        cat: "Men's Luxury", 
        img: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=600" 
    },
    
    // --- قسم النظارات (High-end Eyewear) ---
    { 
        id: 201, 
        name: "Aviator Gold Edition", 
        price: 1200, 
        cat: "Unisex Eyewear", 
        img: "https://images.unsplash.com/photo-1511499767390-90342f16b117?w=600" 
    },

    // --- قسم الإلكترونيات (Premium Tech) ---
    { 
        id: 301, 
        name: "Studio Pro Headphones", 
        price: 1899, 
        cat: "Electronics", 
        img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600" 
    },

    // --- قسم النساء (Women's Collection) ---
    { 
        id: 401, 
        name: "Minimalist Leather Clutch", 
        price: 950, 
        cat: "Women's Fashion", 
        img: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=600" 
    }
];

// دالة العرض (التي تربط المنتجات بالصفحة)
function renderShop() {
    const grid = document.getElementById('main-shop-grid');
    if (!grid) return;

    grid.innerHTML = AB_INVENTORY.map(p => `
        <div class="product-card">
            <div class="img-box">
                <img src="${p.img}" alt="${p.name}">
            </div>
            <div class="product-info">
                <span class="product-cat">${p.cat}</span>
                <h3 class="product-name">${p.name}</h3>
                <div class="product-price">${p.price.toLocaleString()} SAR</div>
                <button class="add-to-cart-btn" onclick="addToCart(${p.id}, '${p.name}', ${p.price}, '${p.img}')">
                    Add to Bag
                </button>
            </div>
        </div>
    `).join('');
}

document.addEventListener('DOMContentLoaded', renderShop);
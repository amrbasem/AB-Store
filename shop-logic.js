/* ==========================================================================
   A.B STORE - FULL LUXURY INVENTORY (Watches, Tech, Fashion, Eyewear)
   ========================================================================== */

const AB_INVENTORY = [
    // --- قسم الساعات (Watches) ---
    { 
        id: 101, 
        name: "The Legacy Skeleton Gold", 
        price: 1850, 
        cat: "Luxury Watches", 
        desc: "Automatic movement with 18K gold-plated skeleton dial.",
        img: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=600" 
    },
    { 
        id: 102, 
        name: "Midnight Silver Chrono", 
        price: 1400, 
        cat: "Luxury Watches", 
        desc: "Stainless steel chronograph with sapphire crystal glass.",
        img: "https://images.unsplash.com/photo-1508685096489-7aac29625a3b?w=600" 
    },

    // --- قسم النظارات (Eyewear) ---
    { 
        id: 201, 
        name: "Titanium Aviator Shades", 
        price: 950, 
        cat: "Eyewear", 
        desc: "Polarized lenses with ultra-lightweight titanium frames.",
        img: "https://images.unsplash.com/photo-1511499767390-90342f16b117?w=600" 
    },
    { 
        id: 202, 
        name: "Black Onyx Wayfarers", 
        price: 880, 
        cat: "Eyewear", 
        desc: "Classic matte black finish with 100% UV protection.",
        img: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=600" 
    },

    // --- قسم الإلكترونيات (Electronics) ---
    { 
        id: 301, 
        name: "Studio Pro ANC Headphones", 
        price: 2100, 
        cat: "Electronics", 
        desc: "Deep bass and active noise cancelling for 40 hours.",
        img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600" 
    },
    { 
        id: 302, 
        name: "Minimalist Wireless Charger", 
        price: 350, 
        cat: "Electronics", 
        desc: "Fast charging pad wrapped in genuine Italian leather.",
        img: "https://images.unsplash.com/photo-1586816829396-98184517316a?w=600" 
    },

    // --- قسم الملابس (Fashion) ---
    { 
        id: 401, 
        name: "Premium Linen Shirt", 
        price: 420, 
        cat: "Men's Fashion", 
        desc: "Breathable pure linen, perfect for the Riyadh summer.",
        img: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=600" 
    },
    { 
        id: 402, 
        name: "Silk Evening Gown", 
        price: 1250, 
        cat: "Women's Fashion", 
        desc: "Handcrafted pure silk dress in elegant emerald green.",
        img: "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?w=600" 
    },
    { 
        id: 403, 
        name: "Saffiano Leather Tote", 
        price: 2600, 
        cat: "Women's Fashion", 
        desc: "Luxury structured bag with gold-tone hardware.",
        img: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=600" 
    }
];

// دالة العرض الأساسية
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
                <h3 class="product-name" style="margin-bottom: 4px;">${p.name}</h3>
                <p style="font-size: 0.85rem; color: #777; margin-bottom: 12px; line-height: 1.4;">${p.desc}</p>
                <div class="product-price" style="font-size: 1.2rem; font-weight:700; color: #0A0F2C; margin-bottom: 15px;">${p.price.toLocaleString()} SAR</div>
                <button class="add-to-cart-btn" onclick="addToCart(${p.id}, '${p.name}', ${p.price}, '${p.img}')" style="width:100%; padding:12px; background:#0A0F2C; color:white; border:none; border-radius:4px; cursor:pointer;">
                    Add to Bag
                </button>
            </div>
        </div>
    `).join('');
}

document.addEventListener('DOMContentLoaded', renderShop);
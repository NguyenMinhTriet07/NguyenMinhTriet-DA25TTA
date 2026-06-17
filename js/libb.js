// Khởi tạo giỏ hàng từ localStorage (nếu có) để không bị mất khi reload trang
let cart = JSON.parse(localStorage.getItem("myCart")) || [];

// Hàm hiển thị thanh danh sách sản phẩm (Sidebar)
function renderSidebar(currentProductId) {
    const sidebar = document.getElementById("product-sidebar");
    if (!sidebar) return;

    sidebar.innerHTML = products.map(prod => {
        // Kiểm tra xem sản phẩm này có đang được xem chi tiết hay không để tô đậm
        const isActive = prod.id == currentProductId ? 'active' : '';
        const priceColor = prod.id == currentProductId ? 'text-white-50' : 'text-danger';

        return `
            <a href="?id=${prod.id}" class="list-group-item list-group-item-action d-flex align-items-center ${isActive}">
                <img src="${prod.image}" width="40" height="40" class="me-2 rounded" style="object-fit:cover">
                <div class="flex-grow-1 text-truncate">
                    <div class="fw-bold small">${prod.name}</div>
                    <small class="${priceColor}">${prod.price.toLocaleString('vi-VN')}đ</small>
                </div>
            </a>
        `;
    }).join('');
}

// Hàm thêm sản phẩm vào giỏ hàng
function addToCart(product) {
    // Tìm xem sản phẩm đã có trong giỏ chưa
    const existingItem = cart.find(item => item.id === product.id);
    
    if (existingItem) {
        existingItem.quantity += 1; // Nếu có rồi thì tăng số lượng thêm 1
    } else {
        cart.push({ ...product, quantity: 1 }); // Nếu chưa có thì thêm mới vào giỏ
    }
    
    updateCart(); // Cập nhật lại giao diện giỏ hàng
    alert(`Đã thêm "${product.name}" vào giỏ hàng!`);
}

// Hàm xóa sản phẩm khỏi giỏ hàng
function removeFromCart(id) {
    cart = cart.filter(item => item.id !== id);
    updateCart();
}

// Hàm cập nhật giao diện giỏ hàng và lưu vào LocalStorage
function updateCart() {
    localStorage.setItem("myCart", JSON.stringify(cart));
    
    const cartList = document.getElementById("cart-list");
    const cartTotal = document.getElementById("cart-total");
    
    if (!cartList || !cartTotal) return;

    if (cart.length === 0) {
        cartList.innerHTML = `<li class="text-muted text-center py-3">Giỏ hàng trống</li>`;
        cartTotal.innerText = "0đ";
        return;
    }

    let total = 0;
    cartList.innerHTML = cart.map(item => {
        total += item.price * item.quantity; // Tính tổng tiền
        return `
            <li class="list-group-item d-flex justify-content-between align-items-center bg-transparent px-0">
                <div style="max-width: 70%;">
                    <span class="fw-bold small d-block text-truncate">${item.name}</span>
                    <small class="text-muted">${item.price.toLocaleString('vi-VN')}đ x ${item.quantity}</small>
                </div>
                <button class="btn btn-sm btn-outline-danger" onclick="removeFromCart(${item.id})">Xóa</button>
            </li>
        `;
    }).join('');

    cartTotal.innerText = total.toLocaleString('vi-VN') + "đ";
}

// Hàm thanh toán (demo)
function checkout() {
    if (cart.length === 0) {
        alert("Giỏ hàng của bạn đang trống!");
        return;
    }
    alert("Cảm ơn bạn đã mua hàng! Đơn hàng đã được ghi nhận.");
    cart = []; // Xóa sạch giỏ hàng sau khi thanh toán
    updateCart();
}
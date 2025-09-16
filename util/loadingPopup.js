// loadingPopup.js

/**
 * Tạo overlay loading che toàn bộ trang.
 */
export function showLoading() {
    // Kiểm tra nếu đã có overlay rồi thì không thêm nữa
    if (document.getElementById('loading-overlay')) return;

    const overlay = document.createElement('div');
    overlay.id = 'loading-overlay';
    overlay.className = 'loading-overlay';

    // Nội dung loading, ví dụ spinner
    overlay.innerHTML = `
        <div class="loading-spinner"></div>
    `;

    document.body.appendChild(overlay);
}

/**
 * Xóa overlay loading.
 */
export function hideLoading() {
    const overlay = document.getElementById('loading-overlay');
    if (overlay) {
        overlay.remove();
    }
}

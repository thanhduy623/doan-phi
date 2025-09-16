/**
 * formatMoney - Định dạng số thành X.XXX.XXX
 * @param {number} amount - số tiền cần định dạng
 * @returns {string} số tiền đã định dạng, ví dụ: 1.234.567
 */
export function formatMoney(amount) {
    if (typeof amount !== "number") amount = Number(amount) || 0;
    return amount.toLocaleString('vi-VN');
}

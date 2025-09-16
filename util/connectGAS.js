// connectGAS.js
import { showLoading, hideLoading } from './loadingPopup.js';


/**
 * Gửi dữ liệu đến Google Apps Script (GAS) Web App.
 *
 * @param {string} action - Hành động GAS thực hiện (ví dụ: 'saveData', 'getData').
 * @param {object} data - Dữ liệu chính gửi đến GAS.
 * @returns {Promise<object>} - Phản hồi JSON từ GAS.
 */
export async function connectGAS(action, data) {
    showLoading();

    const gasUrl = "https://script.google.com/macros/s/AKfycby6OylTUH3mS6f3CB9LhA0BsSh6VyoDW2PygyNt_Qts7_XI4BCPw6Ewr8NYReul4nXOsA/exec";

    const token = sessionStorage.getItem("token");
    // const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InZwMiIsInBhc3N3b3JkIjoidGR0dTIiLCJyb2xlIjoiMiIsImV4cCI6MTc1ODA1NDI4NH0.CZA9jdvWn39e9FfLYJ4jf5iu1goH5u7a0zG_Qu7DT7w";

    const payload = {
        action,
        data,
        token,
        timestamp: new Date().toISOString()
    };

    try {
        const response = await fetch(gasUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'text/plain;charset=utf-8' },
            body: JSON.stringify(payload),
        });

        if (!response.ok) {
            throw new Error(`Lỗi mạng: ${response.status}`);
        }

        const json = await response.json();

        return json;

    } finally {
        hideLoading();
    }
}

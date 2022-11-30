export default function errorMsg(type = "error", error = "An error occured") {
    const html = `<div class="error">${error}</div>`;
    return html;
};
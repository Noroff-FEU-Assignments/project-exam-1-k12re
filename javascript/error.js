export default function errorMsg(type = "error", error = "An error occured") {
    const html = `<div class="error-big">${error}</div>`;
    return html;
};
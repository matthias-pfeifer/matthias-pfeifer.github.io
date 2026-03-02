// single source for the "last updated" date
// edit the value below and it will appear on every page
const lastUpdate = "02/03/2026";

// fill all elements with class "last-mod" on load
window.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.last-mod').forEach(el => {
        el.textContent = lastUpdate;
    });
});
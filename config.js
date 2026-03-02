// Simple global config - read from localStorage once on each page
window.isDarkMode = localStorage.getItem('theme') === 'dark';

// Apply theme immediately to avoid flash
function applyTheme() {
    if (window.isDarkMode) {
        document.documentElement.setAttribute('data-theme', 'dark');
        document.body.classList.add('dark-mode');
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        document.body.classList.remove('dark-mode');
    }
}

// Apply on load
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', applyTheme);
} else {
    applyTheme();
}
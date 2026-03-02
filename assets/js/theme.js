// Toggle dark mode using global isDarkMode variable
function toggleTheme() {
    window.isDarkMode = !window.isDarkMode;
    localStorage.setItem('theme', window.isDarkMode ? 'dark' : 'light');
    
    // Apply to DOM
    if (window.isDarkMode) {
        document.documentElement.classList.add('dark-mode');
        document.body.classList.add('dark-mode');
        document.documentElement.setAttribute('data-theme', 'dark');
    } else {
        document.documentElement.classList.remove('dark-mode');
        document.body.classList.remove('dark-mode');
        document.documentElement.setAttribute('data-theme', 'light');
    }
    
    // update portrait for new theme
    if (typeof updatePortrait === 'function') {
        updatePortrait();
    }

    // Update button
    const btn = document.getElementById('theme-toggle');
    if (btn) {
        btn.textContent = window.isDarkMode ? '☀️' : '🌙';
    }
}

// Initialize theme and button after includes are loaded
window.initializeTheme = function() {
    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
        themeToggle.textContent = window.isDarkMode ? '☀️' : '🌙';
        themeToggle.addEventListener('click', toggleTheme);
    }
    
    // Reapply dark mode class if needed
    if (window.isDarkMode) {
        document.body.classList.add('dark-mode');
    }
};

// Set up button on initial load
window.addEventListener('DOMContentLoaded', () => {
    window.initializeTheme();
});
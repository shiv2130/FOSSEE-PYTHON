document.addEventListener('DOMContentLoaded', function() {
    
    // --- Hamburger Menu & Overlay Functionality ---
    const hamburger = document.getElementById('hamburger-menu');
    const overlay = document.getElementById('overlay');
    const body = document.body;

    // Check if the hamburger button exists
    if (hamburger) {
        // When the hamburger is clicked, toggle the sidebar
        hamburger.addEventListener('click', () => {
            body.classList.toggle('sidebar-open');
        });
    }

    // Check if the overlay exists
    if (overlay) {
        // When the overlay is clicked, always close the sidebar
        overlay.addEventListener('click', () => {
            body.classList.remove('sidebar-open');
        });
    }

    // --- Set Active Navigation Link (No Changes) ---
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('.sidebar-nav .nav-link');

    navLinks.forEach(link => {
        const linkPath = link.getAttribute('href');
        if (linkPath === '/' && currentPath === '/') {
            link.classList.add('active');
        } 
        else if (linkPath !== '/' && currentPath.startsWith(linkPath)) {
            link.classList.add('active');
        }
    });

});
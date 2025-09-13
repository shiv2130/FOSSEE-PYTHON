document.addEventListener('DOMContentLoaded', function() {
    
    const hamburger = document.getElementById('hamburger-menu');
    const overlay = document.getElementById('overlay');
    const body = document.body;
    if (hamburger) {
        hamburger.addEventListener('click', () => {
            body.classList.toggle('sidebar-open');
        });
    }
    if (overlay) {
        overlay.addEventListener('click', () => {
            body.classList.remove('sidebar-open');
        });
    }

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
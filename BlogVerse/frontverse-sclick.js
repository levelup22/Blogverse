    // Theme Toggle
    const themeToggle = document.querySelector('.theme-toggle');
    const html = document.documentElement;
    const themeIcon = themeToggle.querySelector('i');

    themeToggle.addEventListener('click', () => {
        const currentTheme = html.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        html.setAttribute('data-theme', newTheme);
        
        // Update icon
        themeIcon.classList.remove('fa-moon', 'fa-sun');
        themeIcon.classList.add(newTheme === 'dark' ? 'fa-moon' : 'fa-sun');
        
        // Save theme preference
        localStorage.setItem('theme', newTheme);
    });

    // Load saved theme
    document.addEventListener('DOMContentLoaded', () => {
        const savedTheme = localStorage.getItem('theme') || 'dark';
        html.setAttribute('data-theme', savedTheme);
        themeIcon.classList.remove('fa-moon', 'fa-sun');
        themeIcon.classList.add(savedTheme === 'dark' ? 'fa-moon' : 'fa-sun');
    });

    // Side Menu Toggle
    const menuBtn = document.querySelector('.menu-btn');
    const closeMenu = document.querySelector('.close-menu');
    const sideMenu = document.querySelector('.side-menu');
    const overlay = document.querySelector('.overlay');

    function toggleMenu() {
        sideMenu.classList.toggle('active');
        overlay.classList.toggle('active');
        menuBtn.classList.toggle('active');
        document.body.style.overflow = sideMenu.classList.contains('active') ? 'hidden' : '';

        // Animate menu icon
        const menuIcon = menuBtn.querySelector('i');
        if (sideMenu.classList.contains('active')) {
            menuIcon.style.transform = 'rotate(90deg)';
        } else {
            menuIcon.style.transform = 'rotate(0deg)';
        }
    }

    menuBtn.addEventListener('click', toggleMenu);
    closeMenu.addEventListener('click', toggleMenu);
    overlay.addEventListener('click', toggleMenu);

    // Close menu on escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && sideMenu.classList.contains('active')) {
            toggleMenu();
        }
    });

    // Menu Items Animation
    const menuItems = document.querySelectorAll('.menu-item');
    menuItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateX(-20px)';
    });

    function animateMenuItems() {
        menuItems.forEach((item, index) => {
            setTimeout(() => {
                item.style.transition = 'all 0.3s ease';
                item.style.opacity = '1';
                item.style.transform = 'translateX(0)';
            }, index * 50);
        });
    }

    menuBtn.addEventListener('click', animateMenuItems);
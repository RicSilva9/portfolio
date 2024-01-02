document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll('nav a');
    const mobileMenuToggle = document.querySelector('#mobile-menu .menu-toggle');
    const nav = document.querySelector('nav ul');

    mobileMenuToggle.addEventListener('click', toggleMobileMenu);

    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            smoothScroll.call(this, e);
            if (nav.classList.contains('show')) {
                nav.classList.remove('show');
            }
        });
    });

    function toggleMobileMenu() {
        nav.classList.toggle('show');
    }

    function smoothScroll(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        window.scrollTo({
            top: targetElement.offsetTop - document.querySelector('nav').offsetHeight,
            behavior: 'smooth'
        });
    }
});

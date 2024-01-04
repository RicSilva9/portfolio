document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll('nav a');
    const mobileMenuToggle = document.querySelector('#mobile-menu .menu-toggle');
    const nav = document.querySelector('nav ul');

    mobileMenuToggle.addEventListener('click', toggleMobileMenu);

    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault(); // Impedir o comportamento padrão do link
            smoothScroll.call(this);
            if (nav.classList.contains('show')) {
                nav.classList.remove('show');
            }
        });
    });

    function toggleMobileMenu() {
        nav.classList.toggle('show');
    }

    function smoothScroll() {
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            const navHeight = document.querySelector('nav').offsetHeight;
            
            window.scrollTo({
                top: targetElement.offsetTop - navHeight,
                behavior: 'smooth'
            });
        }
    }
});

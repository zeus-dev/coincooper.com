// ===== NAVIGATION =====
document.addEventListener('DOMContentLoaded', function() {
    const nav = document.getElementById('mainNav');
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    const navLinks = navMenu ? navMenu.querySelectorAll('a') : [];

    let lastScroll = 0;
    let ticking = false;

    window.addEventListener('scroll', () => {
        if (!nav || ticking) return;
        ticking = true;
        window.requestAnimationFrame(() => {
            const currentScroll = window.pageYOffset || 0;

            if (currentScroll > 60) nav.classList.add('scrolled');
            else nav.classList.remove('scrolled');

            // Don't hide nav on mobile — feels broken / clips content
            if (window.matchMedia('(min-width: 901px)').matches) {
                if (currentScroll > lastScroll && currentScroll > 200) {
                    nav.style.transform = 'translateY(-100%)';
                } else {
                    nav.style.transform = 'translateY(0)';
                }
            } else {
                nav.style.transform = 'translateY(0)';
            }

            lastScroll = currentScroll;
            ticking = false;
        });
    }, { passive: true });

    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            const open = !navMenu.classList.contains('open');
            navToggle.classList.toggle('active', open);
            navMenu.classList.toggle('open', open);
            document.body.style.overflow = open ? 'hidden' : '';
        });

        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navToggle.classList.remove('active');
                navMenu.classList.remove('open');
                document.body.style.overflow = '';
            });
        });

        document.addEventListener('click', function(event) {
            if (!nav.contains(event.target) && navMenu.classList.contains('open')) {
                navToggle.classList.remove('active');
                navMenu.classList.remove('open');
                document.body.style.overflow = '';
            }
        });

        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && navMenu.classList.contains('open')) {
                navToggle.classList.remove('active');
                navMenu.classList.remove('open');
                document.body.style.overflow = '';
            }
        });
    }
});

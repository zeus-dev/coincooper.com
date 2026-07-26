// ===== PREMIUM NAVIGATION - BILLION DOLLAR SAAS =====
document.addEventListener('DOMContentLoaded', function() {
    const nav = document.getElementById('mainNav');
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    
    // Sticky navigation with blur effect on scroll
    let lastScroll = 0;
    let ticking = false;
    
    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                const currentScroll = window.pageYOffset;
                
                if (currentScroll > 60) {
                    nav.classList.add('scrolled');
                } else {
                    nav.classList.remove('scrolled');
                }
                
                // Hide/show nav on scroll direction
                if (currentScroll > lastScroll && currentScroll > 200) {
                    nav.style.transform = 'translateY(-100%)';
                } else {
                    nav.style.transform = 'translateY(0)';
                }
                
                lastScroll = currentScroll;
                ticking = false;
            });
            
            ticking = true;
        }
    });
    
    // Mobile menu toggle with animation
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navToggle.classList.toggle('active');
            navMenu.classList.toggle('open');
            
            // Prevent body scroll when menu is open
            document.body.style.overflow = navMenu.classList.contains('open') ? 'hidden' : '';
        });
        
        // Close menu when clicking on a link
        const navLinks = navMenu.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navToggle.classList.remove('active');
                navMenu.classList.remove('open');
                document.body.style.overflow = '';
            });
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(event) {
            const isClickInsideNav = nav.contains(event.target);
            if (!isClickInsideNav && navMenu.classList.contains('open')) {
                navToggle.classList.remove('active');
                navMenu.classList.remove('open');
                document.body.style.overflow = '';
            }
        });
        
        // Close menu on escape key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && navMenu.classList.contains('open')) {
                navToggle.classList.remove('active');
                navMenu.classList.remove('open');
                document.body.style.overflow = '';
            }
        });
    }
    
    // Active link highlighting based on scroll position
    const sections = document.querySelectorAll('section[id]');
    
    function highlightNavOnScroll() {
        const scrollPos = window.scrollY + 150;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }
    
    window.addEventListener('scroll', highlightNavOnScroll);
    
    // Add ripple effect to nav button
    const navButton = navMenu?.querySelector('.btn-primary');
    if (navButton) {
        navButton.addEventListener('click', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const ripple = document.createElement('span');
            ripple.style.cssText = `
                position: absolute;
                background: rgba(255, 255, 255, 0.3);
                border-radius: 50%;
                pointer-events: none;
                width: 10px;
                height: 10px;
                transform: scale(0);
                animation: ripple 0.6s linear;
                left: ${x}px;
                top: ${y}px;
            `;
            
            this.appendChild(ripple);
            
            setTimeout(() => ripple.remove(), 600);
        });
    }
});

// Add CSS for ripple animation
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple {
        to {
            transform: scale(40);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);
// ===== PREMIUM SCROLL ANIMATIONS =====
document.addEventListener('DOMContentLoaded', function() {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isMobile = window.matchMedia('(max-width: 768px)').matches;

    // Mobile / reduced-motion: keep content visible, skip heavy work
    if (prefersReducedMotion || isMobile) {
        document.querySelectorAll('.fade-up, .fade-in, .scale-in, .stagger-children > *').forEach(el => {
            el.classList.add('visible');
        });
        return;
    }

    // Enable hide-until-visible only after first paint (desktop)
    requestAnimationFrame(() => {
        document.documentElement.classList.add('anim-ready');
    });

    const observerOptions = {
        threshold: 0.08,
        rootMargin: '0px 0px -24px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.fade-up, .fade-in, .scale-in').forEach(el => {
        // Above-the-fold: show immediately
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.92) {
            el.classList.add('visible');
        } else {
            observer.observe(el);
        }
    });

    const staggerGrids = document.querySelectorAll('.bento-grid, .services-grid, .security-grid, .stats-grid, .customization-grid, .rpc-features, .tech-categories');

    staggerGrids.forEach(grid => {
        const items = grid.querySelectorAll('.bento-card, .service-card, .security-card, .stat-card, .customization-item, .rpc-feature, .tech-category');
        items.forEach((item, index) => {
            item.classList.add('fade-up');
            item.style.transitionDelay = `${index * 0.06}s`;
            const rect = item.getBoundingClientRect();
            if (rect.top < window.innerHeight * 0.92) {
                item.classList.add('visible');
            } else {
                observer.observe(item);
            }
        });
    });

    document.querySelectorAll('.stagger-children').forEach(container => {
        Array.from(container.children).forEach((child, index) => {
            child.classList.add('fade-up');
            child.style.transitionDelay = `${index * 0.08}s`;
            observer.observe(child);
        });
    });

    // Light hero entrance — never blank the hero while waiting
    animateHeroElements();
    initParallax();
    initBentoVisuals();
});

function initBentoVisuals() {
    const orderbookEl = document.querySelector('.orderbook-animation');
    if (orderbookEl) {
        orderbookEl.innerHTML = `
            <div class="order-row buy"></div>
            <div class="order-row buy"></div>
            <div class="order-row sell"></div>
            <div class="order-row sell"></div>
            <div class="order-row buy"></div>
        `;
    }

    const walletEl = document.querySelector('.wallet-animation');
    if (walletEl) {
        const addresses = ['0x7a16...f827', '0x3b2a...e491', '0x9c4d...b123', '0x1f8e...a456'];
        let addrIndex = 0;
        setInterval(() => {
            walletEl.innerHTML = `<div class="address">${addresses[addrIndex]}</div>`;
            addrIndex = (addrIndex + 1) % addresses.length;
        }, 2000);
    }

    const blockchainEl = document.querySelector('.blockchain-animation');
    if (blockchainEl) {
        let blockHeight = 18500000;
        setInterval(() => {
            blockHeight += Math.floor(Math.random() * 3) + 1;
            blockchainEl.innerHTML = `
                <div class="block">
                    <span class="block-height">#${blockHeight.toLocaleString()}</span>
                    <span class="block-status">Confirmed</span>
                </div>
            `;
        }, 3000);
    }

    const pulseEl = document.querySelector('.pulse-animation');
    if (pulseEl) {
        pulseEl.innerHTML = `
            <div class="pulse-ring"></div>
            <div class="pulse-ring"></div>
            <div class="pulse-ring"></div>
            <div class="pulse-dot"></div>
        `;
    }
}

function animateHeroElements() {
    const heroContent = document.querySelector('.hero-content');
    if (!heroContent) return;

    // Soften only — do not set opacity 0 (caused “stuck” blank hero on slow mobile)
    const elements = heroContent.querySelectorAll('.hero-badge, .hero-title, .hero-subtitle, .hero-cta, .trust-bar');
    elements.forEach((el, index) => {
        el.style.transition = 'transform 0.5s ease, opacity 0.5s ease';
        el.style.transitionDelay = `${index * 0.06}s`;
        el.style.transform = 'translateY(12px)';
        requestAnimationFrame(() => {
            el.style.transform = 'translateY(0)';
        });
    });
}

function initParallax() {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if (window.matchMedia('(max-width: 768px)').matches) return;
    if (!window.matchMedia('(pointer: fine)').matches) return;

    let ticking = false;
    window.addEventListener('scroll', () => {
        if (ticking) return;
        ticking = true;
        window.requestAnimationFrame(() => {
            const scrolled = window.pageYOffset;
            document.querySelectorAll('.gradient-orb').forEach((orb, index) => {
                const speed = 0.04 + (index * 0.015);
                orb.style.transform = `translateY(${scrolled * speed}px)`;
            });
            ticking = false;
        });
    }, { passive: true });
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href === '#') return;

        const target = document.querySelector(href);
        if (!target) return;

        e.preventDefault();
        const nav = document.querySelector('.nav');
        const navHeight = nav ? nav.offsetHeight : 0;
        const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navHeight;
        window.scrollTo({ top: targetPosition, behavior: 'smooth' });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const counters = document.querySelectorAll('.stat-number[data-target]');
    if (!counters.length) return;

    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            const counter = entry.target;
            const target = parseFloat(counter.getAttribute('data-target'));
            const duration = 1600;
            const start = performance.now();
            const isDecimal = target % 1 !== 0;

            function updateCounter(currentTime) {
                const progress = Math.min((currentTime - start) / duration, 1);
                const easeOut = 1 - Math.pow(1 - progress, 3);
                const current = target * easeOut;
                counter.textContent = isDecimal ? current.toFixed(2) : Math.floor(current);
                if (progress < 1) requestAnimationFrame(updateCounter);
                else counter.textContent = isDecimal ? target.toFixed(2) : target;
            }

            requestAnimationFrame(updateCounter);
            counterObserver.unobserve(counter);
        });
    }, { threshold: 0.4 });

    counters.forEach(counter => counterObserver.observe(counter));
});

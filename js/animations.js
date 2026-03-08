// ===== PREMIUM SCROLL ANIMATIONS - BILLION DOLLAR SAAS =====
document.addEventListener('DOMContentLoaded', function() {
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (prefersReducedMotion) {
        document.querySelectorAll('.fade-up, .fade-in, .scale-in, .stagger-children > *').forEach(el => {
            el.classList.add('visible');
        });
        return;
    }
    
    // Intersection Observer for fade-up animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -40px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe all elements with fade-up class
    document.querySelectorAll('.fade-up').forEach(el => {
        observer.observe(el);
    });
    
    // Observe fade-in elements
    document.querySelectorAll('.fade-in').forEach(el => {
        observer.observe(el);
    });
    
    // Observe scale-in elements
    document.querySelectorAll('.scale-in').forEach(el => {
        observer.observe(el);
    });
    
    // Stagger animation for grid items
    const staggerGrids = document.querySelectorAll('.bento-grid, .services-grid, .security-grid, .stats-grid, .customization-grid, .rpc-features, .tech-categories');
    
    staggerGrids.forEach(grid => {
        const items = grid.querySelectorAll('.bento-card, .service-card, .security-card, .stat-card, .customization-item, .rpc-feature, .tech-category');
        
        items.forEach((item, index) => {
            item.classList.add('fade-up');
            item.style.transitionDelay = `${index * 0.08}s`;
        });
    });
    
    // Add stagger-children class support
    const staggerContainers = document.querySelectorAll('.stagger-children');
    staggerContainers.forEach(container => {
        const children = container.children;
        Array.from(children).forEach((child, index) => {
            child.classList.add('fade-up');
            child.style.transitionDelay = `${index * 0.1}s`;
            observer.observe(child);
        });
    });
    
    // Hero elements animation on load
    animateHeroElements();
    
    // Parallax effect for gradient orbs
    initParallax();
    
    // Animate bento card visuals
    initBentoVisuals();
});

function initBentoVisuals() {
    // Orderbook animation
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
    
    // Wallet animation
    const walletEl = document.querySelector('.wallet-animation');
    if (walletEl) {
        const addresses = [
            '0x7a16...f827',
            '0x3b2a...e491',
            '0x9c4d...b123',
            '0x1f8e...a456'
        ];
        let addrIndex = 0;
        
        setInterval(() => {
            if (walletEl) {
                walletEl.innerHTML = `<div class="address">${addresses[addrIndex]}</div>`;
                addrIndex = (addrIndex + 1) % addresses.length;
            }
        }, 2000);
    }
    
    // Blockchain animation
    const blockchainEl = document.querySelector('.blockchain-animation');
    if (blockchainEl) {
        let blockHeight = 18500000;
        
        setInterval(() => {
            if (blockchainEl) {
                blockHeight += Math.floor(Math.random() * 3) + 1;
                blockchainEl.innerHTML = `
                    <div class="block">
                        <span class="block-height">#${blockHeight.toLocaleString()}</span>
                        <span class="block-status">Confirmed</span>
                    </div>
                `;
            }
        }, 3000);
    }
    
    // Pulse animation
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
    
    const elements = heroContent.querySelectorAll('.hero-badge, .hero-title, .hero-subtitle, .hero-cta, .trust-bar');
    
    elements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        el.style.transitionDelay = `${index * 0.1}s`;
        
        setTimeout(() => {
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        }, 100);
    });
    
    // Animate hero visual
    const heroVisual = document.querySelector('.hero-visual');
    if (heroVisual) {
        heroVisual.style.opacity = '0';
        heroVisual.style.transform = 'scale(0.95)';
        heroVisual.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        heroVisual.style.transitionDelay = '0.3s';
        
        setTimeout(() => {
            heroVisual.style.opacity = '1';
            heroVisual.style.transform = 'scale(1)';
        }, 300);
    }
}

function initParallax() {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    
    let ticking = false;
    
    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                const scrolled = window.pageYOffset;
                const orbs = document.querySelectorAll('.gradient-orb');
                
                orbs.forEach((orb, index) => {
                    const speed = 0.05 + (index * 0.02);
                    const yPos = scrolled * speed;
                    orb.style.transform = `translateY(${yPos}px)`;
                });
                
                ticking = false;
            });
            
            ticking = true;
        }
    });
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href === '#') return;
        
        e.preventDefault();
        const target = document.querySelector(href);
        
        if (target) {
            const navHeight = document.querySelector('.nav').offsetHeight;
            const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Add hover effects for cards
document.querySelectorAll('.bento-card, .service-card, .security-card, .stat-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.zIndex = '10';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.zIndex = '1';
    });
});

// Counter animation enhancement
function animateCounters() {
    const counters = document.querySelectorAll('.stat-number[data-target]');
    
    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const target = parseFloat(counter.getAttribute('data-target'));
                const duration = 2000;
                const start = performance.now();
                const isDecimal = target % 1 !== 0;
                
                function updateCounter(currentTime) {
                    const elapsed = currentTime - start;
                    const progress = Math.min(elapsed / duration, 1);
                    const easeOut = 1 - Math.pow(1 - progress, 3);
                    const current = target * easeOut;
                    
                    if (isDecimal) {
                        counter.textContent = current.toFixed(2);
                    } else {
                        counter.textContent = Math.floor(current);
                    }
                    
                    if (progress < 1) {
                        requestAnimationFrame(updateCounter);
                    } else {
                        if (isDecimal) {
                            counter.textContent = target.toFixed(2);
                        } else {
                            counter.textContent = target;
                        }
                    }
                }
                
                requestAnimationFrame(updateCounter);
                counterObserver.unobserve(counter);
            }
        });
    }, { threshold: 0.5 });
    
    counters.forEach(counter => {
        counterObserver.observe(counter);
    });
}

// Initialize counter animations when DOM is ready
document.addEventListener('DOMContentLoaded', animateCounters);

// ===== MAIN JAVASCRIPT - BILLION DOLLAR SAAS =====
document.addEventListener('DOMContentLoaded', function() {
    // Waitlist form handling - opens email client
    const waitlistForm = document.getElementById('waitlistForm');
    if (waitlistForm) {
        waitlistForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = this.querySelector('input[name="email"]').value;
            const button = this.querySelector('button[type="submit"]');
            const originalText = button.textContent;
            
            // Open email client with pre-filled content
            const subject = encodeURIComponent('Waitlist Signup - Aetherion Exchange');
            const body = encodeURIComponent(`Hello,\n\nI would like to join the waitlist for Aetherion Exchange.\n\nMy email: ${email}\n\nThank you!`);
            
            window.location.href = `mailto:admin@coincooper.com?subject=${subject}&body=${body}`;
            
            button.textContent = '✓ Opening Email...';
            button.style.background = 'var(--success)';
            
            setTimeout(() => {
                button.textContent = originalText;
                button.style.background = '';
            }, 3000);
        });
    }
    
    // Demo button handling with better UX
    const demoButtons = document.querySelectorAll('a[href="#demo"], a[href="contact.html"]');
    demoButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            if (this.getAttribute('href') === '#demo') {
                e.preventDefault();
                
                // Smooth scroll to demo section
                const demoSection = document.getElementById('demo');
                if (demoSection) {
                    const navHeight = document.querySelector('.nav').offsetHeight;
                    const targetPosition = demoSection.getBoundingClientRect().top + window.pageYOffset - navHeight;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
    
    // Enhanced architecture nodes interaction
    const archNodes = document.querySelectorAll('.arch-node');
    archNodes.forEach(node => {
        node.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-6px) scale(1.02)';
            this.style.zIndex = '10';
        });
        
        node.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
            this.style.zIndex = '1';
        });
    });
    
    // Parallax effect for gradient orbs (enhanced)
    if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        let ticking = false;
        
        window.addEventListener('scroll', () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    const scrolled = window.pageYOffset;
                    const orbs = document.querySelectorAll('.gradient-orb');
                    
                    orbs.forEach((orb, index) => {
                        const speed = 0.03 + (index * 0.015);
                        const yPos = scrolled * speed;
                        orb.style.transform = `translateY(${yPos}px)`;
                    });
                    
                    ticking = false;
                });
                
                ticking = true;
            }
        });
    }
    
    // Enhanced scroll-triggered reveal for sections
    const revealElements = document.querySelectorAll('.section');
    
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });
    
    revealElements.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        revealObserver.observe(section);
    });
    
    // Enhanced marquee with pause on hover
    const marquee = document.querySelector('.marquee-content');
    if (marquee) {
        marquee.parentElement.addEventListener('mouseenter', () => {
            marquee.style.animationPlayState = 'paused';
        });
        
        marquee.parentElement.addEventListener('mouseleave', () => {
            marquee.style.animationPlayState = 'running';
        });
    }
    
    // Add copy functionality to code snippets (if any)
    const codeBlocks = document.querySelectorAll('pre code');
    codeBlocks.forEach(block => {
        const wrapper = block.parentElement;
        const button = document.createElement('button');
        button.className = 'copy-button';
        button.innerHTML = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>';
        button.setAttribute('aria-label', 'Copy code');
        button.style.cssText = `
            position: absolute;
            top: 10px;
            right: 10px;
            padding: 8px;
            background: rgba(99, 102, 241, 0.2);
            border: 1px solid rgba(99, 102, 241, 0.3);
            border-radius: 6px;
            color: var(--accent-primary);
            cursor: pointer;
            opacity: 0;
            transition: all 0.2s ease;
        `;
        
        wrapper.style.position = 'relative';
        wrapper.appendChild(button);
        
        wrapper.addEventListener('mouseenter', () => button.style.opacity = '1');
        wrapper.addEventListener('mouseleave', () => button.style.opacity = '0');
        
        button.addEventListener('click', function() {
            navigator.clipboard.writeText(block.textContent);
            button.innerHTML = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>';
            button.style.background = 'var(--success)';
            button.style.borderColor = 'var(--success)';
            
            setTimeout(() => {
                button.innerHTML = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>';
                button.style.background = '';
                button.style.borderColor = '';
            }, 2000);
        });
    });
    
    // Lazy load images
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    if (img.dataset.src) {
                        img.src = img.dataset.src;
                        img.classList.remove('lazy');
                    }
                    imageObserver.unobserve(img);
                }
            });
        });
        
        document.querySelectorAll('img.lazy').forEach(img => {
            imageObserver.observe(img);
        });
    }
    
    // Console branding
    console.log('%c🚀 Aetherion Exchange', 'font-size: 28px; font-weight: 800; background: linear-gradient(135deg, #6366F1, #8B5CF6); -webkit-background-clip: text; -webkit-text-fill-color: transparent; padding: 10px 0;');
    console.log('%cInstitutional-Grade Exchange Infrastructure', 'font-size: 14px; color: #94a3b8; margin-bottom: 10px;');
    console.log('%cBuilt with 🔥 by coincooper.com', 'font-size: 12px; color: #6366F1;');
    console.log('%cReady to launch your exchange? Contact: admin@coincooper.com', 'font-size: 11px; color: #64748b;');
});

// Utility: Check if element is in viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Utility: Debounce function
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Utility: Throttle function
function throttle(func, limit) {
    let inThrottle;
    return function executedFunction(...args) {
        if (!inThrottle) {
            func(...args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// Dashboard animations
function initDashboardAnimations() {
    // Live price updates
    const priceEl = document.querySelector('.chart-price');
    if (priceEl) {
        let basePrice = 67234.56;
        
        setInterval(() => {
            const change = (Math.random() - 0.5) * 50;
            basePrice += change;
            const newPrice = basePrice;
            priceEl.textContent = '$' + newPrice.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
            
            if (change > 0) {
                priceEl.classList.remove('down');
            } else {
                priceEl.classList.add('down');
            }
        }, 2000);
    }
    
    // Trading pairs price updates
    const pairs = document.querySelectorAll('.mockup-pair');
    if (pairs.length > 0) {
        const prices = [67234, 3456, 178.45, 0.5234];
        
        setInterval(() => {
            pairs.forEach((pair, index) => {
                const priceEl = pair.querySelector('.pair-price');
                if (priceEl) {
                    const change = (Math.random() - 0.5) * (prices[index] * 0.02);
                    prices[index] += change;
                    const newPrice = prices[index];
                    
                    if (change > 0) {
                        priceEl.classList.remove('down');
                    } else {
                        priceEl.classList.add('down');
                    }
                    
                    if (index === 3) {
                        priceEl.textContent = '$' + newPrice.toFixed(4);
                    } else if (index === 2) {
                        priceEl.textContent = '$' + newPrice.toFixed(2);
                    } else {
                        priceEl.textContent = '$' + Math.round(newPrice).toLocaleString();
                    }
                }
            });
        }, 3000);
    }
}

// Add dashboard init
document.addEventListener('DOMContentLoaded', initDashboardAnimations);

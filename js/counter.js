// ===== PREMIUM COUNTER ANIMATION - BILLION DOLLAR SAAS =====
document.addEventListener('DOMContentLoaded', function() {
    const counters = document.querySelectorAll('.stat-number[data-target]');
    
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (prefersReducedMotion) {
        counters.forEach(counter => {
            counter.textContent = counter.getAttribute('data-target');
        });
        return;
    }
    
    const observerOptions = {
        threshold: 0.5,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
                entry.target.classList.add('counted');
                animateCounter(entry.target);
            }
        });
    }, observerOptions);
    
    counters.forEach(counter => {
        observer.observe(counter);
    });
    
    function animateCounter(counter) {
        const target = parseFloat(counter.getAttribute('data-target'));
        const duration = 2500;
        const start = performance.now();
        const isDecimal = target % 1 !== 0;
        
        function updateCounter(currentTime) {
            const elapsed = currentTime - start;
            const progress = Math.min(elapsed / duration, 1);
            
            // Ease out cubic for smooth deceleration
            const easeOut = 1 - Math.pow(1 - progress, 3);
            const current = target * easeOut;
            
            if (isDecimal) {
                counter.textContent = current.toFixed(2);
            } else if (target >= 100) {
                counter.textContent = Math.floor(current).toLocaleString();
            } else {
                counter.textContent = Math.floor(current);
            }
            
            if (progress < 1) {
                requestAnimationFrame(updateCounter);
            } else {
                // Ensure final value is exact
                if (isDecimal) {
                    counter.textContent = target.toFixed(2);
                } else if (target >= 100) {
                    counter.textContent = target.toLocaleString();
                } else {
                    counter.textContent = target;
                }
            }
        }
        
        requestAnimationFrame(updateCounter);
    }
    
    // Animate stat suffix with counter
    function animateSuffix() {
        const stats = document.querySelectorAll('.stat-card');
        
        stats.forEach(stat => {
            const suffix = stat.querySelector('.stat-suffix');
            if (suffix) {
                suffix.style.opacity = '0';
                suffix.style.transform = 'translateY(10px)';
                suffix.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
                
                setTimeout(() => {
                    suffix.style.opacity = '1';
                    suffix.style.transform = 'translateY(0)';
                }, 1800);
            }
        });
    }
    
    animateSuffix();
});

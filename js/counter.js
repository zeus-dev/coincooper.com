// Counter animation for stats
document.addEventListener('DOMContentLoaded', function() {
    const counters = document.querySelectorAll('.stat-number');
    const speed = 200; // Animation speed
    
    const observerOptions = {
        threshold: 0.5
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
        const increment = target / speed;
        let current = 0;
        
        const updateCounter = () => {
            current += increment;
            
            if (current < target) {
                // Format number based on target
                if (target >= 1000) {
                    counter.textContent = Math.ceil(current).toLocaleString();
                } else if (target >= 10) {
                    counter.textContent = Math.ceil(current);
                } else {
                    counter.textContent = current.toFixed(2);
                }
                requestAnimationFrame(updateCounter);
            } else {
                // Final value
                if (target >= 1000) {
                    counter.textContent = target.toLocaleString();
                } else if (target >= 10) {
                    counter.textContent = target;
                } else {
                    counter.textContent = target.toFixed(2);
                }
            }
        };
        
        updateCounter();
    }
});

// Scroll animations using Intersection Observer
document.addEventListener('DOMContentLoaded', function() {
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (prefersReducedMotion) {
        // Skip animations for users who prefer reduced motion
        document.querySelectorAll('.fade-up').forEach(el => {
            el.classList.add('visible');
        });
        return;
    }
    
    // Intersection Observer for fade-up animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Optionally unobserve after animation
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe all elements with fade-up class
    document.querySelectorAll('.fade-up').forEach(el => {
        observer.observe(el);
    });
    
    // Stagger animation for grid items
    const grids = document.querySelectorAll('.bento-grid, .services-grid, .security-grid, .stats-grid');
    grids.forEach(grid => {
        const items = grid.querySelectorAll('.fade-up');
        items.forEach((item, index) => {
            item.style.transitionDelay = `${index * 0.1}s`;
        });
    });
    
    // Animate visual elements
    animateVisuals();
});

function animateVisuals() {
    // Orderbook animation
    const orderbookAnimation = document.querySelector('.orderbook-animation');
    if (orderbookAnimation) {
        setInterval(() => {
            const row = document.createElement('div');
            row.className = 'orderbook-row ' + (Math.random() > 0.5 ? 'buy' : 'sell');
            orderbookAnimation.appendChild(row);
            
            setTimeout(() => {
                row.remove();
            }, 2000);
        }, 500);
    }
    
    // Wallet animation
    const walletAnimation = document.querySelector('.wallet-animation');
    if (walletAnimation) {
        let count = 0;
        setInterval(() => {
            count++;
            walletAnimation.innerHTML = `<div style="padding: 20px; font-family: var(--font-mono); font-size: 0.75rem; color: var(--accent-primary);">0x${Math.random().toString(16).substr(2, 8)}...${Math.random().toString(16).substr(2, 4)}</div>`;
        }, 2000);
    }
    
    // Blockchain animation
    const blockchainAnimation = document.querySelector('.blockchain-animation');
    if (blockchainAnimation) {
        let blockHeight = 18500000;
        setInterval(() => {
            blockHeight++;
            blockchainAnimation.innerHTML = `<div style="padding: 20px; font-family: var(--font-mono); font-size: 0.875rem; color: var(--accent-success);">Block #${blockHeight.toLocaleString()}<br><span style="font-size: 0.75rem; color: var(--text-muted);">Confirmed</span></div>`;
        }, 3000);
    }
    
    // Pulse animation
    const pulseAnimation = document.querySelector('.pulse-animation');
    if (pulseAnimation) {
        pulseAnimation.innerHTML = '<div style="width: 100%; height: 100%; display: flex; align-items: center; justify-content: center;"><div style="width: 60px; height: 60px; border-radius: 50%; background: var(--accent-primary); animation: pulse 2s ease-in-out infinite;"></div></div>';
    }
}

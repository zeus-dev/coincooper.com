// Main JavaScript file
document.addEventListener('DOMContentLoaded', function() {
    // Waitlist form handling
    const waitlistForm = document.getElementById('waitlistForm');
    if (waitlistForm) {
        waitlistForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = this.querySelector('input[type="email"]').value;
            
            // Here you would typically send this to your backend
            // For now, we'll just show an alert
            alert(`Thank you for joining the waitlist! We'll contact you at ${email} when pricing is announced.`);
            this.reset();
        });
    }
    
    // Add loading state to demo buttons
    const demoButtons = document.querySelectorAll('a[href="#demo"], a[href="contact.html"]');
    demoButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            if (this.getAttribute('href') === '#demo') {
                e.preventDefault();
                // Scroll to contact section or show modal
                alert('Demo booking coming soon! Please contact us at admin@coincooper.com');
            }
        });
    });
    
    // Add hover effect to architecture nodes
    const archNodes = document.querySelectorAll('.arch-node');
    archNodes.forEach(node => {
        node.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-4px) scale(1.05)';
        });
        
        node.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // Parallax effect for gradient orbs
    if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        window.addEventListener('scroll', function() {
            const scrolled = window.pageYOffset;
            const orbs = document.querySelectorAll('.gradient-orb');
            
            orbs.forEach((orb, index) => {
                const speed = 0.5 + (index * 0.1);
                orb.style.transform = `translateY(${scrolled * speed}px)`;
            });
        });
    }
    
    // Add copy functionality to code snippets (if any)
    const codeBlocks = document.querySelectorAll('pre code');
    codeBlocks.forEach(block => {
        const button = document.createElement('button');
        button.className = 'copy-button';
        button.textContent = 'Copy';
        button.addEventListener('click', function() {
            navigator.clipboard.writeText(block.textContent);
            this.textContent = 'Copied!';
            setTimeout(() => {
                this.textContent = 'Copy';
            }, 2000);
        });
        block.parentElement.style.position = 'relative';
        block.parentElement.appendChild(button);
    });
    
    // Lazy load images (if any are added later)
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                    imageObserver.unobserve(img);
                }
            });
        });
        
        document.querySelectorAll('img.lazy').forEach(img => {
            imageObserver.observe(img);
        });
    }
    
    // Console easter egg
    console.log('%cAetherion Exchange', 'font-size: 24px; font-weight: bold; background: linear-gradient(135deg, #6366F1, #8B5CF6); -webkit-background-clip: text; -webkit-text-fill-color: transparent;');
    console.log('%cBuilt with 🔥 by coincooper.com', 'font-size: 14px; color: #6366F1;');
    console.log('%cInterested in joining our team? Contact us at admin@coincooper.com', 'font-size: 12px; color: #9CA3AF;');
});

// Utility function to detect if element is in viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Debounce function for performance
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

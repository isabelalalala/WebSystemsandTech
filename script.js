// Smooth scrolling for navigation
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
});

// Form submission with Mario sound effect simulation
function handleSubmit(e) {
    e.preventDefault();
    
    // Create coin collect animation
    const coin = document.createElement('div');
    coin.textContent = '💰';
    coin.style.position = 'fixed';
    coin.style.fontSize = '3rem';
    coin.style.left = '50%';
    coin.style.top = '50%';
    coin.style.transform = 'translate(-50%, -50%)';
    coin.style.zIndex = '10000';
    coin.style.animation = 'collect-coin 1s ease-out';
    document.body.appendChild(coin);
    
    setTimeout(() => {
        coin.remove();
        alert('🎉 Message sent! Thank you! You earned 100 points! 🌟');
        e.target.reset();
    }, 1000);
}

// Intersection Observer for skill blocks
const observerOptions = {
    threshold: 0.2,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.style.animation = 'fade-in-up 0.8s ease-out forwards';
            }, index * 100);
        }
    });
}, observerOptions);

document.querySelectorAll('.skill-block, .project-pipe, .education-item').forEach(el => {
    el.style.opacity = '0';
    observer.observe(el);
});

// Add random coin collecting sound effect on skill block click
document.querySelectorAll('.skill-block').forEach(block => {
    block.addEventListener('click', function() {
        const coinPop = document.createElement('div');
        coinPop.textContent = '+10';
        coinPop.style.position = 'fixed';
        coinPop.style.fontSize = '2rem';
        coinPop.style.fontWeight = 'bold';
        coinPop.style.color = 'var(--coin-gold)';
        coinPop.style.left = event.clientX + 'px';
        coinPop.style.top = event.clientY + 'px';
        coinPop.style.zIndex = '10000';
        coinPop.style.animation = 'score-pop 1s ease-out';
        coinPop.style.pointerEvents = 'none';
        coinPop.style.textShadow = '2px 2px 0 #000';
        document.body.appendChild(coinPop);
        
        setTimeout(() => coinPop.remove(), 1000);
    });
});
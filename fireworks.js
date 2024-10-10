function createFirework() {
    const fireworkContainer = document.createElement('div');
    fireworkContainer.classList.add('firework-container');
    fireworkContainer.style.left = Math.random() * 100 + 'vw';
    fireworkContainer.style.top = Math.random() * 100 + 'vh';

    // Create 80 particles per firework for a larger and fuller explosion
    for (let i = 0; i < 80; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        fireworkContainer.appendChild(particle);

        const angle = Math.random() * 360; // Random direction in degrees
        const distance = Math.random() * 400 + 100; // Larger random distance for bigger explosion
        const duration = Math.random() * 1 + 2; // Slightly longer animation duration for larger explosion

        particle.style.setProperty('--angle', `${angle}deg`);
        particle.style.setProperty('--distance', `${distance}px`);
        particle.style.setProperty('--duration', `${duration}s`);
    }

    document.getElementById('fireworks').appendChild(fireworkContainer);

    // Remove the firework after its animation ends
    setTimeout(() => {
        fireworkContainer.remove();
    }, 3000); // Max particle animation duration
}

// Continuously generate multiple fireworks
setInterval(() => {
    // Create 3 fireworks at once for a denser display
    for (let i = 0; i < 3; i++) {
        createFirework();
    }
}, 1200); // Slightly slower interval for multiple fireworks
document.addEventListener('DOMContentLoaded', () => {
    const nameInput = document.getElementById('nameInput');
    const greetButton = document.getElementById('greetButton');
    const greeting = document.getElementById('greeting');
    const animationContainer = document.getElementById('animation-container');

    const animations = ['confetti', 'party-popper', 'glowing-burst'];

    greetButton.addEventListener('click', () => {
        // 1. Get name and display greeting
        const name = nameInput.value.trim();
        if (name) {
            greeting.textContent = `Hello, ${name}!`;
        } else {
            greeting.textContent = 'Hello!';
        }

        // 2. Clear previous animations
        animationContainer.innerHTML = '';

        // 3. Trigger a random animation
        const randomAnimation = animations[Math.floor(Math.random() * animations.length)];
        
        if (randomAnimation === 'confetti') {
            createConfetti();
        } else {
            const animationDiv = document.createElement('div');
            animationDiv.classList.add(randomAnimation);
            animationContainer.appendChild(animationDiv);
            animationDiv.addEventListener('animationend', () => {
                animationDiv.remove();
            });
        }
    });

    function createConfetti() {
        const confettiCount = 100;
        for (let i = 0; i < confettiCount; i++) {
            const confetti = document.createElement('div');
            confetti.classList.add('confetti-piece');
            confetti.style.left = Math.random() * 100 + 'vw';
            confetti.style.animationDelay = Math.random() * 3 + 's';
            confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
            animationContainer.appendChild(confetti);
            confetti.addEventListener('animationend', () => {
                confetti.remove();
            });
        }
    }
});
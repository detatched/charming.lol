// Typing animation for the "Coming Soon" text
const comingSoonText = document.getElementById('coming-soon');
const text = comingSoonText.innerText;
let index = 0;

// Function to type out the text
function typeText() {
    comingSoonText.innerText = text.substring(0, index);
    index++;
    if (index <= text.length) {
        setTimeout(typeText, 150); // Adjust the typing speed here (150ms)
    }
}

// Trigger the typing animation after a short delay
setTimeout(() => {
    comingSoonText.style.opacity = '1'; // Fade in the text
    typeText(); // Start typing
}, 500); // 0.5s delay before typing starts

// Circle that follows the cursor
const cursorCircle = document.querySelector('.cursor-circle');

// Show circle after a short delay
setTimeout(() => {
    cursorCircle.style.opacity = '1'; // Show circle after 0.5s
}, 500); // 0.5s delay

// Move the circle with the cursor
window.addEventListener('mousemove', (e) => {
    const x = e.clientX;
    const y = e.clientY;
    cursorCircle.style.left = `${x - cursorCircle.offsetWidth / 2}px`;
    cursorCircle.style.top = `${y - cursorCircle.offsetHeight / 2}px`;
});

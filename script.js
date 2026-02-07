import { loveMessages } from './messages.js';

// ============================================
// CONFIGURATION
// ============================================

// Set your password here
const PASSWORD = "jellybeansoyabean";

// List your image filenames here (place images in the "images" folder)
const bubbleImages = [
    "images/IMG_4663.png",
    "images/IMG_4680.png",
    "images/IMG_4716.png",
    "images/IMG_4731.png",
    "images/IMG_4753.png",
    "images/IMG_4764 2.png",
    "images/IMG_4843.png",
    "images/IMG_4874.png",
    "images/IMG_4929.png",
    "images/IMG_5192.png",
    "images/IMG_5341.png",
    "images/IMG_5622.png",
    "images/IMG_5838.png",
    "images/IMG_5935.png",
    "images/IMG_6183.png",
    "images/IMG_1251.png",
    "images/IMG_6894.png",
    "images/IMG_6903.png",
    "images/IMG_6949.png",
    "images/IMG_6956.png",
    "images/IMG_6967.png",
    "images/IMG_7031.png",
    "images/7d9662ef-086e-45c8-ba7e-2feea8310d5c.png",
    "images/IMG_7647.png",
    "images/IMG_7701.png",
    "images/IMG_7742.png",
    "images/IMG_7809.png",
    "images/IMG_7878.png",
    "images/IMG_7889.png",
    "images/IMG_8278.png",
    "images/IMG_8279.png",
    "images/IMG_8281.png",
    "images/IMG_7952.png",
    "images/IMG_7971.png",
    "images/IMG_8094.png",
    "images/IMG_8100.png",
    "images/IMG_8258.png",
    "images/IMG_8411.png",
    "images/IMG_8478.png",
    "images/IMG_8516.png",
    "images/1c414062-c849-4034-a61c-68d4fcfe6a81.png",
    "images/IMG_1412.png",
    "images/IMG_1422.png",
    "images/IMG_1426.png",
    "images/IMG_8662.png",
    "images/3cc6b0ac-2a6a-475d-9133-8f45b8b1e90c.png",
    "images/IMG_8931 2.png",
    "images/IMG_8955 2.png",
    "images/IMG_8960 2.png",
    "images/IMG_3853 2.png",
    "images/IMG_8931.png",
    "images/IMG_8955.png",
    "images/IMG_8960.png",
    "images/IMG_3853.png",
];

// ============================================
// Code - No need to edit below this line
// ============================================

const lockScreen = document.getElementById('lock-screen');
const mainContent = document.getElementById('main-content');
const passwordInput = document.getElementById('password-input');
const unlockBtn = document.getElementById('unlock-btn');
const errorMessage = document.getElementById('error-message');
const loveBox = document.getElementById('love-box');
const messageDisplay = document.getElementById('message-display');
const loveMessageEl = document.getElementById('love-message');
const closeMessageBtn = document.getElementById('close-message');

// Track shown messages to avoid repeats until all are shown
let remainingMessages = [...loveMessages];

function checkPassword() {
    if (passwordInput.value === PASSWORD) {
        lockScreen.classList.add('hidden');
        mainContent.classList.remove('hidden');
        startBubbles();
    } else {
        errorMessage.classList.remove('hidden');
        passwordInput.value = '';
        passwordInput.focus();
    }
}

function getRandomMessage() {
    // Reset if we've shown all messages
    if (remainingMessages.length === 0) {
        remainingMessages = [...loveMessages];
    }

    // Pick a random message from remaining
    const index = Math.floor(Math.random() * remainingMessages.length);
    const message = remainingMessages[index];

    // Remove it from remaining
    remainingMessages.splice(index, 1);

    return message;
}

function showMessage() {
    loveMessageEl.textContent = getRandomMessage();
    messageDisplay.classList.remove('hidden');
}

function hideMessage() {
    messageDisplay.classList.add('hidden');
}

// Floating bubble images
function createBubble() {
    if (bubbleImages.length === 0) return;

    const bubble = document.createElement('img');
    bubble.src = bubbleImages[Math.floor(Math.random() * bubbleImages.length)];
    bubble.className = 'floating-bubble';

    // Random horizontal position
    bubble.style.left = Math.random() * 100 + 'vw';

    // Random size between 120px and 200px
    const size = 200 + Math.random() * 80;
    bubble.style.width = size + 'px';
    bubble.style.height = size + 'px';

    // Random animation duration between 8s and 15s
    const duration = 8 + Math.random() * 7;
    bubble.style.animationDuration = duration + 's';

    // Random horizontal sway
    bubble.style.setProperty('--sway', (Math.random() * 100 - 50) + 'px');

    document.body.appendChild(bubble);

    // Remove bubble after animation completes
    setTimeout(() => {
        bubble.remove();
    }, duration * 1000);
}

function startBubbles() {
    // Create initial bubbles
    for (let i = 0; i < 5; i++) {
        setTimeout(createBubble, i * 500);
    }

    // Keep creating bubbles
    setInterval(createBubble, 2000);
}

// Event listeners
unlockBtn.addEventListener('click', checkPassword);

passwordInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        checkPassword();
    }
});

loveBox.addEventListener('click', showMessage);
closeMessageBtn.addEventListener('click', hideMessage);

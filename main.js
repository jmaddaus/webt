// main.js
// IMPORT THE KERNEL
import { handleCommand } from './kernel.js';

const powerBtn = document.querySelector('.power-button');
const powerLed = document.querySelector('.power-led');
const screen = document.querySelector('.crt-screen');

const monitorContent = document.querySelector('.monitor-content');

// Input & Cursor elements
const cmdInput = document.getElementById('cmd');
const displayPre = document.getElementById('cmd-pre-cursor');
const displayCursor = document.getElementById('cmd-cursor');
const displayPost = document.getElementById('cmd-post-cursor');

// Apply the "OFF" visual states immediately
powerBtn.classList.remove('on'); // Button pops out
powerLed.classList.add('off'); // LED is dim
screen.classList.add('off'); // Screen is black

powerBtn.addEventListener('click', () => {
    const isCurrentlyOff = screen.classList.contains('off');

    if (isCurrentlyOff) {
        // TURN ON
        powerBtn.classList.add('on'); // Latch button
        powerLed.classList.remove('off'); // Light LED
        screen.classList.remove('off'); // Restore Content/Scanlines

        // Screen Animation: slight delay to simulate warm-up
        screen.style.opacity = '1';
        screen.style.animation = 'turnOn 0.4s linear forwards';

        setTimeout(() => {
            cmdInput.focus();
        }, 100);
    } else {
        // TURN OFF
        powerBtn.classList.remove('on'); // Pop button out
        powerLed.classList.add('off'); // Dim LED
        screen.classList.add('off'); // Hide Content/Scanlines
        cmdInput.blur();
    }
});


// Sync function: Maps the hidden input state to the visual spans
const updateCursor = () => {
    const text = cmdInput.value;
    const idx = cmdInput.selectionStart; // Where is the cursor?

    // Text BEFORE cursor
    displayPre.textContent = text.slice(0, idx);

    // The Cursor character itself
    // If we are at the end of the line, the cursor is a non-breaking space
    const charAtCursor = text.charAt(idx) || '\u00A0';
    displayCursor.textContent = charAtCursor;

    // Text AFTER cursor
    displayPost.textContent = text.slice(idx + 1);
};

// Listeners to keep it in sync
cmdInput.addEventListener('input', updateCursor);     // Typing
cmdInput.addEventListener('keydown', updateCursor);   // Arrow keys
cmdInput.addEventListener('keyup', updateCursor);     // Arrow keys release
cmdInput.addEventListener('click', updateCursor);     // Mouse clicks

// Add listener to focus input whenever the screen is clicked
monitorContent.addEventListener('click', (e) => {
    // Optional: Don't refocus if the user is trying to select text to copy
    if (window.getSelection().toString().length > 0) {
        return;
    }

    // Force focus to the hidden input
    cmdInput.focus();
});

cmdInput.addEventListener('keydown', async function (e) {
    if (e.key === 'Enter') {
        const fullCmd = cmdInput.value.trim();

        // 1. Clear Input Visually immediately
        cmdInput.value = '';
        updateCursor();

        // 2. Hand off to the Kernel
        await handleCommand(fullCmd);
    }
});


export function execute(args) {
    // Select the hardware elements
    const screen = document.querySelector('.crt-screen');
    const button = document.querySelector('.power-button');
    const led = document.querySelector('.power-led');

    // This ID must match your index.html and kernel.js
    const historyDiv = document.getElementById('history');

    // Trigger the "Off" animations
    if (screen) screen.classList.add('off');
    if (led) led.classList.add('off');
    if (button) button.classList.remove('on');

    // Clear the terminal history after the screen goes dark
    setTimeout(() => {
        if (historyDiv) historyDiv.innerHTML = '';
    }, 500);

    // Return message
    return "System halting...";
}
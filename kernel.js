// main.js
const input = document.getElementById('cmd');
const history = document.getElementById('history');
const terminal = document.getElementById('terminal');
const monitorContent = document.querySelector('.monitor-content');
const validCommands = ['help', 'about', 'ls', 'cat', 'clear', 'wget'];

const scrollToBottom = () => {
    monitorContent.scrollTop = monitorContent.scrollHeight;
};

input.addEventListener('keydown', async function (e) {
    if (e.key === 'Enter') {
        const fullCmd = input.value.trim();
        const [cmd, ...args] = fullCmd.split(' ');

        // Echo Command
        addToHistory(`visitor@web:~$ ${fullCmd}`, 'command-echo');
        input.value = '';

        if (!cmd) return;

        // Clear handling (Local built-in)
        if (cmd === 'clear') {
            history.innerHTML = '';
            return;
        }

        // Dynamic Import Logic
        if (validCommands.includes(cmd)) {
            try {
                // This tries to find a file with the command name in /commands
                const module = await import(`./commands/${cmd}.js`);

                // Run the exported 'execute' function from that module
                const result = await module.execute(args);

                if (result) addToHistory(result);
            } catch (error) {
                // If the file doesn't exist, import throws an error
                console.error("Command crashed:", error);
                addToHistory(`Error executing ${cmd}`);
            }
        } else {
            // Handle unknown commands here (No 404 request made!)
            addToHistory(`bash: ${cmd}: command not found`);
        }
        // Scroll to bottom
        scrollToBottom();
    }
});

function addToHistory(text, type = '') {
    const div = document.createElement('div');
    div.className = `output-line ${type}`;
    if (type === 'command-echo') {
        div.textContent = text;
    } else {
        div.innerHTML = text;
    }
    history.appendChild(div);
    scrollToBottom();
}

addToHistory("Welcome to WebTerm v0.1.1. Type 'help' to see available files/commands.");
export const execute = async (args) => {
    if (args.length === 0) {
        return `cat &lt;filename arg&gt; ($ cat example.txt): Shows content of file.`;
    }

    // Clean the filename (remove .txt if user typed it)
    const origName = args[0].toLowerCase()
    const fileName = args[0].toLowerCase().replace('.txt', '');

    const fileRegistry = {
        'about': '../files/about.js',
        'contact': '../files/contact.js',
        'resume': '../files/resume.js',
    };

    const targetFile = fileRegistry[fileName];

    if (!targetFile) {
        return `cat: '${origName}' not found!`;
    }


    try {
        // Dynamically import the file content
        const fileModule = await import(`${targetFile}`);

        // Return the string (accessed via .default)
        return fileModule.default;

    } catch (error) {
        return `cat: ${args[0]}: No such file or directory`;
    }
};
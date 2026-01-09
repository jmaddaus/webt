export const execute = async (args) => {
    if (args.length === 0) {
        return "Usage: cat <filename>";
    }

    // Clean the filename (remove .txt if user typed it)
    const fileName = args[0].toLowerCase().replace('.txt', '');

    try {
        // Dynamically import the file content
        const fileModule = await import(`../files/${fileName}.js`);

        // Return the string (accessed via .default)
        return fileModule.default;

    } catch (error) {
        return `cat: ${args[0]}: No such file or directory`;
    }
};
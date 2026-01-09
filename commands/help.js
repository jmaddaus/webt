export const execute = async (args) => {
    return `
command <arguments> ($ example): Comments.
help ($ help): Displays this help information.
clear ($ clear): Clears the terminal display.
about ($ about): Displays information about the creator of this terminal.
ls ($ ls): Displays files available in the working directory.
cat <filename arg> ($ cat example.txt): Shows content of file.
wget <filename arg> ($ wget resume.pdf): Downloads the file on the terminal web host if available.
    `.trim();
};
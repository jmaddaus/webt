export const execute = async (args) => {
    return `
command &lt;arguments&gt; ($ example): Comments.
---------
help ($ help): Displays this help information.
clear ($ clear): Clears the terminal display.
exit ($ exit): Exits the terminal session.
about ($ about): Displays information about the creator of this terminal.
ls ($ ls): Displays files available in the working directory.
cat &lt;filename arg&gt; ($ cat example.txt): Shows content of file.
wget &lt;filename arg&gt; ($ wget resume.pdf): Downloads the file from the terminal.
    `.trim();
};
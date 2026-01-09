export const execute = async (args) => {
    if (args.length === 0) {
        return "wget <filename arg> ($ wget resume.pdf): Downloads the file on the terminal web host if available.";
    }

    const filename = args[0].toLowerCase();

    const fileRegistry = {
        'resume': './assets/jmaddaus_resume.pdf',
        'resume.pdf': './assets/jmaddaus_resume.pdf',
        'resume.txt': './assets/jmaddaus_resume.pdf' // give them the PDF anyway
    };

    const targetFile = fileRegistry[filename];

    if (!targetFile) {
        return `wget: unable to resolve host address '${filename}'`;
    }

    // Trigger browser download component
    // Create a temporary link, click it, and destroy it.
    const link = document.createElement('a');
    link.href = targetFile;
    link.download = 'jmaddaus_resume.pdf'; // The name the user's computer will save it as
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    const now = new Date();
    const dateStr = now.toISOString().replace('T', ' ').split('.')[0];

    // output for the terminal
    return `
--${dateStr}--  http://webterm.local/${filename}
Resolving webterm.local... 127.0.0.1
Connecting to webterm.local|127.0.0.1|:80... connected.
HTTP request sent, awaiting response... 200 OK
Length: 167936 (164K) [application/pdf]
Saving to: 'jmaddaus_resume.pdf'

resume.pdf          100%[===================>] 164.00K  --.-KB/s    in 0.02s   

${dateStr} (8.20 MB/s) - 'jmaddaus_resume.pdf' saved [167936/167936]
`.trim();
};
export const execute = async (args) => {
    const files = [
        "\tabout.txt",
        "\tresume.txt",
        "\tcontact.txt"
    ];

    // Optional: Sort them alphabetically
    return files.sort().join('\n');
};
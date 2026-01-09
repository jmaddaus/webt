const email = String.fromCharCode(106, 109, 64, 100, 100, 97, 117, 115, 46, 100, 101, 118);

export default `
Name: John Maddaus
Role: Software Engineer
Location: Greater Boston Area
Email: <a href="mailto:${email}">${email}</a>
Web: <a href="https://jmaddaus.com/" target="_blank">jmaddaus.com</a>
GitHub: <a href="https://github.com/jmaddaus/" target="_blank">github.com/jmaddaus</a>
LinkedIn: <a href="https://linkedin.com/in/jmaddaus/" target="_blank">linkedin.com/in/jmaddaus</a>
    `.trim();
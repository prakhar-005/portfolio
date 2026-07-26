const fs = require('fs');

const content = fs.readFileSync('./src/sections/Hero.jsx', 'utf8')
  .replace(
    `import { SiGithub, SiLinkedin } from "react-icons/si";`,
    `import { SiGithub, SiLinkedin } from "react-icons/si";`
  );
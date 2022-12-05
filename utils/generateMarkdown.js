const licenseLink = {
  Unlicense: "http://unlicense.org/",
  MIT: "https://www.mit.edu/~amini/LICENSE.md",
  Eclipse: "https://www.eclipse.org/legal/epl-2.0/"
};

function renderLicense() {
  if (data.license == 'Unlicense') {
    return `[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](${licenseLink})`;
  } else if (data.license == 'MIT') {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](${licenseLink})`;
  } else {
    return `[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](${licenseLink})`;
  }
}

function generateMarkdown(data) {  
  const {title, description, installation, usage, contribution, tests, license, github, email} = data;
  const readmeTemplate = `
        # ${title}  
        <a name='license'></a>
        ## License  
        ${renderLicense(license)}
        ## Description  
        ${description}
        ## Table of Contents
        * [Installation](#installation)
        * [Usage](#usage)
        * [Contributions](#contributions)
        * [Test Instructions](#tests)        
        * [Contact](#contact)
        <a name='installation'></a>
        ## Installation  
        ${installation}
        <a name='usage'></a>
        ## Usage  
        ${usage}
        <a name='contributions'></a>
        ## Contributions  
        ${contribution}  
        <a name='tests'></a>
        ## Test Instructions  
        ${tests}        
        <a name='contact'></a>
        ## Contact 
        * GitHub: https://www.github.com/${github}/
        * Email: ${email}`;
        
  return readmeTemplate;
}

module.exports = generateMarkdown;

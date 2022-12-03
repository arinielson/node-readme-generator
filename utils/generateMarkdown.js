const licenseInfoLink = {
  Unlicense: "http://unlicense.org/",
  MIT: "https://www.mit.edu/~amini/LICENSE.md",
  Eclipse: "https://www.eclipse.org/legal/epl-2.0/"
};

function renderLicense() {
  if (data.license == 'Unlicense') {
    return `[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](${licenseInfoLink})`;
  } else if (data.license == 'MIT') {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](${licenseInfoLink})`;
  } else {
    return `[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](${licenseInfoLink})`;
  }
}

function generateMarkdown(data) {  
  readmeTemplate = `
        # ${data.title}  
        <a name='license'></a>
        ## License  
        ${renderLicense(data.license)}
        ## Description  
        ${data.description}
        ## Table of Contents
        * [Installation](#installation)
        * [Usage](#usage)
        * [Contributions](#contributions)
        * [Test Instructions](#tests)        
        * [Contact](#contact)
        <a name='installation'></a>
        ## Installation  
        ${data.installation}
        <a name='usage'></a>
        ## Usage  
        ${data.usage}
        <a name='contributions'></a>
        ## Contributions  
        ${data.contribution}  
        <a name='tests'></a>
        ## Test Instructions  
        ${data.tests}        
        <a name='contact'></a>
        ## Contact 
        * GitHub: https://www.github.com/${data.github}/
        * Email: ${data.email}`;
        
  return readmeTemplate;
}

module.exports = generateMarkdown;

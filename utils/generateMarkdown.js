//function renderLicense(license) {}

function generateMarkdown(data) {
  const {Title, Description, Installation, Usage, Contributing, Tests, License, GitHub, Email} = data;
  const readmeTemplate = `
        # ${Title}  
        ## Description  
        ${Description}
        ## Table of Contents
        * [Installation](#installation)
        * [Usage](#usage)
        * [Contributions](#contributions)
        * [Test Instructions](#tests)
        * [License](#license)
        * [Contact](#contact)
        <a name='installation'></a>
        ## Installation  
        ${Installation}
        <a name='usage'></a>
        ## Usage  
        ${Usage}
        <a name='contributions'></a>
        ## Contributions  
        ${Contributing}  
        <a name='tests'></a>
        ## Test Instructions  
        ${Tests}
        <a name='license'></a>
        ## License  
        ${License}
        <a name='contact'></a>
        ## Contact 
        * GitHub: ${GitHub}
        * Email: ${Email}`;
        
  return readmeTemplate;
}

module.exports = generateMarkdown;

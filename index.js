const fs = require('fs');
const inquirer = require('inquirer');
const questions = require('./questions');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    const fData = generateMarkdown(data);
    fs.writeToFile (fileName, fData, (err) => {
        if(err) {
            console.log(err);
        }
        console.log('README is generated')
    })
}

function init() {
    inquirer.prompt(questions)
    .then(({answers}) => writeToFile('README.md', answers));
}

init();

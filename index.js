const fs = require('fs');
const inquirer = require('inquirer');

const generateMarkdown = require('./utils/generateMarkdown');
const questions = require('./questions');

function writeToFile(fileName, data) {
    const fileData = generateMarkdown(data);
    fs.writeFile (fileName, fileData, (err) => {
        if(err) {
            return console.log(err);
        }
        console.log('README is generated')
    });
}

function init() {
    inquirer.prompt(questions)
    .then((answers) => writeToFile('README.md', answers));
}

init();

const fs = require('fs');
const inquirer = require('inquirer');
const questions = require('./questions');
const generateMarkdown = require('./utils/generateMarkdown');


function writeToFile(fileName, data) {
    let fileData = generateMarkdown(data);
    fs.writeFile (fileName, fileData, (err) => {
        if(err) {
            return console.log(err);
        }
        console.log('README is generated')
    })
}

function init() {
    inquirer.prompt(questions)
    .then(({answers}) => writeToFile('New-README.md', answers));
}

init();

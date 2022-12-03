const fs = require('fs');
const inquirer = require('inquirer');
const questions = require('./questions');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create a function to write README file

function readMeData(title, description, installation, usage, contribution, tests, license, github, email){
    this.title = title;
    this.description = description;
    this.installation = installation;
    this.usage = usage;
    this.contribution = contribution;
    this.tests = tests;
    this.license = license;
    this.github = github;
    this.email = email;
}

function writeToFile(fileName, data) {
    let fData = generateMarkdown(data);
    fs.writeFile (fileName, fData, (err) => {
        if(err) {
            return console.log(err);
        }
        console.log('README is generated')
    })
}

function init() {
    inquirer.prompt(questions)
    .then(({answers}) => writeToFile('README.md', answers));
}

init();

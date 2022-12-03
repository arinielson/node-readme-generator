const questions = [
    {
        type: `input`,
        name: `title`,
        question: `What's the project title?`,
        validate: (value) => {if(value){return true}else{return `Please provide a Title`}}
    },
    {
        type: `input`,
        name: `description`,
        question: `Please briefly describe your project.`,        
        validate: (value) => {if(value){return true}else{return `Please provide a Description`}}
    },
    {
        type: `input`,
        name: `installation`,
        question: `What are the Installation steps for your project?`,        
        validate: (value) => {if(value){return true}else{return `Please provide Installation steps`}}
    },
    {
        type: `input`,
        name: `usage`,
        question: `What is the Usage information for your project?`,        
        validate: (value) => {if(value){return true}else{return `Please provide Usage information`}}
    },
    {
        type: `input`,
        name: `contribution`,
        question: `What are the Contribution Guidelines for your project?`,        
        validate: (value) => {if(value){return true}else{return `Please provide Contribution Guidelines`}}
    },
    {
        type: `input`,
        name: `tests`,
        question: `What are the test instructions for your project?`,        
        validate: (value) => {if(value){return true}else{return `Please provide Tests information`}}
    },
    {
        type: `list`,
        name: `license`,
        question: `Please choose a license:`,        
        choices: [
            `Unlicense`,
            `MIT`,
            `Eclipse`
        ]
    },    
    {
        type: `input`,
        name: `gitHub`,
        question: `What is your GitHub username?`,        
        validate: (value) => {if(value){return true}else{return `Please provide a Github username`}}
    },
    {
        type: `input`,
        name: `email`,
        question: `What is your email address?`,        
        validate: (value) => {if(value){return true}else{return `Please provide an email`}}
    }
];

module.exports = questions;
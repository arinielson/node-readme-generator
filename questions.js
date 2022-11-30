const questions = [
    {
        type: `input`,
        name: `Title`,
        question: `What's the project title?`,
        validate: (value) => {if(value){return true}else{return `Please provide a Title`}}
    },
    {
        type: `input`,
        name: `Description`,
        question: `Please briefly describe your project.`,        
        validate: (value) => {if(value){return true}else{return `Please provide a Description`}}
    },
    {
        type: `input`,
        name: `Installation`,
        question: `What are the Installation steps for your project?`,        
        validate: (value) => {if(value){return true}else{return `Please provide Installation steps`}}
    },
    {
        type: `input`,
        name: `Usage`,
        question: `What is the Usage information for your project?`,        
        validate: (value) => {if(value){return true}else{return `Please provide Usage information`}}
    },
    {
        type: `input`,
        name: `Contributing`,
        question: `What are the Contribution Guidelines for your project?`,        
        validate: (value) => {if(value){return true}else{return `Please provide Contribution Guidelines`}}
    },
    {
        type: `input`,
        name: `Tests`,
        question: `What are the test instructions for your project?`,        
        validate: (value) => {if(value){return true}else{return `Please provide Tests information`}}
    },
    {
        type: `list`,
        name: `License`,
        question: `Please choose a license:`,        
        choices: [
            `Unlicense`,
            `MIT`,
            `Eclipse`
        ]
    },    
    {
        type: `input`,
        name: `GitHub`,
        question: `What is your GitHub user URL?`,        
        validate: (value) => {if(value){return true}else{return `Please provide a Github user URL`}}
    },
    {
        type: `input`,
        name: `Email`,
        question: `What is your email address?`,        
        validate: (value) => {if(value){return true}else{return `Please provide an email`}}
    }
];

module.exports = questions;
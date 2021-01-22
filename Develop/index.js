// TODO: Include packages needed for this application
const generateMarkdown = require('./utils/generateMarkdown')
const {writeFile} = require('fs');
const inquirer = require('inquirer');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the name for this project?',
    },
    {
        type: 'input',
        name: 'User',
        message: 'Please enter your given name.',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please provide a brief description of the project',
    },
    {
        type: 'input',
        name: 'general',
        message: 'Please provide a detailed explanation of the project and its requirements',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide usage instructions for this application',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'How does a user install this application?',
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Guidelines for contributions to this project?',
    },
    {
        type: 'list',
        name: 'license',
        message: 'what is the license for this project?',
        choices: [ 'MIT', 'Mozzila', 'IBM']
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
        writeFile(fileName,data,'utf8', (err) => console.log('error please try again', err));
}

// TODO: Create a function to initialize app
 async function init() {
    const answer = await inquirer.prompt(questions);
    console.log('answers are', answer);
    const markDown = generateMarkdown(answer);
    console.log('generated markdown', markDown);
    writeToFile(answer.title + '_read.md', markDown)
}

// Function call to initialize app
init();

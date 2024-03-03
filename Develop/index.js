// TODO: Include packages needed for this application
const inquirer = require(`inquirer`);
const fs = require(`fs`);
const path = require(`path`);
const generateMarkdown = require (`./utils/generateMarkdown`)

// TODO: Create an array of questions for user input
const questions = [
    {
        type: `input`,
        name: 'github',
        message: `Enter Your Github Account Name`
    },
    {
        type: `input`,
        name: 'email',
        message: `Enter Your Email Address`
    },
    {
        type: `input`,
        name: 'Doc Title',
        message: `what is the title for the Repo`
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please type a short description of your project:',
    },
    {
        type: 'input',
        name: 'install',
        message: 'What command should be run to install dependencies?',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(fileName), data)
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((response) =>{
        console.log("Congrats and the new README FILE")
        writeToFile(`README.md`, generateMarkdown({...response}))
    })
}

// Function call to initialize app
init();

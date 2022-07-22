const inquirer = require("inquirer");
const fs = require('fs');
const generateHTML = require('./utils/generateHTML')

const manager = [
    {
        type: 'input',
        name: 'name',
        message: 'What is the name of the team manager?'
    },
    {
        type: 'input',
        name: 'id',
        message: 'What is the team managers ID?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is the team managers email?'
    },
    {
        type: 'input',
        name: 'officeNumber',
        message: 'What is the team managers office number?'
    },
    {
        type: 'list',
        name:'teamMember',
        message: 'Would you like to add another employee?',
        choices: ['Engineer', 'Intern', 'No, I am done']
    }
]

const engineer = [
    {
        type: 'input',
        name: 'name',
        message: 'What is the name of the engineer?'
    },
    {
        type: 'input',
        name: 'id',
        message: 'What is the engineers ID?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is the engineers email?'
    },
    {
        type: 'input',
        name: 'gitHub',
        message: 'What is the engineers github?'
    },
    {
        type: 'list',
        name:'teamMember',
        message: 'Would you like to add another employee?',
        choices: ['Engineer', 'Intern', 'No, I am done']
    }
]

const intern = [
    {
        type: 'input',
        name: 'name',
        message: 'What is the name of the intern?'
    },
    {
        type: 'input',
        name: 'id',
        message: 'What is the interns ID?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is the interns email?'
    },
    {
        type: 'input',
        name: 'school',
        message: 'Which school does the intern attend?'
    },
    {
        type: 'list',
        name:'teamMember',
        message: 'Would you like to add another employee?',
        choices: ['Engineer', 'Intern', 'No, I am done']
    }
]

// function to loop through tm question

function writeToFile() {
    return fs.writeFile('./dist/', generateHTML);
}

function repeatQuestions(data) {
    if (data.teamMember === 'Engineer') {
        inquirer.prompt(engineer)
    } else if (data.teamMember === 'Intern') {
        inquirer.prompt(intern)
    } else if (data.teamMember === 'No, I am done') {
        writeToFile();
    };
}

// initiate function

function init() {
    inquirer.prompt(manager);
}

// function for no i am done
init();


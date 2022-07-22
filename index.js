const inquirer = require("inquirer");
const fs = require('fs');
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const generateHTML = require('./utils/generateHTML');

const team = [];

const promptManager = () => {
    return inquirer.prompt([
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
    ]).then (answers => {
        const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
        team.push(manager);
        if (answers.teamMember === 'Engineer') {
            promptEngineer();
        } else if (answers.teamMember === 'Intern') {
            promptIntern();
        } else {
            writeToFile();
        }
    })
    .catch(err => {
        if (err) {
            console.log(err)
        }
    })
};

const promptEngineer = () => {
    return inquirer.prompt([
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
    ]).then (answers => {
        const engineer = new Engineer(answers.name, answers.id, answers.email, answers.gitHub);
        team.push(engineer);
        if (answers.teamMember === 'Engineer') {
            promptEngineer();
        } else if (answers.teamMember === 'Intern') {
            promptIntern();
        } else {
            writeToFile();
        }
    })
    .catch(err => {
        if (err) {
            console.log(err)
        }
    })
};

function writeToFile() {
    fs.writeFile('./dist/index.html', generateHTML(team),
    (err) =>
        err ? console.log(err) : console.log('Success'));
};

const promptIntern = () => {
    return inquirer.prompt([
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
    ]).then (answers => {
        const intern = new Intern(answers.name, answers.id, answers.email, answers.school);
        team.push(intern);
        if (answers.teamMember === 'Engineer') {
            promptEngineer();
        } else if (answers.teamMember === 'Intern') {
            promptIntern();
        } else {
            writeToFile();
        }
    })
    .catch(err => {
        if (err) {
            console.log(err)
        }
    })
};

promptManager();


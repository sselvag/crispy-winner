const inquirer = require("inquirer");
const fs = require('fs');
const generateHTML = require('./utils/generateHTML');
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');

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
        const manager = new Manager(data.name, data.id, data.email, data.officeNumber);
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
        const engineer = new Engineer(data.name, data.id, data.email, data.gitHub);
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
        const intern = new Intern(data.name, data.id, data.email, data.school);
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

function writeToFile() {
    return fs.writeFile('./dist/index.html', generateHTML(team));
}

promptManager();


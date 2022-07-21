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
        name: 'officenumber',
        message: 'What is the team managers office number?'
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
        name: 'github',
        message: 'What is the engineers github?'
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
        name: 'officenumber',
        message: 'Which school does the intern attend?'
    }
]
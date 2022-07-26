// required modules
const fs = require('fs');
const inquirer = require('inquirer');

// class modules
const Manager = require('./lib/Manager.js');
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');

// profile list
const profile = [{
    type: 'list',
    name: 'profile',
    message: 'please choose a profile to create?',
    choices: ['Manager', 'Engineer', 'Intern', 'End']
}]

// Manager
const manQues = [{
    type: 'input',
    name: 'name',
    message: "Please input manager's name?",
    validate: manager => {
        if (manager) {
            return true;
        } else {
            console.log('Please enter a name.');
            return false;
        }
    }
},
{
    type: 'input',
    name: 'id',
    message: "please input manager's employee ID?",
    validate: id => {
        if (id) {
            return true;
        } else {
            console.log('Please enter an ID.');
            return false;
        }
    }
},
{
    type: 'input',
    name: 'email',
    message: "please input manager's email address?",
    validate: email => {
        if (email) {
            return true;
        } else {
            console.log('Please enter an email address.');
            return false;
        }
    }
},
{
    type: 'input',
    name: 'officeNumber',
    message: "please input manager's office number?",
    validate: office => {
        if (office) {
            return true;
        } else {
            console.log('Please enter an office number.');
            return false;
        }
    }git
}
]

inquirer.prompt(profile)
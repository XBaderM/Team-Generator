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
const manager= [{
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
    }
}
]

// Intern 
const intern= [{
    type: 'input',
    name: 'name',
    message: "please enter intern's name?",
    validate: Intern => {
        if (intern) {
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
    message: "please enter intern's employee ID?",
    validate: id=> {
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
    message: "please enter email address?",
    validate: email=> {
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
    name: 'school',
    message: 'please name the school intern attended?',
    validate: school => {
        if (school) {
            return true;
        } else {
            console.log('Please enter a school.');
            return false;
        }
    }
}
]

// Engineer
const engineer = [{
    type: 'input',
    name: 'name',
    message: "please enter engineer's name?",
    validate: engineer => {
        if (engineer) {
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
    message: "please enter engineer's employee ID?",
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
    message: "please enter engineer's email address?",
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
    name: 'github',
    message: "please enter engineer's GitHub username?",
    validate: github => {
        if (github) {
            return true;
        } else {
            console.log('Please enter a GitHub username.');
            return false;
        }
    }
}
]




inquirer.prompt(profile)
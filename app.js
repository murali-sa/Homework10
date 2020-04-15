// Dependencies needed
    //inquirer will allow us to ask the user questions
const inquirer = require('inquirer');

// Classes
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const {
    defineEmployee, 
    employeeQuestions, 
    managerQuestions, 
    engineerQuestions, 
    internQuestions
} = require('./lib/inquire');

//Employees created

const htmlRenderer = require('./lib/htmlRenderer');

const employeeArray = [];

function init() {
    inquirer
    .prompt(employeeQuestions.concat(managerQuestions))
    .then(({name, id, email, officeNumber}) => {
        let manager = new Manager(name, id, officeNumber, email);
        employeeArray.push(manager);
        getEmployee();
    })
}

function getEmployee() {
    inquirer
    .prompt(defineEmployee)
    .then(({userChoice}) => {
        switch (userChoice) {
            case 'Engineer':
                getEngineer();
                break;
            case 'Intern':
                getIntern();
                break;
            case 'Complete':
                htmlRenderer(employeeArray);
                // TODO - How to export employee list keeping functions and display logic separate
                break;
        }
    })
}

function getEngineer() {
    inquirer
    .prompt(employeeQuestions.concat(engineerQuestions))
    .then(({name, id, email, githubUsername}) => {
        let engineer = new Engineer(name, id, githubUsername, email);
        employeeArray.push(engineer);
        getEmployee();
    })
}

function getIntern() {
    inquirer
    .prompt(employeeQuestions.concat(internQuestions))
    .then(({name, id, email, school}) => {
        let intern = new Intern(name, id, school, email);
        employeeArray.push(intern)
        getEmployee();
    })
}

// Methods
init();
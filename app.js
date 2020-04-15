//
//require inquirer
//
const inquirer = require('inquirer');
//
// Classes (main employee class extended to others)
//
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
//
// defined in inquire.js file
//
const {
    defineEmployee,
    employeeQuestions,
    managerQuestions,
    engineerQuestions,
    internQuestions
} = require('./lib/inquire');
//
//htmlrenderer object
//
const htmlRenderer = require('./lib/htmlRenderer');
//
// initialize employee array
//
const employeeArray = [];
//
// starter function
//
function init() {
    inquirer
        .prompt(employeeQuestions.concat(managerQuestions))
        .then(({ name, id, email, officeNumber }) => {
            let manager = new Manager(name, id, officeNumber, email);
            employeeArray.push(manager);
            getEmployee();
        })
}
//
// employee info
// first prompt for engineer or intern
// 
function getEmployee() {
    inquirer
        .prompt(defineEmployee)
        .then(({ userChoice }) => {
            switch (userChoice) {
                case 'Engineer':
                    getEngineer();
                    break;
                case 'Intern':
                    getIntern();
                    break;
                case 'Complete':
                    htmlRenderer(employeeArray);
                    // when done, call html renderere with the employee array
                    break;
            }
        })
}
//
// if engineer chosen
// get employee questions and add to engineer question responses
// add to the employee array
//
function getEngineer() {
    inquirer
        .prompt(employeeQuestions.concat(engineerQuestions))
        .then(({ name, id, email, githubUsername }) => {
            let engineer = new Engineer(name, id, githubUsername, email);
            employeeArray.push(engineer);
            getEmployee(); // go back to menu
        })
}
//
// if intern chosen
// get employee questions and add to intern question responses
// add to the employee array
//
function getIntern() {
    inquirer
        .prompt(employeeQuestions.concat(internQuestions))
        .then(({ name, id, email, school }) => {
            let intern = new Intern(name, id, school, email);
            employeeArray.push(intern)
            getEmployee(); // go back to menu
        })
}
//
// start
//
init();
const inquire = {
    defineEmployee: [
        {
            type: 'list',
            message: 'Enter Personnel Type:',
            name: 'userChoice',
            choices: ['Engineer', 'Intern', 'Complete']
        }
    ],
    employeeQuestions: [
        {
            type: "input",
            message: "Your name:",
            name: "name"
        },
        {
            type: 'input',
            message: 'Your Employee ID number:',
            name: 'id',
        },
        {
            type: 'input',
            message: 'Your email:',
            name: 'email',
        }

    ],
    managerQuestions: [
        {
            type: 'input',
            message: 'Your Office Number:',
            name: 'officeNumber',
        }
    ],
    engineerQuestions: [
        {
            type: 'input',
            message: 'Your GitHub Username:',
            name: 'githubUsername'
        }
    ],
    internQuestions: [
        {
            type: 'input',
            message: 'Your School:',
            name: 'school'
        }
    ]
};

module.exports = inquire;
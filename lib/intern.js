//
// Intern - Employee extended
//
const Employee = require("./Employee");

class Intern extends Employee {
    constructor(name, id, school, email, title = "Intern") {
        super(name, id, email, title)
        this.school = school;
    }
    getSchool(){
        return this.school;
    }
}
//
// export intern
//
module.exports = Intern;
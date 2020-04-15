
class Employee {
    //
    // Employee class
    // functions - name, id, title, and email
    //
    constructor(name, id, email, title = "Employee") {
        this.name = name;
        this.id = id;
        this.email = email
        this.title = title;
    }
    getName() {
        return this.name;
    }
    getId() {
        return this.id;
    }
    getTitle() {
        return this.title;
    }
    getEmail() {
        return this.email
    }

}
//
// export employee
//
module.exports = Employee;
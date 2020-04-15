//
// Manager - employee extended
//
const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name, id, officeNumber, email, title = "Manager") {
        super(name, id, email, title)
        this.officeNumber = officeNumber;
    }

    getOfficeNumber() {
        return this.officeNumber;
    }

}
//
// export manager
//
module.exports = Manager;
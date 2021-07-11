const chalk = require("chalk");
const Employee = require("./Employee");

class Manager extends Employee {
  constructor(name, id, email, officeNum) {
    
    super(name, id, email);
    this.officeNum = officeNum;
  }

  getOfficeNum() {
    console.log(chalk`{yellow My office number is} {magenta.bold ${this.officeNum}}`);
    return this.officeNum;
  }
  getRole() {
    console.log(chalk`{yellow My role is} {red.bold Manager}`);
    return 'Manager';
  }
}

// TESTS -- DELETE //
let bob = new Manager('bob',2, 'bob@bob.com', 107);
bob.getName();
bob.getId();
bob.getEmail();
bob.getOfficeNum();
bob.getRole();
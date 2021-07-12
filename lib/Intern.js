const chalk = require("chalk");
const Employee = require("./Employee");

class Intern extends Employee {
  constructor(name, id, email, school) {
    if (!school) {
      throw new Error("Must include a school for Intern");
    }
    
    super(name, id, email);
    this.school = school;
  }

  getSchool() {
    console.log(chalk`{yellow My school is} {magenta.bold ${this.school}}`);
    return this.school;
  }

  getRole() {
    console.log(chalk`{yellow My role is} {red.bold Intern}`);
    return 'Intern';
  }
}

module.exports = Intern;

// TESTS -- DELETE //
// let bob = new Intern('bob', 2, 'bob@bob.com', 'GA Tech');
// bob.getName();
// bob.getId();
// bob.getEmail();
// bob.getSchool();
// bob.getRole();
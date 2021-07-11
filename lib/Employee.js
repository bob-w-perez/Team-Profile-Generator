const chalk = require("chalk");

// ADD validation tests with regular expressions //

class Employee {
  constructor(name, id, email) {
    if (!name || !id || !email){
      throw new Error('Each employee must have a name, id, and email');
    }
    this.name = name;
    this.id = id;
    this.email = email;
  }

  getName() {
    console.log(chalk`{yellow My name is} {blue.bold ${this.name}}`);
    return this.name;
  }

  getId() {
    console.log(chalk`{yellow My ID is} {green.bold ${this.id}}`);
    return this.id;
  }

  getEmail() {
    console.log(chalk`{yellow My email is} {cyan.bold ${this.email}}`);
    return this.email;
  }

  getRole() {
    console.log(chalk`{yellow My role is} {red.bold Employee}`);
    return 'Employee';
  }
}


// TESTS -- DELETE //
let bob = new Employee('bob',2, 'bob@bob.com');
bob.getName();
bob.getId();
bob.getEmail();
bob.getRole();


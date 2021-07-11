const chalk = require("chalk");

// ADD validation tests with regular expressions //

class Employee {
  constructor(name, id, email) {
    if (!name || !id || !email){
      throw new Error('Each employee must have a name, id, and email');
    }
    if (!/[a-z]/i.test(name) || !/^[a-z -]+$/i.test(name)) {
      throw new Error('Employee name must contain at least one letter and only contain letters,single spaces, or dashes');
    }
    if (!/@/i.test(email)) {
      throw new Error('Email must contain an @')
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


module.exports = Employee;


// let bob = new Employee('Bob', 8.5, 'bob@bob.com');
// bob.getName();
// bob.getId();
// bob.getEmail();
// bob.getRole();

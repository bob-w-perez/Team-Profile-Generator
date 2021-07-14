const chalk = require("chalk");

class Employee {
  constructor(name, id, email) {
    if (!name || !id || !email){
      throw new Error('Each employee must have a name, id, and email');
    }
    if (!/^([A-Z][a-z]+([ ]?[a-z]?['-]?[A-Z][a-z]+)*)$/.test(name)) {
      throw new Error('Employee name must contain at least one upper-case and one lower-case letter and only contain letters, single spaces, or dashes');
    }
    if (!/\S+@\S+\.\S+/i.test(email)) {
      throw new Error('Email must be in a valid email format: {something}@{something}.{something}')
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


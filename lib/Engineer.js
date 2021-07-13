const chalk = require("chalk");
const Employee = require("./Employee");

class Engineer extends Employee {
  constructor(name, id, email, github) {
    if (!github) {
      throw new Error("Must include GitHub username for Engineer")
    }
    
    super(name, id, email);
    this.github = github;
  }

  getGithub() {
    console.log(chalk`{yellow My GitHub username is} {magenta.bold ${this.github}}`);
    return this.github;
  }
  getRole() {
    console.log(chalk`{yellow My role is} {red.bold Engineer}`);
    return 'Engineer';
  }
}

module.exports = Engineer;

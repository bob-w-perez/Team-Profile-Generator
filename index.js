
const inquirer = require('inquirer');
const fs = require('fs');
const chalk = require("chalk");

const data = {}

const questionsManager = [
  {
    type: 'input',
    message: chalk`{yellow What is the team manager's name?}`,
    name: 'managerName'
  },
  {
    type: 'input',
    message: chalk`{yellow What is the team manager's ID?}`,
    name: 'managerID'
  },
  {
    type: 'input',
    message: chalk`{yellow What is the team manager's email?}`,
    name: 'managerEmail'
  },
  {
    type: 'input',
    message: chalk`{yellow What is the team manager's office number?}`,
    name: 'managerOfficeNum'
  },
  {
    type: 'list',
    message: chalk`{yellow Which type of team member would you like to add?}`,
    name: 'teamMember',
    choices: [chalk`{red.bold Engineer}`, chalk`{blue.bold Intern}`, chalk`{green.bold I don't want to add more team members}`]
  }
]

const questionsEngineer = [
  {
    type: 'input',
    message: chalk`{red.bold What is your engineer's name?}`,
    name: 'engineerName'
  },
  {
    type: 'input',
    message: chalk`{red.bold What is your engineer's ID?}`,
    name: 'engineerID'
  },
  {
    type: 'input',
    message: chalk`{red.bold What is you engineer's email?}`,
    name: 'engineerEmail'
  },
  {
    type: 'input',
    message: chalk`{red.bold What is your engineer's GitHub username?}`,
    name: 'engineerGithub'
  },
  {
    type: 'list',
    message: chalk`{red.bold Which type of team member would you like to add?}`,
    name: 'teamMember',
    choices: [chalk`{red.bold Engineer}`, chalk`{blue.bold Intern}`, chalk`{green.bold I don't want to add more team members}`]
  }
]


const questionsIntern = [
  {
    type: 'input',
    message: chalk`{blue.bold What is your intern's name?}`,
    name: 'internName'
  },
  {
    type: 'input',
    message: chalk`{blue.bold What is your intern's ID?}`,
    name: 'internID'
  },
  {
    type: 'input',
    message: chalk`{blue.bold What is you intern's email?}`,
    name: 'internEmail'
  },
  {
    type: 'input',
    message: chalk`{blue.bold What is your intern's school?}`,
    name: 'internSchool'
  },
  {
    type: 'list',
    message: chalk`{blue.bold Which type of team member would you like to add?}`,
    name: 'teamMember',
    choices: [chalk`{red.bold Engineer}`, chalk`{blue.bold Intern}`, chalk`{green.bold I don't want to add more team members}`]
  }
]

function init() {
  inquirer
    .prompt(questionsManager)
    .then((answers) => {

      if (answers.teamMember == chalk`{red.bold Engineer}`) {
        engineerQuestions();
      } else if (answers.teamMember == chalk`{blue.bold Intern}`) {
        internQuestions();
      } else {
        console.log(chalk.green("DONE"))
      }
    })
}

init();

function engineerQuestions() {
  inquirer
    .prompt(questionsEngineer)
    .then((answers) => {

      if (answers.teamMember == chalk`{red.bold Engineer}`) {
        engineerQuestions();
      } else if (answers.teamMember == chalk`{blue.bold Intern}`) {
        internQuestions();
      } else {
        console.log(chalk.green("DONE"))
      }
    })

}

function internQuestions() {
  inquirer
  .prompt(questionsIntern)
  .then((answers) => {
    if (answers.teamMember == chalk`{red.bold Engineer}`) {
      engineerQuestions();
    } else if (answers.teamMember == chalk`{blue.bold Intern}`) {
      internQuestions();
    } else {
      console.log(chalk.green("DONE"))
    }
  })
}
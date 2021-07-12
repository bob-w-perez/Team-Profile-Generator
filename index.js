
const inquirer = require('inquirer');
const fs = require('fs');
const chalk = require("chalk");
const Manager = require('./lib/Manager')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')

const teamData = {
  teamName: '',
  managers: [],
  engineers: [],
  interns: []
};

const questionsManager = [
  {
    type: 'input',
    message: chalk`{green What do you want to call your team?}`,
    name: 'teamName',
    default: 'My Team',
    validate: (input) => {
      if (!/[a-z0-9]/i.test(input)) {
          return 'Team name must include at least one alphanumeric';
      } else {
          return true;
      }
    }
  },
  {
    type: 'input',
    message: chalk`{yellow What is the team manager's name?}`,
    name: 'managerName',
    validate: (input) => {
      if (!/[a-z]/i.test(input) || !/^[a-z -]+$/i.test(input)) {
          return 'Employee name must contain at least one letter and only contain letters,single spaces, or dashes';
      } else {
          return true;
      }
    }
  },
  {
    type: 'input',
    message: chalk`{yellow What is the team manager's ID?}`,
    name: 'managerID',
    validate: (input) => {
      if (!/[0-9]/i.test(input)) {
          return 'Employee ID must contain at least one number';
      } else {
          return true;
      }
    }
  },
  {
    type: 'input',
    message: chalk`{yellow What is the team manager's email?}`,
    name: 'managerEmail',
    validate: (input) => {
      if (!/@/i.test(input)) {
          return 'Please enter a valid email address';
      } else {
          return true;
      }
    }
  },
  {
    type: 'input',
    message: chalk`{yellow What is the team manager's office number?}`,
    name: 'managerOfficeNum',
    validate: (input) => {
      if (!/[0-9]/i.test(input)) {
          return 'Manager\'s office number must contain at least one number';
      } else {
          return true;
      }
    }
  },
  {
    type: 'list',
    message: chalk`{magenta Which type of team member would you like to add next?}`,
    name: 'teamMember',
    choices: [chalk`{red.bold Engineer}`, chalk`{blue.bold Intern}`, chalk`{green.bold I don't want to add more team members}`]
  }
]

const questionsEngineer = [
  {
    type: 'input',
    message: chalk`{red.bold What is your engineer's name?}`,
    name: 'engineerName',
    validate: (input) => {
      if (!/[a-z]/i.test(input) || !/^[a-z -]+$/i.test(input)) {
          return 'Employee name must contain at least one letter and only contain letters,single spaces, or dashes';
      } else {
          return true;
      }
    }
  },
  {
    type: 'input',
    message: chalk`{red.bold What is your engineer's ID?}`,
    name: 'engineerID',
    validate: (input) => {
      if (!/[0-9]/i.test(input)) {
          return 'Employee ID must contain at least one number';
      } else {
          return true;
      }
    }
  },
  {
    type: 'input',
    message: chalk`{red.bold What is you engineer's email?}`,
    name: 'engineerEmail',
    validate: (input) => {
      if (!/@/i.test(input)) {
          return 'Please enter a valid email address';
      } else {
          return true;
      }
    }
  },
  {
    type: 'input',
    message: chalk`{red.bold What is your engineer's GitHub username?}`,
    name: 'engineerGithub',
    validate: (input) => {
      if (!/[0-9a-z]/i.test(input)) {
          return 'GitHub username must include at least one alphanumeric';
      } else {
          return true;
      }
    }
  },
  {
    type: 'list',
    message: chalk`{magenta.bold Which type of team member would you like to add next?}`,
    name: 'teamMember',
    choices: [chalk`{red.bold Engineer}`, chalk`{blue.bold Intern}`, chalk`{green.bold I don't want to add more team members}`]
  }
]


const questionsIntern = [
  {
    type: 'input',
    message: chalk`{blue.bold What is your intern's name?}`,
    name: 'internName',
    validate: (input) => {
      if (!/[a-z]/i.test(input) || !/^[a-z -]+$/i.test(input)) {
          return 'Employee name must contain at least one letter and only contain letters,single spaces, or dashes';
      } else {
          return true;
      }
    }
  },
  {
    type: 'input',
    message: chalk`{blue.bold What is your intern's ID?}`,
    name: 'internID',
    validate: (input) => {
      if (!/[0-9]/i.test(input)) {
          return 'Employee ID must contain at least one number';
      } else {
          return true;
      }
    }
  },
  {
    type: 'input',
    message: chalk`{blue.bold What is you intern's email?}`,
    name: 'internEmail',
    validate: (input) => {
      if (!/@/i.test(input)) {
          return 'Please enter a valid email address';
      } else {
          return true;
      }
    }
  },
  {
    type: 'input',
    message: chalk`{blue.bold What is your intern's school?}`,
    name: 'internSchool',
    validate: (input) => {
      if (!/[0-9a-z]/i.test(input)) {
          return 'School must include at least one alphanumeric';
      } else {
          return true;
      }
    }
    
  },
  {
    type: 'list',
    message: chalk`{magenta.bold Which type of team member would you like to add next?}`,
    name: 'teamMember',
    choices: [chalk`{red.bold Engineer}`, chalk`{blue.bold Intern}`, chalk`{green.bold I don't want to add more team members}`]
  }
]

function init() {
  inquirer
    .prompt(questionsManager)
    .then((answers) => {

      teamData.teamName = answers.teamName;

      let newManager = new Manager(answers.managerName, answers.managerID, answers.managerEmail, answers.managerOfficeNum);
      teamData.managers.push(newManager);

      if (answers.teamMember == chalk`{red.bold Engineer}`) {
        engineerQuestions();
      } else if (answers.teamMember == chalk`{blue.bold Intern}`) {
        internQuestions();
      } else {
        console.log(chalk.green.bold(`\n======================================\n\n Generating ${teamData.teamName}'s profile page...\n\n======================================\n`));
        // ADD fs function to write this
        console.log(teamData);
      }
    })
}

init();

function engineerQuestions() {
  inquirer
    .prompt(questionsEngineer)
    .then((answers) => {

      let newEngineer = new Engineer(answers.engineerName, answers.engineerID, answers.engineerEmail, answers.engineerGithub);
      teamData.engineers.push(newEngineer);

      if (answers.teamMember == chalk`{red.bold Engineer}`) {
        engineerQuestions();
      } else if (answers.teamMember == chalk`{blue.bold Intern}`) {
        internQuestions();
      } else {
        console.log(chalk.green.bold(`\n======================================\n\n Generating ${teamData.teamName}'s profile page...\n\n======================================\n`));
        // ADD fs function to write this
        console.log(teamData);
      }
    })

}

function internQuestions() {
  inquirer
  .prompt(questionsIntern)
  .then((answers) => {


    let newIntern = new Intern(answers.internName, answers.internID, answers.internEmail, answers.internSchool);
    teamData.interns.push(newIntern);

    if (answers.teamMember == chalk`{red.bold Engineer}`) {
      engineerQuestions();
    } else if (answers.teamMember == chalk`{blue.bold Intern}`) {
      internQuestions();
    } else {
      console.log(chalk.green.bold(`\n======================================\n\n Generating ${teamData.teamName}'s profile page...\n\n======================================\n`));
      // ADD fs function to write this
      console.log(teamData);
    }
  })
}
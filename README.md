# Team-Profile-Generator

[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)  



## Description

This is a command line program that presents the user with an interactive series of questions which gather information about the user's work/project team. The user is required to specify a manager and then has the option to add as many engineers and interns as needed. The user's answers to the prompts are the used to create a styled HTML page displaying their team. 

![Demo gif](./dist/assets/images/demo.gif)


The code and all relevant files can be found at [https://github.com/bob-w-perez/Team-Profile-Generator](https://github.com/bob-w-perez/Team-Profile-Generator). 

$$$$$$$$$$$$$$$$$$$
A video demonstration of the project can be downloaded in MP4 format here: [https://github.com/bob-w-perez/README-Generator/blob/main/demo-video.mp4](https://github.com/bob-w-perez/README-Generator/blob/main/demo-video.mp4)
$$$$$$$$$$$$$$$$$$$$$

## Table of Contents

- [Installation](#installation)

- [Features](#features)

- [Usage](#usage)

- [Credits](#credits)

- [Tests](#tests)

- [Questions](#questions)

- [License](#license)  



## Installation

1) Navigate to [https://github.com/bob-w-perez/Team-Profile-Generator](https://github.com/bob-w-perez/Team-Profile-Generator)

2) Clone the repository to your local machine

3) Open your preferred CLI (Terminal, GitBash, etc.) and cd to the directory where you cloned the repo

4) Use the following command to install the required dependencies (dependency information can be found in [package.json](./package.json))
```
npm ci
```  

## Features  
In addition to the basic functionality of generating a custom HTML based on the user's input as described above, this application has several notable features:

- user input values are validated in real-time while answering the prompts so it is not possible to pass any error-producing arguments to the underlying functions, and feedback is given to correct the input before the next prompt is displayed

- the prompts are color-coded by group to provide improved readability as well as a more aesthetically enjoyable and fun experience for the user

- in addition to the employee information cards displayed in the main section of the page, the footer contains a scrolling ticker that displays the date, a welcome message, and all the team member's names

- the CSS styling for the generated page creates a clean and interactive UI with interactive elements

- the project contains unit tests for all the classes and their principle methods to ensure optimal functionality (more information on testing described below)

## Usage

To use this Team Profile Generator:

1) Open your preferred CLI and cd to the Team-Profile-Generator directory

2) Run the following command to begin the application
```
npm start
```
3) Answer the prompts as the appear in your CLI in accordance with your team's specifications

4) The program finishes once you select 'I don't want to add more team members', and the HTML for your team's profile page is generated

5) Open the dist/ folder and you will find the HTML file (yourTeamName.html) along with an assets/ folder containing the stylesheets, scripts, and other files needed to render the page

6) Open the HTML file in your preferred browser and enjoy your team's new profile page!


## Credits

Solo project for GATech Coding Bootcamp
by Rob Perez
- [Portfolio Page]https://bob-w-perez.github.io/Portfolio-Page/)
- bob.w.perez@gmail.com
- 404.317.5336

The scrolling ticker at the bottom was adapted from Lewis Carey's example:
[https://codepen.io/lewismcarey/pen/GJZVoG](https://codepen.io/lewismcarey/pen/GJZVoG)
  
## Tests

This repo has a tests/ directory containing 25 functionality tests across four test suites, one for each class used in the program (Employee, Manager, Engineer, and Intern).

To run the tests, use the following command(s):

```
npm test
```  

## Questions

If you have any questions about the repo, open an issue or contact me directly at bob.w.perez@gmail.com. You can find more of my work at [github/bob-w-perez](https://github.com/bob-w-perez).  


## License

This project is licensed under the [GPL v3 License](https://www.gnu.org/licenses/gpl-3.0). 


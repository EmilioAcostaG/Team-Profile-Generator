const inquirer = require('inquirer');
const fs = require('fs');


const Employee = require("./library/Employee");
const Manager = require("./library/Manager");
const Engineer = require("./library/Engineer");
const Intern = require("./library/Intern");

//const generateHTML = require()

const team = [];

const promptManager = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: "What is the team manager's name?"
    },
    {
      type: 'input',
      name: 'id',
      message: "What is the team manager's id?"
    },
    {
      type: 'input',
      name: 'email',
      message: "Please enter the team manager's email address.",
    },
    {
      type: 'input',
      name: 'officeNumber',
      message: "What is the team manager's office number?"
    },
    {
      type: 'list',
      name: 'teamMember',
      message: 'Which type of team member would you like to add?',
      choices: ["Engineer", "Intern", "I don't want to add any more team members."]
    }
  ]).then((answers) => {
    console.log(answers);
    const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
    team.push(manager)
  })
};



const init = () => {
  promptUser()
  
};

init()
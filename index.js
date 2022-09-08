const inquirer = require('inquirer');


const promptUser = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'managerName',
      mesage: "Please enter the team manager's name."
    }
  ])
};


const init = () => {
  promptUser()
  .then((answers) => console.log(answers))
};

init()
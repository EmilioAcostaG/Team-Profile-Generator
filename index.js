const inquirer = require('inquirer');
const fs = require('fs');
const emoji = require("node-emoji");

const generateHTML = require("./src/generateHTML")

// team files to include
const Manager = require("./library/Manager");
const Engineer = require("./library/Engineer");
const Intern = require("./library/Intern");

// empty array to collect all input
const team = [];

const group = emoji.get("busts_in_silhouette")

const promptManager = () => {
  console.log(`Let's build your team ${group}`)

  return inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "What is the team manager's name?",
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please enter valid answer.");
          return false;
        }
      }
    },
    {
      type: "input",
      name: "id",
      message: "What is the team manager's id?",
      validate: id => {
        if (id) {
          return true;
        } else {
          console.log("Please enter valid answer.");
          return false;
        }
      }
    },
    {
      type: "input",
      name: "email",
      message: "Please enter the team manager's email address.",
      validate: email => {
        if (email) {
          return true;
        } else {
          console.log("Please enter valid answer.");
          return false;
        } 
      }
    },
    {
      type: "input",
      name: "officeNumber",
      message: "What is the team manager's office number?",
      validate: officeNumber => {
        if (officeNumber) {
          return true;
        } else {
          console.log("Please enter valid answer.");
          return false;
        }
      }
    },
  ]).then((answers) => {
    console.log(answers);
    const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
    team.push(manager);
    addTeamMember();
  })
};

const addTeamMember = () => {
  return inquirer.prompt ([
    {
        type: "list",
        name: "addTeamMember",
        message: "Which type of team member would you like to add?",
        choices: ["Engineer", "Intern", "I don't want to add any more team members."]
    }
  ]) .then(answers => {
    if (answers.addTeamMember === "Engineer") {
      promptEngineer();
    } else if (answers.addTeamMember === "Intern") {
      promptIntern();
    } else {
      writeFile()
    }
  })
};

const promptEngineer = () => {
  inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "What is your engineer's name?",
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please enter valid answer.");
          return false;
        }
      }
    },
    {
      type: "input",
      name: "id",
      message: "What is your engineer's id?",
      validate: id => {
        if (id) {
          return true;
        } else {
          console.log("Please enter valid answer.");
          return false;
        }
      }
    },
    {
      type: "input",
      name: "email",
      message: "Please enter your engineer's email address.",
      validate: email => {
        if (email) {
          return true;
        } else {
          console.log("Please enter valid answer.");
          return false;
        } 
      }
    },
    {
      type: "input",
      name: "github",
      message: "What is your engineer's Github username?",
      validate: github => {
        if (github) {
          return true;
        } else {
          console.log("Please enter valid answer.");
          return false;
        }
      }
    },
  ]) .then((answers) => {
    console.log(answers);
    const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
    team.push(engineer);
    addTeamMember();
  })
};

const promptIntern = () => {
  inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "What is your intern's name?",
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please enter valid answer.");
          return false;
        }
      }
    },
    {
      type: "input",
      name: "id",
      message: "What is your intern's id?",
      validate: id => {
        if (id) {
          return true;
        } else {
          console.log("Please enter valid answer.");
          return false;
        }
      }
    },
    {
      type: "input",
      name: "email",
      message: "Please enter your intern's email address.",
      validate: email => {
        if (email) {
          return true;
        } else {
          console.log("Please enter valid answer.");
          return false;
        } 
      }
    },
    {
      type: "input",
      name: "school",
      message: "What is your intern's school?",
      validate: school => {
        if (school) {
          return true;
        } else {
          console.log("Please enter valid answer.");
          return false;
        }
      }
    }
  ]) .then((answers) => {
    console.log(answers);
    const intern = new Intern(answers.name, answers.id, answers.email, answers.school);
    team.push(intern);
    addTeamMember();
  })
}

function writeFile() {
  fs.writeFile("./dist/index.html", generateHTML(team), (err) => {
    if (err) throw(err);
    console.log("Successfully wrote to index.html")
  } )
  console.log(team)
}

const init = () => {
  promptManager();
  
};

init()
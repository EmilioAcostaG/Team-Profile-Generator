
const generateTeam = (team) => {
  //console.log(team);

  const htmlData = [];

  const addManager = manager => {
    let managerHTML = 
    `
    <div class="col">
    <div class="card text-white ms-2" style="width: 18rem;">
    <div class="card-body bg-primary" >
      <h3 class="card-title">${manager.name}</h3>
      <h4><i class="fa-solid fa-mug-hot"></i> Manager</h4> 
    </div>
    <ul class="card-body bg-dark p-2 list-group list-group-flush" style="--bs-bg-opacity:.1">
      <li class="list-group-item">ID: ${manager.id}</li>
      <li class="list-group-item">Email: <a href="mailto:${manager.email}">${manager.email}</a></li>
      <li class="list-group-item">Office number: ${manager.officeNumber}</li>
    </ul>
    </div>
    </div>
  `;
  htmlData.push(managerHTML);
  };

  const addEngineer = engineer => {
    let engineerHTML = 
    `
    <div class="col">
    <div class="card text-white ms-2" style="width: 18rem;">
    <div class="card-body bg-primary" >
      <h3 class="card-title">${engineer.name}</h3>
      <h4><i class="fa-sharp fa-solid fa-glasses"></i> Engineer</h4> 
    </div>
    <ul class="card-body bg-dark p-2 list-group list-group-flush" style="--bs-bg-opacity:.1">
      <li class="list-group-item">ID: ${engineer.id}</li>
      <li class="list-group-item">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></li>
      <li class="list-group-item">Github username: <a href="https://github.com/${engineer.github}" target="_blank">${engineer.github}</li>
    </ul>
    </div>
    </div>
  `;
  htmlData.push(engineerHTML);
  };

  const addIntern = intern => {
    let internHTML =
    `
    <div class="col">
    <div class="card text-white ms-2" style="width: 18rem;">
    <div class="card-body bg-primary" >
      <h3 class="card-title">${intern.name}</h3>
      <h4><i class="fa-solid fa-user-graduate"></i> Intern</h4> 
    </div>
    <ul class="card-body bg-dark p-2 list-group list-group-flush" style="--bs-bg-opacity:.1">
      <li class="list-group-item">ID: ${intern.id}</li>
      <li class="list-group-item">Email: <a href="mailto:${intern.email}">${intern.email}</a></li>
      <li class="list-group-item">School: ${intern.school}</li>
    </ul>
    </div>
    </div>
  `;
  htmlData.push(internHTML)
  }

  // loop through different roles
  for (let i = 0; i < team.length; i++) {
    if (team[i].getRole() === "Manager") {
      addManager(team[i]);
    }
    if (team[i].getRole() === "Engineer") {
      addEngineer(team[i]);
    }
    if (team[i].getRole() === "Intern") {
      addIntern(team[i]);
    };
  }

  return htmlData.join("");
}


module.exports = team => {

  return `
  <!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Team Profile</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-iYQeCzEYFbKjA/T2uDLTpkwGzCiq6soy8tYaI1GyVh/UjpbCx/TYkiZhlZB6+fzT" crossorigin="anonymous">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v6.2.0/css/all.css"/>
  </head>
  <body>
    <header class="header text-center p-2">
      <h1 class="text-white bg-danger p-5">My Team</h1>
    </header>

    <main class="container">
      <section class="row gx-5 gy-5">
      ${generateTeam(team)}
      </section> 
    </main>

   
    
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-u1OknCvxWvY5kfmNBILK2hRnQC3Pr17a+RTT6rIHI7NnikvbZlHgTPOOmMi466C8" crossorigin="anonymous"></script>
  </body>
</html>

  `
}
  
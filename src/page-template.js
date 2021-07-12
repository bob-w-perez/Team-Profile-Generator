
// MAKE LINK FOR EMAIL
function createManagerCard(personData){
  return `
  <div class="card">
      <div class="card-header">
        <h2>${personData.name}</h2>
        <h3><i class="fas fa-mug-hot"></i>&nbsp&nbsp&nbsp Manager</h3>
      </div>
      <div class="card-body">
        <ul>
          <li>ID: ${personData.id}</li>
          <li>Email: ${personData.email}</li>
          <li>Office number: ${personData.officeNum}</li>
        </ul>
      </div>
    </div>
`
}

// MAKE LINK FOR GITHUB and EMAIL
function createEngineerCard(personData){
  return `
  <div class="card">
      <div class="card-header">
        <h2>${personData.name}</h2>
        <h3><i class="fas fa-glasses"></i>&nbsp&nbsp&nbsp Engineer</h3>
      </div>
      <div class="card-body">
        <ul>
          <li>ID: ${personData.id}</li>
          <li>Email: ${personData.email}</li>
          <li>GitHub: ${personData.github}</li>
        </ul>
      </div>
    </div>
`
}

function createInternCard(personData){
  return `
  <div class="card">
      <div class="card-header">
        <h2>${personData.name}</h2>
        <h3><i class="fas fa-user-graduate"></i>&nbsp&nbsp&nbsp Intern</h3>
      </div>
      <div class="card-body">
        <ul>
          <li>ID: ${personData.id}</li>
          <li>Email: ${personData.email}</li>
          <li>School: ${personData.school}</li>
        </ul>
      </div>
    </div>
`
}

// MAKE LINK FOR EMAIL
function addCardsToPage(teamData){
  const managers = teamData.managers;
  const engineers = teamData.engineers;
  const interns = teamData.interns;

  let cardHTML = '';

  managers.forEach(manager => cardHTML += createManagerCard(manager));
  engineers.forEach(engineer => cardHTML += createEngineerCard(engineer));
  interns.forEach(intern => cardHTML += createInternCard(intern));

  return cardHTML;

}

function renderHTML(teamData) {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" rel="stylesheet">
  <link rel="stylesheet" href="./css/reset.css">
  <link rel="stylesheet" href="./css/style.css">
  <title>${teamData.teamName}</title>
  <link rel="icon" href="./images/team-favicon.png">
</head>
<body>
  <header>
    <h1>${teamData.teamName}</h1>
  </header>
  
  <main>
    ${addCardsToPage(teamData)}

  </main>
  <footer>
    <div id="today-date"></div>
  </footer>

  <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.29.1/moment.min.js"></script>
  <script src="./js/script.js"></script>
</body>
</html>
  `
}


module.exports = renderHTML;


function createManagerCard(personData){
  return `
  <div class="card">
      <div class="card-header">
        <h2>${personData.name}</h2>
        <h3><i class="fas fa-mug-hot"></i>&nbsp&nbsp&nbsp Manager</h3>
      </div>
      <div class="card-body">
        <ul>
          <li><b>ID:</b>&nbsp ${personData.id}</li>
          <li><b>Email:</b>&nbsp<a href="mailto:${personData.email}">${personData.email}</a></li>
          <li><b>Office number:</b>&nbsp ${personData.officeNum}</li>
        </ul>
      </div>
    </div>
`
}

function createEngineerCard(personData){
  return `
  <div class="card">
      <div class="card-header">
        <h2>${personData.name}</h2>
        <h3><i class="fas fa-glasses"></i>&nbsp&nbsp&nbsp Engineer</h3>
      </div>
      <div class="card-body">
        <ul>
          <li><b>ID:</b>&nbsp ${personData.id}</li>
          <li><b>Email:</b>&nbsp<a href="mailto:${personData.email}">${personData.email}</a></li>
          <li><b>GitHub:</b>&nbsp<a href="https://github.com/${personData.github}" target="blank">${personData.github}</a></li>
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
          <li><b>ID:</b>&nbsp ${personData.id}</li>
          <li><b>Email:</b>&nbsp<a href="mailto:${personData.email}">${personData.email}</a></li>
          <li><b>School:</b>&nbsp ${personData.school}</li>
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

function makeTickerEl(name) {
  return `<div class="ticker__item">${name}</div>`
}

function renderTicker(idList) {
  let teamNames = Object.values(idList);
  let tickerHTML = '';
  for (let i = 0; i < teamNames.length; i++){
    tickerHTML += makeTickerEl(teamNames[i]);
  }
  return tickerHTML;
}

function renderHTML(teamData, idList) {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Encode+Sans+SC:wght@400;600&family=Otomanopee+One&family=Poppins&display=swap" rel="stylesheet">
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
    <div class="ticker-wrap">
      <div class="ticker">
        <div id="today-date" class="ticker__item"></div>
        <div class="ticker__item">&nbsp</div>
        <div class="ticker__item">Welcome ${teamData.teamName}!</div>
        <div class="ticker__item">&nbsp</div>
        <div class="ticker__item">Team members:</div>
        ${renderTicker(idList)}
      </div>
    </div>
  </footer>

  <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.29.1/moment.min.js"></script>
  <script src="./js/script.js"></script>
</body>
</html>
  `
}


module.exports = renderHTML;

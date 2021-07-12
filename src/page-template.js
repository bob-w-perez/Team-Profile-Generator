

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
          <li>Office number: ${}</li>
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
          <li>ID: ${personData.id}</li>
          <li>Email: ${personData.email}</li>
          <li>Office number: ${}</li>
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
          <li>Office number: ${}</li>
        </ul>
      </div>
    </div>
`
}

function addCardsToPage(teamData){


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
    <!-- Example Card -->
    <div class="card">
      <div class="card-header">
        <h2>Bob</h2>
        <h3>Manager</h3>
      </div>
      <div class="card-body">
        <ul>
          <li>ID: 1</li>
          <li>Email: bob@bob.com</li>
          <li>Office number: 101</li>
        </ul>
      </div>
    </div>

        <!-- Example Card -->
    <div class="card">
      <div class="card-header">
        <h2>Tom</h2>
        <h3>Engineer</h3>
      </div>
      <div class="card-body">
        <ul>
          <li>ID: 2</li>
          <li>Email: tom@bob.com</li>
          <li>GitHub: </li>
        </ul>
      </div>
    </div>

        <!-- Example Card -->
    <div class="card">
      <div class="card-header">
        <h2>Ralph</h2>
        <h3>Intern</h3>
      </div>
      <div class="card-body">
        <ul>
          <li>ID: 3</li>
          <li>Email: raplh@bob.com</li>
          <li>School: Mississippi</li>
        </ul>
      </div>
    </div>

  </main>
  <footer>
    <div id="today-date"></div>
  </footer>

  <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.29.1/moment.min.js"></script>
  <script src="./script.js"></script>
</body>
</html>
  `
}

module.exports = renderHTML;
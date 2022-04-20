

// TODO: Create a function to generate markdown for README
function generateCards(teamArray) {
  return `<!DOCTYPE html>
  <html lang="en">
  
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="author" content="Elizabeth Billings">
    <link rel="stylesheet" type="text/css" href="./assets/style.css" />

    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Generator</title>
  </head>
  <header>
      <h1 class="team">My Team</h1>
  </header>
  <body>
    ${teamArray.map(person =>{
      if(person.office){
        return `  
        <div class='groupcards'> <div class="infocard">
        <h2 class="cardtitle">${person.name}</h2>
        <h4 class="jobtitle">Manager</h4>
     <br>
     <ul class="employeeid">ID: ${person.id}</ul>
     <ul class="email">Email: ${person.email}</ul>
     <ul class="office">Office Number: ${person.office}</ul>
    </div>`
      }
      if(person.school){
        return `   <div class="infocard">
        <h2 class="cardtitle">${person.name}</h2>
        <h4 class="jobtitle">Intern</h4>
     <br>
     <ul class="employeeid">ID: ${person.id}</ul>
     <ul class="email">Email: ${person.email}</ul>
     <ul class="office">School: ${person.school}</ul>
    </div>`
      }
      if(person.github){
        return `   <div class="infocard">
        <h2 class="cardtitle">${person.name}</h2>
        <h4 class="jobtitle">Engineer</h4>
     <br>
     <ul class="employeeid">ID: ${person.id}</ul>
     <ul class="email">email: ${person.email}</ul>
     <ul class="office">Github: ${person.github}</ul>
    </div>
    </div>`
      }
    }).join('')}
  
  
    <script src="index.js"></script>
  
  </body>
  </html>
  
`;
}

module.exports = generateCards;
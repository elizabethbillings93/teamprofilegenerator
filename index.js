// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateCards= require('./utils/generateCards');

// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'Name',
    message: 'What is your name?',
  },
{
  type: 'list',
  message: 'What is your title?',
  name: 'title',
  choices:['Engineer','Manager','Employee','Intern']
},
{
  type: 'input',
  message: 'What is your ID?',
  name: 'id',
},
{
  type: 'input',
  message: 'What is your email?',
  name: 'email',
},
{
    type: 'input',
    message: 'What is your Github?',
    name: 'github',
}];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName,data,(err)=>{
    if (err){
      return console.log(err);
    }else{
      return console.log("It worked!");
    }
  })
}
 

// // TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions)
  .then(function(res){
  writeToFile("index.html",generateCards(res));
});
};

// // Function call to initialize app
init();
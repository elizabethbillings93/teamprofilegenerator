// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateCards= require('./utils/generateCards');
let teamArray=[];
function addManager(){
  const questions = [
    {
      type: 'input',
      name: 'name',
      message: 'What is your name?',
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
      message: 'What is your office number?',
      name: 'office',
  }];
  inquirer.prompt(questions)
  .then(answers=> {
    teamArray.push(answers);
    menu();
  })
}
function menu(){
  const questions = [
  {
      type: 'list',
      message: 'What do you want to do next?',
      name: 'choice',
      choices:['Add an Intern', 'Add an Engineer','Finish Building the Team']
  }];
  inquirer.prompt(questions)
  .then(answers=> {
    if(answers.choice==='Add an Intern') addIntern();
    if(answers.choice==='Add an Engineer') addEngineer();
    if(answers.choice==='Finish Building the Team') finish();
  })
}
function addIntern(){
  const questions = [
    {
      type: 'input',
      name: 'name',
      message: 'What is your name?',
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
      message: 'What is your school?',
      name: 'school',
  }];
  inquirer.prompt(questions)
  .then(answers=> {
    teamArray.push(answers);
    menu();
  })
}
function addEngineer(){
  const questions = [
    {
      type: 'input',
      name: 'name',
      message: 'What is your name?',
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
  inquirer.prompt(questions)
  .then(answers=> {
    teamArray.push(answers);
    menu();
  })
}
function finish(){
  writeToFile("index.html",generateCards(teamArray));
}

function writeToFile(fileName, data) {
  fs.writeFile(fileName,data,(err)=>{
    if (err){
      return console.log(err);
    }else{
      return console.log("It worked!");
    }
  })
}
 


  

addManager();

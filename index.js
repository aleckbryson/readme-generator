var inquirer = require("inquirer");
var fs = require('fs');

// // array of questions for user
// const questions = [

// ];

// // function to write README file
// function writeToFile(fileName, data) {
// }

// // function to initialize program
// function init() {

// }

// // function call to initialize program
// init();


inquirer.prompt([
    {
      type: "input",
      title: "title",
      message: "What is your Project Title?"
    },
    {
      type: "input",
      description: "description",
      message: "What is your Project Description?"
    },
    {
      type: "checkbox",
      message: "What would you like in you Table of Contents",
      name: "Contents",
      choices: [
        "HTML", 
        "CSS", 
        "JavaScript", 
        "MySQL"
      ]
    },
    {
      type: "list",
      message: "What is your preferred method of communication?",
      name: "contact",
      choices: [
        "email",
        "phone",
        "telekinesis"
      ]
    }
  ]).then(function(answers) {
  
    fs.writeFile("README.md", JSON.stringify(answers, null, '\t'), function(err) {
      console.log(answers)
      if (err) {
        return console.log(err);
      }
  
      console.log("Success!");
  
    });
  });
  
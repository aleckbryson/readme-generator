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
        "Installation", 
        "Usage", 
        "Credits", 
        "License"
      ]
    },
    {
        type: "input",
        install: "installation",
        message: "What are the steps required to install your project?"
    },
    {
        type: "input",
        usage: "usage",
        message: "What instructions do you have for youer application?"
    },
    {
        type: "input",
        credits: "credits",
        message: "What are there other collabrators you'd like to list?"
    }
  ]).then(answers => {
    let readme = " "
    console.log(answers.title)
    console.log(answers.description)

    var titleName = answers.title
    var descrip = answers.description

    readme.append("#" + titleName)
    readme.append(descrip)

    fs.writeFile("README.md", answers, readme, err => {
      if (err) {
        return console.log(err);
      }
  
      console.log("Success!");
  
    });
  });
  
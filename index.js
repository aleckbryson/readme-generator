var inquirer = require("inquirer");
var fs = require("fs");

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile("README.md", data, function (err) {
        if (err) {
            return console.log(err);
        }
        console.log("Success!");
    });
}

// // function to initialize program
function init() {
   
}

// // function call to initialize program
init();

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
        message: "Do you have any usage information that you'd like to add?"
    },
    {
        type: "input",
        credits: "credits",
        message: "Are there other collabrators you'd like to list?"
    },
    {
        type: "input",
        tests: "tests",
        message: "What instructions do you have for youer application?"
    },
    {
        type: "input",
        credits: "questions",
        message: "Where can people contact you with questions?"
    },
  ]).then(answers => {
    let readme = " "
    var answers = process.argv
   
    fs.appendFile("README.md", answers, '\n', err => {
      if (err) {
        return console.log(err);
      }
      console.log("Success!");
      readme.append(`# ${answers.title}`);
      readme.append(`### Description \n ${answers.description.message}`);
      readme.append(`### Installation \n ${answers.install.message}`);
      readme.append(`### Usage \n ${answers.usage.message}`);
      readme.append(`### Credits \n ${answers.credits.message}`);
      readme.append(`### Tests \n ${answers.tests.message}`);
      readme.append(`### Questions \n ${answers.question.message}`);

    });
  });
  
var inquirer = require("inquirer");
var fs = require("fs");

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile("README.md", data, function (err) {
        if (err) {
            return console.log(err);
        }
        // console.log("Success!");
    });
}

writeToFile()

inquirer.prompt([
    {
      type: "input",
      name: "title",
      message: "What is your Project Title?"
    },
    {
      type: "input",
      name: "description",
      message: "What is your Project Description?"
    },
    {
        type: "input",
        name: "installation",
        message: "What are the steps required to install your project?"
    },
    {
        type: "input",
        name: "usage",
        message: "Do you have any usage information that you'd like to add?"
    },
    {
        type: "input",
        name: "credits",
        message: "Are there other collabrators you'd like to list?"
    },
    {
        type: "input",
        name: "tests",
        message: "What instructions do you have for youer application?"
    },
    {
        type: "input",
        name: "questions",
        message: "Where can people contact you with questions?"
    },
  ]).then(answers => {
    var readme = " "
    var answers = process.argv
   
    fs.appendFile("README.md", answers + '\n', err => {
      if (err) {
        return console.log(err);
      } else {
        //   
          `# ${answers.title}`;
          `### Description ${answers.description}`;
          `### Installation ${answers.install}`;
          `### Usage ${answers.usage}`;
          `### Credits ${answers.credits}`;
          `### Tests ${answers.tests}`;
         `### Questions ${answers.question}`;
      }
    });
  });
  
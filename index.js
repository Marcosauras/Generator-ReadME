const fs = require("fs");
const inquirer = require("inquirer");
const path = require("path")
const generateMarkdown = require("./generateMarkdown")
const questions = [
    {
        type: "input",
        message: "What is the title of your project?",
        name: "projectTitle",
    },
    {
        type: "input",
        message: "What is your GitHub username?",
        name: "gitHubName",
    },
    {
        type: "input",
        message: "What is an email address that someone can contact you on regarding questions to this project?",
        name: "userEmail",
    },
    {
        type: "input",
        message: "Describe what your project does in detail.",
        name: "description",
    },
    {
        type: "input",
        message: "How do you install or use your project?",
        name: "installation",
    },
    {
        type: "input",
        message: "How will your project work?",
        name: "projectUsage",
      },
      {
        type: "input",
        message: "Please provide guidelines for future contributions:",
        name: "contributors",
      },
      {
        type: "input",
        message: "Describe how you can test your project?",
        name: "projectTesting",
      },
      {

        type: 'list',
        message: 'Use the UP and DOWN arrow keys to choose the license you are using.',
        name: 'licenses',
        choices: ["MIT", "APACHE2.0", "Boost1.0", "MPL2.0", "BSD2", "BSD3", "none"],
      },
    ]
    
function writeReadMEHandler(projectFileName, data){
    return fs.writeFileSync(path.join(projectFileName), data);
}

function init() {
    inquirer.prompt(questions).then((responses) => {
      console.log("Creating an Awesome ReadME");
      writeReadMEHandler("./dist/README.md", generateMarkdown({...responses}));
      
    });
  }
init();
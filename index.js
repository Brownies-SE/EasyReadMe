// TODO: Include packages needed for this application
const getMarkdown = require("./utils/generateMarkdown");
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
inquirer
  .prompt([
    {
      type: "input",
      name: "github",
      message: "What is your github username? ",
    },
    {
      type: "input",
      name: "title",
      message: "What is the name of the project? ",
    },
    {
      type: "input",
      name: "description",
      message: "Please add a description of your project: ",
    },
    {
      type: "input",
      name: "installation",
      message: "Installation Instructions: ",
    },
    {
      type: "input",
      name: "usage",
      message: "What is the project used for: ",
    },
    {
      type: "input",
      name: "License",
      message: "Name all Licenses: ",
    },
    {
      type: "input",
      name: "contributors",
      message: "Name all contributors: ",
    },
    {
      type: "input",
      name: "test",
      message: "Enter tests: ",
    },
    {
      type: "input",
      name: "questions",
      message: "Enter Questions: ",
    },
  ])

  .then((response) => {
    const pageContent = generateMarkdown(response);
    fs.writeFile("README.md", pageContent, (err) =>
      err ? console.log(err) : console.log("It worked")
    );
  });

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

// TODO: Include packages needed for this application
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
      name: "githubURL",
      message: "What is the link to your githubURL? ",
    },
    {
      type: "input",
      name: "title",
      message: "What is the name of your current project? ",
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
      message: "What is this project used for: ",
    },
    {
      type: "input",
      name: "imageURL",
      message: "Link image path to the screenshot: ",
    },
    {
      type: "list",
      name: "getLicense",
      message: "Name all Licenses: ",
      choices: ["MIT", "GPLv3", "Mozilla"],
    },
    {
      type: "input",
      name: "contributors",
      message: "Name all contributors of your project: ",
    },
    {
      type: "input",
      name: "tests",
      message: "What tests were used: ",
    },
    {
      type: "input",
      name: "email",
      message: "Please enter your email: ",
    },
  ])

  .then((response) => {
    const pageContent = generateMarkdown(response);
    fs.writeFile("README.md", pageContent, (err) =>
      err ? console.log(err) : console.log("Generating")
    );
  });

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
      message: "What is your githubURL? ",
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
      name: "projectImageName",
      message: "Link the image name: ",
    },
    {
      type: "input",
      name: "imageURL",
      message: "Link the imageURL: ",
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
      message: "Name all contributors: ",
    },
    {
      type: "input",
      name: "tests",
      message: "Enter tests: ",
    },
    {
      type: "input",
      name: "email",
      message: "Enter email: ",
    },
  ])

  .then((response) => {
    const pageContent = generateMarkdown(response);
    fs.writeFile("README.md", pageContent, (err) =>
      err ? console.log(err) : console.log("Generating")
    );
  });

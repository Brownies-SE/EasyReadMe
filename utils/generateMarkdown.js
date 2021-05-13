// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license == "MIT") {
    return `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`;
  } else if (license == "GPLv3") {
    return `![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)`;
  } else if (license == "Mozilla") {
    return `![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)`;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  let markdown = `${renderLicenseBadge(data.getLicense)}`;
  return `# ${data.title}

  # Description 
  ${data.description}

  # Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributors](#contributors)
  * [Test](#testsclear)
  * [Questions](#questions)

  # Installation
  ${data.installation}
  # Usage
  ${data.usage} \n
  ![${data.projectImageName}]${data.imageURL}
  # License
  ${markdown}
  # Contributors
  ${data.contributors}
  # Tests
  ${data.tests}
  # Questions
  ${data.github} \n
  Checkout my github account: ${data.githubURL} \n
  If you have any questions, feel free to contact me: ${data.email}
`;
}

module.exports = generateMarkdown;

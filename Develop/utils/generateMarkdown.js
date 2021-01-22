// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case "MIT":
       return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
    case "Mozzila": 
       return '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)';
    case "IBM":
       return '[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)'
    default:
       return '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case "MIT":
      return '[MIT](https://opensource.org/licenses/MIT)';
    case "Mozzila": 
      return '[Mozzila](https://opensource.org/licenses/MPL-2.0)';
    case "IBM":
      return '[IBM](https://opensource.org/licenses/IPL-1.0)';
      default:
        return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return `${renderLicenseLink(license)} ${renderLicenseBadge(license)}`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown({title, User, license, socialMedia, description, general, usage, installation, contribution}) {
  return `# ${title}

  ## Table of Contents
- [General Information](#general-information)
- [Usage](#usage)
- [Installation](#installation)
- [Instructions for Contributing to this Project](#instructions-for-contributing-to-this-project)
- [Author(s)](#author(s))
- [License](#license)

  ## User: 
  
  ${User}

  ## SocialMedia: 
  
  ${socialMedia}

  ## Description: 
  
  ${description}

  ## General: 
  
  ${general}

  ## Usage: 
  
  ${usage}

  ## Installation: 
  
  ${installation}

  ## Contribution: 
  
  ${contribution}

  ## license: ${renderLicenseSection(license)}
  
`;
}

module.exports = generateMarkdown;

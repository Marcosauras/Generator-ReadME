// adding a licenses
function renderLicenseBadge(licenses) {
    if (licenses !== "none") {
      return `![Github license](https://img.shields.io/badge/license-${licenses}-blue.svg)`;
    }
    return "";
  }

    // This will create the readme text with the information that has been inputted into the system by the user
function generateMarkdown(data){
    return `
# ${data.projectTitle}
${renderLicenseBadge(data.licenses)}

# Description
${data.description}
## Table of Contents
- [License](#license)
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)
# Installation
${data.installation}
# Usage
${data.usage}
# Contributing
${data.contributors}
# Tests
${data.projectTesting}
# Questions
- If you have any questions for me please contact me at the locations below.
- My GitHub Profile: [${data.gitHubName}](https://www.github.com/${data.gitHubName})
- Please email me at ${data.userEmail} with any additional questions

`
}

module.exports = generateMarkdown
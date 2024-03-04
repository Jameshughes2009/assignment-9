// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== `None`) {
    return `![Badge for file](https://img.shields.io/badge/license-${license}-blue.svg)`
  }
  return ""
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== 'None') {
    return `\n[License](#license)\n`
  }
  return ""
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'None') {
    return `## License
    \n This project is licensed under ${license}\n
    `
  }
  return ""
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  //String literal for markup language

  return `
${renderLicenseBadge(data.license)}

# ${data.title}

## Description

${data.description}

## Table of Contents
- [Installation](#installation)
- [Tests](#tests)
- [Usage](#usage)
- [Contributing](#contributing)
- [Questions](#questions)
- ${renderLicenseLink(data.license)}

## Installation

To install please run 
\`\`\`
${data.install}
\`\`\`

## Tests

To test please run
\`\`\`
${data.testing}
\`\`\`

## Usage

${data.usage}

## Contributing

${data.contributing}

## Questions

If you have any questions or concerns, you may reach me at ${data.email}.

To see my other projects, please view my GitHub profile: [${data.github}](https://github.com/${data.github}).

${renderLicenseSection(data.license)}
`;
}

module.exports = generateMarkdown;

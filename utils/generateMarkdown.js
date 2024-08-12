// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license) return '';
  return `![License](https://img.shields.io/badge/License-${license}-blue.svg)`;}

  // TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (!license) return '';
  const licenseLinks = {
      'MIT': 'https://opensource.org/licenses/MIT',
      'GPLv3': 'https://www.gnu.org/licenses/gpl-3.0',
      'Apache 2.0': 'https://opensource.org/licenses/Apache-2.0',
      'BSD 3-Clause': 'https://opensource.org/licenses/BSD-3-Clause'
  };
  return licenseLinks[license] || '';}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
if (!license) return '';
return `## License
This project is licensed with the ${license} license.`}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;

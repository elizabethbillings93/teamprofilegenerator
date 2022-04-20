

// TODO: Create a function to generate markdown for README
function generateCards(data) {
  return `# ${data.title}
  
  ${data.name}
  
  ${data.title}
  
  ${data.id}

  ${data.email}
  ${data.github}
`;
}

module.exports = generateMarkdown;
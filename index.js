const inquirer = require('inquirer');
const fs = require('fs');
const {Circle, Square, Triangle} = require("./lib/shapes");


const questions = [
  {
    type: 'input',
    message: 'Type Three Letters for your SVG Name',
    name: 'name',
  },
  {
    type: 'input',
    message: 'Which Color would you like the text to be? (Name of Color or Hexadecimal Color with #)',
    name: 'titleColor',
  },
  {
    type: 'list',
    message: 'What shape would you like?',
    name: 'shapeChosen',
    choices: ['Square', 'Circle', 'Triangle',],
  },
  {
    type: 'input',
    message: 'What Color for the shape? (Name of Color or Hexadecimal Color with #)',
    name: 'shapeColor',
  },
];

function generateSVG(answers) {
  let shape;

  if (answers.shapeChosen === 'Square') {
    shape = new Square();
  } else if (answers.shapeChosen === 'Circle') {
    shape = new Circle();
  } else if (answers.shapeChosen === 'Triangle') {
    shape = new Triangle();
  } ;
  

  shape.setColor(answers.shapeColor);
  shape.setText(answers.name);
  shape.setTextcolor(answers.titleColor);

  return `
  
  <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

  ${shape.create()}                                                                                                                                                   
  <text x="150" y="125" font-size="60" text-anchor="middle" fill="${shape.textColor}">${shape.text}</text>                                                          
</svg>
`;
}






inquirer
  .prompt(questions)
  .then((answers) => {
    const svgContent = generateSVG(answers);

    fs.writeFile('LOGO.svg', svgContent, (err) => {
      if (err) {
        console.error(err);
      } else {
        console.log('Enjoy Your New Logo!');
      }
    });
  })
  .catch((error) => {
    console.error(error);
  });




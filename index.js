const inquirer = require('inquirer');
const fs = require('fs');



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
    type: 'input',
    message: 'What shape would you like?',
    name: 'shape',
    choices: ['Square', 'Circle', 'Triangle',],
  },
  {
    type: 'input',
    message: 'What Color for the shape? (Name of Color or Hexadecimal Color with #)',
    name: 'shapeColor',
  },
];
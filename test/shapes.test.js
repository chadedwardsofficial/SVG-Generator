const { Triangle, Square, Circle, } = require('../lib/shapes.js');
const { Shape } = require('../lib/shapes.js');

// Test to see if the color will be correctly input //

describe("Circle", () => {
  test("create method should generate the correct SVG code for a blue circle", () => {
    const shape = new Circle();
    shape.setColor("blue");
    const result = shape.create();
    expect(result).toEqual(
      '<circle cx="50%" cy="50%" r="100" height="100%" width="100%" fill="blue"></circle>'
    );
  });
});

describe("Triangle", () => {
  test("create method should generate the correct SVG code for a red triangle", () => {
    const shape = new Triangle();
    const color = "red";
    shape.setColor(color);
    const result = shape.create();
    expect(result).toContain(
      `<polygon height="100%" width="100%" points="0,200 300,200 150,0" fill="${color}"></polygon>`
    );
  });
});

describe("Square", () => {
  test("create method should generate the correct SVG code for a green square", () => {
    const shape = new Square();
    const color = "green";
    shape.setColor(color);
    const result = shape.create();
    expect(result).toContain(
      `<rect x="50" height="200" width="200" fill="${color}"></rect>`
    );
  });
});



// Test to see if the text will be correctly input and the text color 

describe('Shape', () => {
  test('setColor, setText, and setTextcolor methods should set the color, text, and text color appropriately', () => {
   
    const shape = new Shape();
    const color = 'blue';
    const text = 'Sample Text';
    const textColor = 'yellow';


    shape.setColor(color);
    shape.setText(text);
    shape.setTextcolor(textColor);


    expect(shape.color).toEqual(color);
    expect(shape.text).toEqual(text);
    expect(shape.textColor).toEqual(textColor);
  });
});
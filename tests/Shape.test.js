const { describe } = require("node:test");
const Circle = require('../lib/Circle.js');
const Square = require('../lib/Square.js');
const Triangle = require('../lib/Triangle.js');
const Shape = require("../lib/Shape.js");
const { trace, log } = require("console");

describe("shape", () => {

  describe("Is circle a shape class", () => {
    it('should be 3 letter text', () => {
      let circle = new Circle('txt', 'red', 'white', 'black');
      // console.log(circle);
    // is the new circle instance a type of shape is true
        expect(circle.text).toEqual('txt');
    })

    it('should be red text', () => {
      let circle = new Circle('txt', 'red', 'white', 'black');
      expect(circle.textColor).toEqual('red');
    })

    it('should be a white circle', () => {
      let circle = new Circle('txt', 'red', 'white', 'black');
      expect(circle.shapeColor).toEqual('white');
    })

    it('should be a black flag', () => {
      let circle = new Circle('txt', 'red', 'white', 'black');
      expect(circle.flagColor).toEqual('black');
    })
    // console.log('Circle class');
  });

   describe("is square a shape class", () => {
    it('should be 3 letter text', () => {
      let square = new Square('svg', 'blue', 'orange', 'white');
        expect(square.text).toEqual('svg');
    })

    it('should be red text', () => {
      let square = new Square('svg', 'blue', 'orange', 'white');
      expect(square.textColor).toEqual('blue');
    })

    it('should be a white square', () => {
      let square = new Square('svg', 'blue', 'orange', 'white');
      expect(square.shapeColor).toEqual('orange');
    })

    it('should be a black flag', () => {
      let square = new Square('svg', 'blue', 'orange', 'white');
      expect(square.flagColor).toEqual('white');
    })
    // console.log('Square class');
  });

  describe("is triangle a shape class", () => {
    it('should be 3 letter text', () => {
      let triangle = new Triangle('nod', 'purple', 'yellow', 'gray');
      expect(triangle.text).toEqual('nod');
    })

    it('should be purple text', () => {
      let triangle = new Triangle('nod', 'purple', 'yellow', 'gray');
      expect(triangle.textColor).toEqual('purple');
    })

    it('should be a yellow triangle', () => {
      let triangle = new Triangle('nod', 'purple', 'yellow', 'gray');
      expect(triangle.shapeColor).toEqual('yellow');
    })

    it('should be a gray flag', () => {
      let triangle = new Triangle('nod', 'purple', 'yellow', 'gray');
      expect(triangle.flagColor).toEqual('gray');
    })
    // console.log('Triangle class');
  }); 
  
});

const { describe } = require("node:test");
const Circle = require('./circle.js');
const { assert } = require("console");
const Shape = require("./shape.js");

describe("shape", () => {
  describe("Is circle a shape class", () => {
    let circle = new Circle('txt', 'red', 'white', 'black');

    // is the new circle instance a type of shape is true
    assert(circle instanceof Shape).uqual(true);


    describe("properties", () => {

    });
  });
  describe("square", () => {});
});
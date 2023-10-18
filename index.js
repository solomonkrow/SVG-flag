const Circle = require('./lib/circle.js');
const Square = require('./lib/square.js');
const Triangle = require('./lib/Triangle.js');


const inquirer = require('inquirer');
const fs = require('fs');

const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'abbrv',
            message: 'Enter 3 characters for your Logo',
            validate: (value) => value.length < 4 ? true : 'No more than 3 characters',
        },
        {
            type: 'input',
            name: 'abbrvColor',
            message: 'Enter a color or hexcode for characters',
            validate: (value) => value ? true : 'Input value required',
        },
        {
            type: 'list',
            name: 'shape',
            message: 'Select a shape',
            choices: ['circle', 'triangle', 'square'],
            validate: (value) => value ? true : 'Input value required',
        },
        {
            type: 'input',
            name: 'shapeColor',
            message: 'Enter a color or hexcode for shapes',
            validate: (value) => value ? true : 'Input value required',
        },
        {
            type: 'input',
            name: 'flagColor',
            message: 'Enter a color or hexcode for background',
            validate: (value) => value ? true : 'Input value required',
        },
    ])
};

function createLogo(logo, data) {
    fs.writeFile(`${logo.split(' ').join('')}.svg`, data, (err) => {
        if(err){console.log(err);}
        console.log('Flag Generated');
    })
};

function init() {
    promptUser()
        .then((data) => {
            let generatedSVG;
            // console.log(data);
            if(data.shape === 'circle') {
                let circle = new Circle(data.abbrv, data.abbrvColor, data.shapeColor, data.flagColor);
                generatedSVG = circle.generateCircle();
            } else if (data.shape === 'square') {
                let circle = new Square(data.abbrv, data.abbrvColor, data.shapeColor, data.flagColor);
                generatedSVG = circle.generateSquare();
            } else if (data.shape === 'triangle') {
                let circle = new Triangle(data.abbrv, data.abbrvColor, data.shapeColor, data.flagColor);
                generatedSVG = circle.generateTriangle();
            }

            createLogo('./examples/flag',(generatedSVG))
        })
        .then(() => console.log('Successfully wrote to examples folder'))
        .catch((err) => console.error(err));
};

init();
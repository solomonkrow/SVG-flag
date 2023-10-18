const Shape = require('./shape.js')

class Circle extends Shape {
    constructor(abbrv, abbrvColor, shapeColor, flagColor) {
        super(flagColor)  
        this.text = abbrv;
        this.textColor = abbrvColor;
        this.shapeColor = shapeColor;
    }

    generateCircle() {
        let flag = super.generateFlag();
        let shape = ` <circle cx="150" cy="100" r="80" fill="${this.shapeColor}" />

        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>

        </svg> `;
        return flag + shape;
    }
}

module.exports = Circle
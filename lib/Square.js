const Shape = require('./shape.js')

class Square extends Shape {
    constructor(abbrv, abbrvColor, shapeColor, flagColor) {
        super(flagColor)  
        this.text = abbrv;
        this.textColor = abbrvColor;
        this.shapeColor = shapeColor;
    }

    generateSquare() {
        let flag = super.generateFlag();
        let shape = ` <rect x="75" y="25" width="150" height="150" fill="${this.shapeColor}" />

        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>

        </svg> `;
        return flag + shape;
    }
}

module.exports = Square
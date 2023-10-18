const Shape = require('./shape.js')

class Triangle extends Shape {
    constructor(abbrv, abbrvColor, shapeColor, flagColor) {
        super(flagColor)  
        this.text = abbrv;
        this.textColor = abbrvColor;
        this.shapeColor = shapeColor;
    }

    generateTriangle() {
        let flag = super.generateFlag();
        let shape = ` <polygon points="150 20, 250 160, 50 160" fill="${this.shapeColor}" />

        <text x="150" y="130" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>

        </svg> `;
        return flag + shape;
    }
}

module.exports = Triangle
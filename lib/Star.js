const Shape = require('./Shape.js')

class Star extends Shape {
    constructor(abbrv, abbrvColor, shapeColor, flagColor) {
        super(flagColor)  
        this.text = abbrv;
        this.textColor = abbrvColor;
        this.shapeColor = shapeColor;
    }

    generateStar() {
        let flag = super.generateFlag();
        let shape = ` <polygon points="150,20 90,180 240,75 60,75 210,180" fill="${this.shapeColor}" />

        <text x="150" y="110" font-size="40" text-anchor="middle" fill="${this.textColor}">${this.text}</text>

        </svg> `;
        return flag + shape;
    }
}

module.exports = Star
let Calculator = require('./calculator.js');

class SqrCalc extends Calculator {
    constructor(firstNumber) {
        super(firstNumber);
    }

    sum() {
        return  Math.pow(super.sum(...arguments), 2);
    }

    dif() {
        return  Math.pow(super.dif(...arguments), 2);
    }

    div() {
        return  Math.pow(super.div(...arguments), 2);
    }

    mul() {
        return  Math.pow(super.mul(...arguments), 2);
    }
}

module.exports = SqrCalc;

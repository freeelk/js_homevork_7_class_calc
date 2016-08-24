var Calculator = require('./calculator.js');

var SqrCalc = function(firstNumber) {
    Calculator.apply(this, arguments);
};

SqrCalc.prototype = Object.create(Calculator.prototype);

SqrCalc.prototype.sum = function() {
    return  Math.pow(Calculator.prototype.sum.apply(this, arguments), 2);
};

SqrCalc.prototype.dif = function() {
    return  Math.pow(Calculator.prototype.dif.apply(this, arguments), 2);
};

SqrCalc.prototype.div = function() {
    return  Math.pow(Calculator.prototype.div.apply(this, arguments), 2);
};

SqrCalc.prototype.mul = function() {
    return  Math.pow(Calculator.prototype.mul.apply(this, arguments), 2);
};

module.exports = SqrCalc;
'use strict';

var Calculator = function Calculator(firstNumber) {
    this.firstNumber = firstNumber;
};

Calculator.prototype.sum = function () {
    var res = this.firstNumber;
    for (var i = 0; i < arguments.length; i++) {
        res += arguments[i];
    }
    return res;
};

Calculator.prototype.dif = function () {
    var res = this.firstNumber;
    for (var i = 0; i < arguments.length; i++) {
        res -= arguments[i];
    }
    return res;
};

Calculator.prototype.div = function () {
    var res = this.firstNumber;
    for (var i = 0; i < arguments.length; i++) {
        if (arguments[i] === 0) {
            throw new Error('Ошибка деления на ноль');
        }
        res /= arguments[i];
    }
    return res;
};

Calculator.prototype.mul = function () {
    var res = this.firstNumber;
    for (var i = 0; i < arguments.length; i++) {
        res *= arguments[i];
    }
    return res;
};

module.exports = Calculator;
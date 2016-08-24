'use strict';

var Calculator = require('./calculator.js');
var SqrCalc = require('./sqr_calc.js');

var calc = new Calculator(10);
var sqrCalc = new SqrCalc(10);

console.log(calc.sum(2, 2));
console.log(sqrCalc.sum(2, 2));

console.log(calc.dif(2, 2));
console.log(sqrCalc.dif(2, 2));

console.log(calc.div(5, 1));
console.log(sqrCalc.div(5, 1));

console.log(calc.mul(5, 2));
console.log(sqrCalc.mul(5, 2));
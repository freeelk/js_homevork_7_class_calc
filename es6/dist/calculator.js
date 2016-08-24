'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Calculator = function () {
    function Calculator(firstNumber) {
        _classCallCheck(this, Calculator);

        this.firstNumber = firstNumber;
    }

    _createClass(Calculator, [{
        key: 'sum',
        value: function sum() {
            var res = this.firstNumber;
            for (var i = 0; i < arguments.length; i++) {
                res += arguments[i];
            }
            return res;
        }
    }, {
        key: 'dif',
        value: function dif() {
            var res = this.firstNumber;
            for (var i = 0; i < arguments.length; i++) {
                res -= arguments[i];
            }
            return res;
        }
    }, {
        key: 'div',
        value: function div() {
            var res = this.firstNumber;
            for (var i = 0; i < arguments.length; i++) {
                if (arguments[i] === 0) {
                    throw new Error('Ошибка деления на ноль');
                }
                res /= arguments[i];
            }
            return res;
        }
    }, {
        key: 'mul',
        value: function mul() {
            var res = this.firstNumber;
            for (var i = 0; i < arguments.length; i++) {
                res *= arguments[i];
            }
            return res;
        }
    }]);

    return Calculator;
}();

module.exports = Calculator;
class Calculator  {
    constructor(firstNumber) {
        this.firstNumber = firstNumber;
    }
    sum() {
        let res = this.firstNumber;
        for (let i=0; i<arguments.length; i++) {
            res += arguments[i];
        }
        return res;
    }

    dif() {
        let res = this.firstNumber;
        for (let i=0; i<arguments.length; i++) {
            res -= arguments[i];
        }
        return res;
    };

    div() {
        let res = this.firstNumber;
        for (let i=0; i<arguments.length; i++) {
            if (arguments[i] === 0) {
                throw new Error('Ошибка деления на ноль');
            }
            res /= arguments[i];
        }
        return res;
    };

    mul() {
        let res = this.firstNumber;
        for (let i=0; i<arguments.length; i++) {
            res *= arguments[i];
        }
        return res;
    };

}

module.exports = Calculator;

import display from './display.js';

class State {
    constructor() {
        this._displayNumber = 0;
        this._result = 0;
        this._lastNumber = 0;
        this._operation = '';
    }

    get displayNumber() {
        return this._displayNumber;
    }
    set displayNumber(value) {
        this._displayNumber = value;
        display.show(this._displayNumber);
        return this._displayNumber;
    }
    get result() {
        return this._result;
    }
    set result(value) {
        return (this._result = value);
    }
    get lastNumber() {
        return this._lastNumber;
    }
    set lastNumber(value) {
        return (this._lastNumber = value);
    }
    get operation() {
        return this._operation;
    }
    set operation(value) {
        return (this._operation = value);
    }

    deleteOneDigitDisplayNumber() {
        if (this.displayNumber.toString().length > 1) {
            this.displayNumber = this._displayNumber.toString().slice(0, -1);
            console.log(this.displayNumber);
        } else {
            this.displayNumber = 0;
        }
    }

    addToDisplayNumber(value) {
        let temp = ''.concat(this._displayNumber, value);
        if (temp.length < 11) {
            this.displayNumber = Number(temp);
        } else {
            alert('Przekroczona maksymalna liczba');
        }
    }
}

export default new State();

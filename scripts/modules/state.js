import display from "./display.js";

class State {
    constructor() {
        this._displayNumber = 0;
        this._result = 0;
        this._lastNumber = 0;
    }

    get displayNumber() {
        return this._displayNumber;
    }
    set displayNumber(value) {
        this._displayNumber = value;
        display.show(this._displayNumber);
        return this._displayNumber ;
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
}

export default new State();

import state from './state.js';

class Display {
    constructor() {
        this._display = document.querySelector('.calc__display');
    }
    get handler() {
        return this._display;
    }
    show(value) {
        this._display.textContent = value;
    }

    displayResult() {
        this.show(state.result);
    }
    displayCurrentNumber() {
        this.show(state.displayNumber);
    }
}
export default new Display();
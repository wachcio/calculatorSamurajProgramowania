import Display from './display.js';
const display = new Display();
export default class State {
    constructor() {
        this._numberOnDisplay = 0;
        this._result = 0;
        this._lastNumber =0;
    }

    displayUpdate() {
        display.show(this._numberOnDisplay);
    }

    get numberOnDisplay() {
        return this._numberOnDisplay;
    }

    set numberOnDisplay(value) {
        this._numberOnDisplay = value;
        this.displayUpdate();
        return this._numberOnDisplay ;
    }
}

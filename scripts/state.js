import Display from './display.js';
const display = new Display();
export default class State {
    constructor() {
        this._numberOnDisplay = 0;
        this._result = 0;
        this._lastNumber = 0;
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
        console.log('state: ', this._numberOnDisplay);

        return this._numberOnDisplay;
    }
    addToDisplay(value) {
        let temp = ''.concat(this._numberOnDisplay, value);
        if (temp.length < 11) {
            this.numberOnDisplay = Number(temp);
        } else {
            alert('Przekroczona maksymalna liczba');
        }
    }
}

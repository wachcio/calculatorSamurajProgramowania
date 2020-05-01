import state from './state.js';
import display from './display.js';
class ActionsBtn {
    constructor() {
        this._digits = document.querySelectorAll(`[data-action="digit"]`);
        this._plusMinus = document.querySelector(`[data-action="plus_minus"]`);
        this._plus = document.querySelector(`[data-action="plus"]`);
        this._minus = document.querySelector(`[data-action="minus"]`);
        this._multiplication = document.querySelector(
            `[data-action="multiplication"]`
        );
        this._result = document.querySelector(`[data-action="result"]`);
        this._divide = document.querySelector(`[data-action="divide"]`);
        this._result = document.querySelector(`[data-action="result"]`);
        this._comma = document.querySelector(`[data-action="comma"]`);
        this._back = document.querySelector(`[data-action="back"]`);
        this._clear = document.querySelector(`[data-action="c"]`);
        this.addActions();
    }
    digitAction(e) {
        state.addToDisplayNumber(e.target.dataset.digit);
        console.log(state.displayNumber);
        return e.target.dataset.digit;
    }
    plusMinusAction(e) {
        console.log('+-');
        return '+-';
    }
    plusAction(e) {
        state.useOperation('+');
        return '+';
    }
    minusAction(e) {
        console.log('-');
        return '-';
    }
    multiplicationAction(e) {
        console.log('*');
        return '*';
    }
    divideAction(e) {
        console.log('/');
        return '/';
    }
    resultAction(e) {
        console.log('=');
        return '=';
    }
    commaAction(e) {
        state.addToDisplayNumber(".");
        console.log(".");
        return ".";
    }
    backAction(e) {
        console.log('<<');
        state.deleteOneDigitDisplayNumber();
        return '<<';
    }
    clearAction(e){
        state.clearState();
    }
    resultAction(e){

        display.displayResult();
    }
    addActions() {
        this._digits.forEach((element) => {
            element.addEventListener('click', this.digitAction);
        });

        this._plusMinus.addEventListener('click', this.plusMinusAction);
        this._plus.addEventListener('click', this.plusAction);
        this._minus.addEventListener('click', this.minusAction);
        this._multiplication.addEventListener(
            'click',
            this.multiplicationAction
        );
        this._result.addEventListener('click', this.resultAction);
        this._divide.addEventListener('click', this.divideAction);
        this._result.addEventListener('click', this.resultAction);
        this._comma.addEventListener('click', this.commaAction);
        this._back.addEventListener('click', this.backAction);
        this._clear.addEventListener('click', this.clearAction);
    }
}

export default new ActionsBtn();

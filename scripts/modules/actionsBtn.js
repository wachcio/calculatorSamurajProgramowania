class ActionsBtn {
    constructor() {
        this._digits = document.querySelectorAll(`[data-action="digit"]`);
        this._plus = document.querySelectorAll(`[data-action="plus"]`);
        this._minus = document.querySelectorAll(`[data-action="minus"]`);
        this.addDigitActions();
    }
    digitAction(e){
        console.log(e.target.dataset.digit);
                return e.target.dataset.digit;
    }
    addDigitActions() {
        this._digits.forEach((element) => {
            element.addEventListener(
                'click',
                this.digitAction
            );
        });
    }
}

export default new ActionsBtn();

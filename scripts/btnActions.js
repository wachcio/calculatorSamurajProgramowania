export default class BtnActions  {

    constructor(){
       this._buttons = document.querySelector(".btn");
       this._digitBtn = document.querySelectorAll(`[data-action="digit"]`);
       this.addDigitActions();
    }

    get digitBtn(){
        return this._digitBtn;
    }

    digitAction(e){
        console.log(e.target.dataset.digit);
                return e.target.dataset.digit;
    }

    addDigitActions(){
        this._digitBtn.forEach(element => {
            element.addEventListener('click', this.digitAction)
        });
    }


}

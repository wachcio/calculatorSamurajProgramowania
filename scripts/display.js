export default class Display  {

    constructor(){
        this._display = document.querySelector(".calc__display");

    }

    show(value){
        this._display.textContent = value;
    }



}

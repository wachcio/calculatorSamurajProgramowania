export default class State  {

    constructor(){
        this._displayResult = 0;
        this._result = 0;
    }

    get displayResult(){
        return this._displayResult;
    }

    set displayResult(value){

        return this._displayResult = value;
    }


}

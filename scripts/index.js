import State from "./state.js";
import BtnActions from "./btnActions.js"

const state = new State;


document.querySelectorAll(`[data-action="digit"]`).forEach(element => {
    element.addEventListener('click', (e)=>{
        console.log(e.target.dataset.digit);
        state.addToDisplay(e.target.dataset.digit)
        return e.target.dataset.digit;
    })
});

// console.log(btnActions.digitBtn[1].dataset.digit);

// state.numberOnDisplay=2;

// state.addToDisplay(3);




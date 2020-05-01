import state from './modules/state.js';
import Display from './modules/display.js';

const display = new Display();

state.result = 23;
display.displayCurrentNumber();

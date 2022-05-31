import Calculator from './modules/calculator.js';

const calculator = new Calculator('.calculator__display', '.calculator__button.number', 9);
calculator.init();

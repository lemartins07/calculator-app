export default class Calculator {
  constructor(display, numbers, limit) {
    this.display = document.querySelector(display);
    this.numbers = document.querySelectorAll(numbers);
    this.limit = limit;

    this.display.innerText = 0;

    this.btnDivision = document.querySelector('#btn-division');
    this.btnMultiplication = document.querySelector('#btn-multiplication');
    this.btnSubtraction = document.querySelector('#btn-subtraction');
    this.btnSum = document.querySelector('#btn-sum');
    this.btnResult = document.querySelector('#btn-result');
    this.btnClear = document.querySelector('#btn-clear');
    this.btnAllClear = document.querySelector('#btn-all-clear');
    this.btnPercentage = document.querySelector('#btn-percentage');

    this.bindFunctions();
  }

  show(number) {
    switch (number) {
      default:
        this.addNumberDisplay(number);
    }
  }

  addNumberDisplay(number) {
    if (this.display.innerText.length < this.limit) {
      this.display.innerText += number;
    }
  }

  handleNumberClick(event) {
    event.preventDefault();
    this.show(event.target.innerText);
  }

  addNumbersEvents() {
    this.numbers.forEach((number) => number.addEventListener('click', this.handleNumberClick));
  }

  addNumbersMousedownEvents() {
    this.numbers.forEach((number) => number.addEventListener('mousedown', this.handleMousedown));
  }

  addNumbersMouseupEvents() {
    this.numbers.forEach((number) => number.addEventListener('mouseup', this.handleMouseup));
  }

  handleDivision({ target }) {

  }

  handleMultiplication({ target }) {

  }

  handleSubtraction({ target }) {

  }

  handleSum({ target }) {

  }

  handleResult({ target }) {

  }

  handleClear({ target }) {

  }

  handleAllClear({ target }) {
    this.display.innerText = 0;
  }

  handlePercentage({ target }) {

  }

  handleMousedown({ target }) {
    target.classList.add('brightness');
  }

  handleMouseup({ target }) {
    target.classList.remove('brightness');
  }

  addOperationsEvents() {
    this.btnDivision.addEventListener('click', this.handleDivision);
    this.btnMultiplication.addEventListener('click', this.handleMultiplication);
    this.btnSubtraction.addEventListener('click', this.handleSubtraction);
    this.btnSum.addEventListener('click', this.handleSum);
    this.btnResult.addEventListener('click', this.handleResult);
    this.btnClear.addEventListener('click', this.handleClear);
    this.btnAllClear.addEventListener('click', this.handleAllClear);
    this.btnPercentage.addEventListener('click', this.handlePercentage);
  }

  addMousedownEvent() {
    this.btnDivision.addEventListener('mousedown', this.handleMousedown);
    this.btnMultiplication.addEventListener('mousedown', this.handleMousedown);
    this.btnSubtraction.addEventListener('mousedown', this.handleMousedown);
    this.btnSum.addEventListener('mousedown', this.handleMousedown);
    this.btnResult.addEventListener('mousedown', this.handleMousedown);
    this.btnClear.addEventListener('mousedown', this.handleMousedown);
    this.btnAllClear.addEventListener('mousedown', this.handleMousedown);
    this.btnPercentage.addEventListener('mousedown', this.handleMousedown);
  }

  addMouseupEvent() {
    this.btnDivision.addEventListener('mouseup', this.handleMouseup);
    this.btnMultiplication.addEventListener('mouseup', this.handleMouseup);
    this.btnSubtraction.addEventListener('mouseup', this.handleMouseup);
    this.btnSum.addEventListener('mouseup', this.handleMouseup);
    this.btnResult.addEventListener('mouseup', this.handleMouseup);
    this.btnClear.addEventListener('mouseup', this.handleMouseup);
    this.btnAllClear.addEventListener('mouseup', this.handleMouseup);
    this.btnPercentage.addEventListener('mouseup', this.handleMouseup);
  }

  bindFunctions() {
    this.handleDivision = this.handleDivision.bind(this);
    this.handleMultiplication = this.handleMultiplication.bind(this);
    this.handleSubtraction = this.handleSubtraction.bind(this);
    this.handleSum = this.handleSum.bind(this);
    this.handleResult = this.handleResult.bind(this);
    this.handleClear = this.handleClear.bind(this);
    this.handleAllClear = this.handleAllClear.bind(this);
    this.handlePercentage = this.handlePercentage.bind(this);

    this.handleNumberClick = this.handleNumberClick.bind(this);
  }

  init() {
    this.addNumbersEvents();
    this.addNumbersMousedownEvents();
    this.addNumbersMouseupEvents();
    this.addOperationsEvents();
    this.addMousedownEvent();
    this.addMouseupEvent();
  }
}

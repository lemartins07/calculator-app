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

  handleDivision() {
    console.log(this);
  }

  handleMultiplication() {
    console.log(this);
  }

  handleSubtraction() {
    console.log(this);
  }

  handleSum() {
    console.log(this);
  }

  handleResult() {
    console.log(this);
  }

  handleClear() {
    console.log(this);
  }

  handleAllClear() {
    this.display.innerText = 0;
  }

  handlePercentage() {
    console.log(this);
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
    this.addOperationsEvents();
  }
}

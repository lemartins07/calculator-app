export default class Calculator {
  constructor(display, numbers, limit) {
    this.display = document.querySelector(display);
    this.numbers = document.querySelectorAll(numbers);
    this.operations = document.querySelectorAll('.calculator__button.operation');
    this.limit = limit;

    this.display.innerText = '0';
    this.operation = null;
    this.clearDisplay = false;
    this.values = [0, 0];
    this.current = 0;

    this.btnClear = document.querySelector('#btn-clear');
    this.btnAllClear = document.querySelector('#btn-all-clear');
    this.btnPercentage = document.querySelector('#btn-percentage');

    this.bindFunctions();
  }

  setOperarion(op) {
    const operation = op.target.innerText;

    if (this.current === 0) {
      this.operation = operation;
      this.current = 1;
      this.clearDisplay = true;
    } else {
      const equals = operation === '=';
      this.handleResult(this.operation);

      if (Number.isNaN(this.values[0])) {
        this.handleAllClear();
        return;
      }

      this.values[1] = 0;

      this.display.innerText = this.values[0].toString();
      this.operation = equals ? null : operation;
      this.current = equals ? 0 : 1;
      this.clearDisplay = !equals;
    }
  }

  addDigit(n) {
    const number = n.target.innerText;
    let displayValue = this.display.innerText;

    if (number === '.' && this.display.innerText.includes('.')) {
      return null;
    }

    const clearDisplay = displayValue === '0' || this.clearDisplay;
    const currentValue = clearDisplay ? '' : displayValue;

    displayValue = (currentValue + number).length <= this.limit
      ? currentValue + number
      : currentValue;

    this.display.innerText = displayValue;
    this.clearDisplay = false;

    if (number !== '.') {
      const newValue = parseFloat(displayValue);
      this.values[this.current] = newValue;
    }

    return null;
  }

  addNumbersEvents() {
    this.numbers.forEach((number) => number.addEventListener('click', this.addDigit));
  }

  addOperationsEvents() {
    this.operations.forEach((op) => op.addEventListener('click', this.setOperarion));
  }

  addAuxEvents() {
    this.btnClear.addEventListener('click', this.handleClear);
    this.btnAllClear.addEventListener('click', this.handleAllClear);
    this.btnPercentage.addEventListener('click', this.handlePercentage);
  }

  handleResult() {
    switch (this.operation) {
      case '/':
        this.values[0] = this.resultFormat(this.values[0] / this.values[1]);
        break;
      case '*':
        this.values[0] = this.resultFormat(this.values[0] * this.values[1]);
        break;
      case '-':
        this.values[0] = this.resultFormat(this.values[0] - this.values[1]);
        break;
      default:
        this.values[0] = this.resultFormat(this.values[0] + this.values[1]);
        break;
    }
  }

  resultFormat(n) {
    const a = String(n).split('.');

    const decimalPlaces = this.limit - a[0].length;

    if (decimalPlaces <= 0) {
      return Math.round(n);
    } if (decimalPlaces > 6) {
      return n.toFixed(6);
    }

    return n.toFixed(decimalPlaces);
  }

  handleClear() {
    this.display.innerText = '0';
    this.operation = null;
    this.clearDisplay = false;
    this.values = [0, 0];
    this.current = 0;
  }

  handleAllClear() {
    this.display.innerText = '0';
    this.operation = null;
    this.clearDisplay = false;
    this.values = [0, 0];
    this.current = 0;
  }

  // handlePercentage() {
  // }

  bindFunctions() {
    this.handleResult = this.handleResult.bind(this);
    this.handleClear = this.handleClear.bind(this);
    this.handleAllClear = this.handleAllClear.bind(this);
    // this.handlePercentage = this.handlePercentage.bind(this);
    this.setOperarion = this.setOperarion.bind(this);
    this.addDigit = this.addDigit.bind(this);
  }

  init() {
    this.addNumbersEvents();
    this.addOperationsEvents();
    this.addOperationsEvents();
    this.addAuxEvents();
  }
}

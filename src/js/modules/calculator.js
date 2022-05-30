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

  setOperarion(op) {
    const operation = op.target.innerText;

    if (this.current === 0) {
      this.operation = operation;
      this.current = 1;
      this.clearDisplay = true;
    } else {
      const equals = operation === '=';
      this.handleResult(this.operation);

      if (Number.isNaN(this.values[0]) || !Number.isFinite(this.values[0])) {
        this.clearMemory();
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
    displayValue = currentValue + number;

    this.display.innerText = displayValue;
    this.clearDisplay = false;

    if (number !== '.') {
      const newValue = parseFloat(displayValue);
      this.values[this.current] = newValue;
    }

    return null;
  }

  addNumberDisplay(number) {
    if (this.display.innerText === '0') {
      this.number1 = number;
      this.display.innerText = this.number1;
    } else if (this.operation === '' && this.number1.length < this.limit) {
      this.number1 += number;
      this.display.innerText = this.number1;
    } else if (this.operation !== '' && this.number2.length < this.limit) {
      this.number2 += number;
      this.display.innerText = this.number2;
    } else {
      this.number1 = number;
      this.display.innerText = this.number1;
    }
  }

  addNumbersEvents() {
    this.numbers.forEach((number) => number.addEventListener('click', this.addDigit));
  }

  addOperationsEvents() {
    this.operations.forEach((op) => op.addEventListener('click', this.setOperarion));
  }

  handleResult() {
    console.log(this.values[0], this.operation, this.values[1]);
    switch (this.operation) {
      case '/':
        this.values[0] /= this.values[1];
        break;
      case '*':
        this.values[0] *= this.values[1];
        break;
      case '-':
        this.values[0] -= this.values[1];
        break;
      default:
        this.values[0] += this.values[1];
        break;
    }
  }

  handleClear({ target }) {

  }

  handleAllClear() {
    this.display.innerText = '0';
    this.operation = null;
    this.clearDisplay = false;
    this.values = [0, 0];
    this.current = 0;
  }

  handlePercentage({ target }) {

  }

  addAuxEvents() {
    // this.btnDivision.addEventListener('click', this.handleDivision);
    // this.btnMultiplication.addEventListener('click', this.handleMultiplication);
    // this.btnSubtraction.addEventListener('click', this.handleSubtraction);
    // this.btnSum.addEventListener('click', this.handleSum);
    // this.btnResult.addEventListener('click', this.handleResult);
    this.btnClear.addEventListener('click', this.handleClear);
    this.btnAllClear.addEventListener('click', this.handleAllClear);
    this.btnPercentage.addEventListener('click', this.handlePercentage);
  }

  bindFunctions() {
    // this.handleDivision = this.handleDivision.bind(this);
    // this.handleMultiplication = this.handleMultiplication.bind(this);
    // this.handleSubtraction = this.handleSubtraction.bind(this);
    // this.handleSum = this.handleSum.bind(this);
    this.handleResult = this.handleResult.bind(this);
    this.handleClear = this.handleClear.bind(this);
    this.handleAllClear = this.handleAllClear.bind(this);
    this.handlePercentage = this.handlePercentage.bind(this);
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

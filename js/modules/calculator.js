export default class Calculator {
  constructor(display, numbers, limit) {
    this.display = document.querySelector(display);
    this.numbers = document.querySelectorAll(numbers);
    this.limit = limit;

    this.display.innerText = 0;
    this.handleClick = this.handleClick.bind(this);
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

  handleClick(event) {
    event.preventDefault();
    this.show(event.target.innerText);
  }

  addNumbersEvents() {
    this.numbers.forEach((number) => number.addEventListener('click', this.handleClick));
  }

  init() {
    this.addNumbersEvents();
  }
}

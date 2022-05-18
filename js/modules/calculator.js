export default class Calculator {
  constructor(display, numbers) {
    this.display = document.querySelector(display);
    this.numbers = document.querySelectorAll(numbers);

    this.display.innerText = 0;
    this.handleClick = this.handleClick.bind(this);
  }

  show(number) {
    switch (number) {
      default:
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

/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/modules/calculator.js":
/*!**************************************!*\
  !*** ./src/js/modules/calculator.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Calculator)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n\n\n\nvar Calculator = /*#__PURE__*/function () {\n  function Calculator(display, numbers, limit) {\n    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, Calculator);\n\n    this.display = document.querySelector(display);\n    this.numbers = document.querySelectorAll(numbers);\n    this.operations = document.querySelectorAll('.calculator__button.operation');\n    this.limit = limit;\n    this.display.innerText = '0';\n    this.operation = null;\n    this.clearDisplay = false;\n    this.values = [0, 0];\n    this.current = 0;\n    this.btnDivision = document.querySelector('#btn-division');\n    this.btnMultiplication = document.querySelector('#btn-multiplication');\n    this.btnSubtraction = document.querySelector('#btn-subtraction');\n    this.btnSum = document.querySelector('#btn-sum');\n    this.btnResult = document.querySelector('#btn-result');\n    this.btnClear = document.querySelector('#btn-clear');\n    this.btnAllClear = document.querySelector('#btn-all-clear');\n    this.btnPercentage = document.querySelector('#btn-percentage');\n    this.bindFunctions();\n  }\n\n  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(Calculator, [{\n    key: \"setOperarion\",\n    value: function setOperarion(op) {\n      var operation = op.target.innerText;\n\n      if (this.current === 0) {\n        this.operation = operation;\n        this.current = 1;\n        this.clearDisplay = true;\n      } else {\n        var equals = operation === '=';\n        this.handleResult(this.operation);\n\n        if (Number.isNaN(this.values[0]) || !Number.isFinite(this.values[0])) {\n          this.clearMemory();\n          return;\n        }\n\n        this.values[1] = 0;\n        this.display.innerText = this.values[0].toString();\n        this.operation = equals ? null : operation;\n        this.current = equals ? 0 : 1;\n        this.clearDisplay = !equals;\n      }\n    }\n  }, {\n    key: \"addDigit\",\n    value: function addDigit(n) {\n      var number = n.target.innerText;\n      var displayValue = this.display.innerText;\n\n      if (number === '.' && this.display.innerText.includes('.')) {\n        return null;\n      }\n\n      var clearDisplay = displayValue === '0' || this.clearDisplay;\n      var currentValue = clearDisplay ? '' : displayValue;\n      displayValue = currentValue + number;\n      this.display.innerText = displayValue;\n      this.clearDisplay = false;\n\n      if (number !== '.') {\n        var newValue = parseFloat(displayValue);\n        this.values[this.current] = newValue;\n      }\n\n      return null;\n    }\n  }, {\n    key: \"addNumberDisplay\",\n    value: function addNumberDisplay(number) {\n      if (this.display.innerText === '0') {\n        this.number1 = number;\n        this.display.innerText = this.number1;\n      } else if (this.operation === '' && this.number1.length < this.limit) {\n        this.number1 += number;\n        this.display.innerText = this.number1;\n      } else if (this.operation !== '' && this.number2.length < this.limit) {\n        this.number2 += number;\n        this.display.innerText = this.number2;\n      } else {\n        this.number1 = number;\n        this.display.innerText = this.number1;\n      }\n    }\n  }, {\n    key: \"addNumbersEvents\",\n    value: function addNumbersEvents() {\n      var _this = this;\n\n      this.numbers.forEach(function (number) {\n        return number.addEventListener('click', _this.addDigit);\n      });\n    }\n  }, {\n    key: \"addOperationsEvents\",\n    value: function addOperationsEvents() {\n      var _this2 = this;\n\n      this.operations.forEach(function (op) {\n        return op.addEventListener('click', _this2.setOperarion);\n      });\n    }\n  }, {\n    key: \"handleResult\",\n    value: function handleResult() {\n      console.log(this.values[0], this.operation, this.values[1]);\n\n      switch (this.operation) {\n        case '/':\n          this.values[0] /= this.values[1];\n          break;\n\n        case '*':\n          this.values[0] *= this.values[1];\n          break;\n\n        case '-':\n          this.values[0] -= this.values[1];\n          break;\n\n        default:\n          this.values[0] += this.values[1];\n          break;\n      }\n    }\n  }, {\n    key: \"handleClear\",\n    value: function handleClear(_ref) {\n      var target = _ref.target;\n    }\n  }, {\n    key: \"handleAllClear\",\n    value: function handleAllClear() {\n      this.display.innerText = '0';\n      this.operation = null;\n      this.clearDisplay = false;\n      this.values = [0, 0];\n      this.current = 0;\n    }\n  }, {\n    key: \"handlePercentage\",\n    value: function handlePercentage(_ref2) {\n      var target = _ref2.target;\n    }\n  }, {\n    key: \"addAuxEvents\",\n    value: function addAuxEvents() {\n      // this.btnDivision.addEventListener('click', this.handleDivision);\n      // this.btnMultiplication.addEventListener('click', this.handleMultiplication);\n      // this.btnSubtraction.addEventListener('click', this.handleSubtraction);\n      // this.btnSum.addEventListener('click', this.handleSum);\n      // this.btnResult.addEventListener('click', this.handleResult);\n      this.btnClear.addEventListener('click', this.handleClear);\n      this.btnAllClear.addEventListener('click', this.handleAllClear);\n      this.btnPercentage.addEventListener('click', this.handlePercentage);\n    }\n  }, {\n    key: \"bindFunctions\",\n    value: function bindFunctions() {\n      // this.handleDivision = this.handleDivision.bind(this);\n      // this.handleMultiplication = this.handleMultiplication.bind(this);\n      // this.handleSubtraction = this.handleSubtraction.bind(this);\n      // this.handleSum = this.handleSum.bind(this);\n      this.handleResult = this.handleResult.bind(this);\n      this.handleClear = this.handleClear.bind(this);\n      this.handleAllClear = this.handleAllClear.bind(this);\n      this.handlePercentage = this.handlePercentage.bind(this);\n      this.setOperarion = this.setOperarion.bind(this);\n      this.addDigit = this.addDigit.bind(this);\n    }\n  }, {\n    key: \"init\",\n    value: function init() {\n      this.addNumbersEvents();\n      this.addOperationsEvents();\n      this.addOperationsEvents();\n      this.addAuxEvents();\n    }\n  }]);\n\n  return Calculator;\n}();\n\n\n\n//# sourceURL=webpack://calculator-app/./src/js/modules/calculator.js?");

/***/ }),

/***/ "./src/js/script.js":
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_calculator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/calculator.js */ \"./src/js/modules/calculator.js\");\n\nvar calculator = new _modules_calculator_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('.calculator__display', '.calculator__button.number', 8);\ncalculator.init();\n\n//# sourceURL=webpack://calculator-app/./src/js/script.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _classCallCheck)\n/* harmony export */ });\nfunction _classCallCheck(instance, Constructor) {\n  if (!(instance instanceof Constructor)) {\n    throw new TypeError(\"Cannot call a class as a function\");\n  }\n}\n\n//# sourceURL=webpack://calculator-app/./node_modules/@babel/runtime/helpers/esm/classCallCheck.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/createClass.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/createClass.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _createClass)\n/* harmony export */ });\nfunction _defineProperties(target, props) {\n  for (var i = 0; i < props.length; i++) {\n    var descriptor = props[i];\n    descriptor.enumerable = descriptor.enumerable || false;\n    descriptor.configurable = true;\n    if (\"value\" in descriptor) descriptor.writable = true;\n    Object.defineProperty(target, descriptor.key, descriptor);\n  }\n}\n\nfunction _createClass(Constructor, protoProps, staticProps) {\n  if (protoProps) _defineProperties(Constructor.prototype, protoProps);\n  if (staticProps) _defineProperties(Constructor, staticProps);\n  Object.defineProperty(Constructor, \"prototype\", {\n    writable: false\n  });\n  return Constructor;\n}\n\n//# sourceURL=webpack://calculator-app/./node_modules/@babel/runtime/helpers/esm/createClass.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/script.js");
/******/ 	
/******/ })()
;
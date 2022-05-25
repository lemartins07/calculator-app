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

/***/ "./js/modules/calculator.js":
/*!**********************************!*\
  !*** ./js/modules/calculator.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Calculator)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n\n\n\nvar Calculator = /*#__PURE__*/function () {\n  function Calculator(display, numbers, limit) {\n    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, Calculator);\n\n    this.display = document.querySelector(display);\n    this.numbers = document.querySelectorAll(numbers);\n    this.limit = limit;\n    this.display.innerText = '0';\n    this.operation = '';\n    this.number1 = '';\n    this.number2 = '';\n    this.ativado = 0;\n    this.btnDivision = document.querySelector('#btn-division');\n    this.btnMultiplication = document.querySelector('#btn-multiplication');\n    this.btnSubtraction = document.querySelector('#btn-subtraction');\n    this.btnSum = document.querySelector('#btn-sum');\n    this.btnResult = document.querySelector('#btn-result');\n    this.btnClear = document.querySelector('#btn-clear');\n    this.btnAllClear = document.querySelector('#btn-all-clear');\n    this.btnPercentage = document.querySelector('#btn-percentage');\n    this.bindFunctions();\n  }\n\n  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(Calculator, [{\n    key: \"addNumberDisplay\",\n    value: function addNumberDisplay(number) {\n      if (this.display.innerText === '0') {\n        this.number1 = number;\n        this.display.innerText = this.number1;\n      } else if (this.operation === '' && this.number1.length < this.limit) {\n        this.number1 += number;\n        this.display.innerText = this.number1;\n      } else if (this.operation !== '' && this.number2.length < this.limit) {\n        this.number2 += number;\n        this.display.innerText = this.number2;\n      } else {\n        this.number1 = number;\n        this.display.innerText = this.number1;\n      }\n    }\n  }, {\n    key: \"handleNumberClick\",\n    value: function handleNumberClick(event) {\n      event.preventDefault();\n      this.addNumberDisplay(event.target.innerText);\n    }\n  }, {\n    key: \"addNumbersEvents\",\n    value: function addNumbersEvents() {\n      var _this = this;\n\n      this.numbers.forEach(function (number) {\n        return number.addEventListener('click', _this.handleNumberClick);\n      });\n    }\n  }, {\n    key: \"addNumbersMousedownEvents\",\n    value: function addNumbersMousedownEvents() {\n      var _this2 = this;\n\n      this.numbers.forEach(function (number) {\n        return number.addEventListener('mousedown', _this2.handleMousedown);\n      });\n    }\n  }, {\n    key: \"addNumbersMouseupEvents\",\n    value: function addNumbersMouseupEvents() {\n      var _this3 = this;\n\n      this.numbers.forEach(function (number) {\n        return number.addEventListener('mouseup', _this3.handleMouseup);\n      });\n    }\n  }, {\n    key: \"handleDivision\",\n    value: function handleDivision() {\n      if (this.operation === '') {\n        this.operation = '/';\n      } else {\n        var result = Number(this.number1) / Number(this.number2);\n        this.handleAllClear();\n        this.addNumberDisplay(result);\n      }\n    }\n  }, {\n    key: \"handleMultiplication\",\n    value: function handleMultiplication() {\n      if (this.operation === '') {\n        this.operation = '*';\n      } else {\n        var result = Number(this.number1) * Number(this.number2);\n        this.handleAllClear();\n        this.addNumberDisplay(result);\n      }\n    }\n  }, {\n    key: \"handleSubtraction\",\n    value: function handleSubtraction() {\n      if (this.operation === '') {\n        this.operation = '-';\n      } else {\n        var result = Number(this.number1) - Number(this.number2);\n        this.handleAllClear();\n        this.addNumberDisplay(result);\n      }\n    }\n  }, {\n    key: \"handleSum\",\n    value: function handleSum() {\n      if (this.operation === '') {\n        this.operation = '+';\n      } else {\n        var result = Number(this.number1) + Number(this.number2);\n        this.handleAllClear();\n        this.addNumberDisplay(result);\n      }\n    }\n  }, {\n    key: \"handleResult\",\n    value: function handleResult() {\n      console.log(this.number1, this.operation, this.number2);\n\n      switch (this.operation) {\n        case '-':\n          this.handleSubtraction();\n          break;\n\n        case '*':\n          this.handleMultiplication();\n          break;\n\n        case '/':\n          this.handleDivision();\n          break;\n\n        default:\n          this.handleSum();\n          break;\n      }\n    }\n  }, {\n    key: \"handleClear\",\n    value: function handleClear(_ref) {\n      var target = _ref.target;\n    }\n  }, {\n    key: \"handleAllClear\",\n    value: function handleAllClear() {\n      this.display.innerText = '0';\n      this.operation = '';\n      this.number1 = '';\n      this.number2 = '';\n      this.ativado = 0;\n    }\n  }, {\n    key: \"handlePercentage\",\n    value: function handlePercentage(_ref2) {\n      var target = _ref2.target;\n    }\n  }, {\n    key: \"handleMousedown\",\n    value: function handleMousedown(_ref3) {\n      var target = _ref3.target;\n      target.classList.add('brightness');\n    }\n  }, {\n    key: \"handleMouseup\",\n    value: function handleMouseup(_ref4) {\n      var target = _ref4.target;\n      target.classList.remove('brightness');\n    }\n  }, {\n    key: \"addOperationsEvents\",\n    value: function addOperationsEvents() {\n      this.btnDivision.addEventListener('click', this.handleDivision);\n      this.btnMultiplication.addEventListener('click', this.handleMultiplication);\n      this.btnSubtraction.addEventListener('click', this.handleSubtraction);\n      this.btnSum.addEventListener('click', this.handleSum);\n      this.btnResult.addEventListener('click', this.handleResult);\n      this.btnClear.addEventListener('click', this.handleClear);\n      this.btnAllClear.addEventListener('click', this.handleAllClear);\n      this.btnPercentage.addEventListener('click', this.handlePercentage);\n    }\n  }, {\n    key: \"addMousedownEvent\",\n    value: function addMousedownEvent() {\n      this.btnDivision.addEventListener('mousedown', this.handleMousedown);\n      this.btnMultiplication.addEventListener('mousedown', this.handleMousedown);\n      this.btnSubtraction.addEventListener('mousedown', this.handleMousedown);\n      this.btnSum.addEventListener('mousedown', this.handleMousedown);\n      this.btnResult.addEventListener('mousedown', this.handleMousedown);\n      this.btnClear.addEventListener('mousedown', this.handleMousedown);\n      this.btnAllClear.addEventListener('mousedown', this.handleMousedown);\n      this.btnPercentage.addEventListener('mousedown', this.handleMousedown);\n    }\n  }, {\n    key: \"addMouseupEvent\",\n    value: function addMouseupEvent() {\n      this.btnDivision.addEventListener('mouseup', this.handleMouseup);\n      this.btnMultiplication.addEventListener('mouseup', this.handleMouseup);\n      this.btnSubtraction.addEventListener('mouseup', this.handleMouseup);\n      this.btnSum.addEventListener('mouseup', this.handleMouseup);\n      this.btnResult.addEventListener('mouseup', this.handleMouseup);\n      this.btnClear.addEventListener('mouseup', this.handleMouseup);\n      this.btnAllClear.addEventListener('mouseup', this.handleMouseup);\n      this.btnPercentage.addEventListener('mouseup', this.handleMouseup);\n    }\n  }, {\n    key: \"bindFunctions\",\n    value: function bindFunctions() {\n      this.handleDivision = this.handleDivision.bind(this);\n      this.handleMultiplication = this.handleMultiplication.bind(this);\n      this.handleSubtraction = this.handleSubtraction.bind(this);\n      this.handleSum = this.handleSum.bind(this);\n      this.handleResult = this.handleResult.bind(this);\n      this.handleClear = this.handleClear.bind(this);\n      this.handleAllClear = this.handleAllClear.bind(this);\n      this.handlePercentage = this.handlePercentage.bind(this);\n      this.handleNumberClick = this.handleNumberClick.bind(this);\n    }\n  }, {\n    key: \"init\",\n    value: function init() {\n      this.addNumbersEvents();\n      this.addNumbersMousedownEvents();\n      this.addNumbersMouseupEvents();\n      this.addOperationsEvents();\n      this.addMousedownEvent();\n      this.addMouseupEvent();\n    }\n  }]);\n\n  return Calculator;\n}();\n\n\n\n//# sourceURL=webpack://calculator-app/./js/modules/calculator.js?");

/***/ }),

/***/ "./js/script.js":
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_calculator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/calculator.js */ \"./js/modules/calculator.js\");\n\nvar calculator = new _modules_calculator_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('.calculator-display', '.btn-number', 8);\ncalculator.init();\n\n//# sourceURL=webpack://calculator-app/./js/script.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./js/script.js");
/******/ 	
/******/ })()
;
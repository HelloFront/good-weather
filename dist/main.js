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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_eventBtn__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/eventBtn */ \"./src/modules/eventBtn.js\");\n/* harmony import */ var _modules_renderWeather__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/renderWeather */ \"./src/modules/renderWeather.js\");\n/* harmony import */ var _modules_search__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/search */ \"./src/modules/search.js\");\n\n\n\n\n(0,_modules_renderWeather__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()\n;(0,_modules_eventBtn__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()\n;(0,_modules_search__WEBPACK_IMPORTED_MODULE_2__[\"default\"])()\n\n//# sourceURL=webpack://good-weather/./src/index.js?");

/***/ }),

/***/ "./src/modules/eventBtn.js":
/*!*********************************!*\
  !*** ./src/modules/eventBtn.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _getData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getData */ \"./src/modules/getData.js\");\n/* harmony import */ var _renderWeather__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderWeather */ \"./src/modules/renderWeather.js\");\n\n\n\nconst eventBtn = () => {\n    const allBtns = document.querySelectorAll('.btns button');\n\n    allBtns.forEach(item => item.addEventListener('click', (e) => {\n        let sity = e.target.innerText\n        ;(0,_getData__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(sity).then(json => {\n            ;(0,_renderWeather__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(json)\n        })\n    }))\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (eventBtn);\n\n//# sourceURL=webpack://good-weather/./src/modules/eventBtn.js?");

/***/ }),

/***/ "./src/modules/getData.js":
/*!********************************!*\
  !*** ./src/modules/getData.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst getData = (sity) => {\n    if(!sity) sity = 'Sarny'\n    \n    return fetch(`https://api.openweathermap.org/data/2.5/weather?q=${sity}&appid=8f2d10659d69f6a82084691de1384df0`)\n        .then(res => {\n            if(res.ok) {\n                return res.json()\n            } else return Promise.reject(res.status)\n        })\n        .catch((e) => alert('Вы ввели неизвестный город \\n' + 'Код ошибки : ' + e))\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getData);\n\n//# sourceURL=webpack://good-weather/./src/modules/getData.js?");

/***/ }),

/***/ "./src/modules/renderWeather.js":
/*!**************************************!*\
  !*** ./src/modules/renderWeather.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _getData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getData */ \"./src/modules/getData.js\");\n\n\nconst renderWeather = (obj) => {\n    if(!obj) {\n        (0,_getData__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().then(data => render(data))\n    } else render(obj)\n\n    function render (obj) {\n        const day = new Date();\n        const days = [\"Sunday\", \"Monday\", \"Tuesday\", \"Wednesday\", \"Thursday\", \"Friday\", \"Saturday\"];\n        const mainBlock = document.querySelector('main');\n\n        mainBlock.innerHTML = ''\n        mainBlock.insertAdjacentHTML('beforeend', `\n        <div class=\"main-top-block\">\n        <div class=\"top-left-block item\">\n            <p class=\"out-location\">${obj.name} ${obj.sys.country}</p>\n            <hr>\n            <div class=\"top-left-bottom-block\">\n                <div class=\"left-side\">\n                    <img class=\"weather-img\" src=\"img/${obj.weather[0].icon}.svg\" alt=\"weather\">\n                    <span class=\"out-wind\">Speed: ${(obj.wind.speed).toFixed(1)} m/s</span>\n                </div>\n                <div class=\"right-side\">\n                    <p class=\"out-date\">${days[day.getDay()]}</p>\n                    <p class=\"out-description\">${obj.weather[0].main}</p>\n                    <p class=\"out-deg-temp\">${(obj.main.temp - 273.15).toFixed(1)}&deg;C</p>\n                    <p class=\"out-fareng-temp\">${((obj.main.temp - 273.15) * 9/5 + 32).toFixed(1)}&deg;F</p>\n                </div>\n            </div>\n        </div>\n        <div class=\"top-right-block item\">\n            <p class=\"out-location\">Details</p>\n            <hr>\n            <div class=\"right-inner-block\">\n                <div class=\"left-side\">\n                    <p>Wind speed . . . </p>\n                    <p>Temperature . . .  </p>\n                    <p>Feels like . . . </p>\n                    <p>Clouds . . . </p>\n                    <p>Pressure . . . </p>\n                </div>\n                <div class=\"right-side\">\n                    <p class=\"out-wind-speed\">${obj.wind.speed} km/h</p>\n                    <p class=\"out-temperature\">${(obj.main.temp - 273.15).toFixed(1)}&deg;C</p>\n                    <p class=\"out-feels-like\">${(obj.main.feels_like - 273.15).toFixed(1)}&deg;C</p>\n                    <p class=\"out-clouds-cover\">${obj.clouds.all}%</p>\n                    <p class=\"out-pressure\">${(obj.main.pressure/1.333).toFixed()}mm</p>\n                </div>\n            </div>\n        </div>\n    </div>`)\n    }   \n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderWeather);\n\n\n\n\n//# sourceURL=webpack://good-weather/./src/modules/renderWeather.js?");

/***/ }),

/***/ "./src/modules/search.js":
/*!*******************************!*\
  !*** ./src/modules/search.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _getData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getData */ \"./src/modules/getData.js\");\n/* harmony import */ var _renderWeather__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderWeather */ \"./src/modules/renderWeather.js\");\n\n\n\nconst search = () => {\n    const input = document.querySelector('.search-block input');\n    const btn = document.querySelector('.accept');\n\n    document.body.addEventListener('keydown', (e) => {\n        if(input.value && e.key === 'Enter') {\n            let value = input.value;\n            input.value = '';\n            (0,_getData__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(value).then(json => (0,_renderWeather__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(json))\n        }\n    })\n\n    btn.addEventListener('click', () => {\n        let value = input.value;\n        input.value = '';\n\n        if(value) (0,_getData__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(value).then(json => (0,_renderWeather__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(json))\n    })\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (search);\n\n//# sourceURL=webpack://good-weather/./src/modules/search.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
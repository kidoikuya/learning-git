/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./greeting-cjs.cjs":
/*!**************************!*\
  !*** ./greeting-cjs.cjs ***!
  \**************************/
/***/ ((module) => {

eval("function hello(name){\r\n    console.log(`こんにちは、${name}さん。`);\r\n  }\r\n  function goodMorning(name){\r\n    console.log(`おはよう、${name}さん。`);\r\n  }  \r\n  function goodEvening(name){\r\n    console.log(`こんばんは、${name}さん。`);\r\n  }  \r\n  function goodNight(name){\r\n    console.log(`おやすみなさい、${name}さん。`);\r\n  }\r\n  // ▼ moduleオブジェクトを利用したデータのエクスポート\r\n  module.exports.hello = hello;\r\n  module.exports.goodMorning = goodMorning;\r\n  module.exports.goodEvening = goodEvening;\r\n  module.exports.goodNight = goodNight;\n\n//# sourceURL=webpack://javascript/./greeting-cjs.cjs?");

/***/ }),

/***/ "./main-cjs.cjs":
/*!**********************!*\
  !*** ./main-cjs.cjs ***!
  \**********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("// ▼ require関数の戻り値はモジュール内のmodule.exportsオブジェクト\r\nconst greeting = __webpack_require__(/*! ./greeting-cjs.cjs */ \"./greeting-cjs.cjs\");\r\nconst name = \"田中\";\r\ngreeting.hello(name);\r\ngreeting.goodMorning(name);\r\ngreeting.goodEvening(name);\r\ngreeting.goodNight(name);\r\n\r\n// ▼ オブジェクトの分割代入を利用して次のように記述することもできる\r\n/*\r\nconst {\r\n  hello: h,\r\n  goodMorning: gm,\r\n  goodEvening: ge,\r\n  goodNight: gn\r\n} = require(\"./greeting-cjs.cjs\");\r\nconst name = \"田中\";\r\nh(name);\r\ngm(name);\r\nge(name);\r\ngn(name);\r\n*/\n\n//# sourceURL=webpack://javascript/./main-cjs.cjs?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./main-cjs.cjs");
/******/ 	
/******/ })()
;

import {format} from "date-fns";

console.log( format(new Date(), "yyyy年MM月dd日") );
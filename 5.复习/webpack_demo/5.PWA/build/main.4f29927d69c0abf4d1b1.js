(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/index.less":
/*!************************!*\
  !*** ./src/index.less ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./src/index.less?");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/index */ \"./src/index.less\");\n\r\n\r\nconsole.log('main',1234);\r\n\r\n__webpack_require__.e(/*! import() | lodash */ \"lodash\").then(__webpack_require__.bind(null, /*! @/lodash.js */ \"./src/lodash.js\")).then(({add})=>{\r\n    add(1,2)\r\n})\r\n\r\n if ('serviceWorker' in navigator) {\r\n       window.addEventListener('load', () => {\r\n         navigator.serviceWorker.register('./service-worker.js').then(registration => {\r\n           console.log('SW registered: ', registration);\r\n         }).catch(registrationError => {\r\n           console.log('SW registration failed: ', registrationError);\r\n         });\r\n       });\r\n}\r\n//如果是当前开发环境需要写相对路径,如果是生产环境,将路径写为绝对路径\n\n//# sourceURL=webpack:///./src/main.js?");

/***/ })

},[["./src/main.js","runtime~main"]]]);
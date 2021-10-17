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

/***/ "./sources/js/index.js":
/*!*****************************!*\
  !*** ./sources/js/index.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\nvar menu_module = __webpack_require__(/*! website-menu */ \"./sources/js/modules/website-menu/index.js\");\n\ndocument.addEventListener('DOMContentLoaded', function () {\n  menu_module('.website-menu-wrapper');\n});\n\n//# sourceURL=webpack://css-nesting/./sources/js/index.js?");

/***/ }),

/***/ "./sources/js/modules/website-menu/index.js":
/*!**************************************************!*\
  !*** ./sources/js/modules/website-menu/index.js ***!
  \**************************************************/
/***/ ((module) => {

eval("\n\nvar is_open_class = 'menu-is-open';\n\nvar remove_is_open_class = function remove_is_open_class(element) {\n  return element.classList.remove(is_open_class);\n};\n\nvar add_is_open_class = function add_is_open_class(element) {\n  return element.classList.add(is_open_class);\n};\n\nvar has_is_open_class = function has_is_open_class(element) {\n  return element.classList.contains(is_open_class);\n};\n\nvar toggle_menu_trigger = function toggle_menu_trigger(trigger_element, menu_element) {\n  if (has_is_open_class(trigger_element)) {\n    remove_is_open_class(trigger_element);\n    remove_is_open_class(menu_element);\n  } else {\n    add_is_open_class(trigger_element);\n    add_is_open_class(menu_element);\n  }\n};\n\nvar menu = function menu(menu_selector) {\n  var menu_object = document.querySelector(menu_selector);\n  var trigger_object = menu_object.querySelector('.menu-trigger');\n  remove_is_open_class(trigger_object);\n  remove_is_open_class(menu_object);\n  trigger_object.addEventListener('click', function (event) {\n    event.preventDefault();\n    toggle_menu_trigger(trigger_object, menu_object);\n  });\n};\n\nmodule.exports = menu;\n\n//# sourceURL=webpack://css-nesting/./sources/js/modules/website-menu/index.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./sources/js/index.js");
/******/ 	
/******/ })()
;
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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _mainpage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mainpage.js */ \"./src/mainpage.js\");\n/* harmony import */ var _menupage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menupage.js */ \"./src/menupage.js\");\n\n\n\n// menu();\n\n(0,_mainpage_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\n//# sourceURL=webpack://webpackresturauntpage/./src/index.js?");

/***/ }),

/***/ "./src/mainpage.js":
/*!*************************!*\
  !*** ./src/mainpage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _ramenicon_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ramenicon.png */ \"./src/ramenicon.png\");\n/* harmony import */ var _ramen_guy_webp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ramen_guy.webp */ \"./src/ramen_guy.webp\");\n/* harmony import */ var _naruto_webp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./naruto.webp */ \"./src/naruto.webp\");\n\n\n\nfunction _createNav() {\n  const navBar = document.createElement(\"div\");\n  navBar.classList.add(\"navbar\");\n  const subDiv = document.createElement(\"div\");\n  const homeDiv = document.createElement(\"div\");\n  const menuDiv = document.createElement(\"div\");\n  const contactDiv = document.createElement(\"div\");\n\n  const myIcon = new Image();\n  myIcon.src = _ramenicon_png__WEBPACK_IMPORTED_MODULE_0__;\n\n  homeDiv.classList.add(\"current-page\");\n  homeDiv.textContent = \"Home\";\n  menuDiv.textContent = \"Menu\";\n  contactDiv.textContent = \"Contact\";\n  subDiv.appendChild(homeDiv);\n  subDiv.appendChild(menuDiv);\n  subDiv.appendChild(contactDiv);\n\n  navBar.appendChild(myIcon);\n  navBar.appendChild(subDiv);\n\n  return navBar;\n}\n\nfunction _createLeftBar() {\n  const left = document.createElement(\"div\");\n  left.classList.add(\"left-bar\");\n\n  const hours = document.createElement(\"div\");\n  const mf = document.createElement(\"div\");\n  const sat = document.createElement(\"div\");\n  const sun = document.createElement(\"div\");\n  hours.textContent = \"Hours of Operation\";\n  mf.textContent = \"Monday - Friday : 9:00am - 9:00pm\";\n  sat.textContent = \"Saturday : 8:00am - 11:00pm\";\n  sun.textContent = \"Sunday : Closed\";\n\n  left.appendChild(hours);\n  left.appendChild(mf);\n  left.appendChild(sat);\n  left.appendChild(sun);\n\n  const coty = document.createElement(\"div\");\n  const customer = document.createElement(\"div\");\n  customer.textContent = \"Customer of The Year\";\n\n  const myIcon = new Image();\n  myIcon.src = _naruto_webp__WEBPACK_IMPORTED_MODULE_2__;\n\n  const quote = document.createElement(\"div\");\n  quote.classList.add(\"quote\");\n  quote.innerHTML =\n    \"I love the Ramen here. As Hokage, I'm often really busy, so having a place like this to relax is the best! <span>-- Naruto Uzumaki, Hokage of Konoha</span>\";\n\n  coty.appendChild(customer);\n  coty.appendChild(myIcon);\n  coty.appendChild(quote);\n\n  left.appendChild(coty);\n\n  return left;\n}\n\nfunction _createRightBar() {\n  const right = document.createElement(\"div\");\n  right.classList.add(\"right-bar\");\n  const header = document.createElement(\"h1\");\n  header.textContent = \"Ichiraku Ramen\";\n  const quote = document.createElement(\"div\");\n  quote.classList.add(\"quote\");\n  quote.innerHTML =\n    \"Top Quality Ramen, Guranteed Fresh, All The Time! <span>-- The Ramen Guy</span>\";\n\n  const myIcon = new Image();\n  myIcon.src = _ramen_guy_webp__WEBPACK_IMPORTED_MODULE_1__;\n\n  right.appendChild(header);\n  right.appendChild(quote);\n  right.appendChild(myIcon);\n\n  return right;\n}\n\nfunction _createBody() {\n  const body = document.createElement(\"div\");\n  body.classList.add(\"body\");\n\n  const leftBar = _createLeftBar();\n  const rightBar = _createRightBar();\n\n  body.appendChild(leftBar);\n  body.appendChild(rightBar);\n  return body;\n}\n\nlet createHomePage = () => {\n  const navBar = _createNav();\n  const body = _createBody();\n  const content = document.getElementById(\"content\");\n  content.appendChild(navBar);\n  content.appendChild(body);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createHomePage);\n\n\n//# sourceURL=webpack://webpackresturauntpage/./src/mainpage.js?");

/***/ }),

/***/ "./src/menupage.js":
/*!*************************!*\
  !*** ./src/menupage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _ramenicon_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ramenicon.png */ \"./src/ramenicon.png\");\n\nfunction _createNav() {\n  const navBar = document.createElement(\"div\");\n  navBar.classList.add(\"navbar\");\n  const subDiv = document.createElement(\"div\");\n  const homeDiv = document.createElement(\"div\");\n  const menuDiv = document.createElement(\"div\");\n  const contactDiv = document.createElement(\"div\");\n\n  const myIcon = new Image();\n  myIcon.src = _ramenicon_png__WEBPACK_IMPORTED_MODULE_0__;\n\n  menuDiv.classList.add(\"current-page\");\n  homeDiv.textContent = \"Home\";\n  menuDiv.textContent = \"Menu\";\n  contactDiv.textContent = \"Contact\";\n  subDiv.appendChild(homeDiv);\n  subDiv.appendChild(menuDiv);\n  subDiv.appendChild(contactDiv);\n\n  navBar.appendChild(myIcon);\n  navBar.appendChild(subDiv);\n\n  return navBar;\n}\nfunction _createMenu() {\n  const body = document.createElement(\"div\");\n  body.classList.add(\"menu-body\");\n\n  const emptyDiv1 = document.createElement(\"div\");\n  const emptyDiv2 = document.createElement(\"div\");\n  const menuItems = document.createElement(\"div\");\n  menuItems.classList.add(\"menu-items\");\n\n  // SubMenuItems\n  const miso = document.createElement(\"div\");\n  const tonk = document.createElement(\"div\");\n  const shio = document.createElement(\"div\");\n  const sap = document.createElement(\"div\");\n  const ramy = document.createElement(\"div\");\n\n  miso.innerHTML =\n    \"Miso Ramen : $9.99 <br><span>A Delicious Ramen Soaked In Miso Broth, Comes with choice of egg</span>\";\n  tonk.innerHTML =\n    \"Tonkotsu Ramen : $11.99 <br><span>Creamy ramen, soaked in a thick Tonkotsu brot, Comes with choice of egg</span>\";\n  shio.innerHTML =\n    \"Shio Ramen : $9.99 <br><span>Salt Ramen, flavored with delicious seafood, Comes with choice of egg</span>\";\n  sap.innerHTML =\n    \"Sapporo Ramen : $10.99 <br><span>Delicious buttery and rich ramen, with choice or pork or chicken, Comes with choice of egg</span>\";\n  ramy.innerHTML =\n    \"Ramyeon Ramen : $10.99 <br><span>Delicious spicy ramen, with kimchi and/or gochujang, Comes with choice of egg</span>\";\n\n  menuItems.appendChild(miso);\n  menuItems.appendChild(tonk);\n  menuItems.appendChild(shio);\n  menuItems.appendChild(sap);\n  menuItems.appendChild(ramy);\n\n  body.appendChild(emptyDiv1);\n  body.appendChild(menuItems);\n  body.appendChild(emptyDiv2);\n  return body;\n}\n\nlet createMenuPage = () => {\n  const nav = _createNav();\n  const menu = _createMenu();\n  const content = document.getElementById(\"content\")\n  content.appendChild(nav);\n  content.appendChild(menu);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createMenuPage);\n\n\n//# sourceURL=webpack://webpackresturauntpage/./src/menupage.js?");

/***/ }),

/***/ "./src/naruto.webp":
/*!*************************!*\
  !*** ./src/naruto.webp ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"8f0b2409dffe252a2f1e.webp\";\n\n//# sourceURL=webpack://webpackresturauntpage/./src/naruto.webp?");

/***/ }),

/***/ "./src/ramen_guy.webp":
/*!****************************!*\
  !*** ./src/ramen_guy.webp ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"c1b634a885e8610f167b.webp\";\n\n//# sourceURL=webpack://webpackresturauntpage/./src/ramen_guy.webp?");

/***/ }),

/***/ "./src/ramenicon.png":
/*!***************************!*\
  !*** ./src/ramenicon.png ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"376790587ef8e4b2f93b.png\";\n\n//# sourceURL=webpack://webpackresturauntpage/./src/ramenicon.png?");

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
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
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

/***/ "./src/contactPage.js":
/*!****************************!*\
  !*** ./src/contactPage.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _mainPage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mainPage.js */ \"./src/mainPage.js\");\n\n\nconst contactPage = () => {\n  const content = document.querySelector('#content');\n\n  const centerDiv = document.createElement('div');\n  centerDiv.classList.add('center-contact');\n\n  const contactInfo = document.createElement('p');\n  contactInfo.textContent = 'Contact Us';\n  const phoneInfo = document.createElement('p');\n  phoneInfo.textContent = '012-345-6789';\n  const emailInfo = document.createElement('p');\n  emailInfo.textContent = 'fakeemail@fakeemail.com';\n\n  centerDiv.appendChild(contactInfo);\n  centerDiv.appendChild(phoneInfo);\n  centerDiv.appendChild(emailInfo);\n\n  content.appendChild(centerDiv);\n  content.appendChild((0,_mainPage_js__WEBPACK_IMPORTED_MODULE_0__.createFooter)());\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (contactPage);\n\n\n//# sourceURL=webpack://restaurant-page/./src/contactPage.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _mainPage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mainPage.js */ \"./src/mainPage.js\");\n/* harmony import */ var _menuPage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menuPage.js */ \"./src/menuPage.js\");\n/* harmony import */ var _contactPage_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contactPage.js */ \"./src/contactPage.js\");\n\n\n\n\n(function() {\n  // if i don't create the header outside of the page modules, a new header\n  // will be created every time a page is loaded, thereby my event listeners\n  // won't work. this fixes it\n  const content = document.querySelector('#content');\n  content.appendChild((0,_mainPage_js__WEBPACK_IMPORTED_MODULE_0__.createHeader)());\n\n  // call mainPage here to make sure it's the first thing that renders\n  (0,_mainPage_js__WEBPACK_IMPORTED_MODULE_0__.mainPage)();\n\n  // remove everything from content div EXCEPT the header, to make sure I keep\n  // the same header through every page\n  const clearContent = () => {\n    const content = document.querySelector('#content');\n    while (content.children[1]) {\n      content.removeChild(content.children[1]);\n    };\n  };\n\n  const removeActive = () => {\n    tabs.forEach((tab) => tab.classList.remove('active'));\n  };\n\n  // removeActive function removes the underline border for tabs, then I set\n  // the click target's class to the underline border class\n  const tabs = document.querySelectorAll('.tab');\n  tabs.forEach((tab) => {\n    tab.addEventListener('click', (e) => {\n      removeActive();\n      clearContent();\n      e.target.classList.add('active');\n      if (e.target.id === 'menu') {\n        (0,_menuPage_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n      } else if (e.target.id === 'contact') {\n        (0,_contactPage_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n      } else if (e.target.id === 'home') {\n        (0,_mainPage_js__WEBPACK_IMPORTED_MODULE_0__.mainPage)();\n      };\n    });\n  });\n})();\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/mainPage.js":
/*!*************************!*\
  !*** ./src/mainPage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"mainPage\": () => (/* binding */ mainPage),\n/* harmony export */   \"createHeader\": () => (/* binding */ createHeader),\n/* harmony export */   \"createFooter\": () => (/* binding */ createFooter)\n/* harmony export */ });\n/* harmony import */ var _images_github_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/github.svg */ \"./src/images/github.svg\");\n\n\nconst createTabs = () => {\n  const tabs = document.createElement('div');\n  tabs.classList.add('tabs');\n\n  const homeTab = document.createElement('div');\n  const menuTab = document.createElement('div');\n  const contactTab = document.createElement('div');\n\n  homeTab.textContent = 'Home';\n  homeTab.classList.add('tab');\n  homeTab.setAttribute('id', 'home');\n  homeTab.classList.add('active');\n\n  menuTab.textContent = 'Menu';\n  menuTab.classList.add('tab');\n  menuTab.setAttribute('id', 'menu');\n\n  contactTab.textContent = 'Contact Us';\n  contactTab.classList.add('tab');\n  contactTab.setAttribute('id', 'contact');\n\n  tabs.appendChild(homeTab);\n  tabs.appendChild(menuTab);\n  tabs.appendChild(contactTab);\n\n  return tabs;\n};\n\nconst createHeader = () => {\n  const header = document.createElement('header');\n\n  header.textContent = 'La Abuelita';\n\n  header.appendChild(createTabs());\n\n  return header;\n};\n\nconst createCenterDiv = () => {\n  const center = document.createElement('div');\n  center.classList.add('center');\n\n  const para1 = document.createElement('p');\n  const para2 = document.createElement('p');\n\n  para1.textContent = 'An authentic mexican taste';\n  para2.textContent = 'est. 1958';\n\n  center.appendChild(para1);\n  center.appendChild(para2);\n\n  return center;\n};\n\nconst createFooter = () => {\n  const footer = document.createElement('footer');\n\n  const para = document.createElement('p');\n  para.textContent = 'Created by '\n\n  const link = document.createElement('a');\n  link.textContent = 'gcerv93';\n  link.href = 'https://github.com/gcerv93';\n  link.target = '_blank';\n\n  const myIcon = new Image();\n  myIcon.src = _images_github_svg__WEBPACK_IMPORTED_MODULE_0__;\n\n  para.appendChild(link);\n  footer.appendChild(para);\n  footer.appendChild(myIcon);\n\n  return footer;\n};\n\nfunction mainPage() {\n  const content = document.querySelector('#content');\n\n  const center = createCenterDiv();\n  const footer = createFooter();\n\n  content.appendChild(center);\n  content.appendChild(footer);\n\n  return content;\n};\n\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/mainPage.js?");

/***/ }),

/***/ "./src/menuPage.js":
/*!*************************!*\
  !*** ./src/menuPage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _mainPage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mainPage.js */ \"./src/mainPage.js\");\n/* harmony import */ var _images_pozole_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/pozole.jpg */ \"./src/images/pozole.jpg\");\n/* harmony import */ var _images_tacos_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/tacos.jpg */ \"./src/images/tacos.jpg\");\n/* harmony import */ var _images_torta_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/torta.jpg */ \"./src/images/torta.jpg\");\n/* harmony import */ var _images_quesadillas_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/quesadillas.jpg */ \"./src/images/quesadillas.jpg\");\n\n\n\n\n\n\nconst createMenuItem = (imageSrc, desc, price) => {\n  const menuItem = document.createElement('div');\n  menuItem.classList.add('menu-item');\n\n  const image = new Image();\n  image.src = imageSrc;\n\n  const info = document.createElement('p');\n  const description = document.createElement('p');\n  description.textContent = desc;\n  info.textContent = price;\n\n  menuItem.appendChild(image);\n  menuItem.appendChild(description);\n  menuItem.appendChild(info);\n\n  return menuItem;\n};\n\nconst menuPage = () => {\n  const content = document.querySelector('#content');\n\n  const centerDiv = document.createElement('div');\n  centerDiv.classList.add('menu');\n\n  const torta = createMenuItem(_images_torta_jpg__WEBPACK_IMPORTED_MODULE_3__, 'Torta', '9.89');\n  const pozole = createMenuItem(_images_pozole_jpg__WEBPACK_IMPORTED_MODULE_1__, 'Pozole', '10.89');\n  const tacos = createMenuItem(_images_tacos_jpg__WEBPACK_IMPORTED_MODULE_2__, 'Tacos', '8.89');\n  const quesadilla = createMenuItem(_images_quesadillas_jpg__WEBPACK_IMPORTED_MODULE_4__, 'Quesadillas', '10.89');\n\n  centerDiv.appendChild(torta);\n  centerDiv.appendChild(pozole);\n  centerDiv.appendChild(tacos);\n  centerDiv.appendChild(quesadilla);\n\n  content.appendChild(centerDiv);\n  \n  content.appendChild((0,_mainPage_js__WEBPACK_IMPORTED_MODULE_0__.createFooter)());\n\n  return content;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menuPage);\n\n\n//# sourceURL=webpack://restaurant-page/./src/menuPage.js?");

/***/ }),

/***/ "./src/images/github.svg":
/*!*******************************!*\
  !*** ./src/images/github.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"51c37853e29bc8161e48.svg\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/github.svg?");

/***/ }),

/***/ "./src/images/pozole.jpg":
/*!*******************************!*\
  !*** ./src/images/pozole.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"088526bb7d7f2ce7ee01.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/pozole.jpg?");

/***/ }),

/***/ "./src/images/quesadillas.jpg":
/*!************************************!*\
  !*** ./src/images/quesadillas.jpg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"3409330ef3a8890b4386.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/quesadillas.jpg?");

/***/ }),

/***/ "./src/images/tacos.jpg":
/*!******************************!*\
  !*** ./src/images/tacos.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"7c4ab84d9032d41f1ca6.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/tacos.jpg?");

/***/ }),

/***/ "./src/images/torta.jpg":
/*!******************************!*\
  !*** ./src/images/torta.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"84f171da0bea26729aa1.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/torta.jpg?");

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
/******/ 				scriptUrl = document.currentScript.src
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
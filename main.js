/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contactPage.js":
/*!****************************!*\
  !*** ./src/contactPage.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _mainPage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mainPage.js */ "./src/mainPage.js");


const contactPage = () => {
  const content = document.querySelector('#content');

  content.appendChild((0,_mainPage_js__WEBPACK_IMPORTED_MODULE_0__.createHeader)());
  document.querySelector('#contact').classList.add('active');

  const centerDiv = document.createElement('div');
  centerDiv.classList.add('center-contact');

  const contactInfo = document.createElement('p');
  contactInfo.textContent = 'Contact Us';
  const phoneInfo = document.createElement('p');
  phoneInfo.textContent = '012-345-6789';
  const emailInfo = document.createElement('p');
  emailInfo.textContent = 'fakeemail@fakeemail.com';

  centerDiv.appendChild(contactInfo);
  centerDiv.appendChild(phoneInfo);
  centerDiv.appendChild(emailInfo);

  content.appendChild(centerDiv);
  content.appendChild((0,_mainPage_js__WEBPACK_IMPORTED_MODULE_0__.createFooter)());
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (contactPage);


/***/ }),

/***/ "./src/mainPage.js":
/*!*************************!*\
  !*** ./src/mainPage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "mainPage": () => (/* binding */ mainPage),
/* harmony export */   "createHeader": () => (/* binding */ createHeader),
/* harmony export */   "createFooter": () => (/* binding */ createFooter)
/* harmony export */ });
/* harmony import */ var _images_github_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/github.svg */ "./src/images/github.svg");


const createTabs = () => {
  const tabs = document.createElement('div');
  tabs.classList.add('tabs');

  const homeTab = document.createElement('div');
  const menuTab = document.createElement('div');
  const contactTab = document.createElement('div');

  homeTab.textContent = 'Home';
  homeTab.classList.add('tab');
  homeTab.setAttribute('id', 'home');
  homeTab.classList.add('active');

  menuTab.textContent = 'Menu';
  menuTab.classList.add('tab');
  menuTab.setAttribute('id', 'menu');

  contactTab.textContent = 'Contact Us';
  contactTab.classList.add('tab');
  contactTab.setAttribute('id', 'contact');

  tabs.appendChild(homeTab);
  tabs.appendChild(menuTab);
  tabs.appendChild(contactTab);

  return tabs;
};

const createHeader = () => {
  const header = document.createElement('header');

  header.textContent = 'La Abuelita';

  header.appendChild(createTabs());

  return header;
};

const createCenterDiv = () => {
  const center = document.createElement('div');
  center.classList.add('center');

  const para1 = document.createElement('p');
  const para2 = document.createElement('p');

  para1.textContent = 'An authentic mexican taste';
  para2.textContent = 'est. 1958';

  center.appendChild(para1);
  center.appendChild(para2);

  return center;
};

const createFooter = () => {
  const footer = document.createElement('footer');

  const para = document.createElement('p');
  para.textContent = 'Created by '

  const link = document.createElement('a');
  link.textContent = 'gcerv93';
  link.href = 'https://github.com/gcerv93';
  link.target = '_blank';

  const myIcon = new Image();
  myIcon.src = _images_github_svg__WEBPACK_IMPORTED_MODULE_0__;

  para.appendChild(link);
  footer.appendChild(para);
  footer.appendChild(myIcon);

  return footer;
};

function mainPage() {
  const content = document.querySelector('#content');

  const header = createHeader();
  const center = createCenterDiv();
  const footer = createFooter();

  content.appendChild(header);
  content.appendChild(center);
  content.appendChild(footer);

  return content;
};




/***/ }),

/***/ "./src/menuPage.js":
/*!*************************!*\
  !*** ./src/menuPage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _mainPage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mainPage.js */ "./src/mainPage.js");
/* harmony import */ var _images_pozole_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/pozole.jpg */ "./src/images/pozole.jpg");
/* harmony import */ var _images_tacos_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/tacos.jpg */ "./src/images/tacos.jpg");
/* harmony import */ var _images_torta_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/torta.jpg */ "./src/images/torta.jpg");
/* harmony import */ var _images_quesadillas_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/quesadillas.jpg */ "./src/images/quesadillas.jpg");






const createMenuItem = (imageSrc, desc, price) => {
  const menuItem = document.createElement('div');
  menuItem.classList.add('menu-item');

  const image = new Image();
  image.src = imageSrc;

  const info = document.createElement('p');
  const description = document.createElement('p');
  description.textContent = desc;
  info.textContent = price;

  menuItem.appendChild(image);
  menuItem.appendChild(description);
  menuItem.appendChild(info);

  return menuItem;
};

const menuPage = () => {
  const content = document.querySelector('#content');

  content.appendChild((0,_mainPage_js__WEBPACK_IMPORTED_MODULE_0__.createHeader)());
  const menuTab = document.querySelector('#menu');
  menuTab.classList.add('active');

  const centerDiv = document.createElement('div');
  centerDiv.classList.add('menu');

  const torta = createMenuItem(_images_torta_jpg__WEBPACK_IMPORTED_MODULE_3__, 'Torta', '9.89');
  const pozole = createMenuItem(_images_pozole_jpg__WEBPACK_IMPORTED_MODULE_1__, 'Pozole', '10.89');
  const tacos = createMenuItem(_images_tacos_jpg__WEBPACK_IMPORTED_MODULE_2__, 'Tacos', '8.89');
  const quesadilla = createMenuItem(_images_quesadillas_jpg__WEBPACK_IMPORTED_MODULE_4__, 'Quesadillas', '10.89');

  centerDiv.appendChild(torta);
  centerDiv.appendChild(pozole);
  centerDiv.appendChild(tacos);
  centerDiv.appendChild(quesadilla);

  content.appendChild(centerDiv);
  
  content.appendChild((0,_mainPage_js__WEBPACK_IMPORTED_MODULE_0__.createFooter)());

  return content;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menuPage);


/***/ }),

/***/ "./src/images/github.svg":
/*!*******************************!*\
  !*** ./src/images/github.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "51c37853e29bc8161e48.svg";

/***/ }),

/***/ "./src/images/pozole.jpg":
/*!*******************************!*\
  !*** ./src/images/pozole.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "088526bb7d7f2ce7ee01.jpg";

/***/ }),

/***/ "./src/images/quesadillas.jpg":
/*!************************************!*\
  !*** ./src/images/quesadillas.jpg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3409330ef3a8890b4386.jpg";

/***/ }),

/***/ "./src/images/tacos.jpg":
/*!******************************!*\
  !*** ./src/images/tacos.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7c4ab84d9032d41f1ca6.jpg";

/***/ }),

/***/ "./src/images/torta.jpg":
/*!******************************!*\
  !*** ./src/images/torta.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "84f171da0bea26729aa1.jpg";

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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mainPage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mainPage.js */ "./src/mainPage.js");
/* harmony import */ var _menuPage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menuPage.js */ "./src/menuPage.js");
/* harmony import */ var _contactPage_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contactPage.js */ "./src/contactPage.js");




// mainPage();
// menuPage();
(0,_contactPage_js__WEBPACK_IMPORTED_MODULE_2__["default"])();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBMkQ7O0FBRTNEO0FBQ0E7O0FBRUEsc0JBQXNCLDBEQUFZO0FBQ2xDOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHNCQUFzQiwwREFBWTtBQUNsQzs7QUFFQSxpRUFBZSxXQUFXLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFCWTs7QUFFdkM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxlQUFlLCtDQUFJOztBQUVuQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFZ0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM0ZXO0FBQ25CO0FBQ0Y7QUFDQTtBQUNNOztBQUU1QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBLHNCQUFzQiwwREFBWTtBQUNsQztBQUNBOztBQUVBO0FBQ0E7O0FBRUEsK0JBQStCLDhDQUFLO0FBQ3BDLGdDQUFnQywrQ0FBTTtBQUN0QywrQkFBK0IsOENBQUs7QUFDcEMsb0NBQW9DLG9EQUFLOztBQUV6QztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esc0JBQXNCLDBEQUFZOztBQUVsQztBQUNBOztBQUVBLGlFQUFlLFFBQVEsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDcER4QjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7Ozs7Ozs7Ozs7QUNmdUM7QUFDRjtBQUNNOztBQUUzQztBQUNBO0FBQ0EsMkRBQVciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY29udGFjdFBhZ2UuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21haW5QYWdlLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tZW51UGFnZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUhlYWRlciwgY3JlYXRlRm9vdGVyIH0gZnJvbSAnLi9tYWluUGFnZS5qcyc7XG5cbmNvbnN0IGNvbnRhY3RQYWdlID0gKCkgPT4ge1xuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKTtcblxuICBjb250ZW50LmFwcGVuZENoaWxkKGNyZWF0ZUhlYWRlcigpKTtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRhY3QnKS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcblxuICBjb25zdCBjZW50ZXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY2VudGVyRGl2LmNsYXNzTGlzdC5hZGQoJ2NlbnRlci1jb250YWN0Jyk7XG5cbiAgY29uc3QgY29udGFjdEluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIGNvbnRhY3RJbmZvLnRleHRDb250ZW50ID0gJ0NvbnRhY3QgVXMnO1xuICBjb25zdCBwaG9uZUluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIHBob25lSW5mby50ZXh0Q29udGVudCA9ICcwMTItMzQ1LTY3ODknO1xuICBjb25zdCBlbWFpbEluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIGVtYWlsSW5mby50ZXh0Q29udGVudCA9ICdmYWtlZW1haWxAZmFrZWVtYWlsLmNvbSc7XG5cbiAgY2VudGVyRGl2LmFwcGVuZENoaWxkKGNvbnRhY3RJbmZvKTtcbiAgY2VudGVyRGl2LmFwcGVuZENoaWxkKHBob25lSW5mbyk7XG4gIGNlbnRlckRpdi5hcHBlbmRDaGlsZChlbWFpbEluZm8pO1xuXG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY2VudGVyRGl2KTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChjcmVhdGVGb290ZXIoKSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb250YWN0UGFnZTtcbiIsImltcG9ydCBJY29uIGZyb20gJy4vaW1hZ2VzL2dpdGh1Yi5zdmcnO1xuXG5jb25zdCBjcmVhdGVUYWJzID0gKCkgPT4ge1xuICBjb25zdCB0YWJzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHRhYnMuY2xhc3NMaXN0LmFkZCgndGFicycpO1xuXG4gIGNvbnN0IGhvbWVUYWIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3QgbWVudVRhYiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCBjb250YWN0VGFiID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgaG9tZVRhYi50ZXh0Q29udGVudCA9ICdIb21lJztcbiAgaG9tZVRhYi5jbGFzc0xpc3QuYWRkKCd0YWInKTtcbiAgaG9tZVRhYi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2hvbWUnKTtcbiAgaG9tZVRhYi5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcblxuICBtZW51VGFiLnRleHRDb250ZW50ID0gJ01lbnUnO1xuICBtZW51VGFiLmNsYXNzTGlzdC5hZGQoJ3RhYicpO1xuICBtZW51VGFiLnNldEF0dHJpYnV0ZSgnaWQnLCAnbWVudScpO1xuXG4gIGNvbnRhY3RUYWIudGV4dENvbnRlbnQgPSAnQ29udGFjdCBVcyc7XG4gIGNvbnRhY3RUYWIuY2xhc3NMaXN0LmFkZCgndGFiJyk7XG4gIGNvbnRhY3RUYWIuc2V0QXR0cmlidXRlKCdpZCcsICdjb250YWN0Jyk7XG5cbiAgdGFicy5hcHBlbmRDaGlsZChob21lVGFiKTtcbiAgdGFicy5hcHBlbmRDaGlsZChtZW51VGFiKTtcbiAgdGFicy5hcHBlbmRDaGlsZChjb250YWN0VGFiKTtcblxuICByZXR1cm4gdGFicztcbn07XG5cbmNvbnN0IGNyZWF0ZUhlYWRlciA9ICgpID0+IHtcbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGVhZGVyJyk7XG5cbiAgaGVhZGVyLnRleHRDb250ZW50ID0gJ0xhIEFidWVsaXRhJztcblxuICBoZWFkZXIuYXBwZW5kQ2hpbGQoY3JlYXRlVGFicygpKTtcblxuICByZXR1cm4gaGVhZGVyO1xufTtcblxuY29uc3QgY3JlYXRlQ2VudGVyRGl2ID0gKCkgPT4ge1xuICBjb25zdCBjZW50ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY2VudGVyLmNsYXNzTGlzdC5hZGQoJ2NlbnRlcicpO1xuXG4gIGNvbnN0IHBhcmExID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBjb25zdCBwYXJhMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcblxuICBwYXJhMS50ZXh0Q29udGVudCA9ICdBbiBhdXRoZW50aWMgbWV4aWNhbiB0YXN0ZSc7XG4gIHBhcmEyLnRleHRDb250ZW50ID0gJ2VzdC4gMTk1OCc7XG5cbiAgY2VudGVyLmFwcGVuZENoaWxkKHBhcmExKTtcbiAgY2VudGVyLmFwcGVuZENoaWxkKHBhcmEyKTtcblxuICByZXR1cm4gY2VudGVyO1xufTtcblxuY29uc3QgY3JlYXRlRm9vdGVyID0gKCkgPT4ge1xuICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb290ZXInKTtcblxuICBjb25zdCBwYXJhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBwYXJhLnRleHRDb250ZW50ID0gJ0NyZWF0ZWQgYnkgJ1xuXG4gIGNvbnN0IGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gIGxpbmsudGV4dENvbnRlbnQgPSAnZ2NlcnY5Myc7XG4gIGxpbmsuaHJlZiA9ICdodHRwczovL2dpdGh1Yi5jb20vZ2NlcnY5Myc7XG4gIGxpbmsudGFyZ2V0ID0gJ19ibGFuayc7XG5cbiAgY29uc3QgbXlJY29uID0gbmV3IEltYWdlKCk7XG4gIG15SWNvbi5zcmMgPSBJY29uO1xuXG4gIHBhcmEuYXBwZW5kQ2hpbGQobGluayk7XG4gIGZvb3Rlci5hcHBlbmRDaGlsZChwYXJhKTtcbiAgZm9vdGVyLmFwcGVuZENoaWxkKG15SWNvbik7XG5cbiAgcmV0dXJuIGZvb3Rlcjtcbn07XG5cbmZ1bmN0aW9uIG1haW5QYWdlKCkge1xuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKTtcblxuICBjb25zdCBoZWFkZXIgPSBjcmVhdGVIZWFkZXIoKTtcbiAgY29uc3QgY2VudGVyID0gY3JlYXRlQ2VudGVyRGl2KCk7XG4gIGNvbnN0IGZvb3RlciA9IGNyZWF0ZUZvb3RlcigpO1xuXG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChjZW50ZXIpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKGZvb3Rlcik7XG5cbiAgcmV0dXJuIGNvbnRlbnQ7XG59O1xuXG5leHBvcnQgeyBtYWluUGFnZSwgY3JlYXRlSGVhZGVyLCBjcmVhdGVGb290ZXIgfTtcbiIsImltcG9ydCB7IGNyZWF0ZUhlYWRlciwgY3JlYXRlRm9vdGVyIH0gZnJvbSAnLi9tYWluUGFnZS5qcyc7XG5pbXBvcnQgUG96b2xlIGZyb20gJy4vaW1hZ2VzL3Bvem9sZS5qcGcnXG5pbXBvcnQgVGFjb3MgZnJvbSAnLi9pbWFnZXMvdGFjb3MuanBnJ1xuaW1wb3J0IFRvcnRhIGZyb20gJy4vaW1hZ2VzL3RvcnRhLmpwZydcbmltcG9ydCBRdWVzYSBmcm9tICcuL2ltYWdlcy9xdWVzYWRpbGxhcy5qcGcnXG5cbmNvbnN0IGNyZWF0ZU1lbnVJdGVtID0gKGltYWdlU3JjLCBkZXNjLCBwcmljZSkgPT4ge1xuICBjb25zdCBtZW51SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBtZW51SXRlbS5jbGFzc0xpc3QuYWRkKCdtZW51LWl0ZW0nKTtcblxuICBjb25zdCBpbWFnZSA9IG5ldyBJbWFnZSgpO1xuICBpbWFnZS5zcmMgPSBpbWFnZVNyYztcblxuICBjb25zdCBpbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgZGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBkZXNjO1xuICBpbmZvLnRleHRDb250ZW50ID0gcHJpY2U7XG5cbiAgbWVudUl0ZW0uYXBwZW5kQ2hpbGQoaW1hZ2UpO1xuICBtZW51SXRlbS5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbik7XG4gIG1lbnVJdGVtLmFwcGVuZENoaWxkKGluZm8pO1xuXG4gIHJldHVybiBtZW51SXRlbTtcbn07XG5cbmNvbnN0IG1lbnVQYWdlID0gKCkgPT4ge1xuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKTtcblxuICBjb250ZW50LmFwcGVuZENoaWxkKGNyZWF0ZUhlYWRlcigpKTtcbiAgY29uc3QgbWVudVRhYiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtZW51Jyk7XG4gIG1lbnVUYWIuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG5cbiAgY29uc3QgY2VudGVyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNlbnRlckRpdi5jbGFzc0xpc3QuYWRkKCdtZW51Jyk7XG5cbiAgY29uc3QgdG9ydGEgPSBjcmVhdGVNZW51SXRlbShUb3J0YSwgJ1RvcnRhJywgJzkuODknKTtcbiAgY29uc3QgcG96b2xlID0gY3JlYXRlTWVudUl0ZW0oUG96b2xlLCAnUG96b2xlJywgJzEwLjg5Jyk7XG4gIGNvbnN0IHRhY29zID0gY3JlYXRlTWVudUl0ZW0oVGFjb3MsICdUYWNvcycsICc4Ljg5Jyk7XG4gIGNvbnN0IHF1ZXNhZGlsbGEgPSBjcmVhdGVNZW51SXRlbShRdWVzYSwgJ1F1ZXNhZGlsbGFzJywgJzEwLjg5Jyk7XG5cbiAgY2VudGVyRGl2LmFwcGVuZENoaWxkKHRvcnRhKTtcbiAgY2VudGVyRGl2LmFwcGVuZENoaWxkKHBvem9sZSk7XG4gIGNlbnRlckRpdi5hcHBlbmRDaGlsZCh0YWNvcyk7XG4gIGNlbnRlckRpdi5hcHBlbmRDaGlsZChxdWVzYWRpbGxhKTtcblxuICBjb250ZW50LmFwcGVuZENoaWxkKGNlbnRlckRpdik7XG4gIFxuICBjb250ZW50LmFwcGVuZENoaWxkKGNyZWF0ZUZvb3RlcigpKTtcblxuICByZXR1cm4gY29udGVudDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IG1lbnVQYWdlO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiaW1wb3J0IHttYWluUGFnZX0gZnJvbSAnLi9tYWluUGFnZS5qcyc7XG5pbXBvcnQgbWVudVBhZ2UgZnJvbSAnLi9tZW51UGFnZS5qcyc7XG5pbXBvcnQgY29udGFjdFBhZ2UgZnJvbSAnLi9jb250YWN0UGFnZS5qcyc7XG5cbi8vIG1haW5QYWdlKCk7XG4vLyBtZW51UGFnZSgpO1xuY29udGFjdFBhZ2UoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==
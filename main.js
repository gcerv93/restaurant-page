/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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



// mainPage();
(0,_menuPage_js__WEBPACK_IMPORTED_MODULE_1__["default"])();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUF1Qzs7QUFFdkM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxlQUFlLCtDQUFJOztBQUVuQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFZ0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM0ZXO0FBQ25CO0FBQ0Y7QUFDQTtBQUNNOztBQUU1QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBLHNCQUFzQiwwREFBWTs7QUFFbEM7QUFDQTs7QUFFQSwrQkFBK0IsOENBQUs7QUFDcEMsZ0NBQWdDLCtDQUFNO0FBQ3RDLCtCQUErQiw4Q0FBSztBQUNwQyxvQ0FBb0Msb0RBQUs7O0FBRXpDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxzQkFBc0IsMERBQVk7QUFDbEM7QUFDQTs7QUFFQSxpRUFBZSxRQUFRLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQ2pEeEI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7Ozs7Ozs7Ozs7QUNmdUM7QUFDRjs7QUFFckM7QUFDQSx3REFBUSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tYWluUGFnZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbWVudVBhZ2UuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSWNvbiBmcm9tICcuL2ltYWdlcy9naXRodWIuc3ZnJztcblxuY29uc3QgY3JlYXRlVGFicyA9ICgpID0+IHtcbiAgY29uc3QgdGFicyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICB0YWJzLmNsYXNzTGlzdC5hZGQoJ3RhYnMnKTtcblxuICBjb25zdCBob21lVGFiID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IG1lbnVUYWIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3QgY29udGFjdFRhYiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gIGhvbWVUYWIudGV4dENvbnRlbnQgPSAnSG9tZSc7XG4gIGhvbWVUYWIuY2xhc3NMaXN0LmFkZCgndGFiJyk7XG4gIGhvbWVUYWIuc2V0QXR0cmlidXRlKCdpZCcsICdob21lJyk7XG4gIGhvbWVUYWIuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG5cbiAgbWVudVRhYi50ZXh0Q29udGVudCA9ICdNZW51JztcbiAgbWVudVRhYi5jbGFzc0xpc3QuYWRkKCd0YWInKTtcbiAgbWVudVRhYi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ21lbnUnKTtcblxuICBjb250YWN0VGFiLnRleHRDb250ZW50ID0gJ0NvbnRhY3QgVXMnO1xuICBjb250YWN0VGFiLmNsYXNzTGlzdC5hZGQoJ3RhYicpO1xuICBjb250YWN0VGFiLnNldEF0dHJpYnV0ZSgnaWQnLCAnY29udGFjdCcpO1xuXG4gIHRhYnMuYXBwZW5kQ2hpbGQoaG9tZVRhYik7XG4gIHRhYnMuYXBwZW5kQ2hpbGQobWVudVRhYik7XG4gIHRhYnMuYXBwZW5kQ2hpbGQoY29udGFjdFRhYik7XG5cbiAgcmV0dXJuIHRhYnM7XG59O1xuXG5jb25zdCBjcmVhdGVIZWFkZXIgPSAoKSA9PiB7XG4gIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hlYWRlcicpO1xuXG4gIGhlYWRlci50ZXh0Q29udGVudCA9ICdMYSBBYnVlbGl0YSc7XG5cbiAgaGVhZGVyLmFwcGVuZENoaWxkKGNyZWF0ZVRhYnMoKSk7XG5cbiAgcmV0dXJuIGhlYWRlcjtcbn07XG5cbmNvbnN0IGNyZWF0ZUNlbnRlckRpdiA9ICgpID0+IHtcbiAgY29uc3QgY2VudGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNlbnRlci5jbGFzc0xpc3QuYWRkKCdjZW50ZXInKTtcblxuICBjb25zdCBwYXJhMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgY29uc3QgcGFyYTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG5cbiAgcGFyYTEudGV4dENvbnRlbnQgPSAnQW4gYXV0aGVudGljIG1leGljYW4gdGFzdGUnO1xuICBwYXJhMi50ZXh0Q29udGVudCA9ICdlc3QuIDE5NTgnO1xuXG4gIGNlbnRlci5hcHBlbmRDaGlsZChwYXJhMSk7XG4gIGNlbnRlci5hcHBlbmRDaGlsZChwYXJhMik7XG5cbiAgcmV0dXJuIGNlbnRlcjtcbn07XG5cbmNvbnN0IGNyZWF0ZUZvb3RlciA9ICgpID0+IHtcbiAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9vdGVyJyk7XG5cbiAgY29uc3QgcGFyYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgcGFyYS50ZXh0Q29udGVudCA9ICdDcmVhdGVkIGJ5ICdcblxuICBjb25zdCBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICBsaW5rLnRleHRDb250ZW50ID0gJ2djZXJ2OTMnO1xuICBsaW5rLmhyZWYgPSAnaHR0cHM6Ly9naXRodWIuY29tL2djZXJ2OTMnO1xuICBsaW5rLnRhcmdldCA9ICdfYmxhbmsnO1xuXG4gIGNvbnN0IG15SWNvbiA9IG5ldyBJbWFnZSgpO1xuICBteUljb24uc3JjID0gSWNvbjtcblxuICBwYXJhLmFwcGVuZENoaWxkKGxpbmspO1xuICBmb290ZXIuYXBwZW5kQ2hpbGQocGFyYSk7XG4gIGZvb3Rlci5hcHBlbmRDaGlsZChteUljb24pO1xuXG4gIHJldHVybiBmb290ZXI7XG59O1xuXG5mdW5jdGlvbiBtYWluUGFnZSgpIHtcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50Jyk7XG5cbiAgY29uc3QgaGVhZGVyID0gY3JlYXRlSGVhZGVyKCk7XG4gIGNvbnN0IGNlbnRlciA9IGNyZWF0ZUNlbnRlckRpdigpO1xuICBjb25zdCBmb290ZXIgPSBjcmVhdGVGb290ZXIoKTtcblxuICBjb250ZW50LmFwcGVuZENoaWxkKGhlYWRlcik7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY2VudGVyKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChmb290ZXIpO1xuXG4gIHJldHVybiBjb250ZW50O1xufTtcblxuZXhwb3J0IHsgbWFpblBhZ2UsIGNyZWF0ZUhlYWRlciwgY3JlYXRlRm9vdGVyIH07XG4iLCJpbXBvcnQgeyBjcmVhdGVIZWFkZXIsIGNyZWF0ZUZvb3RlciB9IGZyb20gJy4vbWFpblBhZ2UuanMnO1xuaW1wb3J0IFBvem9sZSBmcm9tICcuL2ltYWdlcy9wb3pvbGUuanBnJ1xuaW1wb3J0IFRhY29zIGZyb20gJy4vaW1hZ2VzL3RhY29zLmpwZydcbmltcG9ydCBUb3J0YSBmcm9tICcuL2ltYWdlcy90b3J0YS5qcGcnXG5pbXBvcnQgUXVlc2EgZnJvbSAnLi9pbWFnZXMvcXVlc2FkaWxsYXMuanBnJ1xuXG5jb25zdCBjcmVhdGVNZW51SXRlbSA9IChpbWFnZVNyYywgZGVzYywgcHJpY2UpID0+IHtcbiAgY29uc3QgbWVudUl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbWVudUl0ZW0uY2xhc3NMaXN0LmFkZCgnbWVudS1pdGVtJyk7XG5cbiAgY29uc3QgaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgaW1hZ2Uuc3JjID0gaW1hZ2VTcmM7XG5cbiAgY29uc3QgaW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIGRlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gZGVzYztcbiAgaW5mby50ZXh0Q29udGVudCA9IHByaWNlO1xuXG4gIG1lbnVJdGVtLmFwcGVuZENoaWxkKGltYWdlKTtcbiAgbWVudUl0ZW0uYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pO1xuICBtZW51SXRlbS5hcHBlbmRDaGlsZChpbmZvKTtcblxuICByZXR1cm4gbWVudUl0ZW07XG59O1xuXG5jb25zdCBtZW51UGFnZSA9ICgpID0+IHtcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50Jyk7XG5cbiAgY29udGVudC5hcHBlbmRDaGlsZChjcmVhdGVIZWFkZXIoKSk7XG5cbiAgY29uc3QgY2VudGVyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNlbnRlckRpdi5jbGFzc0xpc3QuYWRkKCdtZW51Jyk7XG5cbiAgY29uc3QgdG9ydGEgPSBjcmVhdGVNZW51SXRlbShUb3J0YSwgJ1RvcnRhJywgJzkuODknKTtcbiAgY29uc3QgcG96b2xlID0gY3JlYXRlTWVudUl0ZW0oUG96b2xlLCAnUG96b2xlJywgJzEwLjg5Jyk7XG4gIGNvbnN0IHRhY29zID0gY3JlYXRlTWVudUl0ZW0oVGFjb3MsICdUYWNvcycsICc4Ljg5Jyk7XG4gIGNvbnN0IHF1ZXNhZGlsbGEgPSBjcmVhdGVNZW51SXRlbShRdWVzYSwgJ1F1ZXNhZGlsbGFzJywgJzEwLjg5Jyk7XG5cbiAgY2VudGVyRGl2LmFwcGVuZENoaWxkKHRvcnRhKTtcbiAgY2VudGVyRGl2LmFwcGVuZENoaWxkKHBvem9sZSk7XG4gIGNlbnRlckRpdi5hcHBlbmRDaGlsZCh0YWNvcyk7XG4gIGNlbnRlckRpdi5hcHBlbmRDaGlsZChxdWVzYWRpbGxhKTtcblxuICBjb250ZW50LmFwcGVuZENoaWxkKGNlbnRlckRpdik7XG4gIFxuICBjb250ZW50LmFwcGVuZENoaWxkKGNyZWF0ZUZvb3RlcigpKTtcbiAgcmV0dXJuIGNvbnRlbnQ7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBtZW51UGFnZTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsImltcG9ydCB7bWFpblBhZ2V9IGZyb20gJy4vbWFpblBhZ2UuanMnO1xuaW1wb3J0IG1lbnVQYWdlIGZyb20gJy4vbWVudVBhZ2UuanMnO1xuXG4vLyBtYWluUGFnZSgpO1xubWVudVBhZ2UoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==
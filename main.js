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

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createcontactpage)\n/* harmony export */ });\nfunction createcontactpage(){\n    \n    console.log(\"contact page\")\n\n    const element = document.getElementById(\"content\");\n    const contactabbutton = document.createElement(\"button\")\n    const contacttabtext = document.createTextNode(\"Contact\")\n    const buttonshere = document.getElementById('buttonshere')\n    buttonshere.appendChild(contactabbutton);\n    contactabbutton.appendChild(contacttabtext)\n\n    \n    contactabbutton.addEventListener('click', function(){\n        element.replaceChildren()\n   \n        const h1 = document.createElement(\"h1\");\n        const textNode = document.createTextNode(\"Contact us\");\n        h1.appendChild(textNode);\n        element.appendChild(h1);\n\n        const brettimg = document.createElement('img');\n        brettimg.src = \"/Users/ok/Documents/restaurantpage/dist/IMG-6427.PNG\";\n        element.appendChild(brettimg)\n\n        const p = document.createElement('p');\n        const pnode = document.createTextNode(\"We are located next to Battersea Park, right in the heart of London. Call manager Brad Riser at +00 000000 to book a reservation!\")\n        p.appendChild(pnode);\n        element.appendChild(p)\n\n        console.log(\"test\")\n})\n    return element\n}\n\n//# sourceURL=webpack://restaurantpage/./src/contact.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _initialmod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./initialmod */ \"./src/initialmod.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\nconsole.log(\"test\")\n\n;\n\n\n\n\n\ndocument.body.appendChild((0,_initialmod__WEBPACK_IMPORTED_MODULE_0__[\"default\"])());\nconst buttonshere = document.getElementById('buttonshere')\nbuttonshere.appendChild((0,_initialmod__WEBPACK_IMPORTED_MODULE_0__.homebutton)());\ndocument.body.appendChild((0,_menu__WEBPACK_IMPORTED_MODULE_2__[\"default\"])());\ndocument.body.appendChild((0,_contact__WEBPACK_IMPORTED_MODULE_1__[\"default\"])());\n\n//# sourceURL=webpack://restaurantpage/./src/index.js?");

/***/ }),

/***/ "./src/initialmod.js":
/*!***************************!*\
  !*** ./src/initialmod.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ component),\n/* harmony export */   \"homebutton\": () => (/* binding */ homebutton)\n/* harmony export */ });\nfunction component() {\n    const element = document.getElementById('content');\n\n    element.replaceChildren();\n\n   const h1 = document.createElement(\"h1\");\n    const textNode = document.createTextNode(\"Breadstaurant\");\n    h1.appendChild(textNode);\n    element.appendChild(h1);\n\n    const img = document.createElement('img')\n    img.src = \"/Users/ok/Documents/restaurantpage/dist/dutchovenbread.jpeg\"\n    element.appendChild(img)\n\n    const p = document.createElement('p');\n    const pnode = document.createTextNode(\"Wood-fired traditional breads, soft milk bread and open-crumbed pan de cristal. We're the only breadstaurant in a 100 mile radius. Highly rated by celebrity chefs. Come down and see for yourself!\")\n    p.appendChild(pnode);\n    element.appendChild(p)\n\n\n\n    return element;\n  }\n\n  function homebutton(){\n\n  const homebutton = document.createElement('button');\n  const hometext = document.createTextNode(\"Home\");\n  homebutton.appendChild(hometext);\n  const buttonshere = document.getElementById('buttonshere')\n  buttonshere.appendChild(homebutton);\n\n  homebutton.addEventListener('click', component);\n\n  return homebutton;\n  }\n\n//# sourceURL=webpack://restaurantpage/./src/initialmod.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createmenu)\n/* harmony export */ });\nfunction createmenu(){\n    console.log(\"menu page\")\n\n    const element = document.getElementById(\"content\");\n    const menubutton = document.createElement(\"button\");\n    const menutext = document.createTextNode(\"Menu\");\n    const buttonshere = document.getElementById('buttonshere')\n    buttonshere.appendChild(menubutton);\n    menubutton.appendChild(menutext);\n\n    menubutton.addEventListener('click', function(){\n        console.log(\"menu button clicked\")\n\n        element.replaceChildren()\n\n        const h1 = document.createElement(\"h1\");\n        const textNode = document.createTextNode(\"Menu\");\n        h1.appendChild(textNode);\n        element.appendChild(h1);\n\n        const soupdiv = document.createElement(\"div\");\n\n        const tomatosouph2 = document.createElement('h2');\n        const soup1 = document.createTextNode('Tomato soup')\n        const tomatosoupimg = document.createElement('img');\n        tomatosoupimg.src = \"/Users/ok/Documents/restaurantpage/dist/tomatosoup.jpeg\"\n        const tomatosouptexthere = document.createElement('p')\n        const tomatosoupdescription = document.createTextNode(\"A hearty blend of fresh garden tomatoes, paprika and cream.\")\n        tomatosouptexthere.appendChild(tomatosoupdescription)\n        soupdiv.appendChild(tomatosouph2);\n        soupdiv.appendChild(tomatosoupimg)\n        soupdiv.appendChild(tomatosouptexthere)\n        tomatosouph2.appendChild(soup1);\n\n        const onionsouph2 = document.createElement('h2');\n        const onionsouptitle = document.createTextNode('French onion soup')\n        const frenchonionsoupimg = document.createElement('img');\n        frenchonionsoupimg.src = \"/Users/ok/Documents/restaurantpage/dist/frenchonionsoup.jpeg\"\n        const frenchonionsouptexthere = document.createElement('p');\n        const frenchonionsoupdescription = document.createTextNode(\"Cozy bowl of rich caramelized onions, stock and gruyere.\")\n        frenchonionsouptexthere.appendChild(frenchonionsoupdescription);\n        onionsouph2.appendChild(onionsouptitle);\n        soupdiv.appendChild(onionsouph2);\n        soupdiv.appendChild(frenchonionsoupimg)\n        soupdiv.appendChild(frenchonionsouptexthere)\n\n        element.appendChild(soupdiv);\n\n        const brunchdiv = document.createElement('div');\n\n        const grilledcheesediv = document.createElement('div')\n        const grilledcheeseh2 = document.createElement('h2');\n        const grilledcheesetitle = document.createTextNode('Grilled cheese')\n        const grilledcheesetexthere = document.createElement('p')\n        const grilledcheesedescription = document.createTextNode('Enjoy three types of farm fresh cheeses wedged between our rustic bread slices')\n        const grilledcheeseimg = document.createElement('img');\n        grilledcheeseimg.src = '/Users/ok/Documents/restaurantpage/dist/grilledcheese.jpeg';\n        grilledcheeseh2.appendChild(grilledcheesetitle)\n        grilledcheesediv.appendChild(grilledcheeseh2)\n        grilledcheesediv.appendChild(grilledcheeseimg);\n        grilledcheesetexthere.appendChild(grilledcheesedescription)\n        grilledcheesediv.appendChild(grilledcheesetexthere)\n        brunchdiv.appendChild(grilledcheesediv)\n\n        element.appendChild(brunchdiv);\n\n    })\n\n    return element\n\n}\n\n//# sourceURL=webpack://restaurantpage/./src/menu.js?");

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
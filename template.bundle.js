"use strict";
(self["webpackChunkrestaurant_page"] = self["webpackChunkrestaurant_page"] || []).push([["template"],{

/***/ "./src/modules/home.js":
/*!*****************************!*\
  !*** ./src/modules/home.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function home() {
  const home = document.createElement('div')
  home.setAttribute('id', 'home')

  const cursiveText = document.createElement('p')
  cursiveText.textContent = 'Welcome'
  cursiveText.classList.add('cursive')

  const heading = document.createElement('h1')
  heading.textContent = 'The Moka Pot'

  const breakLine = document.createElement('hr')

  const description = document.createElement('p')
  description.textContent = 'Who said breakfast was a morning thing?'
  description.classList.add('description')

  const btn = document.createElement('button')
  btn.textContent = 'See the menu'

  home.append(cursiveText, heading, breakLine, description, btn)

  return home
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (home);

/***/ }),

/***/ "./src/modules/template.js":
/*!*********************************!*\
  !*** ./src/modules/template.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ "./src/modules/home.js");
/* harmony import */ var _images_GitHub_Mark_Light_32px_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/GitHub-Mark-Light-32px.png */ "./src/images/GitHub-Mark-Light-32px.png");



function navMenu() {
  const nav = document.createElement('nav')
  const ul = document.createElement('ul')
  const liHome = document.createElement('li')
  const liMenu = document.createElement('li')
  const liAbout = document.createElement('li')

  nav.appendChild(ul)

  liHome.textContent = 'Home'
  liMenu.textContent = 'Menu'
  liAbout.textContent = 'About'

  ul.append(liHome, liMenu, liAbout)
  
  return nav
}

function main() {
  const mainDiv = document.createElement('main')

  mainDiv.appendChild((0,_home__WEBPACK_IMPORTED_MODULE_0__["default"])())

  return mainDiv
}

function footer() {
  const footer = document.createElement('footer')
  const text = document.createElement('p')
  const anchor = document.createElement('a')

  text.textContent = 'Created By Orel Barzilay'

  const image = new Image(20, 20)
  image.src = _images_GitHub_Mark_Light_32px_png__WEBPACK_IMPORTED_MODULE_1__

  anchor.href = 'https://github.com/Orelba/restaurant-page'
  anchor.target = '_blank'

  anchor.appendChild(image)

  footer.append(text, anchor)

  return footer
}

function template() {
  return [navMenu(), main(), footer()]
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (template);

/***/ }),

/***/ "./src/images/GitHub-Mark-Light-32px.png":
/*!***********************************************!*\
  !*** ./src/images/GitHub-Mark-Light-32px.png ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "266ca63177bca6f330a7.png";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/modules/template.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVtcGxhdGUuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlOzs7Ozs7Ozs7Ozs7Ozs7O0FDekJVO0FBQ29DO0FBQzdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLGlEQUFJO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsK0RBQVU7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbW9kdWxlcy9ob21lLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tb2R1bGVzL3RlbXBsYXRlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIGhvbWUoKSB7XHJcbiAgY29uc3QgaG9tZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgaG9tZS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2hvbWUnKVxyXG5cclxuICBjb25zdCBjdXJzaXZlVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxyXG4gIGN1cnNpdmVUZXh0LnRleHRDb250ZW50ID0gJ1dlbGNvbWUnXHJcbiAgY3Vyc2l2ZVRleHQuY2xhc3NMaXN0LmFkZCgnY3Vyc2l2ZScpXHJcblxyXG4gIGNvbnN0IGhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpXHJcbiAgaGVhZGluZy50ZXh0Q29udGVudCA9ICdUaGUgTW9rYSBQb3QnXHJcblxyXG4gIGNvbnN0IGJyZWFrTGluZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hyJylcclxuXHJcbiAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcclxuICBkZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9ICdXaG8gc2FpZCBicmVha2Zhc3Qgd2FzIGEgbW9ybmluZyB0aGluZz8nXHJcbiAgZGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZCgnZGVzY3JpcHRpb24nKVxyXG5cclxuICBjb25zdCBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxyXG4gIGJ0bi50ZXh0Q29udGVudCA9ICdTZWUgdGhlIG1lbnUnXHJcblxyXG4gIGhvbWUuYXBwZW5kKGN1cnNpdmVUZXh0LCBoZWFkaW5nLCBicmVha0xpbmUsIGRlc2NyaXB0aW9uLCBidG4pXHJcblxyXG4gIHJldHVybiBob21lXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGhvbWUiLCJpbXBvcnQgaG9tZSBmcm9tICcuL2hvbWUnXHJcbmltcG9ydCBHaXRodWJJY29uIGZyb20gJy4uL2ltYWdlcy9HaXRIdWItTWFyay1MaWdodC0zMnB4LnBuZydcclxuXHJcbmZ1bmN0aW9uIG5hdk1lbnUoKSB7XHJcbiAgY29uc3QgbmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbmF2JylcclxuICBjb25zdCB1bCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJylcclxuICBjb25zdCBsaUhvbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpXHJcbiAgY29uc3QgbGlNZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKVxyXG4gIGNvbnN0IGxpQWJvdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpXHJcblxyXG4gIG5hdi5hcHBlbmRDaGlsZCh1bClcclxuXHJcbiAgbGlIb21lLnRleHRDb250ZW50ID0gJ0hvbWUnXHJcbiAgbGlNZW51LnRleHRDb250ZW50ID0gJ01lbnUnXHJcbiAgbGlBYm91dC50ZXh0Q29udGVudCA9ICdBYm91dCdcclxuXHJcbiAgdWwuYXBwZW5kKGxpSG9tZSwgbGlNZW51LCBsaUFib3V0KVxyXG4gIFxyXG4gIHJldHVybiBuYXZcclxufVxyXG5cclxuZnVuY3Rpb24gbWFpbigpIHtcclxuICBjb25zdCBtYWluRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbWFpbicpXHJcblxyXG4gIG1haW5EaXYuYXBwZW5kQ2hpbGQoaG9tZSgpKVxyXG5cclxuICByZXR1cm4gbWFpbkRpdlxyXG59XHJcblxyXG5mdW5jdGlvbiBmb290ZXIoKSB7XHJcbiAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9vdGVyJylcclxuICBjb25zdCB0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXHJcbiAgY29uc3QgYW5jaG9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpXHJcblxyXG4gIHRleHQudGV4dENvbnRlbnQgPSAnQ3JlYXRlZCBCeSBPcmVsIEJhcnppbGF5J1xyXG5cclxuICBjb25zdCBpbWFnZSA9IG5ldyBJbWFnZSgyMCwgMjApXHJcbiAgaW1hZ2Uuc3JjID0gR2l0aHViSWNvblxyXG5cclxuICBhbmNob3IuaHJlZiA9ICdodHRwczovL2dpdGh1Yi5jb20vT3JlbGJhL3Jlc3RhdXJhbnQtcGFnZSdcclxuICBhbmNob3IudGFyZ2V0ID0gJ19ibGFuaydcclxuXHJcbiAgYW5jaG9yLmFwcGVuZENoaWxkKGltYWdlKVxyXG5cclxuICBmb290ZXIuYXBwZW5kKHRleHQsIGFuY2hvcilcclxuXHJcbiAgcmV0dXJuIGZvb3RlclxyXG59XHJcblxyXG5mdW5jdGlvbiB0ZW1wbGF0ZSgpIHtcclxuICByZXR1cm4gW25hdk1lbnUoKSwgbWFpbigpLCBmb290ZXIoKV1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgdGVtcGxhdGUiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
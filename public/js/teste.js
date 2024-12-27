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

/***/ "./src/aux/fe/bulma/block.js":
/*!***********************************!*\
  !*** ./src/aux/fe/bulma/block.js ***!
  \***********************************/
/***/ ((module) => {

eval("const bulmaBlock = (htmlContent) => {\n  if (!htmlContent) {\n    console.error('**bulmaBlock** => the \\'htmlContent\\' parameter must be non-null.');\n    return null;\n  }\n  let bl = document.createElement('div');\n  bl.setAttribute('class', 'block');\n  bl.appendChild(htmlContent);\n  return bl;\n}\n\nmodule.exports = bulmaBlock;\n\n//# sourceURL=webpack://boilerplate/./src/aux/fe/bulma/block.js?");

/***/ }),

/***/ "./src/aux/fe/bulma/box.js":
/*!*********************************!*\
  !*** ./src/aux/fe/bulma/box.js ***!
  \*********************************/
/***/ ((module) => {

eval("const bulmaBox = (elem, htmlContent) => {\n  if (!elem) {\n    elem = \"div\"\n  }\n  if (!htmlContent) {\n    console.error('**bulmaBox** => the \\'htmlContent\\' parameter must be non-null.');\n    return null;\n  }\n  let bx = document.createElement(elem);\n  bx.setAttribute('class','box');\n  bx.appendChild(htmlContent);\n  return bx;\n}\n\nmodule.exports = bulmaBox;\n\n//# sourceURL=webpack://boilerplate/./src/aux/fe/bulma/box.js?");

/***/ }),

/***/ "./src/aux/fe/bulma/breadcrumb.js":
/*!****************************************!*\
  !*** ./src/aux/fe/bulma/breadcrumb.js ***!
  \****************************************/
/***/ ((module) => {

eval("const bulmaBreadcrumb = (items) => {\n  if (!items) {\n    console.error('**bulmaBreadcrumb** => the parameter items must be non-null.');\n    return null;\n  }\n  if (typedef(items) !== 'Array') {\n    console.error('**bulmaBreadcrumb** => the parameter items must be of type array');\n    return null;\n  }\n  const bc = document.createElement('nav');\n  bc.setAttribute('class', 'breadcrumb');\n  bc.setAttribute('aria-label', 'breadcrumbs');\n  const ul = document.createElement('ul');\n  bc.appendChild(ul);\n  items.map(it => {\n    let li = document.createElement('li');\n    let a = document.createElement('a');\n    a.setAttribute('href', '#');\n    a.innerText = it;\n    li.appendChild(a);\n    ul.appendChild(li);\n  })\n  return bc;\n}\n\nmodule.exports = bulmaBreadcrumb;\n\n//# sourceURL=webpack://boilerplate/./src/aux/fe/bulma/breadcrumb.js?");

/***/ }),

/***/ "./src/aux/fe/bulma/bulma.js":
/*!***********************************!*\
  !*** ./src/aux/fe/bulma/bulma.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const bulmaBlock = __webpack_require__(/*! ./block */ \"./src/aux/fe/bulma/block.js\");\nconst bulmaBox = __webpack_require__(/*! ./box */ \"./src/aux/fe/bulma/box.js\");\nconst bulmaBreadcrumb = __webpack_require__(/*! ./breadcrumb */ \"./src/aux/fe/bulma/breadcrumb.js\");\nconst bulmaButton = __webpack_require__(/*! ./button */ \"./src/aux/fe/bulma/button.js\");\nconst bulmaCard = __webpack_require__(/*! ./card */ \"./src/aux/fe/bulma/card.js\");\nconst bulmaColumn = __webpack_require__(/*! ./column */ \"./src/aux/fe/bulma/column.js\");\nconst bulmaContainer = __webpack_require__(/*! ./container */ \"./src/aux/fe/bulma/container.js\");\nconst bulmaHero = __webpack_require__(/*! ./hero */ \"./src/aux/fe/bulma/hero.js\");\nconst bulmaLevel = __webpack_require__(/*! ./level */ \"./src/aux/fe/bulma/level.js\");\nconst bulmaLevelItem = __webpack_require__(/*! ./levelitem */ \"./src/aux/fe/bulma/levelitem.js\");\nconst bulmaLevelLeft = __webpack_require__(/*! ./levelleft */ \"./src/aux/fe/bulma/levelleft.js\");\nconst bulmaLevelRight = __webpack_require__(/*! ./levelright */ \"./src/aux/fe/bulma/levelright.js\");\nconst bulmaNotification = __webpack_require__(/*! ./notification */ \"./src/aux/fe/bulma/notification.js\");\n\n//# sourceURL=webpack://boilerplate/./src/aux/fe/bulma/bulma.js?");

/***/ }),

/***/ "./src/aux/fe/bulma/button.js":
/*!************************************!*\
  !*** ./src/aux/fe/bulma/button.js ***!
  \************************************/
/***/ ((module) => {

eval("const bulmaButton = (elem, text, classesArray) => {\n  if (!elem) {\n    elem = 'button';\n  }\n  const acceptedElems = ['a', 'button', 'input'];\n  if (!acceptedElems.includes(elem)) {\n    console.error('\\x1b[31m**bulmaButton** => the elem parameter must be \\'a\\', \\'button\\' or \\'input\\'.\\x1b[37m');\n    return null;\n  }\n  if (!text) {\n    console.error(\"\\x1b[31m**bulmaButton** => the parameter \\'text\\' must be non-null.\\x1b[37m\");\n    return null;\n  }\n  if (!classesArray) {\n    console.error(\"\\x1b[31m**bulmaButton** => the parameter \\'classesArray\\' must be non-null.\\x1b[37m\");\n    return null;\n  }\n  if (typeof classesArray !== 'Array') {\n    console.error(\"\\x1b[31m**bulmaButton** => the parameter \\'classesArray\\' must be of type Array.\\x1b[37m\");\n    return null;\n  }\n  const btn = document.createElement(elem);\n  btn.setAttribute('class', 'button')\n  classesArray.map(cl => {\n    btn.classList.add(`is-${cl}`);\n  })\n  btn.innerText = text;\n  return btn;\n}\n\nmodule.exports = bulmaButton;\n\n\n//# sourceURL=webpack://boilerplate/./src/aux/fe/bulma/button.js?");

/***/ }),

/***/ "./src/aux/fe/bulma/card.js":
/*!**********************************!*\
  !*** ./src/aux/fe/bulma/card.js ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const bulmaCardContent = __webpack_require__(/*! ./cardcontent */ \"./src/aux/fe/bulma/cardcontent.js\");\nconst bulmaCardHeader = __webpack_require__(/*! ./cardheader */ \"./src/aux/fe/bulma/cardheader.js\");\n\nconst bulmaCard = (title, htmlContent) => {\n  if (!htmlContent) {\n    console.error('**bulmaCard** => the parameter htmlContent must be non-null.');\n    return null;\n  }\n  const card = document.createElement('div');\n  card.setAttribute('class', 'card');\n  if (title) {\n    card.appendChild(bulmaCardHeader(title));\n  }\n  card.appendChild(bulmaCardContent(htmlContent));\n  return card;\n}\n\nmodule.exports = bulmaCard;\n\n//# sourceURL=webpack://boilerplate/./src/aux/fe/bulma/card.js?");

/***/ }),

/***/ "./src/aux/fe/bulma/cardcontent.js":
/*!*****************************************!*\
  !*** ./src/aux/fe/bulma/cardcontent.js ***!
  \*****************************************/
/***/ ((module) => {

eval("const bulmaCardContent = (htmlContent) => {\n  if (!htmlContent) {\n    console.error('**bulmaCardHeader** => the parameter htmlContent must be non-null.');\n    return null;\n  }\n  const cardContent = document.createElement('div');\n  cardContent.setAttribute('class', 'card-content');\n  const content = document.createElement('div');\n  content.setAttribute('class', 'content');\n  content.appendChild(htmlContent);\n  cardContent.appendChild(content);\n  return cardContent;\n}\n\nmodule.exports = bulmaCardContent;\n\n//# sourceURL=webpack://boilerplate/./src/aux/fe/bulma/cardcontent.js?");

/***/ }),

/***/ "./src/aux/fe/bulma/cardheader.js":
/*!****************************************!*\
  !*** ./src/aux/fe/bulma/cardheader.js ***!
  \****************************************/
/***/ ((module) => {

eval("const bulmaCardHeader = (title) => {\n  if (!title) {\n    console.error('**bulmaCardHeader** => the parameter title must be non-null.');\n    return null;\n  }\n  const cardHeader = document.createElement('div');\n  cardHeader.setAttribute('class', 'card-header');\n  const cardHeaderTitle = document.createElement('p');\n  cardHeaderTitle.setAttribute('class', 'card-header-title');\n  cardHeaderTitle.innerText = title;\n  cardHeader.appendChild(cardHeaderTitle);\n  return cardHeader;\n}\n\nmodule.exports = bulmaCardHeader;\n\n//# sourceURL=webpack://boilerplate/./src/aux/fe/bulma/cardheader.js?");

/***/ }),

/***/ "./src/aux/fe/bulma/column.js":
/*!************************************!*\
  !*** ./src/aux/fe/bulma/column.js ***!
  \************************************/
/***/ ((module) => {

eval("const bulmaColumn = (size, htmlContent) => {\n  if (!htmlContent) {\n    console.error('**bulmaColumn => the prameter htmlContent must be non-null');\n    return null;\n  }\n  if (size === 0) {\n    console.error('**bulmaColumn => the parameter size must be greater than zero.');\n    return null;\n  }\n  if (size > 12) {\n    console.error('**bulmaColumn => the parameter size must be smaller or equal to 12.');\n    return null;\n  }\n  const column = document.createElement('div');\n  column.setAttribute('class', `column is-${size}`);\n  column.appendChild(htmlContent);\n  return column;\n}\n\nmodule.exports = bulmaColumn;\n\n//# sourceURL=webpack://boilerplate/./src/aux/fe/bulma/column.js?");

/***/ }),

/***/ "./src/aux/fe/bulma/container.js":
/*!***************************************!*\
  !*** ./src/aux/fe/bulma/container.js ***!
  \***************************************/
/***/ ((module) => {

eval("const bulmaContainer = (htmlcontent) => {\n  const cont = document.createElement('div');\n  cont.setAttribute('class', 'container');\n\n  return cont;\n}\n\nmodule.exports = bulmaContainer;\n\n//# sourceURL=webpack://boilerplate/./src/aux/fe/bulma/container.js?");

/***/ }),

/***/ "./src/aux/fe/bulma/hero.js":
/*!**********************************!*\
  !*** ./src/aux/fe/bulma/hero.js ***!
  \**********************************/
/***/ ((module) => {

eval("const bulmaHero = (classesList, htmlContent) => {\n  const hero = document.createElement('section');\n  hero.setAttribute('class', 'hero');\n  classesList.map(cl => {\n    hero.classList.add(`is-${cl}`);\n  })\n  const heroBody = document.createElement('div');\n  heroBody.setAttribute('class', 'hero-body');\n  heroBody.appendChild(htmlContent);\n  hero.appendChild(heroBody);\n  return hero;\n}\n\nmodule.exports = bulmaHero;\n\n//# sourceURL=webpack://boilerplate/./src/aux/fe/bulma/hero.js?");

/***/ }),

/***/ "./src/aux/fe/bulma/level.js":
/*!***********************************!*\
  !*** ./src/aux/fe/bulma/level.js ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const bulmaLevelItem = __webpack_require__(/*! ./levelitem */ \"./src/aux/fe/bulma/levelitem.js\");\n\nconst bulmaLevel = (arrayItems) => {\n  if (!arrayItems) {\n    console.error('**bulmaLevel** => the parameter arrayItems must be non-null.');\n    return null;\n  }\n  if (arrayItems.length === 0) {\n    console.error('**bulmaLevel** => the parameter arrayItems must have at least one element.');\n    return null;\n  }\n  const level = document.createElement('nav');\n  level.setAttribute('class', 'level');\n  arrayItems.map(el => {\n    level.appendChild(bulmaLevelItem(el));\n  })\n  return level;\n}\n\nmodule.exports = bulmaLevel;\n\n\n\n//# sourceURL=webpack://boilerplate/./src/aux/fe/bulma/level.js?");

/***/ }),

/***/ "./src/aux/fe/bulma/levelitem.js":
/*!***************************************!*\
  !*** ./src/aux/fe/bulma/levelitem.js ***!
  \***************************************/
/***/ ((module) => {

eval("const bulmaLevelItem = (htmlContent) => {\n  if (!htmlContent) {\n    console.error('**bulmaLevelItem** => the parameter htmlContent must be non-null.');\n    return null;\n  }\n  const levelItem = document.createElement('div');\n  levelItem.setAttribute('class', 'level-item');\n  levelItem.appendChild(htmlContent);\n  return levelItem;\n}\n\nmodule.exports = bulmaLevelItem;\n\n//# sourceURL=webpack://boilerplate/./src/aux/fe/bulma/levelitem.js?");

/***/ }),

/***/ "./src/aux/fe/bulma/levelleft.js":
/*!***************************************!*\
  !*** ./src/aux/fe/bulma/levelleft.js ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const bulmaLevelItem = __webpack_require__(/*! ./levelitem */ \"./src/aux/fe/bulma/levelitem.js\");\n\nconst bulmaLevelLeft = (arrayItems) => {\n  if (!arrayItems) {\n    console.error('**bulmaLevelLeft** => the parameter arrayItems must be non-null.');\n    return null;\n  }\n  if (arrayItems.length === 0) {\n    console.error('**bulmaLevelLeft** => the parameter arrayItems must have at least one element.');\n    return null;\n  }\n  const levelLeft = document.createElement('div');\n  levelLeft.setAttribute('class','level-left');\n  arrayItems.map(el => {\n    levelLeft.appendChild(bulmaLevelItem(el));\n  })\n  return levelLeft;\n}\n\nmodule.exports = bulmaLevelLeft;\n\n\n\n//# sourceURL=webpack://boilerplate/./src/aux/fe/bulma/levelleft.js?");

/***/ }),

/***/ "./src/aux/fe/bulma/levelright.js":
/*!****************************************!*\
  !*** ./src/aux/fe/bulma/levelright.js ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const bulmaLevelItem = __webpack_require__(/*! ./levelitem */ \"./src/aux/fe/bulma/levelitem.js\");\n\nconst bulmaLevelRight = (arrayItems) => {\n  if (!arrayItems) {\n    console.error('**bulmaLevelRight** => the parameter arrayItems must be non-null.');\n    return null;\n  }\n  if (arrayItems.length === 0) {\n    console.error('**bulmaLevelRight** => the parameter arrayItems must have at least one element.');\n    return null;\n  }\n  const levelRight = document.createElement('div');\n  levelRight.setAttribute('class', 'level-right');\n  arrayItems.map(el => {\n    levelRight.appendChild(bulmaLevelItem(el));\n  })\n  return levelRight;\n}\n\nmodule.exports = bulmaLevelRight;\n\n\n\n//# sourceURL=webpack://boilerplate/./src/aux/fe/bulma/levelright.js?");

/***/ }),

/***/ "./src/aux/fe/bulma/notification.js":
/*!******************************************!*\
  !*** ./src/aux/fe/bulma/notification.js ***!
  \******************************************/
/***/ ((module) => {

eval("const bulmaNotification = (text, tp) => {\n  if (!text) {\n    console.error('**bulmaNotification** => the parameter text must be non-null.');\n    return null;\n  }\n  if (!tp) {\n    console.error('**bulmaNotification** => the parameter tp must be non-null.');\n    return null;\n  }\n  const validTypes = ['danger', 'info', 'warning'];\n  if (!validTypes.includes(tp)) {\n    console.error('**bulmaNotification** => unknown type in paramter tp.');\n    return null;\n  }\n  const notification = document.createElement('div');\n  notification.setAttribute('class', `notification is-${tp}`);\n  notification.innerText = text;\n  return notification;\n}\n\nmodule.exports = bulmaNotification;\n\n//# sourceURL=webpack://boilerplate/./src/aux/fe/bulma/notification.js?");

/***/ }),

/***/ "./src/aux/fe/fillablePageAreas.js":
/*!*****************************************!*\
  !*** ./src/aux/fe/fillablePageAreas.js ***!
  \*****************************************/
/***/ ((module) => {

eval("const fillablePageAreas = () => {\n  const areas = document.getElementsByClassName('fillable');\n  let fillableAreas = {};\n  Array.from(areas).map(area => {\n    if (area.hasAttribute('id')) {\n      fillableAreas[area.getAttribute('id')] = area;\n    } else {\n      console.error('Area ', area, ' is marked fillable but has no ID attribute.');\n    }\n  })\n  return fillableAreas;\n}\n\nmodule.exports = fillablePageAreas;\n\n//# sourceURL=webpack://boilerplate/./src/aux/fe/fillablePageAreas.js?");

/***/ }),

/***/ "./src/behaviors/teste.js":
/*!********************************!*\
  !*** ./src/behaviors/teste.js ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const bulma = __webpack_require__(/*! ../aux/fe/bulma/bulma */ \"./src/aux/fe/bulma/bulma.js\");\nconst fillablePageAreas = __webpack_require__(/*! ../aux/fe/fillablePageAreas */ \"./src/aux/fe/fillablePageAreas.js\");\n\nconst Teste = {\n\n\tpageAreas: fillablePageAreas(),\n\n\trun: function () {\n\t\tconsole.log(this.pageAreas);\n\t}\n\n}\n\nTeste.run();\n\nmodule.exports = Teste;\n\n\n//# sourceURL=webpack://boilerplate/./src/behaviors/teste.js?");

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
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/behaviors/teste.js");
/******/ 	
/******/ })()
;
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! fonts/Radio_Canada/RadioCanada-VariableFont_wdth,wght.ttf */ "./src/fonts/Radio_Canada/RadioCanada-VariableFont_wdth,wght.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! images/croissant.jpg */ "./src/images/croissant.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! images/dessert.jpg */ "./src/images/dessert.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! images/meat.jpg */ "./src/images/meat.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n    font-family: mainFont;\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n}\n\nbody {\n    font-family: mainFont;\n    margin: 0;\n    padding: 0;\n    width: 100vw;\n    max-width: 100%;\n    min-height: 100vh;\n}\n\n#content {\n    display: flex;\n    flex-direction: column;\n    position: relative;\n    min-height: inherit;\n    height: 100%;\n}\n\n/* header ===============================================*/\n#tab {\n    height: 50px;\n    width: 100vw;\n    position: fixed;\n    top: 0px;\n    display: flex;\n    justify-content: center;\n}\n\n.tab {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    width: 200px;\n    border: 3px solid rgb(0, 0, 0);\n    border-radius: 2px;\n    font-weight: 600;\n    margin: 5px 5px;\n    background-color: #e9c793;\n    cursor: default;\n    color: rgb(0, 0, 0);\n    user-select: none;\n}\n\n.tab:hover {\n    background-color: #c41616;\n    color: white;\n    transition: .5s background-color;\n}\n\n.tab:active {\n    background-color: #500a0a;\n}\n\n/* footer ===================*/\n#footer {\n    height: 100px;\n    background-color: #e9c793;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    font-weight: 200;\n    color: #e6951b;\n}\n\n/* home page ===============================================*/\n.home {\n    display: flex;\n    flex-direction: column;\n    padding: 100px 0;\n}\n\n.homeContent {\n    display: grid;\n    grid-template-columns: repeat(10, 1fr);\n    grid-template-rows: fit-content(50px) fit-content(150px) 1fr;\n    row-gap: 20px;\n}\n\n.headline {\n    align-self: center;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n\n    font-weight: 900;\n    font-size: 32px;\n    border: 4px solid black;\n    color: black;\n    height: 50px;\n    margin-bottom: 50px;\n    width: 11em;\n}\n\n.aboutTitle {\n    grid-row: 2/4;\n    grid-column: 2/3;\n    background: #ebd6b6c5;\n    border-right: 1px solid rgba(128, 128, 128, 0.267);\n    border-radius: 5px 0 0 5px;\n    padding: 20px;\n    font-weight: 100;\n}\n\n.aboutText {\n    display: flex;\n    align-items: start;\n    grid-row: 2/4;\n    grid-column: 3/6;\n    background: #ebd6b6c5;\n    border-radius: 0 5px 5px 0;\n    padding: 20px;\n    font-size: large;\n    font-weight: 200;\n}\n\n.locationTitle {\n    grid-row: 4/5;\n    grid-column: 2/3;\n    background: #ebd6b6c5;\n    border-right: 1px solid rgba(128, 128, 128, 0.267);\n    border-radius: 5px 0 0 5px;\n    padding: 20px;\n    font-weight: 100;\n}\n\n.locationText {\n    display: flex;\n    align-items: start;\n    grid-row: 4/5;\n    grid-column: 3/6;\n    background: #ebd6b6c5;\n    border-radius: 0 5px 5px 0;\n    padding: 20px;\n    font-size: large;\n    font-weight: 200;\n}\n\n.hoursTitle {\n    grid-row: 2/3;\n    grid-column: 7/9;\n    background: #ebd6b6c5;\n    border-bottom: 1px solid rgba(128, 128, 128, 0.267);\n    border-radius: 5px 5px 0 0;\n    padding: 20px;\n    font-weight: 100;\n    margin-bottom: -20px;\n}\n\n.hoursText {\n    display: flex;\n    align-items: start;\n    grid-row: 3/5;\n    grid-column: 7/9;\n    background: #ebd6b6c5;\n    border-radius: 0 0 5px 5px;\n    padding: 20px;\n    font-size: large;\n    font-weight: 200;\n    white-space: pre-line;\n}\n\n.backgroundImage {\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n    background-size: cover;\n    height: 100%;\n    width: 100%;\n    z-index: -2;\n    position: absolute;\n    top: 0;\n}\n\n/* Menu page ====================================================*/\n.menuContent {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    flex-direction: column;\n}\n\n.menuTitle {\n    display: flex;\n    justify-content: center;\n    background: #ebd6b6c5;\n    border-bottom: 1px solid rgba(128, 128, 128, 0.267);\n    border-radius: 5px 5px 0 0;\n    padding: 20px;\n    font-weight: 100;\n    width: 600px;\n}\n\n.menuText {\n    display: flex;\n    align-items: start;\n    background: #ebd6b6c5;\n    border-radius: 0 0 5px 5px;\n    padding: 20px;\n    font-size: large;\n    font-weight: 200;\n    white-space: pre-line;\n    width: 600px;\n}\n\n.backgroundImageMenu {\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n    background-size: cover;\n    height: 100%;\n    width: 100%;\n    z-index: -2;\n    position: absolute;\n    top: 0;\n}\n\n/* Contact page ====================================================*/\n.contactContent {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    flex-direction: column;\n}\n\n.contactTitle {\n    display: flex;\n    justify-content: center;\n    background: #ebd6b6c5;\n    border-bottom: 1px solid rgba(128, 128, 128, 0.267);\n    border-radius: 5px 5px 0 0;\n    padding: 20px;\n    font-weight: 100;\n    width: 600px;\n}\n\n.contactText {\n    display: flex;\n    align-items: start;\n    background: #ebd6b6c5;\n    border-radius: 0 0 5px 5px;\n    padding: 20px;\n    font-size: large;\n    font-weight: 200;\n    white-space: pre-line;\n    width: 600px;\n}\n\n.backgroundImageContact {\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ");\n    background-size: cover;\n    height: 100%;\n    width: 100%;\n    z-index: -2;\n    position: absolute;\n    top: 0;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@font-face {\n    font-family: mainFont;\n    src: url(fonts/Radio_Canada/RadioCanada-VariableFont_wdth\\,wght.ttf);\n}\n\nbody {\n    font-family: mainFont;\n    margin: 0;\n    padding: 0;\n    width: 100vw;\n    max-width: 100%;\n    min-height: 100vh;\n}\n\n#content {\n    display: flex;\n    flex-direction: column;\n    position: relative;\n    min-height: inherit;\n    height: 100%;\n}\n\n/* header ===============================================*/\n#tab {\n    height: 50px;\n    width: 100vw;\n    position: fixed;\n    top: 0px;\n    display: flex;\n    justify-content: center;\n}\n\n.tab {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    width: 200px;\n    border: 3px solid rgb(0, 0, 0);\n    border-radius: 2px;\n    font-weight: 600;\n    margin: 5px 5px;\n    background-color: #e9c793;\n    cursor: default;\n    color: rgb(0, 0, 0);\n    user-select: none;\n}\n\n.tab:hover {\n    background-color: #c41616;\n    color: white;\n    transition: .5s background-color;\n}\n\n.tab:active {\n    background-color: #500a0a;\n}\n\n/* footer ===================*/\n#footer {\n    height: 100px;\n    background-color: #e9c793;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    font-weight: 200;\n    color: #e6951b;\n}\n\n/* home page ===============================================*/\n.home {\n    display: flex;\n    flex-direction: column;\n    padding: 100px 0;\n}\n\n.homeContent {\n    display: grid;\n    grid-template-columns: repeat(10, 1fr);\n    grid-template-rows: fit-content(50px) fit-content(150px) 1fr;\n    row-gap: 20px;\n}\n\n.headline {\n    align-self: center;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n\n    font-weight: 900;\n    font-size: 32px;\n    border: 4px solid black;\n    color: black;\n    height: 50px;\n    margin-bottom: 50px;\n    width: 11em;\n}\n\n.aboutTitle {\n    grid-row: 2/4;\n    grid-column: 2/3;\n    background: #ebd6b6c5;\n    border-right: 1px solid rgba(128, 128, 128, 0.267);\n    border-radius: 5px 0 0 5px;\n    padding: 20px;\n    font-weight: 100;\n}\n\n.aboutText {\n    display: flex;\n    align-items: start;\n    grid-row: 2/4;\n    grid-column: 3/6;\n    background: #ebd6b6c5;\n    border-radius: 0 5px 5px 0;\n    padding: 20px;\n    font-size: large;\n    font-weight: 200;\n}\n\n.locationTitle {\n    grid-row: 4/5;\n    grid-column: 2/3;\n    background: #ebd6b6c5;\n    border-right: 1px solid rgba(128, 128, 128, 0.267);\n    border-radius: 5px 0 0 5px;\n    padding: 20px;\n    font-weight: 100;\n}\n\n.locationText {\n    display: flex;\n    align-items: start;\n    grid-row: 4/5;\n    grid-column: 3/6;\n    background: #ebd6b6c5;\n    border-radius: 0 5px 5px 0;\n    padding: 20px;\n    font-size: large;\n    font-weight: 200;\n}\n\n.hoursTitle {\n    grid-row: 2/3;\n    grid-column: 7/9;\n    background: #ebd6b6c5;\n    border-bottom: 1px solid rgba(128, 128, 128, 0.267);\n    border-radius: 5px 5px 0 0;\n    padding: 20px;\n    font-weight: 100;\n    margin-bottom: -20px;\n}\n\n.hoursText {\n    display: flex;\n    align-items: start;\n    grid-row: 3/5;\n    grid-column: 7/9;\n    background: #ebd6b6c5;\n    border-radius: 0 0 5px 5px;\n    padding: 20px;\n    font-size: large;\n    font-weight: 200;\n    white-space: pre-line;\n}\n\n.backgroundImage {\n    background-image: url(images/croissant.jpg);\n    background-size: cover;\n    height: 100%;\n    width: 100%;\n    z-index: -2;\n    position: absolute;\n    top: 0;\n}\n\n/* Menu page ====================================================*/\n.menuContent {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    flex-direction: column;\n}\n\n.menuTitle {\n    display: flex;\n    justify-content: center;\n    background: #ebd6b6c5;\n    border-bottom: 1px solid rgba(128, 128, 128, 0.267);\n    border-radius: 5px 5px 0 0;\n    padding: 20px;\n    font-weight: 100;\n    width: 600px;\n}\n\n.menuText {\n    display: flex;\n    align-items: start;\n    background: #ebd6b6c5;\n    border-radius: 0 0 5px 5px;\n    padding: 20px;\n    font-size: large;\n    font-weight: 200;\n    white-space: pre-line;\n    width: 600px;\n}\n\n.backgroundImageMenu {\n    background-image: url(images/dessert.jpg);\n    background-size: cover;\n    height: 100%;\n    width: 100%;\n    z-index: -2;\n    position: absolute;\n    top: 0;\n}\n\n/* Contact page ====================================================*/\n.contactContent {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    flex-direction: column;\n}\n\n.contactTitle {\n    display: flex;\n    justify-content: center;\n    background: #ebd6b6c5;\n    border-bottom: 1px solid rgba(128, 128, 128, 0.267);\n    border-radius: 5px 5px 0 0;\n    padding: 20px;\n    font-weight: 100;\n    width: 600px;\n}\n\n.contactText {\n    display: flex;\n    align-items: start;\n    background: #ebd6b6c5;\n    border-radius: 0 0 5px 5px;\n    padding: 20px;\n    font-size: large;\n    font-weight: 200;\n    white-space: pre-line;\n    width: 600px;\n}\n\n.backgroundImageContact {\n    background-image: url(images/meat.jpg);\n    background-size: cover;\n    height: 100%;\n    width: 100%;\n    z-index: -2;\n    position: absolute;\n    top: 0;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/contactPage.js":
/*!****************************!*\
  !*** ./src/contactPage.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function homePage() {
    //home div--parent
    const home = document.createElement("div");
    home.classList.add("home");

    //headline
    const headline = document.createElement("div");
    headline.classList.add("headline");
    headline.textContent = "Contact";

    //content div--2nd parent
    const contactContent = document.createElement("div");
    contactContent.classList.add("contactContent");
    //contact--title
    const contactTitle = document.createElement("div");
    contactTitle.classList.add("contactTitle");
    contactTitle.textContent = "Contact us";


    //contact--text
    const contactText = document.createElement("div");
    contactText.classList.add("contactText");
    contactText.textContent = `
    Phone: \r\t ***-658-68487\r\n\r\n
    Email: \r\t cane@gmail.com\r\n\r\n
    Post: \r\t Dropbox 2584 NY City\r\n\r\n
    `;

    //background--3rd child
    const backgroundImage = document.createElement("div");
    backgroundImage.classList.add("backgroundImageContact");

    home.appendChild(headline);
    home.appendChild(contactContent);
    contactContent.appendChild(contactTitle);
    contactContent.appendChild(contactText);
    home.appendChild(backgroundImage);

    return home;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (homePage);

/***/ }),

/***/ "./src/homePage.js":
/*!*************************!*\
  !*** ./src/homePage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function homePage() {
    //home div--parent
    const home = document.createElement("div");
    home.classList.add("home");

    //headline
    const headline = document.createElement("div");
    headline.classList.add("headline");
    headline.textContent = "La Cane Restaurant";

    //content div--2nd parent
    const homeContent = document.createElement("div");
    homeContent.classList.add("homeContent");
    //about--title
    const aboutTitle = document.createElement("div");
    aboutTitle.classList.add("aboutTitle");
    aboutTitle.textContent = "About us";


    //about--text
    const aboutText = document.createElement("div");
    aboutText.classList.add("aboutText");
    aboutText.textContent = `*********** is the story of the ***** family, and it is based on love and collaboration within the family.
    The restaurant is a gourmet's dream come true.
    Its origins may be traced back to the year ****, when ******** ***** returned to ******* after 5 years abroad and obtained great knowledge.
    *** Restaurant was the first ******* restaurant to be named to the World's 50 Best Restaurants, thanks to its chef ***********. `;

    //location--title
    const locationTitle = document.createElement("div");
    locationTitle.classList.add("locationTitle");
    locationTitle.textContent = "Location";

    //location--text
    const locationText = document.createElement("div");
    locationText.classList.add("locationText");
    locationText.textContent = `123 Lake Drive, Lakeville, Amongus`;

    //hours--title
    const hoursTitle = document.createElement("div");
    hoursTitle.classList.add("hoursTitle");
    hoursTitle.textContent = "Hours";


    //hours--text
    const hoursText = document.createElement("div");
    hoursText.classList.add("hoursText");
    hoursText.textContent = `
    Sunday: 8am - 8pm\r\n
    Monday: 6am - 6pm\r\n
    Tuesday: 6am - 6pm\r\n
    Wednesday: 6am - 6pm\r\n
    Thursday: 6am - 10pm\r\n
    Friday: 6am - 10pm\r\n
    Saturday: 8am - 10pm`;

    //background--3rd child
    const backgroundImage = document.createElement("div");
    backgroundImage.classList.add("backgroundImage");

    home.appendChild(headline);
    home.appendChild(homeContent);
    homeContent.appendChild(aboutTitle);
    homeContent.appendChild(aboutText);
    homeContent.appendChild(hoursTitle);
    homeContent.appendChild(hoursText);
    homeContent.appendChild(locationTitle);
    homeContent.appendChild(locationText);
    home.appendChild(backgroundImage);

    return home;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (homePage);

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
function homePage() {
    //home div--parent
    const home = document.createElement("div");
    home.classList.add("home");

    //headline
    const headline = document.createElement("div");
    headline.classList.add("headline");
    headline.textContent = "Menu";

    //content div--2nd parent
    const menuContent = document.createElement("div");
    menuContent.classList.add("menuContent");
    //menu--title
    const menuTitle = document.createElement("div");
    menuTitle.classList.add("menuTitle");
    menuTitle.textContent = "The Steuben";


    //menu--text
    const menuText = document.createElement("div");
    menuText.classList.add("menuText");
    menuText.textContent = `
    massaged bison pie    $14\r\n
    farm-to-table fig extract with hazelnuts    $15\r\n
    invigorated shell bean, booze & locally-sourced ham frittata    $12\r\n
    rye pate    $16\r\n
    sea-salt artichoke bombs, chorizo & lamb    $18\r\n
    rubbed anchovy surprise    $13\r\n
    awakened orecchiette with burnt ramp    $17\r\n
    pepper    $11\r\n
    crafted fennel reduction & kale salad    $14\r\n
    quickened marrow    $14\r\n
    `;

    //background--3rd child
    const backgroundImage = document.createElement("div");
    backgroundImage.classList.add("backgroundImageMenu");

    home.appendChild(headline);
    home.appendChild(menuContent);
    menuContent.appendChild(menuTitle);
    menuContent.appendChild(menuText);
    home.appendChild(backgroundImage);

    return home;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (homePage);

/***/ }),

/***/ "./src/fonts/Radio_Canada/RadioCanada-VariableFont_wdth,wght.ttf":
/*!***********************************************************************!*\
  !*** ./src/fonts/Radio_Canada/RadioCanada-VariableFont_wdth,wght.ttf ***!
  \***********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b4838e31a8012d3c4845.ttf";

/***/ }),

/***/ "./src/images/croissant.jpg":
/*!**********************************!*\
  !*** ./src/images/croissant.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "23e549ce6057b4416c31.jpg";

/***/ }),

/***/ "./src/images/dessert.jpg":
/*!********************************!*\
  !*** ./src/images/dessert.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ff5eaf1f98e8df8a4879.jpg";

/***/ }),

/***/ "./src/images/meat.jpg":
/*!*****************************!*\
  !*** ./src/images/meat.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d45e391bb39a5a91f833.jpg";

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
/******/ 			id: moduleId,
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
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
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _homePage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./homePage */ "./src/homePage.js");
/* harmony import */ var _menuPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menuPage */ "./src/menuPage.js");
/* harmony import */ var _contactPage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contactPage */ "./src/contactPage.js");




const mainPage = (() => {
    //tab object 
    const tabObject = {
        home: (0,_homePage__WEBPACK_IMPORTED_MODULE_1__["default"])(),
        menu: (0,_menuPage__WEBPACK_IMPORTED_MODULE_2__["default"])(),
        contact: (0,_contactPage__WEBPACK_IMPORTED_MODULE_3__["default"])()
    };
    //content div
    const contentDiv = document.createElement("div");
    contentDiv.setAttribute("id", "content");

    //tab div
    const tabDiv = document.createElement("div");
    tabDiv.setAttribute("id", "tab");

    //home tab
    const homeTab = document.createElement("div");
    homeTab.classList.add("tab");
    homeTab.textContent = "Home";

    //menu tab
    const menuTab = document.createElement("div");
    menuTab.classList.add("tab");
    menuTab.textContent = "Menu";

    //contact tab
    const contactTab = document.createElement("div");
    contactTab.classList.add("tab");
    contactTab.textContent = "Contact";

    //footer
    const footer = document.createElement("div");
    footer.setAttribute("id", "footer");
    footer.textContent = "Copyright © 2022 Reda";

    document.body.appendChild(contentDiv);
    contentDiv.appendChild(tabDiv);
    tabDiv.appendChild(homeTab);
    tabDiv.appendChild(menuTab);
    tabDiv.appendChild(contactTab);
    contentDiv.appendChild(tabObject.home);
    contentDiv.appendChild(footer);
    //navigation listeners
    document.querySelectorAll(".tab").forEach((tab) => {
        tab.addEventListener("click", () => {
            contentDiv.removeChild(document.querySelector(".home"));
            contentDiv.removeChild(document.getElementById("footer"));
            contentDiv.appendChild(tabObject[tab.textContent.toLowerCase()]);
            contentDiv.appendChild(footer);
        });
    });
})();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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T0FBTyxnRkFBZ0YsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLE9BQU8sWUFBWSxNQUFNLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxZQUFZLE1BQU0sVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxPQUFPLFlBQVksTUFBTSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksY0FBYyxhQUFhLFdBQVcsWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksV0FBVyxNQUFNLFlBQVksTUFBTSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FB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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxpRUFBZSxRQUFROzs7Ozs7Ozs7Ozs7OztBQ3ZFdkI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsaUVBQWUsUUFBUTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQy9DdkI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOzs7OztXQ3pCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NmQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7Ozs7Ozs7Ozs7OztBQ3JCcUI7QUFDYTtBQUNBO0FBQ007QUFDeEM7QUFDQTtBQUNBO0FBQ0EsY0FBYyxxREFBUTtBQUN0QixjQUFjLHFEQUFRO0FBQ3RCLGlCQUFpQix3REFBVztBQUM1QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxLQUFLO0FBQ0wsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9jb250YWN0UGFnZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaG9tZVBhZ2UuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21lbnVQYWdlLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiZm9udHMvUmFkaW9fQ2FuYWRhL1JhZGlvQ2FuYWRhLVZhcmlhYmxlRm9udF93ZHRoLHdnaHQudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiaW1hZ2VzL2Nyb2lzc2FudC5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyA9IG5ldyBVUkwoXCJpbWFnZXMvZGVzc2VydC5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyA9IG5ldyBVUkwoXCJpbWFnZXMvbWVhdC5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6IG1haW5Gb250O1xcbiAgICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxufVxcblxcbmJvZHkge1xcbiAgICBmb250LWZhbWlseTogbWFpbkZvbnQ7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBtYXgtd2lkdGg6IDEwMCU7XFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG4jY29udGVudCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgbWluLWhlaWdodDogaW5oZXJpdDtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4vKiBoZWFkZXIgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xcbiN0YWIge1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB0b3A6IDBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi50YWIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDIwMHB4O1xcbiAgICBib3JkZXI6IDNweCBzb2xpZCByZ2IoMCwgMCwgMCk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgbWFyZ2luOiA1cHggNXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTljNzkzO1xcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XFxuICAgIGNvbG9yOiByZ2IoMCwgMCwgMCk7XFxuICAgIHVzZXItc2VsZWN0OiBub25lO1xcbn1cXG5cXG4udGFiOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2M0MTYxNjtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICB0cmFuc2l0aW9uOiAuNXMgYmFja2dyb3VuZC1jb2xvcjtcXG59XFxuXFxuLnRhYjphY3RpdmUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTAwYTBhO1xcbn1cXG5cXG4vKiBmb290ZXIgPT09PT09PT09PT09PT09PT09PSovXFxuI2Zvb3RlciB7XFxuICAgIGhlaWdodDogMTAwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlOWM3OTM7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBmb250LXdlaWdodDogMjAwO1xcbiAgICBjb2xvcjogI2U2OTUxYjtcXG59XFxuXFxuLyogaG9tZSBwYWdlID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cXG4uaG9tZSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHBhZGRpbmc6IDEwMHB4IDA7XFxufVxcblxcbi5ob21lQ29udGVudCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGZpdC1jb250ZW50KDUwcHgpIGZpdC1jb250ZW50KDE1MHB4KSAxZnI7XFxuICAgIHJvdy1nYXA6IDIwcHg7XFxufVxcblxcbi5oZWFkbGluZSB7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XFxuICAgIGZvbnQtc2l6ZTogMzJweDtcXG4gICAgYm9yZGVyOiA0cHggc29saWQgYmxhY2s7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xcbiAgICB3aWR0aDogMTFlbTtcXG59XFxuXFxuLmFib3V0VGl0bGUge1xcbiAgICBncmlkLXJvdzogMi80O1xcbiAgICBncmlkLWNvbHVtbjogMi8zO1xcbiAgICBiYWNrZ3JvdW5kOiAjZWJkNmI2YzU7XFxuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHJnYmEoMTI4LCAxMjgsIDEyOCwgMC4yNjcpO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHggMCAwIDVweDtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgZm9udC13ZWlnaHQ6IDEwMDtcXG59XFxuXFxuLmFib3V0VGV4dCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBzdGFydDtcXG4gICAgZ3JpZC1yb3c6IDIvNDtcXG4gICAgZ3JpZC1jb2x1bW46IDMvNjtcXG4gICAgYmFja2dyb3VuZDogI2ViZDZiNmM1O1xcbiAgICBib3JkZXItcmFkaXVzOiAwIDVweCA1cHggMDtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgZm9udC1zaXplOiBsYXJnZTtcXG4gICAgZm9udC13ZWlnaHQ6IDIwMDtcXG59XFxuXFxuLmxvY2F0aW9uVGl0bGUge1xcbiAgICBncmlkLXJvdzogNC81O1xcbiAgICBncmlkLWNvbHVtbjogMi8zO1xcbiAgICBiYWNrZ3JvdW5kOiAjZWJkNmI2YzU7XFxuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHJnYmEoMTI4LCAxMjgsIDEyOCwgMC4yNjcpO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHggMCAwIDVweDtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgZm9udC13ZWlnaHQ6IDEwMDtcXG59XFxuXFxuLmxvY2F0aW9uVGV4dCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBzdGFydDtcXG4gICAgZ3JpZC1yb3c6IDQvNTtcXG4gICAgZ3JpZC1jb2x1bW46IDMvNjtcXG4gICAgYmFja2dyb3VuZDogI2ViZDZiNmM1O1xcbiAgICBib3JkZXItcmFkaXVzOiAwIDVweCA1cHggMDtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgZm9udC1zaXplOiBsYXJnZTtcXG4gICAgZm9udC13ZWlnaHQ6IDIwMDtcXG59XFxuXFxuLmhvdXJzVGl0bGUge1xcbiAgICBncmlkLXJvdzogMi8zO1xcbiAgICBncmlkLWNvbHVtbjogNy85O1xcbiAgICBiYWNrZ3JvdW5kOiAjZWJkNmI2YzU7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDEyOCwgMTI4LCAxMjgsIDAuMjY3KTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4IDVweCAwIDA7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XFxuICAgIG1hcmdpbi1ib3R0b206IC0yMHB4O1xcbn1cXG5cXG4uaG91cnNUZXh0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IHN0YXJ0O1xcbiAgICBncmlkLXJvdzogMy81O1xcbiAgICBncmlkLWNvbHVtbjogNy85O1xcbiAgICBiYWNrZ3JvdW5kOiAjZWJkNmI2YzU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDAgMCA1cHggNXB4O1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBmb250LXNpemU6IGxhcmdlO1xcbiAgICBmb250LXdlaWdodDogMjAwO1xcbiAgICB3aGl0ZS1zcGFjZTogcHJlLWxpbmU7XFxufVxcblxcbi5iYWNrZ3JvdW5kSW1hZ2Uge1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICB6LWluZGV4OiAtMjtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDA7XFxufVxcblxcbi8qIE1lbnUgcGFnZSA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cXG4ubWVudUNvbnRlbnQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLm1lbnVUaXRsZSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kOiAjZWJkNmI2YzU7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDEyOCwgMTI4LCAxMjgsIDAuMjY3KTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4IDVweCAwIDA7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XFxuICAgIHdpZHRoOiA2MDBweDtcXG59XFxuXFxuLm1lbnVUZXh0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IHN0YXJ0O1xcbiAgICBiYWNrZ3JvdW5kOiAjZWJkNmI2YzU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDAgMCA1cHggNXB4O1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBmb250LXNpemU6IGxhcmdlO1xcbiAgICBmb250LXdlaWdodDogMjAwO1xcbiAgICB3aGl0ZS1zcGFjZTogcHJlLWxpbmU7XFxuICAgIHdpZHRoOiA2MDBweDtcXG59XFxuXFxuLmJhY2tncm91bmRJbWFnZU1lbnUge1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fICsgXCIpO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICB6LWluZGV4OiAtMjtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDA7XFxufVxcblxcbi8qIENvbnRhY3QgcGFnZSA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cXG4uY29udGFjdENvbnRlbnQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLmNvbnRhY3RUaXRsZSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kOiAjZWJkNmI2YzU7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDEyOCwgMTI4LCAxMjgsIDAuMjY3KTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4IDVweCAwIDA7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XFxuICAgIHdpZHRoOiA2MDBweDtcXG59XFxuXFxuLmNvbnRhY3RUZXh0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IHN0YXJ0O1xcbiAgICBiYWNrZ3JvdW5kOiAjZWJkNmI2YzU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDAgMCA1cHggNXB4O1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBmb250LXNpemU6IGxhcmdlO1xcbiAgICBmb250LXdlaWdodDogMjAwO1xcbiAgICB3aGl0ZS1zcGFjZTogcHJlLWxpbmU7XFxuICAgIHdpZHRoOiA2MDBweDtcXG59XFxuXFxuLmJhY2tncm91bmRJbWFnZUNvbnRhY3Qge1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fICsgXCIpO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICB6LWluZGV4OiAtMjtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDA7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxxQkFBcUI7SUFDckIsNENBQW9FO0FBQ3hFOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLFNBQVM7SUFDVCxVQUFVO0lBQ1YsWUFBWTtJQUNaLGVBQWU7SUFDZixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsWUFBWTtBQUNoQjs7QUFFQSwwREFBMEQ7QUFDMUQ7SUFDSSxZQUFZO0lBQ1osWUFBWTtJQUNaLGVBQWU7SUFDZixRQUFRO0lBQ1IsYUFBYTtJQUNiLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWiw4QkFBOEI7SUFDOUIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YseUJBQXlCO0lBQ3pCLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixnQ0FBZ0M7QUFDcEM7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUEsOEJBQThCO0FBQzlCO0lBQ0ksYUFBYTtJQUNiLHlCQUF5QjtJQUN6QixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixnQkFBZ0I7SUFDaEIsY0FBYztBQUNsQjs7QUFFQSw2REFBNkQ7QUFDN0Q7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQ0FBc0M7SUFDdEMsNERBQTREO0lBQzVELGFBQWE7QUFDakI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7O0lBRW5CLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIscUJBQXFCO0lBQ3JCLGtEQUFrRDtJQUNsRCwwQkFBMEI7SUFDMUIsYUFBYTtJQUNiLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixxQkFBcUI7SUFDckIsMEJBQTBCO0lBQzFCLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixxQkFBcUI7SUFDckIsa0RBQWtEO0lBQ2xELDBCQUEwQjtJQUMxQixhQUFhO0lBQ2IsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLHFCQUFxQjtJQUNyQiwwQkFBMEI7SUFDMUIsYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLHFCQUFxQjtJQUNyQixtREFBbUQ7SUFDbkQsMEJBQTBCO0lBQzFCLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLHFCQUFxQjtJQUNyQiwwQkFBMEI7SUFDMUIsYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0kseURBQTJDO0lBQzNDLHNCQUFzQjtJQUN0QixZQUFZO0lBQ1osV0FBVztJQUNYLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsTUFBTTtBQUNWOztBQUVBLGtFQUFrRTtBQUNsRTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIscUJBQXFCO0lBQ3JCLG1EQUFtRDtJQUNuRCwwQkFBMEI7SUFDMUIsYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIsMEJBQTBCO0lBQzFCLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLHFCQUFxQjtJQUNyQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0kseURBQXlDO0lBQ3pDLHNCQUFzQjtJQUN0QixZQUFZO0lBQ1osV0FBVztJQUNYLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsTUFBTTtBQUNWOztBQUVBLHFFQUFxRTtBQUNyRTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIscUJBQXFCO0lBQ3JCLG1EQUFtRDtJQUNuRCwwQkFBMEI7SUFDMUIsYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIsMEJBQTBCO0lBQzFCLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLHFCQUFxQjtJQUNyQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0kseURBQXNDO0lBQ3RDLHNCQUFzQjtJQUN0QixZQUFZO0lBQ1osV0FBVztJQUNYLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsTUFBTTtBQUNWXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogbWFpbkZvbnQ7XFxuICAgIHNyYzogdXJsKGZvbnRzL1JhZGlvX0NhbmFkYS9SYWRpb0NhbmFkYS1WYXJpYWJsZUZvbnRfd2R0aFxcXFwsd2dodC50dGYpO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgZm9udC1mYW1pbHk6IG1haW5Gb250O1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXG59XFxuXFxuI2NvbnRlbnQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIG1pbi1oZWlnaHQ6IGluaGVyaXQ7XFxuICAgIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLyogaGVhZGVyID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cXG4jdGFiIHtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgdG9wOiAwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4udGFiIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHdpZHRoOiAyMDBweDtcXG4gICAgYm9yZGVyOiAzcHggc29saWQgcmdiKDAsIDAsIDApO1xcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIG1hcmdpbjogNXB4IDVweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U5Yzc5MztcXG4gICAgY3Vyc29yOiBkZWZhdWx0O1xcbiAgICBjb2xvcjogcmdiKDAsIDAsIDApO1xcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG59XFxuXFxuLnRhYjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjNDE2MTY7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgdHJhbnNpdGlvbjogLjVzIGJhY2tncm91bmQtY29sb3I7XFxufVxcblxcbi50YWI6YWN0aXZlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzUwMGEwYTtcXG59XFxuXFxuLyogZm9vdGVyID09PT09PT09PT09PT09PT09PT0qL1xcbiNmb290ZXIge1xcbiAgICBoZWlnaHQ6IDEwMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTljNzkzO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZm9udC13ZWlnaHQ6IDIwMDtcXG4gICAgY29sb3I6ICNlNjk1MWI7XFxufVxcblxcbi8qIGhvbWUgcGFnZSA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXFxuLmhvbWUge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBwYWRkaW5nOiAxMDBweCAwO1xcbn1cXG5cXG4uaG9tZUNvbnRlbnQge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBmaXQtY29udGVudCg1MHB4KSBmaXQtY29udGVudCgxNTBweCkgMWZyO1xcbiAgICByb3ctZ2FwOiAyMHB4O1xcbn1cXG5cXG4uaGVhZGxpbmUge1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbiAgICBmb250LXdlaWdodDogOTAwO1xcbiAgICBmb250LXNpemU6IDMycHg7XFxuICAgIGJvcmRlcjogNHB4IHNvbGlkIGJsYWNrO1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIGhlaWdodDogNTBweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogNTBweDtcXG4gICAgd2lkdGg6IDExZW07XFxufVxcblxcbi5hYm91dFRpdGxlIHtcXG4gICAgZ3JpZC1yb3c6IDIvNDtcXG4gICAgZ3JpZC1jb2x1bW46IDIvMztcXG4gICAgYmFja2dyb3VuZDogI2ViZDZiNmM1O1xcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCByZ2JhKDEyOCwgMTI4LCAxMjgsIDAuMjY3KTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4IDAgMCA1cHg7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XFxufVxcblxcbi5hYm91dFRleHQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogc3RhcnQ7XFxuICAgIGdyaWQtcm93OiAyLzQ7XFxuICAgIGdyaWQtY29sdW1uOiAzLzY7XFxuICAgIGJhY2tncm91bmQ6ICNlYmQ2YjZjNTtcXG4gICAgYm9yZGVyLXJhZGl1czogMCA1cHggNXB4IDA7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XFxuICAgIGZvbnQtd2VpZ2h0OiAyMDA7XFxufVxcblxcbi5sb2NhdGlvblRpdGxlIHtcXG4gICAgZ3JpZC1yb3c6IDQvNTtcXG4gICAgZ3JpZC1jb2x1bW46IDIvMztcXG4gICAgYmFja2dyb3VuZDogI2ViZDZiNmM1O1xcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCByZ2JhKDEyOCwgMTI4LCAxMjgsIDAuMjY3KTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4IDAgMCA1cHg7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XFxufVxcblxcbi5sb2NhdGlvblRleHQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogc3RhcnQ7XFxuICAgIGdyaWQtcm93OiA0LzU7XFxuICAgIGdyaWQtY29sdW1uOiAzLzY7XFxuICAgIGJhY2tncm91bmQ6ICNlYmQ2YjZjNTtcXG4gICAgYm9yZGVyLXJhZGl1czogMCA1cHggNXB4IDA7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XFxuICAgIGZvbnQtd2VpZ2h0OiAyMDA7XFxufVxcblxcbi5ob3Vyc1RpdGxlIHtcXG4gICAgZ3JpZC1yb3c6IDIvMztcXG4gICAgZ3JpZC1jb2x1bW46IDcvOTtcXG4gICAgYmFja2dyb3VuZDogI2ViZDZiNmM1O1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgxMjgsIDEyOCwgMTI4LCAwLjI2Nyk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweCA1cHggMCAwO1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBmb250LXdlaWdodDogMTAwO1xcbiAgICBtYXJnaW4tYm90dG9tOiAtMjBweDtcXG59XFxuXFxuLmhvdXJzVGV4dCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBzdGFydDtcXG4gICAgZ3JpZC1yb3c6IDMvNTtcXG4gICAgZ3JpZC1jb2x1bW46IDcvOTtcXG4gICAgYmFja2dyb3VuZDogI2ViZDZiNmM1O1xcbiAgICBib3JkZXItcmFkaXVzOiAwIDAgNXB4IDVweDtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgZm9udC1zaXplOiBsYXJnZTtcXG4gICAgZm9udC13ZWlnaHQ6IDIwMDtcXG4gICAgd2hpdGUtc3BhY2U6IHByZS1saW5lO1xcbn1cXG5cXG4uYmFja2dyb3VuZEltYWdlIHtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKGltYWdlcy9jcm9pc3NhbnQuanBnKTtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgei1pbmRleDogLTI7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAwO1xcbn1cXG5cXG4vKiBNZW51IHBhZ2UgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXFxuLm1lbnVDb250ZW50IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5tZW51VGl0bGUge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZDogI2ViZDZiNmM1O1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgxMjgsIDEyOCwgMTI4LCAwLjI2Nyk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweCA1cHggMCAwO1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBmb250LXdlaWdodDogMTAwO1xcbiAgICB3aWR0aDogNjAwcHg7XFxufVxcblxcbi5tZW51VGV4dCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBzdGFydDtcXG4gICAgYmFja2dyb3VuZDogI2ViZDZiNmM1O1xcbiAgICBib3JkZXItcmFkaXVzOiAwIDAgNXB4IDVweDtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgZm9udC1zaXplOiBsYXJnZTtcXG4gICAgZm9udC13ZWlnaHQ6IDIwMDtcXG4gICAgd2hpdGUtc3BhY2U6IHByZS1saW5lO1xcbiAgICB3aWR0aDogNjAwcHg7XFxufVxcblxcbi5iYWNrZ3JvdW5kSW1hZ2VNZW51IHtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKGltYWdlcy9kZXNzZXJ0LmpwZyk7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHotaW5kZXg6IC0yO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMDtcXG59XFxuXFxuLyogQ29udGFjdCBwYWdlID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xcbi5jb250YWN0Q29udGVudCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uY29udGFjdFRpdGxlIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQ6ICNlYmQ2YjZjNTtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMTI4LCAxMjgsIDEyOCwgMC4yNjcpO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHggNXB4IDAgMDtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgZm9udC13ZWlnaHQ6IDEwMDtcXG4gICAgd2lkdGg6IDYwMHB4O1xcbn1cXG5cXG4uY29udGFjdFRleHQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogc3RhcnQ7XFxuICAgIGJhY2tncm91bmQ6ICNlYmQ2YjZjNTtcXG4gICAgYm9yZGVyLXJhZGl1czogMCAwIDVweCA1cHg7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XFxuICAgIGZvbnQtd2VpZ2h0OiAyMDA7XFxuICAgIHdoaXRlLXNwYWNlOiBwcmUtbGluZTtcXG4gICAgd2lkdGg6IDYwMHB4O1xcbn1cXG5cXG4uYmFja2dyb3VuZEltYWdlQ29udGFjdCB7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChpbWFnZXMvbWVhdC5qcGcpO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICB6LWluZGV4OiAtMjtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDA7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJmdW5jdGlvbiBob21lUGFnZSgpIHtcbiAgICAvL2hvbWUgZGl2LS1wYXJlbnRcbiAgICBjb25zdCBob21lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBob21lLmNsYXNzTGlzdC5hZGQoXCJob21lXCIpO1xuXG4gICAgLy9oZWFkbGluZVxuICAgIGNvbnN0IGhlYWRsaW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBoZWFkbGluZS5jbGFzc0xpc3QuYWRkKFwiaGVhZGxpbmVcIik7XG4gICAgaGVhZGxpbmUudGV4dENvbnRlbnQgPSBcIkNvbnRhY3RcIjtcblxuICAgIC8vY29udGVudCBkaXYtLTJuZCBwYXJlbnRcbiAgICBjb25zdCBjb250YWN0Q29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29udGFjdENvbnRlbnQuY2xhc3NMaXN0LmFkZChcImNvbnRhY3RDb250ZW50XCIpO1xuICAgIC8vY29udGFjdC0tdGl0bGVcbiAgICBjb25zdCBjb250YWN0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnRhY3RUaXRsZS5jbGFzc0xpc3QuYWRkKFwiY29udGFjdFRpdGxlXCIpO1xuICAgIGNvbnRhY3RUaXRsZS50ZXh0Q29udGVudCA9IFwiQ29udGFjdCB1c1wiO1xuXG5cbiAgICAvL2NvbnRhY3QtLXRleHRcbiAgICBjb25zdCBjb250YWN0VGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29udGFjdFRleHQuY2xhc3NMaXN0LmFkZChcImNvbnRhY3RUZXh0XCIpO1xuICAgIGNvbnRhY3RUZXh0LnRleHRDb250ZW50ID0gYFxuICAgIFBob25lOiBcXHJcXHQgKioqLTY1OC02ODQ4N1xcclxcblxcclxcblxuICAgIEVtYWlsOiBcXHJcXHQgY2FuZUBnbWFpbC5jb21cXHJcXG5cXHJcXG5cbiAgICBQb3N0OiBcXHJcXHQgRHJvcGJveCAyNTg0IE5ZIENpdHlcXHJcXG5cXHJcXG5cbiAgICBgO1xuXG4gICAgLy9iYWNrZ3JvdW5kLS0zcmQgY2hpbGRcbiAgICBjb25zdCBiYWNrZ3JvdW5kSW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGJhY2tncm91bmRJbWFnZS5jbGFzc0xpc3QuYWRkKFwiYmFja2dyb3VuZEltYWdlQ29udGFjdFwiKTtcblxuICAgIGhvbWUuYXBwZW5kQ2hpbGQoaGVhZGxpbmUpO1xuICAgIGhvbWUuYXBwZW5kQ2hpbGQoY29udGFjdENvbnRlbnQpO1xuICAgIGNvbnRhY3RDb250ZW50LmFwcGVuZENoaWxkKGNvbnRhY3RUaXRsZSk7XG4gICAgY29udGFjdENvbnRlbnQuYXBwZW5kQ2hpbGQoY29udGFjdFRleHQpO1xuICAgIGhvbWUuYXBwZW5kQ2hpbGQoYmFja2dyb3VuZEltYWdlKTtcblxuICAgIHJldHVybiBob21lO1xufVxuZXhwb3J0IGRlZmF1bHQgaG9tZVBhZ2U7IiwiZnVuY3Rpb24gaG9tZVBhZ2UoKSB7XG4gICAgLy9ob21lIGRpdi0tcGFyZW50XG4gICAgY29uc3QgaG9tZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgaG9tZS5jbGFzc0xpc3QuYWRkKFwiaG9tZVwiKTtcblxuICAgIC8vaGVhZGxpbmVcbiAgICBjb25zdCBoZWFkbGluZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgaGVhZGxpbmUuY2xhc3NMaXN0LmFkZChcImhlYWRsaW5lXCIpO1xuICAgIGhlYWRsaW5lLnRleHRDb250ZW50ID0gXCJMYSBDYW5lIFJlc3RhdXJhbnRcIjtcblxuICAgIC8vY29udGVudCBkaXYtLTJuZCBwYXJlbnRcbiAgICBjb25zdCBob21lQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgaG9tZUNvbnRlbnQuY2xhc3NMaXN0LmFkZChcImhvbWVDb250ZW50XCIpO1xuICAgIC8vYWJvdXQtLXRpdGxlXG4gICAgY29uc3QgYWJvdXRUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgYWJvdXRUaXRsZS5jbGFzc0xpc3QuYWRkKFwiYWJvdXRUaXRsZVwiKTtcbiAgICBhYm91dFRpdGxlLnRleHRDb250ZW50ID0gXCJBYm91dCB1c1wiO1xuXG5cbiAgICAvL2Fib3V0LS10ZXh0XG4gICAgY29uc3QgYWJvdXRUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBhYm91dFRleHQuY2xhc3NMaXN0LmFkZChcImFib3V0VGV4dFwiKTtcbiAgICBhYm91dFRleHQudGV4dENvbnRlbnQgPSBgKioqKioqKioqKiogaXMgdGhlIHN0b3J5IG9mIHRoZSAqKioqKiBmYW1pbHksIGFuZCBpdCBpcyBiYXNlZCBvbiBsb3ZlIGFuZCBjb2xsYWJvcmF0aW9uIHdpdGhpbiB0aGUgZmFtaWx5LlxuICAgIFRoZSByZXN0YXVyYW50IGlzIGEgZ291cm1ldCdzIGRyZWFtIGNvbWUgdHJ1ZS5cbiAgICBJdHMgb3JpZ2lucyBtYXkgYmUgdHJhY2VkIGJhY2sgdG8gdGhlIHllYXIgKioqKiwgd2hlbiAqKioqKioqKiAqKioqKiByZXR1cm5lZCB0byAqKioqKioqIGFmdGVyIDUgeWVhcnMgYWJyb2FkIGFuZCBvYnRhaW5lZCBncmVhdCBrbm93bGVkZ2UuXG4gICAgKioqIFJlc3RhdXJhbnQgd2FzIHRoZSBmaXJzdCAqKioqKioqIHJlc3RhdXJhbnQgdG8gYmUgbmFtZWQgdG8gdGhlIFdvcmxkJ3MgNTAgQmVzdCBSZXN0YXVyYW50cywgdGhhbmtzIHRvIGl0cyBjaGVmICoqKioqKioqKioqLiBgO1xuXG4gICAgLy9sb2NhdGlvbi0tdGl0bGVcbiAgICBjb25zdCBsb2NhdGlvblRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBsb2NhdGlvblRpdGxlLmNsYXNzTGlzdC5hZGQoXCJsb2NhdGlvblRpdGxlXCIpO1xuICAgIGxvY2F0aW9uVGl0bGUudGV4dENvbnRlbnQgPSBcIkxvY2F0aW9uXCI7XG5cbiAgICAvL2xvY2F0aW9uLS10ZXh0XG4gICAgY29uc3QgbG9jYXRpb25UZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBsb2NhdGlvblRleHQuY2xhc3NMaXN0LmFkZChcImxvY2F0aW9uVGV4dFwiKTtcbiAgICBsb2NhdGlvblRleHQudGV4dENvbnRlbnQgPSBgMTIzIExha2UgRHJpdmUsIExha2V2aWxsZSwgQW1vbmd1c2A7XG5cbiAgICAvL2hvdXJzLS10aXRsZVxuICAgIGNvbnN0IGhvdXJzVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGhvdXJzVGl0bGUuY2xhc3NMaXN0LmFkZChcImhvdXJzVGl0bGVcIik7XG4gICAgaG91cnNUaXRsZS50ZXh0Q29udGVudCA9IFwiSG91cnNcIjtcblxuXG4gICAgLy9ob3Vycy0tdGV4dFxuICAgIGNvbnN0IGhvdXJzVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgaG91cnNUZXh0LmNsYXNzTGlzdC5hZGQoXCJob3Vyc1RleHRcIik7XG4gICAgaG91cnNUZXh0LnRleHRDb250ZW50ID0gYFxuICAgIFN1bmRheTogOGFtIC0gOHBtXFxyXFxuXG4gICAgTW9uZGF5OiA2YW0gLSA2cG1cXHJcXG5cbiAgICBUdWVzZGF5OiA2YW0gLSA2cG1cXHJcXG5cbiAgICBXZWRuZXNkYXk6IDZhbSAtIDZwbVxcclxcblxuICAgIFRodXJzZGF5OiA2YW0gLSAxMHBtXFxyXFxuXG4gICAgRnJpZGF5OiA2YW0gLSAxMHBtXFxyXFxuXG4gICAgU2F0dXJkYXk6IDhhbSAtIDEwcG1gO1xuXG4gICAgLy9iYWNrZ3JvdW5kLS0zcmQgY2hpbGRcbiAgICBjb25zdCBiYWNrZ3JvdW5kSW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGJhY2tncm91bmRJbWFnZS5jbGFzc0xpc3QuYWRkKFwiYmFja2dyb3VuZEltYWdlXCIpO1xuXG4gICAgaG9tZS5hcHBlbmRDaGlsZChoZWFkbGluZSk7XG4gICAgaG9tZS5hcHBlbmRDaGlsZChob21lQ29udGVudCk7XG4gICAgaG9tZUNvbnRlbnQuYXBwZW5kQ2hpbGQoYWJvdXRUaXRsZSk7XG4gICAgaG9tZUNvbnRlbnQuYXBwZW5kQ2hpbGQoYWJvdXRUZXh0KTtcbiAgICBob21lQ29udGVudC5hcHBlbmRDaGlsZChob3Vyc1RpdGxlKTtcbiAgICBob21lQ29udGVudC5hcHBlbmRDaGlsZChob3Vyc1RleHQpO1xuICAgIGhvbWVDb250ZW50LmFwcGVuZENoaWxkKGxvY2F0aW9uVGl0bGUpO1xuICAgIGhvbWVDb250ZW50LmFwcGVuZENoaWxkKGxvY2F0aW9uVGV4dCk7XG4gICAgaG9tZS5hcHBlbmRDaGlsZChiYWNrZ3JvdW5kSW1hZ2UpO1xuXG4gICAgcmV0dXJuIGhvbWU7XG59XG5leHBvcnQgZGVmYXVsdCBob21lUGFnZTsiLCJmdW5jdGlvbiBob21lUGFnZSgpIHtcbiAgICAvL2hvbWUgZGl2LS1wYXJlbnRcbiAgICBjb25zdCBob21lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBob21lLmNsYXNzTGlzdC5hZGQoXCJob21lXCIpO1xuXG4gICAgLy9oZWFkbGluZVxuICAgIGNvbnN0IGhlYWRsaW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBoZWFkbGluZS5jbGFzc0xpc3QuYWRkKFwiaGVhZGxpbmVcIik7XG4gICAgaGVhZGxpbmUudGV4dENvbnRlbnQgPSBcIk1lbnVcIjtcblxuICAgIC8vY29udGVudCBkaXYtLTJuZCBwYXJlbnRcbiAgICBjb25zdCBtZW51Q29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbWVudUNvbnRlbnQuY2xhc3NMaXN0LmFkZChcIm1lbnVDb250ZW50XCIpO1xuICAgIC8vbWVudS0tdGl0bGVcbiAgICBjb25zdCBtZW51VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG1lbnVUaXRsZS5jbGFzc0xpc3QuYWRkKFwibWVudVRpdGxlXCIpO1xuICAgIG1lbnVUaXRsZS50ZXh0Q29udGVudCA9IFwiVGhlIFN0ZXViZW5cIjtcblxuXG4gICAgLy9tZW51LS10ZXh0XG4gICAgY29uc3QgbWVudVRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG1lbnVUZXh0LmNsYXNzTGlzdC5hZGQoXCJtZW51VGV4dFwiKTtcbiAgICBtZW51VGV4dC50ZXh0Q29udGVudCA9IGBcbiAgICBtYXNzYWdlZCBiaXNvbiBwaWUgICAgJDE0XFxyXFxuXG4gICAgZmFybS10by10YWJsZSBmaWcgZXh0cmFjdCB3aXRoIGhhemVsbnV0cyAgICAkMTVcXHJcXG5cbiAgICBpbnZpZ29yYXRlZCBzaGVsbCBiZWFuLCBib296ZSAmIGxvY2FsbHktc291cmNlZCBoYW0gZnJpdHRhdGEgICAgJDEyXFxyXFxuXG4gICAgcnllIHBhdGUgICAgJDE2XFxyXFxuXG4gICAgc2VhLXNhbHQgYXJ0aWNob2tlIGJvbWJzLCBjaG9yaXpvICYgbGFtYiAgICAkMThcXHJcXG5cbiAgICBydWJiZWQgYW5jaG92eSBzdXJwcmlzZSAgICAkMTNcXHJcXG5cbiAgICBhd2FrZW5lZCBvcmVjY2hpZXR0ZSB3aXRoIGJ1cm50IHJhbXAgICAgJDE3XFxyXFxuXG4gICAgcGVwcGVyICAgICQxMVxcclxcblxuICAgIGNyYWZ0ZWQgZmVubmVsIHJlZHVjdGlvbiAmIGthbGUgc2FsYWQgICAgJDE0XFxyXFxuXG4gICAgcXVpY2tlbmVkIG1hcnJvdyAgICAkMTRcXHJcXG5cbiAgICBgO1xuXG4gICAgLy9iYWNrZ3JvdW5kLS0zcmQgY2hpbGRcbiAgICBjb25zdCBiYWNrZ3JvdW5kSW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGJhY2tncm91bmRJbWFnZS5jbGFzc0xpc3QuYWRkKFwiYmFja2dyb3VuZEltYWdlTWVudVwiKTtcblxuICAgIGhvbWUuYXBwZW5kQ2hpbGQoaGVhZGxpbmUpO1xuICAgIGhvbWUuYXBwZW5kQ2hpbGQobWVudUNvbnRlbnQpO1xuICAgIG1lbnVDb250ZW50LmFwcGVuZENoaWxkKG1lbnVUaXRsZSk7XG4gICAgbWVudUNvbnRlbnQuYXBwZW5kQ2hpbGQobWVudVRleHQpO1xuICAgIGhvbWUuYXBwZW5kQ2hpbGQoYmFja2dyb3VuZEltYWdlKTtcblxuICAgIHJldHVybiBob21lO1xufVxuZXhwb3J0IGRlZmF1bHQgaG9tZVBhZ2U7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJpbmRleFwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgaG9tZVBhZ2UgZnJvbSAnLi9ob21lUGFnZSc7XG5pbXBvcnQgbWVudVBhZ2UgZnJvbSAnLi9tZW51UGFnZSc7XG5pbXBvcnQgY29udGFjdFBhZ2UgZnJvbSAnLi9jb250YWN0UGFnZSc7XG5jb25zdCBtYWluUGFnZSA9ICgoKSA9PiB7XG4gICAgLy90YWIgb2JqZWN0IFxuICAgIGNvbnN0IHRhYk9iamVjdCA9IHtcbiAgICAgICAgaG9tZTogaG9tZVBhZ2UoKSxcbiAgICAgICAgbWVudTogbWVudVBhZ2UoKSxcbiAgICAgICAgY29udGFjdDogY29udGFjdFBhZ2UoKVxuICAgIH07XG4gICAgLy9jb250ZW50IGRpdlxuICAgIGNvbnN0IGNvbnRlbnREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnRlbnREaXYuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJjb250ZW50XCIpO1xuXG4gICAgLy90YWIgZGl2XG4gICAgY29uc3QgdGFiRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0YWJEaXYuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ0YWJcIik7XG5cbiAgICAvL2hvbWUgdGFiXG4gICAgY29uc3QgaG9tZVRhYiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgaG9tZVRhYi5jbGFzc0xpc3QuYWRkKFwidGFiXCIpO1xuICAgIGhvbWVUYWIudGV4dENvbnRlbnQgPSBcIkhvbWVcIjtcblxuICAgIC8vbWVudSB0YWJcbiAgICBjb25zdCBtZW51VGFiID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBtZW51VGFiLmNsYXNzTGlzdC5hZGQoXCJ0YWJcIik7XG4gICAgbWVudVRhYi50ZXh0Q29udGVudCA9IFwiTWVudVwiO1xuXG4gICAgLy9jb250YWN0IHRhYlxuICAgIGNvbnN0IGNvbnRhY3RUYWIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnRhY3RUYWIuY2xhc3NMaXN0LmFkZChcInRhYlwiKTtcbiAgICBjb250YWN0VGFiLnRleHRDb250ZW50ID0gXCJDb250YWN0XCI7XG5cbiAgICAvL2Zvb3RlclxuICAgIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZm9vdGVyLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiZm9vdGVyXCIpO1xuICAgIGZvb3Rlci50ZXh0Q29udGVudCA9IFwiQ29weXJpZ2h0IMKpIDIwMjIgUmVkYVwiO1xuXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjb250ZW50RGl2KTtcbiAgICBjb250ZW50RGl2LmFwcGVuZENoaWxkKHRhYkRpdik7XG4gICAgdGFiRGl2LmFwcGVuZENoaWxkKGhvbWVUYWIpO1xuICAgIHRhYkRpdi5hcHBlbmRDaGlsZChtZW51VGFiKTtcbiAgICB0YWJEaXYuYXBwZW5kQ2hpbGQoY29udGFjdFRhYik7XG4gICAgY29udGVudERpdi5hcHBlbmRDaGlsZCh0YWJPYmplY3QuaG9tZSk7XG4gICAgY29udGVudERpdi5hcHBlbmRDaGlsZChmb290ZXIpO1xuICAgIC8vbmF2aWdhdGlvbiBsaXN0ZW5lcnNcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnRhYlwiKS5mb3JFYWNoKCh0YWIpID0+IHtcbiAgICAgICAgdGFiLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgICBjb250ZW50RGl2LnJlbW92ZUNoaWxkKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaG9tZVwiKSk7XG4gICAgICAgICAgICBjb250ZW50RGl2LnJlbW92ZUNoaWxkKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZm9vdGVyXCIpKTtcbiAgICAgICAgICAgIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQodGFiT2JqZWN0W3RhYi50ZXh0Q29udGVudC50b0xvd2VyQ2FzZSgpXSk7XG4gICAgICAgICAgICBjb250ZW50RGl2LmFwcGVuZENoaWxkKGZvb3Rlcik7XG4gICAgICAgIH0pO1xuICAgIH0pO1xufSkoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==
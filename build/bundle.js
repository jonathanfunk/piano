/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/pong/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(1);

	var _Piano = __webpack_require__(10);

	var _Piano2 = _interopRequireDefault(_Piano);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var piano = new _Piano2.default();

	var ms = 30;
	// Game should start immediately.
	(function pianoLoop() {
		piano.render();
		setTimeout(pianoLoop, ms);
	})();

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(2);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(9)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./piano.css", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./piano.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports


	// module
	exports.push([module.id, "/* http://meyerweb.com/eric/tools/css/reset/\n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n   margin: 0;\n   padding: 0;\n   border: 0;\n   font-size: 100%;\n   font: inherit;\n   vertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, menu, nav, section {\n   display: block;\n}\nbody {\n   line-height: 1;\n}\nol, ul {\n   list-style: none;\n}\nblockquote, q {\n   quotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n   content: '';\n   content: none;\n}\ntable {\n   border-collapse: collapse;\n   border-spacing: 0;\n}\n\n/* Game Styles */\n\n@font-face {\n    font-family: 'PressStart2P Web';\n    src: url(" + __webpack_require__(4) + ");\n    src: url(" + __webpack_require__(4) + "?#iefix) format('embedded-opentype'),\n         url(" + __webpack_require__(5) + ") format('woff2'),\n         url(" + __webpack_require__(6) + ") format('woff'),\n         url(" + __webpack_require__(7) + ") format('truetype'),\n         url(" + __webpack_require__(8) + "#press_start_2pregular) format('svg');\n    font-weight: normal;\n    font-style: normal;\n}\nbody {\n   font-family: 'PressStart2P Web', monospace;\n   margin: 0 auto;\n   text-align: center;\n   display: flex;\n   justify-content: center;\n   align-items: center;\n   align-content: center;\n   height: 100vh;\n   background-color: grey;\n}\n\nsection {\n  background-color: white;\n}\nh1 {\n   margin-top: 20px;\n}\n#piano {\n   background-color: black;\n   display: block;\n   height: 250px;\n   margin: 0 auto;\n   width: 800px;\n}\n.players {\n   display: inline-flex;\n   justify-content: space-between;\n   text-align: center;\n   width: 512px;\n}\n", ""]);

	// exports


/***/ },
/* 3 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "/fonts/pressstart2p-webfont.eot";

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "/fonts/pressstart2p-webfont.woff2";

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "/fonts/pressstart2p-webfont.woff";

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "/fonts/pressstart2p-webfont.ttf";

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "/fonts/pressstart2p-webfont.svg";

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _WhiteKey = __webpack_require__(11);

	var _WhiteKey2 = _interopRequireDefault(_WhiteKey);

	var _BlackKey = __webpack_require__(12);

	var _BlackKey2 = _interopRequireDefault(_BlackKey);

	var _Keys = __webpack_require__(13);

	var _Keys2 = _interopRequireDefault(_Keys);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Piano = function () {

		//This will construct the canvas and bring in the paddle and balls
		function Piano() {
			_classCallCheck(this, Piano);

			var canvas = document.getElementById('piano');
			this.width = canvas.width;
			this.height = canvas.height;
			this.context = canvas.getContext('2d');
			this.context.fillStyle = 'white';

			//Instances of white keys
			this.a1 = new _WhiteKey2.default(this.height, 0, _Keys2.default);
			this.b1 = new _WhiteKey2.default(this.height, 100, _Keys2.default);
			this.c1 = new _WhiteKey2.default(this.height, 200, _Keys2.default);
			this.c2 = new _WhiteKey2.default(this.height, 300, _Keys2.default);
			this.d1 = new _WhiteKey2.default(this.height, 400, _Keys2.default);
			this.e1 = new _WhiteKey2.default(this.height, 500, _Keys2.default);
			this.f1 = new _WhiteKey2.default(this.height, 600, _Keys2.default);
			this.g1 = new _WhiteKey2.default(this.height, 700, _Keys2.default);

			//Instances of black keys
			this.a1s = new _BlackKey2.default(this.height, 50, _Keys2.default);
			this.c1s = new _BlackKey2.default(this.height, 150, _Keys2.default);
			this.d1s = new _BlackKey2.default(this.height, 350, _Keys2.default);
			this.f1s = new _BlackKey2.default(this.height, 450, _Keys2.default);
			this.g1s = new _BlackKey2.default(this.height, 550, _Keys2.default);
		}
		//This will call the drawboard, ball and players every 30 ms


		_createClass(Piano, [{
			key: 'render',
			value: function render() {
				this.a1.render(this.context);
				this.b1.render(this.context);
				this.c1.render(this.context);
				this.c2.render(this.context);
				this.d1.render(this.context);
				this.e1.render(this.context);
				this.f1.render(this.context);
				this.g1.render(this.context);
				this.a1s.render(this.context);
				this.c1s.render(this.context);
				this.d1s.render(this.context);
				this.f1s.render(this.context);
				this.g1s.render(this.context);
			}
		}]);

		return Piano;
	}();

	exports.default = Piano;

/***/ },
/* 11 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var upPressed = false;
	var downPressed = false;

	var WhiteKey = function () {
	  function WhiteKey(boardHeight, x, keys) {
	    var _this = this;

	    _classCallCheck(this, WhiteKey);

	    this.width = 95;
	    this.height = 250;
	    this.boardHeight = boardHeight;
	    this.x = x;
	    this.y = 0;
	    this.color = "white";
	    this.keys = keys;
	    this.upPressed;
	    this.downPressed;
	    document.addEventListener('keydown', function (event) {
	      return _this.keyUp(event);
	    });
	    document.addEventListener('keyup', function (event) {
	      return _this.keyDown(event);
	    });
	  }

	  //upPress/downPress values are true when keys are pressed down


	  _createClass(WhiteKey, [{
	    key: 'keyUp',
	    value: function keyUp(event) {
	      switch (event.keyCode) {
	        case this.keys.up:
	          this.upPressed = true;
	          break;
	        case this.keys.down:
	          this.downPressed = true;
	          break;
	        default:
	          return;
	      }
	    }

	    //upPress/downPress values are false when keys are released

	  }, {
	    key: 'keyDown',
	    value: function keyDown(event) {
	      switch (event.keyCode) {
	        case this.keys.up:
	          this.upPressed = false;
	          break;
	        case this.keys.down:
	          this.downPressed = false;
	          break;
	        default:
	          return;
	      }
	    }

	    //This is to give the paddle it's shape using the above constructor values.

	  }, {
	    key: 'render',
	    value: function render(context) {
	      context.fillStyle = this.color;
	      context.fillRect(this.x, this.y, this.width, this.height);
	    }
	  }]);

	  return WhiteKey;
	}();

	exports.default = WhiteKey;

/***/ },
/* 12 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var upPressed = false;
	var downPressed = false;

	var BlackKey = function () {
	  function BlackKey(boardHeight, x, keys) {
	    var _this = this;

	    _classCallCheck(this, BlackKey);

	    this.width = 95;
	    this.height = 125;
	    this.boardHeight = boardHeight;
	    this.x = x;
	    this.y = 0;
	    this.color = "black";
	    this.keys = keys;
	    this.upPressed;
	    this.downPressed;
	    document.addEventListener('keydown', function (event) {
	      return _this.keyUp(event);
	    });
	    document.addEventListener('keyup', function (event) {
	      return _this.keyDown(event);
	    });
	  }

	  //upPress/downPress values are true when keys are pressed down


	  _createClass(BlackKey, [{
	    key: 'keyUp',
	    value: function keyUp(event) {
	      switch (event.keyCode) {
	        case this.keys.up:
	          this.upPressed = true;
	          break;
	        case this.keys.down:
	          this.downPressed = true;
	          break;
	        default:
	          return;
	      }
	    }

	    //upPress/downPress values are false when keys are released

	  }, {
	    key: 'keyDown',
	    value: function keyDown(event) {
	      switch (event.keyCode) {
	        case this.keys.up:
	          this.upPressed = false;
	          break;
	        case this.keys.down:
	          this.downPressed = false;
	          break;
	        default:
	          return;
	      }
	    }

	    //This is to give the paddle it's shape using the above constructor values.

	  }, {
	    key: 'render',
	    value: function render(context) {
	      context.fillStyle = this.color;
	      context.fillRect(this.x, this.y, this.width, this.height);
	    }
	  }]);

	  return BlackKey;
	}();

	exports.default = BlackKey;

/***/ },
/* 13 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var a1Key = exports.a1Key = {
	  key: 65, //A key
	  note: 90 };

	var a1sKey = exports.a1sKey = {
	  key: 87, //W key
	  note: 90 };

	var b1Key = exports.b1Key = {
	  key: 83, //S key
	  note: 90 };

	var c1Key = exports.c1Key = {
	  key: 68, //D key
	  note: 90 };

	var c1sKey = exports.c1sKey = {
	  key: 69, //E key
	  note: 90 };

	var c2Key = exports.c2Key = {
	  key: 70, //F key
	  note: 90 };

	var d1Key = exports.d1Key = {
	  key: 71, //G key
	  note: 90 };

	var d1sKey = exports.d1sKey = {
	  key: 89, //Y key
	  note: 90 };

	var e1Key = exports.e1Key = {
	  key: 72, //H key
	  note: 90 };

	var f1Key = exports.f1Key = {
	  key: 74, //J key
	  note: 90 };

	var f1sKey = exports.f1sKey = {
	  key: 85, //U key
	  note: 90 };

	var g1Key = exports.g1Key = {
	  key: 75, //K key
	  note: 90 };

	var g1sKey = exports.g1sKey = {
	  key: 73, //I key
	  note: 90 };

/***/ }
/******/ ]);
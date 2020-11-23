(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["kscreenshot"] = factory();
	else
		root["kscreenshot"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "./";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/index.js!./node_modules/sass-loader/dist/cjs.js!./src/kss.scss":
/*!***************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/sass-loader/dist/cjs.js!./src/kss.scss ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__(/*! ../node_modules/css-loader/lib/url/escape.js */ "./node_modules/css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@charset \"UTF-8\";\n.kssBody {\n  cursor: url(" + escape(__webpack_require__(/*! ./assets/imgs/cursor.ico */ "./src/assets/imgs/cursor.ico")) + "), auto;\n  user-select: none; }\n  .kssBody #kss {\n    position: fixed;\n    top: 0;\n    left: 0;\n    z-index: 10000; }\n  .kssBody #kssScreenShotWrapper {\n    position: fixed;\n    background: transparent;\n    box-shadow: 0 0 0 9999px rgba(0, 0, 0, 0.3);\n    z-index: 10001; }\n    .kssBody #kssScreenShotWrapper #kssTextLayer {\n      position: absolute;\n      top: 0;\n      left: 0;\n      width: 100%;\n      height: 100%;\n      z-index: 98;\n      cursor: crosshair; }\n      .kssBody #kssScreenShotWrapper #kssTextLayer .kssTextarea {\n        background: transparent;\n        resize: none;\n        min-width: 60px;\n        min-height: 36px;\n        box-sizing: border-box;\n        border-color: transparent;\n        overflow: hidden;\n        font-family: 宋体; }\n        .kssBody #kssScreenShotWrapper #kssTextLayer .kssTextarea:hover {\n          cursor: text;\n          outline: #488ff9 solid 1px; }\n    .kssBody #kssScreenShotWrapper #kssRectangleCanvas {\n      height: 100%;\n      width: 100%;\n      top: 0;\n      left: 0;\n      cursor: move;\n      position: absolute;\n      z-index: 99; }\n    .kssBody #kssScreenShotWrapper .kssDot, .kssBody #kssScreenShotWrapper .kssLine {\n      position: absolute;\n      background: #488ff9;\n      z-index: 100; }\n    .kssBody #kssScreenShotWrapper #kssCurrentImgDom {\n      width: 100%;\n      height: 100%;\n      position: absolute;\n      top: 0;\n      left: 0;\n      display: none; }\n    .kssBody #kssScreenShotWrapper #kssToolbar {\n      position: absolute;\n      right: 0;\n      background: #f1f1f1;\n      font-size: 14px;\n      border: 1px solid #dedede;\n      border-radius: 4px;\n      box-sizing: border-box;\n      z-index: 100; }\n      .kssBody #kssScreenShotWrapper #kssToolbar .kssToolbarItemBT {\n        display: inline-block;\n        width: 30px;\n        height: 28px;\n        text-align: center;\n        float: right;\n        cursor: pointer; }\n        .kssBody #kssScreenShotWrapper #kssToolbar .kssToolbarItemBT:hover {\n          background: #dedede; }\n        .kssBody #kssScreenShotWrapper #kssToolbar .kssToolbarItemBT .kssToolbarItemImg {\n          width: 20px;\n          height: 20px;\n          margin-top: 5px; }\n      .kssBody #kssScreenShotWrapper #kssToolbar .kssToolbarActiveItemBT {\n        background: #dedede; }\n      .kssBody #kssScreenShotWrapper #kssToolbar #kssToolbarMiddleArea #kssColorBoard {\n        position: absolute;\n        width: 180px;\n        height: 40px;\n        right: 0;\n        background: #fff;\n        border: 1px solid #bbb;\n        border-radius: 4px;\n        display: none;\n        outline: none;\n        cursor: default;\n        z-index: 100; }\n        .kssBody #kssScreenShotWrapper #kssToolbar #kssToolbarMiddleArea #kssColorBoard #kssCurrentColor {\n          display: inline-block;\n          width: 30px;\n          height: 30px;\n          margin: 5px 8px 0 8px;\n          box-sizing: border-box;\n          border: 1px solid #333; }\n        .kssBody #kssScreenShotWrapper #kssToolbar #kssToolbarMiddleArea #kssColorBoard #kssColorItemWrapper {\n          display: inline-block;\n          vertical-align: top;\n          width: 130px;\n          margin-top: 5px;\n          font-size: 0; }\n          .kssBody #kssScreenShotWrapper #kssToolbar #kssToolbarMiddleArea #kssColorBoard #kssColorItemWrapper .kssColorItem {\n            display: inline-block;\n            width: 14px;\n            height: 14px;\n            margin-right: 2px;\n            box-sizing: border-box;\n            border: 1px solid #333;\n            cursor: pointer; }\n      .kssBody #kssScreenShotWrapper #kssToolbar #kssToolbarMiddleArea #kssSetLineWidth {\n        position: absolute;\n        width: 155px;\n        height: 40px;\n        right: 0;\n        background: #fff;\n        border: 1px solid #bbb;\n        border-radius: 4px;\n        display: none;\n        outline: none;\n        cursor: default;\n        z-index: 100; }\n        .kssBody #kssScreenShotWrapper #kssToolbar #kssToolbarMiddleArea #kssSetLineWidth #kssNumInputWrapper {\n          margin: 7px 0 0 8px;\n          position: relative;\n          display: inline-block; }\n          .kssBody #kssScreenShotWrapper #kssToolbar #kssToolbarMiddleArea #kssSetLineWidth #kssNumInputWrapper #kssNumInput {\n            width: 40px;\n            height: 24px;\n            border: 1px solid #bbb;\n            border-radius: 4px;\n            padding: 0 15px 0 8px; }\n          .kssBody #kssScreenShotWrapper #kssToolbar #kssToolbarMiddleArea #kssSetLineWidth #kssNumInputWrapper #kssArrowNumWrapper {\n            position: absolute;\n            right: 0;\n            top: 1px;\n            border-radius: 0 4px 4px 0;\n            font-size: 0;\n            line-height: 12px; }\n            .kssBody #kssScreenShotWrapper #kssToolbar #kssToolbarMiddleArea #kssSetLineWidth #kssNumInputWrapper #kssArrowNumWrapper #kssUpNum, .kssBody #kssScreenShotWrapper #kssToolbar #kssToolbarMiddleArea #kssSetLineWidth #kssNumInputWrapper #kssArrowNumWrapper #kssDownNum {\n              height: 12px;\n              font-size: 12px;\n              cursor: pointer; }\n              .kssBody #kssScreenShotWrapper #kssToolbar #kssToolbarMiddleArea #kssSetLineWidth #kssNumInputWrapper #kssArrowNumWrapper #kssUpNum:hover, .kssBody #kssScreenShotWrapper #kssToolbar #kssToolbarMiddleArea #kssSetLineWidth #kssNumInputWrapper #kssArrowNumWrapper #kssDownNum:hover {\n                background: #dedede; }\n        .kssBody #kssScreenShotWrapper #kssToolbar #kssToolbarMiddleArea #kssSetLineWidth #kssShowLineWidthWrapper {\n          display: inline-block;\n          height: 40px;\n          line-height: 40px;\n          vertical-align: top;\n          width: 80px;\n          text-align: center; }\n          .kssBody #kssScreenShotWrapper #kssToolbar #kssToolbarMiddleArea #kssSetLineWidth #kssShowLineWidthWrapper #kssShowLineWidth {\n            height: 20px;\n            display: inline-block;\n            vertical-align: middle; }\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/lib/css-base.js":
/*!*************************************************!*\
  !*** ./node_modules/css-loader/lib/css-base.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
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

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ "./node_modules/css-loader/lib/url/escape.js":
/*!***************************************************!*\
  !*** ./node_modules/css-loader/lib/url/escape.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function escape(url) {
    if (typeof url !== 'string') {
        return url
    }
    // If url is already wrapped in quotes, remove them
    if (/^['"].*['"]$/.test(url)) {
        url = url.slice(1, -1);
    }
    // Should url be wrapped?
    // See https://drafts.csswg.org/css-values-3/#urls
    if (/["'() \t\n]/.test(url)) {
        return '"' + url.replace(/"/g, '\\"').replace(/\n/g, '\\n') + '"'
    }

    return url
}


/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target) {
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
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

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

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

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./node_modules/uri-js/dist/es5/uri.all.js":
/*!*************************************************!*\
  !*** ./node_modules/uri-js/dist/es5/uri.all.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/** @license URI.js v4.4.0 (c) 2011 Gary Court. License: http://github.com/garycourt/uri-js */
(function (global, factory) {
	 true ? factory(exports) :
	undefined;
}(this, (function (exports) { 'use strict';

function merge() {
    for (var _len = arguments.length, sets = Array(_len), _key = 0; _key < _len; _key++) {
        sets[_key] = arguments[_key];
    }

    if (sets.length > 1) {
        sets[0] = sets[0].slice(0, -1);
        var xl = sets.length - 1;
        for (var x = 1; x < xl; ++x) {
            sets[x] = sets[x].slice(1, -1);
        }
        sets[xl] = sets[xl].slice(1);
        return sets.join('');
    } else {
        return sets[0];
    }
}
function subexp(str) {
    return "(?:" + str + ")";
}
function typeOf(o) {
    return o === undefined ? "undefined" : o === null ? "null" : Object.prototype.toString.call(o).split(" ").pop().split("]").shift().toLowerCase();
}
function toUpperCase(str) {
    return str.toUpperCase();
}
function toArray(obj) {
    return obj !== undefined && obj !== null ? obj instanceof Array ? obj : typeof obj.length !== "number" || obj.split || obj.setInterval || obj.call ? [obj] : Array.prototype.slice.call(obj) : [];
}
function assign(target, source) {
    var obj = target;
    if (source) {
        for (var key in source) {
            obj[key] = source[key];
        }
    }
    return obj;
}

function buildExps(isIRI) {
    var ALPHA$$ = "[A-Za-z]",
        CR$ = "[\\x0D]",
        DIGIT$$ = "[0-9]",
        DQUOTE$$ = "[\\x22]",
        HEXDIG$$ = merge(DIGIT$$, "[A-Fa-f]"),
        //case-insensitive
    LF$$ = "[\\x0A]",
        SP$$ = "[\\x20]",
        PCT_ENCODED$ = subexp(subexp("%[EFef]" + HEXDIG$$ + "%" + HEXDIG$$ + HEXDIG$$ + "%" + HEXDIG$$ + HEXDIG$$) + "|" + subexp("%[89A-Fa-f]" + HEXDIG$$ + "%" + HEXDIG$$ + HEXDIG$$) + "|" + subexp("%" + HEXDIG$$ + HEXDIG$$)),
        //expanded
    GEN_DELIMS$$ = "[\\:\\/\\?\\#\\[\\]\\@]",
        SUB_DELIMS$$ = "[\\!\\$\\&\\'\\(\\)\\*\\+\\,\\;\\=]",
        RESERVED$$ = merge(GEN_DELIMS$$, SUB_DELIMS$$),
        UCSCHAR$$ = isIRI ? "[\\xA0-\\u200D\\u2010-\\u2029\\u202F-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF]" : "[]",
        //subset, excludes bidi control characters
    IPRIVATE$$ = isIRI ? "[\\uE000-\\uF8FF]" : "[]",
        //subset
    UNRESERVED$$ = merge(ALPHA$$, DIGIT$$, "[\\-\\.\\_\\~]", UCSCHAR$$),
        SCHEME$ = subexp(ALPHA$$ + merge(ALPHA$$, DIGIT$$, "[\\+\\-\\.]") + "*"),
        USERINFO$ = subexp(subexp(PCT_ENCODED$ + "|" + merge(UNRESERVED$$, SUB_DELIMS$$, "[\\:]")) + "*"),
        DEC_OCTET$ = subexp(subexp("25[0-5]") + "|" + subexp("2[0-4]" + DIGIT$$) + "|" + subexp("1" + DIGIT$$ + DIGIT$$) + "|" + subexp("[1-9]" + DIGIT$$) + "|" + DIGIT$$),
        DEC_OCTET_RELAXED$ = subexp(subexp("25[0-5]") + "|" + subexp("2[0-4]" + DIGIT$$) + "|" + subexp("1" + DIGIT$$ + DIGIT$$) + "|" + subexp("0?[1-9]" + DIGIT$$) + "|0?0?" + DIGIT$$),
        //relaxed parsing rules
    IPV4ADDRESS$ = subexp(DEC_OCTET_RELAXED$ + "\\." + DEC_OCTET_RELAXED$ + "\\." + DEC_OCTET_RELAXED$ + "\\." + DEC_OCTET_RELAXED$),
        H16$ = subexp(HEXDIG$$ + "{1,4}"),
        LS32$ = subexp(subexp(H16$ + "\\:" + H16$) + "|" + IPV4ADDRESS$),
        IPV6ADDRESS1$ = subexp(subexp(H16$ + "\\:") + "{6}" + LS32$),
        //                           6( h16 ":" ) ls32
    IPV6ADDRESS2$ = subexp("\\:\\:" + subexp(H16$ + "\\:") + "{5}" + LS32$),
        //                      "::" 5( h16 ":" ) ls32
    IPV6ADDRESS3$ = subexp(subexp(H16$) + "?\\:\\:" + subexp(H16$ + "\\:") + "{4}" + LS32$),
        //[               h16 ] "::" 4( h16 ":" ) ls32
    IPV6ADDRESS4$ = subexp(subexp(subexp(H16$ + "\\:") + "{0,1}" + H16$) + "?\\:\\:" + subexp(H16$ + "\\:") + "{3}" + LS32$),
        //[ *1( h16 ":" ) h16 ] "::" 3( h16 ":" ) ls32
    IPV6ADDRESS5$ = subexp(subexp(subexp(H16$ + "\\:") + "{0,2}" + H16$) + "?\\:\\:" + subexp(H16$ + "\\:") + "{2}" + LS32$),
        //[ *2( h16 ":" ) h16 ] "::" 2( h16 ":" ) ls32
    IPV6ADDRESS6$ = subexp(subexp(subexp(H16$ + "\\:") + "{0,3}" + H16$) + "?\\:\\:" + H16$ + "\\:" + LS32$),
        //[ *3( h16 ":" ) h16 ] "::"    h16 ":"   ls32
    IPV6ADDRESS7$ = subexp(subexp(subexp(H16$ + "\\:") + "{0,4}" + H16$) + "?\\:\\:" + LS32$),
        //[ *4( h16 ":" ) h16 ] "::"              ls32
    IPV6ADDRESS8$ = subexp(subexp(subexp(H16$ + "\\:") + "{0,5}" + H16$) + "?\\:\\:" + H16$),
        //[ *5( h16 ":" ) h16 ] "::"              h16
    IPV6ADDRESS9$ = subexp(subexp(subexp(H16$ + "\\:") + "{0,6}" + H16$) + "?\\:\\:"),
        //[ *6( h16 ":" ) h16 ] "::"
    IPV6ADDRESS$ = subexp([IPV6ADDRESS1$, IPV6ADDRESS2$, IPV6ADDRESS3$, IPV6ADDRESS4$, IPV6ADDRESS5$, IPV6ADDRESS6$, IPV6ADDRESS7$, IPV6ADDRESS8$, IPV6ADDRESS9$].join("|")),
        ZONEID$ = subexp(subexp(UNRESERVED$$ + "|" + PCT_ENCODED$) + "+"),
        //RFC 6874
    IPV6ADDRZ$ = subexp(IPV6ADDRESS$ + "\\%25" + ZONEID$),
        //RFC 6874
    IPV6ADDRZ_RELAXED$ = subexp(IPV6ADDRESS$ + subexp("\\%25|\\%(?!" + HEXDIG$$ + "{2})") + ZONEID$),
        //RFC 6874, with relaxed parsing rules
    IPVFUTURE$ = subexp("[vV]" + HEXDIG$$ + "+\\." + merge(UNRESERVED$$, SUB_DELIMS$$, "[\\:]") + "+"),
        IP_LITERAL$ = subexp("\\[" + subexp(IPV6ADDRZ_RELAXED$ + "|" + IPV6ADDRESS$ + "|" + IPVFUTURE$) + "\\]"),
        //RFC 6874
    REG_NAME$ = subexp(subexp(PCT_ENCODED$ + "|" + merge(UNRESERVED$$, SUB_DELIMS$$)) + "*"),
        HOST$ = subexp(IP_LITERAL$ + "|" + IPV4ADDRESS$ + "(?!" + REG_NAME$ + ")" + "|" + REG_NAME$),
        PORT$ = subexp(DIGIT$$ + "*"),
        AUTHORITY$ = subexp(subexp(USERINFO$ + "@") + "?" + HOST$ + subexp("\\:" + PORT$) + "?"),
        PCHAR$ = subexp(PCT_ENCODED$ + "|" + merge(UNRESERVED$$, SUB_DELIMS$$, "[\\:\\@]")),
        SEGMENT$ = subexp(PCHAR$ + "*"),
        SEGMENT_NZ$ = subexp(PCHAR$ + "+"),
        SEGMENT_NZ_NC$ = subexp(subexp(PCT_ENCODED$ + "|" + merge(UNRESERVED$$, SUB_DELIMS$$, "[\\@]")) + "+"),
        PATH_ABEMPTY$ = subexp(subexp("\\/" + SEGMENT$) + "*"),
        PATH_ABSOLUTE$ = subexp("\\/" + subexp(SEGMENT_NZ$ + PATH_ABEMPTY$) + "?"),
        //simplified
    PATH_NOSCHEME$ = subexp(SEGMENT_NZ_NC$ + PATH_ABEMPTY$),
        //simplified
    PATH_ROOTLESS$ = subexp(SEGMENT_NZ$ + PATH_ABEMPTY$),
        //simplified
    PATH_EMPTY$ = "(?!" + PCHAR$ + ")",
        PATH$ = subexp(PATH_ABEMPTY$ + "|" + PATH_ABSOLUTE$ + "|" + PATH_NOSCHEME$ + "|" + PATH_ROOTLESS$ + "|" + PATH_EMPTY$),
        QUERY$ = subexp(subexp(PCHAR$ + "|" + merge("[\\/\\?]", IPRIVATE$$)) + "*"),
        FRAGMENT$ = subexp(subexp(PCHAR$ + "|[\\/\\?]") + "*"),
        HIER_PART$ = subexp(subexp("\\/\\/" + AUTHORITY$ + PATH_ABEMPTY$) + "|" + PATH_ABSOLUTE$ + "|" + PATH_ROOTLESS$ + "|" + PATH_EMPTY$),
        URI$ = subexp(SCHEME$ + "\\:" + HIER_PART$ + subexp("\\?" + QUERY$) + "?" + subexp("\\#" + FRAGMENT$) + "?"),
        RELATIVE_PART$ = subexp(subexp("\\/\\/" + AUTHORITY$ + PATH_ABEMPTY$) + "|" + PATH_ABSOLUTE$ + "|" + PATH_NOSCHEME$ + "|" + PATH_EMPTY$),
        RELATIVE$ = subexp(RELATIVE_PART$ + subexp("\\?" + QUERY$) + "?" + subexp("\\#" + FRAGMENT$) + "?"),
        URI_REFERENCE$ = subexp(URI$ + "|" + RELATIVE$),
        ABSOLUTE_URI$ = subexp(SCHEME$ + "\\:" + HIER_PART$ + subexp("\\?" + QUERY$) + "?"),
        GENERIC_REF$ = "^(" + SCHEME$ + ")\\:" + subexp(subexp("\\/\\/(" + subexp("(" + USERINFO$ + ")@") + "?(" + HOST$ + ")" + subexp("\\:(" + PORT$ + ")") + "?)") + "?(" + PATH_ABEMPTY$ + "|" + PATH_ABSOLUTE$ + "|" + PATH_ROOTLESS$ + "|" + PATH_EMPTY$ + ")") + subexp("\\?(" + QUERY$ + ")") + "?" + subexp("\\#(" + FRAGMENT$ + ")") + "?$",
        RELATIVE_REF$ = "^(){0}" + subexp(subexp("\\/\\/(" + subexp("(" + USERINFO$ + ")@") + "?(" + HOST$ + ")" + subexp("\\:(" + PORT$ + ")") + "?)") + "?(" + PATH_ABEMPTY$ + "|" + PATH_ABSOLUTE$ + "|" + PATH_NOSCHEME$ + "|" + PATH_EMPTY$ + ")") + subexp("\\?(" + QUERY$ + ")") + "?" + subexp("\\#(" + FRAGMENT$ + ")") + "?$",
        ABSOLUTE_REF$ = "^(" + SCHEME$ + ")\\:" + subexp(subexp("\\/\\/(" + subexp("(" + USERINFO$ + ")@") + "?(" + HOST$ + ")" + subexp("\\:(" + PORT$ + ")") + "?)") + "?(" + PATH_ABEMPTY$ + "|" + PATH_ABSOLUTE$ + "|" + PATH_ROOTLESS$ + "|" + PATH_EMPTY$ + ")") + subexp("\\?(" + QUERY$ + ")") + "?$",
        SAMEDOC_REF$ = "^" + subexp("\\#(" + FRAGMENT$ + ")") + "?$",
        AUTHORITY_REF$ = "^" + subexp("(" + USERINFO$ + ")@") + "?(" + HOST$ + ")" + subexp("\\:(" + PORT$ + ")") + "?$";
    return {
        NOT_SCHEME: new RegExp(merge("[^]", ALPHA$$, DIGIT$$, "[\\+\\-\\.]"), "g"),
        NOT_USERINFO: new RegExp(merge("[^\\%\\:]", UNRESERVED$$, SUB_DELIMS$$), "g"),
        NOT_HOST: new RegExp(merge("[^\\%\\[\\]\\:]", UNRESERVED$$, SUB_DELIMS$$), "g"),
        NOT_PATH: new RegExp(merge("[^\\%\\/\\:\\@]", UNRESERVED$$, SUB_DELIMS$$), "g"),
        NOT_PATH_NOSCHEME: new RegExp(merge("[^\\%\\/\\@]", UNRESERVED$$, SUB_DELIMS$$), "g"),
        NOT_QUERY: new RegExp(merge("[^\\%]", UNRESERVED$$, SUB_DELIMS$$, "[\\:\\@\\/\\?]", IPRIVATE$$), "g"),
        NOT_FRAGMENT: new RegExp(merge("[^\\%]", UNRESERVED$$, SUB_DELIMS$$, "[\\:\\@\\/\\?]"), "g"),
        ESCAPE: new RegExp(merge("[^]", UNRESERVED$$, SUB_DELIMS$$), "g"),
        UNRESERVED: new RegExp(UNRESERVED$$, "g"),
        OTHER_CHARS: new RegExp(merge("[^\\%]", UNRESERVED$$, RESERVED$$), "g"),
        PCT_ENCODED: new RegExp(PCT_ENCODED$, "g"),
        IPV4ADDRESS: new RegExp("^(" + IPV4ADDRESS$ + ")$"),
        IPV6ADDRESS: new RegExp("^\\[?(" + IPV6ADDRESS$ + ")" + subexp(subexp("\\%25|\\%(?!" + HEXDIG$$ + "{2})") + "(" + ZONEID$ + ")") + "?\\]?$") //RFC 6874, with relaxed parsing rules
    };
}
var URI_PROTOCOL = buildExps(false);

var IRI_PROTOCOL = buildExps(true);

var slicedToArray = function () {
  function sliceIterator(arr, i) {
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"]) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  return function (arr, i) {
    if (Array.isArray(arr)) {
      return arr;
    } else if (Symbol.iterator in Object(arr)) {
      return sliceIterator(arr, i);
    } else {
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    }
  };
}();













var toConsumableArray = function (arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  } else {
    return Array.from(arr);
  }
};

/** Highest positive signed 32-bit float value */

var maxInt = 2147483647; // aka. 0x7FFFFFFF or 2^31-1

/** Bootstring parameters */
var base = 36;
var tMin = 1;
var tMax = 26;
var skew = 38;
var damp = 700;
var initialBias = 72;
var initialN = 128; // 0x80
var delimiter = '-'; // '\x2D'

/** Regular expressions */
var regexPunycode = /^xn--/;
var regexNonASCII = /[^\0-\x7E]/; // non-ASCII chars
var regexSeparators = /[\x2E\u3002\uFF0E\uFF61]/g; // RFC 3490 separators

/** Error messages */
var errors = {
	'overflow': 'Overflow: input needs wider integers to process',
	'not-basic': 'Illegal input >= 0x80 (not a basic code point)',
	'invalid-input': 'Invalid input'
};

/** Convenience shortcuts */
var baseMinusTMin = base - tMin;
var floor = Math.floor;
var stringFromCharCode = String.fromCharCode;

/*--------------------------------------------------------------------------*/

/**
 * A generic error utility function.
 * @private
 * @param {String} type The error type.
 * @returns {Error} Throws a `RangeError` with the applicable error message.
 */
function error$1(type) {
	throw new RangeError(errors[type]);
}

/**
 * A generic `Array#map` utility function.
 * @private
 * @param {Array} array The array to iterate over.
 * @param {Function} callback The function that gets called for every array
 * item.
 * @returns {Array} A new array of values returned by the callback function.
 */
function map(array, fn) {
	var result = [];
	var length = array.length;
	while (length--) {
		result[length] = fn(array[length]);
	}
	return result;
}

/**
 * A simple `Array#map`-like wrapper to work with domain name strings or email
 * addresses.
 * @private
 * @param {String} domain The domain name or email address.
 * @param {Function} callback The function that gets called for every
 * character.
 * @returns {Array} A new string of characters returned by the callback
 * function.
 */
function mapDomain(string, fn) {
	var parts = string.split('@');
	var result = '';
	if (parts.length > 1) {
		// In email addresses, only the domain name should be punycoded. Leave
		// the local part (i.e. everything up to `@`) intact.
		result = parts[0] + '@';
		string = parts[1];
	}
	// Avoid `split(regex)` for IE8 compatibility. See #17.
	string = string.replace(regexSeparators, '\x2E');
	var labels = string.split('.');
	var encoded = map(labels, fn).join('.');
	return result + encoded;
}

/**
 * Creates an array containing the numeric code points of each Unicode
 * character in the string. While JavaScript uses UCS-2 internally,
 * this function will convert a pair of surrogate halves (each of which
 * UCS-2 exposes as separate characters) into a single code point,
 * matching UTF-16.
 * @see `punycode.ucs2.encode`
 * @see <https://mathiasbynens.be/notes/javascript-encoding>
 * @memberOf punycode.ucs2
 * @name decode
 * @param {String} string The Unicode input string (UCS-2).
 * @returns {Array} The new array of code points.
 */
function ucs2decode(string) {
	var output = [];
	var counter = 0;
	var length = string.length;
	while (counter < length) {
		var value = string.charCodeAt(counter++);
		if (value >= 0xD800 && value <= 0xDBFF && counter < length) {
			// It's a high surrogate, and there is a next character.
			var extra = string.charCodeAt(counter++);
			if ((extra & 0xFC00) == 0xDC00) {
				// Low surrogate.
				output.push(((value & 0x3FF) << 10) + (extra & 0x3FF) + 0x10000);
			} else {
				// It's an unmatched surrogate; only append this code unit, in case the
				// next code unit is the high surrogate of a surrogate pair.
				output.push(value);
				counter--;
			}
		} else {
			output.push(value);
		}
	}
	return output;
}

/**
 * Creates a string based on an array of numeric code points.
 * @see `punycode.ucs2.decode`
 * @memberOf punycode.ucs2
 * @name encode
 * @param {Array} codePoints The array of numeric code points.
 * @returns {String} The new Unicode string (UCS-2).
 */
var ucs2encode = function ucs2encode(array) {
	return String.fromCodePoint.apply(String, toConsumableArray(array));
};

/**
 * Converts a basic code point into a digit/integer.
 * @see `digitToBasic()`
 * @private
 * @param {Number} codePoint The basic numeric code point value.
 * @returns {Number} The numeric value of a basic code point (for use in
 * representing integers) in the range `0` to `base - 1`, or `base` if
 * the code point does not represent a value.
 */
var basicToDigit = function basicToDigit(codePoint) {
	if (codePoint - 0x30 < 0x0A) {
		return codePoint - 0x16;
	}
	if (codePoint - 0x41 < 0x1A) {
		return codePoint - 0x41;
	}
	if (codePoint - 0x61 < 0x1A) {
		return codePoint - 0x61;
	}
	return base;
};

/**
 * Converts a digit/integer into a basic code point.
 * @see `basicToDigit()`
 * @private
 * @param {Number} digit The numeric value of a basic code point.
 * @returns {Number} The basic code point whose value (when used for
 * representing integers) is `digit`, which needs to be in the range
 * `0` to `base - 1`. If `flag` is non-zero, the uppercase form is
 * used; else, the lowercase form is used. The behavior is undefined
 * if `flag` is non-zero and `digit` has no uppercase form.
 */
var digitToBasic = function digitToBasic(digit, flag) {
	//  0..25 map to ASCII a..z or A..Z
	// 26..35 map to ASCII 0..9
	return digit + 22 + 75 * (digit < 26) - ((flag != 0) << 5);
};

/**
 * Bias adaptation function as per section 3.4 of RFC 3492.
 * https://tools.ietf.org/html/rfc3492#section-3.4
 * @private
 */
var adapt = function adapt(delta, numPoints, firstTime) {
	var k = 0;
	delta = firstTime ? floor(delta / damp) : delta >> 1;
	delta += floor(delta / numPoints);
	for (; /* no initialization */delta > baseMinusTMin * tMax >> 1; k += base) {
		delta = floor(delta / baseMinusTMin);
	}
	return floor(k + (baseMinusTMin + 1) * delta / (delta + skew));
};

/**
 * Converts a Punycode string of ASCII-only symbols to a string of Unicode
 * symbols.
 * @memberOf punycode
 * @param {String} input The Punycode string of ASCII-only symbols.
 * @returns {String} The resulting string of Unicode symbols.
 */
var decode = function decode(input) {
	// Don't use UCS-2.
	var output = [];
	var inputLength = input.length;
	var i = 0;
	var n = initialN;
	var bias = initialBias;

	// Handle the basic code points: let `basic` be the number of input code
	// points before the last delimiter, or `0` if there is none, then copy
	// the first basic code points to the output.

	var basic = input.lastIndexOf(delimiter);
	if (basic < 0) {
		basic = 0;
	}

	for (var j = 0; j < basic; ++j) {
		// if it's not a basic code point
		if (input.charCodeAt(j) >= 0x80) {
			error$1('not-basic');
		}
		output.push(input.charCodeAt(j));
	}

	// Main decoding loop: start just after the last delimiter if any basic code
	// points were copied; start at the beginning otherwise.

	for (var index = basic > 0 ? basic + 1 : 0; index < inputLength;) /* no final expression */{

		// `index` is the index of the next character to be consumed.
		// Decode a generalized variable-length integer into `delta`,
		// which gets added to `i`. The overflow checking is easier
		// if we increase `i` as we go, then subtract off its starting
		// value at the end to obtain `delta`.
		var oldi = i;
		for (var w = 1, k = base;; /* no condition */k += base) {

			if (index >= inputLength) {
				error$1('invalid-input');
			}

			var digit = basicToDigit(input.charCodeAt(index++));

			if (digit >= base || digit > floor((maxInt - i) / w)) {
				error$1('overflow');
			}

			i += digit * w;
			var t = k <= bias ? tMin : k >= bias + tMax ? tMax : k - bias;

			if (digit < t) {
				break;
			}

			var baseMinusT = base - t;
			if (w > floor(maxInt / baseMinusT)) {
				error$1('overflow');
			}

			w *= baseMinusT;
		}

		var out = output.length + 1;
		bias = adapt(i - oldi, out, oldi == 0);

		// `i` was supposed to wrap around from `out` to `0`,
		// incrementing `n` each time, so we'll fix that now:
		if (floor(i / out) > maxInt - n) {
			error$1('overflow');
		}

		n += floor(i / out);
		i %= out;

		// Insert `n` at position `i` of the output.
		output.splice(i++, 0, n);
	}

	return String.fromCodePoint.apply(String, output);
};

/**
 * Converts a string of Unicode symbols (e.g. a domain name label) to a
 * Punycode string of ASCII-only symbols.
 * @memberOf punycode
 * @param {String} input The string of Unicode symbols.
 * @returns {String} The resulting Punycode string of ASCII-only symbols.
 */
var encode = function encode(input) {
	var output = [];

	// Convert the input in UCS-2 to an array of Unicode code points.
	input = ucs2decode(input);

	// Cache the length.
	var inputLength = input.length;

	// Initialize the state.
	var n = initialN;
	var delta = 0;
	var bias = initialBias;

	// Handle the basic code points.
	var _iteratorNormalCompletion = true;
	var _didIteratorError = false;
	var _iteratorError = undefined;

	try {
		for (var _iterator = input[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
			var _currentValue2 = _step.value;

			if (_currentValue2 < 0x80) {
				output.push(stringFromCharCode(_currentValue2));
			}
		}
	} catch (err) {
		_didIteratorError = true;
		_iteratorError = err;
	} finally {
		try {
			if (!_iteratorNormalCompletion && _iterator.return) {
				_iterator.return();
			}
		} finally {
			if (_didIteratorError) {
				throw _iteratorError;
			}
		}
	}

	var basicLength = output.length;
	var handledCPCount = basicLength;

	// `handledCPCount` is the number of code points that have been handled;
	// `basicLength` is the number of basic code points.

	// Finish the basic string with a delimiter unless it's empty.
	if (basicLength) {
		output.push(delimiter);
	}

	// Main encoding loop:
	while (handledCPCount < inputLength) {

		// All non-basic code points < n have been handled already. Find the next
		// larger one:
		var m = maxInt;
		var _iteratorNormalCompletion2 = true;
		var _didIteratorError2 = false;
		var _iteratorError2 = undefined;

		try {
			for (var _iterator2 = input[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
				var currentValue = _step2.value;

				if (currentValue >= n && currentValue < m) {
					m = currentValue;
				}
			}

			// Increase `delta` enough to advance the decoder's <n,i> state to <m,0>,
			// but guard against overflow.
		} catch (err) {
			_didIteratorError2 = true;
			_iteratorError2 = err;
		} finally {
			try {
				if (!_iteratorNormalCompletion2 && _iterator2.return) {
					_iterator2.return();
				}
			} finally {
				if (_didIteratorError2) {
					throw _iteratorError2;
				}
			}
		}

		var handledCPCountPlusOne = handledCPCount + 1;
		if (m - n > floor((maxInt - delta) / handledCPCountPlusOne)) {
			error$1('overflow');
		}

		delta += (m - n) * handledCPCountPlusOne;
		n = m;

		var _iteratorNormalCompletion3 = true;
		var _didIteratorError3 = false;
		var _iteratorError3 = undefined;

		try {
			for (var _iterator3 = input[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
				var _currentValue = _step3.value;

				if (_currentValue < n && ++delta > maxInt) {
					error$1('overflow');
				}
				if (_currentValue == n) {
					// Represent delta as a generalized variable-length integer.
					var q = delta;
					for (var k = base;; /* no condition */k += base) {
						var t = k <= bias ? tMin : k >= bias + tMax ? tMax : k - bias;
						if (q < t) {
							break;
						}
						var qMinusT = q - t;
						var baseMinusT = base - t;
						output.push(stringFromCharCode(digitToBasic(t + qMinusT % baseMinusT, 0)));
						q = floor(qMinusT / baseMinusT);
					}

					output.push(stringFromCharCode(digitToBasic(q, 0)));
					bias = adapt(delta, handledCPCountPlusOne, handledCPCount == basicLength);
					delta = 0;
					++handledCPCount;
				}
			}
		} catch (err) {
			_didIteratorError3 = true;
			_iteratorError3 = err;
		} finally {
			try {
				if (!_iteratorNormalCompletion3 && _iterator3.return) {
					_iterator3.return();
				}
			} finally {
				if (_didIteratorError3) {
					throw _iteratorError3;
				}
			}
		}

		++delta;
		++n;
	}
	return output.join('');
};

/**
 * Converts a Punycode string representing a domain name or an email address
 * to Unicode. Only the Punycoded parts of the input will be converted, i.e.
 * it doesn't matter if you call it on a string that has already been
 * converted to Unicode.
 * @memberOf punycode
 * @param {String} input The Punycoded domain name or email address to
 * convert to Unicode.
 * @returns {String} The Unicode representation of the given Punycode
 * string.
 */
var toUnicode = function toUnicode(input) {
	return mapDomain(input, function (string) {
		return regexPunycode.test(string) ? decode(string.slice(4).toLowerCase()) : string;
	});
};

/**
 * Converts a Unicode string representing a domain name or an email address to
 * Punycode. Only the non-ASCII parts of the domain name will be converted,
 * i.e. it doesn't matter if you call it with a domain that's already in
 * ASCII.
 * @memberOf punycode
 * @param {String} input The domain name or email address to convert, as a
 * Unicode string.
 * @returns {String} The Punycode representation of the given domain name or
 * email address.
 */
var toASCII = function toASCII(input) {
	return mapDomain(input, function (string) {
		return regexNonASCII.test(string) ? 'xn--' + encode(string) : string;
	});
};

/*--------------------------------------------------------------------------*/

/** Define the public API */
var punycode = {
	/**
  * A string representing the current Punycode.js version number.
  * @memberOf punycode
  * @type String
  */
	'version': '2.1.0',
	/**
  * An object of methods to convert from JavaScript's internal character
  * representation (UCS-2) to Unicode code points, and back.
  * @see <https://mathiasbynens.be/notes/javascript-encoding>
  * @memberOf punycode
  * @type Object
  */
	'ucs2': {
		'decode': ucs2decode,
		'encode': ucs2encode
	},
	'decode': decode,
	'encode': encode,
	'toASCII': toASCII,
	'toUnicode': toUnicode
};

/**
 * URI.js
 *
 * @fileoverview An RFC 3986 compliant, scheme extendable URI parsing/validating/resolving library for JavaScript.
 * @author <a href="mailto:gary.court@gmail.com">Gary Court</a>
 * @see http://github.com/garycourt/uri-js
 */
/**
 * Copyright 2011 Gary Court. All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without modification, are
 * permitted provided that the following conditions are met:
 *
 *    1. Redistributions of source code must retain the above copyright notice, this list of
 *       conditions and the following disclaimer.
 *
 *    2. Redistributions in binary form must reproduce the above copyright notice, this list
 *       of conditions and the following disclaimer in the documentation and/or other materials
 *       provided with the distribution.
 *
 * THIS SOFTWARE IS PROVIDED BY GARY COURT ``AS IS'' AND ANY EXPRESS OR IMPLIED
 * WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND
 * FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL GARY COURT OR
 * CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
 * CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
 * SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON
 * ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 * NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF
 * ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 *
 * The views and conclusions contained in the software and documentation are those of the
 * authors and should not be interpreted as representing official policies, either expressed
 * or implied, of Gary Court.
 */
var SCHEMES = {};
function pctEncChar(chr) {
    var c = chr.charCodeAt(0);
    var e = void 0;
    if (c < 16) e = "%0" + c.toString(16).toUpperCase();else if (c < 128) e = "%" + c.toString(16).toUpperCase();else if (c < 2048) e = "%" + (c >> 6 | 192).toString(16).toUpperCase() + "%" + (c & 63 | 128).toString(16).toUpperCase();else e = "%" + (c >> 12 | 224).toString(16).toUpperCase() + "%" + (c >> 6 & 63 | 128).toString(16).toUpperCase() + "%" + (c & 63 | 128).toString(16).toUpperCase();
    return e;
}
function pctDecChars(str) {
    var newStr = "";
    var i = 0;
    var il = str.length;
    while (i < il) {
        var c = parseInt(str.substr(i + 1, 2), 16);
        if (c < 128) {
            newStr += String.fromCharCode(c);
            i += 3;
        } else if (c >= 194 && c < 224) {
            if (il - i >= 6) {
                var c2 = parseInt(str.substr(i + 4, 2), 16);
                newStr += String.fromCharCode((c & 31) << 6 | c2 & 63);
            } else {
                newStr += str.substr(i, 6);
            }
            i += 6;
        } else if (c >= 224) {
            if (il - i >= 9) {
                var _c = parseInt(str.substr(i + 4, 2), 16);
                var c3 = parseInt(str.substr(i + 7, 2), 16);
                newStr += String.fromCharCode((c & 15) << 12 | (_c & 63) << 6 | c3 & 63);
            } else {
                newStr += str.substr(i, 9);
            }
            i += 9;
        } else {
            newStr += str.substr(i, 3);
            i += 3;
        }
    }
    return newStr;
}
function _normalizeComponentEncoding(components, protocol) {
    function decodeUnreserved(str) {
        var decStr = pctDecChars(str);
        return !decStr.match(protocol.UNRESERVED) ? str : decStr;
    }
    if (components.scheme) components.scheme = String(components.scheme).replace(protocol.PCT_ENCODED, decodeUnreserved).toLowerCase().replace(protocol.NOT_SCHEME, "");
    if (components.userinfo !== undefined) components.userinfo = String(components.userinfo).replace(protocol.PCT_ENCODED, decodeUnreserved).replace(protocol.NOT_USERINFO, pctEncChar).replace(protocol.PCT_ENCODED, toUpperCase);
    if (components.host !== undefined) components.host = String(components.host).replace(protocol.PCT_ENCODED, decodeUnreserved).toLowerCase().replace(protocol.NOT_HOST, pctEncChar).replace(protocol.PCT_ENCODED, toUpperCase);
    if (components.path !== undefined) components.path = String(components.path).replace(protocol.PCT_ENCODED, decodeUnreserved).replace(components.scheme ? protocol.NOT_PATH : protocol.NOT_PATH_NOSCHEME, pctEncChar).replace(protocol.PCT_ENCODED, toUpperCase);
    if (components.query !== undefined) components.query = String(components.query).replace(protocol.PCT_ENCODED, decodeUnreserved).replace(protocol.NOT_QUERY, pctEncChar).replace(protocol.PCT_ENCODED, toUpperCase);
    if (components.fragment !== undefined) components.fragment = String(components.fragment).replace(protocol.PCT_ENCODED, decodeUnreserved).replace(protocol.NOT_FRAGMENT, pctEncChar).replace(protocol.PCT_ENCODED, toUpperCase);
    return components;
}

function _stripLeadingZeros(str) {
    return str.replace(/^0*(.*)/, "$1") || "0";
}
function _normalizeIPv4(host, protocol) {
    var matches = host.match(protocol.IPV4ADDRESS) || [];

    var _matches = slicedToArray(matches, 2),
        address = _matches[1];

    if (address) {
        return address.split(".").map(_stripLeadingZeros).join(".");
    } else {
        return host;
    }
}
function _normalizeIPv6(host, protocol) {
    var matches = host.match(protocol.IPV6ADDRESS) || [];

    var _matches2 = slicedToArray(matches, 3),
        address = _matches2[1],
        zone = _matches2[2];

    if (address) {
        var _address$toLowerCase$ = address.toLowerCase().split('::').reverse(),
            _address$toLowerCase$2 = slicedToArray(_address$toLowerCase$, 2),
            last = _address$toLowerCase$2[0],
            first = _address$toLowerCase$2[1];

        var firstFields = first ? first.split(":").map(_stripLeadingZeros) : [];
        var lastFields = last.split(":").map(_stripLeadingZeros);
        var isLastFieldIPv4Address = protocol.IPV4ADDRESS.test(lastFields[lastFields.length - 1]);
        var fieldCount = isLastFieldIPv4Address ? 7 : 8;
        var lastFieldsStart = lastFields.length - fieldCount;
        var fields = Array(fieldCount);
        for (var x = 0; x < fieldCount; ++x) {
            fields[x] = firstFields[x] || lastFields[lastFieldsStart + x] || '';
        }
        if (isLastFieldIPv4Address) {
            fields[fieldCount - 1] = _normalizeIPv4(fields[fieldCount - 1], protocol);
        }
        var allZeroFields = fields.reduce(function (acc, field, index) {
            if (!field || field === "0") {
                var lastLongest = acc[acc.length - 1];
                if (lastLongest && lastLongest.index + lastLongest.length === index) {
                    lastLongest.length++;
                } else {
                    acc.push({ index: index, length: 1 });
                }
            }
            return acc;
        }, []);
        var longestZeroFields = allZeroFields.sort(function (a, b) {
            return b.length - a.length;
        })[0];
        var newHost = void 0;
        if (longestZeroFields && longestZeroFields.length > 1) {
            var newFirst = fields.slice(0, longestZeroFields.index);
            var newLast = fields.slice(longestZeroFields.index + longestZeroFields.length);
            newHost = newFirst.join(":") + "::" + newLast.join(":");
        } else {
            newHost = fields.join(":");
        }
        if (zone) {
            newHost += "%" + zone;
        }
        return newHost;
    } else {
        return host;
    }
}
var URI_PARSE = /^(?:([^:\/?#]+):)?(?:\/\/((?:([^\/?#@]*)@)?(\[[^\/?#\]]+\]|[^\/?#:]*)(?:\:(\d*))?))?([^?#]*)(?:\?([^#]*))?(?:#((?:.|\n|\r)*))?/i;
var NO_MATCH_IS_UNDEFINED = "".match(/(){0}/)[1] === undefined;
function parse(uriString) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    var components = {};
    var protocol = options.iri !== false ? IRI_PROTOCOL : URI_PROTOCOL;
    if (options.reference === "suffix") uriString = (options.scheme ? options.scheme + ":" : "") + "//" + uriString;
    var matches = uriString.match(URI_PARSE);
    if (matches) {
        if (NO_MATCH_IS_UNDEFINED) {
            //store each component
            components.scheme = matches[1];
            components.userinfo = matches[3];
            components.host = matches[4];
            components.port = parseInt(matches[5], 10);
            components.path = matches[6] || "";
            components.query = matches[7];
            components.fragment = matches[8];
            //fix port number
            if (isNaN(components.port)) {
                components.port = matches[5];
            }
        } else {
            //IE FIX for improper RegExp matching
            //store each component
            components.scheme = matches[1] || undefined;
            components.userinfo = uriString.indexOf("@") !== -1 ? matches[3] : undefined;
            components.host = uriString.indexOf("//") !== -1 ? matches[4] : undefined;
            components.port = parseInt(matches[5], 10);
            components.path = matches[6] || "";
            components.query = uriString.indexOf("?") !== -1 ? matches[7] : undefined;
            components.fragment = uriString.indexOf("#") !== -1 ? matches[8] : undefined;
            //fix port number
            if (isNaN(components.port)) {
                components.port = uriString.match(/\/\/(?:.|\n)*\:(?:\/|\?|\#|$)/) ? matches[4] : undefined;
            }
        }
        if (components.host) {
            //normalize IP hosts
            components.host = _normalizeIPv6(_normalizeIPv4(components.host, protocol), protocol);
        }
        //determine reference type
        if (components.scheme === undefined && components.userinfo === undefined && components.host === undefined && components.port === undefined && !components.path && components.query === undefined) {
            components.reference = "same-document";
        } else if (components.scheme === undefined) {
            components.reference = "relative";
        } else if (components.fragment === undefined) {
            components.reference = "absolute";
        } else {
            components.reference = "uri";
        }
        //check for reference errors
        if (options.reference && options.reference !== "suffix" && options.reference !== components.reference) {
            components.error = components.error || "URI is not a " + options.reference + " reference.";
        }
        //find scheme handler
        var schemeHandler = SCHEMES[(options.scheme || components.scheme || "").toLowerCase()];
        //check if scheme can't handle IRIs
        if (!options.unicodeSupport && (!schemeHandler || !schemeHandler.unicodeSupport)) {
            //if host component is a domain name
            if (components.host && (options.domainHost || schemeHandler && schemeHandler.domainHost)) {
                //convert Unicode IDN -> ASCII IDN
                try {
                    components.host = punycode.toASCII(components.host.replace(protocol.PCT_ENCODED, pctDecChars).toLowerCase());
                } catch (e) {
                    components.error = components.error || "Host's domain name can not be converted to ASCII via punycode: " + e;
                }
            }
            //convert IRI -> URI
            _normalizeComponentEncoding(components, URI_PROTOCOL);
        } else {
            //normalize encodings
            _normalizeComponentEncoding(components, protocol);
        }
        //perform scheme specific parsing
        if (schemeHandler && schemeHandler.parse) {
            schemeHandler.parse(components, options);
        }
    } else {
        components.error = components.error || "URI can not be parsed.";
    }
    return components;
}

function _recomposeAuthority(components, options) {
    var protocol = options.iri !== false ? IRI_PROTOCOL : URI_PROTOCOL;
    var uriTokens = [];
    if (components.userinfo !== undefined) {
        uriTokens.push(components.userinfo);
        uriTokens.push("@");
    }
    if (components.host !== undefined) {
        //normalize IP hosts, add brackets and escape zone separator for IPv6
        uriTokens.push(_normalizeIPv6(_normalizeIPv4(String(components.host), protocol), protocol).replace(protocol.IPV6ADDRESS, function (_, $1, $2) {
            return "[" + $1 + ($2 ? "%25" + $2 : "") + "]";
        }));
    }
    if (typeof components.port === "number" || typeof components.port === "string") {
        uriTokens.push(":");
        uriTokens.push(String(components.port));
    }
    return uriTokens.length ? uriTokens.join("") : undefined;
}

var RDS1 = /^\.\.?\//;
var RDS2 = /^\/\.(\/|$)/;
var RDS3 = /^\/\.\.(\/|$)/;
var RDS5 = /^\/?(?:.|\n)*?(?=\/|$)/;
function removeDotSegments(input) {
    var output = [];
    while (input.length) {
        if (input.match(RDS1)) {
            input = input.replace(RDS1, "");
        } else if (input.match(RDS2)) {
            input = input.replace(RDS2, "/");
        } else if (input.match(RDS3)) {
            input = input.replace(RDS3, "/");
            output.pop();
        } else if (input === "." || input === "..") {
            input = "";
        } else {
            var im = input.match(RDS5);
            if (im) {
                var s = im[0];
                input = input.slice(s.length);
                output.push(s);
            } else {
                throw new Error("Unexpected dot segment condition");
            }
        }
    }
    return output.join("");
}

function serialize(components) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    var protocol = options.iri ? IRI_PROTOCOL : URI_PROTOCOL;
    var uriTokens = [];
    //find scheme handler
    var schemeHandler = SCHEMES[(options.scheme || components.scheme || "").toLowerCase()];
    //perform scheme specific serialization
    if (schemeHandler && schemeHandler.serialize) schemeHandler.serialize(components, options);
    if (components.host) {
        //if host component is an IPv6 address
        if (protocol.IPV6ADDRESS.test(components.host)) {}
        //TODO: normalize IPv6 address as per RFC 5952

        //if host component is a domain name
        else if (options.domainHost || schemeHandler && schemeHandler.domainHost) {
                //convert IDN via punycode
                try {
                    components.host = !options.iri ? punycode.toASCII(components.host.replace(protocol.PCT_ENCODED, pctDecChars).toLowerCase()) : punycode.toUnicode(components.host);
                } catch (e) {
                    components.error = components.error || "Host's domain name can not be converted to " + (!options.iri ? "ASCII" : "Unicode") + " via punycode: " + e;
                }
            }
    }
    //normalize encoding
    _normalizeComponentEncoding(components, protocol);
    if (options.reference !== "suffix" && components.scheme) {
        uriTokens.push(components.scheme);
        uriTokens.push(":");
    }
    var authority = _recomposeAuthority(components, options);
    if (authority !== undefined) {
        if (options.reference !== "suffix") {
            uriTokens.push("//");
        }
        uriTokens.push(authority);
        if (components.path && components.path.charAt(0) !== "/") {
            uriTokens.push("/");
        }
    }
    if (components.path !== undefined) {
        var s = components.path;
        if (!options.absolutePath && (!schemeHandler || !schemeHandler.absolutePath)) {
            s = removeDotSegments(s);
        }
        if (authority === undefined) {
            s = s.replace(/^\/\//, "/%2F"); //don't allow the path to start with "//"
        }
        uriTokens.push(s);
    }
    if (components.query !== undefined) {
        uriTokens.push("?");
        uriTokens.push(components.query);
    }
    if (components.fragment !== undefined) {
        uriTokens.push("#");
        uriTokens.push(components.fragment);
    }
    return uriTokens.join(""); //merge tokens into a string
}

function resolveComponents(base, relative) {
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var skipNormalization = arguments[3];

    var target = {};
    if (!skipNormalization) {
        base = parse(serialize(base, options), options); //normalize base components
        relative = parse(serialize(relative, options), options); //normalize relative components
    }
    options = options || {};
    if (!options.tolerant && relative.scheme) {
        target.scheme = relative.scheme;
        //target.authority = relative.authority;
        target.userinfo = relative.userinfo;
        target.host = relative.host;
        target.port = relative.port;
        target.path = removeDotSegments(relative.path || "");
        target.query = relative.query;
    } else {
        if (relative.userinfo !== undefined || relative.host !== undefined || relative.port !== undefined) {
            //target.authority = relative.authority;
            target.userinfo = relative.userinfo;
            target.host = relative.host;
            target.port = relative.port;
            target.path = removeDotSegments(relative.path || "");
            target.query = relative.query;
        } else {
            if (!relative.path) {
                target.path = base.path;
                if (relative.query !== undefined) {
                    target.query = relative.query;
                } else {
                    target.query = base.query;
                }
            } else {
                if (relative.path.charAt(0) === "/") {
                    target.path = removeDotSegments(relative.path);
                } else {
                    if ((base.userinfo !== undefined || base.host !== undefined || base.port !== undefined) && !base.path) {
                        target.path = "/" + relative.path;
                    } else if (!base.path) {
                        target.path = relative.path;
                    } else {
                        target.path = base.path.slice(0, base.path.lastIndexOf("/") + 1) + relative.path;
                    }
                    target.path = removeDotSegments(target.path);
                }
                target.query = relative.query;
            }
            //target.authority = base.authority;
            target.userinfo = base.userinfo;
            target.host = base.host;
            target.port = base.port;
        }
        target.scheme = base.scheme;
    }
    target.fragment = relative.fragment;
    return target;
}

function resolve(baseURI, relativeURI, options) {
    var schemelessOptions = assign({ scheme: 'null' }, options);
    return serialize(resolveComponents(parse(baseURI, schemelessOptions), parse(relativeURI, schemelessOptions), schemelessOptions, true), schemelessOptions);
}

function normalize(uri, options) {
    if (typeof uri === "string") {
        uri = serialize(parse(uri, options), options);
    } else if (typeOf(uri) === "object") {
        uri = parse(serialize(uri, options), options);
    }
    return uri;
}

function equal(uriA, uriB, options) {
    if (typeof uriA === "string") {
        uriA = serialize(parse(uriA, options), options);
    } else if (typeOf(uriA) === "object") {
        uriA = serialize(uriA, options);
    }
    if (typeof uriB === "string") {
        uriB = serialize(parse(uriB, options), options);
    } else if (typeOf(uriB) === "object") {
        uriB = serialize(uriB, options);
    }
    return uriA === uriB;
}

function escapeComponent(str, options) {
    return str && str.toString().replace(!options || !options.iri ? URI_PROTOCOL.ESCAPE : IRI_PROTOCOL.ESCAPE, pctEncChar);
}

function unescapeComponent(str, options) {
    return str && str.toString().replace(!options || !options.iri ? URI_PROTOCOL.PCT_ENCODED : IRI_PROTOCOL.PCT_ENCODED, pctDecChars);
}

var handler = {
    scheme: "http",
    domainHost: true,
    parse: function parse(components, options) {
        //report missing host
        if (!components.host) {
            components.error = components.error || "HTTP URIs must have a host.";
        }
        return components;
    },
    serialize: function serialize(components, options) {
        var secure = String(components.scheme).toLowerCase() === "https";
        //normalize the default port
        if (components.port === (secure ? 443 : 80) || components.port === "") {
            components.port = undefined;
        }
        //normalize the empty path
        if (!components.path) {
            components.path = "/";
        }
        //NOTE: We do not parse query strings for HTTP URIs
        //as WWW Form Url Encoded query strings are part of the HTML4+ spec,
        //and not the HTTP spec.
        return components;
    }
};

var handler$1 = {
    scheme: "https",
    domainHost: handler.domainHost,
    parse: handler.parse,
    serialize: handler.serialize
};

function isSecure(wsComponents) {
    return typeof wsComponents.secure === 'boolean' ? wsComponents.secure : String(wsComponents.scheme).toLowerCase() === "wss";
}
//RFC 6455
var handler$2 = {
    scheme: "ws",
    domainHost: true,
    parse: function parse(components, options) {
        var wsComponents = components;
        //indicate if the secure flag is set
        wsComponents.secure = isSecure(wsComponents);
        //construct resouce name
        wsComponents.resourceName = (wsComponents.path || '/') + (wsComponents.query ? '?' + wsComponents.query : '');
        wsComponents.path = undefined;
        wsComponents.query = undefined;
        return wsComponents;
    },
    serialize: function serialize(wsComponents, options) {
        //normalize the default port
        if (wsComponents.port === (isSecure(wsComponents) ? 443 : 80) || wsComponents.port === "") {
            wsComponents.port = undefined;
        }
        //ensure scheme matches secure flag
        if (typeof wsComponents.secure === 'boolean') {
            wsComponents.scheme = wsComponents.secure ? 'wss' : 'ws';
            wsComponents.secure = undefined;
        }
        //reconstruct path from resource name
        if (wsComponents.resourceName) {
            var _wsComponents$resourc = wsComponents.resourceName.split('?'),
                _wsComponents$resourc2 = slicedToArray(_wsComponents$resourc, 2),
                path = _wsComponents$resourc2[0],
                query = _wsComponents$resourc2[1];

            wsComponents.path = path && path !== '/' ? path : undefined;
            wsComponents.query = query;
            wsComponents.resourceName = undefined;
        }
        //forbid fragment component
        wsComponents.fragment = undefined;
        return wsComponents;
    }
};

var handler$3 = {
    scheme: "wss",
    domainHost: handler$2.domainHost,
    parse: handler$2.parse,
    serialize: handler$2.serialize
};

var O = {};
var isIRI = true;
//RFC 3986
var UNRESERVED$$ = "[A-Za-z0-9\\-\\.\\_\\~" + (isIRI ? "\\xA0-\\u200D\\u2010-\\u2029\\u202F-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF" : "") + "]";
var HEXDIG$$ = "[0-9A-Fa-f]"; //case-insensitive
var PCT_ENCODED$ = subexp(subexp("%[EFef]" + HEXDIG$$ + "%" + HEXDIG$$ + HEXDIG$$ + "%" + HEXDIG$$ + HEXDIG$$) + "|" + subexp("%[89A-Fa-f]" + HEXDIG$$ + "%" + HEXDIG$$ + HEXDIG$$) + "|" + subexp("%" + HEXDIG$$ + HEXDIG$$)); //expanded
//RFC 5322, except these symbols as per RFC 6068: @ : / ? # [ ] & ; =
//const ATEXT$$ = "[A-Za-z0-9\\!\\#\\$\\%\\&\\'\\*\\+\\-\\/\\=\\?\\^\\_\\`\\{\\|\\}\\~]";
//const WSP$$ = "[\\x20\\x09]";
//const OBS_QTEXT$$ = "[\\x01-\\x08\\x0B\\x0C\\x0E-\\x1F\\x7F]";  //(%d1-8 / %d11-12 / %d14-31 / %d127)
//const QTEXT$$ = merge("[\\x21\\x23-\\x5B\\x5D-\\x7E]", OBS_QTEXT$$);  //%d33 / %d35-91 / %d93-126 / obs-qtext
//const VCHAR$$ = "[\\x21-\\x7E]";
//const WSP$$ = "[\\x20\\x09]";
//const OBS_QP$ = subexp("\\\\" + merge("[\\x00\\x0D\\x0A]", OBS_QTEXT$$));  //%d0 / CR / LF / obs-qtext
//const FWS$ = subexp(subexp(WSP$$ + "*" + "\\x0D\\x0A") + "?" + WSP$$ + "+");
//const QUOTED_PAIR$ = subexp(subexp("\\\\" + subexp(VCHAR$$ + "|" + WSP$$)) + "|" + OBS_QP$);
//const QUOTED_STRING$ = subexp('\\"' + subexp(FWS$ + "?" + QCONTENT$) + "*" + FWS$ + "?" + '\\"');
var ATEXT$$ = "[A-Za-z0-9\\!\\$\\%\\'\\*\\+\\-\\^\\_\\`\\{\\|\\}\\~]";
var QTEXT$$ = "[\\!\\$\\%\\'\\(\\)\\*\\+\\,\\-\\.0-9\\<\\>A-Z\\x5E-\\x7E]";
var VCHAR$$ = merge(QTEXT$$, "[\\\"\\\\]");
var SOME_DELIMS$$ = "[\\!\\$\\'\\(\\)\\*\\+\\,\\;\\:\\@]";
var UNRESERVED = new RegExp(UNRESERVED$$, "g");
var PCT_ENCODED = new RegExp(PCT_ENCODED$, "g");
var NOT_LOCAL_PART = new RegExp(merge("[^]", ATEXT$$, "[\\.]", '[\\"]', VCHAR$$), "g");
var NOT_HFNAME = new RegExp(merge("[^]", UNRESERVED$$, SOME_DELIMS$$), "g");
var NOT_HFVALUE = NOT_HFNAME;
function decodeUnreserved(str) {
    var decStr = pctDecChars(str);
    return !decStr.match(UNRESERVED) ? str : decStr;
}
var handler$4 = {
    scheme: "mailto",
    parse: function parse$$1(components, options) {
        var mailtoComponents = components;
        var to = mailtoComponents.to = mailtoComponents.path ? mailtoComponents.path.split(",") : [];
        mailtoComponents.path = undefined;
        if (mailtoComponents.query) {
            var unknownHeaders = false;
            var headers = {};
            var hfields = mailtoComponents.query.split("&");
            for (var x = 0, xl = hfields.length; x < xl; ++x) {
                var hfield = hfields[x].split("=");
                switch (hfield[0]) {
                    case "to":
                        var toAddrs = hfield[1].split(",");
                        for (var _x = 0, _xl = toAddrs.length; _x < _xl; ++_x) {
                            to.push(toAddrs[_x]);
                        }
                        break;
                    case "subject":
                        mailtoComponents.subject = unescapeComponent(hfield[1], options);
                        break;
                    case "body":
                        mailtoComponents.body = unescapeComponent(hfield[1], options);
                        break;
                    default:
                        unknownHeaders = true;
                        headers[unescapeComponent(hfield[0], options)] = unescapeComponent(hfield[1], options);
                        break;
                }
            }
            if (unknownHeaders) mailtoComponents.headers = headers;
        }
        mailtoComponents.query = undefined;
        for (var _x2 = 0, _xl2 = to.length; _x2 < _xl2; ++_x2) {
            var addr = to[_x2].split("@");
            addr[0] = unescapeComponent(addr[0]);
            if (!options.unicodeSupport) {
                //convert Unicode IDN -> ASCII IDN
                try {
                    addr[1] = punycode.toASCII(unescapeComponent(addr[1], options).toLowerCase());
                } catch (e) {
                    mailtoComponents.error = mailtoComponents.error || "Email address's domain name can not be converted to ASCII via punycode: " + e;
                }
            } else {
                addr[1] = unescapeComponent(addr[1], options).toLowerCase();
            }
            to[_x2] = addr.join("@");
        }
        return mailtoComponents;
    },
    serialize: function serialize$$1(mailtoComponents, options) {
        var components = mailtoComponents;
        var to = toArray(mailtoComponents.to);
        if (to) {
            for (var x = 0, xl = to.length; x < xl; ++x) {
                var toAddr = String(to[x]);
                var atIdx = toAddr.lastIndexOf("@");
                var localPart = toAddr.slice(0, atIdx).replace(PCT_ENCODED, decodeUnreserved).replace(PCT_ENCODED, toUpperCase).replace(NOT_LOCAL_PART, pctEncChar);
                var domain = toAddr.slice(atIdx + 1);
                //convert IDN via punycode
                try {
                    domain = !options.iri ? punycode.toASCII(unescapeComponent(domain, options).toLowerCase()) : punycode.toUnicode(domain);
                } catch (e) {
                    components.error = components.error || "Email address's domain name can not be converted to " + (!options.iri ? "ASCII" : "Unicode") + " via punycode: " + e;
                }
                to[x] = localPart + "@" + domain;
            }
            components.path = to.join(",");
        }
        var headers = mailtoComponents.headers = mailtoComponents.headers || {};
        if (mailtoComponents.subject) headers["subject"] = mailtoComponents.subject;
        if (mailtoComponents.body) headers["body"] = mailtoComponents.body;
        var fields = [];
        for (var name in headers) {
            if (headers[name] !== O[name]) {
                fields.push(name.replace(PCT_ENCODED, decodeUnreserved).replace(PCT_ENCODED, toUpperCase).replace(NOT_HFNAME, pctEncChar) + "=" + headers[name].replace(PCT_ENCODED, decodeUnreserved).replace(PCT_ENCODED, toUpperCase).replace(NOT_HFVALUE, pctEncChar));
            }
        }
        if (fields.length) {
            components.query = fields.join("&");
        }
        return components;
    }
};

var URN_PARSE = /^([^\:]+)\:(.*)/;
//RFC 2141
var handler$5 = {
    scheme: "urn",
    parse: function parse$$1(components, options) {
        var matches = components.path && components.path.match(URN_PARSE);
        var urnComponents = components;
        if (matches) {
            var scheme = options.scheme || urnComponents.scheme || "urn";
            var nid = matches[1].toLowerCase();
            var nss = matches[2];
            var urnScheme = scheme + ":" + (options.nid || nid);
            var schemeHandler = SCHEMES[urnScheme];
            urnComponents.nid = nid;
            urnComponents.nss = nss;
            urnComponents.path = undefined;
            if (schemeHandler) {
                urnComponents = schemeHandler.parse(urnComponents, options);
            }
        } else {
            urnComponents.error = urnComponents.error || "URN can not be parsed.";
        }
        return urnComponents;
    },
    serialize: function serialize$$1(urnComponents, options) {
        var scheme = options.scheme || urnComponents.scheme || "urn";
        var nid = urnComponents.nid;
        var urnScheme = scheme + ":" + (options.nid || nid);
        var schemeHandler = SCHEMES[urnScheme];
        if (schemeHandler) {
            urnComponents = schemeHandler.serialize(urnComponents, options);
        }
        var uriComponents = urnComponents;
        var nss = urnComponents.nss;
        uriComponents.path = (nid || options.nid) + ":" + nss;
        return uriComponents;
    }
};

var UUID = /^[0-9A-Fa-f]{8}(?:\-[0-9A-Fa-f]{4}){3}\-[0-9A-Fa-f]{12}$/;
//RFC 4122
var handler$6 = {
    scheme: "urn:uuid",
    parse: function parse(urnComponents, options) {
        var uuidComponents = urnComponents;
        uuidComponents.uuid = uuidComponents.nss;
        uuidComponents.nss = undefined;
        if (!options.tolerant && (!uuidComponents.uuid || !uuidComponents.uuid.match(UUID))) {
            uuidComponents.error = uuidComponents.error || "UUID is not valid.";
        }
        return uuidComponents;
    },
    serialize: function serialize(uuidComponents, options) {
        var urnComponents = uuidComponents;
        //normalize UUID
        urnComponents.nss = (uuidComponents.uuid || "").toLowerCase();
        return urnComponents;
    }
};

SCHEMES[handler.scheme] = handler;
SCHEMES[handler$1.scheme] = handler$1;
SCHEMES[handler$2.scheme] = handler$2;
SCHEMES[handler$3.scheme] = handler$3;
SCHEMES[handler$4.scheme] = handler$4;
SCHEMES[handler$5.scheme] = handler$5;
SCHEMES[handler$6.scheme] = handler$6;

exports.SCHEMES = SCHEMES;
exports.pctEncChar = pctEncChar;
exports.pctDecChars = pctDecChars;
exports.parse = parse;
exports.removeDotSegments = removeDotSegments;
exports.serialize = serialize;
exports.resolveComponents = resolveComponents;
exports.resolve = resolve;
exports.normalize = normalize;
exports.equal = equal;
exports.escapeComponent = escapeComponent;
exports.unescapeComponent = unescapeComponent;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=uri.all.js.map


/***/ }),

/***/ "./src/assets/imgs/arrow.png":
/*!***********************************!*\
  !*** ./src/assets/imgs/arrow.png ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAABvElEQVRIS+XWvUrDUBQH8P+51qZ+0C6u4uwoRQenCsXG78kX8AHEVsFRxw7aFDdBH0A3QUojIk6KID6BoELB3YKStM2RoNXaJjVpbxUxU4Z78jvn3nPvDeGXHvolF38HntrhMMrlESZvSTNXCnoqdFs/s74qTmSMBSIcAFB8LREjl08pM7UxvmBVM44AzPtC3wczKKongzfVWF9wQjPSBKy3AgNiIp/sPm8JXjzkrmLBWAZRxAlnRpQIs86JtQE3q1TNmqNgPgUQ/jHYRpn5jIB+9+QkV+yCGgBfAhT7TEQi7I4KFbBsdEM63Ay1u1fVjE3p8HeoXaV02AsqHfaKSoUnt0vjJCy9bssYgFBrT6RqM0mZahsVZJ2C0FOzT11Re8ykZi4J8L79zkAJCA7pSXr0fGQ6oowXkJh2qrT6Yft4fSoYWYAGWfDeyUro2PPt5IZaLOInq90XrV0Wb1Gut1MnUVe406gj/BNoAxzb4gFFmPdE6PtYP8aLjDWt74cva5zImGNEfNVptKHiuV3uNZ/NawKGwShaLNR2u9et8xu6Op7mSEApj4hK4C63Rg/tbJlmsb5+9mQm8f/gVxWf/x9Ysb+OAAAAAElFTkSuQmCC"

/***/ }),

/***/ "./src/assets/imgs/back.png":
/*!**********************************!*\
  !*** ./src/assets/imgs/back.png ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAEfElEQVRIS8WWa4hUZRjH//8zXtKFFArybs05wUISUULqB9E9R7vQBT8YIblSGVgWVu6MVpSTZLt7xkzQbhSpGXSTEhGzPGeWgqhPiYZCcs7squgSUX0xNzfn/GNGZ52ZHecSgufT8M7zPL/neZ/L+xBX6eNV4qJxsMAO35plEAsFTQEwieB5Sf0g+6Tcvo1O7+FGA6kLfmafNfqa0UoAXEXg+pqGhayMaEN6fnYbCNWSrQlOeuZ8EdsITocUgfQjRtuRM07njRrUeADTQMyQMI/kzRdhhxhFS7sXZH+5HPyy4KRnrgbggjQA7DmvKLHJyR6rFUWyJz5TkbGVwJ2CBiA8mnbCz6rpVAUnPOtVEq9I+JsGlrhtwZ5Gc5eXS3hmkkBn3ulIWLrRCT6u1B8G7vCsRwxiJ6SzNKI53W29h5qBFmUT/k0LgdheSPkbuy/thPtL7ZSB1xyIj4tonCBxLZRb7Dq9uyqhiz9H7Mbr4g+l7ewn9RxKZMx2ijsknWyZGFqpWzBY1CkDJ33zNYAvSdibdoL7q0PNLwguGqHchNed3t/qwZOe9SOIWUD0nGtnNw8HC0z61u+CxsdiaO2aHwalRi9EegGaPx8c+e+kzXOP99cFZ+I2ZHiAfnXtsHUYeI1vzhH4g4Dv0nYwrxa0GXBeNumZp0FOFGCl7SDMnw1dddK31gFIUVjd7QSbiuDKSEscOiOoD2IfoKMRuOMNJzha7QaSvrkF4NNA9KRrZ98tB3vmdpDLJN1TrMAa0GH2BQnCzhH45/lO59QfpQJJz3oKxFtQ1Ok62RfLwAnPPEDSIXO3FVso4ZvvE1xeL4+l/ws4FdPg3C7nRLZ43uGbiwzwSwDbXDt4rCpYwB1pO/i5kBs/vgIw3mkGXJAVDrpOcPsQOGM9aAi7BX2QtsMnKsE7SLZDWuQ64e6iUtKPPwsYbzYLF3J3pe3eb0sDkLA+7QT5WiorrhSAdQK60nbwQlmO/ge8FJLwzc0EV4nR4+m27Idl4GI7QTrhOuH0yggrIx877mxLaubps6kejDhjTJ+K3MhbGWkFybsv6Gqna4ft+V8J3+wnOAG5c5PdhScLL9ulyVUYIOZfIMdFkL3RDjO14EVwpUyHb7ZR/ArQ12knfDh5aYAcce1wRlG+fGRmzJchrofwk+sEs6vlNeFbayltGBjk2C33Bueq9m2PNSWWGxjotE/9mchYRwm0QljpOsHbVcH5bWPMKB0DOa1ykJQC1nrT4qXtcrnCS2TiWyljZd1HIm+gw7NmG8T3gmKGsKTbCT9ttqILeR1605Wr+ywOtVDGTEB0C9OIWl6sxEYcyD+tMoyPADyQl294ERiCe+ZqAd0kYxB2iVhbHPDVHOj45oYWxlqWg0wRHC/hHKBlTa0+JfCyZU/gYRA9FAIZUR8jjhIxFcJMEIsJjrnYSkcEthcnYDVHm1hvsbLQizU+QccBdbe0Zd9LEVEt2brgIeWLCz0RLQA5lcBkgech9dNgn5HD/q4FwcFG6qB8gDSqcYXkGo/4CgGLZv4D60EPPWzjB68AAAAASUVORK5CYII="

/***/ }),

/***/ "./src/assets/imgs/cancel.png":
/*!************************************!*\
  !*** ./src/assets/imgs/cancel.png ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAABkElEQVRYR+2Wv07CcBDHf1eaaNq+haMv4Ao9dk18BZhAF1iITsQ4QFxgEZ7B6EyO2Vdw8iloownhTKsltemfX69DGfitvbvvp9+73x9QNS+oWV8dAQ7Tge9m83xrmk/AvLCIXqrMie+6NzvDuDCZ706JPpO1Uh3wEF8VwGUQDMx9i2gugfARewwwC3OZ32yiKz2AdnuklHqIgiUQ/8QD/d1u5KzXj1oAQZCHuFAAHQlEUlwxL22ibpqLuUMogdggDgBgshfLEQ9bXNTbJAQzDx2iaVpeivjcJurnaRQC/LVjpgB6UaE0CIm4lgORqIeYCSEVLwWQ5URYJNZzZp46RMOi1u6HWzcwy4l4flnx0g7kQUjExQAbxAkADKr+vQggOYxVIbS2Yab1zPfhN4Bx7OAp3PtxaG2AWrehzmkoPQsKHdARjyyVQBzmZcRKgY/4XNt17NX9IIk/yRRz1yZalj2yg3jxk+yr1TrbNhpjg/ndIvp90wmX77rXbBgdE+D2ZLX6SJYp3AVCXe20I8DRgR/EvCcwIlPjxgAAAABJRU5ErkJggg=="

/***/ }),

/***/ "./src/assets/imgs/color.png":
/*!***********************************!*\
  !*** ./src/assets/imgs/color.png ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAEUElEQVRIS+2VXWwUZRSG3/ebbUuhf7Oh1QtR2+4umAbTBONP/Enw5wLxQhLDBRilQFi7w4+aYDDRpIlCg6ka2842jVAMMQRMBLzQVKMJJMRIVBLQAO5sqVgUhWRmtxCK7c4cM1vAtdLdLSb0xrmazHfmPOd9v3O+j5imh9PExf/gm+b8jVndJqqi1pobULzFr5Siucy4g/b68JliKy8aHOy2mkRxLSHNEJkP4oyAv4+DRBGcC0i5gN/DVeuddY0/5CuiMLhNAnpd8hUINpLodJUc0kZ52F4fHs5NrPcO3H6JmDFzzF0IYgsEW53z4Q600bteAXnB1fFEgwL2Ahhmhst8K3XTWp5NDAx6Glalo+GBoJnYAXKFiGQAbhDRPiUzH5I4YMcir08N7CutTR4RyPaUEXnv6s9B0xoCcVvWYGCrU1H5hn7xQpqAlv0mOOIY4QVV24aCgdGRHz0VWJR6oeHoRPikivW4tRki9Y7LlmqFpvSswHG01F/WzcRBko+MJ2LUPte4Ta+z/iA4+wr4E8cIP+2/6/HkIor3tl071oylTaO58OuCq+PJBZrIfrhogiYfgFwiIp85RmRxRU+yrsSTNwEec2obe7CUbo2ZaCbYDkrKQ1ksHbvDuQrR44lBIVtSreEDBcF63NopRJ8fHIwnDgO8VyBHnVikudhx+Rts7QO5x2kN7S4IDpqJL20j8njWrq6B+dS8JzylfXV1r6q7fq5X2ugmt7T81eHVc+x8xehmcisgpx0jHM8PfmeoXC8b6fcUOpXwWVfUlmGj8dvcn6q6E/cFFL8B5NeMaEsmrv9jzExrjwdsTxvhL/KCq3uSjypPngcwh8RCgXQ4scjGiaqCZmKvv/cQOWkbkbsmUx00E8cvB0ofuxS982xesN498CSUtxxkHJ68hoCKOtHGXyYmruz9abbmqnYFrPaIVanWcN+/4L1Somess44RyXZ8fsXxRIMmPGgHQg2IcqxQM+k9Vis8dAvYkjJCO3Pja3qslUow346FXyoIzjaUae0nxHOpNqe1xmOFCsjCBaYIV1yDbz9ZGbysfWfPcO/BqnkXigKj0yqrCcgyCp4BcT+gPnJioVa0iaqpGzAo8hDBHbYR6r82NlfgFEZtI/R+jWl1gDydioW6ruda4UvCPFehM93vUntZEzcC4KnREm1D6Vjma6e8pMk/zXLhFMRFuE4owdTs0Gb/gLkx8Lj17STOC3iCIitHFY1SkUN2eeDuXLAPqIlbLyrgXR/uGKHuyXqksOLsmXvqYYj78Z9Qi0vpPUjBA1Tos1vDn/uJZ5mDt5Yws4bAcxSu9SjzfDiEG20j1HHDirNKzMQGEm8BOAEwNZ5MdABVEA6S3G1L1S4YdRdzlU8GL0rxtYp7f5tZlRlpUsqbBfFvQBlKxyKnJrNTN61NJNohXOM3XN45LjS3U12/4tR5JxbZdVPB/6m5pqqymPip7XExGYuMmTbwX5NFzi48sixUAAAAAElFTkSuQmCC"

/***/ }),

/***/ "./src/assets/imgs/cursor.ico":
/*!************************************!*\
  !*** ./src/assets/imgs/cursor.ico ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/vnd.microsoft.icon;base64,AAABAAQAICAAAAEACACoCAAARgAAABAQAAABAAgAaAUAAO4IAAAgIAAAAQAgAKgQAABWDgAAEBAAAAEAIABoBAAA/h4AACgAAAAgAAAAQAAAAAEACAAAAAAAAAQAAAAAAAAAAAAAAAEAAAABAAAAAAAAAFX/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD///8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/wEBAQH/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP8BAf//AQH/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/wEB//8BAf8AAAAAAAAAAAAAAAAAAAAAAAAAAP//AAD/AQH//wEB/wAAAAAAAAAAAAAAAAAAAAAAAAAA/wD/AP8BAf//AQH/AAAAAAAAAAAAAAAAAAAAAAAAAAD/AAD//wEB//8BAf8AAAAAAAAAAAAAAAAAAAAAAAAAAP8AAAD/////////AAAAAAAAAAAAAAAAAAAAAAAAAAAA/wAAAAAAAAD/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/AAAAAAAA/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP8AAAAAAP8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/wAAAAD/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/AAAA/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP8AAP8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/wD/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/////////////////////////////////////////////////////////////////////////////////////8P///+B////AP///wD///MA///xAP//8AD///AB///wB///8A////Af///wP///8H////D////x////8/////KAAAABAAAAAgAAAAAQAIAAAAAAAAAQAAAAAAAAAAAAAAAQAAAAEAAAAAAAAAVf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP///wAAAAAAAAD/////AAAAAAAAAAAAAAD/AQEBAf8AAAAAAAAAAAD/AQH//wEB/wAAAAAAAAAA/wEB//8BAf8AAAAA//8AAP8BAf//AQH/AAAAAP8A/wD/AQH//wEB/wAAAAD/AAD//wEB//8BAf8AAAAA/wAAAP////////8AAAAAAP8AAAAAAAAA/wAAAAAAAAD/AAAAAAAA/wAAAAAAAAAA/wAAAAAA/wAAAAAAAAAAAP8AAAAA/wAAAAAAAAAAAAD/AAAA/wAAAAAAAAAAAAAA/wAA/wAAAAAAAAAAAAAAAP8A/wAAAAAAAAAAAAAAAAD//wAAAAAAAAAAAAAAAAAA/D8AAPgfAADwDwAA8A8AADAPAAAQDwAAAA8AAAAfAAAAfwAAAP8AAAH/AAAD/wAAB/8AAA//AAAf/wAAP/8AACgAAAAgAAAAQAAAAAEAIAAAAAAAgBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP////////////////////8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/////AFX//wBV//8AVf//AFX///////8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/////wBV//8AVf////////////8AVf//AFX///////8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/////AFX//wBV/////////////wBV//8AVf///////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//////////8AAAAAAAAAAP////8AVf//AFX/////////////AFX//wBV////////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/////AAAA//////8AAAAA/////wBV//8AVf////////////8AVf//AFX///////8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP////8AAAD/AAAA////////////AFX//wBV/////////////wBV//8AVf///////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/////wAAAP8AAAD/AAAA//////////////////////////////////////8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/////AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA//////8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP////8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP//////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/////wAAAP8AAAD/AAAA/wAAAP8AAAD//////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/////AAAA/wAAAP8AAAD/AAAA//////8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP////8AAAD/AAAA/wAAAP//////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/////wAAAP8AAAD//////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/////AAAA//////8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP//////////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//////////////////////////////////////////////////////////////////////////////////////w////4H///8A////AP//8wD///EA///wAP//8AH///AH///wD///8B////A////wf///8P////H////z////8oAAAAEAAAACAAAAABACAAAAAAAEAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/////////////////////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/////wBV//8AVf//AFX//wBV////////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/////wBV//8AVf////////////8AVf//AFX///////8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP////8AVf//AFX/////////////AFX//wBV////////AAAAAAAAAAAAAAAAAAAAAP//////////AAAAAAAAAAD/////AFX//wBV/////////////wBV//8AVf///////wAAAAAAAAAAAAAAAAAAAAD/////AAAA//////8AAAAA/////wBV//8AVf////////////8AVf//AFX///////8AAAAAAAAAAAAAAAAAAAAA/////wAAAP8AAAD///////////8AVf//AFX/////////////AFX//wBV////////AAAAAAAAAAAAAAAAAAAAAP////8AAAD/AAAA/wAAAP//////////////////////////////////////AAAAAAAAAAAAAAAAAAAAAAAAAAD/////AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA//////8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/////wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA//////8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP////8AAAD/AAAA/wAAAP8AAAD/AAAA//////8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/////AAAA/wAAAP8AAAD/AAAA//////8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/////wAAAP8AAAD/AAAA//////8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP////8AAAD/AAAA//////8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/////AAAA//////8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//////////8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPw/AAD4HwAA8A8AAPAPAAAwDwAAEA8AAAAPAAAAHwAAAH8AAAD/AAAB/wAAA/8AAAf/AAAP/wAAH/8AAD//AAA="

/***/ }),

/***/ "./src/assets/imgs/draw.png":
/*!**********************************!*\
  !*** ./src/assets/imgs/draw.png ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAACM0lEQVRIS+3UO2hTYRgG4PftyR+Q9CqCEkgGJc2pRWgRBCkIVtChIDrYQR1EHFx0cnJROqh066IEFHRz00UXg9R08AJaXDRBRcwpQXBw0dj85/JJYkOjPWlzOTFLM2XI+Z687/efn+jSh11ysQn/t+YDr/rDVvS7veohwIMAchA9aVoo/JsoUHgFfQZwrAqJ4PqIpS93DPZDK5gn58wl+05H4C9xDP2CelqbdAV6nMzrowTcwOEyWhS1QHK0driIPDEte4qA7Xdi29pxXRR4ZOb18Xpo+Y+0DG+AHiPgrPdutgTnotjmGWp+bb14YFp6eiO0pcR/DlL4OYDk3zutoCf8DlIgO/48iMFSn8qA3LP6rsp907JPN4o2lfjrdkS+h9XtkItZV9sfsUWlQe4TqaAnCUgz921DOy6nXO5XaYJ7ReQnKUcinvOmSHV22LJvNouum7hSaa+6CmJCgDGSodVEUjIc7E8U7MVmUtb+1jexAKFsTC0S2CGQGxC8JnumQFwqPywiLwZc+1C0gGKg8PuYOgMiFQLHE3n9rjo8G1Ovyt/dZXty9Bt+tIr6Vv1pCAO6L/wWwL2RvL5SOzwbV2l6kkkuOTPtoGvgbDw0AeEtkBEjr3cngFKlWoC5uLoAcI7iHUhazkLAcHgaIncBvCSYgrgloTEO4hSAnRBJmZZ9vl3Ut+psFEkY6qKAhwnZBUJDON8D79qw5WSCQJu6QIICq3MaukCCRjcTd6LRujO7tuPfh7/TH020z8AAAAAASUVORK5CYII="

/***/ }),

/***/ "./src/assets/imgs/ellipse.png":
/*!*************************************!*\
  !*** ./src/assets/imgs/ellipse.png ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAADQElEQVRIS9WWT2gUZxjGn3dmIsbsrOhF8E+1hXpKQKtUD56sxaZFPKjb3Un00IqFQquZXXMUr0p2llAoVApVSWbWzUWkBGlpexQV06LisbZWhV4s3dl1Q3dmHhllIerszmQ1hM5xvvd9ft/7fR/v+wgW6ZNF4uL/AR6pcKXi1zIgBiBcT8AXyn0CN6mlpkoZeZT0BBNVPOLUtyr0T0BkEIAG8F9Q7lIgAm4AZDkAj+A0oJ60cn2/xm2gI7hwnn3sqZ0FsB/AbZDjAZf8XBpa+vtc4ZHJ2bdE+e89gXwJoJ/A1Kya+uTrjNTabaAt+Gil8YbmNX8AsJqCvJXVv4UIO1ZCill2DwtRBOSBp2m7xzO996JyIsFfTDDdo7o3AGkqqvbRWKb3btzRzV0vVBpv0vOmKdSavr7lq2GpvpgfCc7b7o8UbPQp744bqb/nA23FHnMaG1Q2bwJytWjo78eCC3Z9DxFcDDTZVMqkbnUDbeUUbDdDwQWKssfK9n0/V+ulik3HnRHwdjGXPvQq0Fau6VSvA6JaOf2dtuBRp77aR/AgCNRtpaFl114HOF+uD4LBtOqr604PL7vf0nyuYtN2PxPhqWJWXxH7ghPu6kCF6jrPfQTIqGXo30SC83Z1jCKbrJy+K6FuorC87f5E4YyVSx+PrthxJ4Vg0dCHEykmDDIjdJ876rztToRaCwEGGVhG+mCbO66GHWezZeg7ExaTKCzvuL+AvFE00oXoOy67RxBw7J6mr5jKiJ9INS6IlHzZ/Qcio8WsfiYSPDrxeK2v+n8FlMGSkbocp5lk3Sw/3i70r6hQ1pzO9T2MBIc/TSfs0WxYufSOJMJxMaZdPQeRfiunb+nYuZ62TAkuCfHxmKFX4oQ7rY9UagOKx9+oKHtjW2Yo9GxIcLsEPf3Fod4/u4EftWurNOEMiDuJhkQIaY1FIXzRegbnOxaPT86+HUjz0rzH4tOqJxvrId5lgGsoOGZl9e9i22j4gh33UwBWaARA7YN2J9bR+nxeYWqpVzsrgn3ztD4XZtXU4a6sz9x7NZ36ZsA/KZAPW2aPkD/CmAUxey8+qtDeilc7AMFACFxwe9vNq47LSeSr40S6WV808BNkBHIuAp7D7gAAAABJRU5ErkJggg=="

/***/ }),

/***/ "./src/assets/imgs/rect.png":
/*!**********************************!*\
  !*** ./src/assets/imgs/rect.png ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAA5klEQVRIS2NkGCDAOED2MoxaDA75ouWfUhkYGKWpEQ2MjIzveW9wT25oYPyHbB5GUBct/5TEyMA4lxqWIsz4X90byddGwOLPDYwMDPX/GRg2MjAwXKDEAYz/GVQYGBmi//9nmNkXxZtBpMWMiX2RPAsosbhw2RcPJsb/20ctBoUilsQFi+PRoCY9mY0mrtF8jJJqipaPZifSsxFMx2h2GvTZqZOJ4f8O8mOYgeH///9mDIyMnUTVx8XLPpWBFFNiIaZeIpo+oav+M8v9+5rz//9/QWpYTnRjjxqWEWPGaIOemFCiihoAPCwYLhqAkIYAAAAASUVORK5CYII="

/***/ }),

/***/ "./src/assets/imgs/text.png":
/*!**********************************!*\
  !*** ./src/assets/imgs/text.png ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAApUlEQVRIS2NkGCDAOED2MoxaTLeQxxnUHn0/DjAwMtpT5pL/B3YUcjhiM4PWFu/bUcjhTJrF/b8SGBj+K2D18X8GBQZGhnio3AIGBoaH2NT9Z2S8t7OAbRFJFuMLYvfe346MTP/2gdQw/mdy2F7EepDUKCErO41aPBrUxCS00cRFTCgxjGan0exETEIZzU7EhNIIzE5EBQsBRWQlrlGLyQmBAQtqAM8ijR/H6NfmAAAAAElFTkSuQmCC"

/***/ }),

/***/ "./src/backRightClient.js":
/*!********************************!*\
  !*** ./src/backRightClient.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = backRightClient;
function backRightClient(e) {
    var clientHeight = window.wonder_containerDocument.documentElement.clientHeight;
    var clientWidth = window.wonder_containerDocument.documentElement.clientWidth;
    var clientX = e.clientX;
    var clientY = e.clientY;

    if (clientX < 0) {
        clientX = 0;
    }

    if (clientX > clientWidth) {
        clientX = clientWidth;
    }

    if (clientY < 0) {
        clientY = 0;
    }

    if (clientY > clientHeight) {
        clientY = clientHeight;
    }

    return [clientX, clientY];
}

/***/ }),

/***/ "./src/createDragDom.js":
/*!******************************!*\
  !*** ./src/createDragDom.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = createDragDom;

var _util = __webpack_require__(/*! ./util */ "./src/util.js");

var _drawMiddleImage = __webpack_require__(/*! ./toolbar/middleImage/drawMiddleImage */ "./src/toolbar/middleImage/drawMiddleImage.js");

var _drawMiddleImage2 = _interopRequireDefault(_drawMiddleImage);

var _clearMiddleImage = __webpack_require__(/*! ./toolbar/middleImage/clearMiddleImage */ "./src/toolbar/middleImage/clearMiddleImage.js");

var _clearMiddleImage2 = _interopRequireDefault(_clearMiddleImage);

var _backRightClient = __webpack_require__(/*! ./backRightClient */ "./src/backRightClient.js");

var _backRightClient2 = _interopRequireDefault(_backRightClient);

var _toolbarPosition = __webpack_require__(/*! ./toolbar/toolbarPosition */ "./src/toolbar/toolbarPosition.js");

var _toolbarPosition2 = _interopRequireDefault(_toolbarPosition);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function createDragDom(dom, dotSize, lineSize, me) {
    var lineList = [{ name: 'n', style: { top: '-' + lineSize / 2 + 'px', left: 0, width: '100%', height: lineSize / 2 + 'px' } }, { name: 's', style: { bottom: '-' + lineSize / 2 + 'px', left: 0, width: '100%', height: lineSize / 2 + 'px' } }, { name: 'w', style: { top: 0, left: '-' + lineSize / 2 + 'px', width: lineSize / 2 + 'px', height: '100%' } }, { name: 'e', style: { top: 0, right: '-' + lineSize / 2 + 'px', width: lineSize / 2 + 'px', height: '100%' } }];
    lineList.forEach(function (it) {
        dom.appendChild(createLine(it.name, it.style, lineSize));
    });

    var dotList = [{ name: 'nw', style: { top: '-' + (dotSize / 2 + 'px'), left: '-' + dotSize / 2 + 'px' } }, { name: 'ne', style: { top: '-' + (dotSize / 2 + 'px'), right: '-' + dotSize / 2 + 'px' } }, { name: 'se', style: { bottom: '-' + (dotSize / 2 + 'px'), right: '-' + dotSize / 2 + 'px' } }, { name: 'e', style: { top: 'calc(50% - ' + (dotSize / 2 + 'px') + ')', right: '-' + dotSize / 2 + 'px' } }, { name: 'w', style: { top: 'calc(50% - ' + (dotSize / 2 + 'px') + ')', left: '-' + dotSize / 2 + 'px' } }, { name: 'n', style: { top: '-' + (dotSize / 2 + 'px'), left: 'calc(50% - ' + (dotSize / 2 + 'px') + ')' } }, { name: 's', style: { bottom: '-' + (dotSize / 2 + 'px'), left: 'calc(50% - ' + (dotSize / 2 + 'px') + ')' } }, { name: 'sw', style: { bottom: '-' + (dotSize / 2 + 'px'), left: '-' + dotSize / 2 + 'px' } }];
    dotList.forEach(function (it) {
        dom.appendChild(createDot(it.name, it.style, dotSize, it.id));
    });
    bindCornerEvent('swkssDot', dom, me);
    bindCornerEvent('sekssDot', dom, me);
    bindCornerEvent('nwkssDot', dom, me);
    bindCornerEvent('nekssDot', dom, me);

    bindSurroundEvent('horizontal', 'ekssDot', dom, me);
    bindSurroundEvent('horizontal', 'wkssDot', dom, me);
    bindSurroundEvent('horizontal', 'ekssLine', dom, me);
    bindSurroundEvent('horizontal', 'wkssLine', dom, me);
    bindSurroundEvent('vertical', 'nkssDot', dom, me);
    bindSurroundEvent('vertical', 'skssDot', dom, me);
    bindSurroundEvent('vertical', 'nkssLine', dom, me);
    bindSurroundEvent('vertical', 'skssLine', dom, me);
}

function createDot(type, style, size) {
    var dom = window.wonder_containerDocument.createElement('div');
    dom.id = type + 'kssDot';
    dom.className = 'kssDot';
    (0, _util.css)(dom, {
        width: size + 'px',
        height: size + 'px',
        cursor: type + '-resize'
    });

    (0, _util.css)(dom, style);

    return dom;
}

function createLine(type, style, size) {
    var dom = window.wonder_containerDocument.createElement('div');
    dom.id = type + 'kssLine';
    dom.className = 'kssLine';
    (0, _util.css)(dom, {
        cursor: type + '-resize'
    });

    (0, _util.css)(dom, style);

    return dom;
}

function bindCornerEvent(name, dom, me) {
    window.wonder_containerDocument.getElementById(name).addEventListener('mousedown', function (event) {
        if (me.isEdit) {
            return;
        }
        (0, _clearMiddleImage2.default)(me);
        window.wonder_containerDocument.addEventListener('mousemove', mousemoveEvent);

        var currentLeft = approximate(me.startX, me.width, event.clientX);
        var currentTop = approximate(me.startY, me.height, event.clientY);

        //将起始点设置为对角
        me.startX = 2 * (me.startX + me.width / 2) - currentLeft;
        me.startY = 2 * (me.startY + me.height / 2) - currentTop;
        var startX = event.clientX;
        var startY = event.clientY;
        function mousemoveEvent(e) {
            var client = (0, _backRightClient2.default)(e);
            var clientX = client[0];
            var clientY = client[1];

            var height = Math.abs(clientY - me.startY);
            var width = Math.abs(clientX - me.startX);
            var top = Math.min(me.startY, clientY);
            var left = Math.min(me.startX, clientX);

            var style = {
                height: height + 'px',
                width: width + 'px',
                top: top + 'px',
                left: left + 'px'
            };
            (0, _util.css)(dom, style);

            (0, _toolbarPosition2.default)(me, width, height, top, left, me.toolbar);
        }
        window.wonder_containerDocument.addEventListener('mouseup', mouseupEvent);

        function mouseupEvent(e) {
            var client = (0, _backRightClient2.default)(e);
            var clientX = client[0];
            var clientY = client[1];

            me.width = Math.abs(clientX - me.startX);
            me.height = Math.abs(clientY - me.startY);
            //起始点返回至左上角
            me.startX = Math.min(clientX, me.startX);
            me.startY = Math.min(me.startY, clientY);

            window.wonder_containerDocument.removeEventListener('mousemove', mousemoveEvent);
            window.wonder_containerDocument.removeEventListener('mouseup', mouseupEvent);
            (0, _drawMiddleImage2.default)(me);
        }
    });
}

function bindSurroundEvent(type, name, dom, me) {
    window.wonder_containerDocument.getElementById(name).addEventListener('mousedown', function (event) {
        if (me.isEdit) {
            return;
        }
        (0, _clearMiddleImage2.default)(me);
        window.wonder_containerDocument.addEventListener('mousemove', mousemoveEvent);
        var currentLeft = approximate(me.startX, me.width, event.clientX);
        var currentTop = approximate(me.startY, me.height, event.clientY);
        //将起始点设置为对角
        if (type === 'horizontal') {
            me.startX = 2 * (me.startX + me.width / 2) - currentLeft;
        } else if (type === 'vertical') {
            me.startY = 2 * (me.startY + me.height / 2) - currentTop;
        }
        var startX = event.clientX;
        var startY = event.clientY;
        function mousemoveEvent(e) {
            var client = (0, _backRightClient2.default)(e);
            var clientX = client[0];
            var clientY = client[1];

            var height = Math.abs(clientY - me.startY);
            var width = Math.abs(clientX - me.startX);
            var top = Math.min(me.startY, clientY);
            var left = Math.min(me.startX, clientX);
            var style = void 0;
            if (type === 'horizontal') {
                style = {
                    width: width + 'px',
                    left: left + 'px'
                };
            } else if (type === 'vertical') {
                style = {
                    height: height + 'px',
                    top: top + 'px'
                };
            }

            (0, _util.css)(dom, style);
            var currentStartX = left;
            var currentStartY = top;

            (0, _toolbarPosition2.default)(me, width, height, top, left, me.toolbar);
            if (type === 'horizontal') {
                (0, _toolbarPosition2.default)(me, width, me.height, me.startY, left, me.toolbar);
            } else if (type === 'vertical') {
                (0, _toolbarPosition2.default)(me, me.width, height, top, me.left, me.toolbar);
            }
        }

        window.wonder_containerDocument.addEventListener('mouseup', mouseupEvent);

        function mouseupEvent(e) {
            var client = (0, _backRightClient2.default)(e);
            var clientX = client[0];
            var clientY = client[1];

            if (type === 'horizontal') {
                me.width = Math.abs(clientX - me.startX);
                me.startX = Math.min(clientX, me.startX);
            } else if (type === 'vertical') {
                me.height = Math.abs(clientY - me.startY);
                me.startY = Math.min(me.startY, clientY);
            }

            window.wonder_containerDocument.removeEventListener('mousemove', mousemoveEvent);
            window.wonder_containerDocument.removeEventListener('mouseup', mouseupEvent);
            (0, _drawMiddleImage2.default)(me);
        }
    });
}

//获取鼠标位置最近坐标点
function approximate(start, thickness, current) {
    if (Math.abs(current - start) >= Math.abs(current - start - thickness)) {
        return start + thickness;
    } else {
        return start;
    }
}

/***/ }),

/***/ "./src/dom-to-image.js":
/*!*****************************!*\
  !*** ./src/dom-to-image.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


(function (global) {
    'use strict';

    var util = newUtil();
    var inliner = newInliner();
    var fontFaces = newFontFaces();
    var images = newImages();

    // Default impl options
    var defaultOptions = {
        // Default is to fail on error, no placeholder
        imagePlaceholder: undefined,
        // Default cache bust is false, it will use the cache
        cacheBust: false
    };

    var domtoimage = {
        //Wonder
        toCanvas: function toCanvas(node, options) {
            return draw(node, options || {});
        },

        toSvg: toSvg,
        toPng: toPng,
        toJpeg: toJpeg,
        toBlob: toBlob,
        toPixelData: toPixelData,
        impl: {
            fontFaces: fontFaces,
            images: images,
            util: util,
            inliner: inliner,
            options: {}
        }
    };

    if (true) module.exports = domtoimage;else {}

    /**
     * @param {Node} node - The DOM Node object to render
     * @param {Object} options - Rendering options
     * @param {Function} options.filter - Should return true if passed node should be included in the output
     *          (excluding node means excluding it's children as well). Not called on the root node.
     * @param {String} options.bgcolor - color for the background, any valid CSS color value.
     * @param {Number} options.width - width to be applied to node before rendering.
     * @param {Number} options.height - height to be applied to node before rendering.
     * @param {Object} options.style - an object whose properties to be copied to node's style before rendering.
     * @param {Number} options.quality - a Number between 0 and 1 indicating image quality (applicable to JPEG only),
                defaults to 1.0.
     * @param {String} options.imagePlaceholder - dataURL to use as a placeholder for failed images, default behaviour is to fail fast on images we can't fetch
     * @param {Boolean} options.cacheBust - set to true to cache bust by appending the time to the request url
     * @return {Promise} - A promise that is fulfilled with a SVG image data URL
     * */
    function toSvg(node, options) {
        options = options || {};
        copyOptions(options);
        return Promise.resolve(node).then(function (node) {
            return cloneNode(node, options.filter, true);
        }).then(embedFonts).then(inlineImages).then(applyOptions).then(function (clone) {
            return makeSvgDataUri(clone, options.width || util.width(node), options.height || util.height(node));
        });

        function applyOptions(clone) {
            if (options.bgcolor) clone.style.backgroundColor = options.bgcolor;

            if (options.width) clone.style.width = options.width + 'px';
            if (options.height) clone.style.height = options.height + 'px';

            if (options.style) Object.keys(options.style).forEach(function (property) {
                clone.style[property] = options.style[property];
            });

            return clone;
        }
    }

    /**
     * @param {Node} node - The DOM Node object to render
     * @param {Object} options - Rendering options, @see {@link toSvg}
     * @return {Promise} - A promise that is fulfilled with a Uint8Array containing RGBA pixel data.
     * */
    function toPixelData(node, options) {
        return draw(node, options || {}).then(function (canvas) {
            return canvas.getContext('2d').getImageData(0, 0, util.width(node), util.height(node)).data;
        });
    }

    /**
     * @param {Node} node - The DOM Node object to render
     * @param {Object} options - Rendering options, @see {@link toSvg}
     * @return {Promise} - A promise that is fulfilled with a PNG image data URL
     * */
    function toPng(node, options) {
        return draw(node, options || {}).then(function (canvas) {
            return canvas.toDataURL();
        });
    }

    /**
     * @param {Node} node - The DOM Node object to render
     * @param {Object} options - Rendering options, @see {@link toSvg}
     * @return {Promise} - A promise that is fulfilled with a JPEG image data URL
     * */
    function toJpeg(node, options) {
        options = options || {};
        return draw(node, options).then(function (canvas) {
            return canvas.toDataURL('image/jpeg', options.quality || 1.0);
        });
    }

    /**
     * @param {Node} node - The DOM Node object to render
     * @param {Object} options - Rendering options, @see {@link toSvg}
     * @return {Promise} - A promise that is fulfilled with a PNG image blob
     * */
    function toBlob(node, options) {
        return draw(node, options || {}).then(util.canvasToBlob);
    }

    function copyOptions(options) {
        // Copy options to impl options for use in impl
        if (typeof options.imagePlaceholder === 'undefined') {
            domtoimage.impl.options.imagePlaceholder = defaultOptions.imagePlaceholder;
        } else {
            domtoimage.impl.options.imagePlaceholder = options.imagePlaceholder;
        }

        if (typeof options.cacheBust === 'undefined') {
            domtoimage.impl.options.cacheBust = defaultOptions.cacheBust;
        } else {
            domtoimage.impl.options.cacheBust = options.cacheBust;
        }
    }

    function draw(domNode, options) {
        return toSvg(domNode, options).then(util.makeImage).then(util.delay(100)).then(function (image) {
            var canvas = newCanvas(domNode);
            canvas.getContext('2d').drawImage(image, 0, 0);
            return canvas;
        });

        function newCanvas(domNode) {
            var canvas = window.wonder_containerDocument.createElement('canvas');
            canvas.width = options.width || util.width(domNode);
            canvas.height = options.height || util.height(domNode);

            if (options.bgcolor) {
                var ctx = canvas.getContext('2d');
                ctx.fillStyle = options.bgcolor;
                ctx.fillRect(0, 0, canvas.width, canvas.height);
            }

            return canvas;
        }
    }

    function cloneNode(node, filter, root) {
        if (!root && filter && !filter(node)) return Promise.resolve();

        return Promise.resolve(node).then(makeNodeCopy).then(function (clone) {
            return cloneChildren(node, clone, filter);
        }).then(function (clone) {
            return processClone(node, clone);
        });

        function makeNodeCopy(node) {
            if (node instanceof HTMLCanvasElement) return util.makeImage(node.toDataURL());
            return node.cloneNode(false);
        }

        function cloneChildren(original, clone, filter) {
            var children = original.childNodes;
            if (children.length === 0) return Promise.resolve(clone);

            return cloneChildrenInOrder(clone, util.asArray(children), filter).then(function () {
                return clone;
            });

            function cloneChildrenInOrder(parent, children, filter) {
                var done = Promise.resolve();
                children.forEach(function (child) {
                    done = done.then(function () {
                        return cloneNode(child, filter);
                    }).then(function (childClone) {
                        if (childClone) parent.appendChild(childClone);
                    });
                });
                return done;
            }
        }

        function processClone(original, clone) {
            if (!(clone instanceof Element)) return clone;

            return Promise.resolve().then(cloneStyle).then(clonePseudoElements).then(copyUserInput).then(fixSvg).then(function () {
                return clone;
            });

            function cloneStyle() {
                copyStyle(window.getComputedStyle(original), clone.style);

                function copyStyle(source, target) {
                    if (source.cssText) target.cssText = source.cssText;else copyProperties(source, target);

                    function copyProperties(source, target) {
                        util.asArray(source).forEach(function (name) {
                            target.setProperty(name, source.getPropertyValue(name), source.getPropertyPriority(name));
                        });
                    }
                }
            }

            function clonePseudoElements() {
                [':before', ':after'].forEach(function (element) {
                    clonePseudoElement(element);
                });

                function clonePseudoElement(element) {
                    var style = window.getComputedStyle(original, element);
                    var content = style.getPropertyValue('content');

                    if (content === '' || content === 'none') return;

                    var className = util.uid();
                    clone.className = clone.className + ' ' + className;
                    var styleElement = window.wonder_containerDocument.createElement('style');
                    styleElement.appendChild(formatPseudoElementStyle(className, element, style));
                    clone.appendChild(styleElement);

                    function formatPseudoElementStyle(className, element, style) {
                        var selector = '.' + className + ':' + element;
                        var cssText = style.cssText ? formatCssText(style) : formatCssProperties(style);
                        return window.wonder_containerDocument.createTextNode(selector + '{' + cssText + '}');

                        function formatCssText(style) {
                            var content = style.getPropertyValue('content');
                            return style.cssText + ' content: ' + content + ';';
                        }

                        function formatCssProperties(style) {

                            return util.asArray(style).map(formatProperty).join('; ') + ';';

                            function formatProperty(name) {
                                return name + ': ' + style.getPropertyValue(name) + (style.getPropertyPriority(name) ? ' !important' : '');
                            }
                        }
                    }
                }
            }

            function copyUserInput() {
                if (original instanceof HTMLTextAreaElement) clone.innerHTML = original.value;
                if (original instanceof HTMLInputElement) clone.setAttribute("value", original.value);
            }

            function fixSvg() {
                if (!(clone instanceof SVGElement)) return;
                clone.setAttribute('xmlns', 'http://www.w3.org/2000/svg');

                if (!(clone instanceof SVGRectElement)) return;
                ['width', 'height'].forEach(function (attribute) {
                    var value = clone.getAttribute(attribute);
                    if (!value) return;

                    clone.style.setProperty(attribute, value);
                });
            }
        }
    }

    function embedFonts(node) {
        return fontFaces.resolveAll().then(function (cssText) {
            var styleNode = window.wonder_containerDocument.createElement('style');
            node.appendChild(styleNode);
            styleNode.appendChild(window.wonder_containerDocument.createTextNode(cssText));
            return node;
        });
    }

    function inlineImages(node) {
        return images.inlineAll(node).then(function () {
            return node;
        });
    }

    function makeSvgDataUri(node, width, height) {
        return Promise.resolve(node).then(function (node) {
            node.setAttribute('xmlns', 'http://www.w3.org/1999/xhtml');
            return new XMLSerializer().serializeToString(node);
        }).then(util.escapeXhtml).then(function (xhtml) {
            return '<foreignObject x="0" y="0" width="100%" height="100%">' + xhtml + '</foreignObject>';
        }).then(function (foreignObject) {
            return '<svg xmlns="http://www.w3.org/2000/svg" width="' + width + '" height="' + height + '">' + foreignObject + '</svg>';
        }).then(function (svg) {
            return 'data:image/svg+xml;charset=utf-8,' + svg;
        });
    }

    function newUtil() {
        return {
            escape: escape,
            parseExtension: parseExtension,
            mimeType: mimeType,
            dataAsUrl: dataAsUrl,
            isDataUrl: isDataUrl,
            canvasToBlob: canvasToBlob,
            resolveUrl: resolveUrl,
            getAndEncode: getAndEncode,
            uid: uid(),
            delay: delay,
            asArray: asArray,
            escapeXhtml: escapeXhtml,
            makeImage: makeImage,
            width: width,
            height: height
        };

        function mimes() {
            /*
             * Only WOFF and EOT mime types for fonts are 'real'
             * see http://www.iana.org/assignments/media-types/media-types.xhtml
             */
            var WOFF = 'application/font-woff';
            var JPEG = 'image/jpeg';

            return {
                'woff': WOFF,
                'woff2': WOFF,
                'ttf': 'application/font-truetype',
                'eot': 'application/vnd.ms-fontobject',
                'png': 'image/png',
                'jpg': JPEG,
                'jpeg': JPEG,
                'gif': 'image/gif',
                'tiff': 'image/tiff',
                'svg': 'image/svg+xml'
            };
        }

        function parseExtension(url) {
            var match = /\.([^\.\/]*?)$/g.exec(url);
            if (match) return match[1];else return '';
        }

        function mimeType(url) {
            var extension = parseExtension(url).toLowerCase();
            return mimes()[extension] || '';
        }

        function isDataUrl(url) {
            return url.search(/^(data:)/) !== -1;
        }

        function toBlob(canvas) {
            return new Promise(function (resolve) {
                var binaryString = window.atob(canvas.toDataURL().split(',')[1]);
                var length = binaryString.length;
                var binaryArray = new Uint8Array(length);

                for (var i = 0; i < length; i++) {
                    binaryArray[i] = binaryString.charCodeAt(i);
                }resolve(new Blob([binaryArray], {
                    type: 'image/png'
                }));
            });
        }

        function canvasToBlob(canvas) {
            if (canvas.toBlob) return new Promise(function (resolve) {
                canvas.toBlob(resolve);
            });

            return toBlob(canvas);
        }

        function resolveUrl(url, baseUrl) {
            var doc = window.wonder_containerDocument.implementation.createHTMLDocument();
            var base = doc.createElement('base');
            doc.head.appendChild(base);
            var a = doc.createElement('a');
            doc.body.appendChild(a);
            base.href = baseUrl;
            a.href = url;
            return a.href;
        }

        function uid() {
            var index = 0;

            return function () {
                return 'u' + fourRandomChars() + index++;

                function fourRandomChars() {
                    /* see http://stackoverflow.com/a/6248722/2519373 */
                    return ('0000' + (Math.random() * Math.pow(36, 4) << 0).toString(36)).slice(-4);
                }
            };
        }

        function makeImage(uri) {
            return new Promise(function (resolve, reject) {
                var image = new Image();
                image.onload = function () {
                    resolve(image);
                };
                image.onerror = reject;
                image.src = uri;
            });
        }

        function getAndEncode(url) {
            var TIMEOUT = 30000;
            if (domtoimage.impl.options.cacheBust) {
                // Cache bypass so we dont have CORS issues with cached images
                // Source: https://developer.mozilla.org/en/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest#Bypassing_the_cache
                url += (/\?/.test(url) ? "&" : "?") + new Date().getTime();
            }

            return new Promise(function (resolve) {
                var request = new XMLHttpRequest();

                request.onreadystatechange = done;
                request.ontimeout = timeout;
                request.responseType = 'blob';
                request.timeout = TIMEOUT;
                request.open('GET', url, true);
                request.send();

                var placeholder;
                if (domtoimage.impl.options.imagePlaceholder) {
                    var split = domtoimage.impl.options.imagePlaceholder.split(/,/);
                    if (split && split[1]) {
                        placeholder = split[1];
                    }
                }

                function done() {
                    if (request.readyState !== 4) return;

                    if (request.status !== 200) {
                        if (placeholder) {
                            resolve(placeholder);
                        } else {
                            fail('cannot fetch resource: ' + url + ', status: ' + request.status);
                        }

                        return;
                    }

                    var encoder = new FileReader();
                    encoder.onloadend = function () {
                        var content = encoder.result.split(/,/)[1];
                        resolve(content);
                    };
                    encoder.readAsDataURL(request.response);
                }

                function timeout() {
                    if (placeholder) {
                        resolve(placeholder);
                    } else {
                        fail('timeout of ' + TIMEOUT + 'ms occured while fetching resource: ' + url);
                    }
                }

                function fail(message) {
                    console.error(message);
                    resolve('');
                }
            });
        }

        function dataAsUrl(content, type) {
            return 'data:' + type + ';base64,' + content;
        }

        function escape(string) {
            return string.replace(/([.*+?^${}()|\[\]\/\\])/g, '\\$1');
        }

        function delay(ms) {
            return function (arg) {
                return new Promise(function (resolve) {
                    setTimeout(function () {
                        resolve(arg);
                    }, ms);
                });
            };
        }

        function asArray(arrayLike) {
            var array = [];
            var length = arrayLike.length;
            for (var i = 0; i < length; i++) {
                array.push(arrayLike[i]);
            }return array;
        }

        function escapeXhtml(string) {
            return string.replace(/#/g, '%23').replace(/\n/g, '%0A');
        }

        function width(node) {
            var leftBorder = px(node, 'border-left-width');
            var rightBorder = px(node, 'border-right-width');
            return node.scrollWidth + leftBorder + rightBorder;
        }

        function height(node) {
            var topBorder = px(node, 'border-top-width');
            var bottomBorder = px(node, 'border-bottom-width');
            return node.scrollHeight + topBorder + bottomBorder;
        }

        function px(node, styleProperty) {
            var value = window.getComputedStyle(node).getPropertyValue(styleProperty);
            return parseFloat(value.replace('px', ''));
        }
    }

    function newInliner() {
        var URL_REGEX = /url\(['"]?([^'"]+?)['"]?\)/g;

        return {
            inlineAll: inlineAll,
            shouldProcess: shouldProcess,
            impl: {
                readUrls: readUrls,
                inline: inline
            }
        };

        function shouldProcess(string) {
            return string.search(URL_REGEX) !== -1;
        }

        function readUrls(string) {
            var result = [];
            var match;
            while ((match = URL_REGEX.exec(string)) !== null) {
                result.push(match[1]);
            }
            return result.filter(function (url) {
                return !util.isDataUrl(url);
            });
        }

        function inline(string, url, baseUrl, get) {
            return Promise.resolve(url).then(function (url) {
                return baseUrl ? util.resolveUrl(url, baseUrl) : url;
            }).then(get || util.getAndEncode).then(function (data) {
                return util.dataAsUrl(data, util.mimeType(url));
            }).then(function (dataUrl) {
                return string.replace(urlAsRegex(url), '$1' + dataUrl + '$3');
            });

            function urlAsRegex(url) {
                return new RegExp('(url\\([\'"]?)(' + util.escape(url) + ')([\'"]?\\))', 'g');
            }
        }

        function inlineAll(string, baseUrl, get) {
            if (nothingToInline()) return Promise.resolve(string);

            return Promise.resolve(string).then(readUrls).then(function (urls) {
                var done = Promise.resolve(string);
                urls.forEach(function (url) {
                    done = done.then(function (string) {
                        return inline(string, url, baseUrl, get);
                    });
                });
                return done;
            });

            function nothingToInline() {
                return !shouldProcess(string);
            }
        }
    }

    function newFontFaces() {
        return {
            resolveAll: resolveAll,
            impl: {
                readAll: readAll
            }
        };

        function resolveAll() {
            return readAll(document).then(function (webFonts) {
                return Promise.all(webFonts.map(function (webFont) {
                    return webFont.resolve();
                }));
            }).then(function (cssStrings) {
                return cssStrings.join('\n');
            });
        }

        function readAll() {
            return Promise.resolve(util.asArray(window.wonder_containerDocument.styleSheets)).then(getCssRules).then(selectWebFontRules).then(function (rules) {
                return rules.map(newWebFont);
            });

            function selectWebFontRules(cssRules) {
                return cssRules.filter(function (rule) {
                    return rule.type === CSSRule.FONT_FACE_RULE;
                }).filter(function (rule) {
                    return inliner.shouldProcess(rule.style.getPropertyValue('src'));
                });
            }

            function getCssRules(styleSheets) {
                var cssRules = [];
                styleSheets.forEach(function (sheet) {
                    try {
                        util.asArray(sheet.cssRules || []).forEach(cssRules.push.bind(cssRules));
                    } catch (e) {
                        console.log('Error while reading CSS rules from ' + sheet.href, e.toString());
                    }
                });
                return cssRules;
            }

            function newWebFont(webFontRule) {
                return {
                    resolve: function resolve() {
                        var baseUrl = (webFontRule.parentStyleSheet || {}).href;
                        return inliner.inlineAll(webFontRule.cssText, baseUrl);
                    },
                    src: function src() {
                        return webFontRule.style.getPropertyValue('src');
                    }
                };
            }
        }
    }

    function newImages() {
        return {
            inlineAll: inlineAll,
            impl: {
                newImage: newImage
            }
        };

        function newImage(element) {
            return {
                inline: inline
            };

            function inline(get) {
                if (util.isDataUrl(element.src)) return Promise.resolve();

                return Promise.resolve(element.src).then(get || util.getAndEncode).then(function (data) {
                    return util.dataAsUrl(data, util.mimeType(element.src));
                }).then(function (dataUrl) {
                    return new Promise(function (resolve, reject) {
                        element.onload = resolve;
                        element.onerror = reject;
                        element.src = dataUrl;
                    });
                });
            }
        }

        function inlineAll(node) {
            if (!(node instanceof Element)) return Promise.resolve(node);

            return inlineBackground(node).then(function () {
                if (node instanceof HTMLImageElement) return newImage(node).inline();else return Promise.all(util.asArray(node.childNodes).map(function (child) {
                    return inlineAll(child);
                }));
            });

            function inlineBackground(node) {
                var background = node.style.getPropertyValue('background');

                if (!background) return Promise.resolve(node);

                return inliner.inlineAll(background).then(function (inlined) {
                    node.style.setProperty('background', inlined, node.style.getPropertyPriority('background'));
                }).then(function () {
                    return node;
                });
            }
        }
    }
})(undefined);

/***/ }),

/***/ "./src/kss.js":
/*!********************!*\
  !*** ./src/kss.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _domToImage = __webpack_require__(/*! ./dom-to-image.js */ "./src/dom-to-image.js");

var _domToImage2 = _interopRequireDefault(_domToImage);

var _util = __webpack_require__(/*! ./util */ "./src/util.js");

var _createDragDom = __webpack_require__(/*! ./createDragDom.js */ "./src/createDragDom.js");

var _createDragDom2 = _interopRequireDefault(_createDragDom);

var _toolbar = __webpack_require__(/*! ./toolbar/toolbar.js */ "./src/toolbar/toolbar.js");

var _toolbar2 = _interopRequireDefault(_toolbar);

var _drawMiddleImage = __webpack_require__(/*! ./toolbar/middleImage/drawMiddleImage */ "./src/toolbar/middleImage/drawMiddleImage.js");

var _drawMiddleImage2 = _interopRequireDefault(_drawMiddleImage);

var _clearMiddleImage = __webpack_require__(/*! ./toolbar/middleImage/clearMiddleImage */ "./src/toolbar/middleImage/clearMiddleImage.js");

var _clearMiddleImage2 = _interopRequireDefault(_clearMiddleImage);

var _endAndClear = __webpack_require__(/*! ./toolbar/endAndClear */ "./src/toolbar/endAndClear.js");

var _endAndClear2 = _interopRequireDefault(_endAndClear);

var _backRightClient = __webpack_require__(/*! ./backRightClient */ "./src/backRightClient.js");

var _backRightClient2 = _interopRequireDefault(_backRightClient);

var _toolbarPosition = __webpack_require__(/*! ./toolbar/toolbarPosition */ "./src/toolbar/toolbarPosition.js");

var _toolbarPosition2 = _interopRequireDefault(_toolbarPosition);

var _cursor = __webpack_require__(/*! ./assets/imgs/cursor.ico */ "./src/assets/imgs/cursor.ico");

var _cursor2 = _interopRequireDefault(_cursor);

__webpack_require__(/*! ./kss.scss */ "./src/kss.scss");

var _uriJs = __webpack_require__(/*! uri-js */ "./node_modules/uri-js/dist/es5/uri.all.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import {a} from './toolbar.js'
// import html2canvas from './html2canvas.min.js'
function initLineWidth(initLine) {
    if (isNaN(initLine)) {
        return 10;
    } else {
        if (initLine > 10) {
            return 10;
        } else if (initLine < 1) {
            return 1;
        } else {
            return initLine;
        }
    }
}

var kss = function () {
    var instance = void 0;

    //单例模式
    var kss = function kss(options) {
        var _this = this;

        if (instance) {
            return instance;
        }

        this.kss = null;
        this.style = null;
        this.kssScreenShotWrapper = null;
        this.kssTextLayer = null;
        this.rectangleCanvas = null;
        this.toolbar = null;
        this.scale = window.devicePixelRatio || 1;
        //存储当前快照的元素
        this.currentImgDom = null;
        //截图状态
        this.isScreenshot = false;
        //快照组
        this.snapshootList = [];
        /*
        * 1: 点下左键，开始状态
        * 2: 鼠标移动，进行状态
        * 3: 放开左键，结束状态
        * */
        this.drawingStatus = null;
        this.currentToolType = null;
        this.imgBase64 = null;
        this.isEdit = false;
        this.startX = null;
        this.startY = null;
        this.width = null;
        this.height = null;
        this.dotSize = 6;
        this.lineSize = 2;
        //工具显示状态
        this.toolShow = options.toolShow;
        //工具栏样式
        this.toolbarWidth = null;
        this.toolbarHeight = 30;
        this.toolbarMarginTop = 5;
        this.toolbarColor = '#fb3838';
        this.toolbarLineWidth = (0, _util.typeChecking)(options.toolShow) === '[object Object]' ? initLineWidth(options.toolShow.drawLine) : 10;

        //工具栏事件
        this.toolmousedown = null;
        this.toolmousemove = null;
        this.toolmouseup = null;

        //根据base64获取绝对地址
        this.copyPath = options.copyPath;
        //是否下载
        this.needDownload = options.needDownload;

        //成功回调
        this.endCB = options.endCB;
        //撤销回调
        this.cancelCB = options.cancelCB;

        this.startDrawDown = function (e) {
            var that = _this;
            that._containerDocument.addEventListener('mouseup', that.cancelDrawingStatus);
            that._containerDocument.addEventListener('contextmenu', that.preventContextMenu);
            //当不是鼠标左键时立即返回
            if (e.button !== 0) {
                return;
            }

            if (that.drawingStatus !== null) {
                return;
            }
            that.drawingStatus = 1;

            that.startX = e.clientX;
            that.startY = e.clientY;
            //移除并添加
            (0, _util.remove)(that._containerDocument.getElementById('kssScreenShotWrapper'));
            var kssScreenShotWrapper = that._containerDocument.createElement('div');
            kssScreenShotWrapper.id = 'kssScreenShotWrapper';
            that.kssScreenShotWrapper = kssScreenShotWrapper;
            var kssTextLayer = that._containerDocument.createElement('div');
            kssTextLayer.id = 'kssTextLayer';
            that.kssTextLayer = kssTextLayer;

            kssScreenShotWrapper.appendChild(kssTextLayer);
            that._container.appendChild(kssScreenShotWrapper);

            that._containerDocument.addEventListener('mousemove', that.drawing);
            that._containerDocument.addEventListener('mouseup', that.endDraw);
        };

        this.drawing = function (e) {
            var that = _this;
            that.drawingStatus = 2;

            var client = (0, _backRightClient2.default)(e);
            var clientX = client[0];
            var clientY = client[1];

            (0, _util.css)(that.kssScreenShotWrapper, {
                height: Math.abs(clientY - that.startY) + 'px',
                width: Math.abs(clientX - that.startX) + 'px',
                top: Math.min(that.startY, clientY) + 'px',
                left: Math.min(that.startX, clientX) + 'px'
            });
        };

        this.endDraw = function (e) {
            if (e.button !== 0) {
                return;
            }
            var that = _this;
            that.drawingStatus = 3;

            if (that.startX === e.clientX && that.startY === e.clientY) {
                var clientHeight = that._document.documentElement.clientHeight;
                var clientWidth = that._document.documentElement.clientWidth;
                that.startX = 2;
                that.startY = 2;
                that.height = clientHeight - 4;
                that.width = clientWidth - 4;
                (0, _util.css)(that.kssScreenShotWrapper, {
                    height: that.height + 'px',
                    width: that.width + 'px',
                    top: that.startY + 'px',
                    left: that.startX + 'px'
                });
            } else {
                var client = (0, _backRightClient2.default)(e);
                var clientX = client[0];
                var clientY = client[1];

                that.width = Math.abs(clientX - that.startX);
                that.height = Math.abs(clientY - that.startY);
                that.startX = Math.min(that.startX, clientX);
                that.startY = Math.min(that.startY, clientY);
            }
            that._containerDocument.removeEventListener('mousemove', that.drawing);

            var canvas = that._containerDocument.createElement('canvas');
            canvas.id = 'kssRectangleCanvas';

            that.kssScreenShotWrapper.appendChild(canvas);
            that.rectangleCanvas = canvas;
            canvas.addEventListener('mousedown', function (event) {
                if (that.isEdit || event.button === 2) {
                    return;
                }
                (0, _clearMiddleImage2.default)(that);
                var startX = event.clientX;
                var startY = event.clientY;
                that._containerDocument.addEventListener('mousemove', canvasMoveEvent);
                that._containerDocument.addEventListener('mouseup', canvasUpEvent);
                //最后左上角的top和left
                var top = void 0;
                var left = void 0;
                function canvasMoveEvent(e) {
                    var clientHeight = that._document.documentElement.clientHeight;
                    var clientWidth = that._document.documentElement.clientWidth;

                    top = that.startY + e.clientY - startY;

                    if (that.startY + e.clientY - startY + that.height > clientHeight) {
                        top = clientHeight - that.height;
                    }

                    if (that.startY + e.clientY - startY < 0) {
                        top = 0;
                    }

                    left = that.startX + e.clientX - startX;

                    if (that.startX + e.clientX - startX + that.width > clientWidth) {
                        left = clientWidth - that.width;
                    }

                    if (that.startX + e.clientX - startX < 0) {
                        left = 0;
                    }

                    (0, _util.css)(that.kssScreenShotWrapper, {
                        top: top + 'px',
                        left: left + 'px'
                    });

                    (0, _toolbarPosition2.default)(that, that.width, that.height, top, left, that.toolbar);
                }

                function canvasUpEvent(e) {
                    if (top === undefined) {
                        top = that.startY;
                    }

                    if (left === undefined) {
                        left = that.startX;
                    }
                    that.startY = top;
                    that.startX = left;
                    that._containerDocument.removeEventListener('mousemove', canvasMoveEvent);
                    that._containerDocument.removeEventListener('mouseup', canvasUpEvent);
                    (0, _drawMiddleImage2.default)(that);
                }
            });
            that.kss.removeEventListener('mousedown', that.startDrawDown);
            that._containerDocument.removeEventListener('mouseup', that.endDraw);

            (0, _createDragDom2.default)(that.kssScreenShotWrapper, that.dotSize, that.lineSize, that);
            var img = that._containerDocument.createElement('img');
            img.id = 'kssCurrentImgDom';

            that.kssScreenShotWrapper.appendChild(img);
            that.currentImgDom = img;
            (0, _drawMiddleImage2.default)(that);
            that.toolbar = (0, _toolbar2.default)(that);
        };

        this.preventContextMenu = function (e) {
            e.preventDefault();
        };

        this.cancelDrawingStatus = function (e) {
            var that = _this;
            if (e.button === 2) {
                if (that.drawingStatus === null) {
                    that._containerDocument.removeEventListener('mouseup', that.cancelDrawingStatus);
                    setTimeout(function () {
                        that._containerDocument.removeEventListener('contextmenu', that.preventContextMenu);
                    }, 0);

                    (0, _endAndClear2.default)(that);
                    that.cancelCB();
                    return;
                }
                (0, _util.remove)(that.kssScreenShotWrapper);
                that.kssScreenShotWrapper = null;
                that.kssTextLayer = null;
                that.rectangleCanvas = null;
                that.drawingStatus = null;
                that.isEdit = false;
                that.snapshootList = [];
                that.currentToolType = null;
                that.toolmousedown = null;
                that.toolmousemove = null;
                that.toolmouseup = null;
                that.kss.addEventListener('mousedown', that.startDrawDown);
            }
        };
        this.startScreenShot = function () {
            _this.start();
        };
        this.endScreenShot = function () {
            (0, _endAndClear2.default)(_this);
        };

        this.setNode = function (node) {
            _this._node = node;
        };
        this.setDocument = function (document) {
            _this._document = document;
        };

        this.setContainer = function (container) {
            _this._container = container;
        };
        this.setContainerDocument = function (containerDocument) {
            _this._containerDocument = containerDocument;

            window.wonder_containerDocument = containerDocument;
        };
        this.setCanvasHandler = function (canvasHandlerFunc) {
            _this._canvasHandlerFunc = function (canvas) {
                return canvasHandlerFunc(_this, canvas);
            };
        };

        // this.init(options.key, options.immediately)
        return instance = this;
    };

    kss.prototype.init = function (key, immediately) {
        var that = this;

        (0, _util.loadCssCode)('\n\t\t.kssBody {\n\t\t\t/* cursor: url("./assets/imgs/cursor.ico"), auto; */\n\t\t\tuser-select: none;\n\t\t\toverflow: hidden;\n\t\t\t/* margin: 0;\n\t\t\tpadding: 0; */\n\t\t}\n\n\n\t\t/* @charset "UTF-8"; */\n\t\t/* .kssBody {\n\t\t\tcursor: url("./assets/imgs/cursor.ico"), auto;\n\t\t\tuser-select: none;\n\t\t} */\n\n\t\t.kssBody #kss {\n\t\t\tposition: fixed;\n\t\t\ttop: 0;\n\t\t\tleft: 0;\n\t\t\tz-index: 10000;\n\t\t}\n\n\t\t.kssBody #kssScreenShotWrapper {\n\t\t\tposition: fixed;\n\t\t\tbackground: transparent;\n\t\t\tbox-shadow: 0 0 0 9999px rgba(0, 0, 0, 0.3);\n\t\t\tz-index: 10001;\n\t\t}\n\n\t\t.kssBody #kssScreenShotWrapper #kssTextLayer {\n\t\t\tposition: absolute;\n\t\t\ttop: 0;\n\t\t\tleft: 0;\n\t\t\twidth: 100%;\n\t\t\theight: 100%;\n\t\t\tz-index: 98;\n\t\t\tcursor: crosshair;\n\t\t}\n\n\t\t.kssBody #kssScreenShotWrapper #kssTextLayer .kssTextarea {\n\t\t\tbackground: transparent;\n\t\t\tresize: none;\n\t\t\tmin-width: 60px;\n\t\t\tmin-height: 36px;\n\t\t\tbox-sizing: border-box;\n\t\t\tborder-color: transparent;\n\t\t\toverflow: hidden;\n\t\t\tfont-family: \u5B8B\u4F53;\n\t\t}\n\n\t\t.kssBody #kssScreenShotWrapper #kssTextLayer .kssTextarea:hover {\n\t\t\tcursor: text;\n\t\t\toutline: #488ff9 solid 1px;\n\t\t}\n\n\t\t.kssBody #kssScreenShotWrapper #kssRectangleCanvas {\n\t\t\theight: 100%;\n\t\t\twidth: 100%;\n\t\t\ttop: 0;\n\t\t\tleft: 0;\n\t\t\tcursor: move;\n\t\t\tposition: absolute;\n\t\t\tz-index: 99;\n\t\t}\n\n\t\t.kssBody #kssScreenShotWrapper .kssDot,\n\t\t.kssBody #kssScreenShotWrapper .kssLine {\n\t\t\tposition: absolute;\n\t\t\tbackground: #488ff9;\n\t\t\tz-index: 100;\n\t\t}\n\n\t\t.kssBody #kssScreenShotWrapper #kssCurrentImgDom {\n\t\t\twidth: 100%;\n\t\t\theight: 100%;\n\t\t\tposition: absolute;\n\t\t\ttop: 0;\n\t\t\tleft: 0;\n\t\t\tdisplay: none;\n\t\t}\n\n\t\t.kssBody #kssScreenShotWrapper #kssToolbar {\n\t\t\tposition: absolute;\n\t\t\tright: 0;\n\t\t\tbackground: #f1f1f1;\n\t\t\tfont-size: 14px;\n\t\t\tborder: 1px solid #dedede;\n\t\t\tborder-radius: 4px;\n\t\t\tbox-sizing: border-box;\n\t\t\tz-index: 100;\n\t\t}\n\n\t\t.kssBody #kssScreenShotWrapper #kssToolbar .kssToolbarItemBT {\n\t\t\tdisplay: inline-block;\n\t\t\twidth: 30px;\n\t\t\theight: 28px;\n\t\t\ttext-align: center;\n\t\t\tfloat: right;\n\t\t\tcursor: pointer;\n\t\t}\n\n\t\t.kssBody #kssScreenShotWrapper #kssToolbar .kssToolbarItemBT:hover {\n\t\t\tbackground: #dedede;\n\t\t}\n\n\t\t.kssBody #kssScreenShotWrapper #kssToolbar .kssToolbarItemBT .kssToolbarItemImg {\n\t\t\twidth: 20px;\n\t\t\theight: 20px;\n\t\t\tmargin-top: 5px;\n\t\t}\n\n\t\t.kssBody #kssScreenShotWrapper #kssToolbar .kssToolbarActiveItemBT {\n\t\t\tbackground: #dedede;\n\t\t}\n\n\t\t.kssBody #kssScreenShotWrapper #kssToolbar #kssToolbarMiddleArea #kssColorBoard {\n\t\t\tposition: absolute;\n\t\t\twidth: 180px;\n\t\t\theight: 40px;\n\t\t\tright: 0;\n\t\t\tbackground: #fff;\n\t\t\tborder: 1px solid #bbb;\n\t\t\tborder-radius: 4px;\n\t\t\tdisplay: none;\n\t\t\toutline: none;\n\t\t\tcursor: default;\n\t\t\tz-index: 100;\n\t\t}\n\n\t\t.kssBody #kssScreenShotWrapper #kssToolbar #kssToolbarMiddleArea #kssColorBoard #kssCurrentColor {\n\t\t\tdisplay: inline-block;\n\t\t\twidth: 30px;\n\t\t\theight: 30px;\n\t\t\tmargin: 5px 8px 0 8px;\n\t\t\tbox-sizing: border-box;\n\t\t\tborder: 1px solid #333;\n\t\t}\n\n\t\t.kssBody #kssScreenShotWrapper #kssToolbar #kssToolbarMiddleArea #kssColorBoard #kssColorItemWrapper {\n\t\t\tdisplay: inline-block;\n\t\t\tvertical-align: top;\n\t\t\twidth: 130px;\n\t\t\tmargin-top: 5px;\n\t\t\tfont-size: 0;\n\t\t}\n\n\t\t.kssBody #kssScreenShotWrapper #kssToolbar #kssToolbarMiddleArea #kssColorBoard #kssColorItemWrapper .kssColorItem {\n\t\t\tdisplay: inline-block;\n\t\t\twidth: 14px;\n\t\t\theight: 14px;\n\t\t\tmargin-right: 2px;\n\t\t\tbox-sizing: border-box;\n\t\t\tborder: 1px solid #333;\n\t\t\tcursor: pointer;\n\t\t}\n\n\t\t.kssBody #kssScreenShotWrapper #kssToolbar #kssToolbarMiddleArea #kssSetLineWidth {\n\t\t\tposition: absolute;\n\t\t\twidth: 155px;\n\t\t\theight: 40px;\n\t\t\tright: 0;\n\t\t\tbackground: #fff;\n\t\t\tborder: 1px solid #bbb;\n\t\t\tborder-radius: 4px;\n\t\t\tdisplay: none;\n\t\t\toutline: none;\n\t\t\tcursor: default;\n\t\t\tz-index: 100;\n\t\t}\n\n\t\t.kssBody #kssScreenShotWrapper #kssToolbar #kssToolbarMiddleArea #kssSetLineWidth #kssNumInputWrapper {\n\t\t\tmargin: 7px 0 0 8px;\n\t\t\tposition: relative;\n\t\t\tdisplay: inline-block;\n\t\t}\n\n\t\t.kssBody #kssScreenShotWrapper #kssToolbar #kssToolbarMiddleArea #kssSetLineWidth #kssNumInputWrapper #kssNumInput {\n\t\t\twidth: 40px;\n\t\t\theight: 24px;\n\t\t\tborder: 1px solid #bbb;\n\t\t\tborder-radius: 4px;\n\t\t\tpadding: 0 15px 0 8px;\n\t\t}\n\n\t\t.kssBody #kssScreenShotWrapper #kssToolbar #kssToolbarMiddleArea #kssSetLineWidth #kssNumInputWrapper #kssArrowNumWrapper {\n\t\t\tposition: absolute;\n\t\t\tright: 0;\n\t\t\ttop: 1px;\n\t\t\tborder-radius: 0 4px 4px 0;\n\t\t\tfont-size: 0;\n\t\t\tline-height: 12px;\n\t\t}\n\n\t\t.kssBody #kssScreenShotWrapper #kssToolbar #kssToolbarMiddleArea #kssSetLineWidth #kssNumInputWrapper #kssArrowNumWrapper #kssUpNum,\n\t\t.kssBody #kssScreenShotWrapper #kssToolbar #kssToolbarMiddleArea #kssSetLineWidth #kssNumInputWrapper #kssArrowNumWrapper #kssDownNum {\n\t\t\theight: 12px;\n\t\t\tfont-size: 12px;\n\t\t\tcursor: pointer;\n\t\t}\n\n\t\t.kssBody #kssScreenShotWrapper #kssToolbar #kssToolbarMiddleArea #kssSetLineWidth #kssNumInputWrapper #kssArrowNumWrapper #kssUpNum:hover,\n\t\t.kssBody #kssScreenShotWrapper #kssToolbar #kssToolbarMiddleArea #kssSetLineWidth #kssNumInputWrapper #kssArrowNumWrapper #kssDownNum:hover {\n\t\t\tbackground: #dedede;\n\t\t}\n\n\t\t.kssBody #kssScreenShotWrapper #kssToolbar #kssToolbarMiddleArea #kssSetLineWidth #kssShowLineWidthWrapper {\n\t\t\tdisplay: inline-block;\n\t\t\theight: 40px;\n\t\t\tline-height: 40px;\n\t\t\tvertical-align: top;\n\t\t\twidth: 80px;\n\t\t\ttext-align: center;\n\t\t}\n\n\t\t.kssBody #kssScreenShotWrapper #kssToolbar #kssToolbarMiddleArea #kssSetLineWidth #kssShowLineWidthWrapper #kssShowLineWidth {\n\t\t\theight: 20px;\n\t\t\tdisplay: inline-block;\n\t\t\tvertical-align: middle;\n\t\t}');

        if (immediately === true) {
            that.start();
            that.end();
        }

        if (key === undefined) {
            key = 65;
        } else if (key === null) {
            return;
        }

        that._containerDocument.addEventListener('keydown', isRightKey.bind(null, key));

        function isRightKey(key, e) {
            if (e.keyCode === key && e.shiftKey && !that.isScreenshot) {
                that.start();
                that.end();
            }
        }
    };

    kss.prototype.start = function () {
        var _this2 = this;

        var that = this;
        if (that.isScreenshot) {
            return;
        }
        that.isScreenshot = true;

        // html2canvas(window.wonder_containerDocument.body, {useCORS:true, scrollY:200})
        _domToImage2.default.toCanvas(that._node).then(function (canvas) {
            return _this2._canvasHandlerFunc === undefined ? canvas : _this2._canvasHandlerFunc(canvas);
        }).then(function (canvas) {
            that.kss = canvas;
            that.scrollTop = that._document.documentElement.scrollTop;
            canvas.id = 'kss';

            that._container.appendChild(canvas);

            (0, _util.addClass)(that._container, 'kssBody');

            var top = -that.scrollTop;
            var left = 0;
            (0, _util.css)(canvas, {
                top: top + 'px',
                left: left + 'px'
            });

            canvas.addEventListener('mousedown', that.startDrawDown);
        });
    };

    kss.prototype.end = function () {
        var that = this;

        that.endScreenShot = function (e) {
            if (e.keyCode === 27) {
                (0, _endAndClear2.default)(that);
                that.cancelCB();
            }
        };

        that._containerDocument.addEventListener('keydown', that.endScreenShot);
    };

    return kss;
}();

exports.default = kss;

/***/ }),

/***/ "./src/kss.scss":
/*!**********************!*\
  !*** ./src/kss.scss ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/css-loader!../node_modules/sass-loader/dist/cjs.js!./kss.scss */ "./node_modules/css-loader/index.js!./node_modules/sass-loader/dist/cjs.js!./src/kss.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/toolbar/activeToolbarItem.js":
/*!******************************************!*\
  !*** ./src/toolbar/activeToolbarItem.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = activeToolbarItem;

var _util = __webpack_require__(/*! ../util */ "./src/util.js");

function activeToolbarItem(obj) {
    var kssToolbarItemBT = window.wonder_containerDocument.getElementsByClassName('kssToolbarItemBT');

    Array.prototype.forEach.call(kssToolbarItemBT, function (it) {
        (0, _util.removeClass)(it, 'kssToolbarActiveItemBT');
    });

    if (obj) {
        (0, _util.addClass)(obj, 'kssToolbarActiveItemBT');
        window.wonder_containerDocument.getElementById('kssRectangleCanvas').style.cursor = 'crosshair';
    } else {
        window.wonder_containerDocument.getElementById('kssRectangleCanvas').style.cursor = 'move';
    }
}

/***/ }),

/***/ "./src/toolbar/arrow.js":
/*!******************************!*\
  !*** ./src/toolbar/arrow.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = arrow;

var _util = __webpack_require__(/*! ../util */ "./src/util.js");

function arrow(startPos, endPos, triangle, me) {
    var startX = startPos.x * me.scale;
    var startY = startPos.y * me.scale;
    var endX = endPos.x * me.scale;
    var endY = endPos.y * me.scale;
    var MaxTwoSize = 20;

    (0, _util.computed)(triangle, 'distance', ['twoSide', 'bottomSide', 'crossWidth'], [function (obj, baseValue, changeProperty) {
        if (baseValue / 2 * 1.1 <= MaxTwoSize) {
            obj[changeProperty] = baseValue / 2 * 1.1;
        } else {
            obj[changeProperty] = MaxTwoSize;
        }
    }, function (obj, baseValue, changeProperty) {
        if (baseValue / 2 * 1.1 <= MaxTwoSize) {
            obj[changeProperty] = baseValue / 2 * 1.1 * 0.8;
        } else {
            obj[changeProperty] = MaxTwoSize * 0.8;
        }
    }, function (obj, baseValue, changeProperty) {
        if (baseValue / 2 * 1.1 <= MaxTwoSize) {
            obj[changeProperty] = baseValue / 2 * 1.1 * 0.4;
        } else {
            obj[changeProperty] = MaxTwoSize * 0.4;
        }
    }]);
    var distance = Math.sqrt(Math.pow(startX - endX, 2) + Math.pow(startY - endY, 2));

    triangle.distance = distance;

    var h = Math.sqrt(Math.pow(triangle.twoSide, 2) - Math.pow(triangle.bottomSide / 2, 2));
    var x = Math.sqrt(Math.pow(h, 2) + Math.pow(triangle.crossWidth / 2, 2));
    var angle = Math.atan(triangle.bottomSide / 2 / h) * 180 / Math.PI;
    var angle1 = Math.atan(triangle.crossWidth / 2 / h) * 180 / Math.PI;
    var rightX = void 0,
        rightY = void 0,
        hX = void 0,
        hY = void 0,
        cX = void 0,
        cY = void 0,
        bX = void 0,
        bY = void 0;
    //当左上和右下时为一种情况，左下和右上为一种情况
    if (startX > endX && startY > endY || startX < endX && startY < endY) {
        var angle2 = Math.atan(Math.abs(startX - endX) / Math.abs(startY - endY)) * 180 / Math.PI;

        var y1 = Math.cos((angle1 + angle2) * 2 * Math.PI / 360) * x;
        var x1 = Math.sin((angle1 + angle2) * 2 * Math.PI / 360) * x;

        var symbol = 1;

        if (startX < endX && startY < endY) {
            symbol = -1;
        }

        rightX = endX + x1 * symbol;
        rightY = endY + y1 * symbol;

        var y2 = Math.cos((angle + angle2) * 2 * Math.PI / 360) * triangle.twoSide;
        var x2 = Math.sin((angle + angle2) * 2 * Math.PI / 360) * triangle.twoSide;

        hX = endX + x2 * symbol;
        hY = endY + y2 * symbol;

        var y3 = Math.cos(angle2 * 2 * Math.PI / 360) * h;
        var x3 = Math.sin(angle2 * 2 * Math.PI / 360) * h;

        var zX = endX + x3 * symbol;
        var zY = endY + y3 * symbol;

        bX = 2 * zX - rightX;
        bY = 2 * zY - rightY;

        cX = 2 * zX - hX;
        cY = 2 * zY - hY;
    } else if (startX < endX && startY > endY || startX > endX && startY < endY) {
        var _angle = Math.atan(Math.abs(startY - endY) / Math.abs(startX - endX)) * 180 / Math.PI;

        var _x = Math.cos((angle1 + _angle) * 2 * Math.PI / 360) * x;
        var _y = Math.sin((angle1 + _angle) * 2 * Math.PI / 360) * x;

        var _symbol = 1;

        if (startX < endX && startY > endY) {
            _symbol = -1;
        }

        rightX = endX + _x * _symbol;
        rightY = endY - _y * _symbol;

        var _x2 = Math.cos((angle + _angle) * 2 * Math.PI / 360) * triangle.twoSide;
        var _y2 = Math.sin((angle + _angle) * 2 * Math.PI / 360) * triangle.twoSide;

        hX = endX + _x2 * _symbol;
        hY = endY - _y2 * _symbol;

        var _x3 = Math.cos(_angle * 2 * Math.PI / 360) * h;
        var _y3 = Math.sin(_angle * 2 * Math.PI / 360) * h;

        var _zX = endX + _x3 * _symbol;
        var _zY = endY - _y3 * _symbol;

        bX = 2 * _zX - rightX;
        bY = 2 * _zY - rightY;

        cX = 2 * _zX - hX;
        cY = 2 * _zY - hY;
    } else if (startX === endX) {
        var _symbol2 = 1;

        if (startY < endY) {
            _symbol2 = -1;
        }

        var _zX2 = endX;
        var _zY2 = endY + h * _symbol2;

        rightX = _zX2 + triangle.crossWidth / 2 * _symbol2;
        rightY = _zY2;

        hX = _zX2 + triangle.bottomSide / 2 * _symbol2;
        hY = _zY2;

        bX = _zX2 - triangle.crossWidth / 2 * _symbol2;
        bY = _zY2;

        cX = _zX2 - triangle.bottomSide / 2 * _symbol2;
        cY = _zY2;
    } else if (startY === endY) {
        var _symbol3 = 1;

        if (startX < endX) {
            _symbol3 = -1;
        }

        var _zX3 = endX + h * _symbol3;
        var _zY3 = endY;

        rightX = _zX3;
        rightY = _zY3 + triangle.crossWidth / 2 * _symbol3;

        hX = _zX3;
        hY = _zY3 + triangle.bottomSide / 2 * _symbol3;

        bX = _zX3;
        bY = _zY3 - triangle.crossWidth / 2 * _symbol3;

        cX = _zX3;
        cY = _zY3 - triangle.bottomSide / 2 * _symbol3;
    }

    var context = me.rectangleCanvas.getContext("2d");
    context.beginPath();
    context.lineWidth = 1;
    context.moveTo(startX, startY);
    context.lineTo(rightX, rightY);
    context.lineTo(hX, hY);
    context.lineTo(endX, endY);
    context.lineTo(cX, cY);
    context.lineTo(bX, bY);
    context.lineTo(startX, startY);
    context.fillStyle = me.toolbarColor;
    context.fill();
    context.closePath();
}

/***/ }),

/***/ "./src/toolbar/backToPreImg.js":
/*!*************************************!*\
  !*** ./src/toolbar/backToPreImg.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = backToPreImg;
function backToPreImg(me) {
  var ctx = me.rectangleCanvas.getContext('2d');

  ctx.drawImage(me.currentImgDom, 0, 0, me.width * me.scale, me.height * me.scale, 0, 0, me.width * me.scale, me.height * me.scale);
}

/***/ }),

/***/ "./src/toolbar/colorBoard.js":
/*!***********************************!*\
  !*** ./src/toolbar/colorBoard.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = colorBoard;

var _util = __webpack_require__(/*! ../util */ "./src/util.js");

var colorList = ['#000', '#808080', '#800000', '#f7883a', '#308430', '#385ad3', '#800080', '#009999', '#fff', '#c0c0c0', '#fb3838', '#ffff00', '#99cc00', '#3894e4', '#f31af3', '#16dcdc'];

function colorBoard(me) {
    var colorBoard = window.wonder_containerDocument.createElement('span');
    colorBoard.id = 'kssColorBoard';
    colorBoard.title = '颜色板';
    colorBoard.tabIndex = '-1';

    var currentColor = window.wonder_containerDocument.createElement('span');
    currentColor.id = 'kssCurrentColor';

    (0, _util.css)(currentColor, {
        background: me.toolbarColor
    });

    colorBoard.appendChild(currentColor);

    var colorItemWrapper = window.wonder_containerDocument.createElement('div');
    colorItemWrapper.id = 'kssColorItemWrapper';

    colorList.forEach(function (it, index) {
        var dom = window.wonder_containerDocument.createElement('span');
        dom.className = 'kssColorItem kss' + it;
        dom.dataset.color = it;

        (0, _util.css)(dom, {
            background: it
        });

        if (index <= colorList.length / 2 - 1) {
            (0, _util.css)(dom, {
                'margin-bottom': '2px'
            });
        }

        dom.addEventListener('click', function (e) {
            var color = e.currentTarget.dataset.color;

            me.toolbarColor = color;
            currentColor.style.background = color;
        });

        colorItemWrapper.appendChild(dom);
    });

    colorBoard.appendChild(colorItemWrapper);

    colorBoard.addEventListener('focus', function (e) {
        e.currentTarget.style.display = 'block';
    });

    colorBoard.addEventListener('blur', function (e) {
        e.currentTarget.style.display = 'none';
    });

    return colorBoard;
}

/***/ }),

/***/ "./src/toolbar/copy.js":
/*!*****************************!*\
  !*** ./src/toolbar/copy.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = copy;

var _util = __webpack_require__(/*! ../util */ "./src/util.js");

function copy(me, url) {
    var imgWrapper = window.wonder_containerDocument.createElement('span');
    (0, _util.css)(imgWrapper, {
        opacity: '0'
    });

    var img = window.wonder_containerDocument.createElement('img');

    var absolutePath = void 0;
    if ((0, _util.typeChecking)(me.copyPath) === '[object Function]') {
        absolutePath = me.copyPath(url);
    } else {
        absolutePath = null;
    }

    if (absolutePath === null) {
        return;
    } else {
        img.src = absolutePath;
    }

    imgWrapper.appendChild(img);
    window.wonder_containerDocument.body.appendChild(imgWrapper);
    setTimeout(function () {
        (0, _util.css)(img, {
            width: img.width / me.scale + 'px',
            height: img.height / me.scale + 'px'
        });

        var selection = window.getSelection();
        var range = window.wonder_containerDocument.createRange();

        range.selectNodeContents(imgWrapper);

        selection.removeAllRanges();
        selection.addRange(range);
        window.wonder_containerDocument.execCommand('Copy');

        (0, _util.remove)(imgWrapper);
    }, 0);
}

/***/ }),

/***/ "./src/toolbar/download.js":
/*!*********************************!*\
  !*** ./src/toolbar/download.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = download;
function download(me) {
    return new Promise(function (resolve) {
        var imgUrl = me.snapshootList[me.snapshootList.length - 1];
        var a = window.wonder_containerDocument.createElement('a');
        if ('download' in a) {
            a.href = imgUrl;
            a.download = 'kss' + new Date().getTime() + '.png';

            var event = window.wonder_containerDocument.createEvent('MouseEvents');
            event.initEvent('click', false, false);
            a.dispatchEvent(event);
        } else {
            var newImgUrl = imgUrl.replace('image/png', 'image/octet-stream');
            window.location.href = newImgUrl;
        }
        resolve();
    });
}

/***/ }),

/***/ "./src/toolbar/endAndClear.js":
/*!************************************!*\
  !*** ./src/toolbar/endAndClear.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = endAndClear;

var _util = __webpack_require__(/*! ../util */ "./src/util.js");

function endAndClear(me) {
    (0, _util.removeClass)(window.wonder_containerDocument.body, 'kssBody');

    me.kss && (0, _util.remove)(me.kss);
    me.kssScreenShotWrapper && (0, _util.remove)(me.kssScreenShotWrapper);
    me.style && (0, _util.remove)(me.style);
    me.kss = null;
    me.rectangleCanvas = null;
    me.kssTextLayer = null;
    me.kssScreenShotWrapper = null;
    me.drawingStatus = null;
    me.toolbar = null;
    me.currentToolType = null;
    me.snapshootList = [];
    me.isScreenshot = false;
    me.isEdit = false;
    me.toolmousedown = null;
    me.toolmousemove = null;
    me.toolmouseup = null;
    window.wonder_containerDocument.removeEventListener('keydown', me.endScreenShot);
    setTimeout(function () {
        window.wonder_containerDocument.removeEventListener('contextmenu', me.preventContextMenu);
    }, 0);
    window.wonder_containerDocument.removeEventListener('keydown', me.endScreenShot);
    window.wonder_containerDocument.removeEventListener('mouseup', me.cancelDrawingStatus);
}

/***/ }),

/***/ "./src/toolbar/layerSort.js":
/*!**********************************!*\
  !*** ./src/toolbar/layerSort.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = layerSort;

var _util = __webpack_require__(/*! ../util */ "./src/util.js");

function layerSort(me, layer) {
    if (layer === 'textLayer') {
        (0, _util.css)(me.kssTextLayer, {
            'z-index': 99
        });

        (0, _util.css)(me.rectangleCanvas, {
            'z-index': 98
        });
    } else if (layer === 'canvasLayer') {
        (0, _util.css)(me.rectangleCanvas, {
            'z-index': 99
        });

        (0, _util.css)(me.kssTextLayer, {
            'z-index': 98
        });
    }
}

/***/ }),

/***/ "./src/toolbar/makeSnapShoot.js":
/*!**************************************!*\
  !*** ./src/toolbar/makeSnapShoot.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = makeSnapShoot;
function makeSnapShoot(me) {
  var ctx = me.rectangleCanvas.getContext('2d');

  ctx.drawImage(me.rectangleCanvas, 0, 0, me.width * me.scale, me.height * me.scale, 0, 0, me.width * me.scale, me.height * me.scale);

  var dataURL = me.rectangleCanvas.toDataURL('image/png');

  me.snapshootList.push(dataURL);
  me.currentImgDom.src = dataURL;
}

/***/ }),

/***/ "./src/toolbar/middleImage/clearMiddleImage.js":
/*!*****************************************************!*\
  !*** ./src/toolbar/middleImage/clearMiddleImage.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = clearMiddleImage;
function clearMiddleImage(me) {
    me.rectangleCanvas.width = me.width * me.scale;
    me.rectangleCanvas.height = me.height * me.scale;
    var ctx = me.rectangleCanvas.getContext("2d");
    ctx.clearRect(0, 0, me.width, me.height);
}

/***/ }),

/***/ "./src/toolbar/middleImage/drawMiddleImage.js":
/*!****************************************************!*\
  !*** ./src/toolbar/middleImage/drawMiddleImage.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = drawMiddleImage;
function drawMiddleImage(me) {
  me.rectangleCanvas.width = me.width * me.scale;
  me.rectangleCanvas.height = me.height * me.scale;
  var ctx = me.rectangleCanvas.getContext('2d');
  ctx.drawImage(me.kss, me.startX * me.scale, (me.startY + me.scrollTop) * me.scale, me.width * me.scale, me.height * me.scale, 0, 0, me.width * me.scale, me.height * me.scale);

  var dataURL = me.rectangleCanvas.toDataURL('image/png');

  me.imgBase64 = dataURL;
  me.snapshootList[0] = dataURL;
  me.currentImgDom.src = me.imgBase64;
}

/***/ }),

/***/ "./src/toolbar/setLineWidth.js":
/*!*************************************!*\
  !*** ./src/toolbar/setLineWidth.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = setLineWidth;

var _util = __webpack_require__(/*! ../util */ "./src/util.js");

function setLineWidth(me) {
    var setLineWidth = window.wonder_containerDocument.createElement('span');
    setLineWidth.id = 'kssSetLineWidth';
    setLineWidth.tabIndex = '-1';

    var numInputWrapper = window.wonder_containerDocument.createElement('div');
    numInputWrapper.id = 'kssNumInputWrapper';

    var numInput = window.wonder_containerDocument.createElement('input');
    numInput.id = 'kssNumInput';
    numInput.value = me.toolbarLineWidth;
    numInputWrapper.appendChild(numInput);
    numInput.addEventListener('input', function (e) {
        var val = parseInt(e.currentTarget.value);

        if (val > 20) {
            val = 20;
        } else if (val <= 0) {
            val = 1;
        }
        numInput.value = val;
        me.toolbarLineWidth = val;
        (0, _util.css)(showLineWidth, {
            width: me.toolbarLineWidth + 'px'
        });
    });
    var arrowNumWrapper = window.wonder_containerDocument.createElement('span');
    arrowNumWrapper.id = 'kssArrowNumWrapper';

    var upNum = window.wonder_containerDocument.createElement('div');
    upNum.id = 'kssUpNum';
    upNum.innerHTML = '▲';
    var downNum = window.wonder_containerDocument.createElement('div');
    downNum.id = 'kssDownNum';
    downNum.innerHTML = '▼';

    upNum.addEventListener('click', function () {
        if (numInput.value < 20) {
            numInput.value = parseInt(numInput.value) + 1;
            me.toolbarLineWidth = numInput.value;
            (0, _util.css)(showLineWidth, {
                width: me.toolbarLineWidth + 'px'
            });
        }
    });

    downNum.addEventListener('click', function () {
        if (numInput.value > 1) {
            numInput.value = parseInt(numInput.value) - 1;
            me.toolbarLineWidth = numInput.value;
            (0, _util.css)(showLineWidth, {
                width: me.toolbarLineWidth + 'px'
            });
        }
    });

    arrowNumWrapper.appendChild(upNum);
    arrowNumWrapper.appendChild(downNum);

    numInputWrapper.appendChild(arrowNumWrapper);

    setLineWidth.appendChild(numInputWrapper);

    var showLineWidthWrapper = window.wonder_containerDocument.createElement('div');
    showLineWidthWrapper.id = 'kssShowLineWidthWrapper';

    var showLineWidth = window.wonder_containerDocument.createElement('span');
    showLineWidth.id = 'kssShowLineWidth';
    (0, _util.css)(showLineWidth, {
        width: me.toolbarLineWidth + 'px',
        background: '#fb3838'
    });

    showLineWidthWrapper.appendChild(showLineWidth);

    setLineWidth.appendChild(showLineWidthWrapper);

    setLineWidth.addEventListener('focus', function (e) {
        e.currentTarget.style.display = 'block';
    });

    setLineWidth.addEventListener('blur', function () {
        setTimeout(function () {
            if (numInput !== window.wonder_containerDocument.activeElement) {
                setLineWidth.style.display = 'none';
            }
        }, 0);
    });

    numInput.addEventListener('blur', function () {
        setTimeout(function () {
            if (setLineWidth !== window.wonder_containerDocument.activeElement) {
                setLineWidth.style.display = 'none';
            }
        }, 0);
    });

    return setLineWidth;
}

/***/ }),

/***/ "./src/toolbar/tool/arrowBT.js":
/*!*************************************!*\
  !*** ./src/toolbar/tool/arrowBT.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = arrowBT;

var _util = __webpack_require__(/*! ../../util */ "./src/util.js");

var _arrow = __webpack_require__(/*! ../arrow */ "./src/toolbar/arrow.js");

var _arrow2 = _interopRequireDefault(_arrow);

var _backToPreImg = __webpack_require__(/*! ../backToPreImg */ "./src/toolbar/backToPreImg.js");

var _backToPreImg2 = _interopRequireDefault(_backToPreImg);

var _makeSnapShoot = __webpack_require__(/*! ../makeSnapShoot */ "./src/toolbar/makeSnapShoot.js");

var _makeSnapShoot2 = _interopRequireDefault(_makeSnapShoot);

var _arrow3 = __webpack_require__(/*! ../../assets/imgs/arrow.png */ "./src/assets/imgs/arrow.png");

var _arrow4 = _interopRequireDefault(_arrow3);

var _activeToolbarItem = __webpack_require__(/*! ../activeToolbarItem */ "./src/toolbar/activeToolbarItem.js");

var _activeToolbarItem2 = _interopRequireDefault(_activeToolbarItem);

var _layerSort = __webpack_require__(/*! ../layerSort */ "./src/toolbar/layerSort.js");

var _layerSort2 = _interopRequireDefault(_layerSort);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function arrowBT(me) {
    var arrowBT = window.wonder_containerDocument.createElement('span');
    arrowBT.id = 'kssArrowBT';
    arrowBT.className = 'kssToolbarItemBT';
    arrowBT.title = '箭头工具';

    var arrowImg = window.wonder_containerDocument.createElement('img');
    arrowImg.className = 'kssToolbarItemImg';
    arrowImg.src = _arrow4.default;
    me.arrowBT = arrowBT;

    arrowBT.appendChild(arrowImg);

    arrowBT.addEventListener('click', function () {
        me.isEdit = true;

        if (me.currentToolType === 'arrow') {
            return;
        }

        me.currentToolType = 'arrow';
        (0, _activeToolbarItem2.default)(arrowBT);
        (0, _layerSort2.default)(me, 'canvasLayer');

        if (me.toolmousedown) {
            me.rectangleCanvas.removeEventListener('mousedown', me.toolmousedown);
            window.wonder_containerDocument.removeEventListener('mousemove', me.toolmousemove);
            window.wonder_containerDocument.removeEventListener('mouseup', me.toolmouseup);
        }

        me.rectangleCanvas.addEventListener('mousedown', arrowMousedownEvent);
        me.toolmousedown = arrowMousedownEvent;

        function arrowMousedownEvent(e) {
            if (e.button === 2) {
                return;
            }
            var startX = e.clientX;
            var startY = e.clientY;

            window.wonder_containerDocument.addEventListener('mousemove', arrowMousemoveEvent);
            window.wonder_containerDocument.addEventListener('mouseup', arrowMouseupEvent);
            me.toolmousemove = arrowMousemoveEvent;
            me.toolmouseup = arrowMouseupEvent;
            var triangle = {
                distance: null,
                twoSide: null,
                bottomSide: null,
                crossWidth: null
            };
            function arrowMousemoveEvent(e) {
                (0, _backToPreImg2.default)(me);
                var endX = e.clientX;
                var endY = e.clientY;

                if (endX < me.startX) {
                    endX = me.startX;
                } else if (endX > me.startX + me.width) {
                    endX = me.startX + me.width;
                }

                if (endY < me.startY) {
                    endY = me.startY;
                } else if (endY > me.startY + me.height) {
                    endY = me.startY + me.height;
                }

                (0, _arrow2.default)({ x: startX - me.startX, y: startY - me.startY }, { x: endX - me.startX, y: endY - me.startY }, triangle, me);
            }

            function arrowMouseupEvent(e) {
                var endX = e.clientX;
                var endY = e.clientY;

                if (startX === endX && startY === endY) {
                    window.wonder_containerDocument.removeEventListener('mousemove', arrowMousemoveEvent);
                    window.wonder_containerDocument.removeEventListener('mouseup', arrowMouseupEvent);
                    return;
                }
                window.wonder_containerDocument.removeEventListener('mousemove', arrowMousemoveEvent);
                window.wonder_containerDocument.removeEventListener('mouseup', arrowMouseupEvent);
                (0, _makeSnapShoot2.default)(me);
            }
        }
    });

    return arrowBT;
}

/***/ }),

/***/ "./src/toolbar/tool/backBT.js":
/*!************************************!*\
  !*** ./src/toolbar/tool/backBT.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = backBT;

var _util = __webpack_require__(/*! ../../util */ "./src/util.js");

var _backToPreImg = __webpack_require__(/*! ../backToPreImg */ "./src/toolbar/backToPreImg.js");

var _backToPreImg2 = _interopRequireDefault(_backToPreImg);

var _back = __webpack_require__(/*! ../../assets/imgs/back.png */ "./src/assets/imgs/back.png");

var _back2 = _interopRequireDefault(_back);

var _activeToolbarItem = __webpack_require__(/*! ../activeToolbarItem */ "./src/toolbar/activeToolbarItem.js");

var _activeToolbarItem2 = _interopRequireDefault(_activeToolbarItem);

var _layerSort = __webpack_require__(/*! ../layerSort */ "./src/toolbar/layerSort.js");

var _layerSort2 = _interopRequireDefault(_layerSort);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function backBT(me) {
    var backBT = window.wonder_containerDocument.createElement('span');
    backBT.id = 'kssbackeBT';
    backBT.className = 'kssToolbarItemBT';
    backBT.title = '后退';

    var backImg = window.wonder_containerDocument.createElement('img');
    backImg.className = 'kssToolbarItemImg';
    backImg.src = _back2.default;
    me.backBT = backBT;

    backBT.appendChild(backImg);

    backBT.addEventListener('click', function () {
        if (me.snapshootList.length > 1) {
            if (me.snapshootList.length === 2) {
                (0, _layerSort2.default)(me, 'canvasLayer');
                backToInit();
            }
            me.snapshootList.pop();
        } else if (me.snapshootList.length === 1) {
            (0, _layerSort2.default)(me, 'canvasLayer');
            backToInit();
        }

        me.currentImgDom.src = me.snapshootList[me.snapshootList.length - 1];
        setTimeout(function () {
            (0, _backToPreImg2.default)(me);
        }, 0);
    });

    function backToInit() {
        me.isEdit = false;
        me.currentToolType = null;
        me.rectangleCanvas.removeEventListener('mousedown', me.toolmousedown);
        window.wonder_containerDocument.removeEventListener('mousemove', me.toolmousemove);
        window.wonder_containerDocument.removeEventListener('mouseup', me.toolmouseup);
        (0, _activeToolbarItem2.default)(null);
    }

    return backBT;
}

/***/ }),

/***/ "./src/toolbar/tool/colorBT.js":
/*!*************************************!*\
  !*** ./src/toolbar/tool/colorBT.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = colorBT;

var _util = __webpack_require__(/*! ../../util */ "./src/util.js");

var _color = __webpack_require__(/*! ../../assets/imgs/color.png */ "./src/assets/imgs/color.png");

var _color2 = _interopRequireDefault(_color);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function colorBT(me) {
    var colorBT = window.wonder_containerDocument.createElement('span');
    colorBT.id = 'kssColorBT';
    colorBT.className = 'kssToolbarItemBT';
    colorBT.title = '颜色工具';

    var colorImg = window.wonder_containerDocument.createElement('img');
    colorImg.className = 'kssToolbarItemImg';
    colorImg.src = _color2.default;
    me.colorBT = colorBT;

    colorBT.appendChild(colorImg);

    colorBT.addEventListener('click', function () {
        var clientHeight = window.wonder_containerDocument.documentElement.clientHeight;
        var colorBoard = window.wonder_containerDocument.getElementById('kssColorBoard');
        var bottomSurplus = clientHeight - me.startY - me.height - me.toolbarMarginTop - me.toolbarHeight;

        if (bottomSurplus < 0) {
            (0, _util.css)(colorBoard, {
                top: '30px'
            });
        } else {
            (0, _util.css)(colorBoard, {
                top: '-40px'
            });
        }

        colorBoard.style.display = 'block';
        colorBoard.focus();
    });

    return colorBT;
}

/***/ }),

/***/ "./src/toolbar/tool/completeBT.js":
/*!****************************************!*\
  !*** ./src/toolbar/tool/completeBT.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = completeBT;

var _util = __webpack_require__(/*! ../../util */ "./src/util.js");

var _drawMiddleImage = __webpack_require__(/*! ../middleImage/drawMiddleImage */ "./src/toolbar/middleImage/drawMiddleImage.js");

var _drawMiddleImage2 = _interopRequireDefault(_drawMiddleImage);

var _copy = __webpack_require__(/*! ../copy */ "./src/toolbar/copy.js");

var _copy2 = _interopRequireDefault(_copy);

var _download = __webpack_require__(/*! ../download */ "./src/toolbar/download.js");

var _download2 = _interopRequireDefault(_download);

var _endAndClear = __webpack_require__(/*! ../endAndClear */ "./src/toolbar/endAndClear.js");

var _endAndClear2 = _interopRequireDefault(_endAndClear);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function completeBT(me) {
    var completeBT = window.wonder_containerDocument.createElement('span');
    completeBT.id = 'kssCompleteBT';
    completeBT.className = 'kssToolbarItemBT';
    completeBT.innerHTML = '完成';
    completeBT.title = '完成截图';

    (0, _util.css)(completeBT, {
        width: '40px',
        'line-height': '28px'
    });

    completeBT.addEventListener('click', async function () {
        me.isEdit = true;

        var lastShot = me.snapshootList[me.snapshootList.length - 1];
        (0, _copy2.default)(me, lastShot);
        me.needDownload === true && (await (0, _download2.default)(me));
        (0, _util.typeChecking)(me.endCB) === '[object Function]' && me.endCB(lastShot);
        (0, _endAndClear2.default)(me);
    });

    return completeBT;
}

/***/ }),

/***/ "./src/toolbar/tool/drawLineBT.js":
/*!****************************************!*\
  !*** ./src/toolbar/tool/drawLineBT.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = drawLineBT;

var _util = __webpack_require__(/*! ../../util */ "./src/util.js");

var _makeSnapShoot = __webpack_require__(/*! ../makeSnapShoot */ "./src/toolbar/makeSnapShoot.js");

var _makeSnapShoot2 = _interopRequireDefault(_makeSnapShoot);

var _draw = __webpack_require__(/*! ../../assets/imgs/draw.png */ "./src/assets/imgs/draw.png");

var _draw2 = _interopRequireDefault(_draw);

var _activeToolbarItem = __webpack_require__(/*! ../activeToolbarItem */ "./src/toolbar/activeToolbarItem.js");

var _activeToolbarItem2 = _interopRequireDefault(_activeToolbarItem);

var _layerSort = __webpack_require__(/*! ../layerSort */ "./src/toolbar/layerSort.js");

var _layerSort2 = _interopRequireDefault(_layerSort);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function drawLineBT(me) {
    var drawLineBT = window.wonder_containerDocument.createElement('span');
    drawLineBT.id = 'kssDrawLineBT';
    drawLineBT.className = 'kssToolbarItemBT';
    drawLineBT.title = '画刷工具';

    var drawLineImg = window.wonder_containerDocument.createElement('img');
    drawLineImg.className = 'kssToolbarItemImg';
    drawLineImg.src = _draw2.default;
    me.drawLineBT = drawLineBT;

    drawLineBT.appendChild(drawLineImg);

    drawLineBT.addEventListener('click', function () {
        me.isEdit = true;

        var kssSetLineWidth = window.wonder_containerDocument.getElementById('kssSetLineWidth');
        var clientHeight = window.wonder_containerDocument.documentElement.clientHeight;
        var bottomSurplus = clientHeight - me.startY - me.height - me.toolbarMarginTop - me.toolbarHeight;

        if (bottomSurplus < 0) {
            (0, _util.css)(kssSetLineWidth, {
                top: '30px'
            });
        } else {
            (0, _util.css)(kssSetLineWidth, {
                top: '-40px'
            });
        }

        kssSetLineWidth.style.display = 'block';
        kssSetLineWidth.focus();

        if (me.currentToolType === 'drawLine') {
            return;
        }

        me.currentToolType = 'drawLine';
        (0, _activeToolbarItem2.default)(drawLineBT);
        (0, _layerSort2.default)(me, 'canvasLayer');

        if (me.toolmousedown) {
            me.rectangleCanvas.removeEventListener('mousedown', me.toolmousedown);
            window.wonder_containerDocument.removeEventListener('mousemove', me.toolmousemove);
            window.wonder_containerDocument.removeEventListener('mouseup', me.toolmouseup);
        }

        me.rectangleCanvas.addEventListener('mousedown', drawLineMousedownEvent);
        me.toolmousedown = drawLineMousedownEvent;

        function drawLineMousedownEvent(e) {
            if (e.button === 2) {
                return;
            }
            var context = me.rectangleCanvas.getContext("2d");
            context.beginPath();
            context.moveTo((e.clientX - me.startX) * me.scale, (e.clientY - me.startY) * me.scale);

            context.strokeStyle = me.toolbarColor;

            window.wonder_containerDocument.addEventListener('mousemove', drawLineMousemoveEvent);
            window.wonder_containerDocument.addEventListener('mouseup', drawLineMouseupEvent);
            me.toolmousemove = drawLineMousemoveEvent;
            me.toolmouseup = drawLineMouseupEvent;

            function drawLineMousemoveEvent(e) {
                context.lineWidth = me.toolbarLineWidth;
                context.lineTo((e.clientX - me.startX) * me.scale, (e.clientY - me.startY) * me.scale);
                context.stroke();
            }

            function drawLineMouseupEvent(e) {
                context.closePath();
                window.wonder_containerDocument.removeEventListener('mousemove', drawLineMousemoveEvent);
                window.wonder_containerDocument.removeEventListener('mouseup', drawLineMouseupEvent);
                (0, _makeSnapShoot2.default)(me);
            }
        }
    });

    return drawLineBT;
}

/***/ }),

/***/ "./src/toolbar/tool/ellipseBT.js":
/*!***************************************!*\
  !*** ./src/toolbar/tool/ellipseBT.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ellipseBT;

var _util = __webpack_require__(/*! ../../util */ "./src/util.js");

var _backToPreImg = __webpack_require__(/*! ../backToPreImg */ "./src/toolbar/backToPreImg.js");

var _backToPreImg2 = _interopRequireDefault(_backToPreImg);

var _makeSnapShoot = __webpack_require__(/*! ../makeSnapShoot */ "./src/toolbar/makeSnapShoot.js");

var _makeSnapShoot2 = _interopRequireDefault(_makeSnapShoot);

var _ellipse = __webpack_require__(/*! ../../assets/imgs/ellipse.png */ "./src/assets/imgs/ellipse.png");

var _ellipse2 = _interopRequireDefault(_ellipse);

var _activeToolbarItem = __webpack_require__(/*! ../activeToolbarItem */ "./src/toolbar/activeToolbarItem.js");

var _activeToolbarItem2 = _interopRequireDefault(_activeToolbarItem);

var _layerSort = __webpack_require__(/*! ../layerSort */ "./src/toolbar/layerSort.js");

var _layerSort2 = _interopRequireDefault(_layerSort);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ellipseBT(me) {
  var ellipseBT = window.wonder_containerDocument.createElement('span');
  ellipseBT.id = 'kssArrowBT';
  ellipseBT.className = 'kssToolbarItemBT';
  ellipseBT.title = '椭圆工具';

  var ellipseImg = window.wonder_containerDocument.createElement('img');
  ellipseImg.className = 'kssToolbarItemImg';
  ellipseImg.src = _ellipse2.default;
  me.ellipseBT = ellipseBT;

  ellipseBT.appendChild(ellipseImg);

  ellipseBT.addEventListener('click', function () {
    me.isEdit = true;

    if (me.currentToolType === 'ellipse') {
      return;
    }

    me.currentToolType = 'ellipse';
    (0, _activeToolbarItem2.default)(ellipseBT);
    (0, _layerSort2.default)(me, 'canvasLayer');

    if (me.toolmousedown) {
      me.rectangleCanvas.removeEventListener('mousedown', me.toolmousedown);
      window.wonder_containerDocument.removeEventListener('mousemove', me.toolmousemove);
      window.wonder_containerDocument.removeEventListener('mouseup', me.toolmouseup);
    }

    me.rectangleCanvas.addEventListener('mousedown', ellipseMousedownEvent);
    me.toolmousedown = ellipseMousedownEvent;

    function ellipseMousedownEvent(e) {
      if (e.button === 2) {
        return;
      }

      var startX = e.clientX - me.startX;
      var startY = e.clientY - me.startY;

      window.wonder_containerDocument.addEventListener('mousemove', ellipseMousemoveEvent);
      window.wonder_containerDocument.addEventListener('mouseup', ellipseMouseupEvent);
      me.toolmousemove = ellipseMousemoveEvent;
      me.toolmouseup = ellipseMouseupEvent;

      function ellipseMousemoveEvent(e) {
        var context = me.rectangleCanvas.getContext("2d");
        context.clearRect(0, 0, me.width, me.height);
        (0, _backToPreImg2.default)(me);

        var endX = e.clientX;
        var endY = e.clientY;

        if (endX < me.startX) {
          endX = me.startX;
        } else if (endX > me.startX + me.width) {
          endX = me.startX + me.width;
        }

        endX -= me.startX;

        if (endY < me.startY) {
          endY = me.startY;
        } else if (endY > me.startY + me.height) {
          endY = me.startY + me.height;
        }

        endY -= me.startY;

        var centerX = (startX + endX) / 2;
        var centerY = (startY + endY) / 2;
        var radiusX = Math.abs(endX - startX) / 2;
        var radiusY = Math.abs(endY - startY) / 2;
        var k = 0.5522848;
        var ox = radiusX * k;
        var oy = radiusY * k;

        context.beginPath();
        context.lineWidth = 1;
        context.strokeStyle = me.toolbarColor;
        context.moveTo((centerX - radiusX) * me.scale, centerY * me.scale);
        context.bezierCurveTo((centerX - radiusX) * me.scale, (centerY - oy) * me.scale, (centerX - ox) * me.scale, (centerY - radiusY) * me.scale, centerX * me.scale, (centerY - radiusY) * me.scale);
        context.bezierCurveTo((centerX + ox) * me.scale, (centerY - radiusY) * me.scale, (centerX + radiusX) * me.scale, (centerY - oy) * me.scale, (centerX + radiusX) * me.scale, centerY * me.scale);
        context.bezierCurveTo((centerX + radiusX) * me.scale, (centerY + oy) * me.scale, (centerX + ox) * me.scale, (centerY + radiusY) * me.scale, centerX * me.scale, (centerY + radiusY) * me.scale);
        context.bezierCurveTo((centerX - ox) * me.scale, (centerY + radiusY) * me.scale, (centerX - radiusX) * me.scale, (centerY + oy) * me.scale, (centerX - radiusX) * me.scale, centerY * me.scale);
        context.stroke();
        context.closePath();
      }

      function ellipseMouseupEvent(e) {
        window.wonder_containerDocument.removeEventListener('mousemove', ellipseMousemoveEvent);
        window.wonder_containerDocument.removeEventListener('mouseup', ellipseMouseupEvent);
        (0, _makeSnapShoot2.default)(me);
      }
    }
  });

  return ellipseBT;
}

/***/ }),

/***/ "./src/toolbar/tool/quitBT.js":
/*!************************************!*\
  !*** ./src/toolbar/tool/quitBT.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = quitBT;

var _util = __webpack_require__(/*! ../../util */ "./src/util.js");

var _drawMiddleImage = __webpack_require__(/*! ../middleImage/drawMiddleImage */ "./src/toolbar/middleImage/drawMiddleImage.js");

var _drawMiddleImage2 = _interopRequireDefault(_drawMiddleImage);

var _cancel = __webpack_require__(/*! ../../assets/imgs/cancel.png */ "./src/assets/imgs/cancel.png");

var _cancel2 = _interopRequireDefault(_cancel);

var _endAndClear = __webpack_require__(/*! ../endAndClear */ "./src/toolbar/endAndClear.js");

var _endAndClear2 = _interopRequireDefault(_endAndClear);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function quitBT(me) {
    var quitBT = window.wonder_containerDocument.createElement('span');
    quitBT.id = 'kssQuitBT';
    quitBT.className = 'kssToolbarItemBT';
    quitBT.title = '退出截图';

    var quitImg = window.wonder_containerDocument.createElement('img');
    quitImg.className = 'kssToolbarItemImg';
    quitImg.src = _cancel2.default;
    me.quitBT = quitImg;

    quitBT.appendChild(quitImg);

    quitBT.addEventListener('click', function () {
        me.isEdit = true;

        (0, _endAndClear2.default)(me);
        me.cancelCB();
    });

    return quitBT;
}

/***/ }),

/***/ "./src/toolbar/tool/rectBT.js":
/*!************************************!*\
  !*** ./src/toolbar/tool/rectBT.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = rectBT;

var _util = __webpack_require__(/*! ../../util */ "./src/util.js");

var _backToPreImg = __webpack_require__(/*! ../backToPreImg */ "./src/toolbar/backToPreImg.js");

var _backToPreImg2 = _interopRequireDefault(_backToPreImg);

var _makeSnapShoot = __webpack_require__(/*! ../makeSnapShoot */ "./src/toolbar/makeSnapShoot.js");

var _makeSnapShoot2 = _interopRequireDefault(_makeSnapShoot);

var _rect = __webpack_require__(/*! ../../assets/imgs/rect.png */ "./src/assets/imgs/rect.png");

var _rect2 = _interopRequireDefault(_rect);

var _activeToolbarItem = __webpack_require__(/*! ../activeToolbarItem */ "./src/toolbar/activeToolbarItem.js");

var _activeToolbarItem2 = _interopRequireDefault(_activeToolbarItem);

var _layerSort = __webpack_require__(/*! ../layerSort */ "./src/toolbar/layerSort.js");

var _layerSort2 = _interopRequireDefault(_layerSort);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function rectBT(me) {
    var rectBT = window.wonder_containerDocument.createElement('span');
    rectBT.id = 'kssRectBT';
    rectBT.className = 'kssToolbarItemBT';
    rectBT.title = '方形工具';

    var rectImg = window.wonder_containerDocument.createElement('img');
    rectImg.className = 'kssToolbarItemImg';
    rectImg.src = _rect2.default;
    me.rectBT = rectBT;

    rectBT.appendChild(rectImg);

    rectBT.addEventListener('click', function () {
        me.isEdit = true;

        if (me.currentToolType === 'rect') {
            return;
        }

        me.currentToolType = 'rect';
        (0, _activeToolbarItem2.default)(rectBT);
        (0, _layerSort2.default)(me, 'canvasLayer');

        if (me.toolmousedown) {
            me.rectangleCanvas.removeEventListener('mousedown', me.toolmousedown);
            window.wonder_containerDocument.removeEventListener('mousemove', me.toolmousemove);
            window.wonder_containerDocument.removeEventListener('mouseup', me.toolmouseup);
        }

        me.rectangleCanvas.addEventListener('mousedown', rectMousedownEvent);
        me.toolmousedown = rectMousedownEvent;

        function rectMousedownEvent(e) {
            if (e.button === 2) {
                return;
            }
            var startX = e.clientX - me.startX;
            var startY = e.clientY - me.startY;

            window.wonder_containerDocument.addEventListener('mousemove', rectMousemoveEvent);
            window.wonder_containerDocument.addEventListener('mouseup', rectMouseupEvent);
            me.toolmousemove = rectMousemoveEvent;
            me.toolmouseup = rectMouseupEvent;

            function rectMousemoveEvent(e) {
                var context = me.rectangleCanvas.getContext("2d");
                context.clearRect(0, 0, me.width, me.height);
                (0, _backToPreImg2.default)(me);

                var endX = e.clientX;
                var endY = e.clientY;

                if (endX < me.startX) {
                    endX = me.startX;
                } else if (endX > me.startX + me.width) {
                    endX = me.startX + me.width;
                }

                endX -= me.startX;

                if (endY < me.startY) {
                    endY = me.startY;
                } else if (endY > me.startY + me.height) {
                    endY = me.startY + me.height;
                }

                endY -= me.startY;

                context.beginPath();
                context.moveTo(Math.min(startX, endX) * me.scale, Math.min(startY, endY) * me.scale);
                context.lineTo(Math.max(startX, endX) * me.scale, Math.min(startY, endY) * me.scale);
                context.lineTo(Math.max(startX, endX) * me.scale, Math.max(startY, endY) * me.scale);
                context.lineTo(Math.min(startX, endX) * me.scale, Math.max(startY, endY) * me.scale);
                context.lineTo(Math.min(startX, endX) * me.scale, Math.min(startY, endY) * me.scale);
                context.lineWidth = 1;
                context.strokeStyle = me.toolbarColor;
                context.stroke();
                context.closePath();
            }

            function rectMouseupEvent(e) {
                window.wonder_containerDocument.removeEventListener('mousemove', rectMousemoveEvent);
                window.wonder_containerDocument.removeEventListener('mouseup', rectMouseupEvent);
                (0, _makeSnapShoot2.default)(me);
            }
        }
    });

    return rectBT;
}

/***/ }),

/***/ "./src/toolbar/tool/textBT.js":
/*!************************************!*\
  !*** ./src/toolbar/tool/textBT.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = textBT;

var _util = __webpack_require__(/*! ../../util */ "./src/util.js");

var _makeSnapShoot = __webpack_require__(/*! ../makeSnapShoot */ "./src/toolbar/makeSnapShoot.js");

var _makeSnapShoot2 = _interopRequireDefault(_makeSnapShoot);

var _activeToolbarItem = __webpack_require__(/*! ../activeToolbarItem */ "./src/toolbar/activeToolbarItem.js");

var _activeToolbarItem2 = _interopRequireDefault(_activeToolbarItem);

var _layerSort = __webpack_require__(/*! ../layerSort */ "./src/toolbar/layerSort.js");

var _layerSort2 = _interopRequireDefault(_layerSort);

var _text = __webpack_require__(/*! ../../assets/imgs/text.png */ "./src/assets/imgs/text.png");

var _text2 = _interopRequireDefault(_text);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function textBT(me) {
    var textBT = window.wonder_containerDocument.createElement('span');
    textBT.id = 'kssTextBT';
    textBT.className = 'kssToolbarItemBT';
    textBT.title = '字体工具';

    var textImg = window.wonder_containerDocument.createElement('img');
    textImg.className = 'kssToolbarItemImg';
    textImg.src = _text2.default;
    me.textBT = textBT;

    textBT.appendChild(textImg);

    textBT.addEventListener('click', function () {
        me.isEdit = true;

        if (me.currentToolType === 'text') {
            return;
        }

        me.currentToolType = 'text';
        (0, _activeToolbarItem2.default)(textBT);
        (0, _layerSort2.default)(me, 'textLayer');

        if (me.toolmousedown) {
            me.rectangleCanvas.removeEventListener('mousedown', me.toolmousedown);
            window.wonder_containerDocument.removeEventListener('mousemove', me.toolmousemove);
            window.wonder_containerDocument.removeEventListener('mouseup', me.toolmouseup);
        }

        var isFocus = false;
        var isInner = false;

        if (!me.textClickEvent) {
            var textClickEvent = function textClickEvent(e) {
                if (isFocus) {
                    return;
                }
                var startX = e.clientX - me.startX;
                var startY = e.clientY - me.startY;
                var minWidth = 60;
                var minHeight = 36;

                var textarea = window.wonder_containerDocument.createElement('div');
                textarea.className = 'kssTextarea';
                textarea.contentEditable = true;
                textarea.tabIndex = -1;
                var offsetX = 0;
                var offsetY = 0;
                if (me.width - startX < minWidth) {
                    offsetX = minWidth - (me.width - startX);
                } else {
                    (0, _util.css)(textarea, {
                        'min-width': minWidth + 'px'
                    });
                }

                if (me.height - startY < minHeight) {
                    offsetY = minHeight - (me.height - startY);
                } else {
                    (0, _util.css)(textarea, {
                        'min-height': minHeight + 'px'
                    });
                }

                (0, _util.css)(textarea, {
                    position: 'absolute',
                    top: startY - offsetY + 'px',
                    left: startX - offsetX + 'px',
                    'max-width': me.width - startX + 'px',
                    'max-height': me.height - startY + 'px'
                });

                me.kssTextLayer.appendChild(textarea);

                textarea.addEventListener('focus', function () {
                    isFocus = true;
                    (0, _util.css)(textarea, {
                        color: me.toolbarColor
                    });
                });

                textarea.addEventListener('blur', function (e) {
                    isFocus = false;
                    if (textarea.innerHTML === '') {
                        (0, _util.remove)(textarea);
                        return;
                    }
                    var context = me.rectangleCanvas.getContext('2d');
                    context.font = 16 * me.scale + 'px \u5B8B\u4F53';
                    var textPerLine = textarea.innerHTML.split('<div>');
                    var newTextPerLine = [];
                    textPerLine.forEach(function (it, index) {
                        var val = it;
                        if (index > 0) {
                            val = it.replace('</div>', '');
                        }
                        var reg = /&nbsp;|\<br\>/g;
                        val = val.replace(reg, '  ');

                        var maxWidth = me.width - startX > 60 ? me.width - startX : 60;
                        var width = 0;
                        var str = '';

                        Array.prototype.forEach.call(val, function (obj, Index) {
                            width += context.measureText(obj).width;
                            if (width >= maxWidth) {
                                width = context.measureText(obj).width;
                                newTextPerLine.push(str);
                                str = obj;
                            } else {
                                str += obj;
                            }
                        });
                        newTextPerLine.push(str);
                    });

                    context.fillStyle = me.toolbarColor;
                    newTextPerLine.forEach(function (it, index) {

                        context.fillText(it, (startX - offsetX) * me.scale, (startY - offsetY + 15 + index * 18) * me.scale);
                    });

                    (0, _makeSnapShoot2.default)(me);
                    (0, _util.remove)(textarea);
                });

                setTimeout(function () {
                    textarea.focus();
                }, 0);
            };

            me.textClickEvent = textClickEvent;
        }

        me.kssTextLayer.removeEventListener('mousedown', me.textClickEvent);
        me.kssTextLayer.addEventListener('mousedown', me.textClickEvent);
    });

    return textBT;
}

/***/ }),

/***/ "./src/toolbar/toolbar.js":
/*!********************************!*\
  !*** ./src/toolbar/toolbar.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = createToolbar;

var _util = __webpack_require__(/*! ../util */ "./src/util.js");

var _completeBT = __webpack_require__(/*! ./tool/completeBT */ "./src/toolbar/tool/completeBT.js");

var _completeBT2 = _interopRequireDefault(_completeBT);

var _quitBT = __webpack_require__(/*! ./tool/quitBT */ "./src/toolbar/tool/quitBT.js");

var _quitBT2 = _interopRequireDefault(_quitBT);

var _arrowBT = __webpack_require__(/*! ./tool/arrowBT */ "./src/toolbar/tool/arrowBT.js");

var _arrowBT2 = _interopRequireDefault(_arrowBT);

var _backBT = __webpack_require__(/*! ./tool/backBT */ "./src/toolbar/tool/backBT.js");

var _backBT2 = _interopRequireDefault(_backBT);

var _drawLineBT = __webpack_require__(/*! ./tool/drawLineBT */ "./src/toolbar/tool/drawLineBT.js");

var _drawLineBT2 = _interopRequireDefault(_drawLineBT);

var _rectBT = __webpack_require__(/*! ./tool/rectBT */ "./src/toolbar/tool/rectBT.js");

var _rectBT2 = _interopRequireDefault(_rectBT);

var _ellipseBT = __webpack_require__(/*! ./tool/ellipseBT */ "./src/toolbar/tool/ellipseBT.js");

var _ellipseBT2 = _interopRequireDefault(_ellipseBT);

var _colorBT = __webpack_require__(/*! ./tool/colorBT */ "./src/toolbar/tool/colorBT.js");

var _colorBT2 = _interopRequireDefault(_colorBT);

var _textBT = __webpack_require__(/*! ./tool/textBT */ "./src/toolbar/tool/textBT.js");

var _textBT2 = _interopRequireDefault(_textBT);

var _toolbarMiddleArea = __webpack_require__(/*! ./toolbarMiddleArea */ "./src/toolbar/toolbarMiddleArea.js");

var _toolbarMiddleArea2 = _interopRequireDefault(_toolbarMiddleArea);

var _toolbarPosition = __webpack_require__(/*! ./toolbarPosition */ "./src/toolbar/toolbarPosition.js");

var _toolbarPosition2 = _interopRequireDefault(_toolbarPosition);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var toolConfig = [{
    component: _completeBT2.default,
    show: 'complete',
    width: 40
}, {
    component: _quitBT2.default,
    show: 'quit',
    width: 30
}, {
    component: _backBT2.default,
    show: 'back',
    width: 30
}, {
    component: _arrowBT2.default,
    show: 'arrow',
    width: 30
}, {
    component: _drawLineBT2.default,
    show: 'drawLine',
    width: 30
}, {
    component: _rectBT2.default,
    show: 'rect',
    width: 30
}, {
    component: _ellipseBT2.default,
    show: 'ellipse',
    width: 30
}, {
    component: _textBT2.default,
    show: 'text',
    width: 30
}, {
    component: _colorBT2.default,
    show: 'color',
    width: 30
}];

function createToolbar(me) {
    var toolbar = window.wonder_containerDocument.createElement('div');
    toolbar.id = 'kssToolbar';

    if ((0, _util.typeChecking)(me.toolShow) !== '[object Object]') {
        me.toolShow = {};
    }
    var toolbarWidth = 0;

    toolConfig.forEach(function (it) {
        if (me.toolShow[it.show] !== false) {
            toolbar.appendChild(it.component(me));
            toolbarWidth += it.width;
        }
    });

    toolbarWidth += 10;
    me.toolbarWidth = toolbarWidth;
    (0, _util.css)(toolbar, {
        top: me.height + me.toolbarMarginTop + 'px',
        width: toolbarWidth + 'px',
        height: me.toolbarHeight + 'px'
    });

    (0, _toolbarPosition2.default)(me, me.width, me.height, me.startY, me.startX, toolbar);

    // me.toolShow.complete !== false && toolbar.appendChild(completeBT(me))
    // me.toolShow.back !== false && toolbar.appendChild(backBT(me))
    // me.toolShow.arrow !== false && toolbar.appendChild(arrowBT(me))
    // me.toolShow.drawLine !== false && toolbar.appendChild(drawLineBT(me))
    // me.toolShow.rect !== false && toolbar.appendChild(rectBT(me))
    // me.toolShow.ellipse !== false && toolbar.appendChild(ellipseBT(me))
    // me.toolShow.text !== false && toolbar.appendChild(textBT(me))
    // me.toolShow.color !== false && toolbar.appendChild(colorBT(me))

    toolbar.appendChild((0, _toolbarMiddleArea2.default)(me));

    me.kssScreenShotWrapper.appendChild(toolbar);

    return toolbar;
}

/***/ }),

/***/ "./src/toolbar/toolbarMiddleArea.js":
/*!******************************************!*\
  !*** ./src/toolbar/toolbarMiddleArea.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = toolbarMiddleArea;

var _util = __webpack_require__(/*! ../util */ "./src/util.js");

var _colorBoard = __webpack_require__(/*! ./colorBoard */ "./src/toolbar/colorBoard.js");

var _colorBoard2 = _interopRequireDefault(_colorBoard);

var _setLineWidth = __webpack_require__(/*! ./setLineWidth */ "./src/toolbar/setLineWidth.js");

var _setLineWidth2 = _interopRequireDefault(_setLineWidth);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function toolbarMiddleArea(me) {
    var clientHeight = window.wonder_containerDocument.documentElement.clientHeight;
    var toolbarMiddleArea = window.wonder_containerDocument.createElement('span');
    toolbarMiddleArea.id = 'kssToolbarMiddleArea';

    toolbarMiddleArea.appendChild((0, _colorBoard2.default)(me));
    toolbarMiddleArea.appendChild((0, _setLineWidth2.default)(me));

    return toolbarMiddleArea;
}

/***/ }),

/***/ "./src/toolbar/toolbarPosition.js":
/*!****************************************!*\
  !*** ./src/toolbar/toolbarPosition.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = toolbarPosition;

var _util = __webpack_require__(/*! ../util */ "./src/util.js");

function toolbarPosition(me, width, height, top, left, toolbar) {
    var clientHeight = window.wonder_containerDocument.documentElement.clientHeight;
    var exceed = me.toolbarWidth - width - left;

    if (exceed > 0) {
        (0, _util.css)(toolbar, {
            right: '-' + exceed + 'px'
        });
    } else {
        (0, _util.css)(toolbar, {
            right: 0 + 'px'
        });
    }

    var bottomSurplus = clientHeight - top - height - me.toolbarMarginTop - me.toolbarHeight;

    if (bottomSurplus < 0) {
        if (top >= 35) {
            (0, _util.css)(toolbar, {
                top: '-' + (me.toolbarHeight + me.toolbarMarginTop) + 'px'
            });
        } else {
            (0, _util.css)(toolbar, {
                top: me.toolbarMarginTop + 'px'
            });
        }
    } else {
        (0, _util.css)(toolbar, {
            top: height + me.toolbarMarginTop + 'px'
        });
    }
}

/***/ }),

/***/ "./src/util.js":
/*!*********************!*\
  !*** ./src/util.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.css = css;
exports.remove = remove;
exports.domType = domType;
exports.hasClass = hasClass;
exports.addClass = addClass;
exports.removeClass = removeClass;
exports.computed = computed;
exports.typeChecking = typeChecking;
exports.loadCssCode = loadCssCode;
function css(dom, obj) {
    for (var i in obj) {
        dom.style[i] = obj[i];
    }
}

function remove(dom) {
    // if (dom instanceof HTMLElement) {
    //     dom.parentNode.removeChild(dom)
    // } else if (dom instanceof HTMLCollection) {
    //     Array.prototype.forEach.call(dom, function (obj) {
    //         obj.parentNode.removeChild(obj)
    //     })
    // }

    if (!!!dom) {
        return;
    }

    if (!!dom.parentNode.removeChild) {
        dom.parentNode.removeChild(dom);
    } else {
        Array.prototype.forEach.call(dom, function (obj) {
            obj.parentNode.removeChild(obj);
        });
    }
}

function domType(dom) {
    return Object.prototype.toString.call(dom);
}

function hasClass(obj, cls) {
    return obj.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'));
}

function addClass(obj, cls) {
    if (!hasClass(obj, cls)) {
        obj.className += " " + cls;
    }
}

function removeClass(obj, cls) {
    if (hasClass(obj, cls)) {
        var reg = new RegExp('(\\s|^)' + cls + '(\\s|$)');
        obj.className = obj.className.replace(reg, ' ');
    }
}

function computed(obj, baseProperty, changeProperty, cb) {
    Object.defineProperty(obj, baseProperty, {
        set: function set(val) {
            changeProperty.forEach(function (it, index) {
                cb[index](obj, val, changeProperty[index]);
            });
        }
    });
}

function typeChecking(val) {
    return Object.prototype.toString.call(val);
}

function loadCssCode(code) {
    var style = window.wonder_containerDocument.createElement('style');
    style.type = 'text/css';
    style.rel = 'stylesheet';
    try {
        //for Chrome Firefox Opera Safari
        style.appendChild(window.wonder_containerDocument.createTextNode(code));
    } catch (ex) {
        //for IE
        style.styleSheet.cssText = code;
    }
    var head = window.wonder_containerDocument.getElementsByTagName('head')[0];
    head.appendChild(style);
}

/***/ }),

/***/ 0:
/*!**************************!*\
  !*** multi ./src/kss.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/y/Github/wonder-kscreenshot/src/kss.js */"./src/kss.js");


/***/ })

/******/ })["default"];
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9rc2NyZWVuc2hvdC93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8va3NjcmVlbnNob3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8va3NjcmVlbnNob3QvLi9zcmMva3NzLnNjc3MiLCJ3ZWJwYWNrOi8va3NjcmVlbnNob3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanMiLCJ3ZWJwYWNrOi8va3NjcmVlbnNob3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvdXJsL2VzY2FwZS5qcyIsIndlYnBhY2s6Ly9rc2NyZWVuc2hvdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qcyIsIndlYnBhY2s6Ly9rc2NyZWVuc2hvdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL3VybHMuanMiLCJ3ZWJwYWNrOi8va3NjcmVlbnNob3QvLi9ub2RlX21vZHVsZXMvdXJpLWpzL2Rpc3QvZXM1L3VyaS5hbGwuanMiLCJ3ZWJwYWNrOi8va3NjcmVlbnNob3QvLi9zcmMvYXNzZXRzL2ltZ3MvYXJyb3cucG5nIiwid2VicGFjazovL2tzY3JlZW5zaG90Ly4vc3JjL2Fzc2V0cy9pbWdzL2JhY2sucG5nIiwid2VicGFjazovL2tzY3JlZW5zaG90Ly4vc3JjL2Fzc2V0cy9pbWdzL2NhbmNlbC5wbmciLCJ3ZWJwYWNrOi8va3NjcmVlbnNob3QvLi9zcmMvYXNzZXRzL2ltZ3MvY29sb3IucG5nIiwid2VicGFjazovL2tzY3JlZW5zaG90Ly4vc3JjL2Fzc2V0cy9pbWdzL2N1cnNvci5pY28iLCJ3ZWJwYWNrOi8va3NjcmVlbnNob3QvLi9zcmMvYXNzZXRzL2ltZ3MvZHJhdy5wbmciLCJ3ZWJwYWNrOi8va3NjcmVlbnNob3QvLi9zcmMvYXNzZXRzL2ltZ3MvZWxsaXBzZS5wbmciLCJ3ZWJwYWNrOi8va3NjcmVlbnNob3QvLi9zcmMvYXNzZXRzL2ltZ3MvcmVjdC5wbmciLCJ3ZWJwYWNrOi8va3NjcmVlbnNob3QvLi9zcmMvYXNzZXRzL2ltZ3MvdGV4dC5wbmciLCJ3ZWJwYWNrOi8va3NjcmVlbnNob3QvLi9zcmMvYmFja1JpZ2h0Q2xpZW50LmpzIiwid2VicGFjazovL2tzY3JlZW5zaG90Ly4vc3JjL2NyZWF0ZURyYWdEb20uanMiLCJ3ZWJwYWNrOi8va3NjcmVlbnNob3QvLi9zcmMvZG9tLXRvLWltYWdlLmpzIiwid2VicGFjazovL2tzY3JlZW5zaG90Ly4vc3JjL2tzcy5qcyIsIndlYnBhY2s6Ly9rc2NyZWVuc2hvdC8uL3NyYy9rc3Muc2Nzcz80MDIwIiwid2VicGFjazovL2tzY3JlZW5zaG90Ly4vc3JjL3Rvb2xiYXIvYWN0aXZlVG9vbGJhckl0ZW0uanMiLCJ3ZWJwYWNrOi8va3NjcmVlbnNob3QvLi9zcmMvdG9vbGJhci9hcnJvdy5qcyIsIndlYnBhY2s6Ly9rc2NyZWVuc2hvdC8uL3NyYy90b29sYmFyL2JhY2tUb1ByZUltZy5qcyIsIndlYnBhY2s6Ly9rc2NyZWVuc2hvdC8uL3NyYy90b29sYmFyL2NvbG9yQm9hcmQuanMiLCJ3ZWJwYWNrOi8va3NjcmVlbnNob3QvLi9zcmMvdG9vbGJhci9jb3B5LmpzIiwid2VicGFjazovL2tzY3JlZW5zaG90Ly4vc3JjL3Rvb2xiYXIvZG93bmxvYWQuanMiLCJ3ZWJwYWNrOi8va3NjcmVlbnNob3QvLi9zcmMvdG9vbGJhci9lbmRBbmRDbGVhci5qcyIsIndlYnBhY2s6Ly9rc2NyZWVuc2hvdC8uL3NyYy90b29sYmFyL2xheWVyU29ydC5qcyIsIndlYnBhY2s6Ly9rc2NyZWVuc2hvdC8uL3NyYy90b29sYmFyL21ha2VTbmFwU2hvb3QuanMiLCJ3ZWJwYWNrOi8va3NjcmVlbnNob3QvLi9zcmMvdG9vbGJhci9taWRkbGVJbWFnZS9jbGVhck1pZGRsZUltYWdlLmpzIiwid2VicGFjazovL2tzY3JlZW5zaG90Ly4vc3JjL3Rvb2xiYXIvbWlkZGxlSW1hZ2UvZHJhd01pZGRsZUltYWdlLmpzIiwid2VicGFjazovL2tzY3JlZW5zaG90Ly4vc3JjL3Rvb2xiYXIvc2V0TGluZVdpZHRoLmpzIiwid2VicGFjazovL2tzY3JlZW5zaG90Ly4vc3JjL3Rvb2xiYXIvdG9vbC9hcnJvd0JULmpzIiwid2VicGFjazovL2tzY3JlZW5zaG90Ly4vc3JjL3Rvb2xiYXIvdG9vbC9iYWNrQlQuanMiLCJ3ZWJwYWNrOi8va3NjcmVlbnNob3QvLi9zcmMvdG9vbGJhci90b29sL2NvbG9yQlQuanMiLCJ3ZWJwYWNrOi8va3NjcmVlbnNob3QvLi9zcmMvdG9vbGJhci90b29sL2NvbXBsZXRlQlQuanMiLCJ3ZWJwYWNrOi8va3NjcmVlbnNob3QvLi9zcmMvdG9vbGJhci90b29sL2RyYXdMaW5lQlQuanMiLCJ3ZWJwYWNrOi8va3NjcmVlbnNob3QvLi9zcmMvdG9vbGJhci90b29sL2VsbGlwc2VCVC5qcyIsIndlYnBhY2s6Ly9rc2NyZWVuc2hvdC8uL3NyYy90b29sYmFyL3Rvb2wvcXVpdEJULmpzIiwid2VicGFjazovL2tzY3JlZW5zaG90Ly4vc3JjL3Rvb2xiYXIvdG9vbC9yZWN0QlQuanMiLCJ3ZWJwYWNrOi8va3NjcmVlbnNob3QvLi9zcmMvdG9vbGJhci90b29sL3RleHRCVC5qcyIsIndlYnBhY2s6Ly9rc2NyZWVuc2hvdC8uL3NyYy90b29sYmFyL3Rvb2xiYXIuanMiLCJ3ZWJwYWNrOi8va3NjcmVlbnNob3QvLi9zcmMvdG9vbGJhci90b29sYmFyTWlkZGxlQXJlYS5qcyIsIndlYnBhY2s6Ly9rc2NyZWVuc2hvdC8uL3NyYy90b29sYmFyL3Rvb2xiYXJQb3NpdGlvbi5qcyIsIndlYnBhY2s6Ly9rc2NyZWVuc2hvdC8uL3NyYy91dGlsLmpzIl0sIm5hbWVzIjpbImJhY2tSaWdodENsaWVudCIsImUiLCJjbGllbnRIZWlnaHQiLCJ3aW5kb3ciLCJ3b25kZXJfY29udGFpbmVyRG9jdW1lbnQiLCJkb2N1bWVudEVsZW1lbnQiLCJjbGllbnRXaWR0aCIsImNsaWVudFgiLCJjbGllbnRZIiwiY3JlYXRlRHJhZ0RvbSIsImRvbSIsImRvdFNpemUiLCJsaW5lU2l6ZSIsIm1lIiwibGluZUxpc3QiLCJuYW1lIiwic3R5bGUiLCJ0b3AiLCJsZWZ0Iiwid2lkdGgiLCJoZWlnaHQiLCJib3R0b20iLCJyaWdodCIsImZvckVhY2giLCJpdCIsImFwcGVuZENoaWxkIiwiY3JlYXRlTGluZSIsImRvdExpc3QiLCJjcmVhdGVEb3QiLCJpZCIsImJpbmRDb3JuZXJFdmVudCIsImJpbmRTdXJyb3VuZEV2ZW50IiwidHlwZSIsInNpemUiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwiY3Vyc29yIiwiZ2V0RWxlbWVudEJ5SWQiLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnQiLCJpc0VkaXQiLCJtb3VzZW1vdmVFdmVudCIsImN1cnJlbnRMZWZ0IiwiYXBwcm94aW1hdGUiLCJzdGFydFgiLCJjdXJyZW50VG9wIiwic3RhcnRZIiwiY2xpZW50IiwiTWF0aCIsImFicyIsIm1pbiIsInRvb2xiYXIiLCJtb3VzZXVwRXZlbnQiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiY3VycmVudFN0YXJ0WCIsImN1cnJlbnRTdGFydFkiLCJzdGFydCIsInRoaWNrbmVzcyIsImN1cnJlbnQiLCJnbG9iYWwiLCJ1dGlsIiwibmV3VXRpbCIsImlubGluZXIiLCJuZXdJbmxpbmVyIiwiZm9udEZhY2VzIiwibmV3Rm9udEZhY2VzIiwiaW1hZ2VzIiwibmV3SW1hZ2VzIiwiZGVmYXVsdE9wdGlvbnMiLCJpbWFnZVBsYWNlaG9sZGVyIiwidW5kZWZpbmVkIiwiY2FjaGVCdXN0IiwiZG9tdG9pbWFnZSIsInRvQ2FudmFzIiwibm9kZSIsIm9wdGlvbnMiLCJkcmF3IiwidG9TdmciLCJ0b1BuZyIsInRvSnBlZyIsInRvQmxvYiIsInRvUGl4ZWxEYXRhIiwiaW1wbCIsIm1vZHVsZSIsImV4cG9ydHMiLCJjb3B5T3B0aW9ucyIsIlByb21pc2UiLCJyZXNvbHZlIiwidGhlbiIsImNsb25lTm9kZSIsImZpbHRlciIsImVtYmVkRm9udHMiLCJpbmxpbmVJbWFnZXMiLCJhcHBseU9wdGlvbnMiLCJjbG9uZSIsIm1ha2VTdmdEYXRhVXJpIiwiYmdjb2xvciIsImJhY2tncm91bmRDb2xvciIsIk9iamVjdCIsImtleXMiLCJwcm9wZXJ0eSIsImNhbnZhcyIsImdldENvbnRleHQiLCJnZXRJbWFnZURhdGEiLCJkYXRhIiwidG9EYXRhVVJMIiwicXVhbGl0eSIsImNhbnZhc1RvQmxvYiIsImRvbU5vZGUiLCJtYWtlSW1hZ2UiLCJkZWxheSIsImltYWdlIiwibmV3Q2FudmFzIiwiZHJhd0ltYWdlIiwiY3R4IiwiZmlsbFN0eWxlIiwiZmlsbFJlY3QiLCJyb290IiwibWFrZU5vZGVDb3B5IiwiY2xvbmVDaGlsZHJlbiIsInByb2Nlc3NDbG9uZSIsIkhUTUxDYW52YXNFbGVtZW50Iiwib3JpZ2luYWwiLCJjaGlsZHJlbiIsImNoaWxkTm9kZXMiLCJsZW5ndGgiLCJjbG9uZUNoaWxkcmVuSW5PcmRlciIsImFzQXJyYXkiLCJwYXJlbnQiLCJkb25lIiwiY2hpbGQiLCJjaGlsZENsb25lIiwiRWxlbWVudCIsImNsb25lU3R5bGUiLCJjbG9uZVBzZXVkb0VsZW1lbnRzIiwiY29weVVzZXJJbnB1dCIsImZpeFN2ZyIsImNvcHlTdHlsZSIsImdldENvbXB1dGVkU3R5bGUiLCJzb3VyY2UiLCJ0YXJnZXQiLCJjc3NUZXh0IiwiY29weVByb3BlcnRpZXMiLCJzZXRQcm9wZXJ0eSIsImdldFByb3BlcnR5VmFsdWUiLCJnZXRQcm9wZXJ0eVByaW9yaXR5IiwiZWxlbWVudCIsImNsb25lUHNldWRvRWxlbWVudCIsImNvbnRlbnQiLCJ1aWQiLCJzdHlsZUVsZW1lbnQiLCJmb3JtYXRQc2V1ZG9FbGVtZW50U3R5bGUiLCJzZWxlY3RvciIsImZvcm1hdENzc1RleHQiLCJmb3JtYXRDc3NQcm9wZXJ0aWVzIiwiY3JlYXRlVGV4dE5vZGUiLCJtYXAiLCJmb3JtYXRQcm9wZXJ0eSIsImpvaW4iLCJIVE1MVGV4dEFyZWFFbGVtZW50IiwiaW5uZXJIVE1MIiwidmFsdWUiLCJIVE1MSW5wdXRFbGVtZW50Iiwic2V0QXR0cmlidXRlIiwiU1ZHRWxlbWVudCIsIlNWR1JlY3RFbGVtZW50IiwiYXR0cmlidXRlIiwiZ2V0QXR0cmlidXRlIiwicmVzb2x2ZUFsbCIsInN0eWxlTm9kZSIsImlubGluZUFsbCIsIlhNTFNlcmlhbGl6ZXIiLCJzZXJpYWxpemVUb1N0cmluZyIsImVzY2FwZVhodG1sIiwieGh0bWwiLCJmb3JlaWduT2JqZWN0Iiwic3ZnIiwiZXNjYXBlIiwicGFyc2VFeHRlbnNpb24iLCJtaW1lVHlwZSIsImRhdGFBc1VybCIsImlzRGF0YVVybCIsInJlc29sdmVVcmwiLCJnZXRBbmRFbmNvZGUiLCJtaW1lcyIsIldPRkYiLCJKUEVHIiwidXJsIiwibWF0Y2giLCJleGVjIiwiZXh0ZW5zaW9uIiwidG9Mb3dlckNhc2UiLCJzZWFyY2giLCJiaW5hcnlTdHJpbmciLCJhdG9iIiwic3BsaXQiLCJiaW5hcnlBcnJheSIsIlVpbnQ4QXJyYXkiLCJpIiwiY2hhckNvZGVBdCIsIkJsb2IiLCJiYXNlVXJsIiwiZG9jIiwiaW1wbGVtZW50YXRpb24iLCJjcmVhdGVIVE1MRG9jdW1lbnQiLCJiYXNlIiwiaGVhZCIsImEiLCJib2R5IiwiaHJlZiIsImluZGV4IiwiZm91clJhbmRvbUNoYXJzIiwicmFuZG9tIiwicG93IiwidG9TdHJpbmciLCJzbGljZSIsInVyaSIsInJlamVjdCIsIkltYWdlIiwib25sb2FkIiwib25lcnJvciIsInNyYyIsIlRJTUVPVVQiLCJ0ZXN0IiwiRGF0ZSIsImdldFRpbWUiLCJyZXF1ZXN0IiwiWE1MSHR0cFJlcXVlc3QiLCJvbnJlYWR5c3RhdGVjaGFuZ2UiLCJvbnRpbWVvdXQiLCJ0aW1lb3V0IiwicmVzcG9uc2VUeXBlIiwib3BlbiIsInNlbmQiLCJwbGFjZWhvbGRlciIsInJlYWR5U3RhdGUiLCJzdGF0dXMiLCJmYWlsIiwiZW5jb2RlciIsIkZpbGVSZWFkZXIiLCJvbmxvYWRlbmQiLCJyZXN1bHQiLCJyZWFkQXNEYXRhVVJMIiwicmVzcG9uc2UiLCJtZXNzYWdlIiwiY29uc29sZSIsImVycm9yIiwic3RyaW5nIiwicmVwbGFjZSIsIm1zIiwiYXJnIiwic2V0VGltZW91dCIsImFycmF5TGlrZSIsImFycmF5IiwicHVzaCIsImxlZnRCb3JkZXIiLCJweCIsInJpZ2h0Qm9yZGVyIiwic2Nyb2xsV2lkdGgiLCJ0b3BCb3JkZXIiLCJib3R0b21Cb3JkZXIiLCJzY3JvbGxIZWlnaHQiLCJzdHlsZVByb3BlcnR5IiwicGFyc2VGbG9hdCIsIlVSTF9SRUdFWCIsInNob3VsZFByb2Nlc3MiLCJyZWFkVXJscyIsImlubGluZSIsImdldCIsImRhdGFVcmwiLCJ1cmxBc1JlZ2V4IiwiUmVnRXhwIiwibm90aGluZ1RvSW5saW5lIiwidXJscyIsInJlYWRBbGwiLCJkb2N1bWVudCIsIndlYkZvbnRzIiwiYWxsIiwid2ViRm9udCIsImNzc1N0cmluZ3MiLCJzdHlsZVNoZWV0cyIsImdldENzc1J1bGVzIiwic2VsZWN0V2ViRm9udFJ1bGVzIiwicnVsZXMiLCJuZXdXZWJGb250IiwiY3NzUnVsZXMiLCJydWxlIiwiQ1NTUnVsZSIsIkZPTlRfRkFDRV9SVUxFIiwic2hlZXQiLCJiaW5kIiwibG9nIiwid2ViRm9udFJ1bGUiLCJwYXJlbnRTdHlsZVNoZWV0IiwibmV3SW1hZ2UiLCJpbmxpbmVCYWNrZ3JvdW5kIiwiSFRNTEltYWdlRWxlbWVudCIsImJhY2tncm91bmQiLCJpbmxpbmVkIiwiaW5pdExpbmVXaWR0aCIsImluaXRMaW5lIiwiaXNOYU4iLCJrc3MiLCJpbnN0YW5jZSIsImtzc1NjcmVlblNob3RXcmFwcGVyIiwia3NzVGV4dExheWVyIiwicmVjdGFuZ2xlQ2FudmFzIiwic2NhbGUiLCJkZXZpY2VQaXhlbFJhdGlvIiwiY3VycmVudEltZ0RvbSIsImlzU2NyZWVuc2hvdCIsInNuYXBzaG9vdExpc3QiLCJkcmF3aW5nU3RhdHVzIiwiY3VycmVudFRvb2xUeXBlIiwiaW1nQmFzZTY0IiwidG9vbFNob3ciLCJ0b29sYmFyV2lkdGgiLCJ0b29sYmFySGVpZ2h0IiwidG9vbGJhck1hcmdpblRvcCIsInRvb2xiYXJDb2xvciIsInRvb2xiYXJMaW5lV2lkdGgiLCJkcmF3TGluZSIsInRvb2xtb3VzZWRvd24iLCJ0b29sbW91c2Vtb3ZlIiwidG9vbG1vdXNldXAiLCJjb3B5UGF0aCIsIm5lZWREb3dubG9hZCIsImVuZENCIiwiY2FuY2VsQ0IiLCJzdGFydERyYXdEb3duIiwidGhhdCIsIl9jb250YWluZXJEb2N1bWVudCIsImNhbmNlbERyYXdpbmdTdGF0dXMiLCJwcmV2ZW50Q29udGV4dE1lbnUiLCJidXR0b24iLCJfY29udGFpbmVyIiwiZHJhd2luZyIsImVuZERyYXciLCJfZG9jdW1lbnQiLCJjYW52YXNNb3ZlRXZlbnQiLCJjYW52YXNVcEV2ZW50IiwiaW1nIiwicHJldmVudERlZmF1bHQiLCJzdGFydFNjcmVlblNob3QiLCJlbmRTY3JlZW5TaG90Iiwic2V0Tm9kZSIsIl9ub2RlIiwic2V0RG9jdW1lbnQiLCJzZXRDb250YWluZXIiLCJjb250YWluZXIiLCJzZXRDb250YWluZXJEb2N1bWVudCIsImNvbnRhaW5lckRvY3VtZW50Iiwic2V0Q2FudmFzSGFuZGxlciIsImNhbnZhc0hhbmRsZXJGdW5jIiwiX2NhbnZhc0hhbmRsZXJGdW5jIiwicHJvdG90eXBlIiwiaW5pdCIsImtleSIsImltbWVkaWF0ZWx5IiwiZW5kIiwiaXNSaWdodEtleSIsImtleUNvZGUiLCJzaGlmdEtleSIsInNjcm9sbFRvcCIsImFjdGl2ZVRvb2xiYXJJdGVtIiwib2JqIiwia3NzVG9vbGJhckl0ZW1CVCIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJBcnJheSIsImNhbGwiLCJhcnJvdyIsInN0YXJ0UG9zIiwiZW5kUG9zIiwidHJpYW5nbGUiLCJ4IiwieSIsImVuZFgiLCJlbmRZIiwiTWF4VHdvU2l6ZSIsImJhc2VWYWx1ZSIsImNoYW5nZVByb3BlcnR5IiwiZGlzdGFuY2UiLCJzcXJ0IiwiaCIsInR3b1NpZGUiLCJib3R0b21TaWRlIiwiY3Jvc3NXaWR0aCIsImFuZ2xlIiwiYXRhbiIsIlBJIiwiYW5nbGUxIiwicmlnaHRYIiwicmlnaHRZIiwiaFgiLCJoWSIsImNYIiwiY1kiLCJiWCIsImJZIiwiYW5nbGUyIiwieTEiLCJjb3MiLCJ4MSIsInNpbiIsInN5bWJvbCIsInkyIiwieDIiLCJ5MyIsIngzIiwielgiLCJ6WSIsImNvbnRleHQiLCJiZWdpblBhdGgiLCJsaW5lV2lkdGgiLCJtb3ZlVG8iLCJsaW5lVG8iLCJmaWxsIiwiY2xvc2VQYXRoIiwiYmFja1RvUHJlSW1nIiwiY29sb3JCb2FyZCIsImNvbG9yTGlzdCIsInRpdGxlIiwidGFiSW5kZXgiLCJjdXJyZW50Q29sb3IiLCJjb2xvckl0ZW1XcmFwcGVyIiwiZGF0YXNldCIsImNvbG9yIiwiY3VycmVudFRhcmdldCIsImRpc3BsYXkiLCJjb3B5IiwiaW1nV3JhcHBlciIsIm9wYWNpdHkiLCJhYnNvbHV0ZVBhdGgiLCJzZWxlY3Rpb24iLCJnZXRTZWxlY3Rpb24iLCJyYW5nZSIsImNyZWF0ZVJhbmdlIiwic2VsZWN0Tm9kZUNvbnRlbnRzIiwicmVtb3ZlQWxsUmFuZ2VzIiwiYWRkUmFuZ2UiLCJleGVjQ29tbWFuZCIsImRvd25sb2FkIiwiaW1nVXJsIiwiY3JlYXRlRXZlbnQiLCJpbml0RXZlbnQiLCJkaXNwYXRjaEV2ZW50IiwibmV3SW1nVXJsIiwibG9jYXRpb24iLCJlbmRBbmRDbGVhciIsImxheWVyU29ydCIsImxheWVyIiwibWFrZVNuYXBTaG9vdCIsImRhdGFVUkwiLCJjbGVhck1pZGRsZUltYWdlIiwiY2xlYXJSZWN0IiwiZHJhd01pZGRsZUltYWdlIiwic2V0TGluZVdpZHRoIiwibnVtSW5wdXRXcmFwcGVyIiwibnVtSW5wdXQiLCJ2YWwiLCJwYXJzZUludCIsInNob3dMaW5lV2lkdGgiLCJhcnJvd051bVdyYXBwZXIiLCJ1cE51bSIsImRvd25OdW0iLCJzaG93TGluZVdpZHRoV3JhcHBlciIsImFjdGl2ZUVsZW1lbnQiLCJhcnJvd0JUIiwiYXJyb3dJbWciLCJhcnJvd01vdXNlZG93bkV2ZW50IiwiYXJyb3dNb3VzZW1vdmVFdmVudCIsImFycm93TW91c2V1cEV2ZW50IiwiYmFja0JUIiwiYmFja0ltZyIsImJhY2tUb0luaXQiLCJwb3AiLCJjb2xvckJUIiwiY29sb3JJbWciLCJib3R0b21TdXJwbHVzIiwiZm9jdXMiLCJjb21wbGV0ZUJUIiwibGFzdFNob3QiLCJkcmF3TGluZUJUIiwiZHJhd0xpbmVJbWciLCJrc3NTZXRMaW5lV2lkdGgiLCJkcmF3TGluZU1vdXNlZG93bkV2ZW50Iiwic3Ryb2tlU3R5bGUiLCJkcmF3TGluZU1vdXNlbW92ZUV2ZW50IiwiZHJhd0xpbmVNb3VzZXVwRXZlbnQiLCJzdHJva2UiLCJlbGxpcHNlQlQiLCJlbGxpcHNlSW1nIiwiZWxsaXBzZU1vdXNlZG93bkV2ZW50IiwiZWxsaXBzZU1vdXNlbW92ZUV2ZW50IiwiZWxsaXBzZU1vdXNldXBFdmVudCIsImNlbnRlclgiLCJjZW50ZXJZIiwicmFkaXVzWCIsInJhZGl1c1kiLCJrIiwib3giLCJveSIsImJlemllckN1cnZlVG8iLCJxdWl0QlQiLCJxdWl0SW1nIiwicmVjdEJUIiwicmVjdEltZyIsInJlY3RNb3VzZWRvd25FdmVudCIsInJlY3RNb3VzZW1vdmVFdmVudCIsInJlY3RNb3VzZXVwRXZlbnQiLCJtYXgiLCJ0ZXh0QlQiLCJ0ZXh0SW1nIiwiaXNGb2N1cyIsImlzSW5uZXIiLCJ0ZXh0Q2xpY2tFdmVudCIsIm1pbldpZHRoIiwibWluSGVpZ2h0IiwidGV4dGFyZWEiLCJjb250ZW50RWRpdGFibGUiLCJvZmZzZXRYIiwib2Zmc2V0WSIsInBvc2l0aW9uIiwiZm9udCIsInRleHRQZXJMaW5lIiwibmV3VGV4dFBlckxpbmUiLCJyZWciLCJtYXhXaWR0aCIsInN0ciIsIkluZGV4IiwibWVhc3VyZVRleHQiLCJmaWxsVGV4dCIsImNyZWF0ZVRvb2xiYXIiLCJ0b29sQ29uZmlnIiwiY29tcG9uZW50Iiwic2hvdyIsInRvb2xiYXJNaWRkbGVBcmVhIiwidG9vbGJhclBvc2l0aW9uIiwiZXhjZWVkIiwiY3NzIiwicmVtb3ZlIiwiZG9tVHlwZSIsImhhc0NsYXNzIiwiYWRkQ2xhc3MiLCJyZW1vdmVDbGFzcyIsImNvbXB1dGVkIiwidHlwZUNoZWNraW5nIiwibG9hZENzc0NvZGUiLCJwYXJlbnROb2RlIiwicmVtb3ZlQ2hpbGQiLCJjbHMiLCJiYXNlUHJvcGVydHkiLCJjYiIsImRlZmluZVByb3BlcnR5Iiwic2V0IiwiY29kZSIsInJlbCIsImV4Iiwic3R5bGVTaGVldCIsImdldEVsZW1lbnRzQnlUYWdOYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztRQ1ZBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7O0FDbEZBLGFBQWEsbUJBQU8sQ0FBQyxpR0FBOEM7QUFDbkUsMkJBQTJCLG1CQUFPLENBQUMsNkZBQTRDO0FBQy9FOzs7QUFHQTtBQUNBLGNBQWMsUUFBUyxzQkFBc0IsWUFBWSwyQkFBMkIsbUJBQU8sQ0FBQyw4REFBMEIsY0FBYyxzQkFBc0IsRUFBRSxtQkFBbUIsc0JBQXNCLGFBQWEsY0FB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QUNGO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdURBQXVEO0FBQ3ZEOztBQUVBLDZCQUE2QixtQkFBbUI7O0FBRWhEOztBQUVBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUMxWEE7QUFDQTtBQUNB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QUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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QWEsVUFBYjtBQUNBaEIsVUFBTTRoQixHQUFOLEdBQVksWUFBWjtBQUNBLFFBQUk7QUFDQTtBQUNBNWhCLGNBQU1TLFdBQU4sQ0FBa0J0QixPQUFPQyx3QkFBUCxDQUFnQ3VKLGNBQWhDLENBQStDZ1osSUFBL0MsQ0FBbEI7QUFDSCxLQUhELENBR0UsT0FBT0UsRUFBUCxFQUFXO0FBQ1Q7QUFDQTdoQixjQUFNOGhCLFVBQU4sQ0FBaUJqYSxPQUFqQixHQUEyQjhaLElBQTNCO0FBQ0g7QUFDRCxRQUFJN1YsT0FBTzNNLE9BQU9DLHdCQUFQLENBQWdDMmlCLG9CQUFoQyxDQUFxRCxNQUFyRCxFQUE2RCxDQUE3RCxDQUFYO0FBQ0FqVyxTQUFLckwsV0FBTCxDQUFpQlQsS0FBakI7QUFDSCxDIiwiZmlsZSI6Imtzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcImtzY3JlZW5zaG90XCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcImtzY3JlZW5zaG90XCJdID0gZmFjdG9yeSgpO1xufSkod2luZG93LCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi4vXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsInZhciBlc2NhcGUgPSByZXF1aXJlKFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL3VybC9lc2NhcGUuanNcIik7XG5leHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKGZhbHNlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIkBjaGFyc2V0IFxcXCJVVEYtOFxcXCI7XFxuLmtzc0JvZHkge1xcbiAgY3Vyc29yOiB1cmwoXCIgKyBlc2NhcGUocmVxdWlyZShcIi4vYXNzZXRzL2ltZ3MvY3Vyc29yLmljb1wiKSkgKyBcIiksIGF1dG87XFxuICB1c2VyLXNlbGVjdDogbm9uZTsgfVxcbiAgLmtzc0JvZHkgI2tzcyB7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICB6LWluZGV4OiAxMDAwMDsgfVxcbiAgLmtzc0JvZHkgI2tzc1NjcmVlblNob3RXcmFwcGVyIHtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gICAgYm94LXNoYWRvdzogMCAwIDAgOTk5OXB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcXG4gICAgei1pbmRleDogMTAwMDE7IH1cXG4gICAgLmtzc0JvZHkgI2tzc1NjcmVlblNob3RXcmFwcGVyICNrc3NUZXh0TGF5ZXIge1xcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICB0b3A6IDA7XFxuICAgICAgbGVmdDogMDtcXG4gICAgICB3aWR0aDogMTAwJTtcXG4gICAgICBoZWlnaHQ6IDEwMCU7XFxuICAgICAgei1pbmRleDogOTg7XFxuICAgICAgY3Vyc29yOiBjcm9zc2hhaXI7IH1cXG4gICAgICAua3NzQm9keSAja3NzU2NyZWVuU2hvdFdyYXBwZXIgI2tzc1RleHRMYXllciAua3NzVGV4dGFyZWEge1xcbiAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICAgICAgICByZXNpemU6IG5vbmU7XFxuICAgICAgICBtaW4td2lkdGg6IDYwcHg7XFxuICAgICAgICBtaW4taGVpZ2h0OiAzNnB4O1xcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICAgICAgZm9udC1mYW1pbHk6IOWui+S9kzsgfVxcbiAgICAgICAgLmtzc0JvZHkgI2tzc1NjcmVlblNob3RXcmFwcGVyICNrc3NUZXh0TGF5ZXIgLmtzc1RleHRhcmVhOmhvdmVyIHtcXG4gICAgICAgICAgY3Vyc29yOiB0ZXh0O1xcbiAgICAgICAgICBvdXRsaW5lOiAjNDg4ZmY5IHNvbGlkIDFweDsgfVxcbiAgICAua3NzQm9keSAja3NzU2NyZWVuU2hvdFdyYXBwZXIgI2tzc1JlY3RhbmdsZUNhbnZhcyB7XFxuICAgICAgaGVpZ2h0OiAxMDAlO1xcbiAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgIHRvcDogMDtcXG4gICAgICBsZWZ0OiAwO1xcbiAgICAgIGN1cnNvcjogbW92ZTtcXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgei1pbmRleDogOTk7IH1cXG4gICAgLmtzc0JvZHkgI2tzc1NjcmVlblNob3RXcmFwcGVyIC5rc3NEb3QsIC5rc3NCb2R5ICNrc3NTY3JlZW5TaG90V3JhcHBlciAua3NzTGluZSB7XFxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgIGJhY2tncm91bmQ6ICM0ODhmZjk7XFxuICAgICAgei1pbmRleDogMTAwOyB9XFxuICAgIC5rc3NCb2R5ICNrc3NTY3JlZW5TaG90V3JhcHBlciAja3NzQ3VycmVudEltZ0RvbSB7XFxuICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgaGVpZ2h0OiAxMDAlO1xcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICB0b3A6IDA7XFxuICAgICAgbGVmdDogMDtcXG4gICAgICBkaXNwbGF5OiBub25lOyB9XFxuICAgIC5rc3NCb2R5ICNrc3NTY3JlZW5TaG90V3JhcHBlciAja3NzVG9vbGJhciB7XFxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgIHJpZ2h0OiAwO1xcbiAgICAgIGJhY2tncm91bmQ6ICNmMWYxZjE7XFxuICAgICAgZm9udC1zaXplOiAxNHB4O1xcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZWRlZGU7XFxuICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgICAgei1pbmRleDogMTAwOyB9XFxuICAgICAgLmtzc0JvZHkgI2tzc1NjcmVlblNob3RXcmFwcGVyICNrc3NUb29sYmFyIC5rc3NUb29sYmFySXRlbUJUIHtcXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgICAgIHdpZHRoOiAzMHB4O1xcbiAgICAgICAgaGVpZ2h0OiAyOHB4O1xcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICAgICAgZmxvYXQ6IHJpZ2h0O1xcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyOyB9XFxuICAgICAgICAua3NzQm9keSAja3NzU2NyZWVuU2hvdFdyYXBwZXIgI2tzc1Rvb2xiYXIgLmtzc1Rvb2xiYXJJdGVtQlQ6aG92ZXIge1xcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjZGVkZWRlOyB9XFxuICAgICAgICAua3NzQm9keSAja3NzU2NyZWVuU2hvdFdyYXBwZXIgI2tzc1Rvb2xiYXIgLmtzc1Rvb2xiYXJJdGVtQlQgLmtzc1Rvb2xiYXJJdGVtSW1nIHtcXG4gICAgICAgICAgd2lkdGg6IDIwcHg7XFxuICAgICAgICAgIGhlaWdodDogMjBweDtcXG4gICAgICAgICAgbWFyZ2luLXRvcDogNXB4OyB9XFxuICAgICAgLmtzc0JvZHkgI2tzc1NjcmVlblNob3RXcmFwcGVyICNrc3NUb29sYmFyIC5rc3NUb29sYmFyQWN0aXZlSXRlbUJUIHtcXG4gICAgICAgIGJhY2tncm91bmQ6ICNkZWRlZGU7IH1cXG4gICAgICAua3NzQm9keSAja3NzU2NyZWVuU2hvdFdyYXBwZXIgI2tzc1Rvb2xiYXIgI2tzc1Rvb2xiYXJNaWRkbGVBcmVhICNrc3NDb2xvckJvYXJkIHtcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgIHdpZHRoOiAxODBweDtcXG4gICAgICAgIGhlaWdodDogNDBweDtcXG4gICAgICAgIHJpZ2h0OiAwO1xcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNiYmI7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICAgICAgICBkaXNwbGF5OiBub25lO1xcbiAgICAgICAgb3V0bGluZTogbm9uZTtcXG4gICAgICAgIGN1cnNvcjogZGVmYXVsdDtcXG4gICAgICAgIHotaW5kZXg6IDEwMDsgfVxcbiAgICAgICAgLmtzc0JvZHkgI2tzc1NjcmVlblNob3RXcmFwcGVyICNrc3NUb29sYmFyICNrc3NUb29sYmFyTWlkZGxlQXJlYSAja3NzQ29sb3JCb2FyZCAja3NzQ3VycmVudENvbG9yIHtcXG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICAgICAgICB3aWR0aDogMzBweDtcXG4gICAgICAgICAgaGVpZ2h0OiAzMHB4O1xcbiAgICAgICAgICBtYXJnaW46IDVweCA4cHggMCA4cHg7XFxuICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICMzMzM7IH1cXG4gICAgICAgIC5rc3NCb2R5ICNrc3NTY3JlZW5TaG90V3JhcHBlciAja3NzVG9vbGJhciAja3NzVG9vbGJhck1pZGRsZUFyZWEgI2tzc0NvbG9yQm9hcmQgI2tzc0NvbG9ySXRlbVdyYXBwZXIge1xcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XFxuICAgICAgICAgIHdpZHRoOiAxMzBweDtcXG4gICAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xcbiAgICAgICAgICBmb250LXNpemU6IDA7IH1cXG4gICAgICAgICAgLmtzc0JvZHkgI2tzc1NjcmVlblNob3RXcmFwcGVyICNrc3NUb29sYmFyICNrc3NUb29sYmFyTWlkZGxlQXJlYSAja3NzQ29sb3JCb2FyZCAja3NzQ29sb3JJdGVtV3JhcHBlciAua3NzQ29sb3JJdGVtIHtcXG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgICAgICAgICAgd2lkdGg6IDE0cHg7XFxuICAgICAgICAgICAgaGVpZ2h0OiAxNHB4O1xcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMnB4O1xcbiAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzMzMztcXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7IH1cXG4gICAgICAua3NzQm9keSAja3NzU2NyZWVuU2hvdFdyYXBwZXIgI2tzc1Rvb2xiYXIgI2tzc1Rvb2xiYXJNaWRkbGVBcmVhICNrc3NTZXRMaW5lV2lkdGgge1xcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgd2lkdGg6IDE1NXB4O1xcbiAgICAgICAgaGVpZ2h0OiA0MHB4O1xcbiAgICAgICAgcmlnaHQ6IDA7XFxuICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2JiYjtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgICAgICBvdXRsaW5lOiBub25lO1xcbiAgICAgICAgY3Vyc29yOiBkZWZhdWx0O1xcbiAgICAgICAgei1pbmRleDogMTAwOyB9XFxuICAgICAgICAua3NzQm9keSAja3NzU2NyZWVuU2hvdFdyYXBwZXIgI2tzc1Rvb2xiYXIgI2tzc1Rvb2xiYXJNaWRkbGVBcmVhICNrc3NTZXRMaW5lV2lkdGggI2tzc051bUlucHV0V3JhcHBlciB7XFxuICAgICAgICAgIG1hcmdpbjogN3B4IDAgMCA4cHg7XFxuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrOyB9XFxuICAgICAgICAgIC5rc3NCb2R5ICNrc3NTY3JlZW5TaG90V3JhcHBlciAja3NzVG9vbGJhciAja3NzVG9vbGJhck1pZGRsZUFyZWEgI2tzc1NldExpbmVXaWR0aCAja3NzTnVtSW5wdXRXcmFwcGVyICNrc3NOdW1JbnB1dCB7XFxuICAgICAgICAgICAgd2lkdGg6IDQwcHg7XFxuICAgICAgICAgICAgaGVpZ2h0OiAyNHB4O1xcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNiYmI7XFxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgICAgICAgICAgIHBhZGRpbmc6IDAgMTVweCAwIDhweDsgfVxcbiAgICAgICAgICAua3NzQm9keSAja3NzU2NyZWVuU2hvdFdyYXBwZXIgI2tzc1Rvb2xiYXIgI2tzc1Rvb2xiYXJNaWRkbGVBcmVhICNrc3NTZXRMaW5lV2lkdGggI2tzc051bUlucHV0V3JhcHBlciAja3NzQXJyb3dOdW1XcmFwcGVyIHtcXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICAgICAgcmlnaHQ6IDA7XFxuICAgICAgICAgICAgdG9wOiAxcHg7XFxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMCA0cHggNHB4IDA7XFxuICAgICAgICAgICAgZm9udC1zaXplOiAwO1xcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxMnB4OyB9XFxuICAgICAgICAgICAgLmtzc0JvZHkgI2tzc1NjcmVlblNob3RXcmFwcGVyICNrc3NUb29sYmFyICNrc3NUb29sYmFyTWlkZGxlQXJlYSAja3NzU2V0TGluZVdpZHRoICNrc3NOdW1JbnB1dFdyYXBwZXIgI2tzc0Fycm93TnVtV3JhcHBlciAja3NzVXBOdW0sIC5rc3NCb2R5ICNrc3NTY3JlZW5TaG90V3JhcHBlciAja3NzVG9vbGJhciAja3NzVG9vbGJhck1pZGRsZUFyZWEgI2tzc1NldExpbmVXaWR0aCAja3NzTnVtSW5wdXRXcmFwcGVyICNrc3NBcnJvd051bVdyYXBwZXIgI2tzc0Rvd25OdW0ge1xcbiAgICAgICAgICAgICAgaGVpZ2h0OiAxMnB4O1xcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xcbiAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyOyB9XFxuICAgICAgICAgICAgICAua3NzQm9keSAja3NzU2NyZWVuU2hvdFdyYXBwZXIgI2tzc1Rvb2xiYXIgI2tzc1Rvb2xiYXJNaWRkbGVBcmVhICNrc3NTZXRMaW5lV2lkdGggI2tzc051bUlucHV0V3JhcHBlciAja3NzQXJyb3dOdW1XcmFwcGVyICNrc3NVcE51bTpob3ZlciwgLmtzc0JvZHkgI2tzc1NjcmVlblNob3RXcmFwcGVyICNrc3NUb29sYmFyICNrc3NUb29sYmFyTWlkZGxlQXJlYSAja3NzU2V0TGluZVdpZHRoICNrc3NOdW1JbnB1dFdyYXBwZXIgI2tzc0Fycm93TnVtV3JhcHBlciAja3NzRG93bk51bTpob3ZlciB7XFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNkZWRlZGU7IH1cXG4gICAgICAgIC5rc3NCb2R5ICNrc3NTY3JlZW5TaG90V3JhcHBlciAja3NzVG9vbGJhciAja3NzVG9vbGJhck1pZGRsZUFyZWEgI2tzc1NldExpbmVXaWR0aCAja3NzU2hvd0xpbmVXaWR0aFdyYXBwZXIge1xcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgICAgICAgIGhlaWdodDogNDBweDtcXG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDQwcHg7XFxuICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XFxuICAgICAgICAgIHdpZHRoOiA4MHB4O1xcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cXG4gICAgICAgICAgLmtzc0JvZHkgI2tzc1NjcmVlblNob3RXcmFwcGVyICNrc3NUb29sYmFyICNrc3NUb29sYmFyTWlkZGxlQXJlYSAja3NzU2V0TGluZVdpZHRoICNrc3NTaG93TGluZVdpZHRoV3JhcHBlciAja3NzU2hvd0xpbmVXaWR0aCB7XFxuICAgICAgICAgICAgaGVpZ2h0OiAyMHB4O1xcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlOyB9XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuIiwiLypcblx0TUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKHVzZVNvdXJjZU1hcCkge1xuXHR2YXIgbGlzdCA9IFtdO1xuXG5cdC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblx0bGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuXHRcdHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuXHRcdFx0dmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCk7XG5cdFx0XHRpZihpdGVtWzJdKSB7XG5cdFx0XHRcdHJldHVybiBcIkBtZWRpYSBcIiArIGl0ZW1bMl0gKyBcIntcIiArIGNvbnRlbnQgKyBcIn1cIjtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHJldHVybiBjb250ZW50O1xuXHRcdFx0fVxuXHRcdH0pLmpvaW4oXCJcIik7XG5cdH07XG5cblx0Ly8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3Rcblx0bGlzdC5pID0gZnVuY3Rpb24obW9kdWxlcywgbWVkaWFRdWVyeSkge1xuXHRcdGlmKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKVxuXHRcdFx0bW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgXCJcIl1dO1xuXHRcdHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBpZCA9IHRoaXNbaV1bMF07XG5cdFx0XHRpZih0eXBlb2YgaWQgPT09IFwibnVtYmVyXCIpXG5cdFx0XHRcdGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcblx0XHR9XG5cdFx0Zm9yKGkgPSAwOyBpIDwgbW9kdWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGl0ZW0gPSBtb2R1bGVzW2ldO1xuXHRcdFx0Ly8gc2tpcCBhbHJlYWR5IGltcG9ydGVkIG1vZHVsZVxuXHRcdFx0Ly8gdGhpcyBpbXBsZW1lbnRhdGlvbiBpcyBub3QgMTAwJSBwZXJmZWN0IGZvciB3ZWlyZCBtZWRpYSBxdWVyeSBjb21iaW5hdGlvbnNcblx0XHRcdC8vICB3aGVuIGEgbW9kdWxlIGlzIGltcG9ydGVkIG11bHRpcGxlIHRpbWVzIHdpdGggZGlmZmVyZW50IG1lZGlhIHF1ZXJpZXMuXG5cdFx0XHQvLyAgSSBob3BlIHRoaXMgd2lsbCBuZXZlciBvY2N1ciAoSGV5IHRoaXMgd2F5IHdlIGhhdmUgc21hbGxlciBidW5kbGVzKVxuXHRcdFx0aWYodHlwZW9mIGl0ZW1bMF0gIT09IFwibnVtYmVyXCIgfHwgIWFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcblx0XHRcdFx0aWYobWVkaWFRdWVyeSAmJiAhaXRlbVsyXSkge1xuXHRcdFx0XHRcdGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuXHRcdFx0XHR9IGVsc2UgaWYobWVkaWFRdWVyeSkge1xuXHRcdFx0XHRcdGl0ZW1bMl0gPSBcIihcIiArIGl0ZW1bMl0gKyBcIikgYW5kIChcIiArIG1lZGlhUXVlcnkgKyBcIilcIjtcblx0XHRcdFx0fVxuXHRcdFx0XHRsaXN0LnB1c2goaXRlbSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xuXHRyZXR1cm4gbGlzdDtcbn07XG5cbmZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKSB7XG5cdHZhciBjb250ZW50ID0gaXRlbVsxXSB8fCAnJztcblx0dmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXHRpZiAoIWNzc01hcHBpbmcpIHtcblx0XHRyZXR1cm4gY29udGVudDtcblx0fVxuXG5cdGlmICh1c2VTb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgPT09ICdmdW5jdGlvbicpIHtcblx0XHR2YXIgc291cmNlTWFwcGluZyA9IHRvQ29tbWVudChjc3NNYXBwaW5nKTtcblx0XHR2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuXHRcdFx0cmV0dXJuICcvKiMgc291cmNlVVJMPScgKyBjc3NNYXBwaW5nLnNvdXJjZVJvb3QgKyBzb3VyY2UgKyAnICovJ1xuXHRcdH0pO1xuXG5cdFx0cmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbignXFxuJyk7XG5cdH1cblxuXHRyZXR1cm4gW2NvbnRlbnRdLmpvaW4oJ1xcbicpO1xufVxuXG4vLyBBZGFwdGVkIGZyb20gY29udmVydC1zb3VyY2UtbWFwIChNSVQpXG5mdW5jdGlvbiB0b0NvbW1lbnQoc291cmNlTWFwKSB7XG5cdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuXHR2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKTtcblx0dmFyIGRhdGEgPSAnc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsJyArIGJhc2U2NDtcblxuXHRyZXR1cm4gJy8qIyAnICsgZGF0YSArICcgKi8nO1xufVxuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBlc2NhcGUodXJsKSB7XG4gICAgaWYgKHR5cGVvZiB1cmwgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHJldHVybiB1cmxcbiAgICB9XG4gICAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gICAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gICAgfVxuICAgIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICAgIGlmICgvW1wiJygpIFxcdFxcbl0vLnRlc3QodXJsKSkge1xuICAgICAgICByZXR1cm4gJ1wiJyArIHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csICdcXFxcbicpICsgJ1wiJ1xuICAgIH1cblxuICAgIHJldHVybiB1cmxcbn1cbiIsIi8qXG5cdE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG5cdEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5cbnZhciBzdHlsZXNJbkRvbSA9IHt9O1xuXG52YXJcdG1lbW9pemUgPSBmdW5jdGlvbiAoZm4pIHtcblx0dmFyIG1lbW87XG5cblx0cmV0dXJuIGZ1bmN0aW9uICgpIHtcblx0XHRpZiAodHlwZW9mIG1lbW8gPT09IFwidW5kZWZpbmVkXCIpIG1lbW8gPSBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuXHRcdHJldHVybiBtZW1vO1xuXHR9O1xufTtcblxudmFyIGlzT2xkSUUgPSBtZW1vaXplKGZ1bmN0aW9uICgpIHtcblx0Ly8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3Ncblx0Ly8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuXHQvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG5cdC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuXHQvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcblx0cmV0dXJuIHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iO1xufSk7XG5cbnZhciBnZXRUYXJnZXQgPSBmdW5jdGlvbiAodGFyZ2V0KSB7XG4gIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG59O1xuXG52YXIgZ2V0RWxlbWVudCA9IChmdW5jdGlvbiAoZm4pIHtcblx0dmFyIG1lbW8gPSB7fTtcblxuXHRyZXR1cm4gZnVuY3Rpb24odGFyZ2V0KSB7XG4gICAgICAgICAgICAgICAgLy8gSWYgcGFzc2luZyBmdW5jdGlvbiBpbiBvcHRpb25zLCB0aGVuIHVzZSBpdCBmb3IgcmVzb2x2ZSBcImhlYWRcIiBlbGVtZW50LlxuICAgICAgICAgICAgICAgIC8vIFVzZWZ1bCBmb3IgU2hhZG93IFJvb3Qgc3R5bGUgaS5lXG4gICAgICAgICAgICAgICAgLy8ge1xuICAgICAgICAgICAgICAgIC8vICAgaW5zZXJ0SW50bzogZnVuY3Rpb24gKCkgeyByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNmb29cIikuc2hhZG93Um9vdCB9XG4gICAgICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdGFyZ2V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGFyZ2V0KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG5cdFx0XHR2YXIgc3R5bGVUYXJnZXQgPSBnZXRUYXJnZXQuY2FsbCh0aGlzLCB0YXJnZXQpO1xuXHRcdFx0Ly8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblx0XHRcdGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcblx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHQvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuXHRcdFx0XHRcdC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG5cdFx0XHRcdFx0c3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcblx0XHRcdFx0fSBjYXRjaChlKSB7XG5cdFx0XHRcdFx0c3R5bGVUYXJnZXQgPSBudWxsO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcblx0XHR9XG5cdFx0cmV0dXJuIG1lbW9bdGFyZ2V0XVxuXHR9O1xufSkoKTtcblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXJcdHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xudmFyXHRzdHlsZXNJbnNlcnRlZEF0VG9wID0gW107XG5cbnZhclx0Zml4VXJscyA9IHJlcXVpcmUoXCIuL3VybHNcIik7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obGlzdCwgb3B0aW9ucykge1xuXHRpZiAodHlwZW9mIERFQlVHICE9PSBcInVuZGVmaW5lZFwiICYmIERFQlVHKSB7XG5cdFx0aWYgKHR5cGVvZiBkb2N1bWVudCAhPT0gXCJvYmplY3RcIikgdGhyb3cgbmV3IEVycm9yKFwiVGhlIHN0eWxlLWxvYWRlciBjYW5ub3QgYmUgdXNlZCBpbiBhIG5vbi1icm93c2VyIGVudmlyb25tZW50XCIpO1xuXHR9XG5cblx0b3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cblx0b3B0aW9ucy5hdHRycyA9IHR5cGVvZiBvcHRpb25zLmF0dHJzID09PSBcIm9iamVjdFwiID8gb3B0aW9ucy5hdHRycyA6IHt9O1xuXG5cdC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuXHQvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cdGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSBcImJvb2xlYW5cIikgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG5cblx0Ly8gQnkgZGVmYXVsdCwgYWRkIDxzdHlsZT4gdGFncyB0byB0aGUgPGhlYWQ+IGVsZW1lbnRcbiAgICAgICAgaWYgKCFvcHRpb25zLmluc2VydEludG8pIG9wdGlvbnMuaW5zZXJ0SW50byA9IFwiaGVhZFwiO1xuXG5cdC8vIEJ5IGRlZmF1bHQsIGFkZCA8c3R5bGU+IHRhZ3MgdG8gdGhlIGJvdHRvbSBvZiB0aGUgdGFyZ2V0XG5cdGlmICghb3B0aW9ucy5pbnNlcnRBdCkgb3B0aW9ucy5pbnNlcnRBdCA9IFwiYm90dG9tXCI7XG5cblx0dmFyIHN0eWxlcyA9IGxpc3RUb1N0eWxlcyhsaXN0LCBvcHRpb25zKTtcblxuXHRhZGRTdHlsZXNUb0RvbShzdHlsZXMsIG9wdGlvbnMpO1xuXG5cdHJldHVybiBmdW5jdGlvbiB1cGRhdGUgKG5ld0xpc3QpIHtcblx0XHR2YXIgbWF5UmVtb3ZlID0gW107XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGl0ZW0gPSBzdHlsZXNbaV07XG5cdFx0XHR2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcblxuXHRcdFx0ZG9tU3R5bGUucmVmcy0tO1xuXHRcdFx0bWF5UmVtb3ZlLnB1c2goZG9tU3R5bGUpO1xuXHRcdH1cblxuXHRcdGlmKG5ld0xpc3QpIHtcblx0XHRcdHZhciBuZXdTdHlsZXMgPSBsaXN0VG9TdHlsZXMobmV3TGlzdCwgb3B0aW9ucyk7XG5cdFx0XHRhZGRTdHlsZXNUb0RvbShuZXdTdHlsZXMsIG9wdGlvbnMpO1xuXHRcdH1cblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgbWF5UmVtb3ZlLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgZG9tU3R5bGUgPSBtYXlSZW1vdmVbaV07XG5cblx0XHRcdGlmKGRvbVN0eWxlLnJlZnMgPT09IDApIHtcblx0XHRcdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykgZG9tU3R5bGUucGFydHNbal0oKTtcblxuXHRcdFx0XHRkZWxldGUgc3R5bGVzSW5Eb21bZG9tU3R5bGUuaWRdO1xuXHRcdFx0fVxuXHRcdH1cblx0fTtcbn07XG5cbmZ1bmN0aW9uIGFkZFN0eWxlc1RvRG9tIChzdHlsZXMsIG9wdGlvbnMpIHtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgaXRlbSA9IHN0eWxlc1tpXTtcblx0XHR2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcblxuXHRcdGlmKGRvbVN0eWxlKSB7XG5cdFx0XHRkb21TdHlsZS5yZWZzKys7XG5cblx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRkb21TdHlsZS5wYXJ0c1tqXShpdGVtLnBhcnRzW2pdKTtcblx0XHRcdH1cblxuXHRcdFx0Zm9yKDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0ZG9tU3R5bGUucGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdHZhciBwYXJ0cyA9IFtdO1xuXG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRwYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcblx0XHRcdH1cblxuXHRcdFx0c3R5bGVzSW5Eb21baXRlbS5pZF0gPSB7aWQ6IGl0ZW0uaWQsIHJlZnM6IDEsIHBhcnRzOiBwYXJ0c307XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIGxpc3RUb1N0eWxlcyAobGlzdCwgb3B0aW9ucykge1xuXHR2YXIgc3R5bGVzID0gW107XG5cdHZhciBuZXdTdHlsZXMgPSB7fTtcblxuXHRmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgaXRlbSA9IGxpc3RbaV07XG5cdFx0dmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG5cdFx0dmFyIGNzcyA9IGl0ZW1bMV07XG5cdFx0dmFyIG1lZGlhID0gaXRlbVsyXTtcblx0XHR2YXIgc291cmNlTWFwID0gaXRlbVszXTtcblx0XHR2YXIgcGFydCA9IHtjc3M6IGNzcywgbWVkaWE6IG1lZGlhLCBzb3VyY2VNYXA6IHNvdXJjZU1hcH07XG5cblx0XHRpZighbmV3U3R5bGVzW2lkXSkgc3R5bGVzLnB1c2gobmV3U3R5bGVzW2lkXSA9IHtpZDogaWQsIHBhcnRzOiBbcGFydF19KTtcblx0XHRlbHNlIG5ld1N0eWxlc1tpZF0ucGFydHMucHVzaChwYXJ0KTtcblx0fVxuXG5cdHJldHVybiBzdHlsZXM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudCAob3B0aW9ucywgc3R5bGUpIHtcblx0dmFyIHRhcmdldCA9IGdldEVsZW1lbnQob3B0aW9ucy5pbnNlcnRJbnRvKVxuXG5cdGlmICghdGFyZ2V0KSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnRJbnRvJyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG5cdH1cblxuXHR2YXIgbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AgPSBzdHlsZXNJbnNlcnRlZEF0VG9wW3N0eWxlc0luc2VydGVkQXRUb3AubGVuZ3RoIC0gMV07XG5cblx0aWYgKG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwidG9wXCIpIHtcblx0XHRpZiAoIWxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wKSB7XG5cdFx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlLCB0YXJnZXQuZmlyc3RDaGlsZCk7XG5cdFx0fSBlbHNlIGlmIChsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcC5uZXh0U2libGluZykge1xuXHRcdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AubmV4dFNpYmxpbmcpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuXHRcdH1cblx0XHRzdHlsZXNJbnNlcnRlZEF0VG9wLnB1c2goc3R5bGUpO1xuXHR9IGVsc2UgaWYgKG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwiYm90dG9tXCIpIHtcblx0XHR0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuXHR9IGVsc2UgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydEF0ID09PSBcIm9iamVjdFwiICYmIG9wdGlvbnMuaW5zZXJ0QXQuYmVmb3JlKSB7XG5cdFx0dmFyIG5leHRTaWJsaW5nID0gZ2V0RWxlbWVudChvcHRpb25zLmluc2VydEludG8gKyBcIiBcIiArIG9wdGlvbnMuaW5zZXJ0QXQuYmVmb3JlKTtcblx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlLCBuZXh0U2libGluZyk7XG5cdH0gZWxzZSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiW1N0eWxlIExvYWRlcl1cXG5cXG4gSW52YWxpZCB2YWx1ZSBmb3IgcGFyYW1ldGVyICdpbnNlcnRBdCcgKCdvcHRpb25zLmluc2VydEF0JykgZm91bmQuXFxuIE11c3QgYmUgJ3RvcCcsICdib3R0b20nLCBvciBPYmplY3QuXFxuIChodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlciNpbnNlcnRhdClcXG5cIik7XG5cdH1cbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50IChzdHlsZSkge1xuXHRpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkgcmV0dXJuIGZhbHNlO1xuXHRzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcblxuXHR2YXIgaWR4ID0gc3R5bGVzSW5zZXJ0ZWRBdFRvcC5pbmRleE9mKHN0eWxlKTtcblx0aWYoaWR4ID49IDApIHtcblx0XHRzdHlsZXNJbnNlcnRlZEF0VG9wLnNwbGljZShpZHgsIDEpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVN0eWxlRWxlbWVudCAob3B0aW9ucykge1xuXHR2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG5cblx0aWYob3B0aW9ucy5hdHRycy50eXBlID09PSB1bmRlZmluZWQpIHtcblx0XHRvcHRpb25zLmF0dHJzLnR5cGUgPSBcInRleHQvY3NzXCI7XG5cdH1cblxuXHRhZGRBdHRycyhzdHlsZSwgb3B0aW9ucy5hdHRycyk7XG5cdGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBzdHlsZSk7XG5cblx0cmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVMaW5rRWxlbWVudCAob3B0aW9ucykge1xuXHR2YXIgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIpO1xuXG5cdGlmKG9wdGlvbnMuYXR0cnMudHlwZSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0b3B0aW9ucy5hdHRycy50eXBlID0gXCJ0ZXh0L2Nzc1wiO1xuXHR9XG5cdG9wdGlvbnMuYXR0cnMucmVsID0gXCJzdHlsZXNoZWV0XCI7XG5cblx0YWRkQXR0cnMobGluaywgb3B0aW9ucy5hdHRycyk7XG5cdGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBsaW5rKTtcblxuXHRyZXR1cm4gbGluaztcbn1cblxuZnVuY3Rpb24gYWRkQXR0cnMgKGVsLCBhdHRycykge1xuXHRPYmplY3Qua2V5cyhhdHRycykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG5cdFx0ZWwuc2V0QXR0cmlidXRlKGtleSwgYXR0cnNba2V5XSk7XG5cdH0pO1xufVxuXG5mdW5jdGlvbiBhZGRTdHlsZSAob2JqLCBvcHRpb25zKSB7XG5cdHZhciBzdHlsZSwgdXBkYXRlLCByZW1vdmUsIHJlc3VsdDtcblxuXHQvLyBJZiBhIHRyYW5zZm9ybSBmdW5jdGlvbiB3YXMgZGVmaW5lZCwgcnVuIGl0IG9uIHRoZSBjc3Ncblx0aWYgKG9wdGlvbnMudHJhbnNmb3JtICYmIG9iai5jc3MpIHtcblx0ICAgIHJlc3VsdCA9IG9wdGlvbnMudHJhbnNmb3JtKG9iai5jc3MpO1xuXG5cdCAgICBpZiAocmVzdWx0KSB7XG5cdCAgICBcdC8vIElmIHRyYW5zZm9ybSByZXR1cm5zIGEgdmFsdWUsIHVzZSB0aGF0IGluc3RlYWQgb2YgdGhlIG9yaWdpbmFsIGNzcy5cblx0ICAgIFx0Ly8gVGhpcyBhbGxvd3MgcnVubmluZyBydW50aW1lIHRyYW5zZm9ybWF0aW9ucyBvbiB0aGUgY3NzLlxuXHQgICAgXHRvYmouY3NzID0gcmVzdWx0O1xuXHQgICAgfSBlbHNlIHtcblx0ICAgIFx0Ly8gSWYgdGhlIHRyYW5zZm9ybSBmdW5jdGlvbiByZXR1cm5zIGEgZmFsc3kgdmFsdWUsIGRvbid0IGFkZCB0aGlzIGNzcy5cblx0ICAgIFx0Ly8gVGhpcyBhbGxvd3MgY29uZGl0aW9uYWwgbG9hZGluZyBvZiBjc3Ncblx0ICAgIFx0cmV0dXJuIGZ1bmN0aW9uKCkge1xuXHQgICAgXHRcdC8vIG5vb3Bcblx0ICAgIFx0fTtcblx0ICAgIH1cblx0fVxuXG5cdGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuXHRcdHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuXG5cdFx0c3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKSk7XG5cblx0XHR1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcblx0XHRyZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuXG5cdH0gZWxzZSBpZiAoXG5cdFx0b2JqLnNvdXJjZU1hcCAmJlxuXHRcdHR5cGVvZiBVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBVUkwuY3JlYXRlT2JqZWN0VVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgVVJMLnJldm9rZU9iamVjdFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIEJsb2IgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCJcblx0KSB7XG5cdFx0c3R5bGUgPSBjcmVhdGVMaW5rRWxlbWVudChvcHRpb25zKTtcblx0XHR1cGRhdGUgPSB1cGRhdGVMaW5rLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXHRcdHJlbW92ZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG5cblx0XHRcdGlmKHN0eWxlLmhyZWYpIFVSTC5yZXZva2VPYmplY3RVUkwoc3R5bGUuaHJlZik7XG5cdFx0fTtcblx0fSBlbHNlIHtcblx0XHRzdHlsZSA9IGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKTtcblx0XHR1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUpO1xuXHRcdHJlbW92ZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG5cdFx0fTtcblx0fVxuXG5cdHVwZGF0ZShvYmopO1xuXG5cdHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZSAobmV3T2JqKSB7XG5cdFx0aWYgKG5ld09iaikge1xuXHRcdFx0aWYgKFxuXHRcdFx0XHRuZXdPYmouY3NzID09PSBvYmouY3NzICYmXG5cdFx0XHRcdG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmXG5cdFx0XHRcdG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXBcblx0XHRcdCkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdHVwZGF0ZShvYmogPSBuZXdPYmopO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZW1vdmUoKTtcblx0XHR9XG5cdH07XG59XG5cbnZhciByZXBsYWNlVGV4dCA9IChmdW5jdGlvbiAoKSB7XG5cdHZhciB0ZXh0U3RvcmUgPSBbXTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gKGluZGV4LCByZXBsYWNlbWVudCkge1xuXHRcdHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcblxuXHRcdHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuXHR9O1xufSkoKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyAoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuXHR2YXIgY3NzID0gcmVtb3ZlID8gXCJcIiA6IG9iai5jc3M7XG5cblx0aWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcblx0XHRzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcblx0fSBlbHNlIHtcblx0XHR2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG5cdFx0dmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG5cdFx0aWYgKGNoaWxkTm9kZXNbaW5kZXhdKSBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG5cblx0XHRpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcblx0XHRcdHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnIChzdHlsZSwgb2JqKSB7XG5cdHZhciBjc3MgPSBvYmouY3NzO1xuXHR2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG5cblx0aWYobWVkaWEpIHtcblx0XHRzdHlsZS5zZXRBdHRyaWJ1dGUoXCJtZWRpYVwiLCBtZWRpYSlcblx0fVxuXG5cdGlmKHN0eWxlLnN0eWxlU2hlZXQpIHtcblx0XHRzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG5cdH0gZWxzZSB7XG5cdFx0d2hpbGUoc3R5bGUuZmlyc3RDaGlsZCkge1xuXHRcdFx0c3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG5cdFx0fVxuXG5cdFx0c3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gdXBkYXRlTGluayAobGluaywgb3B0aW9ucywgb2JqKSB7XG5cdHZhciBjc3MgPSBvYmouY3NzO1xuXHR2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuXHQvKlxuXHRcdElmIGNvbnZlcnRUb0Fic29sdXRlVXJscyBpc24ndCBkZWZpbmVkLCBidXQgc291cmNlbWFwcyBhcmUgZW5hYmxlZFxuXHRcdGFuZCB0aGVyZSBpcyBubyBwdWJsaWNQYXRoIGRlZmluZWQgdGhlbiBsZXRzIHR1cm4gY29udmVydFRvQWJzb2x1dGVVcmxzXG5cdFx0b24gYnkgZGVmYXVsdC4gIE90aGVyd2lzZSBkZWZhdWx0IHRvIHRoZSBjb252ZXJ0VG9BYnNvbHV0ZVVybHMgb3B0aW9uXG5cdFx0ZGlyZWN0bHlcblx0Ki9cblx0dmFyIGF1dG9GaXhVcmxzID0gb3B0aW9ucy5jb252ZXJ0VG9BYnNvbHV0ZVVybHMgPT09IHVuZGVmaW5lZCAmJiBzb3VyY2VNYXA7XG5cblx0aWYgKG9wdGlvbnMuY29udmVydFRvQWJzb2x1dGVVcmxzIHx8IGF1dG9GaXhVcmxzKSB7XG5cdFx0Y3NzID0gZml4VXJscyhjc3MpO1xuXHR9XG5cblx0aWYgKHNvdXJjZU1hcCkge1xuXHRcdC8vIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzI2NjAzODc1XG5cdFx0Y3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIiArIGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSkgKyBcIiAqL1wiO1xuXHR9XG5cblx0dmFyIGJsb2IgPSBuZXcgQmxvYihbY3NzXSwgeyB0eXBlOiBcInRleHQvY3NzXCIgfSk7XG5cblx0dmFyIG9sZFNyYyA9IGxpbmsuaHJlZjtcblxuXHRsaW5rLmhyZWYgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xuXG5cdGlmKG9sZFNyYykgVVJMLnJldm9rZU9iamVjdFVSTChvbGRTcmMpO1xufVxuIiwiXG4vKipcbiAqIFdoZW4gc291cmNlIG1hcHMgYXJlIGVuYWJsZWQsIGBzdHlsZS1sb2FkZXJgIHVzZXMgYSBsaW5rIGVsZW1lbnQgd2l0aCBhIGRhdGEtdXJpIHRvXG4gKiBlbWJlZCB0aGUgY3NzIG9uIHRoZSBwYWdlLiBUaGlzIGJyZWFrcyBhbGwgcmVsYXRpdmUgdXJscyBiZWNhdXNlIG5vdyB0aGV5IGFyZSByZWxhdGl2ZSB0byBhXG4gKiBidW5kbGUgaW5zdGVhZCBvZiB0aGUgY3VycmVudCBwYWdlLlxuICpcbiAqIE9uZSBzb2x1dGlvbiBpcyB0byBvbmx5IHVzZSBmdWxsIHVybHMsIGJ1dCB0aGF0IG1heSBiZSBpbXBvc3NpYmxlLlxuICpcbiAqIEluc3RlYWQsIHRoaXMgZnVuY3Rpb24gXCJmaXhlc1wiIHRoZSByZWxhdGl2ZSB1cmxzIHRvIGJlIGFic29sdXRlIGFjY29yZGluZyB0byB0aGUgY3VycmVudCBwYWdlIGxvY2F0aW9uLlxuICpcbiAqIEEgcnVkaW1lbnRhcnkgdGVzdCBzdWl0ZSBpcyBsb2NhdGVkIGF0IGB0ZXN0L2ZpeFVybHMuanNgIGFuZCBjYW4gYmUgcnVuIHZpYSB0aGUgYG5wbSB0ZXN0YCBjb21tYW5kLlxuICpcbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3MpIHtcbiAgLy8gZ2V0IGN1cnJlbnQgbG9jYXRpb25cbiAgdmFyIGxvY2F0aW9uID0gdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiAmJiB3aW5kb3cubG9jYXRpb247XG5cbiAgaWYgKCFsb2NhdGlvbikge1xuICAgIHRocm93IG5ldyBFcnJvcihcImZpeFVybHMgcmVxdWlyZXMgd2luZG93LmxvY2F0aW9uXCIpO1xuICB9XG5cblx0Ly8gYmxhbmsgb3IgbnVsbD9cblx0aWYgKCFjc3MgfHwgdHlwZW9mIGNzcyAhPT0gXCJzdHJpbmdcIikge1xuXHQgIHJldHVybiBjc3M7XG4gIH1cblxuICB2YXIgYmFzZVVybCA9IGxvY2F0aW9uLnByb3RvY29sICsgXCIvL1wiICsgbG9jYXRpb24uaG9zdDtcbiAgdmFyIGN1cnJlbnREaXIgPSBiYXNlVXJsICsgbG9jYXRpb24ucGF0aG5hbWUucmVwbGFjZSgvXFwvW15cXC9dKiQvLCBcIi9cIik7XG5cblx0Ly8gY29udmVydCBlYWNoIHVybCguLi4pXG5cdC8qXG5cdFRoaXMgcmVndWxhciBleHByZXNzaW9uIGlzIGp1c3QgYSB3YXkgdG8gcmVjdXJzaXZlbHkgbWF0Y2ggYnJhY2tldHMgd2l0aGluXG5cdGEgc3RyaW5nLlxuXG5cdCAvdXJsXFxzKlxcKCAgPSBNYXRjaCBvbiB0aGUgd29yZCBcInVybFwiIHdpdGggYW55IHdoaXRlc3BhY2UgYWZ0ZXIgaXQgYW5kIHRoZW4gYSBwYXJlbnNcblx0ICAgKCAgPSBTdGFydCBhIGNhcHR1cmluZyBncm91cFxuXHQgICAgICg/OiAgPSBTdGFydCBhIG5vbi1jYXB0dXJpbmcgZ3JvdXBcblx0ICAgICAgICAgW14pKF0gID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgIHwgID0gT1Jcblx0ICAgICAgICAgXFwoICA9IE1hdGNoIGEgc3RhcnQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICg/OiAgPSBTdGFydCBhbm90aGVyIG5vbi1jYXB0dXJpbmcgZ3JvdXBzXG5cdCAgICAgICAgICAgICAgICAgW14pKF0rICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgIHwgID0gT1Jcblx0ICAgICAgICAgICAgICAgICBcXCggID0gTWF0Y2ggYSBzdGFydCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgICAgICBbXikoXSogID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgXFwpICA9IE1hdGNoIGEgZW5kIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICApICA9IEVuZCBHcm91cFxuICAgICAgICAgICAgICAqXFwpID0gTWF0Y2ggYW55dGhpbmcgYW5kIHRoZW4gYSBjbG9zZSBwYXJlbnNcbiAgICAgICAgICApICA9IENsb3NlIG5vbi1jYXB0dXJpbmcgZ3JvdXBcbiAgICAgICAgICAqICA9IE1hdGNoIGFueXRoaW5nXG4gICAgICAgKSAgPSBDbG9zZSBjYXB0dXJpbmcgZ3JvdXBcblx0IFxcKSAgPSBNYXRjaCBhIGNsb3NlIHBhcmVuc1xuXG5cdCAvZ2kgID0gR2V0IGFsbCBtYXRjaGVzLCBub3QgdGhlIGZpcnN0LiAgQmUgY2FzZSBpbnNlbnNpdGl2ZS5cblx0ICovXG5cdHZhciBmaXhlZENzcyA9IGNzcy5yZXBsYWNlKC91cmxcXHMqXFwoKCg/OlteKShdfFxcKCg/OlteKShdK3xcXChbXikoXSpcXCkpKlxcKSkqKVxcKS9naSwgZnVuY3Rpb24oZnVsbE1hdGNoLCBvcmlnVXJsKSB7XG5cdFx0Ly8gc3RyaXAgcXVvdGVzIChpZiB0aGV5IGV4aXN0KVxuXHRcdHZhciB1bnF1b3RlZE9yaWdVcmwgPSBvcmlnVXJsXG5cdFx0XHQudHJpbSgpXG5cdFx0XHQucmVwbGFjZSgvXlwiKC4qKVwiJC8sIGZ1bmN0aW9uKG8sICQxKXsgcmV0dXJuICQxOyB9KVxuXHRcdFx0LnJlcGxhY2UoL14nKC4qKSckLywgZnVuY3Rpb24obywgJDEpeyByZXR1cm4gJDE7IH0pO1xuXG5cdFx0Ly8gYWxyZWFkeSBhIGZ1bGwgdXJsPyBubyBjaGFuZ2Vcblx0XHRpZiAoL14oI3xkYXRhOnxodHRwOlxcL1xcL3xodHRwczpcXC9cXC98ZmlsZTpcXC9cXC9cXC98XFxzKiQpL2kudGVzdCh1bnF1b3RlZE9yaWdVcmwpKSB7XG5cdFx0ICByZXR1cm4gZnVsbE1hdGNoO1xuXHRcdH1cblxuXHRcdC8vIGNvbnZlcnQgdGhlIHVybCB0byBhIGZ1bGwgdXJsXG5cdFx0dmFyIG5ld1VybDtcblxuXHRcdGlmICh1bnF1b3RlZE9yaWdVcmwuaW5kZXhPZihcIi8vXCIpID09PSAwKSB7XG5cdFx0ICBcdC8vVE9ETzogc2hvdWxkIHdlIGFkZCBwcm90b2NvbD9cblx0XHRcdG5ld1VybCA9IHVucXVvdGVkT3JpZ1VybDtcblx0XHR9IGVsc2UgaWYgKHVucXVvdGVkT3JpZ1VybC5pbmRleE9mKFwiL1wiKSA9PT0gMCkge1xuXHRcdFx0Ly8gcGF0aCBzaG91bGQgYmUgcmVsYXRpdmUgdG8gdGhlIGJhc2UgdXJsXG5cdFx0XHRuZXdVcmwgPSBiYXNlVXJsICsgdW5xdW90ZWRPcmlnVXJsOyAvLyBhbHJlYWR5IHN0YXJ0cyB3aXRoICcvJ1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQvLyBwYXRoIHNob3VsZCBiZSByZWxhdGl2ZSB0byBjdXJyZW50IGRpcmVjdG9yeVxuXHRcdFx0bmV3VXJsID0gY3VycmVudERpciArIHVucXVvdGVkT3JpZ1VybC5yZXBsYWNlKC9eXFwuXFwvLywgXCJcIik7IC8vIFN0cmlwIGxlYWRpbmcgJy4vJ1xuXHRcdH1cblxuXHRcdC8vIHNlbmQgYmFjayB0aGUgZml4ZWQgdXJsKC4uLilcblx0XHRyZXR1cm4gXCJ1cmwoXCIgKyBKU09OLnN0cmluZ2lmeShuZXdVcmwpICsgXCIpXCI7XG5cdH0pO1xuXG5cdC8vIHNlbmQgYmFjayB0aGUgZml4ZWQgY3NzXG5cdHJldHVybiBmaXhlZENzcztcbn07XG4iLCIvKiogQGxpY2Vuc2UgVVJJLmpzIHY0LjQuMCAoYykgMjAxMSBHYXJ5IENvdXJ0LiBMaWNlbnNlOiBodHRwOi8vZ2l0aHViLmNvbS9nYXJ5Y291cnQvdXJpLWpzICovXG4oZnVuY3Rpb24gKGdsb2JhbCwgZmFjdG9yeSkge1xuXHR0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgPyBmYWN0b3J5KGV4cG9ydHMpIDpcblx0dHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kID8gZGVmaW5lKFsnZXhwb3J0cyddLCBmYWN0b3J5KSA6XG5cdChmYWN0b3J5KChnbG9iYWwuVVJJID0gZ2xvYmFsLlVSSSB8fCB7fSkpKTtcbn0odGhpcywgKGZ1bmN0aW9uIChleHBvcnRzKSB7ICd1c2Ugc3RyaWN0JztcblxuZnVuY3Rpb24gbWVyZ2UoKSB7XG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIHNldHMgPSBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgICAgc2V0c1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICBpZiAoc2V0cy5sZW5ndGggPiAxKSB7XG4gICAgICAgIHNldHNbMF0gPSBzZXRzWzBdLnNsaWNlKDAsIC0xKTtcbiAgICAgICAgdmFyIHhsID0gc2V0cy5sZW5ndGggLSAxO1xuICAgICAgICBmb3IgKHZhciB4ID0gMTsgeCA8IHhsOyArK3gpIHtcbiAgICAgICAgICAgIHNldHNbeF0gPSBzZXRzW3hdLnNsaWNlKDEsIC0xKTtcbiAgICAgICAgfVxuICAgICAgICBzZXRzW3hsXSA9IHNldHNbeGxdLnNsaWNlKDEpO1xuICAgICAgICByZXR1cm4gc2V0cy5qb2luKCcnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gc2V0c1swXTtcbiAgICB9XG59XG5mdW5jdGlvbiBzdWJleHAoc3RyKSB7XG4gICAgcmV0dXJuIFwiKD86XCIgKyBzdHIgKyBcIilcIjtcbn1cbmZ1bmN0aW9uIHR5cGVPZihvKSB7XG4gICAgcmV0dXJuIG8gPT09IHVuZGVmaW5lZCA/IFwidW5kZWZpbmVkXCIgOiBvID09PSBudWxsID8gXCJudWxsXCIgOiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc3BsaXQoXCIgXCIpLnBvcCgpLnNwbGl0KFwiXVwiKS5zaGlmdCgpLnRvTG93ZXJDYXNlKCk7XG59XG5mdW5jdGlvbiB0b1VwcGVyQ2FzZShzdHIpIHtcbiAgICByZXR1cm4gc3RyLnRvVXBwZXJDYXNlKCk7XG59XG5mdW5jdGlvbiB0b0FycmF5KG9iaikge1xuICAgIHJldHVybiBvYmogIT09IHVuZGVmaW5lZCAmJiBvYmogIT09IG51bGwgPyBvYmogaW5zdGFuY2VvZiBBcnJheSA/IG9iaiA6IHR5cGVvZiBvYmoubGVuZ3RoICE9PSBcIm51bWJlclwiIHx8IG9iai5zcGxpdCB8fCBvYmouc2V0SW50ZXJ2YWwgfHwgb2JqLmNhbGwgPyBbb2JqXSA6IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKG9iaikgOiBbXTtcbn1cbmZ1bmN0aW9uIGFzc2lnbih0YXJnZXQsIHNvdXJjZSkge1xuICAgIHZhciBvYmogPSB0YXJnZXQ7XG4gICAgaWYgKHNvdXJjZSkge1xuICAgICAgICBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7XG4gICAgICAgICAgICBvYmpba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBvYmo7XG59XG5cbmZ1bmN0aW9uIGJ1aWxkRXhwcyhpc0lSSSkge1xuICAgIHZhciBBTFBIQSQkID0gXCJbQS1aYS16XVwiLFxuICAgICAgICBDUiQgPSBcIltcXFxceDBEXVwiLFxuICAgICAgICBESUdJVCQkID0gXCJbMC05XVwiLFxuICAgICAgICBEUVVPVEUkJCA9IFwiW1xcXFx4MjJdXCIsXG4gICAgICAgIEhFWERJRyQkID0gbWVyZ2UoRElHSVQkJCwgXCJbQS1GYS1mXVwiKSxcbiAgICAgICAgLy9jYXNlLWluc2Vuc2l0aXZlXG4gICAgTEYkJCA9IFwiW1xcXFx4MEFdXCIsXG4gICAgICAgIFNQJCQgPSBcIltcXFxceDIwXVwiLFxuICAgICAgICBQQ1RfRU5DT0RFRCQgPSBzdWJleHAoc3ViZXhwKFwiJVtFRmVmXVwiICsgSEVYRElHJCQgKyBcIiVcIiArIEhFWERJRyQkICsgSEVYRElHJCQgKyBcIiVcIiArIEhFWERJRyQkICsgSEVYRElHJCQpICsgXCJ8XCIgKyBzdWJleHAoXCIlWzg5QS1GYS1mXVwiICsgSEVYRElHJCQgKyBcIiVcIiArIEhFWERJRyQkICsgSEVYRElHJCQpICsgXCJ8XCIgKyBzdWJleHAoXCIlXCIgKyBIRVhESUckJCArIEhFWERJRyQkKSksXG4gICAgICAgIC8vZXhwYW5kZWRcbiAgICBHRU5fREVMSU1TJCQgPSBcIltcXFxcOlxcXFwvXFxcXD9cXFxcI1xcXFxbXFxcXF1cXFxcQF1cIixcbiAgICAgICAgU1VCX0RFTElNUyQkID0gXCJbXFxcXCFcXFxcJFxcXFwmXFxcXCdcXFxcKFxcXFwpXFxcXCpcXFxcK1xcXFwsXFxcXDtcXFxcPV1cIixcbiAgICAgICAgUkVTRVJWRUQkJCA9IG1lcmdlKEdFTl9ERUxJTVMkJCwgU1VCX0RFTElNUyQkKSxcbiAgICAgICAgVUNTQ0hBUiQkID0gaXNJUkkgPyBcIltcXFxceEEwLVxcXFx1MjAwRFxcXFx1MjAxMC1cXFxcdTIwMjlcXFxcdTIwMkYtXFxcXHVEN0ZGXFxcXHVGOTAwLVxcXFx1RkRDRlxcXFx1RkRGMC1cXFxcdUZGRUZdXCIgOiBcIltdXCIsXG4gICAgICAgIC8vc3Vic2V0LCBleGNsdWRlcyBiaWRpIGNvbnRyb2wgY2hhcmFjdGVyc1xuICAgIElQUklWQVRFJCQgPSBpc0lSSSA/IFwiW1xcXFx1RTAwMC1cXFxcdUY4RkZdXCIgOiBcIltdXCIsXG4gICAgICAgIC8vc3Vic2V0XG4gICAgVU5SRVNFUlZFRCQkID0gbWVyZ2UoQUxQSEEkJCwgRElHSVQkJCwgXCJbXFxcXC1cXFxcLlxcXFxfXFxcXH5dXCIsIFVDU0NIQVIkJCksXG4gICAgICAgIFNDSEVNRSQgPSBzdWJleHAoQUxQSEEkJCArIG1lcmdlKEFMUEhBJCQsIERJR0lUJCQsIFwiW1xcXFwrXFxcXC1cXFxcLl1cIikgKyBcIipcIiksXG4gICAgICAgIFVTRVJJTkZPJCA9IHN1YmV4cChzdWJleHAoUENUX0VOQ09ERUQkICsgXCJ8XCIgKyBtZXJnZShVTlJFU0VSVkVEJCQsIFNVQl9ERUxJTVMkJCwgXCJbXFxcXDpdXCIpKSArIFwiKlwiKSxcbiAgICAgICAgREVDX09DVEVUJCA9IHN1YmV4cChzdWJleHAoXCIyNVswLTVdXCIpICsgXCJ8XCIgKyBzdWJleHAoXCIyWzAtNF1cIiArIERJR0lUJCQpICsgXCJ8XCIgKyBzdWJleHAoXCIxXCIgKyBESUdJVCQkICsgRElHSVQkJCkgKyBcInxcIiArIHN1YmV4cChcIlsxLTldXCIgKyBESUdJVCQkKSArIFwifFwiICsgRElHSVQkJCksXG4gICAgICAgIERFQ19PQ1RFVF9SRUxBWEVEJCA9IHN1YmV4cChzdWJleHAoXCIyNVswLTVdXCIpICsgXCJ8XCIgKyBzdWJleHAoXCIyWzAtNF1cIiArIERJR0lUJCQpICsgXCJ8XCIgKyBzdWJleHAoXCIxXCIgKyBESUdJVCQkICsgRElHSVQkJCkgKyBcInxcIiArIHN1YmV4cChcIjA/WzEtOV1cIiArIERJR0lUJCQpICsgXCJ8MD8wP1wiICsgRElHSVQkJCksXG4gICAgICAgIC8vcmVsYXhlZCBwYXJzaW5nIHJ1bGVzXG4gICAgSVBWNEFERFJFU1MkID0gc3ViZXhwKERFQ19PQ1RFVF9SRUxBWEVEJCArIFwiXFxcXC5cIiArIERFQ19PQ1RFVF9SRUxBWEVEJCArIFwiXFxcXC5cIiArIERFQ19PQ1RFVF9SRUxBWEVEJCArIFwiXFxcXC5cIiArIERFQ19PQ1RFVF9SRUxBWEVEJCksXG4gICAgICAgIEgxNiQgPSBzdWJleHAoSEVYRElHJCQgKyBcInsxLDR9XCIpLFxuICAgICAgICBMUzMyJCA9IHN1YmV4cChzdWJleHAoSDE2JCArIFwiXFxcXDpcIiArIEgxNiQpICsgXCJ8XCIgKyBJUFY0QUREUkVTUyQpLFxuICAgICAgICBJUFY2QUREUkVTUzEkID0gc3ViZXhwKHN1YmV4cChIMTYkICsgXCJcXFxcOlwiKSArIFwiezZ9XCIgKyBMUzMyJCksXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgNiggaDE2IFwiOlwiICkgbHMzMlxuICAgIElQVjZBRERSRVNTMiQgPSBzdWJleHAoXCJcXFxcOlxcXFw6XCIgKyBzdWJleHAoSDE2JCArIFwiXFxcXDpcIikgKyBcIns1fVwiICsgTFMzMiQpLFxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICBcIjo6XCIgNSggaDE2IFwiOlwiICkgbHMzMlxuICAgIElQVjZBRERSRVNTMyQgPSBzdWJleHAoc3ViZXhwKEgxNiQpICsgXCI/XFxcXDpcXFxcOlwiICsgc3ViZXhwKEgxNiQgKyBcIlxcXFw6XCIpICsgXCJ7NH1cIiArIExTMzIkKSxcbiAgICAgICAgLy9bICAgICAgICAgICAgICAgaDE2IF0gXCI6OlwiIDQoIGgxNiBcIjpcIiApIGxzMzJcbiAgICBJUFY2QUREUkVTUzQkID0gc3ViZXhwKHN1YmV4cChzdWJleHAoSDE2JCArIFwiXFxcXDpcIikgKyBcInswLDF9XCIgKyBIMTYkKSArIFwiP1xcXFw6XFxcXDpcIiArIHN1YmV4cChIMTYkICsgXCJcXFxcOlwiKSArIFwiezN9XCIgKyBMUzMyJCksXG4gICAgICAgIC8vWyAqMSggaDE2IFwiOlwiICkgaDE2IF0gXCI6OlwiIDMoIGgxNiBcIjpcIiApIGxzMzJcbiAgICBJUFY2QUREUkVTUzUkID0gc3ViZXhwKHN1YmV4cChzdWJleHAoSDE2JCArIFwiXFxcXDpcIikgKyBcInswLDJ9XCIgKyBIMTYkKSArIFwiP1xcXFw6XFxcXDpcIiArIHN1YmV4cChIMTYkICsgXCJcXFxcOlwiKSArIFwiezJ9XCIgKyBMUzMyJCksXG4gICAgICAgIC8vWyAqMiggaDE2IFwiOlwiICkgaDE2IF0gXCI6OlwiIDIoIGgxNiBcIjpcIiApIGxzMzJcbiAgICBJUFY2QUREUkVTUzYkID0gc3ViZXhwKHN1YmV4cChzdWJleHAoSDE2JCArIFwiXFxcXDpcIikgKyBcInswLDN9XCIgKyBIMTYkKSArIFwiP1xcXFw6XFxcXDpcIiArIEgxNiQgKyBcIlxcXFw6XCIgKyBMUzMyJCksXG4gICAgICAgIC8vWyAqMyggaDE2IFwiOlwiICkgaDE2IF0gXCI6OlwiICAgIGgxNiBcIjpcIiAgIGxzMzJcbiAgICBJUFY2QUREUkVTUzckID0gc3ViZXhwKHN1YmV4cChzdWJleHAoSDE2JCArIFwiXFxcXDpcIikgKyBcInswLDR9XCIgKyBIMTYkKSArIFwiP1xcXFw6XFxcXDpcIiArIExTMzIkKSxcbiAgICAgICAgLy9bICo0KCBoMTYgXCI6XCIgKSBoMTYgXSBcIjo6XCIgICAgICAgICAgICAgIGxzMzJcbiAgICBJUFY2QUREUkVTUzgkID0gc3ViZXhwKHN1YmV4cChzdWJleHAoSDE2JCArIFwiXFxcXDpcIikgKyBcInswLDV9XCIgKyBIMTYkKSArIFwiP1xcXFw6XFxcXDpcIiArIEgxNiQpLFxuICAgICAgICAvL1sgKjUoIGgxNiBcIjpcIiApIGgxNiBdIFwiOjpcIiAgICAgICAgICAgICAgaDE2XG4gICAgSVBWNkFERFJFU1M5JCA9IHN1YmV4cChzdWJleHAoc3ViZXhwKEgxNiQgKyBcIlxcXFw6XCIpICsgXCJ7MCw2fVwiICsgSDE2JCkgKyBcIj9cXFxcOlxcXFw6XCIpLFxuICAgICAgICAvL1sgKjYoIGgxNiBcIjpcIiApIGgxNiBdIFwiOjpcIlxuICAgIElQVjZBRERSRVNTJCA9IHN1YmV4cChbSVBWNkFERFJFU1MxJCwgSVBWNkFERFJFU1MyJCwgSVBWNkFERFJFU1MzJCwgSVBWNkFERFJFU1M0JCwgSVBWNkFERFJFU1M1JCwgSVBWNkFERFJFU1M2JCwgSVBWNkFERFJFU1M3JCwgSVBWNkFERFJFU1M4JCwgSVBWNkFERFJFU1M5JF0uam9pbihcInxcIikpLFxuICAgICAgICBaT05FSUQkID0gc3ViZXhwKHN1YmV4cChVTlJFU0VSVkVEJCQgKyBcInxcIiArIFBDVF9FTkNPREVEJCkgKyBcIitcIiksXG4gICAgICAgIC8vUkZDIDY4NzRcbiAgICBJUFY2QUREUlokID0gc3ViZXhwKElQVjZBRERSRVNTJCArIFwiXFxcXCUyNVwiICsgWk9ORUlEJCksXG4gICAgICAgIC8vUkZDIDY4NzRcbiAgICBJUFY2QUREUlpfUkVMQVhFRCQgPSBzdWJleHAoSVBWNkFERFJFU1MkICsgc3ViZXhwKFwiXFxcXCUyNXxcXFxcJSg/IVwiICsgSEVYRElHJCQgKyBcInsyfSlcIikgKyBaT05FSUQkKSxcbiAgICAgICAgLy9SRkMgNjg3NCwgd2l0aCByZWxheGVkIHBhcnNpbmcgcnVsZXNcbiAgICBJUFZGVVRVUkUkID0gc3ViZXhwKFwiW3ZWXVwiICsgSEVYRElHJCQgKyBcIitcXFxcLlwiICsgbWVyZ2UoVU5SRVNFUlZFRCQkLCBTVUJfREVMSU1TJCQsIFwiW1xcXFw6XVwiKSArIFwiK1wiKSxcbiAgICAgICAgSVBfTElURVJBTCQgPSBzdWJleHAoXCJcXFxcW1wiICsgc3ViZXhwKElQVjZBRERSWl9SRUxBWEVEJCArIFwifFwiICsgSVBWNkFERFJFU1MkICsgXCJ8XCIgKyBJUFZGVVRVUkUkKSArIFwiXFxcXF1cIiksXG4gICAgICAgIC8vUkZDIDY4NzRcbiAgICBSRUdfTkFNRSQgPSBzdWJleHAoc3ViZXhwKFBDVF9FTkNPREVEJCArIFwifFwiICsgbWVyZ2UoVU5SRVNFUlZFRCQkLCBTVUJfREVMSU1TJCQpKSArIFwiKlwiKSxcbiAgICAgICAgSE9TVCQgPSBzdWJleHAoSVBfTElURVJBTCQgKyBcInxcIiArIElQVjRBRERSRVNTJCArIFwiKD8hXCIgKyBSRUdfTkFNRSQgKyBcIilcIiArIFwifFwiICsgUkVHX05BTUUkKSxcbiAgICAgICAgUE9SVCQgPSBzdWJleHAoRElHSVQkJCArIFwiKlwiKSxcbiAgICAgICAgQVVUSE9SSVRZJCA9IHN1YmV4cChzdWJleHAoVVNFUklORk8kICsgXCJAXCIpICsgXCI/XCIgKyBIT1NUJCArIHN1YmV4cChcIlxcXFw6XCIgKyBQT1JUJCkgKyBcIj9cIiksXG4gICAgICAgIFBDSEFSJCA9IHN1YmV4cChQQ1RfRU5DT0RFRCQgKyBcInxcIiArIG1lcmdlKFVOUkVTRVJWRUQkJCwgU1VCX0RFTElNUyQkLCBcIltcXFxcOlxcXFxAXVwiKSksXG4gICAgICAgIFNFR01FTlQkID0gc3ViZXhwKFBDSEFSJCArIFwiKlwiKSxcbiAgICAgICAgU0VHTUVOVF9OWiQgPSBzdWJleHAoUENIQVIkICsgXCIrXCIpLFxuICAgICAgICBTRUdNRU5UX05aX05DJCA9IHN1YmV4cChzdWJleHAoUENUX0VOQ09ERUQkICsgXCJ8XCIgKyBtZXJnZShVTlJFU0VSVkVEJCQsIFNVQl9ERUxJTVMkJCwgXCJbXFxcXEBdXCIpKSArIFwiK1wiKSxcbiAgICAgICAgUEFUSF9BQkVNUFRZJCA9IHN1YmV4cChzdWJleHAoXCJcXFxcL1wiICsgU0VHTUVOVCQpICsgXCIqXCIpLFxuICAgICAgICBQQVRIX0FCU09MVVRFJCA9IHN1YmV4cChcIlxcXFwvXCIgKyBzdWJleHAoU0VHTUVOVF9OWiQgKyBQQVRIX0FCRU1QVFkkKSArIFwiP1wiKSxcbiAgICAgICAgLy9zaW1wbGlmaWVkXG4gICAgUEFUSF9OT1NDSEVNRSQgPSBzdWJleHAoU0VHTUVOVF9OWl9OQyQgKyBQQVRIX0FCRU1QVFkkKSxcbiAgICAgICAgLy9zaW1wbGlmaWVkXG4gICAgUEFUSF9ST09UTEVTUyQgPSBzdWJleHAoU0VHTUVOVF9OWiQgKyBQQVRIX0FCRU1QVFkkKSxcbiAgICAgICAgLy9zaW1wbGlmaWVkXG4gICAgUEFUSF9FTVBUWSQgPSBcIig/IVwiICsgUENIQVIkICsgXCIpXCIsXG4gICAgICAgIFBBVEgkID0gc3ViZXhwKFBBVEhfQUJFTVBUWSQgKyBcInxcIiArIFBBVEhfQUJTT0xVVEUkICsgXCJ8XCIgKyBQQVRIX05PU0NIRU1FJCArIFwifFwiICsgUEFUSF9ST09UTEVTUyQgKyBcInxcIiArIFBBVEhfRU1QVFkkKSxcbiAgICAgICAgUVVFUlkkID0gc3ViZXhwKHN1YmV4cChQQ0hBUiQgKyBcInxcIiArIG1lcmdlKFwiW1xcXFwvXFxcXD9dXCIsIElQUklWQVRFJCQpKSArIFwiKlwiKSxcbiAgICAgICAgRlJBR01FTlQkID0gc3ViZXhwKHN1YmV4cChQQ0hBUiQgKyBcInxbXFxcXC9cXFxcP11cIikgKyBcIipcIiksXG4gICAgICAgIEhJRVJfUEFSVCQgPSBzdWJleHAoc3ViZXhwKFwiXFxcXC9cXFxcL1wiICsgQVVUSE9SSVRZJCArIFBBVEhfQUJFTVBUWSQpICsgXCJ8XCIgKyBQQVRIX0FCU09MVVRFJCArIFwifFwiICsgUEFUSF9ST09UTEVTUyQgKyBcInxcIiArIFBBVEhfRU1QVFkkKSxcbiAgICAgICAgVVJJJCA9IHN1YmV4cChTQ0hFTUUkICsgXCJcXFxcOlwiICsgSElFUl9QQVJUJCArIHN1YmV4cChcIlxcXFw/XCIgKyBRVUVSWSQpICsgXCI/XCIgKyBzdWJleHAoXCJcXFxcI1wiICsgRlJBR01FTlQkKSArIFwiP1wiKSxcbiAgICAgICAgUkVMQVRJVkVfUEFSVCQgPSBzdWJleHAoc3ViZXhwKFwiXFxcXC9cXFxcL1wiICsgQVVUSE9SSVRZJCArIFBBVEhfQUJFTVBUWSQpICsgXCJ8XCIgKyBQQVRIX0FCU09MVVRFJCArIFwifFwiICsgUEFUSF9OT1NDSEVNRSQgKyBcInxcIiArIFBBVEhfRU1QVFkkKSxcbiAgICAgICAgUkVMQVRJVkUkID0gc3ViZXhwKFJFTEFUSVZFX1BBUlQkICsgc3ViZXhwKFwiXFxcXD9cIiArIFFVRVJZJCkgKyBcIj9cIiArIHN1YmV4cChcIlxcXFwjXCIgKyBGUkFHTUVOVCQpICsgXCI/XCIpLFxuICAgICAgICBVUklfUkVGRVJFTkNFJCA9IHN1YmV4cChVUkkkICsgXCJ8XCIgKyBSRUxBVElWRSQpLFxuICAgICAgICBBQlNPTFVURV9VUkkkID0gc3ViZXhwKFNDSEVNRSQgKyBcIlxcXFw6XCIgKyBISUVSX1BBUlQkICsgc3ViZXhwKFwiXFxcXD9cIiArIFFVRVJZJCkgKyBcIj9cIiksXG4gICAgICAgIEdFTkVSSUNfUkVGJCA9IFwiXihcIiArIFNDSEVNRSQgKyBcIilcXFxcOlwiICsgc3ViZXhwKHN1YmV4cChcIlxcXFwvXFxcXC8oXCIgKyBzdWJleHAoXCIoXCIgKyBVU0VSSU5GTyQgKyBcIilAXCIpICsgXCI/KFwiICsgSE9TVCQgKyBcIilcIiArIHN1YmV4cChcIlxcXFw6KFwiICsgUE9SVCQgKyBcIilcIikgKyBcIj8pXCIpICsgXCI/KFwiICsgUEFUSF9BQkVNUFRZJCArIFwifFwiICsgUEFUSF9BQlNPTFVURSQgKyBcInxcIiArIFBBVEhfUk9PVExFU1MkICsgXCJ8XCIgKyBQQVRIX0VNUFRZJCArIFwiKVwiKSArIHN1YmV4cChcIlxcXFw/KFwiICsgUVVFUlkkICsgXCIpXCIpICsgXCI/XCIgKyBzdWJleHAoXCJcXFxcIyhcIiArIEZSQUdNRU5UJCArIFwiKVwiKSArIFwiPyRcIixcbiAgICAgICAgUkVMQVRJVkVfUkVGJCA9IFwiXigpezB9XCIgKyBzdWJleHAoc3ViZXhwKFwiXFxcXC9cXFxcLyhcIiArIHN1YmV4cChcIihcIiArIFVTRVJJTkZPJCArIFwiKUBcIikgKyBcIj8oXCIgKyBIT1NUJCArIFwiKVwiICsgc3ViZXhwKFwiXFxcXDooXCIgKyBQT1JUJCArIFwiKVwiKSArIFwiPylcIikgKyBcIj8oXCIgKyBQQVRIX0FCRU1QVFkkICsgXCJ8XCIgKyBQQVRIX0FCU09MVVRFJCArIFwifFwiICsgUEFUSF9OT1NDSEVNRSQgKyBcInxcIiArIFBBVEhfRU1QVFkkICsgXCIpXCIpICsgc3ViZXhwKFwiXFxcXD8oXCIgKyBRVUVSWSQgKyBcIilcIikgKyBcIj9cIiArIHN1YmV4cChcIlxcXFwjKFwiICsgRlJBR01FTlQkICsgXCIpXCIpICsgXCI/JFwiLFxuICAgICAgICBBQlNPTFVURV9SRUYkID0gXCJeKFwiICsgU0NIRU1FJCArIFwiKVxcXFw6XCIgKyBzdWJleHAoc3ViZXhwKFwiXFxcXC9cXFxcLyhcIiArIHN1YmV4cChcIihcIiArIFVTRVJJTkZPJCArIFwiKUBcIikgKyBcIj8oXCIgKyBIT1NUJCArIFwiKVwiICsgc3ViZXhwKFwiXFxcXDooXCIgKyBQT1JUJCArIFwiKVwiKSArIFwiPylcIikgKyBcIj8oXCIgKyBQQVRIX0FCRU1QVFkkICsgXCJ8XCIgKyBQQVRIX0FCU09MVVRFJCArIFwifFwiICsgUEFUSF9ST09UTEVTUyQgKyBcInxcIiArIFBBVEhfRU1QVFkkICsgXCIpXCIpICsgc3ViZXhwKFwiXFxcXD8oXCIgKyBRVUVSWSQgKyBcIilcIikgKyBcIj8kXCIsXG4gICAgICAgIFNBTUVET0NfUkVGJCA9IFwiXlwiICsgc3ViZXhwKFwiXFxcXCMoXCIgKyBGUkFHTUVOVCQgKyBcIilcIikgKyBcIj8kXCIsXG4gICAgICAgIEFVVEhPUklUWV9SRUYkID0gXCJeXCIgKyBzdWJleHAoXCIoXCIgKyBVU0VSSU5GTyQgKyBcIilAXCIpICsgXCI/KFwiICsgSE9TVCQgKyBcIilcIiArIHN1YmV4cChcIlxcXFw6KFwiICsgUE9SVCQgKyBcIilcIikgKyBcIj8kXCI7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgTk9UX1NDSEVNRTogbmV3IFJlZ0V4cChtZXJnZShcIlteXVwiLCBBTFBIQSQkLCBESUdJVCQkLCBcIltcXFxcK1xcXFwtXFxcXC5dXCIpLCBcImdcIiksXG4gICAgICAgIE5PVF9VU0VSSU5GTzogbmV3IFJlZ0V4cChtZXJnZShcIlteXFxcXCVcXFxcOl1cIiwgVU5SRVNFUlZFRCQkLCBTVUJfREVMSU1TJCQpLCBcImdcIiksXG4gICAgICAgIE5PVF9IT1NUOiBuZXcgUmVnRXhwKG1lcmdlKFwiW15cXFxcJVxcXFxbXFxcXF1cXFxcOl1cIiwgVU5SRVNFUlZFRCQkLCBTVUJfREVMSU1TJCQpLCBcImdcIiksXG4gICAgICAgIE5PVF9QQVRIOiBuZXcgUmVnRXhwKG1lcmdlKFwiW15cXFxcJVxcXFwvXFxcXDpcXFxcQF1cIiwgVU5SRVNFUlZFRCQkLCBTVUJfREVMSU1TJCQpLCBcImdcIiksXG4gICAgICAgIE5PVF9QQVRIX05PU0NIRU1FOiBuZXcgUmVnRXhwKG1lcmdlKFwiW15cXFxcJVxcXFwvXFxcXEBdXCIsIFVOUkVTRVJWRUQkJCwgU1VCX0RFTElNUyQkKSwgXCJnXCIpLFxuICAgICAgICBOT1RfUVVFUlk6IG5ldyBSZWdFeHAobWVyZ2UoXCJbXlxcXFwlXVwiLCBVTlJFU0VSVkVEJCQsIFNVQl9ERUxJTVMkJCwgXCJbXFxcXDpcXFxcQFxcXFwvXFxcXD9dXCIsIElQUklWQVRFJCQpLCBcImdcIiksXG4gICAgICAgIE5PVF9GUkFHTUVOVDogbmV3IFJlZ0V4cChtZXJnZShcIlteXFxcXCVdXCIsIFVOUkVTRVJWRUQkJCwgU1VCX0RFTElNUyQkLCBcIltcXFxcOlxcXFxAXFxcXC9cXFxcP11cIiksIFwiZ1wiKSxcbiAgICAgICAgRVNDQVBFOiBuZXcgUmVnRXhwKG1lcmdlKFwiW15dXCIsIFVOUkVTRVJWRUQkJCwgU1VCX0RFTElNUyQkKSwgXCJnXCIpLFxuICAgICAgICBVTlJFU0VSVkVEOiBuZXcgUmVnRXhwKFVOUkVTRVJWRUQkJCwgXCJnXCIpLFxuICAgICAgICBPVEhFUl9DSEFSUzogbmV3IFJlZ0V4cChtZXJnZShcIlteXFxcXCVdXCIsIFVOUkVTRVJWRUQkJCwgUkVTRVJWRUQkJCksIFwiZ1wiKSxcbiAgICAgICAgUENUX0VOQ09ERUQ6IG5ldyBSZWdFeHAoUENUX0VOQ09ERUQkLCBcImdcIiksXG4gICAgICAgIElQVjRBRERSRVNTOiBuZXcgUmVnRXhwKFwiXihcIiArIElQVjRBRERSRVNTJCArIFwiKSRcIiksXG4gICAgICAgIElQVjZBRERSRVNTOiBuZXcgUmVnRXhwKFwiXlxcXFxbPyhcIiArIElQVjZBRERSRVNTJCArIFwiKVwiICsgc3ViZXhwKHN1YmV4cChcIlxcXFwlMjV8XFxcXCUoPyFcIiArIEhFWERJRyQkICsgXCJ7Mn0pXCIpICsgXCIoXCIgKyBaT05FSUQkICsgXCIpXCIpICsgXCI/XFxcXF0/JFwiKSAvL1JGQyA2ODc0LCB3aXRoIHJlbGF4ZWQgcGFyc2luZyBydWxlc1xuICAgIH07XG59XG52YXIgVVJJX1BST1RPQ09MID0gYnVpbGRFeHBzKGZhbHNlKTtcblxudmFyIElSSV9QUk9UT0NPTCA9IGJ1aWxkRXhwcyh0cnVlKTtcblxudmFyIHNsaWNlZFRvQXJyYXkgPSBmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIHNsaWNlSXRlcmF0b3IoYXJyLCBpKSB7XG4gICAgdmFyIF9hcnIgPSBbXTtcbiAgICB2YXIgX24gPSB0cnVlO1xuICAgIHZhciBfZCA9IGZhbHNlO1xuICAgIHZhciBfZSA9IHVuZGVmaW5lZDtcblxuICAgIHRyeSB7XG4gICAgICBmb3IgKHZhciBfaSA9IGFycltTeW1ib2wuaXRlcmF0b3JdKCksIF9zOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7XG4gICAgICAgIF9hcnIucHVzaChfcy52YWx1ZSk7XG5cbiAgICAgICAgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgX2QgPSB0cnVlO1xuICAgICAgX2UgPSBlcnI7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0pIF9pW1wicmV0dXJuXCJdKCk7XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICBpZiAoX2QpIHRocm93IF9lO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBfYXJyO1xuICB9XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIChhcnIsIGkpIHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSB7XG4gICAgICByZXR1cm4gYXJyO1xuICAgIH0gZWxzZSBpZiAoU3ltYm9sLml0ZXJhdG9yIGluIE9iamVjdChhcnIpKSB7XG4gICAgICByZXR1cm4gc2xpY2VJdGVyYXRvcihhcnIsIGkpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZVwiKTtcbiAgICB9XG4gIH07XG59KCk7XG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cbnZhciB0b0NvbnN1bWFibGVBcnJheSA9IGZ1bmN0aW9uIChhcnIpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkge1xuICAgIGZvciAodmFyIGkgPSAwLCBhcnIyID0gQXJyYXkoYXJyLmxlbmd0aCk7IGkgPCBhcnIubGVuZ3RoOyBpKyspIGFycjJbaV0gPSBhcnJbaV07XG5cbiAgICByZXR1cm4gYXJyMjtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gQXJyYXkuZnJvbShhcnIpO1xuICB9XG59O1xuXG4vKiogSGlnaGVzdCBwb3NpdGl2ZSBzaWduZWQgMzItYml0IGZsb2F0IHZhbHVlICovXG5cbnZhciBtYXhJbnQgPSAyMTQ3NDgzNjQ3OyAvLyBha2EuIDB4N0ZGRkZGRkYgb3IgMl4zMS0xXG5cbi8qKiBCb290c3RyaW5nIHBhcmFtZXRlcnMgKi9cbnZhciBiYXNlID0gMzY7XG52YXIgdE1pbiA9IDE7XG52YXIgdE1heCA9IDI2O1xudmFyIHNrZXcgPSAzODtcbnZhciBkYW1wID0gNzAwO1xudmFyIGluaXRpYWxCaWFzID0gNzI7XG52YXIgaW5pdGlhbE4gPSAxMjg7IC8vIDB4ODBcbnZhciBkZWxpbWl0ZXIgPSAnLSc7IC8vICdcXHgyRCdcblxuLyoqIFJlZ3VsYXIgZXhwcmVzc2lvbnMgKi9cbnZhciByZWdleFB1bnljb2RlID0gL154bi0tLztcbnZhciByZWdleE5vbkFTQ0lJID0gL1teXFwwLVxceDdFXS87IC8vIG5vbi1BU0NJSSBjaGFyc1xudmFyIHJlZ2V4U2VwYXJhdG9ycyA9IC9bXFx4MkVcXHUzMDAyXFx1RkYwRVxcdUZGNjFdL2c7IC8vIFJGQyAzNDkwIHNlcGFyYXRvcnNcblxuLyoqIEVycm9yIG1lc3NhZ2VzICovXG52YXIgZXJyb3JzID0ge1xuXHQnb3ZlcmZsb3cnOiAnT3ZlcmZsb3c6IGlucHV0IG5lZWRzIHdpZGVyIGludGVnZXJzIHRvIHByb2Nlc3MnLFxuXHQnbm90LWJhc2ljJzogJ0lsbGVnYWwgaW5wdXQgPj0gMHg4MCAobm90IGEgYmFzaWMgY29kZSBwb2ludCknLFxuXHQnaW52YWxpZC1pbnB1dCc6ICdJbnZhbGlkIGlucHV0J1xufTtcblxuLyoqIENvbnZlbmllbmNlIHNob3J0Y3V0cyAqL1xudmFyIGJhc2VNaW51c1RNaW4gPSBiYXNlIC0gdE1pbjtcbnZhciBmbG9vciA9IE1hdGguZmxvb3I7XG52YXIgc3RyaW5nRnJvbUNoYXJDb2RlID0gU3RyaW5nLmZyb21DaGFyQ29kZTtcblxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5cbi8qKlxuICogQSBnZW5lcmljIGVycm9yIHV0aWxpdHkgZnVuY3Rpb24uXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtTdHJpbmd9IHR5cGUgVGhlIGVycm9yIHR5cGUuXG4gKiBAcmV0dXJucyB7RXJyb3J9IFRocm93cyBhIGBSYW5nZUVycm9yYCB3aXRoIHRoZSBhcHBsaWNhYmxlIGVycm9yIG1lc3NhZ2UuXG4gKi9cbmZ1bmN0aW9uIGVycm9yJDEodHlwZSkge1xuXHR0aHJvdyBuZXcgUmFuZ2VFcnJvcihlcnJvcnNbdHlwZV0pO1xufVxuXG4vKipcbiAqIEEgZ2VuZXJpYyBgQXJyYXkjbWFwYCB1dGlsaXR5IGZ1bmN0aW9uLlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IGFycmF5IFRoZSBhcnJheSB0byBpdGVyYXRlIG92ZXIuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFjayBUaGUgZnVuY3Rpb24gdGhhdCBnZXRzIGNhbGxlZCBmb3IgZXZlcnkgYXJyYXlcbiAqIGl0ZW0uXG4gKiBAcmV0dXJucyB7QXJyYXl9IEEgbmV3IGFycmF5IG9mIHZhbHVlcyByZXR1cm5lZCBieSB0aGUgY2FsbGJhY2sgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIG1hcChhcnJheSwgZm4pIHtcblx0dmFyIHJlc3VsdCA9IFtdO1xuXHR2YXIgbGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuXHR3aGlsZSAobGVuZ3RoLS0pIHtcblx0XHRyZXN1bHRbbGVuZ3RoXSA9IGZuKGFycmF5W2xlbmd0aF0pO1xuXHR9XG5cdHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogQSBzaW1wbGUgYEFycmF5I21hcGAtbGlrZSB3cmFwcGVyIHRvIHdvcmsgd2l0aCBkb21haW4gbmFtZSBzdHJpbmdzIG9yIGVtYWlsXG4gKiBhZGRyZXNzZXMuXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtTdHJpbmd9IGRvbWFpbiBUaGUgZG9tYWluIG5hbWUgb3IgZW1haWwgYWRkcmVzcy5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrIFRoZSBmdW5jdGlvbiB0aGF0IGdldHMgY2FsbGVkIGZvciBldmVyeVxuICogY2hhcmFjdGVyLlxuICogQHJldHVybnMge0FycmF5fSBBIG5ldyBzdHJpbmcgb2YgY2hhcmFjdGVycyByZXR1cm5lZCBieSB0aGUgY2FsbGJhY2tcbiAqIGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBtYXBEb21haW4oc3RyaW5nLCBmbikge1xuXHR2YXIgcGFydHMgPSBzdHJpbmcuc3BsaXQoJ0AnKTtcblx0dmFyIHJlc3VsdCA9ICcnO1xuXHRpZiAocGFydHMubGVuZ3RoID4gMSkge1xuXHRcdC8vIEluIGVtYWlsIGFkZHJlc3Nlcywgb25seSB0aGUgZG9tYWluIG5hbWUgc2hvdWxkIGJlIHB1bnljb2RlZC4gTGVhdmVcblx0XHQvLyB0aGUgbG9jYWwgcGFydCAoaS5lLiBldmVyeXRoaW5nIHVwIHRvIGBAYCkgaW50YWN0LlxuXHRcdHJlc3VsdCA9IHBhcnRzWzBdICsgJ0AnO1xuXHRcdHN0cmluZyA9IHBhcnRzWzFdO1xuXHR9XG5cdC8vIEF2b2lkIGBzcGxpdChyZWdleClgIGZvciBJRTggY29tcGF0aWJpbGl0eS4gU2VlICMxNy5cblx0c3RyaW5nID0gc3RyaW5nLnJlcGxhY2UocmVnZXhTZXBhcmF0b3JzLCAnXFx4MkUnKTtcblx0dmFyIGxhYmVscyA9IHN0cmluZy5zcGxpdCgnLicpO1xuXHR2YXIgZW5jb2RlZCA9IG1hcChsYWJlbHMsIGZuKS5qb2luKCcuJyk7XG5cdHJldHVybiByZXN1bHQgKyBlbmNvZGVkO1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYW4gYXJyYXkgY29udGFpbmluZyB0aGUgbnVtZXJpYyBjb2RlIHBvaW50cyBvZiBlYWNoIFVuaWNvZGVcbiAqIGNoYXJhY3RlciBpbiB0aGUgc3RyaW5nLiBXaGlsZSBKYXZhU2NyaXB0IHVzZXMgVUNTLTIgaW50ZXJuYWxseSxcbiAqIHRoaXMgZnVuY3Rpb24gd2lsbCBjb252ZXJ0IGEgcGFpciBvZiBzdXJyb2dhdGUgaGFsdmVzIChlYWNoIG9mIHdoaWNoXG4gKiBVQ1MtMiBleHBvc2VzIGFzIHNlcGFyYXRlIGNoYXJhY3RlcnMpIGludG8gYSBzaW5nbGUgY29kZSBwb2ludCxcbiAqIG1hdGNoaW5nIFVURi0xNi5cbiAqIEBzZWUgYHB1bnljb2RlLnVjczIuZW5jb2RlYFxuICogQHNlZSA8aHR0cHM6Ly9tYXRoaWFzYnluZW5zLmJlL25vdGVzL2phdmFzY3JpcHQtZW5jb2Rpbmc+XG4gKiBAbWVtYmVyT2YgcHVueWNvZGUudWNzMlxuICogQG5hbWUgZGVjb2RlXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RyaW5nIFRoZSBVbmljb2RlIGlucHV0IHN0cmluZyAoVUNTLTIpLlxuICogQHJldHVybnMge0FycmF5fSBUaGUgbmV3IGFycmF5IG9mIGNvZGUgcG9pbnRzLlxuICovXG5mdW5jdGlvbiB1Y3MyZGVjb2RlKHN0cmluZykge1xuXHR2YXIgb3V0cHV0ID0gW107XG5cdHZhciBjb3VudGVyID0gMDtcblx0dmFyIGxlbmd0aCA9IHN0cmluZy5sZW5ndGg7XG5cdHdoaWxlIChjb3VudGVyIDwgbGVuZ3RoKSB7XG5cdFx0dmFyIHZhbHVlID0gc3RyaW5nLmNoYXJDb2RlQXQoY291bnRlcisrKTtcblx0XHRpZiAodmFsdWUgPj0gMHhEODAwICYmIHZhbHVlIDw9IDB4REJGRiAmJiBjb3VudGVyIDwgbGVuZ3RoKSB7XG5cdFx0XHQvLyBJdCdzIGEgaGlnaCBzdXJyb2dhdGUsIGFuZCB0aGVyZSBpcyBhIG5leHQgY2hhcmFjdGVyLlxuXHRcdFx0dmFyIGV4dHJhID0gc3RyaW5nLmNoYXJDb2RlQXQoY291bnRlcisrKTtcblx0XHRcdGlmICgoZXh0cmEgJiAweEZDMDApID09IDB4REMwMCkge1xuXHRcdFx0XHQvLyBMb3cgc3Vycm9nYXRlLlxuXHRcdFx0XHRvdXRwdXQucHVzaCgoKHZhbHVlICYgMHgzRkYpIDw8IDEwKSArIChleHRyYSAmIDB4M0ZGKSArIDB4MTAwMDApO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Ly8gSXQncyBhbiB1bm1hdGNoZWQgc3Vycm9nYXRlOyBvbmx5IGFwcGVuZCB0aGlzIGNvZGUgdW5pdCwgaW4gY2FzZSB0aGVcblx0XHRcdFx0Ly8gbmV4dCBjb2RlIHVuaXQgaXMgdGhlIGhpZ2ggc3Vycm9nYXRlIG9mIGEgc3Vycm9nYXRlIHBhaXIuXG5cdFx0XHRcdG91dHB1dC5wdXNoKHZhbHVlKTtcblx0XHRcdFx0Y291bnRlci0tO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRvdXRwdXQucHVzaCh2YWx1ZSk7XG5cdFx0fVxuXHR9XG5cdHJldHVybiBvdXRwdXQ7XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIHN0cmluZyBiYXNlZCBvbiBhbiBhcnJheSBvZiBudW1lcmljIGNvZGUgcG9pbnRzLlxuICogQHNlZSBgcHVueWNvZGUudWNzMi5kZWNvZGVgXG4gKiBAbWVtYmVyT2YgcHVueWNvZGUudWNzMlxuICogQG5hbWUgZW5jb2RlXG4gKiBAcGFyYW0ge0FycmF5fSBjb2RlUG9pbnRzIFRoZSBhcnJheSBvZiBudW1lcmljIGNvZGUgcG9pbnRzLlxuICogQHJldHVybnMge1N0cmluZ30gVGhlIG5ldyBVbmljb2RlIHN0cmluZyAoVUNTLTIpLlxuICovXG52YXIgdWNzMmVuY29kZSA9IGZ1bmN0aW9uIHVjczJlbmNvZGUoYXJyYXkpIHtcblx0cmV0dXJuIFN0cmluZy5mcm9tQ29kZVBvaW50LmFwcGx5KFN0cmluZywgdG9Db25zdW1hYmxlQXJyYXkoYXJyYXkpKTtcbn07XG5cbi8qKlxuICogQ29udmVydHMgYSBiYXNpYyBjb2RlIHBvaW50IGludG8gYSBkaWdpdC9pbnRlZ2VyLlxuICogQHNlZSBgZGlnaXRUb0Jhc2ljKClgXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtOdW1iZXJ9IGNvZGVQb2ludCBUaGUgYmFzaWMgbnVtZXJpYyBjb2RlIHBvaW50IHZhbHVlLlxuICogQHJldHVybnMge051bWJlcn0gVGhlIG51bWVyaWMgdmFsdWUgb2YgYSBiYXNpYyBjb2RlIHBvaW50IChmb3IgdXNlIGluXG4gKiByZXByZXNlbnRpbmcgaW50ZWdlcnMpIGluIHRoZSByYW5nZSBgMGAgdG8gYGJhc2UgLSAxYCwgb3IgYGJhc2VgIGlmXG4gKiB0aGUgY29kZSBwb2ludCBkb2VzIG5vdCByZXByZXNlbnQgYSB2YWx1ZS5cbiAqL1xudmFyIGJhc2ljVG9EaWdpdCA9IGZ1bmN0aW9uIGJhc2ljVG9EaWdpdChjb2RlUG9pbnQpIHtcblx0aWYgKGNvZGVQb2ludCAtIDB4MzAgPCAweDBBKSB7XG5cdFx0cmV0dXJuIGNvZGVQb2ludCAtIDB4MTY7XG5cdH1cblx0aWYgKGNvZGVQb2ludCAtIDB4NDEgPCAweDFBKSB7XG5cdFx0cmV0dXJuIGNvZGVQb2ludCAtIDB4NDE7XG5cdH1cblx0aWYgKGNvZGVQb2ludCAtIDB4NjEgPCAweDFBKSB7XG5cdFx0cmV0dXJuIGNvZGVQb2ludCAtIDB4NjE7XG5cdH1cblx0cmV0dXJuIGJhc2U7XG59O1xuXG4vKipcbiAqIENvbnZlcnRzIGEgZGlnaXQvaW50ZWdlciBpbnRvIGEgYmFzaWMgY29kZSBwb2ludC5cbiAqIEBzZWUgYGJhc2ljVG9EaWdpdCgpYFxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7TnVtYmVyfSBkaWdpdCBUaGUgbnVtZXJpYyB2YWx1ZSBvZiBhIGJhc2ljIGNvZGUgcG9pbnQuXG4gKiBAcmV0dXJucyB7TnVtYmVyfSBUaGUgYmFzaWMgY29kZSBwb2ludCB3aG9zZSB2YWx1ZSAod2hlbiB1c2VkIGZvclxuICogcmVwcmVzZW50aW5nIGludGVnZXJzKSBpcyBgZGlnaXRgLCB3aGljaCBuZWVkcyB0byBiZSBpbiB0aGUgcmFuZ2VcbiAqIGAwYCB0byBgYmFzZSAtIDFgLiBJZiBgZmxhZ2AgaXMgbm9uLXplcm8sIHRoZSB1cHBlcmNhc2UgZm9ybSBpc1xuICogdXNlZDsgZWxzZSwgdGhlIGxvd2VyY2FzZSBmb3JtIGlzIHVzZWQuIFRoZSBiZWhhdmlvciBpcyB1bmRlZmluZWRcbiAqIGlmIGBmbGFnYCBpcyBub24temVybyBhbmQgYGRpZ2l0YCBoYXMgbm8gdXBwZXJjYXNlIGZvcm0uXG4gKi9cbnZhciBkaWdpdFRvQmFzaWMgPSBmdW5jdGlvbiBkaWdpdFRvQmFzaWMoZGlnaXQsIGZsYWcpIHtcblx0Ly8gIDAuLjI1IG1hcCB0byBBU0NJSSBhLi56IG9yIEEuLlpcblx0Ly8gMjYuLjM1IG1hcCB0byBBU0NJSSAwLi45XG5cdHJldHVybiBkaWdpdCArIDIyICsgNzUgKiAoZGlnaXQgPCAyNikgLSAoKGZsYWcgIT0gMCkgPDwgNSk7XG59O1xuXG4vKipcbiAqIEJpYXMgYWRhcHRhdGlvbiBmdW5jdGlvbiBhcyBwZXIgc2VjdGlvbiAzLjQgb2YgUkZDIDM0OTIuXG4gKiBodHRwczovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjMzQ5MiNzZWN0aW9uLTMuNFxuICogQHByaXZhdGVcbiAqL1xudmFyIGFkYXB0ID0gZnVuY3Rpb24gYWRhcHQoZGVsdGEsIG51bVBvaW50cywgZmlyc3RUaW1lKSB7XG5cdHZhciBrID0gMDtcblx0ZGVsdGEgPSBmaXJzdFRpbWUgPyBmbG9vcihkZWx0YSAvIGRhbXApIDogZGVsdGEgPj4gMTtcblx0ZGVsdGEgKz0gZmxvb3IoZGVsdGEgLyBudW1Qb2ludHMpO1xuXHRmb3IgKDsgLyogbm8gaW5pdGlhbGl6YXRpb24gKi9kZWx0YSA+IGJhc2VNaW51c1RNaW4gKiB0TWF4ID4+IDE7IGsgKz0gYmFzZSkge1xuXHRcdGRlbHRhID0gZmxvb3IoZGVsdGEgLyBiYXNlTWludXNUTWluKTtcblx0fVxuXHRyZXR1cm4gZmxvb3IoayArIChiYXNlTWludXNUTWluICsgMSkgKiBkZWx0YSAvIChkZWx0YSArIHNrZXcpKTtcbn07XG5cbi8qKlxuICogQ29udmVydHMgYSBQdW55Y29kZSBzdHJpbmcgb2YgQVNDSUktb25seSBzeW1ib2xzIHRvIGEgc3RyaW5nIG9mIFVuaWNvZGVcbiAqIHN5bWJvbHMuXG4gKiBAbWVtYmVyT2YgcHVueWNvZGVcbiAqIEBwYXJhbSB7U3RyaW5nfSBpbnB1dCBUaGUgUHVueWNvZGUgc3RyaW5nIG9mIEFTQ0lJLW9ubHkgc3ltYm9scy5cbiAqIEByZXR1cm5zIHtTdHJpbmd9IFRoZSByZXN1bHRpbmcgc3RyaW5nIG9mIFVuaWNvZGUgc3ltYm9scy5cbiAqL1xudmFyIGRlY29kZSA9IGZ1bmN0aW9uIGRlY29kZShpbnB1dCkge1xuXHQvLyBEb24ndCB1c2UgVUNTLTIuXG5cdHZhciBvdXRwdXQgPSBbXTtcblx0dmFyIGlucHV0TGVuZ3RoID0gaW5wdXQubGVuZ3RoO1xuXHR2YXIgaSA9IDA7XG5cdHZhciBuID0gaW5pdGlhbE47XG5cdHZhciBiaWFzID0gaW5pdGlhbEJpYXM7XG5cblx0Ly8gSGFuZGxlIHRoZSBiYXNpYyBjb2RlIHBvaW50czogbGV0IGBiYXNpY2AgYmUgdGhlIG51bWJlciBvZiBpbnB1dCBjb2RlXG5cdC8vIHBvaW50cyBiZWZvcmUgdGhlIGxhc3QgZGVsaW1pdGVyLCBvciBgMGAgaWYgdGhlcmUgaXMgbm9uZSwgdGhlbiBjb3B5XG5cdC8vIHRoZSBmaXJzdCBiYXNpYyBjb2RlIHBvaW50cyB0byB0aGUgb3V0cHV0LlxuXG5cdHZhciBiYXNpYyA9IGlucHV0Lmxhc3RJbmRleE9mKGRlbGltaXRlcik7XG5cdGlmIChiYXNpYyA8IDApIHtcblx0XHRiYXNpYyA9IDA7XG5cdH1cblxuXHRmb3IgKHZhciBqID0gMDsgaiA8IGJhc2ljOyArK2opIHtcblx0XHQvLyBpZiBpdCdzIG5vdCBhIGJhc2ljIGNvZGUgcG9pbnRcblx0XHRpZiAoaW5wdXQuY2hhckNvZGVBdChqKSA+PSAweDgwKSB7XG5cdFx0XHRlcnJvciQxKCdub3QtYmFzaWMnKTtcblx0XHR9XG5cdFx0b3V0cHV0LnB1c2goaW5wdXQuY2hhckNvZGVBdChqKSk7XG5cdH1cblxuXHQvLyBNYWluIGRlY29kaW5nIGxvb3A6IHN0YXJ0IGp1c3QgYWZ0ZXIgdGhlIGxhc3QgZGVsaW1pdGVyIGlmIGFueSBiYXNpYyBjb2RlXG5cdC8vIHBvaW50cyB3ZXJlIGNvcGllZDsgc3RhcnQgYXQgdGhlIGJlZ2lubmluZyBvdGhlcndpc2UuXG5cblx0Zm9yICh2YXIgaW5kZXggPSBiYXNpYyA+IDAgPyBiYXNpYyArIDEgOiAwOyBpbmRleCA8IGlucHV0TGVuZ3RoOykgLyogbm8gZmluYWwgZXhwcmVzc2lvbiAqL3tcblxuXHRcdC8vIGBpbmRleGAgaXMgdGhlIGluZGV4IG9mIHRoZSBuZXh0IGNoYXJhY3RlciB0byBiZSBjb25zdW1lZC5cblx0XHQvLyBEZWNvZGUgYSBnZW5lcmFsaXplZCB2YXJpYWJsZS1sZW5ndGggaW50ZWdlciBpbnRvIGBkZWx0YWAsXG5cdFx0Ly8gd2hpY2ggZ2V0cyBhZGRlZCB0byBgaWAuIFRoZSBvdmVyZmxvdyBjaGVja2luZyBpcyBlYXNpZXJcblx0XHQvLyBpZiB3ZSBpbmNyZWFzZSBgaWAgYXMgd2UgZ28sIHRoZW4gc3VidHJhY3Qgb2ZmIGl0cyBzdGFydGluZ1xuXHRcdC8vIHZhbHVlIGF0IHRoZSBlbmQgdG8gb2J0YWluIGBkZWx0YWAuXG5cdFx0dmFyIG9sZGkgPSBpO1xuXHRcdGZvciAodmFyIHcgPSAxLCBrID0gYmFzZTs7IC8qIG5vIGNvbmRpdGlvbiAqL2sgKz0gYmFzZSkge1xuXG5cdFx0XHRpZiAoaW5kZXggPj0gaW5wdXRMZW5ndGgpIHtcblx0XHRcdFx0ZXJyb3IkMSgnaW52YWxpZC1pbnB1dCcpO1xuXHRcdFx0fVxuXG5cdFx0XHR2YXIgZGlnaXQgPSBiYXNpY1RvRGlnaXQoaW5wdXQuY2hhckNvZGVBdChpbmRleCsrKSk7XG5cblx0XHRcdGlmIChkaWdpdCA+PSBiYXNlIHx8IGRpZ2l0ID4gZmxvb3IoKG1heEludCAtIGkpIC8gdykpIHtcblx0XHRcdFx0ZXJyb3IkMSgnb3ZlcmZsb3cnKTtcblx0XHRcdH1cblxuXHRcdFx0aSArPSBkaWdpdCAqIHc7XG5cdFx0XHR2YXIgdCA9IGsgPD0gYmlhcyA/IHRNaW4gOiBrID49IGJpYXMgKyB0TWF4ID8gdE1heCA6IGsgLSBiaWFzO1xuXG5cdFx0XHRpZiAoZGlnaXQgPCB0KSB7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXG5cdFx0XHR2YXIgYmFzZU1pbnVzVCA9IGJhc2UgLSB0O1xuXHRcdFx0aWYgKHcgPiBmbG9vcihtYXhJbnQgLyBiYXNlTWludXNUKSkge1xuXHRcdFx0XHRlcnJvciQxKCdvdmVyZmxvdycpO1xuXHRcdFx0fVxuXG5cdFx0XHR3ICo9IGJhc2VNaW51c1Q7XG5cdFx0fVxuXG5cdFx0dmFyIG91dCA9IG91dHB1dC5sZW5ndGggKyAxO1xuXHRcdGJpYXMgPSBhZGFwdChpIC0gb2xkaSwgb3V0LCBvbGRpID09IDApO1xuXG5cdFx0Ly8gYGlgIHdhcyBzdXBwb3NlZCB0byB3cmFwIGFyb3VuZCBmcm9tIGBvdXRgIHRvIGAwYCxcblx0XHQvLyBpbmNyZW1lbnRpbmcgYG5gIGVhY2ggdGltZSwgc28gd2UnbGwgZml4IHRoYXQgbm93OlxuXHRcdGlmIChmbG9vcihpIC8gb3V0KSA+IG1heEludCAtIG4pIHtcblx0XHRcdGVycm9yJDEoJ292ZXJmbG93Jyk7XG5cdFx0fVxuXG5cdFx0biArPSBmbG9vcihpIC8gb3V0KTtcblx0XHRpICU9IG91dDtcblxuXHRcdC8vIEluc2VydCBgbmAgYXQgcG9zaXRpb24gYGlgIG9mIHRoZSBvdXRwdXQuXG5cdFx0b3V0cHV0LnNwbGljZShpKyssIDAsIG4pO1xuXHR9XG5cblx0cmV0dXJuIFN0cmluZy5mcm9tQ29kZVBvaW50LmFwcGx5KFN0cmluZywgb3V0cHV0KTtcbn07XG5cbi8qKlxuICogQ29udmVydHMgYSBzdHJpbmcgb2YgVW5pY29kZSBzeW1ib2xzIChlLmcuIGEgZG9tYWluIG5hbWUgbGFiZWwpIHRvIGFcbiAqIFB1bnljb2RlIHN0cmluZyBvZiBBU0NJSS1vbmx5IHN5bWJvbHMuXG4gKiBAbWVtYmVyT2YgcHVueWNvZGVcbiAqIEBwYXJhbSB7U3RyaW5nfSBpbnB1dCBUaGUgc3RyaW5nIG9mIFVuaWNvZGUgc3ltYm9scy5cbiAqIEByZXR1cm5zIHtTdHJpbmd9IFRoZSByZXN1bHRpbmcgUHVueWNvZGUgc3RyaW5nIG9mIEFTQ0lJLW9ubHkgc3ltYm9scy5cbiAqL1xudmFyIGVuY29kZSA9IGZ1bmN0aW9uIGVuY29kZShpbnB1dCkge1xuXHR2YXIgb3V0cHV0ID0gW107XG5cblx0Ly8gQ29udmVydCB0aGUgaW5wdXQgaW4gVUNTLTIgdG8gYW4gYXJyYXkgb2YgVW5pY29kZSBjb2RlIHBvaW50cy5cblx0aW5wdXQgPSB1Y3MyZGVjb2RlKGlucHV0KTtcblxuXHQvLyBDYWNoZSB0aGUgbGVuZ3RoLlxuXHR2YXIgaW5wdXRMZW5ndGggPSBpbnB1dC5sZW5ndGg7XG5cblx0Ly8gSW5pdGlhbGl6ZSB0aGUgc3RhdGUuXG5cdHZhciBuID0gaW5pdGlhbE47XG5cdHZhciBkZWx0YSA9IDA7XG5cdHZhciBiaWFzID0gaW5pdGlhbEJpYXM7XG5cblx0Ly8gSGFuZGxlIHRoZSBiYXNpYyBjb2RlIHBvaW50cy5cblx0dmFyIF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24gPSB0cnVlO1xuXHR2YXIgX2RpZEl0ZXJhdG9yRXJyb3IgPSBmYWxzZTtcblx0dmFyIF9pdGVyYXRvckVycm9yID0gdW5kZWZpbmVkO1xuXG5cdHRyeSB7XG5cdFx0Zm9yICh2YXIgX2l0ZXJhdG9yID0gaW5wdXRbU3ltYm9sLml0ZXJhdG9yXSgpLCBfc3RlcDsgIShfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uID0gKF9zdGVwID0gX2l0ZXJhdG9yLm5leHQoKSkuZG9uZSk7IF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24gPSB0cnVlKSB7XG5cdFx0XHR2YXIgX2N1cnJlbnRWYWx1ZTIgPSBfc3RlcC52YWx1ZTtcblxuXHRcdFx0aWYgKF9jdXJyZW50VmFsdWUyIDwgMHg4MCkge1xuXHRcdFx0XHRvdXRwdXQucHVzaChzdHJpbmdGcm9tQ2hhckNvZGUoX2N1cnJlbnRWYWx1ZTIpKTtcblx0XHRcdH1cblx0XHR9XG5cdH0gY2F0Y2ggKGVycikge1xuXHRcdF9kaWRJdGVyYXRvckVycm9yID0gdHJ1ZTtcblx0XHRfaXRlcmF0b3JFcnJvciA9IGVycjtcblx0fSBmaW5hbGx5IHtcblx0XHR0cnkge1xuXHRcdFx0aWYgKCFfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uICYmIF9pdGVyYXRvci5yZXR1cm4pIHtcblx0XHRcdFx0X2l0ZXJhdG9yLnJldHVybigpO1xuXHRcdFx0fVxuXHRcdH0gZmluYWxseSB7XG5cdFx0XHRpZiAoX2RpZEl0ZXJhdG9yRXJyb3IpIHtcblx0XHRcdFx0dGhyb3cgX2l0ZXJhdG9yRXJyb3I7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0dmFyIGJhc2ljTGVuZ3RoID0gb3V0cHV0Lmxlbmd0aDtcblx0dmFyIGhhbmRsZWRDUENvdW50ID0gYmFzaWNMZW5ndGg7XG5cblx0Ly8gYGhhbmRsZWRDUENvdW50YCBpcyB0aGUgbnVtYmVyIG9mIGNvZGUgcG9pbnRzIHRoYXQgaGF2ZSBiZWVuIGhhbmRsZWQ7XG5cdC8vIGBiYXNpY0xlbmd0aGAgaXMgdGhlIG51bWJlciBvZiBiYXNpYyBjb2RlIHBvaW50cy5cblxuXHQvLyBGaW5pc2ggdGhlIGJhc2ljIHN0cmluZyB3aXRoIGEgZGVsaW1pdGVyIHVubGVzcyBpdCdzIGVtcHR5LlxuXHRpZiAoYmFzaWNMZW5ndGgpIHtcblx0XHRvdXRwdXQucHVzaChkZWxpbWl0ZXIpO1xuXHR9XG5cblx0Ly8gTWFpbiBlbmNvZGluZyBsb29wOlxuXHR3aGlsZSAoaGFuZGxlZENQQ291bnQgPCBpbnB1dExlbmd0aCkge1xuXG5cdFx0Ly8gQWxsIG5vbi1iYXNpYyBjb2RlIHBvaW50cyA8IG4gaGF2ZSBiZWVuIGhhbmRsZWQgYWxyZWFkeS4gRmluZCB0aGUgbmV4dFxuXHRcdC8vIGxhcmdlciBvbmU6XG5cdFx0dmFyIG0gPSBtYXhJbnQ7XG5cdFx0dmFyIF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24yID0gdHJ1ZTtcblx0XHR2YXIgX2RpZEl0ZXJhdG9yRXJyb3IyID0gZmFsc2U7XG5cdFx0dmFyIF9pdGVyYXRvckVycm9yMiA9IHVuZGVmaW5lZDtcblxuXHRcdHRyeSB7XG5cdFx0XHRmb3IgKHZhciBfaXRlcmF0b3IyID0gaW5wdXRbU3ltYm9sLml0ZXJhdG9yXSgpLCBfc3RlcDI7ICEoX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbjIgPSAoX3N0ZXAyID0gX2l0ZXJhdG9yMi5uZXh0KCkpLmRvbmUpOyBfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uMiA9IHRydWUpIHtcblx0XHRcdFx0dmFyIGN1cnJlbnRWYWx1ZSA9IF9zdGVwMi52YWx1ZTtcblxuXHRcdFx0XHRpZiAoY3VycmVudFZhbHVlID49IG4gJiYgY3VycmVudFZhbHVlIDwgbSkge1xuXHRcdFx0XHRcdG0gPSBjdXJyZW50VmFsdWU7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0Ly8gSW5jcmVhc2UgYGRlbHRhYCBlbm91Z2ggdG8gYWR2YW5jZSB0aGUgZGVjb2RlcidzIDxuLGk+IHN0YXRlIHRvIDxtLDA+LFxuXHRcdFx0Ly8gYnV0IGd1YXJkIGFnYWluc3Qgb3ZlcmZsb3cuXG5cdFx0fSBjYXRjaCAoZXJyKSB7XG5cdFx0XHRfZGlkSXRlcmF0b3JFcnJvcjIgPSB0cnVlO1xuXHRcdFx0X2l0ZXJhdG9yRXJyb3IyID0gZXJyO1xuXHRcdH0gZmluYWxseSB7XG5cdFx0XHR0cnkge1xuXHRcdFx0XHRpZiAoIV9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24yICYmIF9pdGVyYXRvcjIucmV0dXJuKSB7XG5cdFx0XHRcdFx0X2l0ZXJhdG9yMi5yZXR1cm4oKTtcblx0XHRcdFx0fVxuXHRcdFx0fSBmaW5hbGx5IHtcblx0XHRcdFx0aWYgKF9kaWRJdGVyYXRvckVycm9yMikge1xuXHRcdFx0XHRcdHRocm93IF9pdGVyYXRvckVycm9yMjtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHZhciBoYW5kbGVkQ1BDb3VudFBsdXNPbmUgPSBoYW5kbGVkQ1BDb3VudCArIDE7XG5cdFx0aWYgKG0gLSBuID4gZmxvb3IoKG1heEludCAtIGRlbHRhKSAvIGhhbmRsZWRDUENvdW50UGx1c09uZSkpIHtcblx0XHRcdGVycm9yJDEoJ292ZXJmbG93Jyk7XG5cdFx0fVxuXG5cdFx0ZGVsdGEgKz0gKG0gLSBuKSAqIGhhbmRsZWRDUENvdW50UGx1c09uZTtcblx0XHRuID0gbTtcblxuXHRcdHZhciBfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uMyA9IHRydWU7XG5cdFx0dmFyIF9kaWRJdGVyYXRvckVycm9yMyA9IGZhbHNlO1xuXHRcdHZhciBfaXRlcmF0b3JFcnJvcjMgPSB1bmRlZmluZWQ7XG5cblx0XHR0cnkge1xuXHRcdFx0Zm9yICh2YXIgX2l0ZXJhdG9yMyA9IGlucHV0W1N5bWJvbC5pdGVyYXRvcl0oKSwgX3N0ZXAzOyAhKF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24zID0gKF9zdGVwMyA9IF9pdGVyYXRvcjMubmV4dCgpKS5kb25lKTsgX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbjMgPSB0cnVlKSB7XG5cdFx0XHRcdHZhciBfY3VycmVudFZhbHVlID0gX3N0ZXAzLnZhbHVlO1xuXG5cdFx0XHRcdGlmIChfY3VycmVudFZhbHVlIDwgbiAmJiArK2RlbHRhID4gbWF4SW50KSB7XG5cdFx0XHRcdFx0ZXJyb3IkMSgnb3ZlcmZsb3cnKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoX2N1cnJlbnRWYWx1ZSA9PSBuKSB7XG5cdFx0XHRcdFx0Ly8gUmVwcmVzZW50IGRlbHRhIGFzIGEgZ2VuZXJhbGl6ZWQgdmFyaWFibGUtbGVuZ3RoIGludGVnZXIuXG5cdFx0XHRcdFx0dmFyIHEgPSBkZWx0YTtcblx0XHRcdFx0XHRmb3IgKHZhciBrID0gYmFzZTs7IC8qIG5vIGNvbmRpdGlvbiAqL2sgKz0gYmFzZSkge1xuXHRcdFx0XHRcdFx0dmFyIHQgPSBrIDw9IGJpYXMgPyB0TWluIDogayA+PSBiaWFzICsgdE1heCA/IHRNYXggOiBrIC0gYmlhcztcblx0XHRcdFx0XHRcdGlmIChxIDwgdCkge1xuXHRcdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdHZhciBxTWludXNUID0gcSAtIHQ7XG5cdFx0XHRcdFx0XHR2YXIgYmFzZU1pbnVzVCA9IGJhc2UgLSB0O1xuXHRcdFx0XHRcdFx0b3V0cHV0LnB1c2goc3RyaW5nRnJvbUNoYXJDb2RlKGRpZ2l0VG9CYXNpYyh0ICsgcU1pbnVzVCAlIGJhc2VNaW51c1QsIDApKSk7XG5cdFx0XHRcdFx0XHRxID0gZmxvb3IocU1pbnVzVCAvIGJhc2VNaW51c1QpO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdG91dHB1dC5wdXNoKHN0cmluZ0Zyb21DaGFyQ29kZShkaWdpdFRvQmFzaWMocSwgMCkpKTtcblx0XHRcdFx0XHRiaWFzID0gYWRhcHQoZGVsdGEsIGhhbmRsZWRDUENvdW50UGx1c09uZSwgaGFuZGxlZENQQ291bnQgPT0gYmFzaWNMZW5ndGgpO1xuXHRcdFx0XHRcdGRlbHRhID0gMDtcblx0XHRcdFx0XHQrK2hhbmRsZWRDUENvdW50O1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSBjYXRjaCAoZXJyKSB7XG5cdFx0XHRfZGlkSXRlcmF0b3JFcnJvcjMgPSB0cnVlO1xuXHRcdFx0X2l0ZXJhdG9yRXJyb3IzID0gZXJyO1xuXHRcdH0gZmluYWxseSB7XG5cdFx0XHR0cnkge1xuXHRcdFx0XHRpZiAoIV9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24zICYmIF9pdGVyYXRvcjMucmV0dXJuKSB7XG5cdFx0XHRcdFx0X2l0ZXJhdG9yMy5yZXR1cm4oKTtcblx0XHRcdFx0fVxuXHRcdFx0fSBmaW5hbGx5IHtcblx0XHRcdFx0aWYgKF9kaWRJdGVyYXRvckVycm9yMykge1xuXHRcdFx0XHRcdHRocm93IF9pdGVyYXRvckVycm9yMztcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdCsrZGVsdGE7XG5cdFx0KytuO1xuXHR9XG5cdHJldHVybiBvdXRwdXQuam9pbignJyk7XG59O1xuXG4vKipcbiAqIENvbnZlcnRzIGEgUHVueWNvZGUgc3RyaW5nIHJlcHJlc2VudGluZyBhIGRvbWFpbiBuYW1lIG9yIGFuIGVtYWlsIGFkZHJlc3NcbiAqIHRvIFVuaWNvZGUuIE9ubHkgdGhlIFB1bnljb2RlZCBwYXJ0cyBvZiB0aGUgaW5wdXQgd2lsbCBiZSBjb252ZXJ0ZWQsIGkuZS5cbiAqIGl0IGRvZXNuJ3QgbWF0dGVyIGlmIHlvdSBjYWxsIGl0IG9uIGEgc3RyaW5nIHRoYXQgaGFzIGFscmVhZHkgYmVlblxuICogY29udmVydGVkIHRvIFVuaWNvZGUuXG4gKiBAbWVtYmVyT2YgcHVueWNvZGVcbiAqIEBwYXJhbSB7U3RyaW5nfSBpbnB1dCBUaGUgUHVueWNvZGVkIGRvbWFpbiBuYW1lIG9yIGVtYWlsIGFkZHJlc3MgdG9cbiAqIGNvbnZlcnQgdG8gVW5pY29kZS5cbiAqIEByZXR1cm5zIHtTdHJpbmd9IFRoZSBVbmljb2RlIHJlcHJlc2VudGF0aW9uIG9mIHRoZSBnaXZlbiBQdW55Y29kZVxuICogc3RyaW5nLlxuICovXG52YXIgdG9Vbmljb2RlID0gZnVuY3Rpb24gdG9Vbmljb2RlKGlucHV0KSB7XG5cdHJldHVybiBtYXBEb21haW4oaW5wdXQsIGZ1bmN0aW9uIChzdHJpbmcpIHtcblx0XHRyZXR1cm4gcmVnZXhQdW55Y29kZS50ZXN0KHN0cmluZykgPyBkZWNvZGUoc3RyaW5nLnNsaWNlKDQpLnRvTG93ZXJDYXNlKCkpIDogc3RyaW5nO1xuXHR9KTtcbn07XG5cbi8qKlxuICogQ29udmVydHMgYSBVbmljb2RlIHN0cmluZyByZXByZXNlbnRpbmcgYSBkb21haW4gbmFtZSBvciBhbiBlbWFpbCBhZGRyZXNzIHRvXG4gKiBQdW55Y29kZS4gT25seSB0aGUgbm9uLUFTQ0lJIHBhcnRzIG9mIHRoZSBkb21haW4gbmFtZSB3aWxsIGJlIGNvbnZlcnRlZCxcbiAqIGkuZS4gaXQgZG9lc24ndCBtYXR0ZXIgaWYgeW91IGNhbGwgaXQgd2l0aCBhIGRvbWFpbiB0aGF0J3MgYWxyZWFkeSBpblxuICogQVNDSUkuXG4gKiBAbWVtYmVyT2YgcHVueWNvZGVcbiAqIEBwYXJhbSB7U3RyaW5nfSBpbnB1dCBUaGUgZG9tYWluIG5hbWUgb3IgZW1haWwgYWRkcmVzcyB0byBjb252ZXJ0LCBhcyBhXG4gKiBVbmljb2RlIHN0cmluZy5cbiAqIEByZXR1cm5zIHtTdHJpbmd9IFRoZSBQdW55Y29kZSByZXByZXNlbnRhdGlvbiBvZiB0aGUgZ2l2ZW4gZG9tYWluIG5hbWUgb3JcbiAqIGVtYWlsIGFkZHJlc3MuXG4gKi9cbnZhciB0b0FTQ0lJID0gZnVuY3Rpb24gdG9BU0NJSShpbnB1dCkge1xuXHRyZXR1cm4gbWFwRG9tYWluKGlucHV0LCBmdW5jdGlvbiAoc3RyaW5nKSB7XG5cdFx0cmV0dXJuIHJlZ2V4Tm9uQVNDSUkudGVzdChzdHJpbmcpID8gJ3huLS0nICsgZW5jb2RlKHN0cmluZykgOiBzdHJpbmc7XG5cdH0pO1xufTtcblxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5cbi8qKiBEZWZpbmUgdGhlIHB1YmxpYyBBUEkgKi9cbnZhciBwdW55Y29kZSA9IHtcblx0LyoqXG4gICogQSBzdHJpbmcgcmVwcmVzZW50aW5nIHRoZSBjdXJyZW50IFB1bnljb2RlLmpzIHZlcnNpb24gbnVtYmVyLlxuICAqIEBtZW1iZXJPZiBwdW55Y29kZVxuICAqIEB0eXBlIFN0cmluZ1xuICAqL1xuXHQndmVyc2lvbic6ICcyLjEuMCcsXG5cdC8qKlxuICAqIEFuIG9iamVjdCBvZiBtZXRob2RzIHRvIGNvbnZlcnQgZnJvbSBKYXZhU2NyaXB0J3MgaW50ZXJuYWwgY2hhcmFjdGVyXG4gICogcmVwcmVzZW50YXRpb24gKFVDUy0yKSB0byBVbmljb2RlIGNvZGUgcG9pbnRzLCBhbmQgYmFjay5cbiAgKiBAc2VlIDxodHRwczovL21hdGhpYXNieW5lbnMuYmUvbm90ZXMvamF2YXNjcmlwdC1lbmNvZGluZz5cbiAgKiBAbWVtYmVyT2YgcHVueWNvZGVcbiAgKiBAdHlwZSBPYmplY3RcbiAgKi9cblx0J3VjczInOiB7XG5cdFx0J2RlY29kZSc6IHVjczJkZWNvZGUsXG5cdFx0J2VuY29kZSc6IHVjczJlbmNvZGVcblx0fSxcblx0J2RlY29kZSc6IGRlY29kZSxcblx0J2VuY29kZSc6IGVuY29kZSxcblx0J3RvQVNDSUknOiB0b0FTQ0lJLFxuXHQndG9Vbmljb2RlJzogdG9Vbmljb2RlXG59O1xuXG4vKipcbiAqIFVSSS5qc1xuICpcbiAqIEBmaWxlb3ZlcnZpZXcgQW4gUkZDIDM5ODYgY29tcGxpYW50LCBzY2hlbWUgZXh0ZW5kYWJsZSBVUkkgcGFyc2luZy92YWxpZGF0aW5nL3Jlc29sdmluZyBsaWJyYXJ5IGZvciBKYXZhU2NyaXB0LlxuICogQGF1dGhvciA8YSBocmVmPVwibWFpbHRvOmdhcnkuY291cnRAZ21haWwuY29tXCI+R2FyeSBDb3VydDwvYT5cbiAqIEBzZWUgaHR0cDovL2dpdGh1Yi5jb20vZ2FyeWNvdXJ0L3VyaS1qc1xuICovXG4vKipcbiAqIENvcHlyaWdodCAyMDExIEdhcnkgQ291cnQuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogUmVkaXN0cmlidXRpb24gYW5kIHVzZSBpbiBzb3VyY2UgYW5kIGJpbmFyeSBmb3Jtcywgd2l0aCBvciB3aXRob3V0IG1vZGlmaWNhdGlvbiwgYXJlXG4gKiBwZXJtaXR0ZWQgcHJvdmlkZWQgdGhhdCB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnMgYXJlIG1ldDpcbiAqXG4gKiAgICAxLiBSZWRpc3RyaWJ1dGlvbnMgb2Ygc291cmNlIGNvZGUgbXVzdCByZXRhaW4gdGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UsIHRoaXMgbGlzdCBvZlxuICogICAgICAgY29uZGl0aW9ucyBhbmQgdGhlIGZvbGxvd2luZyBkaXNjbGFpbWVyLlxuICpcbiAqICAgIDIuIFJlZGlzdHJpYnV0aW9ucyBpbiBiaW5hcnkgZm9ybSBtdXN0IHJlcHJvZHVjZSB0aGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSwgdGhpcyBsaXN0XG4gKiAgICAgICBvZiBjb25kaXRpb25zIGFuZCB0aGUgZm9sbG93aW5nIGRpc2NsYWltZXIgaW4gdGhlIGRvY3VtZW50YXRpb24gYW5kL29yIG90aGVyIG1hdGVyaWFsc1xuICogICAgICAgcHJvdmlkZWQgd2l0aCB0aGUgZGlzdHJpYnV0aW9uLlxuICpcbiAqIFRISVMgU09GVFdBUkUgSVMgUFJPVklERUQgQlkgR0FSWSBDT1VSVCBgYEFTIElTJycgQU5EIEFOWSBFWFBSRVNTIE9SIElNUExJRURcbiAqIFdBUlJBTlRJRVMsIElOQ0xVRElORywgQlVUIE5PVCBMSU1JVEVEIFRPLCBUSEUgSU1QTElFRCBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSBBTkRcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFSRSBESVNDTEFJTUVELiBJTiBOTyBFVkVOVCBTSEFMTCBHQVJZIENPVVJUIE9SXG4gKiBDT05UUklCVVRPUlMgQkUgTElBQkxFIEZPUiBBTlkgRElSRUNULCBJTkRJUkVDVCwgSU5DSURFTlRBTCwgU1BFQ0lBTCwgRVhFTVBMQVJZLCBPUlxuICogQ09OU0VRVUVOVElBTCBEQU1BR0VTIChJTkNMVURJTkcsIEJVVCBOT1QgTElNSVRFRCBUTywgUFJPQ1VSRU1FTlQgT0YgU1VCU1RJVFVURSBHT09EUyBPUlxuICogU0VSVklDRVM7IExPU1MgT0YgVVNFLCBEQVRBLCBPUiBQUk9GSVRTOyBPUiBCVVNJTkVTUyBJTlRFUlJVUFRJT04pIEhPV0VWRVIgQ0FVU0VEIEFORCBPTlxuICogQU5ZIFRIRU9SWSBPRiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQ09OVFJBQ1QsIFNUUklDVCBMSUFCSUxJVFksIE9SIFRPUlQgKElOQ0xVRElOR1xuICogTkVHTElHRU5DRSBPUiBPVEhFUldJU0UpIEFSSVNJTkcgSU4gQU5ZIFdBWSBPVVQgT0YgVEhFIFVTRSBPRiBUSElTIFNPRlRXQVJFLCBFVkVOIElGXG4gKiBBRFZJU0VEIE9GIFRIRSBQT1NTSUJJTElUWSBPRiBTVUNIIERBTUFHRS5cbiAqXG4gKiBUaGUgdmlld3MgYW5kIGNvbmNsdXNpb25zIGNvbnRhaW5lZCBpbiB0aGUgc29mdHdhcmUgYW5kIGRvY3VtZW50YXRpb24gYXJlIHRob3NlIG9mIHRoZVxuICogYXV0aG9ycyBhbmQgc2hvdWxkIG5vdCBiZSBpbnRlcnByZXRlZCBhcyByZXByZXNlbnRpbmcgb2ZmaWNpYWwgcG9saWNpZXMsIGVpdGhlciBleHByZXNzZWRcbiAqIG9yIGltcGxpZWQsIG9mIEdhcnkgQ291cnQuXG4gKi9cbnZhciBTQ0hFTUVTID0ge307XG5mdW5jdGlvbiBwY3RFbmNDaGFyKGNocikge1xuICAgIHZhciBjID0gY2hyLmNoYXJDb2RlQXQoMCk7XG4gICAgdmFyIGUgPSB2b2lkIDA7XG4gICAgaWYgKGMgPCAxNikgZSA9IFwiJTBcIiArIGMudG9TdHJpbmcoMTYpLnRvVXBwZXJDYXNlKCk7ZWxzZSBpZiAoYyA8IDEyOCkgZSA9IFwiJVwiICsgYy50b1N0cmluZygxNikudG9VcHBlckNhc2UoKTtlbHNlIGlmIChjIDwgMjA0OCkgZSA9IFwiJVwiICsgKGMgPj4gNiB8IDE5MikudG9TdHJpbmcoMTYpLnRvVXBwZXJDYXNlKCkgKyBcIiVcIiArIChjICYgNjMgfCAxMjgpLnRvU3RyaW5nKDE2KS50b1VwcGVyQ2FzZSgpO2Vsc2UgZSA9IFwiJVwiICsgKGMgPj4gMTIgfCAyMjQpLnRvU3RyaW5nKDE2KS50b1VwcGVyQ2FzZSgpICsgXCIlXCIgKyAoYyA+PiA2ICYgNjMgfCAxMjgpLnRvU3RyaW5nKDE2KS50b1VwcGVyQ2FzZSgpICsgXCIlXCIgKyAoYyAmIDYzIHwgMTI4KS50b1N0cmluZygxNikudG9VcHBlckNhc2UoKTtcbiAgICByZXR1cm4gZTtcbn1cbmZ1bmN0aW9uIHBjdERlY0NoYXJzKHN0cikge1xuICAgIHZhciBuZXdTdHIgPSBcIlwiO1xuICAgIHZhciBpID0gMDtcbiAgICB2YXIgaWwgPSBzdHIubGVuZ3RoO1xuICAgIHdoaWxlIChpIDwgaWwpIHtcbiAgICAgICAgdmFyIGMgPSBwYXJzZUludChzdHIuc3Vic3RyKGkgKyAxLCAyKSwgMTYpO1xuICAgICAgICBpZiAoYyA8IDEyOCkge1xuICAgICAgICAgICAgbmV3U3RyICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoYyk7XG4gICAgICAgICAgICBpICs9IDM7XG4gICAgICAgIH0gZWxzZSBpZiAoYyA+PSAxOTQgJiYgYyA8IDIyNCkge1xuICAgICAgICAgICAgaWYgKGlsIC0gaSA+PSA2KSB7XG4gICAgICAgICAgICAgICAgdmFyIGMyID0gcGFyc2VJbnQoc3RyLnN1YnN0cihpICsgNCwgMiksIDE2KTtcbiAgICAgICAgICAgICAgICBuZXdTdHIgKz0gU3RyaW5nLmZyb21DaGFyQ29kZSgoYyAmIDMxKSA8PCA2IHwgYzIgJiA2Myk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIG5ld1N0ciArPSBzdHIuc3Vic3RyKGksIDYpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaSArPSA2O1xuICAgICAgICB9IGVsc2UgaWYgKGMgPj0gMjI0KSB7XG4gICAgICAgICAgICBpZiAoaWwgLSBpID49IDkpIHtcbiAgICAgICAgICAgICAgICB2YXIgX2MgPSBwYXJzZUludChzdHIuc3Vic3RyKGkgKyA0LCAyKSwgMTYpO1xuICAgICAgICAgICAgICAgIHZhciBjMyA9IHBhcnNlSW50KHN0ci5zdWJzdHIoaSArIDcsIDIpLCAxNik7XG4gICAgICAgICAgICAgICAgbmV3U3RyICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoKGMgJiAxNSkgPDwgMTIgfCAoX2MgJiA2MykgPDwgNiB8IGMzICYgNjMpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBuZXdTdHIgKz0gc3RyLnN1YnN0cihpLCA5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGkgKz0gOTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG5ld1N0ciArPSBzdHIuc3Vic3RyKGksIDMpO1xuICAgICAgICAgICAgaSArPSAzO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBuZXdTdHI7XG59XG5mdW5jdGlvbiBfbm9ybWFsaXplQ29tcG9uZW50RW5jb2RpbmcoY29tcG9uZW50cywgcHJvdG9jb2wpIHtcbiAgICBmdW5jdGlvbiBkZWNvZGVVbnJlc2VydmVkKHN0cikge1xuICAgICAgICB2YXIgZGVjU3RyID0gcGN0RGVjQ2hhcnMoc3RyKTtcbiAgICAgICAgcmV0dXJuICFkZWNTdHIubWF0Y2gocHJvdG9jb2wuVU5SRVNFUlZFRCkgPyBzdHIgOiBkZWNTdHI7XG4gICAgfVxuICAgIGlmIChjb21wb25lbnRzLnNjaGVtZSkgY29tcG9uZW50cy5zY2hlbWUgPSBTdHJpbmcoY29tcG9uZW50cy5zY2hlbWUpLnJlcGxhY2UocHJvdG9jb2wuUENUX0VOQ09ERUQsIGRlY29kZVVucmVzZXJ2ZWQpLnRvTG93ZXJDYXNlKCkucmVwbGFjZShwcm90b2NvbC5OT1RfU0NIRU1FLCBcIlwiKTtcbiAgICBpZiAoY29tcG9uZW50cy51c2VyaW5mbyAhPT0gdW5kZWZpbmVkKSBjb21wb25lbnRzLnVzZXJpbmZvID0gU3RyaW5nKGNvbXBvbmVudHMudXNlcmluZm8pLnJlcGxhY2UocHJvdG9jb2wuUENUX0VOQ09ERUQsIGRlY29kZVVucmVzZXJ2ZWQpLnJlcGxhY2UocHJvdG9jb2wuTk9UX1VTRVJJTkZPLCBwY3RFbmNDaGFyKS5yZXBsYWNlKHByb3RvY29sLlBDVF9FTkNPREVELCB0b1VwcGVyQ2FzZSk7XG4gICAgaWYgKGNvbXBvbmVudHMuaG9zdCAhPT0gdW5kZWZpbmVkKSBjb21wb25lbnRzLmhvc3QgPSBTdHJpbmcoY29tcG9uZW50cy5ob3N0KS5yZXBsYWNlKHByb3RvY29sLlBDVF9FTkNPREVELCBkZWNvZGVVbnJlc2VydmVkKS50b0xvd2VyQ2FzZSgpLnJlcGxhY2UocHJvdG9jb2wuTk9UX0hPU1QsIHBjdEVuY0NoYXIpLnJlcGxhY2UocHJvdG9jb2wuUENUX0VOQ09ERUQsIHRvVXBwZXJDYXNlKTtcbiAgICBpZiAoY29tcG9uZW50cy5wYXRoICE9PSB1bmRlZmluZWQpIGNvbXBvbmVudHMucGF0aCA9IFN0cmluZyhjb21wb25lbnRzLnBhdGgpLnJlcGxhY2UocHJvdG9jb2wuUENUX0VOQ09ERUQsIGRlY29kZVVucmVzZXJ2ZWQpLnJlcGxhY2UoY29tcG9uZW50cy5zY2hlbWUgPyBwcm90b2NvbC5OT1RfUEFUSCA6IHByb3RvY29sLk5PVF9QQVRIX05PU0NIRU1FLCBwY3RFbmNDaGFyKS5yZXBsYWNlKHByb3RvY29sLlBDVF9FTkNPREVELCB0b1VwcGVyQ2FzZSk7XG4gICAgaWYgKGNvbXBvbmVudHMucXVlcnkgIT09IHVuZGVmaW5lZCkgY29tcG9uZW50cy5xdWVyeSA9IFN0cmluZyhjb21wb25lbnRzLnF1ZXJ5KS5yZXBsYWNlKHByb3RvY29sLlBDVF9FTkNPREVELCBkZWNvZGVVbnJlc2VydmVkKS5yZXBsYWNlKHByb3RvY29sLk5PVF9RVUVSWSwgcGN0RW5jQ2hhcikucmVwbGFjZShwcm90b2NvbC5QQ1RfRU5DT0RFRCwgdG9VcHBlckNhc2UpO1xuICAgIGlmIChjb21wb25lbnRzLmZyYWdtZW50ICE9PSB1bmRlZmluZWQpIGNvbXBvbmVudHMuZnJhZ21lbnQgPSBTdHJpbmcoY29tcG9uZW50cy5mcmFnbWVudCkucmVwbGFjZShwcm90b2NvbC5QQ1RfRU5DT0RFRCwgZGVjb2RlVW5yZXNlcnZlZCkucmVwbGFjZShwcm90b2NvbC5OT1RfRlJBR01FTlQsIHBjdEVuY0NoYXIpLnJlcGxhY2UocHJvdG9jb2wuUENUX0VOQ09ERUQsIHRvVXBwZXJDYXNlKTtcbiAgICByZXR1cm4gY29tcG9uZW50cztcbn1cblxuZnVuY3Rpb24gX3N0cmlwTGVhZGluZ1plcm9zKHN0cikge1xuICAgIHJldHVybiBzdHIucmVwbGFjZSgvXjAqKC4qKS8sIFwiJDFcIikgfHwgXCIwXCI7XG59XG5mdW5jdGlvbiBfbm9ybWFsaXplSVB2NChob3N0LCBwcm90b2NvbCkge1xuICAgIHZhciBtYXRjaGVzID0gaG9zdC5tYXRjaChwcm90b2NvbC5JUFY0QUREUkVTUykgfHwgW107XG5cbiAgICB2YXIgX21hdGNoZXMgPSBzbGljZWRUb0FycmF5KG1hdGNoZXMsIDIpLFxuICAgICAgICBhZGRyZXNzID0gX21hdGNoZXNbMV07XG5cbiAgICBpZiAoYWRkcmVzcykge1xuICAgICAgICByZXR1cm4gYWRkcmVzcy5zcGxpdChcIi5cIikubWFwKF9zdHJpcExlYWRpbmdaZXJvcykuam9pbihcIi5cIik7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGhvc3Q7XG4gICAgfVxufVxuZnVuY3Rpb24gX25vcm1hbGl6ZUlQdjYoaG9zdCwgcHJvdG9jb2wpIHtcbiAgICB2YXIgbWF0Y2hlcyA9IGhvc3QubWF0Y2gocHJvdG9jb2wuSVBWNkFERFJFU1MpIHx8IFtdO1xuXG4gICAgdmFyIF9tYXRjaGVzMiA9IHNsaWNlZFRvQXJyYXkobWF0Y2hlcywgMyksXG4gICAgICAgIGFkZHJlc3MgPSBfbWF0Y2hlczJbMV0sXG4gICAgICAgIHpvbmUgPSBfbWF0Y2hlczJbMl07XG5cbiAgICBpZiAoYWRkcmVzcykge1xuICAgICAgICB2YXIgX2FkZHJlc3MkdG9Mb3dlckNhc2UkID0gYWRkcmVzcy50b0xvd2VyQ2FzZSgpLnNwbGl0KCc6OicpLnJldmVyc2UoKSxcbiAgICAgICAgICAgIF9hZGRyZXNzJHRvTG93ZXJDYXNlJDIgPSBzbGljZWRUb0FycmF5KF9hZGRyZXNzJHRvTG93ZXJDYXNlJCwgMiksXG4gICAgICAgICAgICBsYXN0ID0gX2FkZHJlc3MkdG9Mb3dlckNhc2UkMlswXSxcbiAgICAgICAgICAgIGZpcnN0ID0gX2FkZHJlc3MkdG9Mb3dlckNhc2UkMlsxXTtcblxuICAgICAgICB2YXIgZmlyc3RGaWVsZHMgPSBmaXJzdCA/IGZpcnN0LnNwbGl0KFwiOlwiKS5tYXAoX3N0cmlwTGVhZGluZ1plcm9zKSA6IFtdO1xuICAgICAgICB2YXIgbGFzdEZpZWxkcyA9IGxhc3Quc3BsaXQoXCI6XCIpLm1hcChfc3RyaXBMZWFkaW5nWmVyb3MpO1xuICAgICAgICB2YXIgaXNMYXN0RmllbGRJUHY0QWRkcmVzcyA9IHByb3RvY29sLklQVjRBRERSRVNTLnRlc3QobGFzdEZpZWxkc1tsYXN0RmllbGRzLmxlbmd0aCAtIDFdKTtcbiAgICAgICAgdmFyIGZpZWxkQ291bnQgPSBpc0xhc3RGaWVsZElQdjRBZGRyZXNzID8gNyA6IDg7XG4gICAgICAgIHZhciBsYXN0RmllbGRzU3RhcnQgPSBsYXN0RmllbGRzLmxlbmd0aCAtIGZpZWxkQ291bnQ7XG4gICAgICAgIHZhciBmaWVsZHMgPSBBcnJheShmaWVsZENvdW50KTtcbiAgICAgICAgZm9yICh2YXIgeCA9IDA7IHggPCBmaWVsZENvdW50OyArK3gpIHtcbiAgICAgICAgICAgIGZpZWxkc1t4XSA9IGZpcnN0RmllbGRzW3hdIHx8IGxhc3RGaWVsZHNbbGFzdEZpZWxkc1N0YXJ0ICsgeF0gfHwgJyc7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGlzTGFzdEZpZWxkSVB2NEFkZHJlc3MpIHtcbiAgICAgICAgICAgIGZpZWxkc1tmaWVsZENvdW50IC0gMV0gPSBfbm9ybWFsaXplSVB2NChmaWVsZHNbZmllbGRDb3VudCAtIDFdLCBwcm90b2NvbCk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGFsbFplcm9GaWVsZHMgPSBmaWVsZHMucmVkdWNlKGZ1bmN0aW9uIChhY2MsIGZpZWxkLCBpbmRleCkge1xuICAgICAgICAgICAgaWYgKCFmaWVsZCB8fCBmaWVsZCA9PT0gXCIwXCIpIHtcbiAgICAgICAgICAgICAgICB2YXIgbGFzdExvbmdlc3QgPSBhY2NbYWNjLmxlbmd0aCAtIDFdO1xuICAgICAgICAgICAgICAgIGlmIChsYXN0TG9uZ2VzdCAmJiBsYXN0TG9uZ2VzdC5pbmRleCArIGxhc3RMb25nZXN0Lmxlbmd0aCA9PT0gaW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgbGFzdExvbmdlc3QubGVuZ3RoKys7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgYWNjLnB1c2goeyBpbmRleDogaW5kZXgsIGxlbmd0aDogMSB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gYWNjO1xuICAgICAgICB9LCBbXSk7XG4gICAgICAgIHZhciBsb25nZXN0WmVyb0ZpZWxkcyA9IGFsbFplcm9GaWVsZHMuc29ydChmdW5jdGlvbiAoYSwgYikge1xuICAgICAgICAgICAgcmV0dXJuIGIubGVuZ3RoIC0gYS5sZW5ndGg7XG4gICAgICAgIH0pWzBdO1xuICAgICAgICB2YXIgbmV3SG9zdCA9IHZvaWQgMDtcbiAgICAgICAgaWYgKGxvbmdlc3RaZXJvRmllbGRzICYmIGxvbmdlc3RaZXJvRmllbGRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgIHZhciBuZXdGaXJzdCA9IGZpZWxkcy5zbGljZSgwLCBsb25nZXN0WmVyb0ZpZWxkcy5pbmRleCk7XG4gICAgICAgICAgICB2YXIgbmV3TGFzdCA9IGZpZWxkcy5zbGljZShsb25nZXN0WmVyb0ZpZWxkcy5pbmRleCArIGxvbmdlc3RaZXJvRmllbGRzLmxlbmd0aCk7XG4gICAgICAgICAgICBuZXdIb3N0ID0gbmV3Rmlyc3Quam9pbihcIjpcIikgKyBcIjo6XCIgKyBuZXdMYXN0LmpvaW4oXCI6XCIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbmV3SG9zdCA9IGZpZWxkcy5qb2luKFwiOlwiKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoem9uZSkge1xuICAgICAgICAgICAgbmV3SG9zdCArPSBcIiVcIiArIHpvbmU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ld0hvc3Q7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGhvc3Q7XG4gICAgfVxufVxudmFyIFVSSV9QQVJTRSA9IC9eKD86KFteOlxcLz8jXSspOik/KD86XFwvXFwvKCg/OihbXlxcLz8jQF0qKUApPyhcXFtbXlxcLz8jXFxdXStcXF18W15cXC8/IzpdKikoPzpcXDooXFxkKikpPykpPyhbXj8jXSopKD86XFw/KFteI10qKSk/KD86IygoPzoufFxcbnxcXHIpKikpPy9pO1xudmFyIE5PX01BVENIX0lTX1VOREVGSU5FRCA9IFwiXCIubWF0Y2goLygpezB9LylbMV0gPT09IHVuZGVmaW5lZDtcbmZ1bmN0aW9uIHBhcnNlKHVyaVN0cmluZykge1xuICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7fTtcblxuICAgIHZhciBjb21wb25lbnRzID0ge307XG4gICAgdmFyIHByb3RvY29sID0gb3B0aW9ucy5pcmkgIT09IGZhbHNlID8gSVJJX1BST1RPQ09MIDogVVJJX1BST1RPQ09MO1xuICAgIGlmIChvcHRpb25zLnJlZmVyZW5jZSA9PT0gXCJzdWZmaXhcIikgdXJpU3RyaW5nID0gKG9wdGlvbnMuc2NoZW1lID8gb3B0aW9ucy5zY2hlbWUgKyBcIjpcIiA6IFwiXCIpICsgXCIvL1wiICsgdXJpU3RyaW5nO1xuICAgIHZhciBtYXRjaGVzID0gdXJpU3RyaW5nLm1hdGNoKFVSSV9QQVJTRSk7XG4gICAgaWYgKG1hdGNoZXMpIHtcbiAgICAgICAgaWYgKE5PX01BVENIX0lTX1VOREVGSU5FRCkge1xuICAgICAgICAgICAgLy9zdG9yZSBlYWNoIGNvbXBvbmVudFxuICAgICAgICAgICAgY29tcG9uZW50cy5zY2hlbWUgPSBtYXRjaGVzWzFdO1xuICAgICAgICAgICAgY29tcG9uZW50cy51c2VyaW5mbyA9IG1hdGNoZXNbM107XG4gICAgICAgICAgICBjb21wb25lbnRzLmhvc3QgPSBtYXRjaGVzWzRdO1xuICAgICAgICAgICAgY29tcG9uZW50cy5wb3J0ID0gcGFyc2VJbnQobWF0Y2hlc1s1XSwgMTApO1xuICAgICAgICAgICAgY29tcG9uZW50cy5wYXRoID0gbWF0Y2hlc1s2XSB8fCBcIlwiO1xuICAgICAgICAgICAgY29tcG9uZW50cy5xdWVyeSA9IG1hdGNoZXNbN107XG4gICAgICAgICAgICBjb21wb25lbnRzLmZyYWdtZW50ID0gbWF0Y2hlc1s4XTtcbiAgICAgICAgICAgIC8vZml4IHBvcnQgbnVtYmVyXG4gICAgICAgICAgICBpZiAoaXNOYU4oY29tcG9uZW50cy5wb3J0KSkge1xuICAgICAgICAgICAgICAgIGNvbXBvbmVudHMucG9ydCA9IG1hdGNoZXNbNV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvL0lFIEZJWCBmb3IgaW1wcm9wZXIgUmVnRXhwIG1hdGNoaW5nXG4gICAgICAgICAgICAvL3N0b3JlIGVhY2ggY29tcG9uZW50XG4gICAgICAgICAgICBjb21wb25lbnRzLnNjaGVtZSA9IG1hdGNoZXNbMV0gfHwgdW5kZWZpbmVkO1xuICAgICAgICAgICAgY29tcG9uZW50cy51c2VyaW5mbyA9IHVyaVN0cmluZy5pbmRleE9mKFwiQFwiKSAhPT0gLTEgPyBtYXRjaGVzWzNdIDogdW5kZWZpbmVkO1xuICAgICAgICAgICAgY29tcG9uZW50cy5ob3N0ID0gdXJpU3RyaW5nLmluZGV4T2YoXCIvL1wiKSAhPT0gLTEgPyBtYXRjaGVzWzRdIDogdW5kZWZpbmVkO1xuICAgICAgICAgICAgY29tcG9uZW50cy5wb3J0ID0gcGFyc2VJbnQobWF0Y2hlc1s1XSwgMTApO1xuICAgICAgICAgICAgY29tcG9uZW50cy5wYXRoID0gbWF0Y2hlc1s2XSB8fCBcIlwiO1xuICAgICAgICAgICAgY29tcG9uZW50cy5xdWVyeSA9IHVyaVN0cmluZy5pbmRleE9mKFwiP1wiKSAhPT0gLTEgPyBtYXRjaGVzWzddIDogdW5kZWZpbmVkO1xuICAgICAgICAgICAgY29tcG9uZW50cy5mcmFnbWVudCA9IHVyaVN0cmluZy5pbmRleE9mKFwiI1wiKSAhPT0gLTEgPyBtYXRjaGVzWzhdIDogdW5kZWZpbmVkO1xuICAgICAgICAgICAgLy9maXggcG9ydCBudW1iZXJcbiAgICAgICAgICAgIGlmIChpc05hTihjb21wb25lbnRzLnBvcnQpKSB7XG4gICAgICAgICAgICAgICAgY29tcG9uZW50cy5wb3J0ID0gdXJpU3RyaW5nLm1hdGNoKC9cXC9cXC8oPzoufFxcbikqXFw6KD86XFwvfFxcP3xcXCN8JCkvKSA/IG1hdGNoZXNbNF0gOiB1bmRlZmluZWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNvbXBvbmVudHMuaG9zdCkge1xuICAgICAgICAgICAgLy9ub3JtYWxpemUgSVAgaG9zdHNcbiAgICAgICAgICAgIGNvbXBvbmVudHMuaG9zdCA9IF9ub3JtYWxpemVJUHY2KF9ub3JtYWxpemVJUHY0KGNvbXBvbmVudHMuaG9zdCwgcHJvdG9jb2wpLCBwcm90b2NvbCk7XG4gICAgICAgIH1cbiAgICAgICAgLy9kZXRlcm1pbmUgcmVmZXJlbmNlIHR5cGVcbiAgICAgICAgaWYgKGNvbXBvbmVudHMuc2NoZW1lID09PSB1bmRlZmluZWQgJiYgY29tcG9uZW50cy51c2VyaW5mbyA9PT0gdW5kZWZpbmVkICYmIGNvbXBvbmVudHMuaG9zdCA9PT0gdW5kZWZpbmVkICYmIGNvbXBvbmVudHMucG9ydCA9PT0gdW5kZWZpbmVkICYmICFjb21wb25lbnRzLnBhdGggJiYgY29tcG9uZW50cy5xdWVyeSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBjb21wb25lbnRzLnJlZmVyZW5jZSA9IFwic2FtZS1kb2N1bWVudFwiO1xuICAgICAgICB9IGVsc2UgaWYgKGNvbXBvbmVudHMuc2NoZW1lID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGNvbXBvbmVudHMucmVmZXJlbmNlID0gXCJyZWxhdGl2ZVwiO1xuICAgICAgICB9IGVsc2UgaWYgKGNvbXBvbmVudHMuZnJhZ21lbnQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgY29tcG9uZW50cy5yZWZlcmVuY2UgPSBcImFic29sdXRlXCI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb21wb25lbnRzLnJlZmVyZW5jZSA9IFwidXJpXCI7XG4gICAgICAgIH1cbiAgICAgICAgLy9jaGVjayBmb3IgcmVmZXJlbmNlIGVycm9yc1xuICAgICAgICBpZiAob3B0aW9ucy5yZWZlcmVuY2UgJiYgb3B0aW9ucy5yZWZlcmVuY2UgIT09IFwic3VmZml4XCIgJiYgb3B0aW9ucy5yZWZlcmVuY2UgIT09IGNvbXBvbmVudHMucmVmZXJlbmNlKSB7XG4gICAgICAgICAgICBjb21wb25lbnRzLmVycm9yID0gY29tcG9uZW50cy5lcnJvciB8fCBcIlVSSSBpcyBub3QgYSBcIiArIG9wdGlvbnMucmVmZXJlbmNlICsgXCIgcmVmZXJlbmNlLlwiO1xuICAgICAgICB9XG4gICAgICAgIC8vZmluZCBzY2hlbWUgaGFuZGxlclxuICAgICAgICB2YXIgc2NoZW1lSGFuZGxlciA9IFNDSEVNRVNbKG9wdGlvbnMuc2NoZW1lIHx8IGNvbXBvbmVudHMuc2NoZW1lIHx8IFwiXCIpLnRvTG93ZXJDYXNlKCldO1xuICAgICAgICAvL2NoZWNrIGlmIHNjaGVtZSBjYW4ndCBoYW5kbGUgSVJJc1xuICAgICAgICBpZiAoIW9wdGlvbnMudW5pY29kZVN1cHBvcnQgJiYgKCFzY2hlbWVIYW5kbGVyIHx8ICFzY2hlbWVIYW5kbGVyLnVuaWNvZGVTdXBwb3J0KSkge1xuICAgICAgICAgICAgLy9pZiBob3N0IGNvbXBvbmVudCBpcyBhIGRvbWFpbiBuYW1lXG4gICAgICAgICAgICBpZiAoY29tcG9uZW50cy5ob3N0ICYmIChvcHRpb25zLmRvbWFpbkhvc3QgfHwgc2NoZW1lSGFuZGxlciAmJiBzY2hlbWVIYW5kbGVyLmRvbWFpbkhvc3QpKSB7XG4gICAgICAgICAgICAgICAgLy9jb252ZXJ0IFVuaWNvZGUgSUROIC0+IEFTQ0lJIElETlxuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudHMuaG9zdCA9IHB1bnljb2RlLnRvQVNDSUkoY29tcG9uZW50cy5ob3N0LnJlcGxhY2UocHJvdG9jb2wuUENUX0VOQ09ERUQsIHBjdERlY0NoYXJzKS50b0xvd2VyQ2FzZSgpKTtcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudHMuZXJyb3IgPSBjb21wb25lbnRzLmVycm9yIHx8IFwiSG9zdCdzIGRvbWFpbiBuYW1lIGNhbiBub3QgYmUgY29udmVydGVkIHRvIEFTQ0lJIHZpYSBwdW55Y29kZTogXCIgKyBlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vY29udmVydCBJUkkgLT4gVVJJXG4gICAgICAgICAgICBfbm9ybWFsaXplQ29tcG9uZW50RW5jb2RpbmcoY29tcG9uZW50cywgVVJJX1BST1RPQ09MKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vbm9ybWFsaXplIGVuY29kaW5nc1xuICAgICAgICAgICAgX25vcm1hbGl6ZUNvbXBvbmVudEVuY29kaW5nKGNvbXBvbmVudHMsIHByb3RvY29sKTtcbiAgICAgICAgfVxuICAgICAgICAvL3BlcmZvcm0gc2NoZW1lIHNwZWNpZmljIHBhcnNpbmdcbiAgICAgICAgaWYgKHNjaGVtZUhhbmRsZXIgJiYgc2NoZW1lSGFuZGxlci5wYXJzZSkge1xuICAgICAgICAgICAgc2NoZW1lSGFuZGxlci5wYXJzZShjb21wb25lbnRzLCBvcHRpb25zKTtcbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbXBvbmVudHMuZXJyb3IgPSBjb21wb25lbnRzLmVycm9yIHx8IFwiVVJJIGNhbiBub3QgYmUgcGFyc2VkLlwiO1xuICAgIH1cbiAgICByZXR1cm4gY29tcG9uZW50cztcbn1cblxuZnVuY3Rpb24gX3JlY29tcG9zZUF1dGhvcml0eShjb21wb25lbnRzLCBvcHRpb25zKSB7XG4gICAgdmFyIHByb3RvY29sID0gb3B0aW9ucy5pcmkgIT09IGZhbHNlID8gSVJJX1BST1RPQ09MIDogVVJJX1BST1RPQ09MO1xuICAgIHZhciB1cmlUb2tlbnMgPSBbXTtcbiAgICBpZiAoY29tcG9uZW50cy51c2VyaW5mbyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHVyaVRva2Vucy5wdXNoKGNvbXBvbmVudHMudXNlcmluZm8pO1xuICAgICAgICB1cmlUb2tlbnMucHVzaChcIkBcIik7XG4gICAgfVxuICAgIGlmIChjb21wb25lbnRzLmhvc3QgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAvL25vcm1hbGl6ZSBJUCBob3N0cywgYWRkIGJyYWNrZXRzIGFuZCBlc2NhcGUgem9uZSBzZXBhcmF0b3IgZm9yIElQdjZcbiAgICAgICAgdXJpVG9rZW5zLnB1c2goX25vcm1hbGl6ZUlQdjYoX25vcm1hbGl6ZUlQdjQoU3RyaW5nKGNvbXBvbmVudHMuaG9zdCksIHByb3RvY29sKSwgcHJvdG9jb2wpLnJlcGxhY2UocHJvdG9jb2wuSVBWNkFERFJFU1MsIGZ1bmN0aW9uIChfLCAkMSwgJDIpIHtcbiAgICAgICAgICAgIHJldHVybiBcIltcIiArICQxICsgKCQyID8gXCIlMjVcIiArICQyIDogXCJcIikgKyBcIl1cIjtcbiAgICAgICAgfSkpO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIGNvbXBvbmVudHMucG9ydCA9PT0gXCJudW1iZXJcIiB8fCB0eXBlb2YgY29tcG9uZW50cy5wb3J0ID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgIHVyaVRva2Vucy5wdXNoKFwiOlwiKTtcbiAgICAgICAgdXJpVG9rZW5zLnB1c2goU3RyaW5nKGNvbXBvbmVudHMucG9ydCkpO1xuICAgIH1cbiAgICByZXR1cm4gdXJpVG9rZW5zLmxlbmd0aCA/IHVyaVRva2Vucy5qb2luKFwiXCIpIDogdW5kZWZpbmVkO1xufVxuXG52YXIgUkRTMSA9IC9eXFwuXFwuP1xcLy87XG52YXIgUkRTMiA9IC9eXFwvXFwuKFxcL3wkKS87XG52YXIgUkRTMyA9IC9eXFwvXFwuXFwuKFxcL3wkKS87XG52YXIgUkRTNSA9IC9eXFwvPyg/Oi58XFxuKSo/KD89XFwvfCQpLztcbmZ1bmN0aW9uIHJlbW92ZURvdFNlZ21lbnRzKGlucHV0KSB7XG4gICAgdmFyIG91dHB1dCA9IFtdO1xuICAgIHdoaWxlIChpbnB1dC5sZW5ndGgpIHtcbiAgICAgICAgaWYgKGlucHV0Lm1hdGNoKFJEUzEpKSB7XG4gICAgICAgICAgICBpbnB1dCA9IGlucHV0LnJlcGxhY2UoUkRTMSwgXCJcIik7XG4gICAgICAgIH0gZWxzZSBpZiAoaW5wdXQubWF0Y2goUkRTMikpIHtcbiAgICAgICAgICAgIGlucHV0ID0gaW5wdXQucmVwbGFjZShSRFMyLCBcIi9cIik7XG4gICAgICAgIH0gZWxzZSBpZiAoaW5wdXQubWF0Y2goUkRTMykpIHtcbiAgICAgICAgICAgIGlucHV0ID0gaW5wdXQucmVwbGFjZShSRFMzLCBcIi9cIik7XG4gICAgICAgICAgICBvdXRwdXQucG9wKCk7XG4gICAgICAgIH0gZWxzZSBpZiAoaW5wdXQgPT09IFwiLlwiIHx8IGlucHV0ID09PSBcIi4uXCIpIHtcbiAgICAgICAgICAgIGlucHV0ID0gXCJcIjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZhciBpbSA9IGlucHV0Lm1hdGNoKFJEUzUpO1xuICAgICAgICAgICAgaWYgKGltKSB7XG4gICAgICAgICAgICAgICAgdmFyIHMgPSBpbVswXTtcbiAgICAgICAgICAgICAgICBpbnB1dCA9IGlucHV0LnNsaWNlKHMubGVuZ3RoKTtcbiAgICAgICAgICAgICAgICBvdXRwdXQucHVzaChzKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVW5leHBlY3RlZCBkb3Qgc2VnbWVudCBjb25kaXRpb25cIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG91dHB1dC5qb2luKFwiXCIpO1xufVxuXG5mdW5jdGlvbiBzZXJpYWxpemUoY29tcG9uZW50cykge1xuICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7fTtcblxuICAgIHZhciBwcm90b2NvbCA9IG9wdGlvbnMuaXJpID8gSVJJX1BST1RPQ09MIDogVVJJX1BST1RPQ09MO1xuICAgIHZhciB1cmlUb2tlbnMgPSBbXTtcbiAgICAvL2ZpbmQgc2NoZW1lIGhhbmRsZXJcbiAgICB2YXIgc2NoZW1lSGFuZGxlciA9IFNDSEVNRVNbKG9wdGlvbnMuc2NoZW1lIHx8IGNvbXBvbmVudHMuc2NoZW1lIHx8IFwiXCIpLnRvTG93ZXJDYXNlKCldO1xuICAgIC8vcGVyZm9ybSBzY2hlbWUgc3BlY2lmaWMgc2VyaWFsaXphdGlvblxuICAgIGlmIChzY2hlbWVIYW5kbGVyICYmIHNjaGVtZUhhbmRsZXIuc2VyaWFsaXplKSBzY2hlbWVIYW5kbGVyLnNlcmlhbGl6ZShjb21wb25lbnRzLCBvcHRpb25zKTtcbiAgICBpZiAoY29tcG9uZW50cy5ob3N0KSB7XG4gICAgICAgIC8vaWYgaG9zdCBjb21wb25lbnQgaXMgYW4gSVB2NiBhZGRyZXNzXG4gICAgICAgIGlmIChwcm90b2NvbC5JUFY2QUREUkVTUy50ZXN0KGNvbXBvbmVudHMuaG9zdCkpIHt9XG4gICAgICAgIC8vVE9ETzogbm9ybWFsaXplIElQdjYgYWRkcmVzcyBhcyBwZXIgUkZDIDU5NTJcblxuICAgICAgICAvL2lmIGhvc3QgY29tcG9uZW50IGlzIGEgZG9tYWluIG5hbWVcbiAgICAgICAgZWxzZSBpZiAob3B0aW9ucy5kb21haW5Ib3N0IHx8IHNjaGVtZUhhbmRsZXIgJiYgc2NoZW1lSGFuZGxlci5kb21haW5Ib3N0KSB7XG4gICAgICAgICAgICAgICAgLy9jb252ZXJ0IElETiB2aWEgcHVueWNvZGVcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnRzLmhvc3QgPSAhb3B0aW9ucy5pcmkgPyBwdW55Y29kZS50b0FTQ0lJKGNvbXBvbmVudHMuaG9zdC5yZXBsYWNlKHByb3RvY29sLlBDVF9FTkNPREVELCBwY3REZWNDaGFycykudG9Mb3dlckNhc2UoKSkgOiBwdW55Y29kZS50b1VuaWNvZGUoY29tcG9uZW50cy5ob3N0KTtcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudHMuZXJyb3IgPSBjb21wb25lbnRzLmVycm9yIHx8IFwiSG9zdCdzIGRvbWFpbiBuYW1lIGNhbiBub3QgYmUgY29udmVydGVkIHRvIFwiICsgKCFvcHRpb25zLmlyaSA/IFwiQVNDSUlcIiA6IFwiVW5pY29kZVwiKSArIFwiIHZpYSBwdW55Y29kZTogXCIgKyBlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICB9XG4gICAgLy9ub3JtYWxpemUgZW5jb2RpbmdcbiAgICBfbm9ybWFsaXplQ29tcG9uZW50RW5jb2RpbmcoY29tcG9uZW50cywgcHJvdG9jb2wpO1xuICAgIGlmIChvcHRpb25zLnJlZmVyZW5jZSAhPT0gXCJzdWZmaXhcIiAmJiBjb21wb25lbnRzLnNjaGVtZSkge1xuICAgICAgICB1cmlUb2tlbnMucHVzaChjb21wb25lbnRzLnNjaGVtZSk7XG4gICAgICAgIHVyaVRva2Vucy5wdXNoKFwiOlwiKTtcbiAgICB9XG4gICAgdmFyIGF1dGhvcml0eSA9IF9yZWNvbXBvc2VBdXRob3JpdHkoY29tcG9uZW50cywgb3B0aW9ucyk7XG4gICAgaWYgKGF1dGhvcml0eSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGlmIChvcHRpb25zLnJlZmVyZW5jZSAhPT0gXCJzdWZmaXhcIikge1xuICAgICAgICAgICAgdXJpVG9rZW5zLnB1c2goXCIvL1wiKTtcbiAgICAgICAgfVxuICAgICAgICB1cmlUb2tlbnMucHVzaChhdXRob3JpdHkpO1xuICAgICAgICBpZiAoY29tcG9uZW50cy5wYXRoICYmIGNvbXBvbmVudHMucGF0aC5jaGFyQXQoMCkgIT09IFwiL1wiKSB7XG4gICAgICAgICAgICB1cmlUb2tlbnMucHVzaChcIi9cIik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKGNvbXBvbmVudHMucGF0aCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHZhciBzID0gY29tcG9uZW50cy5wYXRoO1xuICAgICAgICBpZiAoIW9wdGlvbnMuYWJzb2x1dGVQYXRoICYmICghc2NoZW1lSGFuZGxlciB8fCAhc2NoZW1lSGFuZGxlci5hYnNvbHV0ZVBhdGgpKSB7XG4gICAgICAgICAgICBzID0gcmVtb3ZlRG90U2VnbWVudHMocyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGF1dGhvcml0eSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBzID0gcy5yZXBsYWNlKC9eXFwvXFwvLywgXCIvJTJGXCIpOyAvL2Rvbid0IGFsbG93IHRoZSBwYXRoIHRvIHN0YXJ0IHdpdGggXCIvL1wiXG4gICAgICAgIH1cbiAgICAgICAgdXJpVG9rZW5zLnB1c2gocyk7XG4gICAgfVxuICAgIGlmIChjb21wb25lbnRzLnF1ZXJ5ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdXJpVG9rZW5zLnB1c2goXCI/XCIpO1xuICAgICAgICB1cmlUb2tlbnMucHVzaChjb21wb25lbnRzLnF1ZXJ5KTtcbiAgICB9XG4gICAgaWYgKGNvbXBvbmVudHMuZnJhZ21lbnQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICB1cmlUb2tlbnMucHVzaChcIiNcIik7XG4gICAgICAgIHVyaVRva2Vucy5wdXNoKGNvbXBvbmVudHMuZnJhZ21lbnQpO1xuICAgIH1cbiAgICByZXR1cm4gdXJpVG9rZW5zLmpvaW4oXCJcIik7IC8vbWVyZ2UgdG9rZW5zIGludG8gYSBzdHJpbmdcbn1cblxuZnVuY3Rpb24gcmVzb2x2ZUNvbXBvbmVudHMoYmFzZSwgcmVsYXRpdmUpIHtcbiAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDoge307XG4gICAgdmFyIHNraXBOb3JtYWxpemF0aW9uID0gYXJndW1lbnRzWzNdO1xuXG4gICAgdmFyIHRhcmdldCA9IHt9O1xuICAgIGlmICghc2tpcE5vcm1hbGl6YXRpb24pIHtcbiAgICAgICAgYmFzZSA9IHBhcnNlKHNlcmlhbGl6ZShiYXNlLCBvcHRpb25zKSwgb3B0aW9ucyk7IC8vbm9ybWFsaXplIGJhc2UgY29tcG9uZW50c1xuICAgICAgICByZWxhdGl2ZSA9IHBhcnNlKHNlcmlhbGl6ZShyZWxhdGl2ZSwgb3B0aW9ucyksIG9wdGlvbnMpOyAvL25vcm1hbGl6ZSByZWxhdGl2ZSBjb21wb25lbnRzXG4gICAgfVxuICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICAgIGlmICghb3B0aW9ucy50b2xlcmFudCAmJiByZWxhdGl2ZS5zY2hlbWUpIHtcbiAgICAgICAgdGFyZ2V0LnNjaGVtZSA9IHJlbGF0aXZlLnNjaGVtZTtcbiAgICAgICAgLy90YXJnZXQuYXV0aG9yaXR5ID0gcmVsYXRpdmUuYXV0aG9yaXR5O1xuICAgICAgICB0YXJnZXQudXNlcmluZm8gPSByZWxhdGl2ZS51c2VyaW5mbztcbiAgICAgICAgdGFyZ2V0Lmhvc3QgPSByZWxhdGl2ZS5ob3N0O1xuICAgICAgICB0YXJnZXQucG9ydCA9IHJlbGF0aXZlLnBvcnQ7XG4gICAgICAgIHRhcmdldC5wYXRoID0gcmVtb3ZlRG90U2VnbWVudHMocmVsYXRpdmUucGF0aCB8fCBcIlwiKTtcbiAgICAgICAgdGFyZ2V0LnF1ZXJ5ID0gcmVsYXRpdmUucXVlcnk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKHJlbGF0aXZlLnVzZXJpbmZvICE9PSB1bmRlZmluZWQgfHwgcmVsYXRpdmUuaG9zdCAhPT0gdW5kZWZpbmVkIHx8IHJlbGF0aXZlLnBvcnQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgLy90YXJnZXQuYXV0aG9yaXR5ID0gcmVsYXRpdmUuYXV0aG9yaXR5O1xuICAgICAgICAgICAgdGFyZ2V0LnVzZXJpbmZvID0gcmVsYXRpdmUudXNlcmluZm87XG4gICAgICAgICAgICB0YXJnZXQuaG9zdCA9IHJlbGF0aXZlLmhvc3Q7XG4gICAgICAgICAgICB0YXJnZXQucG9ydCA9IHJlbGF0aXZlLnBvcnQ7XG4gICAgICAgICAgICB0YXJnZXQucGF0aCA9IHJlbW92ZURvdFNlZ21lbnRzKHJlbGF0aXZlLnBhdGggfHwgXCJcIik7XG4gICAgICAgICAgICB0YXJnZXQucXVlcnkgPSByZWxhdGl2ZS5xdWVyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmICghcmVsYXRpdmUucGF0aCkge1xuICAgICAgICAgICAgICAgIHRhcmdldC5wYXRoID0gYmFzZS5wYXRoO1xuICAgICAgICAgICAgICAgIGlmIChyZWxhdGl2ZS5xdWVyeSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHRhcmdldC5xdWVyeSA9IHJlbGF0aXZlLnF1ZXJ5O1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRhcmdldC5xdWVyeSA9IGJhc2UucXVlcnk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAocmVsYXRpdmUucGF0aC5jaGFyQXQoMCkgPT09IFwiL1wiKSB7XG4gICAgICAgICAgICAgICAgICAgIHRhcmdldC5wYXRoID0gcmVtb3ZlRG90U2VnbWVudHMocmVsYXRpdmUucGF0aCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKChiYXNlLnVzZXJpbmZvICE9PSB1bmRlZmluZWQgfHwgYmFzZS5ob3N0ICE9PSB1bmRlZmluZWQgfHwgYmFzZS5wb3J0ICE9PSB1bmRlZmluZWQpICYmICFiYXNlLnBhdGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldC5wYXRoID0gXCIvXCIgKyByZWxhdGl2ZS5wYXRoO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKCFiYXNlLnBhdGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldC5wYXRoID0gcmVsYXRpdmUucGF0aDtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldC5wYXRoID0gYmFzZS5wYXRoLnNsaWNlKDAsIGJhc2UucGF0aC5sYXN0SW5kZXhPZihcIi9cIikgKyAxKSArIHJlbGF0aXZlLnBhdGg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0LnBhdGggPSByZW1vdmVEb3RTZWdtZW50cyh0YXJnZXQucGF0aCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRhcmdldC5xdWVyeSA9IHJlbGF0aXZlLnF1ZXJ5O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy90YXJnZXQuYXV0aG9yaXR5ID0gYmFzZS5hdXRob3JpdHk7XG4gICAgICAgICAgICB0YXJnZXQudXNlcmluZm8gPSBiYXNlLnVzZXJpbmZvO1xuICAgICAgICAgICAgdGFyZ2V0Lmhvc3QgPSBiYXNlLmhvc3Q7XG4gICAgICAgICAgICB0YXJnZXQucG9ydCA9IGJhc2UucG9ydDtcbiAgICAgICAgfVxuICAgICAgICB0YXJnZXQuc2NoZW1lID0gYmFzZS5zY2hlbWU7XG4gICAgfVxuICAgIHRhcmdldC5mcmFnbWVudCA9IHJlbGF0aXZlLmZyYWdtZW50O1xuICAgIHJldHVybiB0YXJnZXQ7XG59XG5cbmZ1bmN0aW9uIHJlc29sdmUoYmFzZVVSSSwgcmVsYXRpdmVVUkksIG9wdGlvbnMpIHtcbiAgICB2YXIgc2NoZW1lbGVzc09wdGlvbnMgPSBhc3NpZ24oeyBzY2hlbWU6ICdudWxsJyB9LCBvcHRpb25zKTtcbiAgICByZXR1cm4gc2VyaWFsaXplKHJlc29sdmVDb21wb25lbnRzKHBhcnNlKGJhc2VVUkksIHNjaGVtZWxlc3NPcHRpb25zKSwgcGFyc2UocmVsYXRpdmVVUkksIHNjaGVtZWxlc3NPcHRpb25zKSwgc2NoZW1lbGVzc09wdGlvbnMsIHRydWUpLCBzY2hlbWVsZXNzT3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIG5vcm1hbGl6ZSh1cmksIG9wdGlvbnMpIHtcbiAgICBpZiAodHlwZW9mIHVyaSA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICB1cmkgPSBzZXJpYWxpemUocGFyc2UodXJpLCBvcHRpb25zKSwgb3B0aW9ucyk7XG4gICAgfSBlbHNlIGlmICh0eXBlT2YodXJpKSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICB1cmkgPSBwYXJzZShzZXJpYWxpemUodXJpLCBvcHRpb25zKSwgb3B0aW9ucyk7XG4gICAgfVxuICAgIHJldHVybiB1cmk7XG59XG5cbmZ1bmN0aW9uIGVxdWFsKHVyaUEsIHVyaUIsIG9wdGlvbnMpIHtcbiAgICBpZiAodHlwZW9mIHVyaUEgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgdXJpQSA9IHNlcmlhbGl6ZShwYXJzZSh1cmlBLCBvcHRpb25zKSwgb3B0aW9ucyk7XG4gICAgfSBlbHNlIGlmICh0eXBlT2YodXJpQSkgPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgdXJpQSA9IHNlcmlhbGl6ZSh1cmlBLCBvcHRpb25zKTtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiB1cmlCID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgIHVyaUIgPSBzZXJpYWxpemUocGFyc2UodXJpQiwgb3B0aW9ucyksIG9wdGlvbnMpO1xuICAgIH0gZWxzZSBpZiAodHlwZU9mKHVyaUIpID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgIHVyaUIgPSBzZXJpYWxpemUodXJpQiwgb3B0aW9ucyk7XG4gICAgfVxuICAgIHJldHVybiB1cmlBID09PSB1cmlCO1xufVxuXG5mdW5jdGlvbiBlc2NhcGVDb21wb25lbnQoc3RyLCBvcHRpb25zKSB7XG4gICAgcmV0dXJuIHN0ciAmJiBzdHIudG9TdHJpbmcoKS5yZXBsYWNlKCFvcHRpb25zIHx8ICFvcHRpb25zLmlyaSA/IFVSSV9QUk9UT0NPTC5FU0NBUEUgOiBJUklfUFJPVE9DT0wuRVNDQVBFLCBwY3RFbmNDaGFyKTtcbn1cblxuZnVuY3Rpb24gdW5lc2NhcGVDb21wb25lbnQoc3RyLCBvcHRpb25zKSB7XG4gICAgcmV0dXJuIHN0ciAmJiBzdHIudG9TdHJpbmcoKS5yZXBsYWNlKCFvcHRpb25zIHx8ICFvcHRpb25zLmlyaSA/IFVSSV9QUk9UT0NPTC5QQ1RfRU5DT0RFRCA6IElSSV9QUk9UT0NPTC5QQ1RfRU5DT0RFRCwgcGN0RGVjQ2hhcnMpO1xufVxuXG52YXIgaGFuZGxlciA9IHtcbiAgICBzY2hlbWU6IFwiaHR0cFwiLFxuICAgIGRvbWFpbkhvc3Q6IHRydWUsXG4gICAgcGFyc2U6IGZ1bmN0aW9uIHBhcnNlKGNvbXBvbmVudHMsIG9wdGlvbnMpIHtcbiAgICAgICAgLy9yZXBvcnQgbWlzc2luZyBob3N0XG4gICAgICAgIGlmICghY29tcG9uZW50cy5ob3N0KSB7XG4gICAgICAgICAgICBjb21wb25lbnRzLmVycm9yID0gY29tcG9uZW50cy5lcnJvciB8fCBcIkhUVFAgVVJJcyBtdXN0IGhhdmUgYSBob3N0LlwiO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjb21wb25lbnRzO1xuICAgIH0sXG4gICAgc2VyaWFsaXplOiBmdW5jdGlvbiBzZXJpYWxpemUoY29tcG9uZW50cywgb3B0aW9ucykge1xuICAgICAgICB2YXIgc2VjdXJlID0gU3RyaW5nKGNvbXBvbmVudHMuc2NoZW1lKS50b0xvd2VyQ2FzZSgpID09PSBcImh0dHBzXCI7XG4gICAgICAgIC8vbm9ybWFsaXplIHRoZSBkZWZhdWx0IHBvcnRcbiAgICAgICAgaWYgKGNvbXBvbmVudHMucG9ydCA9PT0gKHNlY3VyZSA/IDQ0MyA6IDgwKSB8fCBjb21wb25lbnRzLnBvcnQgPT09IFwiXCIpIHtcbiAgICAgICAgICAgIGNvbXBvbmVudHMucG9ydCA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgICAvL25vcm1hbGl6ZSB0aGUgZW1wdHkgcGF0aFxuICAgICAgICBpZiAoIWNvbXBvbmVudHMucGF0aCkge1xuICAgICAgICAgICAgY29tcG9uZW50cy5wYXRoID0gXCIvXCI7XG4gICAgICAgIH1cbiAgICAgICAgLy9OT1RFOiBXZSBkbyBub3QgcGFyc2UgcXVlcnkgc3RyaW5ncyBmb3IgSFRUUCBVUklzXG4gICAgICAgIC8vYXMgV1dXIEZvcm0gVXJsIEVuY29kZWQgcXVlcnkgc3RyaW5ncyBhcmUgcGFydCBvZiB0aGUgSFRNTDQrIHNwZWMsXG4gICAgICAgIC8vYW5kIG5vdCB0aGUgSFRUUCBzcGVjLlxuICAgICAgICByZXR1cm4gY29tcG9uZW50cztcbiAgICB9XG59O1xuXG52YXIgaGFuZGxlciQxID0ge1xuICAgIHNjaGVtZTogXCJodHRwc1wiLFxuICAgIGRvbWFpbkhvc3Q6IGhhbmRsZXIuZG9tYWluSG9zdCxcbiAgICBwYXJzZTogaGFuZGxlci5wYXJzZSxcbiAgICBzZXJpYWxpemU6IGhhbmRsZXIuc2VyaWFsaXplXG59O1xuXG5mdW5jdGlvbiBpc1NlY3VyZSh3c0NvbXBvbmVudHMpIHtcbiAgICByZXR1cm4gdHlwZW9mIHdzQ29tcG9uZW50cy5zZWN1cmUgPT09ICdib29sZWFuJyA/IHdzQ29tcG9uZW50cy5zZWN1cmUgOiBTdHJpbmcod3NDb21wb25lbnRzLnNjaGVtZSkudG9Mb3dlckNhc2UoKSA9PT0gXCJ3c3NcIjtcbn1cbi8vUkZDIDY0NTVcbnZhciBoYW5kbGVyJDIgPSB7XG4gICAgc2NoZW1lOiBcIndzXCIsXG4gICAgZG9tYWluSG9zdDogdHJ1ZSxcbiAgICBwYXJzZTogZnVuY3Rpb24gcGFyc2UoY29tcG9uZW50cywgb3B0aW9ucykge1xuICAgICAgICB2YXIgd3NDb21wb25lbnRzID0gY29tcG9uZW50cztcbiAgICAgICAgLy9pbmRpY2F0ZSBpZiB0aGUgc2VjdXJlIGZsYWcgaXMgc2V0XG4gICAgICAgIHdzQ29tcG9uZW50cy5zZWN1cmUgPSBpc1NlY3VyZSh3c0NvbXBvbmVudHMpO1xuICAgICAgICAvL2NvbnN0cnVjdCByZXNvdWNlIG5hbWVcbiAgICAgICAgd3NDb21wb25lbnRzLnJlc291cmNlTmFtZSA9ICh3c0NvbXBvbmVudHMucGF0aCB8fCAnLycpICsgKHdzQ29tcG9uZW50cy5xdWVyeSA/ICc/JyArIHdzQ29tcG9uZW50cy5xdWVyeSA6ICcnKTtcbiAgICAgICAgd3NDb21wb25lbnRzLnBhdGggPSB1bmRlZmluZWQ7XG4gICAgICAgIHdzQ29tcG9uZW50cy5xdWVyeSA9IHVuZGVmaW5lZDtcbiAgICAgICAgcmV0dXJuIHdzQ29tcG9uZW50cztcbiAgICB9LFxuICAgIHNlcmlhbGl6ZTogZnVuY3Rpb24gc2VyaWFsaXplKHdzQ29tcG9uZW50cywgb3B0aW9ucykge1xuICAgICAgICAvL25vcm1hbGl6ZSB0aGUgZGVmYXVsdCBwb3J0XG4gICAgICAgIGlmICh3c0NvbXBvbmVudHMucG9ydCA9PT0gKGlzU2VjdXJlKHdzQ29tcG9uZW50cykgPyA0NDMgOiA4MCkgfHwgd3NDb21wb25lbnRzLnBvcnQgPT09IFwiXCIpIHtcbiAgICAgICAgICAgIHdzQ29tcG9uZW50cy5wb3J0ID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgICAgIC8vZW5zdXJlIHNjaGVtZSBtYXRjaGVzIHNlY3VyZSBmbGFnXG4gICAgICAgIGlmICh0eXBlb2Ygd3NDb21wb25lbnRzLnNlY3VyZSA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgICAgICAgICB3c0NvbXBvbmVudHMuc2NoZW1lID0gd3NDb21wb25lbnRzLnNlY3VyZSA/ICd3c3MnIDogJ3dzJztcbiAgICAgICAgICAgIHdzQ29tcG9uZW50cy5zZWN1cmUgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICAgICAgLy9yZWNvbnN0cnVjdCBwYXRoIGZyb20gcmVzb3VyY2UgbmFtZVxuICAgICAgICBpZiAod3NDb21wb25lbnRzLnJlc291cmNlTmFtZSkge1xuICAgICAgICAgICAgdmFyIF93c0NvbXBvbmVudHMkcmVzb3VyYyA9IHdzQ29tcG9uZW50cy5yZXNvdXJjZU5hbWUuc3BsaXQoJz8nKSxcbiAgICAgICAgICAgICAgICBfd3NDb21wb25lbnRzJHJlc291cmMyID0gc2xpY2VkVG9BcnJheShfd3NDb21wb25lbnRzJHJlc291cmMsIDIpLFxuICAgICAgICAgICAgICAgIHBhdGggPSBfd3NDb21wb25lbnRzJHJlc291cmMyWzBdLFxuICAgICAgICAgICAgICAgIHF1ZXJ5ID0gX3dzQ29tcG9uZW50cyRyZXNvdXJjMlsxXTtcblxuICAgICAgICAgICAgd3NDb21wb25lbnRzLnBhdGggPSBwYXRoICYmIHBhdGggIT09ICcvJyA/IHBhdGggOiB1bmRlZmluZWQ7XG4gICAgICAgICAgICB3c0NvbXBvbmVudHMucXVlcnkgPSBxdWVyeTtcbiAgICAgICAgICAgIHdzQ29tcG9uZW50cy5yZXNvdXJjZU5hbWUgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICAgICAgLy9mb3JiaWQgZnJhZ21lbnQgY29tcG9uZW50XG4gICAgICAgIHdzQ29tcG9uZW50cy5mcmFnbWVudCA9IHVuZGVmaW5lZDtcbiAgICAgICAgcmV0dXJuIHdzQ29tcG9uZW50cztcbiAgICB9XG59O1xuXG52YXIgaGFuZGxlciQzID0ge1xuICAgIHNjaGVtZTogXCJ3c3NcIixcbiAgICBkb21haW5Ib3N0OiBoYW5kbGVyJDIuZG9tYWluSG9zdCxcbiAgICBwYXJzZTogaGFuZGxlciQyLnBhcnNlLFxuICAgIHNlcmlhbGl6ZTogaGFuZGxlciQyLnNlcmlhbGl6ZVxufTtcblxudmFyIE8gPSB7fTtcbnZhciBpc0lSSSA9IHRydWU7XG4vL1JGQyAzOTg2XG52YXIgVU5SRVNFUlZFRCQkID0gXCJbQS1aYS16MC05XFxcXC1cXFxcLlxcXFxfXFxcXH5cIiArIChpc0lSSSA/IFwiXFxcXHhBMC1cXFxcdTIwMERcXFxcdTIwMTAtXFxcXHUyMDI5XFxcXHUyMDJGLVxcXFx1RDdGRlxcXFx1RjkwMC1cXFxcdUZEQ0ZcXFxcdUZERjAtXFxcXHVGRkVGXCIgOiBcIlwiKSArIFwiXVwiO1xudmFyIEhFWERJRyQkID0gXCJbMC05QS1GYS1mXVwiOyAvL2Nhc2UtaW5zZW5zaXRpdmVcbnZhciBQQ1RfRU5DT0RFRCQgPSBzdWJleHAoc3ViZXhwKFwiJVtFRmVmXVwiICsgSEVYRElHJCQgKyBcIiVcIiArIEhFWERJRyQkICsgSEVYRElHJCQgKyBcIiVcIiArIEhFWERJRyQkICsgSEVYRElHJCQpICsgXCJ8XCIgKyBzdWJleHAoXCIlWzg5QS1GYS1mXVwiICsgSEVYRElHJCQgKyBcIiVcIiArIEhFWERJRyQkICsgSEVYRElHJCQpICsgXCJ8XCIgKyBzdWJleHAoXCIlXCIgKyBIRVhESUckJCArIEhFWERJRyQkKSk7IC8vZXhwYW5kZWRcbi8vUkZDIDUzMjIsIGV4Y2VwdCB0aGVzZSBzeW1ib2xzIGFzIHBlciBSRkMgNjA2ODogQCA6IC8gPyAjIFsgXSAmIDsgPVxuLy9jb25zdCBBVEVYVCQkID0gXCJbQS1aYS16MC05XFxcXCFcXFxcI1xcXFwkXFxcXCVcXFxcJlxcXFwnXFxcXCpcXFxcK1xcXFwtXFxcXC9cXFxcPVxcXFw/XFxcXF5cXFxcX1xcXFxgXFxcXHtcXFxcfFxcXFx9XFxcXH5dXCI7XG4vL2NvbnN0IFdTUCQkID0gXCJbXFxcXHgyMFxcXFx4MDldXCI7XG4vL2NvbnN0IE9CU19RVEVYVCQkID0gXCJbXFxcXHgwMS1cXFxceDA4XFxcXHgwQlxcXFx4MENcXFxceDBFLVxcXFx4MUZcXFxceDdGXVwiOyAgLy8oJWQxLTggLyAlZDExLTEyIC8gJWQxNC0zMSAvICVkMTI3KVxuLy9jb25zdCBRVEVYVCQkID0gbWVyZ2UoXCJbXFxcXHgyMVxcXFx4MjMtXFxcXHg1QlxcXFx4NUQtXFxcXHg3RV1cIiwgT0JTX1FURVhUJCQpOyAgLy8lZDMzIC8gJWQzNS05MSAvICVkOTMtMTI2IC8gb2JzLXF0ZXh0XG4vL2NvbnN0IFZDSEFSJCQgPSBcIltcXFxceDIxLVxcXFx4N0VdXCI7XG4vL2NvbnN0IFdTUCQkID0gXCJbXFxcXHgyMFxcXFx4MDldXCI7XG4vL2NvbnN0IE9CU19RUCQgPSBzdWJleHAoXCJcXFxcXFxcXFwiICsgbWVyZ2UoXCJbXFxcXHgwMFxcXFx4MERcXFxceDBBXVwiLCBPQlNfUVRFWFQkJCkpOyAgLy8lZDAgLyBDUiAvIExGIC8gb2JzLXF0ZXh0XG4vL2NvbnN0IEZXUyQgPSBzdWJleHAoc3ViZXhwKFdTUCQkICsgXCIqXCIgKyBcIlxcXFx4MERcXFxceDBBXCIpICsgXCI/XCIgKyBXU1AkJCArIFwiK1wiKTtcbi8vY29uc3QgUVVPVEVEX1BBSVIkID0gc3ViZXhwKHN1YmV4cChcIlxcXFxcXFxcXCIgKyBzdWJleHAoVkNIQVIkJCArIFwifFwiICsgV1NQJCQpKSArIFwifFwiICsgT0JTX1FQJCk7XG4vL2NvbnN0IFFVT1RFRF9TVFJJTkckID0gc3ViZXhwKCdcXFxcXCInICsgc3ViZXhwKEZXUyQgKyBcIj9cIiArIFFDT05URU5UJCkgKyBcIipcIiArIEZXUyQgKyBcIj9cIiArICdcXFxcXCInKTtcbnZhciBBVEVYVCQkID0gXCJbQS1aYS16MC05XFxcXCFcXFxcJFxcXFwlXFxcXCdcXFxcKlxcXFwrXFxcXC1cXFxcXlxcXFxfXFxcXGBcXFxce1xcXFx8XFxcXH1cXFxcfl1cIjtcbnZhciBRVEVYVCQkID0gXCJbXFxcXCFcXFxcJFxcXFwlXFxcXCdcXFxcKFxcXFwpXFxcXCpcXFxcK1xcXFwsXFxcXC1cXFxcLjAtOVxcXFw8XFxcXD5BLVpcXFxceDVFLVxcXFx4N0VdXCI7XG52YXIgVkNIQVIkJCA9IG1lcmdlKFFURVhUJCQsIFwiW1xcXFxcXFwiXFxcXFxcXFxdXCIpO1xudmFyIFNPTUVfREVMSU1TJCQgPSBcIltcXFxcIVxcXFwkXFxcXCdcXFxcKFxcXFwpXFxcXCpcXFxcK1xcXFwsXFxcXDtcXFxcOlxcXFxAXVwiO1xudmFyIFVOUkVTRVJWRUQgPSBuZXcgUmVnRXhwKFVOUkVTRVJWRUQkJCwgXCJnXCIpO1xudmFyIFBDVF9FTkNPREVEID0gbmV3IFJlZ0V4cChQQ1RfRU5DT0RFRCQsIFwiZ1wiKTtcbnZhciBOT1RfTE9DQUxfUEFSVCA9IG5ldyBSZWdFeHAobWVyZ2UoXCJbXl1cIiwgQVRFWFQkJCwgXCJbXFxcXC5dXCIsICdbXFxcXFwiXScsIFZDSEFSJCQpLCBcImdcIik7XG52YXIgTk9UX0hGTkFNRSA9IG5ldyBSZWdFeHAobWVyZ2UoXCJbXl1cIiwgVU5SRVNFUlZFRCQkLCBTT01FX0RFTElNUyQkKSwgXCJnXCIpO1xudmFyIE5PVF9IRlZBTFVFID0gTk9UX0hGTkFNRTtcbmZ1bmN0aW9uIGRlY29kZVVucmVzZXJ2ZWQoc3RyKSB7XG4gICAgdmFyIGRlY1N0ciA9IHBjdERlY0NoYXJzKHN0cik7XG4gICAgcmV0dXJuICFkZWNTdHIubWF0Y2goVU5SRVNFUlZFRCkgPyBzdHIgOiBkZWNTdHI7XG59XG52YXIgaGFuZGxlciQ0ID0ge1xuICAgIHNjaGVtZTogXCJtYWlsdG9cIixcbiAgICBwYXJzZTogZnVuY3Rpb24gcGFyc2UkJDEoY29tcG9uZW50cywgb3B0aW9ucykge1xuICAgICAgICB2YXIgbWFpbHRvQ29tcG9uZW50cyA9IGNvbXBvbmVudHM7XG4gICAgICAgIHZhciB0byA9IG1haWx0b0NvbXBvbmVudHMudG8gPSBtYWlsdG9Db21wb25lbnRzLnBhdGggPyBtYWlsdG9Db21wb25lbnRzLnBhdGguc3BsaXQoXCIsXCIpIDogW107XG4gICAgICAgIG1haWx0b0NvbXBvbmVudHMucGF0aCA9IHVuZGVmaW5lZDtcbiAgICAgICAgaWYgKG1haWx0b0NvbXBvbmVudHMucXVlcnkpIHtcbiAgICAgICAgICAgIHZhciB1bmtub3duSGVhZGVycyA9IGZhbHNlO1xuICAgICAgICAgICAgdmFyIGhlYWRlcnMgPSB7fTtcbiAgICAgICAgICAgIHZhciBoZmllbGRzID0gbWFpbHRvQ29tcG9uZW50cy5xdWVyeS5zcGxpdChcIiZcIik7XG4gICAgICAgICAgICBmb3IgKHZhciB4ID0gMCwgeGwgPSBoZmllbGRzLmxlbmd0aDsgeCA8IHhsOyArK3gpIHtcbiAgICAgICAgICAgICAgICB2YXIgaGZpZWxkID0gaGZpZWxkc1t4XS5zcGxpdChcIj1cIik7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChoZmllbGRbMF0pIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcInRvXCI6XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgdG9BZGRycyA9IGhmaWVsZFsxXS5zcGxpdChcIixcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBfeCA9IDAsIF94bCA9IHRvQWRkcnMubGVuZ3RoOyBfeCA8IF94bDsgKytfeCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvLnB1c2godG9BZGRyc1tfeF0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJzdWJqZWN0XCI6XG4gICAgICAgICAgICAgICAgICAgICAgICBtYWlsdG9Db21wb25lbnRzLnN1YmplY3QgPSB1bmVzY2FwZUNvbXBvbmVudChoZmllbGRbMV0sIG9wdGlvbnMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJib2R5XCI6XG4gICAgICAgICAgICAgICAgICAgICAgICBtYWlsdG9Db21wb25lbnRzLmJvZHkgPSB1bmVzY2FwZUNvbXBvbmVudChoZmllbGRbMV0sIG9wdGlvbnMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgICAgICB1bmtub3duSGVhZGVycyA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWFkZXJzW3VuZXNjYXBlQ29tcG9uZW50KGhmaWVsZFswXSwgb3B0aW9ucyldID0gdW5lc2NhcGVDb21wb25lbnQoaGZpZWxkWzFdLCBvcHRpb25zKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh1bmtub3duSGVhZGVycykgbWFpbHRvQ29tcG9uZW50cy5oZWFkZXJzID0gaGVhZGVycztcbiAgICAgICAgfVxuICAgICAgICBtYWlsdG9Db21wb25lbnRzLnF1ZXJ5ID0gdW5kZWZpbmVkO1xuICAgICAgICBmb3IgKHZhciBfeDIgPSAwLCBfeGwyID0gdG8ubGVuZ3RoOyBfeDIgPCBfeGwyOyArK194Mikge1xuICAgICAgICAgICAgdmFyIGFkZHIgPSB0b1tfeDJdLnNwbGl0KFwiQFwiKTtcbiAgICAgICAgICAgIGFkZHJbMF0gPSB1bmVzY2FwZUNvbXBvbmVudChhZGRyWzBdKTtcbiAgICAgICAgICAgIGlmICghb3B0aW9ucy51bmljb2RlU3VwcG9ydCkge1xuICAgICAgICAgICAgICAgIC8vY29udmVydCBVbmljb2RlIElETiAtPiBBU0NJSSBJRE5cbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBhZGRyWzFdID0gcHVueWNvZGUudG9BU0NJSSh1bmVzY2FwZUNvbXBvbmVudChhZGRyWzFdLCBvcHRpb25zKS50b0xvd2VyQ2FzZSgpKTtcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgIG1haWx0b0NvbXBvbmVudHMuZXJyb3IgPSBtYWlsdG9Db21wb25lbnRzLmVycm9yIHx8IFwiRW1haWwgYWRkcmVzcydzIGRvbWFpbiBuYW1lIGNhbiBub3QgYmUgY29udmVydGVkIHRvIEFTQ0lJIHZpYSBwdW55Y29kZTogXCIgKyBlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgYWRkclsxXSA9IHVuZXNjYXBlQ29tcG9uZW50KGFkZHJbMV0sIG9wdGlvbnMpLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0b1tfeDJdID0gYWRkci5qb2luKFwiQFwiKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbWFpbHRvQ29tcG9uZW50cztcbiAgICB9LFxuICAgIHNlcmlhbGl6ZTogZnVuY3Rpb24gc2VyaWFsaXplJCQxKG1haWx0b0NvbXBvbmVudHMsIG9wdGlvbnMpIHtcbiAgICAgICAgdmFyIGNvbXBvbmVudHMgPSBtYWlsdG9Db21wb25lbnRzO1xuICAgICAgICB2YXIgdG8gPSB0b0FycmF5KG1haWx0b0NvbXBvbmVudHMudG8pO1xuICAgICAgICBpZiAodG8pIHtcbiAgICAgICAgICAgIGZvciAodmFyIHggPSAwLCB4bCA9IHRvLmxlbmd0aDsgeCA8IHhsOyArK3gpIHtcbiAgICAgICAgICAgICAgICB2YXIgdG9BZGRyID0gU3RyaW5nKHRvW3hdKTtcbiAgICAgICAgICAgICAgICB2YXIgYXRJZHggPSB0b0FkZHIubGFzdEluZGV4T2YoXCJAXCIpO1xuICAgICAgICAgICAgICAgIHZhciBsb2NhbFBhcnQgPSB0b0FkZHIuc2xpY2UoMCwgYXRJZHgpLnJlcGxhY2UoUENUX0VOQ09ERUQsIGRlY29kZVVucmVzZXJ2ZWQpLnJlcGxhY2UoUENUX0VOQ09ERUQsIHRvVXBwZXJDYXNlKS5yZXBsYWNlKE5PVF9MT0NBTF9QQVJULCBwY3RFbmNDaGFyKTtcbiAgICAgICAgICAgICAgICB2YXIgZG9tYWluID0gdG9BZGRyLnNsaWNlKGF0SWR4ICsgMSk7XG4gICAgICAgICAgICAgICAgLy9jb252ZXJ0IElETiB2aWEgcHVueWNvZGVcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBkb21haW4gPSAhb3B0aW9ucy5pcmkgPyBwdW55Y29kZS50b0FTQ0lJKHVuZXNjYXBlQ29tcG9uZW50KGRvbWFpbiwgb3B0aW9ucykudG9Mb3dlckNhc2UoKSkgOiBwdW55Y29kZS50b1VuaWNvZGUoZG9tYWluKTtcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudHMuZXJyb3IgPSBjb21wb25lbnRzLmVycm9yIHx8IFwiRW1haWwgYWRkcmVzcydzIGRvbWFpbiBuYW1lIGNhbiBub3QgYmUgY29udmVydGVkIHRvIFwiICsgKCFvcHRpb25zLmlyaSA/IFwiQVNDSUlcIiA6IFwiVW5pY29kZVwiKSArIFwiIHZpYSBwdW55Y29kZTogXCIgKyBlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0b1t4XSA9IGxvY2FsUGFydCArIFwiQFwiICsgZG9tYWluO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29tcG9uZW50cy5wYXRoID0gdG8uam9pbihcIixcIik7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGhlYWRlcnMgPSBtYWlsdG9Db21wb25lbnRzLmhlYWRlcnMgPSBtYWlsdG9Db21wb25lbnRzLmhlYWRlcnMgfHwge307XG4gICAgICAgIGlmIChtYWlsdG9Db21wb25lbnRzLnN1YmplY3QpIGhlYWRlcnNbXCJzdWJqZWN0XCJdID0gbWFpbHRvQ29tcG9uZW50cy5zdWJqZWN0O1xuICAgICAgICBpZiAobWFpbHRvQ29tcG9uZW50cy5ib2R5KSBoZWFkZXJzW1wiYm9keVwiXSA9IG1haWx0b0NvbXBvbmVudHMuYm9keTtcbiAgICAgICAgdmFyIGZpZWxkcyA9IFtdO1xuICAgICAgICBmb3IgKHZhciBuYW1lIGluIGhlYWRlcnMpIHtcbiAgICAgICAgICAgIGlmIChoZWFkZXJzW25hbWVdICE9PSBPW25hbWVdKSB7XG4gICAgICAgICAgICAgICAgZmllbGRzLnB1c2gobmFtZS5yZXBsYWNlKFBDVF9FTkNPREVELCBkZWNvZGVVbnJlc2VydmVkKS5yZXBsYWNlKFBDVF9FTkNPREVELCB0b1VwcGVyQ2FzZSkucmVwbGFjZShOT1RfSEZOQU1FLCBwY3RFbmNDaGFyKSArIFwiPVwiICsgaGVhZGVyc1tuYW1lXS5yZXBsYWNlKFBDVF9FTkNPREVELCBkZWNvZGVVbnJlc2VydmVkKS5yZXBsYWNlKFBDVF9FTkNPREVELCB0b1VwcGVyQ2FzZSkucmVwbGFjZShOT1RfSEZWQUxVRSwgcGN0RW5jQ2hhcikpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChmaWVsZHMubGVuZ3RoKSB7XG4gICAgICAgICAgICBjb21wb25lbnRzLnF1ZXJ5ID0gZmllbGRzLmpvaW4oXCImXCIpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjb21wb25lbnRzO1xuICAgIH1cbn07XG5cbnZhciBVUk5fUEFSU0UgPSAvXihbXlxcOl0rKVxcOiguKikvO1xuLy9SRkMgMjE0MVxudmFyIGhhbmRsZXIkNSA9IHtcbiAgICBzY2hlbWU6IFwidXJuXCIsXG4gICAgcGFyc2U6IGZ1bmN0aW9uIHBhcnNlJCQxKGNvbXBvbmVudHMsIG9wdGlvbnMpIHtcbiAgICAgICAgdmFyIG1hdGNoZXMgPSBjb21wb25lbnRzLnBhdGggJiYgY29tcG9uZW50cy5wYXRoLm1hdGNoKFVSTl9QQVJTRSk7XG4gICAgICAgIHZhciB1cm5Db21wb25lbnRzID0gY29tcG9uZW50cztcbiAgICAgICAgaWYgKG1hdGNoZXMpIHtcbiAgICAgICAgICAgIHZhciBzY2hlbWUgPSBvcHRpb25zLnNjaGVtZSB8fCB1cm5Db21wb25lbnRzLnNjaGVtZSB8fCBcInVyblwiO1xuICAgICAgICAgICAgdmFyIG5pZCA9IG1hdGNoZXNbMV0udG9Mb3dlckNhc2UoKTtcbiAgICAgICAgICAgIHZhciBuc3MgPSBtYXRjaGVzWzJdO1xuICAgICAgICAgICAgdmFyIHVyblNjaGVtZSA9IHNjaGVtZSArIFwiOlwiICsgKG9wdGlvbnMubmlkIHx8IG5pZCk7XG4gICAgICAgICAgICB2YXIgc2NoZW1lSGFuZGxlciA9IFNDSEVNRVNbdXJuU2NoZW1lXTtcbiAgICAgICAgICAgIHVybkNvbXBvbmVudHMubmlkID0gbmlkO1xuICAgICAgICAgICAgdXJuQ29tcG9uZW50cy5uc3MgPSBuc3M7XG4gICAgICAgICAgICB1cm5Db21wb25lbnRzLnBhdGggPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICBpZiAoc2NoZW1lSGFuZGxlcikge1xuICAgICAgICAgICAgICAgIHVybkNvbXBvbmVudHMgPSBzY2hlbWVIYW5kbGVyLnBhcnNlKHVybkNvbXBvbmVudHMsIG9wdGlvbnMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdXJuQ29tcG9uZW50cy5lcnJvciA9IHVybkNvbXBvbmVudHMuZXJyb3IgfHwgXCJVUk4gY2FuIG5vdCBiZSBwYXJzZWQuXCI7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHVybkNvbXBvbmVudHM7XG4gICAgfSxcbiAgICBzZXJpYWxpemU6IGZ1bmN0aW9uIHNlcmlhbGl6ZSQkMSh1cm5Db21wb25lbnRzLCBvcHRpb25zKSB7XG4gICAgICAgIHZhciBzY2hlbWUgPSBvcHRpb25zLnNjaGVtZSB8fCB1cm5Db21wb25lbnRzLnNjaGVtZSB8fCBcInVyblwiO1xuICAgICAgICB2YXIgbmlkID0gdXJuQ29tcG9uZW50cy5uaWQ7XG4gICAgICAgIHZhciB1cm5TY2hlbWUgPSBzY2hlbWUgKyBcIjpcIiArIChvcHRpb25zLm5pZCB8fCBuaWQpO1xuICAgICAgICB2YXIgc2NoZW1lSGFuZGxlciA9IFNDSEVNRVNbdXJuU2NoZW1lXTtcbiAgICAgICAgaWYgKHNjaGVtZUhhbmRsZXIpIHtcbiAgICAgICAgICAgIHVybkNvbXBvbmVudHMgPSBzY2hlbWVIYW5kbGVyLnNlcmlhbGl6ZSh1cm5Db21wb25lbnRzLCBvcHRpb25zKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgdXJpQ29tcG9uZW50cyA9IHVybkNvbXBvbmVudHM7XG4gICAgICAgIHZhciBuc3MgPSB1cm5Db21wb25lbnRzLm5zcztcbiAgICAgICAgdXJpQ29tcG9uZW50cy5wYXRoID0gKG5pZCB8fCBvcHRpb25zLm5pZCkgKyBcIjpcIiArIG5zcztcbiAgICAgICAgcmV0dXJuIHVyaUNvbXBvbmVudHM7XG4gICAgfVxufTtcblxudmFyIFVVSUQgPSAvXlswLTlBLUZhLWZdezh9KD86XFwtWzAtOUEtRmEtZl17NH0pezN9XFwtWzAtOUEtRmEtZl17MTJ9JC87XG4vL1JGQyA0MTIyXG52YXIgaGFuZGxlciQ2ID0ge1xuICAgIHNjaGVtZTogXCJ1cm46dXVpZFwiLFxuICAgIHBhcnNlOiBmdW5jdGlvbiBwYXJzZSh1cm5Db21wb25lbnRzLCBvcHRpb25zKSB7XG4gICAgICAgIHZhciB1dWlkQ29tcG9uZW50cyA9IHVybkNvbXBvbmVudHM7XG4gICAgICAgIHV1aWRDb21wb25lbnRzLnV1aWQgPSB1dWlkQ29tcG9uZW50cy5uc3M7XG4gICAgICAgIHV1aWRDb21wb25lbnRzLm5zcyA9IHVuZGVmaW5lZDtcbiAgICAgICAgaWYgKCFvcHRpb25zLnRvbGVyYW50ICYmICghdXVpZENvbXBvbmVudHMudXVpZCB8fCAhdXVpZENvbXBvbmVudHMudXVpZC5tYXRjaChVVUlEKSkpIHtcbiAgICAgICAgICAgIHV1aWRDb21wb25lbnRzLmVycm9yID0gdXVpZENvbXBvbmVudHMuZXJyb3IgfHwgXCJVVUlEIGlzIG5vdCB2YWxpZC5cIjtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdXVpZENvbXBvbmVudHM7XG4gICAgfSxcbiAgICBzZXJpYWxpemU6IGZ1bmN0aW9uIHNlcmlhbGl6ZSh1dWlkQ29tcG9uZW50cywgb3B0aW9ucykge1xuICAgICAgICB2YXIgdXJuQ29tcG9uZW50cyA9IHV1aWRDb21wb25lbnRzO1xuICAgICAgICAvL25vcm1hbGl6ZSBVVUlEXG4gICAgICAgIHVybkNvbXBvbmVudHMubnNzID0gKHV1aWRDb21wb25lbnRzLnV1aWQgfHwgXCJcIikudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgcmV0dXJuIHVybkNvbXBvbmVudHM7XG4gICAgfVxufTtcblxuU0NIRU1FU1toYW5kbGVyLnNjaGVtZV0gPSBoYW5kbGVyO1xuU0NIRU1FU1toYW5kbGVyJDEuc2NoZW1lXSA9IGhhbmRsZXIkMTtcblNDSEVNRVNbaGFuZGxlciQyLnNjaGVtZV0gPSBoYW5kbGVyJDI7XG5TQ0hFTUVTW2hhbmRsZXIkMy5zY2hlbWVdID0gaGFuZGxlciQzO1xuU0NIRU1FU1toYW5kbGVyJDQuc2NoZW1lXSA9IGhhbmRsZXIkNDtcblNDSEVNRVNbaGFuZGxlciQ1LnNjaGVtZV0gPSBoYW5kbGVyJDU7XG5TQ0hFTUVTW2hhbmRsZXIkNi5zY2hlbWVdID0gaGFuZGxlciQ2O1xuXG5leHBvcnRzLlNDSEVNRVMgPSBTQ0hFTUVTO1xuZXhwb3J0cy5wY3RFbmNDaGFyID0gcGN0RW5jQ2hhcjtcbmV4cG9ydHMucGN0RGVjQ2hhcnMgPSBwY3REZWNDaGFycztcbmV4cG9ydHMucGFyc2UgPSBwYXJzZTtcbmV4cG9ydHMucmVtb3ZlRG90U2VnbWVudHMgPSByZW1vdmVEb3RTZWdtZW50cztcbmV4cG9ydHMuc2VyaWFsaXplID0gc2VyaWFsaXplO1xuZXhwb3J0cy5yZXNvbHZlQ29tcG9uZW50cyA9IHJlc29sdmVDb21wb25lbnRzO1xuZXhwb3J0cy5yZXNvbHZlID0gcmVzb2x2ZTtcbmV4cG9ydHMubm9ybWFsaXplID0gbm9ybWFsaXplO1xuZXhwb3J0cy5lcXVhbCA9IGVxdWFsO1xuZXhwb3J0cy5lc2NhcGVDb21wb25lbnQgPSBlc2NhcGVDb21wb25lbnQ7XG5leHBvcnRzLnVuZXNjYXBlQ29tcG9uZW50ID0gdW5lc2NhcGVDb21wb25lbnQ7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbn0pKSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD11cmkuYWxsLmpzLm1hcFxuIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQjRBQUFBZUNBWUFBQUE3TUs2aUFBQUJ2RWxFUVZSSVMrWFd2VXJEVUJRSDhQKzUxcVorMEM2dTR1d29SUWVuQ3NYRzc4a1g4QUhFVnNGUnh3N2FGRGRCSDBBM1FVb2pJazZLSUQ2Qm9FTEIzWUtTdE0yUm9OWGFKalZwYnhVeFU0Wjc4anZuM25QdkRlR1hIdm9sRjM4SG50cmhNTXJsRVNadlNUTlhDbm9xZEZzL3M3NHFUbVNNQlNJY0FGQjhMUkVqbDA4cE03VXh2bUJWTTQ0QXpQdEMzd2N6S0tvbmd6ZlZXRjl3UWpQU0JLeTNBZ05pSXAvc1BtOEpYanprcm1MQldBWlJ4QWxuUnBRSXM4Nkp0UUUzcTFUTm1xTmdQZ1VRL2pIWVJwbjVqSUIrOStRa1YreUNHZ0JmQWhUN1RFUWk3STRLRmJCc2RFTTYzQXkxdTFmVmpFM3A4SGVvWGFWMDJBc3FIZmFLU29VbnQwdmpKQ3k5YnNzWWdGQnJUNlJxTTBtWmFoc1ZaSjJDMEZPelQxMVJlOHlrWmk0SjhMNzl6a0FKQ0E3cFNYcjBmR1E2b293WGtKaDJxclQ2WWZ0NGZTb1lXWUFHV2ZEZXlVcm8yUFB0NUlaYUxPSW5xOTBYclYwV2IxR3V0MU1uVVZlNDA2Z2ovQk5vQXh6YjRnRkZtUGRFNlB0WVA4YUxqRFd0NzRjdmE1ekltR05FZk5WcHRLSGl1VjN1TlovTmF3S0d3U2hhTE5SMnU5ZXQ4eHU2T3A3bVNFQXBqNGhLNEM2M1JnL3RiSmxtc2I1KzltUW04Zi9nVnhXZi94OVlzYitPQUFBQUFFbEZUa1N1UW1DQ1wiIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQjRBQUFBZUNBWUFBQUE3TUs2aUFBQUVmRWxFUVZSSVM4V1dhNGhVWlJqSC8vOHpYdEtGRkFyeWJzMDV3VUlTVVVMcUI5RTlSN3ZRQlQ4WUlibFNHVmdXVnU2TVZwU1RaTHQ3eGt6UWJoU3BHWFNURWhHelBHZVdncWhQaVlaQ2NzN3NxdWdTVVgweE56Zm4vR05HWjUyWkhlY1NndWZUOE03elBML25lWi9MK3hCWDZlTlY0cUp4c01BTzM1cGxFQXNGVFFFd2llQjVTZjBnKzZUY3ZvMU83K0ZHQTZrTGZtYWZOZnFhMFVvQVhFWGcrcHFHaGF5TWFFTjZmblliQ05XU3JRbE9ldVo4RWRzSVRvY1VnZlFqUnR1Uk0wN25qUnJVZUFEVFFNeVFNSS9relJkaGh4aEZTN3NYWkgrNUhQeXk0S1JucmdiZ2dqUUE3RG12S0xISnlSNnJGVVd5Sno1VGtiR1Z3SjJDQmlBOG1uYkN6NnJwVkFVblBPdFZFcTlJK0pzR2xyaHR3WjVHYzVlWFMzaG1ra0JuM3VsSVdMclJDVDZ1MUI4Rzd2Q3NSd3hpSjZTek5LSTUzVzI5aDVxQkZtVVQvazBMZ2RoZVNQa2J1eS90aFB0TDdaU0IxeHlJajR0b25DQnhMWlJiN0RxOXV5cWhpejlIN01icjRnK2w3ZXduOVJ4S1pNeDJpanNrbld5WkdGcXBXekJZMUNrREozM3pOWUF2U2RpYmRvTDdxMFBOTHdndUdxSGNoTmVkM3QvcXdaT2U5U09JV1VEMG5HdG5OdzhIQzB6NjF1K0N4c2RpYU8yYUh3YWxSaTlFZWdHYVB4OGMrZStrelhPUDk5Y0ZaK0kyWkhpQWZuWHRzSFVZZUkxdnpoSDRnNER2MG5Zd3J4YTBHWEJlTnVtWnAwRk9GR0NsN1NETW53MWRkZEszMWdGSVVWamQ3UVNiaXVES1NFc2NPaU9vRDJJZm9LTVJ1T01OSnpoYTdRYVN2cmtGNE5OQTlLUnJaOTh0QjN2bWRwRExKTjFUck1BYTBHSDJCUW5DemhINDUvbE81OVFmcFFKSnozb0t4RnRRMU9rNjJSZkx3QW5QUEVEU0lYTzNGVnNvNFp2dkUxeGVMNCtsL3dzNEZkUGczQzduUkxaNDN1R2Jpd3p3U3dEYlhEdDRyQ3BZd0IxcE8vaTVrQnMvdmdJdzNta0dYSkFWRHJwT2NQc1FPR005YUFpN0JYMlF0c01uS3NFN1NMWkRXdVE2NGU2aVV0S1BQd3NZYnpZTEYzSjNwZTNlYjBzRGtMQSs3UVQ1V2lvcnJoU0FkUUs2MG5id1FsbU8vZ2U4RkpMd3pjMEVWNG5SNCttMjdJZGw0R0k3UVRyaE91SDB5Z2dySXg4NzdteExhdWJwczZrZWpEaGpUSitLM01oYkdXa0Z5YnN2NkdxbmE0ZnQrVjhKMyt3bk9BRzVjNVBkaFNjTEw5dWx5VlVZSU9aZklNZEZrTDNSRGpPMTRFVndwVXlIYjdaUi9BclExMmtuZkRoNWFZQWNjZTF3UmxHK2ZHUm16SmNocm9md2src0VzNnZsTmVGYmF5bHRHQmprMkMzM0J1ZXE5bTJQTlNXV0d4am90RS85bWNoWVJ3bTBRbGpwT3NIYlZjSDViV1BNS0IwRE9hMXlrSlFDMW5yVDRxWHRjcm5DUzJUaVd5bGpaZDFISW0rZ3c3Tm1HOFQzZ21LR3NLVGJDVDl0dHFJTGVSMTYwNVdyK3l3T3RWREdURUIwQzlPSVdsNnN4RVljeUQrdE1veVBBRHlRbDI5NEVSaUNlK1pxQWQwa1l4QjJpVmhiSFBEVkhPajQ1b1lXeGxxV2cwd1JIQy9oSEtCbFRhMCtKZkN5WlUvZ1lSQTlGQUlaVVI4ampoSXhGY0pNRUlzSmpybllTa2NFdGhjbllEVkhtMWh2c2JMUWl6VStRY2NCZGJlMFpkOUxFVkV0MmJyZ0llV0xDejBSTFFBNWxjQmtnZWNoOWROZ241SEQvcTRGd2NGRzZxQjhnRFNxY1lYa0dvLzRDZ0dMWnY0RDYwRVBQV3pqQjY4QUFBQUFTVVZPUks1Q1lJST1cIiIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUNBQUFBQWdDQVlBQUFCemVucjBBQUFCa0VsRVFWUllSKzJXdjA3Q2NCREhmMWVhYU5xK2hhTXY0QW85ZGsxOEJaaEFGMWlJVHNRNFFGeGdFWjdCNkV5TzJWZHc4aWxvb3duaFRLc2x0ZW1mWDY5REdmaXR2YnZ2cDkrNzN4OVFOUytvV1Y4ZEFRN1RnZTltODN4cm1rL0F2TENJWHFyTWllKzZOenZEdURDWjcwNkpQcE8xVWgzd0VGOFZ3R1VRRE14OWkyZ3VnZkFSZXd3d0MzT1ozMnlpS3oyQWRudWtsSHFJZ2lVUS84UUQvZDF1NUt6WGoxb0FRWkNIdUZBQUhRbEVVbHd4TDIyaWJwcUx1VU1vZ2RnZ0RnQmdzaGZMRVE5YlhOVGJKQVF6RHgyaWFWcGVpdmpjSnVybmFSUUMvTFZqcGdCNlVhRTBDSW00bGdPUnFJZVlDU0VWTHdXUTVVUllKTlp6WnA0NlJNT2kxdTZIV3pjd3k0bDRmbG54MGc3a1FVakV4UUFieEFrQURLcit2UWdnT1l4VkliUzJZYWIxelBmaE40Qng3T0FwM1B0eGFHMkFXcmVoem1rb1BRc0tIZEFSanl5VlFCem1aY1JLZ1kvNFhOdDE3Tlg5SUlrL3lSUnoxeVphbGoyeWczanhrK3lyMVRyYk5ocGpnL25kSXZwOTB3bVg3N3JYYkJnZEUrRDJaTFg2U0pZcDNBVkNYZTIwSThEUmdSL0V2Q2N3SWxQanhnQUFBQUJKUlU1RXJrSmdnZz09XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFCNEFBQUFlQ0FZQUFBQTdNSzZpQUFBRVVFbEVRVlJJUysyVlhXd1VaUlNHMy9lYmJVdWhmN09oMVF0UjIrNHVtQWJUQk9OUC9Fbnc1d0x4UWhMREJSaWxRRmk3dzQrYVlERFJwSWxDZzZrYTI4NDJqVkFNTVFSTUJMelFWS01KSk1SSVZCTFFBTzVzcVZnVWhXUm10eENLN2M0Y00xdkF0ZExkTFNiMHhybWF6SGZtUE9kOXYzTytqNWltaDlQRXhmL2dtK2I4alZuZEpxcWkxcG9iVUx6RnI1U2l1Y3k0Zy9iNjhKbGlLeThhSE95Mm1rUnhMU0hORUprUDRveUF2NCtEUkJHY0MwaTVnTi9EVmV1ZGRZMC81Q3VpTUxoTkFucGQ4aFVJTnBMb2RKVWMwa1o1MkY0ZkhzNU5yUGNPM0g2Sm1ERnp6RjBJWWdzRVc1M3o0UTYwMGJ0ZUFYbkIxZkZFZ3dMMkFoaG1oc3Q4SzNYVFdwNU5EQXg2R2xhbG8rR0JvSm5ZQVhLRmlHUUFiaERSUGlVekg1STRZTWNpcjA4TjdDdXRUUjRSeVBhVUVYbnY2czlCMHhvQ2NWdldZR0NyVTFINWhuN3hRcHFBbHYwbU9PSVk0UVZWMjRhQ2dkR1JIejBWV0pSNm9lSG9SUGlraXZXNHRSa2k5WTdMbG1xRnB2U3N3SEcwMUYvV3pjUkJrbytNSjJMVVB0ZTRUYSt6L2lBNCt3cjRFOGNJUCsyLzYvSGtJb3IzdGwwNzFveWxUYU81OE91Q3ErUEpCWnJJZnJob2dpWWZnRndpSXA4NVJtUnhSVSt5cnNTVE53RWVjMm9iZTdDVWJvMlphQ2JZRGtyS1Exa3NIYnZEdVFyUjQ0bEJJVnRTcmVFREJjRjYzTm9wUko4ZkhJd25EZ084VnlCSG5WaWt1ZGh4K1J0czdRTzV4MmtON1M0SURwcUpMMjBqOG5qV3JxNkIrZFM4Snp5bGZYVjFyNnE3ZnE1WDJ1Z210N1Q4MWVIVmMreDh4ZWhtY2lzZ3B4MGpITThQZm1lb1hDOGI2ZmNVT3BYd1dWZlVsbUdqOGR2Y242cTZFL2NGRkw4QjVOZU1hRXNtcnY5anpFeHJqd2RzVHh2aEwvS0NxM3VTanlwUG5nY3doOFJDZ1hRNHNjakdpYXFDWm1LdnYvY1FPV2tia2JzbVV4MDBFOGN2QjBvZnV4Uzk4Mnhlc040OThDU1V0eHhrSEo2OGhvQ0tPdEhHWHlZbXJ1ejlhYmJtcW5ZRnJQYUlWYW5XY04rLzRMMVNvbWVzczQ0UnlYWjhmc1h4UklNbVBHZ0hRZzJJY3F4UU0razlWaXM4ZEF2WWtqSkNPM1BqYTNxc2xVb3czNDZGWHlvSXpqYVVhZTBueEhPcE5xZTF4bU9GQ3NqQ0JhWUlWMXlEYno5WkdieXNmV2ZQY08vQnFua1hpZ0tqMHlxckNjZ3lDcDRCY1QrZ1BuSmlvVmEwaWFxcEd6QW84aERCSGJZUjZyODJObGZnRkVadEkvUitqV2wxZ0R5ZGlvVzZydWRhNFV2Q1BGZWhNOTN2VW50WkV6Y0M0S25SRW0xRDZWam1hNmU4cE1rL3pYTGhGTVJGdUU0b3dkVHMwR2IvZ0xreDhMajE3U1RPQzNpQ0lpdEhGWTFTa1VOMmVlRHVYTEFQcUlsYkx5cmdYUi91R0tIdXlYcWtzT0xzbVh2cVlZajc4WjlRaTB2cFBVakJBMVRvczF2RG4vdUpaNW1EdDVZd3M0YkFjeFN1OVNqemZEaUVHMjBqMUhIRGlyTkt6TVFHRW04Qk9BRXdOWjVNZEFCVkVBNlMzRzFMMVM0WWRSZHpsVThHTDByeHRZcDdmNXRabFJscFVzcWJCZkZ2UUJsS3h5S25Kck5UTjYxTkpOb2hYT00zWE40NUxqUzNVMTIvNHRSNUp4YlpkVlBCLzZtNXBxcXltUGlwN1hFeEdZdU1tVGJ3WDVORnppNDhzaXhVQUFBQUFFbEZUa1N1UW1DQ1wiIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2Uvdm5kLm1pY3Jvc29mdC5pY29uO2Jhc2U2NCxBQUFCQUFRQUlDQUFBQUVBQ0FDb0NBQUFSZ0FBQUJBUUFBQUJBQWdBYUFVQUFPNElBQUFnSUFBQUFRQWdBS2dRQUFCV0RnQUFFQkFBQUFFQUlBQm9CQUFBL2g0QUFDZ0FBQUFnQUFBQVFBQUFBQUVBQ0FBQUFBQUFBQVFBQUFBQUFBQUFBQUFBQUFFQUFBQUJBQUFBQUFBQUFGWC9BQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFELy8vOEFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFELy8vLy9BQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUEvd0VCQVFIL0FBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQVA4QkFmLy9BUUgvQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUEvd0VCLy84QkFmOEFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBUC8vQUFEL0FRSC8vd0VCL3dBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQS93RC9BUDhCQWYvL0FRSC9BQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUQvQUFELy93RUIvLzhCQWY4QUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFQOEFBQUQvLy8vLy8vLy9BQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBL3dBQUFBQUFBQUQvQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBRC9BQUFBQUFBQS93QUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQVA4QUFBQUFBUDhBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUEvd0FBQUFEL0FBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFEL0FBQUEvd0FBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBUDhBQVA4QUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQS93RC9BQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUQvL3dBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFQLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLzhQLy8vK0IvLy8vQVAvLy93RC8vL01BLy8veEFQLy84QUQvLy9BQi8vL3dCLy8vOEEvLy8vQWYvLy93UC8vLzhILy8vL0QvLy8veC8vLy84Ly8vLy9LQUFBQUJBQUFBQWdBQUFBQVFBSUFBQUFBQUFBQVFBQUFBQUFBQUFBQUFBQUFRQUFBQUVBQUFBQUFBQUFWZjhBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFQLy8vd0FBQUFBQUFBRC8vLy8vQUFBQUFBQUFBQUFBQUFEL0FRRUJBZjhBQUFBQUFBQUFBQUQvQVFILy93RUIvd0FBQUFBQUFBQUEvd0VCLy84QkFmOEFBQUFBLy84QUFQOEJBZi8vQVFIL0FBQUFBUDhBL3dEL0FRSC8vd0VCL3dBQUFBRC9BQUQvL3dFQi8vOEJBZjhBQUFBQS93QUFBUC8vLy8vLy8vOEFBQUFBQVA4QUFBQUFBQUFBL3dBQUFBQUFBQUQvQUFBQUFBQUEvd0FBQUFBQUFBQUEvd0FBQUFBQS93QUFBQUFBQUFBQUFQOEFBQUFBL3dBQUFBQUFBQUFBQUFEL0FBQUEvd0FBQUFBQUFBQUFBQUFBL3dBQS93QUFBQUFBQUFBQUFBQUFBUDhBL3dBQUFBQUFBQUFBQUFBQUFBRC8vd0FBQUFBQUFBQUFBQUFBQUFBQS9EOEFBUGdmQUFEd0R3QUE4QThBQURBUEFBQVFEd0FBQUE4QUFBQWZBQUFBZndBQUFQOEFBQUgvQUFBRC93QUFCLzhBQUEvL0FBQWYvd0FBUC84QUFDZ0FBQUFnQUFBQVFBQUFBQUVBSUFBQUFBQUFnQkFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQVAvLy8vLy8vLy8vLy8vLy8vLy8vLzhBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUQvLy8vL0FGWC8vd0JWLy84QVZmLy9BRlgvLy8vLy8vOEFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUEvLy8vL3dCVi8vOEFWZi8vLy8vLy8vLy8vLzhBVmYvL0FGWC8vLy8vLy84QUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUQvLy8vL0FGWC8vd0JWLy8vLy8vLy8vLy8vL3dCVi8vOEFWZi8vLy8vLy93QUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQS8vLy8vLy8vLy84QUFBQUFBQUFBQVAvLy8vOEFWZi8vQUZYLy8vLy8vLy8vLy8vL0FGWC8vd0JWLy8vLy8vLy9BQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBRC8vLy8vQUFBQS8vLy8vLzhBQUFBQS8vLy8vd0JWLy84QVZmLy8vLy8vLy8vLy8vOEFWZi8vQUZYLy8vLy8vLzhBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBUC8vLy84QUFBRC9BQUFBLy8vLy8vLy8vLy8vQUZYLy93QlYvLy8vLy8vLy8vLy8vd0JWLy84QVZmLy8vLy8vL3dBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBLy8vLy93QUFBUDhBQUFEL0FBQUEvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLzhBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFELy8vLy9BQUFBL3dBQUFQOEFBQUQvQUFBQS93QUFBUDhBQUFEL0FBQUEvLy8vLy84QUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFQLy8vLzhBQUFEL0FBQUEvd0FBQVA4QUFBRC9BQUFBL3dBQUFQLy8vLy8vQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUEvLy8vL3dBQUFQOEFBQUQvQUFBQS93QUFBUDhBQUFELy8vLy8vd0FBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUQvLy8vL0FBQUEvd0FBQVA4QUFBRC9BQUFBLy8vLy8vOEFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQVAvLy8vOEFBQUQvQUFBQS93QUFBUC8vLy8vL0FBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQS8vLy8vd0FBQVA4QUFBRC8vLy8vL3dBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBRC8vLy8vQUFBQS8vLy8vLzhBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBUC8vLy8vLy8vLy9BQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy93Ly8vLzRILy8vOEEvLy8vQVAvLzh3RC8vL0VBLy8vd0FQLy84QUgvLy9BSC8vL3dELy8vOEIvLy8vQS8vLy93Zi8vLzhQLy8vL0gvLy8vei8vLy84b0FBQUFFQUFBQUNBQUFBQUJBQ0FBQUFBQUFFQUVBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQS8vLy8vLy8vLy8vLy8vLy8vLy8vL3dBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBLy8vLy93QlYvLzhBVmYvL0FGWC8vd0JWLy8vLy8vLy9BQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUEvLy8vL3dCVi8vOEFWZi8vLy8vLy8vLy8vLzhBVmYvL0FGWC8vLy8vLy84QUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBUC8vLy84QVZmLy9BRlgvLy8vLy8vLy8vLy8vQUZYLy93QlYvLy8vLy8vL0FBQUFBQUFBQUFBQUFBQUFBQUFBQVAvLy8vLy8vLy8vQUFBQUFBQUFBQUQvLy8vL0FGWC8vd0JWLy8vLy8vLy8vLy8vL3dCVi8vOEFWZi8vLy8vLy93QUFBQUFBQUFBQUFBQUFBQUFBQUFELy8vLy9BQUFBLy8vLy8vOEFBQUFBLy8vLy93QlYvLzhBVmYvLy8vLy8vLy8vLy84QVZmLy9BRlgvLy8vLy8vOEFBQUFBQUFBQUFBQUFBQUFBQUFBQS8vLy8vd0FBQVA4QUFBRC8vLy8vLy8vLy8vOEFWZi8vQUZYLy8vLy8vLy8vLy8vL0FGWC8vd0JWLy8vLy8vLy9BQUFBQUFBQUFBQUFBQUFBQUFBQUFQLy8vLzhBQUFEL0FBQUEvd0FBQVAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL0FBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBRC8vLy8vQUFBQS93QUFBUDhBQUFEL0FBQUEvd0FBQVA4QUFBRC9BQUFBLy8vLy8vOEFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUEvLy8vL3dBQUFQOEFBQUQvQUFBQS93QUFBUDhBQUFEL0FBQUEvLy8vLy84QUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBUC8vLy84QUFBRC9BQUFBL3dBQUFQOEFBQUQvQUFBQS8vLy8vLzhBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUQvLy8vL0FBQUEvd0FBQVA4QUFBRC9BQUFBLy8vLy8vOEFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBLy8vLy93QUFBUDhBQUFEL0FBQUEvLy8vLy84QUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQVAvLy8vOEFBQUQvQUFBQS8vLy8vLzhBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFELy8vLy9BQUFBLy8vLy8vOEFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQS8vLy8vLy8vLy84QUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFQdy9BQUQ0SHdBQThBOEFBUEFQQUFBd0R3QUFFQThBQUFBUEFBQUFId0FBQUg4QUFBRC9BQUFCL3dBQUEvOEFBQWYvQUFBUC93QUFILzhBQUQvL0FBQT1cIiIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUI0QUFBQWVDQVlBQUFBN01LNmlBQUFDTTBsRVFWUklTKzNVTzJoVFlSZ0c0UGZ0eVIrUTlDcUNFa2dHSmMycFJXZ1JCQ2tJVnRDaElEcllRUjFFSEZ4MGNuSlJPcWgwNjZJRUZIUnowMFVYZzlSMDhBSmFYRFJCUmN3cFFYQncwZGo4NS9KSllrT2pQV2x6T1RGTE0yWEkrWjY4Ny9lZm4ralNoMTF5c1FuL3QrWURyL3JEVnZTN3Zlb2h3SU1BY2hBOWFWb28vSnNvVUhnRmZRWndyQXFKNFBxSXBTOTNEUFpESzVnbjU4d2wrMDVINEM5eERQMkNlbHFiZEFWNm5NenJvd1Rjd09FeVdoUzFRSEswZHJpSVBERXRlNHFBN1hkaTI5cHhYUlI0Wk9iMThYcG8rWSswREcrQUhpUGdyUGR1dGdUbm90am1HV3ArYmIxNFlGcDZlaU8wcGNSL0RsTDRPWURrM3p1dG9DZjhEbElnTy80OGlNRlNuOHFBM0xQNnJzcDkwN0pQTjRvMmxmanJka1MraDlYdGtJdFpWOXNmc1VXbFFlNFRxYUFuQ1VnejkyMURPeTZuWE81WGFZSjdSZVFuS1VjaW52T21TSFYyMkxKdk5vdXVtN2hTYWErNkNtSkNnREdTb2RWRVVqSWM3RThVN01WbVV0YisxamV4QUtGc1RDMFMyQ0dRR3hDOEpudW1RRndxUHl3aUx3WmMrMUMwZ0dLZzhQdVlPZ01pRlFMSEUzbjlyam84RzFPdnl0L2RaWHR5OUJ0K3RJcjZWdjFwQ0FPNkwvd1d3TDJSdkw1U096d2JWMmw2a2trdU9UUHRvR3ZnYkR3MEFlRXRrQkVqcjNjbmdGS2xXb0M1dUxvQWNJN2lIVWhhemtMQWNIZ2FJbmNCdkNTWWdyZ2xvVEVPNGhTQW5SQkptWlo5dmwzVXQrcHNGRWtZNnFLQWh3blpCVUpET044RDc5cXc1V1NDUUp1NlFJSUNxM01hdWtDQ1JqY1RkNkxSdWpPN3R1UGZoNy9USDAyMHo4QUFBQUFBU1VWT1JLNUNZSUk9XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFCNEFBQUFlQ0FZQUFBQTdNSzZpQUFBRFFFbEVRVlJJUzlXV1QyZ1VaeGpHbjNkbUlzYnNyT2hGOEUrMWhYcEtRS3RVRDU2c3hhWkZQS2piM1VuMDBJcUZRcXVaWFhNVXIwcDJsbEFvVkFwVlNXYld6VVdrQkdscGV4UVYwNkxpc2JaV2hWNHMzZGwxUTNkbUhobGxJZXJzem1RMWhNNXh2dmQ5ZnQvN2ZSL3Yrd2dXNlpORjR1TC9BUjZwY0tYaTF6SWdCaUJjVDhBWHluMENONm1scGtvWmVaVDBCQk5WUE9MVXR5cjBUMEJrRUlBRzhGOVE3bElnQW00QVpEa0FqK0Ewb0o2MGNuMi94bTJnSTdod25uM3NxWjBGc0IvQWJaRGpBWmY4WEJwYSt2dGM0WkhKMmJkRStlODlnWHdKb0ovQTFLeWErdVRyak5UYWJhQXQrR2lsOFlibU5YOEFzSnFDdkpYVnY0VUlPMVpDaWxsMkR3dFJCT1NCcDJtN3h6Tzk5Nkp5SXNGZlRERGRvN28zQUdrcXF2YlJXS2IzYnR6UnpWMHZWQnB2MHZPbUtkU2F2cjdscTJHcHZwZ2ZDYzdiN284VWJQUXA3NDRicWIvbkEyM0ZIbk1hRzFRMmJ3Snl0V2pvNzhlQ0MzWjlEeEZjRERUWlZNcWtiblVEYmVVVWJEZER3UVdLc3NmSzluMC9WK3VsaWszSG5SSHdkakdYUHZRcTBGYXU2VlN2QTZKYU9mMmR0dUJScDc3YVIvQWdDTlJ0cGFGbDExNEhPRit1RDRMQnRPcXI2MDRQTDd2ZjBueXVZdE4yUHhQaHFXSldYeEg3Z2hQdTZrQ0Y2anJQZlFUSXFHWG8zMFNDODNaMWpDS2JySnkrSzZGdW9yQzg3ZjVFNFl5VlN4K1BydGh4SjRWZzBkQ0hFeWttRERJamRKODc2cnp0VG9SYUN3RUdHVmhHK21DYk82NkdIV2V6WmVnN0V4YVRLQ3p2dUwrQXZGRTAwb1hvT3k2N1J4Qnc3SjZtcjVqS2lKOUlOUzZJbEh6Wi9RY2lvOFdzZmlZU1BEcnhlSzJ2K244RmxNR1NrYm9jcDVsazNTdy8zaTcwcjZoUTFwek85VDJNQkljL1RTZnMwV3hZdWZTT0pNSnhNYVpkUFFlUmZpdW5iK25ZdVo2MlRBa3VDZkh4bUtGWDRvUTdyWTlVYWdPS3g5K29LSHRqVzJZbzlHeEljTHNFUGYzRm9kNC91NEVmdFd1ck5PRU1pRHVKaGtRSWFZMUZJWHpSZWdibk94YVBUODYrSFVqejByekg0dE9xSnh2cklkNWxnR3NvT0dabDllOWkyMmo0Z2gzM1V3QldhQVJBN1lOMko5YlIrbnhlWVdxcFZ6c3JnbjN6dEQ0WFp0WFU0YTZzejl4N05aMzZac0EvS1pBUFcyYVBrRC9DbUFVeGV5OCtxdERlaWxjN0FNRkFDRnh3ZTl2TnE0N0xTZVNyNDBTNldWODA4Qk5rQkhJdUFwN0Q3Z0FBQUFCSlJVNUVya0pnZ2c9PVwiIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQjRBQUFBZUNBWUFBQUE3TUs2aUFBQUE1a2xFUVZSSVMyTmtHQ0RBT0VEMk1veGFEQTc1b3VXZlVoa1lHS1dwRVEyTWpJenZlVzl3VDI1b1lQeUhiQjVHVUJjdC81VEV5TUE0bHhxV0lzejRYOTBieWRkR3dPTFBEWXdNRFBYL0dSZzJNakF3WEtERUFZei9HVlFZR0JtaS8vOW5tTmtYeFp0QnBNV01pWDJSUEFzb3NiaHcyUmNQSnNiLzIwY3RCb1VpbHNRRmkrUFJvQ1k5bVkwbXJ0RjhqSkpxaXBhUFppZlNzeEZNeDJoMkd2VFpxWk9KNGY4TzhtT1lnZUgvLy85bURJeU1uVVRWeDhYTFBwV0JGRk5pSWFaZUlwbytvYXYrTTh2OSs1cnovLzkvUVdwWVRuUmpqeHFXRVdQR2FJT2VtRkNpaWhvQVBDd1lMaHFBa0lZQUFBQUFTVVZPUks1Q1lJST1cIiIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUI0QUFBQWVDQVlBQUFBN01LNmlBQUFBcFVsRVFWUklTMk5rR0NEQU9FRDJNb3hhVExlUXh4blVIbjAvRGpBd010cFQ1cEwvQjNZVWNqaGlNNFBXRnUvYlVjamhUSnJGL2I4U0dCaitLMkQxOFg4R0JRWkdobmlvM0FJR0JvYUgyTlQ5WjJTOHQ3T0FiUkZKRnVNTFl2ZmUzNDZNVFAvMmdkUXcvbWR5MkY3RWVwRFVLQ0VyTzQxYVBCclV4Q1MwMGNSRlRDZ3hqR2FuMGV4RVRFSVp6VTdFaE5JSXpFNUVCUXNCUldRbHJsR0x5UW1CQVF0cUFNOGlqUi9INk5mbUFBQUFBRWxGVGtTdVFtQ0NcIiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGJhY2tSaWdodENsaWVudCAoZSkge1xuICAgIGxldCBjbGllbnRIZWlnaHQgPSB3aW5kb3cud29uZGVyX2NvbnRhaW5lckRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHRcbiAgICBsZXQgY2xpZW50V2lkdGggPSB3aW5kb3cud29uZGVyX2NvbnRhaW5lckRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aFxuICAgIGxldCBjbGllbnRYID0gZS5jbGllbnRYXG4gICAgbGV0IGNsaWVudFkgPSBlLmNsaWVudFlcbiAgICBcbiAgICBpZiAoY2xpZW50WCA8IDApIHtcbiAgICAgICAgY2xpZW50WCA9IDBcbiAgICB9XG5cbiAgICBpZiAoY2xpZW50WCA+IGNsaWVudFdpZHRoKSB7XG4gICAgICAgIGNsaWVudFggPSBjbGllbnRXaWR0aFxuICAgIH1cblxuICAgIGlmIChjbGllbnRZIDwgMCkge1xuICAgICAgICBjbGllbnRZID0gMFxuICAgIH1cblxuICAgIGlmIChjbGllbnRZID4gY2xpZW50SGVpZ2h0KSB7XG4gICAgICAgIGNsaWVudFkgPSBjbGllbnRIZWlnaHRcbiAgICB9XG5cbiAgICByZXR1cm4gW2NsaWVudFgsIGNsaWVudFldXG59IiwiaW1wb3J0IHsgY3NzIH0gZnJvbSAnLi91dGlsJ1xuaW1wb3J0IGRyYXdNaWRkbGVJbWFnZSBmcm9tICcuL3Rvb2xiYXIvbWlkZGxlSW1hZ2UvZHJhd01pZGRsZUltYWdlJ1xuaW1wb3J0IGNsZWFyTWlkZGxlSW1hZ2UgZnJvbSAnLi90b29sYmFyL21pZGRsZUltYWdlL2NsZWFyTWlkZGxlSW1hZ2UnXG5pbXBvcnQgYmFja1JpZ2h0Q2xpZW50IGZyb20gJy4vYmFja1JpZ2h0Q2xpZW50J1xuaW1wb3J0IHRvb2xiYXJQb3NpdGlvbiBmcm9tICAnLi90b29sYmFyL3Rvb2xiYXJQb3NpdGlvbidcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlRHJhZ0RvbSAoZG9tLCBkb3RTaXplLCBsaW5lU2l6ZSwgbWUpIHtcbiAgICBjb25zdCBsaW5lTGlzdCA9IFtcbiAgICAgICAge25hbWU6ICduJyxzdHlsZToge3RvcDogJy0nICsgKGxpbmVTaXplIC8gMikgKyAncHgnLCBsZWZ0OiAwLCB3aWR0aDogJzEwMCUnLCBoZWlnaHQ6IChsaW5lU2l6ZSAvIDIpICsgJ3B4J319LFxuICAgICAgICB7bmFtZTogJ3MnLHN0eWxlOiB7Ym90dG9tOiAnLScgKyAobGluZVNpemUgLyAyKSArICdweCcsIGxlZnQ6IDAsIHdpZHRoOiAnMTAwJScsIGhlaWdodDogKGxpbmVTaXplIC8gMikgKyAncHgnfX0sXG4gICAgICAgIHtuYW1lOiAndycsc3R5bGU6IHt0b3A6IDAsIGxlZnQ6ICctJyArIChsaW5lU2l6ZSAvIDIpICsgJ3B4Jywgd2lkdGg6IChsaW5lU2l6ZSAvIDIpICsgJ3B4JywgaGVpZ2h0OiAnMTAwJSd9fSxcbiAgICAgICAge25hbWU6ICdlJyxzdHlsZToge3RvcDogMCwgcmlnaHQ6ICctJyArIChsaW5lU2l6ZSAvIDIpICsgJ3B4Jywgd2lkdGg6IChsaW5lU2l6ZSAvIDIpICsgJ3B4JywgaGVpZ2h0OiAnMTAwJSd9fVxuICAgIF1cbiAgICBsaW5lTGlzdC5mb3JFYWNoKChpdCkgPT4ge1xuICAgICAgICBkb20uYXBwZW5kQ2hpbGQoY3JlYXRlTGluZShpdC5uYW1lLCBpdC5zdHlsZSwgbGluZVNpemUpKVxuICAgIH0pXG5cbiAgICBjb25zdCBkb3RMaXN0ID0gW1xuICAgICAgICB7bmFtZTogJ253JyxzdHlsZToge3RvcDogJy0nICsgKGRvdFNpemUgLyAyICsgJ3B4JyksIGxlZnQ6ICctJyArIChkb3RTaXplIC8gMikgKyAncHgnfX0sXG4gICAgICAgIHtuYW1lOiAnbmUnLHN0eWxlOiB7dG9wOiAnLScgKyAoZG90U2l6ZSAvIDIgKyAncHgnKSwgcmlnaHQ6ICctJyArIChkb3RTaXplIC8gMikgKyAncHgnfX0sXG4gICAgICAgIHtuYW1lOiAnc2UnLHN0eWxlOiB7Ym90dG9tOiAnLScgKyAoZG90U2l6ZSAvIDIgKyAncHgnKSwgcmlnaHQ6ICctJyArIChkb3RTaXplIC8gMikgKyAncHgnfX0sXG4gICAgICAgIHtuYW1lOiAnZScsc3R5bGU6IHt0b3A6IGBjYWxjKDUwJSAtICR7ZG90U2l6ZSAvIDIgKyAncHgnfSlgLCByaWdodDogJy0nICsgKGRvdFNpemUgLyAyKSArICdweCd9fSxcbiAgICAgICAge25hbWU6ICd3JyxzdHlsZToge3RvcDogYGNhbGMoNTAlIC0gJHtkb3RTaXplIC8gMiArICdweCd9KWAsIGxlZnQ6ICctJyArIChkb3RTaXplIC8gMikgKyAncHgnfX0sXG4gICAgICAgIHtuYW1lOiAnbicsc3R5bGU6IHt0b3A6ICctJyArIChkb3RTaXplIC8gMiArICdweCcpLCBsZWZ0OiBgY2FsYyg1MCUgLSAke2RvdFNpemUgLyAyICsgJ3B4J30pYH19LFxuICAgICAgICB7bmFtZTogJ3MnLHN0eWxlOiB7Ym90dG9tOiAnLScgKyAoZG90U2l6ZSAvIDIgKyAncHgnKSwgbGVmdDogYGNhbGMoNTAlIC0gJHtkb3RTaXplIC8gMiArICdweCd9KWB9fSxcbiAgICAgICAge25hbWU6ICdzdycsc3R5bGU6IHtib3R0b206ICctJyArIChkb3RTaXplIC8gMiArICdweCcpLCBsZWZ0OiAnLScgKyAoZG90U2l6ZSAvIDIpICsgJ3B4J319LFxuICAgIF1cbiAgICBkb3RMaXN0LmZvckVhY2goKGl0KSA9PiB7XG4gICAgICAgIGRvbS5hcHBlbmRDaGlsZChjcmVhdGVEb3QoaXQubmFtZSwgaXQuc3R5bGUsIGRvdFNpemUsIGl0LmlkKSlcbiAgICB9KVxuICAgIGJpbmRDb3JuZXJFdmVudCgnc3drc3NEb3QnLCBkb20sIG1lKVxuICAgIGJpbmRDb3JuZXJFdmVudCgnc2Vrc3NEb3QnLCBkb20sIG1lKVxuICAgIGJpbmRDb3JuZXJFdmVudCgnbndrc3NEb3QnLCBkb20sIG1lKVxuICAgIGJpbmRDb3JuZXJFdmVudCgnbmVrc3NEb3QnLCBkb20sIG1lKVxuXG4gICAgYmluZFN1cnJvdW5kRXZlbnQoJ2hvcml6b250YWwnLCAnZWtzc0RvdCcsIGRvbSwgbWUpXG4gICAgYmluZFN1cnJvdW5kRXZlbnQoJ2hvcml6b250YWwnLCAnd2tzc0RvdCcsIGRvbSwgbWUpXG4gICAgYmluZFN1cnJvdW5kRXZlbnQoJ2hvcml6b250YWwnLCAnZWtzc0xpbmUnLCBkb20sIG1lKVxuICAgIGJpbmRTdXJyb3VuZEV2ZW50KCdob3Jpem9udGFsJywgJ3drc3NMaW5lJywgZG9tLCBtZSlcbiAgICBiaW5kU3Vycm91bmRFdmVudCgndmVydGljYWwnLCAnbmtzc0RvdCcsIGRvbSwgbWUpXG4gICAgYmluZFN1cnJvdW5kRXZlbnQoJ3ZlcnRpY2FsJywgJ3Nrc3NEb3QnLCBkb20sIG1lKVxuICAgIGJpbmRTdXJyb3VuZEV2ZW50KCd2ZXJ0aWNhbCcsICdua3NzTGluZScsIGRvbSwgbWUpXG4gICAgYmluZFN1cnJvdW5kRXZlbnQoJ3ZlcnRpY2FsJywgJ3Nrc3NMaW5lJywgZG9tLCBtZSlcbn1cblxuZnVuY3Rpb24gY3JlYXRlRG90ICh0eXBlLCBzdHlsZSwgc2l6ZSkge1xuICAgIGxldCBkb20gPSB3aW5kb3cud29uZGVyX2NvbnRhaW5lckRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgZG9tLmlkID0gdHlwZSArICdrc3NEb3QnXG4gICAgZG9tLmNsYXNzTmFtZSA9ICdrc3NEb3QnXG4gICAgY3NzKGRvbSwge1xuICAgICAgICB3aWR0aDogc2l6ZSArICdweCcsXG4gICAgICAgIGhlaWdodDogc2l6ZSArICdweCcsXG4gICAgICAgIGN1cnNvcjogdHlwZSArICctcmVzaXplJ1xuICAgIH0pXG5cbiAgICBjc3MoZG9tLCBzdHlsZSlcblxuICAgIHJldHVybiBkb21cbn1cblxuZnVuY3Rpb24gY3JlYXRlTGluZSAodHlwZSwgc3R5bGUsIHNpemUpIHtcbiAgICBsZXQgZG9tID0gd2luZG93LndvbmRlcl9jb250YWluZXJEb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGRvbS5pZCA9IHR5cGUgKyAna3NzTGluZSdcbiAgICBkb20uY2xhc3NOYW1lID0gJ2tzc0xpbmUnXG4gICAgY3NzKGRvbSwge1xuICAgICAgICBjdXJzb3I6IHR5cGUgKyAnLXJlc2l6ZSdcbiAgICB9KVxuXG4gICAgY3NzKGRvbSwgc3R5bGUpXG5cbiAgICByZXR1cm4gZG9tXG59XG5cbmZ1bmN0aW9uIGJpbmRDb3JuZXJFdmVudCAobmFtZSwgZG9tLCBtZSkge1xuICAgIHdpbmRvdy53b25kZXJfY29udGFpbmVyRG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQobmFtZSkuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIGlmIChtZS5pc0VkaXQpIHtcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICAgIGNsZWFyTWlkZGxlSW1hZ2UobWUpXG4gICAgICAgIHdpbmRvdy53b25kZXJfY29udGFpbmVyRG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgbW91c2Vtb3ZlRXZlbnQpXG5cbiAgICAgICAgbGV0IGN1cnJlbnRMZWZ0ID0gYXBwcm94aW1hdGUobWUuc3RhcnRYLCBtZS53aWR0aCwgZXZlbnQuY2xpZW50WClcbiAgICAgICAgbGV0IGN1cnJlbnRUb3AgPSBhcHByb3hpbWF0ZShtZS5zdGFydFksIG1lLmhlaWdodCwgZXZlbnQuY2xpZW50WSlcblxuICAgICAgICAvL+Wwhui1t+Wni+eCueiuvue9ruS4uuWvueinklxuICAgICAgICBtZS5zdGFydFggPSAyICogKG1lLnN0YXJ0WCArIG1lLndpZHRoIC8gMikgLSBjdXJyZW50TGVmdDtcbiAgICAgICAgbWUuc3RhcnRZID0gMiAqIChtZS5zdGFydFkgKyBtZS5oZWlnaHQgLzIgKSAtIGN1cnJlbnRUb3A7XG4gICAgICAgIGxldCBzdGFydFggPSBldmVudC5jbGllbnRYXG4gICAgICAgIGxldCBzdGFydFkgPSBldmVudC5jbGllbnRZXG4gICAgICAgIGZ1bmN0aW9uIG1vdXNlbW92ZUV2ZW50IChlKSB7XG4gICAgICAgICAgICBsZXQgY2xpZW50ID0gYmFja1JpZ2h0Q2xpZW50KGUpXG4gICAgICAgICAgICBsZXQgY2xpZW50WCA9IGNsaWVudFswXVxuICAgICAgICAgICAgbGV0IGNsaWVudFkgPSBjbGllbnRbMV1cblxuICAgICAgICAgICAgbGV0IGhlaWdodCA9IE1hdGguYWJzKGNsaWVudFkgLSBtZS5zdGFydFkpXG4gICAgICAgICAgICBsZXQgd2lkdGggPSBNYXRoLmFicyhjbGllbnRYIC0gbWUuc3RhcnRYKVxuICAgICAgICAgICAgbGV0IHRvcCA9IE1hdGgubWluKG1lLnN0YXJ0WSwgY2xpZW50WSlcbiAgICAgICAgICAgIGxldCBsZWZ0ID0gTWF0aC5taW4obWUuc3RhcnRYLCBjbGllbnRYKVxuXG4gICAgICAgICAgICBsZXQgc3R5bGUgPSB7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBoZWlnaHQgKyAncHgnLFxuICAgICAgICAgICAgICAgIHdpZHRoOiB3aWR0aCArICdweCcsXG4gICAgICAgICAgICAgICAgdG9wOiB0b3AgKyAncHgnLFxuICAgICAgICAgICAgICAgIGxlZnQ6IGxlZnQgKyAncHgnXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjc3MoZG9tLCBzdHlsZSlcbiAgICAgXG4gICAgICAgICAgICB0b29sYmFyUG9zaXRpb24obWUsIHdpZHRoLCBoZWlnaHQsIHRvcCwgbGVmdCwgbWUudG9vbGJhcilcbiAgICAgICAgfVxuICAgICAgICB3aW5kb3cud29uZGVyX2NvbnRhaW5lckRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBtb3VzZXVwRXZlbnQpXG5cbiAgICAgICAgZnVuY3Rpb24gbW91c2V1cEV2ZW50KGUpIHtcbiAgICAgICAgICAgIGxldCBjbGllbnQgPSBiYWNrUmlnaHRDbGllbnQoZSlcbiAgICAgICAgICAgIGxldCBjbGllbnRYID0gY2xpZW50WzBdXG4gICAgICAgICAgICBsZXQgY2xpZW50WSA9IGNsaWVudFsxXVxuXG4gICAgICAgICAgICBtZS53aWR0aCA9IE1hdGguYWJzKGNsaWVudFggLSBtZS5zdGFydFgpXG4gICAgICAgICAgICBtZS5oZWlnaHQgPSBNYXRoLmFicyhjbGllbnRZIC0gbWUuc3RhcnRZKVxuICAgICAgICAgICAgLy/otbflp4vngrnov5Tlm57oh7Plt6bkuIrop5JcbiAgICAgICAgICAgIG1lLnN0YXJ0WCA9IE1hdGgubWluKGNsaWVudFgsIG1lLnN0YXJ0WClcbiAgICAgICAgICAgIG1lLnN0YXJ0WSA9IE1hdGgubWluKG1lLnN0YXJ0WSwgY2xpZW50WSlcblxuICAgICAgICAgICAgd2luZG93LndvbmRlcl9jb250YWluZXJEb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBtb3VzZW1vdmVFdmVudClcbiAgICAgICAgICAgIHdpbmRvdy53b25kZXJfY29udGFpbmVyRG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIG1vdXNldXBFdmVudClcbiAgICAgICAgICAgIGRyYXdNaWRkbGVJbWFnZShtZSlcbiAgICAgICAgfVxuICAgIH0pXG59XG5cbmZ1bmN0aW9uIGJpbmRTdXJyb3VuZEV2ZW50ICh0eXBlLCBuYW1lLCBkb20sIG1lKSB7XG4gICAgd2luZG93LndvbmRlcl9jb250YWluZXJEb2N1bWVudC5nZXRFbGVtZW50QnlJZChuYW1lKS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgaWYgKG1lLmlzRWRpdCkge1xuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgICAgY2xlYXJNaWRkbGVJbWFnZShtZSlcbiAgICAgICAgd2luZG93LndvbmRlcl9jb250YWluZXJEb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBtb3VzZW1vdmVFdmVudClcbiAgICAgICAgbGV0IGN1cnJlbnRMZWZ0ID0gYXBwcm94aW1hdGUobWUuc3RhcnRYLCBtZS53aWR0aCwgZXZlbnQuY2xpZW50WClcbiAgICAgICAgbGV0IGN1cnJlbnRUb3AgPSBhcHByb3hpbWF0ZShtZS5zdGFydFksIG1lLmhlaWdodCwgZXZlbnQuY2xpZW50WSlcbiAgICAgICAgLy/lsIbotbflp4vngrnorr7nva7kuLrlr7nop5JcbiAgICAgICAgaWYgKHR5cGUgPT09ICdob3Jpem9udGFsJykge1xuICAgICAgICAgICAgbWUuc3RhcnRYID0gMiAqIChtZS5zdGFydFggKyBtZS53aWR0aCAvIDIpIC0gY3VycmVudExlZnQ7XG4gICAgICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ3ZlcnRpY2FsJykge1xuICAgICAgICAgICAgbWUuc3RhcnRZID0gMiAqIChtZS5zdGFydFkgKyBtZS5oZWlnaHQgLzIgKSAtIGN1cnJlbnRUb3A7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHN0YXJ0WCA9IGV2ZW50LmNsaWVudFhcbiAgICAgICAgbGV0IHN0YXJ0WSA9IGV2ZW50LmNsaWVudFlcbiAgICAgICAgZnVuY3Rpb24gbW91c2Vtb3ZlRXZlbnQoZSkge1xuICAgICAgICAgICAgbGV0IGNsaWVudCA9IGJhY2tSaWdodENsaWVudChlKVxuICAgICAgICAgICAgbGV0IGNsaWVudFggPSBjbGllbnRbMF1cbiAgICAgICAgICAgIGxldCBjbGllbnRZID0gY2xpZW50WzFdXG5cbiAgICAgICAgICAgIGxldCBoZWlnaHQgPSBNYXRoLmFicyhjbGllbnRZIC0gbWUuc3RhcnRZKVxuICAgICAgICAgICAgbGV0IHdpZHRoID0gTWF0aC5hYnMoY2xpZW50WCAtIG1lLnN0YXJ0WClcbiAgICAgICAgICAgIGxldCB0b3AgPSBNYXRoLm1pbihtZS5zdGFydFksIGNsaWVudFkpXG4gICAgICAgICAgICBsZXQgbGVmdCA9IE1hdGgubWluKG1lLnN0YXJ0WCwgY2xpZW50WClcbiAgICAgICAgICAgIGxldCBzdHlsZVxuICAgICAgICAgICAgaWYgKHR5cGUgPT09ICdob3Jpem9udGFsJykge1xuICAgICAgICAgICAgICAgIHN0eWxlID0ge1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogd2lkdGggKyAncHgnLFxuICAgICAgICAgICAgICAgICAgICBsZWZ0OiBsZWZ0ICsgJ3B4J1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ3ZlcnRpY2FsJykge1xuICAgICAgICAgICAgICAgIHN0eWxlID0ge1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IGhlaWdodCArICdweCcsXG4gICAgICAgICAgICAgICAgICAgIHRvcDogdG9wICsgJ3B4JyxcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNzcyhkb20sIHN0eWxlKVxuICAgICAgICAgICAgbGV0IGN1cnJlbnRTdGFydFggPSBsZWZ0XG4gICAgICAgICAgICBsZXQgY3VycmVudFN0YXJ0WSA9IHRvcFxuXG4gICAgICAgICAgICB0b29sYmFyUG9zaXRpb24obWUsIHdpZHRoLCBoZWlnaHQsIHRvcCwgbGVmdCwgbWUudG9vbGJhcilcbiAgICAgICAgICAgIGlmICh0eXBlID09PSAnaG9yaXpvbnRhbCcpIHtcbiAgICAgICAgICAgICAgICB0b29sYmFyUG9zaXRpb24obWUsIHdpZHRoLCBtZS5oZWlnaHQsIG1lLnN0YXJ0WSwgbGVmdCwgbWUudG9vbGJhcilcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ3ZlcnRpY2FsJykge1xuICAgICAgICAgICAgICAgIHRvb2xiYXJQb3NpdGlvbihtZSwgbWUud2lkdGgsIGhlaWdodCwgdG9wLCBtZS5sZWZ0LCBtZS50b29sYmFyKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgd2luZG93LndvbmRlcl9jb250YWluZXJEb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgbW91c2V1cEV2ZW50KVxuXG4gICAgICAgIGZ1bmN0aW9uIG1vdXNldXBFdmVudChlKSB7XG4gICAgICAgICAgICBsZXQgY2xpZW50ID0gYmFja1JpZ2h0Q2xpZW50KGUpXG4gICAgICAgICAgICBsZXQgY2xpZW50WCA9IGNsaWVudFswXVxuICAgICAgICAgICAgbGV0IGNsaWVudFkgPSBjbGllbnRbMV1cblxuICAgICAgICAgICAgaWYgKHR5cGUgPT09ICdob3Jpem9udGFsJykge1xuICAgICAgICAgICAgICAgIG1lLndpZHRoID0gTWF0aC5hYnMoY2xpZW50WCAtIG1lLnN0YXJ0WClcbiAgICAgICAgICAgICAgICBtZS5zdGFydFggPSBNYXRoLm1pbihjbGllbnRYLCBtZS5zdGFydFgpXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICd2ZXJ0aWNhbCcpIHtcbiAgICAgICAgICAgICAgICBtZS5oZWlnaHQgPSBNYXRoLmFicyhjbGllbnRZIC0gbWUuc3RhcnRZKVxuICAgICAgICAgICAgICAgIG1lLnN0YXJ0WSA9IE1hdGgubWluKG1lLnN0YXJ0WSwgY2xpZW50WSlcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgd2luZG93LndvbmRlcl9jb250YWluZXJEb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBtb3VzZW1vdmVFdmVudClcbiAgICAgICAgICAgIHdpbmRvdy53b25kZXJfY29udGFpbmVyRG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIG1vdXNldXBFdmVudClcbiAgICAgICAgICAgIGRyYXdNaWRkbGVJbWFnZShtZSlcbiAgICAgICAgfVxuICAgIH0pXG59XG5cbi8v6I635Y+W6byg5qCH5L2N572u5pyA6L+R5Z2Q5qCH54K5XG5mdW5jdGlvbiBhcHByb3hpbWF0ZSAoc3RhcnQsIHRoaWNrbmVzcywgY3VycmVudCkge1xuICAgIGlmIChNYXRoLmFicyhjdXJyZW50IC0gc3RhcnQpID49IE1hdGguYWJzKGN1cnJlbnQgLSBzdGFydCAtIHRoaWNrbmVzcykpIHtcbiAgICAgICAgcmV0dXJuIHN0YXJ0ICsgdGhpY2tuZXNzXG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHN0YXJ0XG4gICAgfVxufSIsIlxuXG5cbihmdW5jdGlvbiAoZ2xvYmFsKSB7XG4gICAgJ3VzZSBzdHJpY3QnO1xuXG4gICAgdmFyIHV0aWwgPSBuZXdVdGlsKCk7XG4gICAgdmFyIGlubGluZXIgPSBuZXdJbmxpbmVyKCk7XG4gICAgdmFyIGZvbnRGYWNlcyA9IG5ld0ZvbnRGYWNlcygpO1xuICAgIHZhciBpbWFnZXMgPSBuZXdJbWFnZXMoKTtcblxuICAgIC8vIERlZmF1bHQgaW1wbCBvcHRpb25zXG4gICAgdmFyIGRlZmF1bHRPcHRpb25zID0ge1xuICAgICAgICAvLyBEZWZhdWx0IGlzIHRvIGZhaWwgb24gZXJyb3IsIG5vIHBsYWNlaG9sZGVyXG4gICAgICAgIGltYWdlUGxhY2Vob2xkZXI6IHVuZGVmaW5lZCxcbiAgICAgICAgLy8gRGVmYXVsdCBjYWNoZSBidXN0IGlzIGZhbHNlLCBpdCB3aWxsIHVzZSB0aGUgY2FjaGVcbiAgICAgICAgY2FjaGVCdXN0OiBmYWxzZVxuICAgIH07XG5cbiAgICB2YXIgZG9tdG9pbWFnZSA9IHtcbiAgICAgICAgLy9Xb25kZXJcbiAgICAgICAgdG9DYW52YXM6IChub2RlLCBvcHRpb25zKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gZHJhdyhub2RlLCBvcHRpb25zIHx8IHt9KVxuICAgICAgICB9LFxuXG5cbiAgICAgICAgdG9Tdmc6IHRvU3ZnLFxuICAgICAgICB0b1BuZzogdG9QbmcsXG4gICAgICAgIHRvSnBlZzogdG9KcGVnLFxuICAgICAgICB0b0Jsb2I6IHRvQmxvYixcbiAgICAgICAgdG9QaXhlbERhdGE6IHRvUGl4ZWxEYXRhLFxuICAgICAgICBpbXBsOiB7XG4gICAgICAgICAgICBmb250RmFjZXM6IGZvbnRGYWNlcyxcbiAgICAgICAgICAgIGltYWdlczogaW1hZ2VzLFxuICAgICAgICAgICAgdXRpbDogdXRpbCxcbiAgICAgICAgICAgIGlubGluZXI6IGlubGluZXIsXG4gICAgICAgICAgICBvcHRpb25zOiB7fVxuICAgICAgICB9XG4gICAgfTtcblxuICAgIGlmICh0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJylcbiAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSBkb210b2ltYWdlO1xuICAgIGVsc2VcbiAgICAgICAgZ2xvYmFsLmRvbXRvaW1hZ2UgPSBkb210b2ltYWdlO1xuXG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge05vZGV9IG5vZGUgLSBUaGUgRE9NIE5vZGUgb2JqZWN0IHRvIHJlbmRlclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIC0gUmVuZGVyaW5nIG9wdGlvbnNcbiAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBvcHRpb25zLmZpbHRlciAtIFNob3VsZCByZXR1cm4gdHJ1ZSBpZiBwYXNzZWQgbm9kZSBzaG91bGQgYmUgaW5jbHVkZWQgaW4gdGhlIG91dHB1dFxuICAgICAqICAgICAgICAgIChleGNsdWRpbmcgbm9kZSBtZWFucyBleGNsdWRpbmcgaXQncyBjaGlsZHJlbiBhcyB3ZWxsKS4gTm90IGNhbGxlZCBvbiB0aGUgcm9vdCBub2RlLlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBvcHRpb25zLmJnY29sb3IgLSBjb2xvciBmb3IgdGhlIGJhY2tncm91bmQsIGFueSB2YWxpZCBDU1MgY29sb3IgdmFsdWUuXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IG9wdGlvbnMud2lkdGggLSB3aWR0aCB0byBiZSBhcHBsaWVkIHRvIG5vZGUgYmVmb3JlIHJlbmRlcmluZy5cbiAgICAgKiBAcGFyYW0ge051bWJlcn0gb3B0aW9ucy5oZWlnaHQgLSBoZWlnaHQgdG8gYmUgYXBwbGllZCB0byBub2RlIGJlZm9yZSByZW5kZXJpbmcuXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMuc3R5bGUgLSBhbiBvYmplY3Qgd2hvc2UgcHJvcGVydGllcyB0byBiZSBjb3BpZWQgdG8gbm9kZSdzIHN0eWxlIGJlZm9yZSByZW5kZXJpbmcuXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IG9wdGlvbnMucXVhbGl0eSAtIGEgTnVtYmVyIGJldHdlZW4gMCBhbmQgMSBpbmRpY2F0aW5nIGltYWdlIHF1YWxpdHkgKGFwcGxpY2FibGUgdG8gSlBFRyBvbmx5KSxcbiAgICAgICAgICAgICAgICBkZWZhdWx0cyB0byAxLjAuXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IG9wdGlvbnMuaW1hZ2VQbGFjZWhvbGRlciAtIGRhdGFVUkwgdG8gdXNlIGFzIGEgcGxhY2Vob2xkZXIgZm9yIGZhaWxlZCBpbWFnZXMsIGRlZmF1bHQgYmVoYXZpb3VyIGlzIHRvIGZhaWwgZmFzdCBvbiBpbWFnZXMgd2UgY2FuJ3QgZmV0Y2hcbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IG9wdGlvbnMuY2FjaGVCdXN0IC0gc2V0IHRvIHRydWUgdG8gY2FjaGUgYnVzdCBieSBhcHBlbmRpbmcgdGhlIHRpbWUgdG8gdGhlIHJlcXVlc3QgdXJsXG4gICAgICogQHJldHVybiB7UHJvbWlzZX0gLSBBIHByb21pc2UgdGhhdCBpcyBmdWxmaWxsZWQgd2l0aCBhIFNWRyBpbWFnZSBkYXRhIFVSTFxuICAgICAqICovXG4gICAgZnVuY3Rpb24gdG9Tdmcobm9kZSwgb3B0aW9ucykge1xuICAgICAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgICAgICAgY29weU9wdGlvbnMob3B0aW9ucyk7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUobm9kZSlcbiAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNsb25lTm9kZShub2RlLCBvcHRpb25zLmZpbHRlciwgdHJ1ZSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4oZW1iZWRGb250cylcbiAgICAgICAgICAgIC50aGVuKGlubGluZUltYWdlcylcbiAgICAgICAgICAgIC50aGVuKGFwcGx5T3B0aW9ucylcbiAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChjbG9uZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBtYWtlU3ZnRGF0YVVyaShjbG9uZSxcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9ucy53aWR0aCB8fCB1dGlsLndpZHRoKG5vZGUpLFxuICAgICAgICAgICAgICAgICAgICBvcHRpb25zLmhlaWdodCB8fCB1dGlsLmhlaWdodChub2RlKVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICBmdW5jdGlvbiBhcHBseU9wdGlvbnMoY2xvbmUpIHtcbiAgICAgICAgICAgIGlmIChvcHRpb25zLmJnY29sb3IpIGNsb25lLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IG9wdGlvbnMuYmdjb2xvcjtcblxuICAgICAgICAgICAgaWYgKG9wdGlvbnMud2lkdGgpIGNsb25lLnN0eWxlLndpZHRoID0gb3B0aW9ucy53aWR0aCArICdweCc7XG4gICAgICAgICAgICBpZiAob3B0aW9ucy5oZWlnaHQpIGNsb25lLnN0eWxlLmhlaWdodCA9IG9wdGlvbnMuaGVpZ2h0ICsgJ3B4JztcblxuICAgICAgICAgICAgaWYgKG9wdGlvbnMuc3R5bGUpXG4gICAgICAgICAgICAgICAgT2JqZWN0LmtleXMob3B0aW9ucy5zdHlsZSkuZm9yRWFjaChmdW5jdGlvbiAocHJvcGVydHkpIHtcbiAgICAgICAgICAgICAgICAgICAgY2xvbmUuc3R5bGVbcHJvcGVydHldID0gb3B0aW9ucy5zdHlsZVtwcm9wZXJ0eV07XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHJldHVybiBjbG9uZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7Tm9kZX0gbm9kZSAtIFRoZSBET00gTm9kZSBvYmplY3QgdG8gcmVuZGVyXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgLSBSZW5kZXJpbmcgb3B0aW9ucywgQHNlZSB7QGxpbmsgdG9Tdmd9XG4gICAgICogQHJldHVybiB7UHJvbWlzZX0gLSBBIHByb21pc2UgdGhhdCBpcyBmdWxmaWxsZWQgd2l0aCBhIFVpbnQ4QXJyYXkgY29udGFpbmluZyBSR0JBIHBpeGVsIGRhdGEuXG4gICAgICogKi9cbiAgICBmdW5jdGlvbiB0b1BpeGVsRGF0YShub2RlLCBvcHRpb25zKSB7XG4gICAgICAgIHJldHVybiBkcmF3KG5vZGUsIG9wdGlvbnMgfHwge30pXG4gICAgICAgICAgICAudGhlbihmdW5jdGlvbiAoY2FudmFzKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpLmdldEltYWdlRGF0YShcbiAgICAgICAgICAgICAgICAgICAgMCxcbiAgICAgICAgICAgICAgICAgICAgMCxcbiAgICAgICAgICAgICAgICAgICAgdXRpbC53aWR0aChub2RlKSxcbiAgICAgICAgICAgICAgICAgICAgdXRpbC5oZWlnaHQobm9kZSlcbiAgICAgICAgICAgICAgICApLmRhdGE7XG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge05vZGV9IG5vZGUgLSBUaGUgRE9NIE5vZGUgb2JqZWN0IHRvIHJlbmRlclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIC0gUmVuZGVyaW5nIG9wdGlvbnMsIEBzZWUge0BsaW5rIHRvU3ZnfVxuICAgICAqIEByZXR1cm4ge1Byb21pc2V9IC0gQSBwcm9taXNlIHRoYXQgaXMgZnVsZmlsbGVkIHdpdGggYSBQTkcgaW1hZ2UgZGF0YSBVUkxcbiAgICAgKiAqL1xuICAgIGZ1bmN0aW9uIHRvUG5nKG5vZGUsIG9wdGlvbnMpIHtcbiAgICAgICAgcmV0dXJuIGRyYXcobm9kZSwgb3B0aW9ucyB8fCB7fSlcbiAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChjYW52YXMpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gY2FudmFzLnRvRGF0YVVSTCgpO1xuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtOb2RlfSBub2RlIC0gVGhlIERPTSBOb2RlIG9iamVjdCB0byByZW5kZXJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyAtIFJlbmRlcmluZyBvcHRpb25zLCBAc2VlIHtAbGluayB0b1N2Z31cbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlfSAtIEEgcHJvbWlzZSB0aGF0IGlzIGZ1bGZpbGxlZCB3aXRoIGEgSlBFRyBpbWFnZSBkYXRhIFVSTFxuICAgICAqICovXG4gICAgZnVuY3Rpb24gdG9KcGVnKG5vZGUsIG9wdGlvbnMpIHtcbiAgICAgICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gICAgICAgIHJldHVybiBkcmF3KG5vZGUsIG9wdGlvbnMpXG4gICAgICAgICAgICAudGhlbihmdW5jdGlvbiAoY2FudmFzKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNhbnZhcy50b0RhdGFVUkwoJ2ltYWdlL2pwZWcnLCBvcHRpb25zLnF1YWxpdHkgfHwgMS4wKTtcbiAgICAgICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7Tm9kZX0gbm9kZSAtIFRoZSBET00gTm9kZSBvYmplY3QgdG8gcmVuZGVyXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgLSBSZW5kZXJpbmcgb3B0aW9ucywgQHNlZSB7QGxpbmsgdG9Tdmd9XG4gICAgICogQHJldHVybiB7UHJvbWlzZX0gLSBBIHByb21pc2UgdGhhdCBpcyBmdWxmaWxsZWQgd2l0aCBhIFBORyBpbWFnZSBibG9iXG4gICAgICogKi9cbiAgICBmdW5jdGlvbiB0b0Jsb2Iobm9kZSwgb3B0aW9ucykge1xuICAgICAgICByZXR1cm4gZHJhdyhub2RlLCBvcHRpb25zIHx8IHt9KVxuICAgICAgICAgICAgLnRoZW4odXRpbC5jYW52YXNUb0Jsb2IpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNvcHlPcHRpb25zKG9wdGlvbnMpIHtcbiAgICAgICAgLy8gQ29weSBvcHRpb25zIHRvIGltcGwgb3B0aW9ucyBmb3IgdXNlIGluIGltcGxcbiAgICAgICAgaWYgKHR5cGVvZiAob3B0aW9ucy5pbWFnZVBsYWNlaG9sZGVyKSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIGRvbXRvaW1hZ2UuaW1wbC5vcHRpb25zLmltYWdlUGxhY2Vob2xkZXIgPSBkZWZhdWx0T3B0aW9ucy5pbWFnZVBsYWNlaG9sZGVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZG9tdG9pbWFnZS5pbXBsLm9wdGlvbnMuaW1hZ2VQbGFjZWhvbGRlciA9IG9wdGlvbnMuaW1hZ2VQbGFjZWhvbGRlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0eXBlb2YgKG9wdGlvbnMuY2FjaGVCdXN0KSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIGRvbXRvaW1hZ2UuaW1wbC5vcHRpb25zLmNhY2hlQnVzdCA9IGRlZmF1bHRPcHRpb25zLmNhY2hlQnVzdDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGRvbXRvaW1hZ2UuaW1wbC5vcHRpb25zLmNhY2hlQnVzdCA9IG9wdGlvbnMuY2FjaGVCdXN0O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZHJhdyhkb21Ob2RlLCBvcHRpb25zKSB7XG4gICAgICAgIHJldHVybiB0b1N2Zyhkb21Ob2RlLCBvcHRpb25zKVxuICAgICAgICAgICAgLnRoZW4odXRpbC5tYWtlSW1hZ2UpXG4gICAgICAgICAgICAudGhlbih1dGlsLmRlbGF5KDEwMCkpXG4gICAgICAgICAgICAudGhlbihmdW5jdGlvbiAoaW1hZ2UpIHtcbiAgICAgICAgICAgICAgICB2YXIgY2FudmFzID0gbmV3Q2FudmFzKGRvbU5vZGUpO1xuICAgICAgICAgICAgICAgIGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpLmRyYXdJbWFnZShpbWFnZSwgMCwgMCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNhbnZhcztcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIGZ1bmN0aW9uIG5ld0NhbnZhcyhkb21Ob2RlKSB7XG4gICAgICAgICAgICB2YXIgY2FudmFzID0gd2luZG93LndvbmRlcl9jb250YWluZXJEb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcbiAgICAgICAgICAgIGNhbnZhcy53aWR0aCA9IG9wdGlvbnMud2lkdGggfHwgdXRpbC53aWR0aChkb21Ob2RlKTtcbiAgICAgICAgICAgIGNhbnZhcy5oZWlnaHQgPSBvcHRpb25zLmhlaWdodCB8fCB1dGlsLmhlaWdodChkb21Ob2RlKTtcblxuICAgICAgICAgICAgaWYgKG9wdGlvbnMuYmdjb2xvcikge1xuICAgICAgICAgICAgICAgIHZhciBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICAgICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gb3B0aW9ucy5iZ2NvbG9yO1xuICAgICAgICAgICAgICAgIGN0eC5maWxsUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gY2FudmFzO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2xvbmVOb2RlKG5vZGUsIGZpbHRlciwgcm9vdCkge1xuICAgICAgICBpZiAoIXJvb3QgJiYgZmlsdGVyICYmICFmaWx0ZXIobm9kZSkpIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcblxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKG5vZGUpXG4gICAgICAgICAgICAudGhlbihtYWtlTm9kZUNvcHkpXG4gICAgICAgICAgICAudGhlbihmdW5jdGlvbiAoY2xvbmUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gY2xvbmVDaGlsZHJlbihub2RlLCBjbG9uZSwgZmlsdGVyKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbihmdW5jdGlvbiAoY2xvbmUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcHJvY2Vzc0Nsb25lKG5vZGUsIGNsb25lKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIGZ1bmN0aW9uIG1ha2VOb2RlQ29weShub2RlKSB7XG4gICAgICAgICAgICBpZiAobm9kZSBpbnN0YW5jZW9mIEhUTUxDYW52YXNFbGVtZW50KSByZXR1cm4gdXRpbC5tYWtlSW1hZ2Uobm9kZS50b0RhdGFVUkwoKSk7XG4gICAgICAgICAgICByZXR1cm4gbm9kZS5jbG9uZU5vZGUoZmFsc2UpO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gY2xvbmVDaGlsZHJlbihvcmlnaW5hbCwgY2xvbmUsIGZpbHRlcikge1xuICAgICAgICAgICAgdmFyIGNoaWxkcmVuID0gb3JpZ2luYWwuY2hpbGROb2RlcztcbiAgICAgICAgICAgIGlmIChjaGlsZHJlbi5sZW5ndGggPT09IDApIHJldHVybiBQcm9taXNlLnJlc29sdmUoY2xvbmUpO1xuXG4gICAgICAgICAgICByZXR1cm4gY2xvbmVDaGlsZHJlbkluT3JkZXIoY2xvbmUsIHV0aWwuYXNBcnJheShjaGlsZHJlbiksIGZpbHRlcilcbiAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBjbG9uZTtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgZnVuY3Rpb24gY2xvbmVDaGlsZHJlbkluT3JkZXIocGFyZW50LCBjaGlsZHJlbiwgZmlsdGVyKSB7XG4gICAgICAgICAgICAgICAgdmFyIGRvbmUgPSBQcm9taXNlLnJlc29sdmUoKTtcbiAgICAgICAgICAgICAgICBjaGlsZHJlbi5mb3JFYWNoKGZ1bmN0aW9uIChjaGlsZCkge1xuICAgICAgICAgICAgICAgICAgICBkb25lID0gZG9uZVxuICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBjbG9uZU5vZGUoY2hpbGQsIGZpbHRlcik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKGNoaWxkQ2xvbmUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoY2hpbGRDbG9uZSkgcGFyZW50LmFwcGVuZENoaWxkKGNoaWxkQ2xvbmUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRvbmU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBwcm9jZXNzQ2xvbmUob3JpZ2luYWwsIGNsb25lKSB7XG4gICAgICAgICAgICBpZiAoIShjbG9uZSBpbnN0YW5jZW9mIEVsZW1lbnQpKSByZXR1cm4gY2xvbmU7XG5cbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKVxuICAgICAgICAgICAgICAgIC50aGVuKGNsb25lU3R5bGUpXG4gICAgICAgICAgICAgICAgLnRoZW4oY2xvbmVQc2V1ZG9FbGVtZW50cylcbiAgICAgICAgICAgICAgICAudGhlbihjb3B5VXNlcklucHV0KVxuICAgICAgICAgICAgICAgIC50aGVuKGZpeFN2ZylcbiAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBjbG9uZTtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgZnVuY3Rpb24gY2xvbmVTdHlsZSgpIHtcbiAgICAgICAgICAgICAgICBjb3B5U3R5bGUod2luZG93LmdldENvbXB1dGVkU3R5bGUob3JpZ2luYWwpLCBjbG9uZS5zdHlsZSk7XG5cbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBjb3B5U3R5bGUoc291cmNlLCB0YXJnZXQpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNvdXJjZS5jc3NUZXh0KSB0YXJnZXQuY3NzVGV4dCA9IHNvdXJjZS5jc3NUZXh0O1xuICAgICAgICAgICAgICAgICAgICBlbHNlIGNvcHlQcm9wZXJ0aWVzKHNvdXJjZSwgdGFyZ2V0KTtcblxuICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiBjb3B5UHJvcGVydGllcyhzb3VyY2UsIHRhcmdldCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdXRpbC5hc0FycmF5KHNvdXJjZSkuZm9yRWFjaChmdW5jdGlvbiAobmFtZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldC5zZXRQcm9wZXJ0eShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc291cmNlLmdldFByb3BlcnR5VmFsdWUobmFtZSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNvdXJjZS5nZXRQcm9wZXJ0eVByaW9yaXR5KG5hbWUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmdW5jdGlvbiBjbG9uZVBzZXVkb0VsZW1lbnRzKCkge1xuICAgICAgICAgICAgICAgIFsnOmJlZm9yZScsICc6YWZ0ZXInXS5mb3JFYWNoKGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIGNsb25lUHNldWRvRWxlbWVudChlbGVtZW50KTtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGNsb25lUHNldWRvRWxlbWVudChlbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBzdHlsZSA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKG9yaWdpbmFsLCBlbGVtZW50KTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSBzdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKCdjb250ZW50Jyk7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvbnRlbnQgPT09ICcnIHx8IGNvbnRlbnQgPT09ICdub25lJykgcmV0dXJuO1xuXG4gICAgICAgICAgICAgICAgICAgIHZhciBjbGFzc05hbWUgPSB1dGlsLnVpZCgpO1xuICAgICAgICAgICAgICAgICAgICBjbG9uZS5jbGFzc05hbWUgPSBjbG9uZS5jbGFzc05hbWUgKyAnICcgKyBjbGFzc05hbWU7XG4gICAgICAgICAgICAgICAgICAgIHZhciBzdHlsZUVsZW1lbnQgPSB3aW5kb3cud29uZGVyX2NvbnRhaW5lckRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gICAgICAgICAgICAgICAgICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChmb3JtYXRQc2V1ZG9FbGVtZW50U3R5bGUoY2xhc3NOYW1lLCBlbGVtZW50LCBzdHlsZSkpO1xuICAgICAgICAgICAgICAgICAgICBjbG9uZS5hcHBlbmRDaGlsZChzdHlsZUVsZW1lbnQpO1xuXG4gICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGZvcm1hdFBzZXVkb0VsZW1lbnRTdHlsZShjbGFzc05hbWUsIGVsZW1lbnQsIHN0eWxlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgc2VsZWN0b3IgPSAnLicgKyBjbGFzc05hbWUgKyAnOicgKyBlbGVtZW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGNzc1RleHQgPSBzdHlsZS5jc3NUZXh0ID8gZm9ybWF0Q3NzVGV4dChzdHlsZSkgOiBmb3JtYXRDc3NQcm9wZXJ0aWVzKHN0eWxlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB3aW5kb3cud29uZGVyX2NvbnRhaW5lckRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHNlbGVjdG9yICsgJ3snICsgY3NzVGV4dCArICd9Jyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGZvcm1hdENzc1RleHQoc3R5bGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgY29udGVudCA9IHN0eWxlLmdldFByb3BlcnR5VmFsdWUoJ2NvbnRlbnQnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gc3R5bGUuY3NzVGV4dCArICcgY29udGVudDogJyArIGNvbnRlbnQgKyAnOyc7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGZvcm1hdENzc1Byb3BlcnRpZXMoc3R5bGUpIHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB1dGlsLmFzQXJyYXkoc3R5bGUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5tYXAoZm9ybWF0UHJvcGVydHkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5qb2luKCc7ICcpICsgJzsnO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gZm9ybWF0UHJvcGVydHkobmFtZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmFtZSArICc6ICcgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGUuZ2V0UHJvcGVydHlWYWx1ZShuYW1lKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoc3R5bGUuZ2V0UHJvcGVydHlQcmlvcml0eShuYW1lKSA/ICcgIWltcG9ydGFudCcgOiAnJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmdW5jdGlvbiBjb3B5VXNlcklucHV0KCkge1xuICAgICAgICAgICAgICAgIGlmIChvcmlnaW5hbCBpbnN0YW5jZW9mIEhUTUxUZXh0QXJlYUVsZW1lbnQpIGNsb25lLmlubmVySFRNTCA9IG9yaWdpbmFsLnZhbHVlO1xuICAgICAgICAgICAgICAgIGlmIChvcmlnaW5hbCBpbnN0YW5jZW9mIEhUTUxJbnB1dEVsZW1lbnQpIGNsb25lLnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIG9yaWdpbmFsLnZhbHVlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZnVuY3Rpb24gZml4U3ZnKCkge1xuICAgICAgICAgICAgICAgIGlmICghKGNsb25lIGluc3RhbmNlb2YgU1ZHRWxlbWVudCkpIHJldHVybjtcbiAgICAgICAgICAgICAgICBjbG9uZS5zZXRBdHRyaWJ1dGUoJ3htbG5zJywgJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyk7XG5cbiAgICAgICAgICAgICAgICBpZiAoIShjbG9uZSBpbnN0YW5jZW9mIFNWR1JlY3RFbGVtZW50KSkgcmV0dXJuO1xuICAgICAgICAgICAgICAgIFsnd2lkdGgnLCAnaGVpZ2h0J10uZm9yRWFjaChmdW5jdGlvbiAoYXR0cmlidXRlKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciB2YWx1ZSA9IGNsb25lLmdldEF0dHJpYnV0ZShhdHRyaWJ1dGUpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIXZhbHVlKSByZXR1cm47XG5cbiAgICAgICAgICAgICAgICAgICAgY2xvbmUuc3R5bGUuc2V0UHJvcGVydHkoYXR0cmlidXRlLCB2YWx1ZSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBlbWJlZEZvbnRzKG5vZGUpIHtcbiAgICAgICAgcmV0dXJuIGZvbnRGYWNlcy5yZXNvbHZlQWxsKClcbiAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChjc3NUZXh0KSB7XG4gICAgICAgICAgICAgICAgdmFyIHN0eWxlTm9kZSA9IHdpbmRvdy53b25kZXJfY29udGFpbmVyRG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgICAgICAgICAgICAgICBub2RlLmFwcGVuZENoaWxkKHN0eWxlTm9kZSk7XG4gICAgICAgICAgICAgICAgc3R5bGVOb2RlLmFwcGVuZENoaWxkKHdpbmRvdy53b25kZXJfY29udGFpbmVyRG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzVGV4dCkpO1xuICAgICAgICAgICAgICAgIHJldHVybiBub2RlO1xuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaW5saW5lSW1hZ2VzKG5vZGUpIHtcbiAgICAgICAgcmV0dXJuIGltYWdlcy5pbmxpbmVBbGwobm9kZSlcbiAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbm9kZTtcbiAgICAgICAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIG1ha2VTdmdEYXRhVXJpKG5vZGUsIHdpZHRoLCBoZWlnaHQpIHtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShub2RlKVxuICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgICAgICAgICAgICBub2RlLnNldEF0dHJpYnV0ZSgneG1sbnMnLCAnaHR0cDovL3d3dy53My5vcmcvMTk5OS94aHRtbCcpO1xuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgWE1MU2VyaWFsaXplcigpLnNlcmlhbGl6ZVRvU3RyaW5nKG5vZGUpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKHV0aWwuZXNjYXBlWGh0bWwpXG4gICAgICAgICAgICAudGhlbihmdW5jdGlvbiAoeGh0bWwpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gJzxmb3JlaWduT2JqZWN0IHg9XCIwXCIgeT1cIjBcIiB3aWR0aD1cIjEwMCVcIiBoZWlnaHQ9XCIxMDAlXCI+JyArIHhodG1sICsgJzwvZm9yZWlnbk9iamVjdD4nO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChmb3JlaWduT2JqZWN0KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICc8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIicgKyB3aWR0aCArICdcIiBoZWlnaHQ9XCInICsgaGVpZ2h0ICsgJ1wiPicgK1xuICAgICAgICAgICAgICAgICAgICBmb3JlaWduT2JqZWN0ICsgJzwvc3ZnPic7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHN2Zykge1xuICAgICAgICAgICAgICAgIHJldHVybiAnZGF0YTppbWFnZS9zdmcreG1sO2NoYXJzZXQ9dXRmLTgsJyArIHN2ZztcbiAgICAgICAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIG5ld1V0aWwoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBlc2NhcGU6IGVzY2FwZSxcbiAgICAgICAgICAgIHBhcnNlRXh0ZW5zaW9uOiBwYXJzZUV4dGVuc2lvbixcbiAgICAgICAgICAgIG1pbWVUeXBlOiBtaW1lVHlwZSxcbiAgICAgICAgICAgIGRhdGFBc1VybDogZGF0YUFzVXJsLFxuICAgICAgICAgICAgaXNEYXRhVXJsOiBpc0RhdGFVcmwsXG4gICAgICAgICAgICBjYW52YXNUb0Jsb2I6IGNhbnZhc1RvQmxvYixcbiAgICAgICAgICAgIHJlc29sdmVVcmw6IHJlc29sdmVVcmwsXG4gICAgICAgICAgICBnZXRBbmRFbmNvZGU6IGdldEFuZEVuY29kZSxcbiAgICAgICAgICAgIHVpZDogdWlkKCksXG4gICAgICAgICAgICBkZWxheTogZGVsYXksXG4gICAgICAgICAgICBhc0FycmF5OiBhc0FycmF5LFxuICAgICAgICAgICAgZXNjYXBlWGh0bWw6IGVzY2FwZVhodG1sLFxuICAgICAgICAgICAgbWFrZUltYWdlOiBtYWtlSW1hZ2UsXG4gICAgICAgICAgICB3aWR0aDogd2lkdGgsXG4gICAgICAgICAgICBoZWlnaHQ6IGhlaWdodFxuICAgICAgICB9O1xuXG4gICAgICAgIGZ1bmN0aW9uIG1pbWVzKCkge1xuICAgICAgICAgICAgLypcbiAgICAgICAgICAgICAqIE9ubHkgV09GRiBhbmQgRU9UIG1pbWUgdHlwZXMgZm9yIGZvbnRzIGFyZSAncmVhbCdcbiAgICAgICAgICAgICAqIHNlZSBodHRwOi8vd3d3LmlhbmEub3JnL2Fzc2lnbm1lbnRzL21lZGlhLXR5cGVzL21lZGlhLXR5cGVzLnhodG1sXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIHZhciBXT0ZGID0gJ2FwcGxpY2F0aW9uL2ZvbnQtd29mZic7XG4gICAgICAgICAgICB2YXIgSlBFRyA9ICdpbWFnZS9qcGVnJztcblxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAnd29mZic6IFdPRkYsXG4gICAgICAgICAgICAgICAgJ3dvZmYyJzogV09GRixcbiAgICAgICAgICAgICAgICAndHRmJzogJ2FwcGxpY2F0aW9uL2ZvbnQtdHJ1ZXR5cGUnLFxuICAgICAgICAgICAgICAgICdlb3QnOiAnYXBwbGljYXRpb24vdm5kLm1zLWZvbnRvYmplY3QnLFxuICAgICAgICAgICAgICAgICdwbmcnOiAnaW1hZ2UvcG5nJyxcbiAgICAgICAgICAgICAgICAnanBnJzogSlBFRyxcbiAgICAgICAgICAgICAgICAnanBlZyc6IEpQRUcsXG4gICAgICAgICAgICAgICAgJ2dpZic6ICdpbWFnZS9naWYnLFxuICAgICAgICAgICAgICAgICd0aWZmJzogJ2ltYWdlL3RpZmYnLFxuICAgICAgICAgICAgICAgICdzdmcnOiAnaW1hZ2Uvc3ZnK3htbCdcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBwYXJzZUV4dGVuc2lvbih1cmwpIHtcbiAgICAgICAgICAgIHZhciBtYXRjaCA9IC9cXC4oW15cXC5cXC9dKj8pJC9nLmV4ZWModXJsKTtcbiAgICAgICAgICAgIGlmIChtYXRjaCkgcmV0dXJuIG1hdGNoWzFdO1xuICAgICAgICAgICAgZWxzZSByZXR1cm4gJyc7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBtaW1lVHlwZSh1cmwpIHtcbiAgICAgICAgICAgIHZhciBleHRlbnNpb24gPSBwYXJzZUV4dGVuc2lvbih1cmwpLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgICAgICByZXR1cm4gbWltZXMoKVtleHRlbnNpb25dIHx8ICcnO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gaXNEYXRhVXJsKHVybCkge1xuICAgICAgICAgICAgcmV0dXJuIHVybC5zZWFyY2goL14oZGF0YTopLykgIT09IC0xO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gdG9CbG9iKGNhbnZhcykge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlKSB7XG4gICAgICAgICAgICAgICAgdmFyIGJpbmFyeVN0cmluZyA9IHdpbmRvdy5hdG9iKGNhbnZhcy50b0RhdGFVUkwoKS5zcGxpdCgnLCcpWzFdKTtcbiAgICAgICAgICAgICAgICB2YXIgbGVuZ3RoID0gYmluYXJ5U3RyaW5nLmxlbmd0aDtcbiAgICAgICAgICAgICAgICB2YXIgYmluYXJ5QXJyYXkgPSBuZXcgVWludDhBcnJheShsZW5ndGgpO1xuXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKylcbiAgICAgICAgICAgICAgICAgICAgYmluYXJ5QXJyYXlbaV0gPSBiaW5hcnlTdHJpbmcuY2hhckNvZGVBdChpKTtcblxuICAgICAgICAgICAgICAgIHJlc29sdmUobmV3IEJsb2IoW2JpbmFyeUFycmF5XSwge1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnaW1hZ2UvcG5nJ1xuICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gY2FudmFzVG9CbG9iKGNhbnZhcykge1xuICAgICAgICAgICAgaWYgKGNhbnZhcy50b0Jsb2IpXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhbnZhcy50b0Jsb2IocmVzb2x2ZSk7XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHJldHVybiB0b0Jsb2IoY2FudmFzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIHJlc29sdmVVcmwodXJsLCBiYXNlVXJsKSB7XG4gICAgICAgICAgICB2YXIgZG9jID0gd2luZG93LndvbmRlcl9jb250YWluZXJEb2N1bWVudC5pbXBsZW1lbnRhdGlvbi5jcmVhdGVIVE1MRG9jdW1lbnQoKTtcbiAgICAgICAgICAgIHZhciBiYXNlID0gZG9jLmNyZWF0ZUVsZW1lbnQoJ2Jhc2UnKTtcbiAgICAgICAgICAgIGRvYy5oZWFkLmFwcGVuZENoaWxkKGJhc2UpO1xuICAgICAgICAgICAgdmFyIGEgPSBkb2MuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgICAgICAgICAgZG9jLmJvZHkuYXBwZW5kQ2hpbGQoYSk7XG4gICAgICAgICAgICBiYXNlLmhyZWYgPSBiYXNlVXJsO1xuICAgICAgICAgICAgYS5ocmVmID0gdXJsO1xuICAgICAgICAgICAgcmV0dXJuIGEuaHJlZjtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIHVpZCgpIHtcbiAgICAgICAgICAgIHZhciBpbmRleCA9IDA7XG5cbiAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICd1JyArIGZvdXJSYW5kb21DaGFycygpICsgaW5kZXgrKztcblxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGZvdXJSYW5kb21DaGFycygpIHtcbiAgICAgICAgICAgICAgICAgICAgLyogc2VlIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzYyNDg3MjIvMjUxOTM3MyAqL1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKCcwMDAwJyArIChNYXRoLnJhbmRvbSgpICogTWF0aC5wb3coMzYsIDQpIDw8IDApLnRvU3RyaW5nKDM2KSkuc2xpY2UoLTQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBtYWtlSW1hZ2UodXJpKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgICAgICAgIHZhciBpbWFnZSA9IG5ldyBJbWFnZSgpO1xuICAgICAgICAgICAgICAgIGltYWdlLm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShpbWFnZSk7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBpbWFnZS5vbmVycm9yID0gcmVqZWN0O1xuICAgICAgICAgICAgICAgIGltYWdlLnNyYyA9IHVyaTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gZ2V0QW5kRW5jb2RlKHVybCkge1xuICAgICAgICAgICAgdmFyIFRJTUVPVVQgPSAzMDAwMDtcbiAgICAgICAgICAgIGlmIChkb210b2ltYWdlLmltcGwub3B0aW9ucy5jYWNoZUJ1c3QpIHtcbiAgICAgICAgICAgICAgICAvLyBDYWNoZSBieXBhc3Mgc28gd2UgZG9udCBoYXZlIENPUlMgaXNzdWVzIHdpdGggY2FjaGVkIGltYWdlc1xuICAgICAgICAgICAgICAgIC8vIFNvdXJjZTogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4vZG9jcy9XZWIvQVBJL1hNTEh0dHBSZXF1ZXN0L1VzaW5nX1hNTEh0dHBSZXF1ZXN0I0J5cGFzc2luZ190aGVfY2FjaGVcbiAgICAgICAgICAgICAgICB1cmwgKz0gKCgvXFw/LykudGVzdCh1cmwpID8gXCImXCIgOiBcIj9cIikgKyAobmV3IERhdGUoKSkuZ2V0VGltZSgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUpIHtcbiAgICAgICAgICAgICAgICB2YXIgcmVxdWVzdCA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuXG4gICAgICAgICAgICAgICAgcmVxdWVzdC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBkb25lO1xuICAgICAgICAgICAgICAgIHJlcXVlc3Qub250aW1lb3V0ID0gdGltZW91dDtcbiAgICAgICAgICAgICAgICByZXF1ZXN0LnJlc3BvbnNlVHlwZSA9ICdibG9iJztcbiAgICAgICAgICAgICAgICByZXF1ZXN0LnRpbWVvdXQgPSBUSU1FT1VUO1xuICAgICAgICAgICAgICAgIHJlcXVlc3Qub3BlbignR0VUJywgdXJsLCB0cnVlKTtcbiAgICAgICAgICAgICAgICByZXF1ZXN0LnNlbmQoKTtcblxuICAgICAgICAgICAgICAgIHZhciBwbGFjZWhvbGRlcjtcbiAgICAgICAgICAgICAgICBpZiAoZG9tdG9pbWFnZS5pbXBsLm9wdGlvbnMuaW1hZ2VQbGFjZWhvbGRlcikge1xuICAgICAgICAgICAgICAgICAgICB2YXIgc3BsaXQgPSBkb210b2ltYWdlLmltcGwub3B0aW9ucy5pbWFnZVBsYWNlaG9sZGVyLnNwbGl0KC8sLyk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzcGxpdCAmJiBzcGxpdFsxXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXIgPSBzcGxpdFsxXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGRvbmUoKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXF1ZXN0LnJlYWR5U3RhdGUgIT09IDQpIHJldHVybjtcblxuICAgICAgICAgICAgICAgICAgICBpZiAocmVxdWVzdC5zdGF0dXMgIT09IDIwMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHBsYWNlaG9sZGVyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShwbGFjZWhvbGRlcik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZhaWwoJ2Nhbm5vdCBmZXRjaCByZXNvdXJjZTogJyArIHVybCArICcsIHN0YXR1czogJyArIHJlcXVlc3Quc3RhdHVzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgdmFyIGVuY29kZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuICAgICAgICAgICAgICAgICAgICBlbmNvZGVyLm9ubG9hZGVuZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBjb250ZW50ID0gZW5jb2Rlci5yZXN1bHQuc3BsaXQoLywvKVsxXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoY29udGVudCk7XG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIGVuY29kZXIucmVhZEFzRGF0YVVSTChyZXF1ZXN0LnJlc3BvbnNlKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBmdW5jdGlvbiB0aW1lb3V0KCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAocGxhY2Vob2xkZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUocGxhY2Vob2xkZXIpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgZmFpbCgndGltZW91dCBvZiAnICsgVElNRU9VVCArICdtcyBvY2N1cmVkIHdoaWxlIGZldGNoaW5nIHJlc291cmNlOiAnICsgdXJsKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGZhaWwobWVzc2FnZSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKG1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKCcnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIGRhdGFBc1VybChjb250ZW50LCB0eXBlKSB7XG4gICAgICAgICAgICByZXR1cm4gJ2RhdGE6JyArIHR5cGUgKyAnO2Jhc2U2NCwnICsgY29udGVudDtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIGVzY2FwZShzdHJpbmcpIHtcbiAgICAgICAgICAgIHJldHVybiBzdHJpbmcucmVwbGFjZSgvKFsuKis/XiR7fSgpfFxcW1xcXVxcL1xcXFxdKS9nLCAnXFxcXCQxJyk7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBkZWxheShtcykge1xuICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChhcmcpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUpIHtcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKGFyZyk7XG4gICAgICAgICAgICAgICAgICAgIH0sIG1zKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBhc0FycmF5KGFycmF5TGlrZSkge1xuICAgICAgICAgICAgdmFyIGFycmF5ID0gW107XG4gICAgICAgICAgICB2YXIgbGVuZ3RoID0gYXJyYXlMaWtlLmxlbmd0aDtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIGFycmF5LnB1c2goYXJyYXlMaWtlW2ldKTtcbiAgICAgICAgICAgIHJldHVybiBhcnJheTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIGVzY2FwZVhodG1sKHN0cmluZykge1xuICAgICAgICAgICAgcmV0dXJuIHN0cmluZy5yZXBsYWNlKC8jL2csICclMjMnKS5yZXBsYWNlKC9cXG4vZywgJyUwQScpO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gd2lkdGgobm9kZSkge1xuICAgICAgICAgICAgdmFyIGxlZnRCb3JkZXIgPSBweChub2RlLCAnYm9yZGVyLWxlZnQtd2lkdGgnKTtcbiAgICAgICAgICAgIHZhciByaWdodEJvcmRlciA9IHB4KG5vZGUsICdib3JkZXItcmlnaHQtd2lkdGgnKTtcbiAgICAgICAgICAgIHJldHVybiBub2RlLnNjcm9sbFdpZHRoICsgbGVmdEJvcmRlciArIHJpZ2h0Qm9yZGVyO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gaGVpZ2h0KG5vZGUpIHtcbiAgICAgICAgICAgIHZhciB0b3BCb3JkZXIgPSBweChub2RlLCAnYm9yZGVyLXRvcC13aWR0aCcpO1xuICAgICAgICAgICAgdmFyIGJvdHRvbUJvcmRlciA9IHB4KG5vZGUsICdib3JkZXItYm90dG9tLXdpZHRoJyk7XG4gICAgICAgICAgICByZXR1cm4gbm9kZS5zY3JvbGxIZWlnaHQgKyB0b3BCb3JkZXIgKyBib3R0b21Cb3JkZXI7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBweChub2RlLCBzdHlsZVByb3BlcnR5KSB7XG4gICAgICAgICAgICB2YXIgdmFsdWUgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShub2RlKS5nZXRQcm9wZXJ0eVZhbHVlKHN0eWxlUHJvcGVydHkpO1xuICAgICAgICAgICAgcmV0dXJuIHBhcnNlRmxvYXQodmFsdWUucmVwbGFjZSgncHgnLCAnJykpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbmV3SW5saW5lcigpIHtcbiAgICAgICAgdmFyIFVSTF9SRUdFWCA9IC91cmxcXChbJ1wiXT8oW14nXCJdKz8pWydcIl0/XFwpL2c7XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGlubGluZUFsbDogaW5saW5lQWxsLFxuICAgICAgICAgICAgc2hvdWxkUHJvY2Vzczogc2hvdWxkUHJvY2VzcyxcbiAgICAgICAgICAgIGltcGw6IHtcbiAgICAgICAgICAgICAgICByZWFkVXJsczogcmVhZFVybHMsXG4gICAgICAgICAgICAgICAgaW5saW5lOiBpbmxpbmVcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICBmdW5jdGlvbiBzaG91bGRQcm9jZXNzKHN0cmluZykge1xuICAgICAgICAgICAgcmV0dXJuIHN0cmluZy5zZWFyY2goVVJMX1JFR0VYKSAhPT0gLTE7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiByZWFkVXJscyhzdHJpbmcpIHtcbiAgICAgICAgICAgIHZhciByZXN1bHQgPSBbXTtcbiAgICAgICAgICAgIHZhciBtYXRjaDtcbiAgICAgICAgICAgIHdoaWxlICgobWF0Y2ggPSBVUkxfUkVHRVguZXhlYyhzdHJpbmcpKSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKG1hdGNoWzFdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiByZXN1bHQuZmlsdGVyKGZ1bmN0aW9uICh1cmwpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gIXV0aWwuaXNEYXRhVXJsKHVybCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIGlubGluZShzdHJpbmcsIHVybCwgYmFzZVVybCwgZ2V0KSB7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHVybClcbiAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiAodXJsKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBiYXNlVXJsID8gdXRpbC5yZXNvbHZlVXJsKHVybCwgYmFzZVVybCkgOiB1cmw7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAudGhlbihnZXQgfHwgdXRpbC5nZXRBbmRFbmNvZGUpXG4gICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHV0aWwuZGF0YUFzVXJsKGRhdGEsIHV0aWwubWltZVR5cGUodXJsKSk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiAoZGF0YVVybCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gc3RyaW5nLnJlcGxhY2UodXJsQXNSZWdleCh1cmwpLCAnJDEnICsgZGF0YVVybCArICckMycpO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBmdW5jdGlvbiB1cmxBc1JlZ2V4KHVybCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgUmVnRXhwKCcodXJsXFxcXChbXFwnXCJdPykoJyArIHV0aWwuZXNjYXBlKHVybCkgKyAnKShbXFwnXCJdP1xcXFwpKScsICdnJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBpbmxpbmVBbGwoc3RyaW5nLCBiYXNlVXJsLCBnZXQpIHtcbiAgICAgICAgICAgIGlmIChub3RoaW5nVG9JbmxpbmUoKSkgcmV0dXJuIFByb21pc2UucmVzb2x2ZShzdHJpbmcpO1xuXG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHN0cmluZylcbiAgICAgICAgICAgICAgICAudGhlbihyZWFkVXJscylcbiAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiAodXJscykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgZG9uZSA9IFByb21pc2UucmVzb2x2ZShzdHJpbmcpO1xuICAgICAgICAgICAgICAgICAgICB1cmxzLmZvckVhY2goZnVuY3Rpb24gKHVybCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZG9uZSA9IGRvbmUudGhlbihmdW5jdGlvbiAoc3RyaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGlubGluZShzdHJpbmcsIHVybCwgYmFzZVVybCwgZ2V0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRvbmU7XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGZ1bmN0aW9uIG5vdGhpbmdUb0lubGluZSgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gIXNob3VsZFByb2Nlc3Moc3RyaW5nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIG5ld0ZvbnRGYWNlcygpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHJlc29sdmVBbGw6IHJlc29sdmVBbGwsXG4gICAgICAgICAgICBpbXBsOiB7XG4gICAgICAgICAgICAgICAgcmVhZEFsbDogcmVhZEFsbFxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIGZ1bmN0aW9uIHJlc29sdmVBbGwoKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVhZEFsbChkb2N1bWVudClcbiAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiAod2ViRm9udHMpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UuYWxsKFxuICAgICAgICAgICAgICAgICAgICAgICAgd2ViRm9udHMubWFwKGZ1bmN0aW9uICh3ZWJGb250KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHdlYkZvbnQucmVzb2x2ZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChjc3NTdHJpbmdzKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBjc3NTdHJpbmdzLmpvaW4oJ1xcbicpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gcmVhZEFsbCgpIHtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodXRpbC5hc0FycmF5KHdpbmRvdy53b25kZXJfY29udGFpbmVyRG9jdW1lbnQuc3R5bGVTaGVldHMpKVxuICAgICAgICAgICAgICAgIC50aGVuKGdldENzc1J1bGVzKVxuICAgICAgICAgICAgICAgIC50aGVuKHNlbGVjdFdlYkZvbnRSdWxlcylcbiAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocnVsZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJ1bGVzLm1hcChuZXdXZWJGb250KTtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgZnVuY3Rpb24gc2VsZWN0V2ViRm9udFJ1bGVzKGNzc1J1bGVzKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNzc1J1bGVzXG4gICAgICAgICAgICAgICAgICAgIC5maWx0ZXIoZnVuY3Rpb24gKHJ1bGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBydWxlLnR5cGUgPT09IENTU1J1bGUuRk9OVF9GQUNFX1JVTEU7XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIC5maWx0ZXIoZnVuY3Rpb24gKHJ1bGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBpbmxpbmVyLnNob3VsZFByb2Nlc3MocnVsZS5zdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKCdzcmMnKSk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmdW5jdGlvbiBnZXRDc3NSdWxlcyhzdHlsZVNoZWV0cykge1xuICAgICAgICAgICAgICAgIHZhciBjc3NSdWxlcyA9IFtdO1xuICAgICAgICAgICAgICAgIHN0eWxlU2hlZXRzLmZvckVhY2goZnVuY3Rpb24gKHNoZWV0KSB7XG4gICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB1dGlsLmFzQXJyYXkoc2hlZXQuY3NzUnVsZXMgfHwgW10pLmZvckVhY2goY3NzUnVsZXMucHVzaC5iaW5kKGNzc1J1bGVzKSk7XG4gICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFcnJvciB3aGlsZSByZWFkaW5nIENTUyBydWxlcyBmcm9tICcgKyBzaGVldC5ocmVmLCBlLnRvU3RyaW5nKCkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNzc1J1bGVzO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmdW5jdGlvbiBuZXdXZWJGb250KHdlYkZvbnRSdWxlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZTogZnVuY3Rpb24gcmVzb2x2ZSgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBiYXNlVXJsID0gKHdlYkZvbnRSdWxlLnBhcmVudFN0eWxlU2hlZXQgfHwge30pLmhyZWY7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gaW5saW5lci5pbmxpbmVBbGwod2ViRm9udFJ1bGUuY3NzVGV4dCwgYmFzZVVybCk7XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHNyYzogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHdlYkZvbnRSdWxlLnN0eWxlLmdldFByb3BlcnR5VmFsdWUoJ3NyYycpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIG5ld0ltYWdlcygpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGlubGluZUFsbDogaW5saW5lQWxsLFxuICAgICAgICAgICAgaW1wbDoge1xuICAgICAgICAgICAgICAgIG5ld0ltYWdlOiBuZXdJbWFnZVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIGZ1bmN0aW9uIG5ld0ltYWdlKGVsZW1lbnQpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgaW5saW5lOiBpbmxpbmVcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGZ1bmN0aW9uIGlubGluZShnZXQpIHtcbiAgICAgICAgICAgICAgICBpZiAodXRpbC5pc0RhdGFVcmwoZWxlbWVudC5zcmMpKSByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGVsZW1lbnQuc3JjKVxuICAgICAgICAgICAgICAgICAgICAudGhlbihnZXQgfHwgdXRpbC5nZXRBbmRFbmNvZGUpXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdXRpbC5kYXRhQXNVcmwoZGF0YSwgdXRpbC5taW1lVHlwZShlbGVtZW50LnNyYykpO1xuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiAoZGF0YVVybCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50Lm9ubG9hZCA9IHJlc29sdmU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5vbmVycm9yID0gcmVqZWN0O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuc3JjID0gZGF0YVVybDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIGlubGluZUFsbChub2RlKSB7XG4gICAgICAgICAgICBpZiAoIShub2RlIGluc3RhbmNlb2YgRWxlbWVudCkpIHJldHVybiBQcm9taXNlLnJlc29sdmUobm9kZSk7XG5cbiAgICAgICAgICAgIHJldHVybiBpbmxpbmVCYWNrZ3JvdW5kKG5vZGUpXG4gICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAobm9kZSBpbnN0YW5jZW9mIEhUTUxJbWFnZUVsZW1lbnQpXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3SW1hZ2Uobm9kZSkuaW5saW5lKCk7XG4gICAgICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLmFsbChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1dGlsLmFzQXJyYXkobm9kZS5jaGlsZE5vZGVzKS5tYXAoZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBpbmxpbmVBbGwoY2hpbGQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBmdW5jdGlvbiBpbmxpbmVCYWNrZ3JvdW5kKG5vZGUpIHtcbiAgICAgICAgICAgICAgICB2YXIgYmFja2dyb3VuZCA9IG5vZGUuc3R5bGUuZ2V0UHJvcGVydHlWYWx1ZSgnYmFja2dyb3VuZCcpO1xuXG4gICAgICAgICAgICAgICAgaWYgKCFiYWNrZ3JvdW5kKSByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKG5vZGUpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuIGlubGluZXIuaW5saW5lQWxsKGJhY2tncm91bmQpXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChpbmxpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlLnN0eWxlLnNldFByb3BlcnR5KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdiYWNrZ3JvdW5kJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmxpbmVkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUuc3R5bGUuZ2V0UHJvcGVydHlQcmlvcml0eSgnYmFja2dyb3VuZCcpXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbm9kZTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59KSh0aGlzKTtcbiIsIlxuLy8gaW1wb3J0IHthfSBmcm9tICcuL3Rvb2xiYXIuanMnXG4vLyBpbXBvcnQgaHRtbDJjYW52YXMgZnJvbSAnLi9odG1sMmNhbnZhcy5taW4uanMnXG5pbXBvcnQgZG9tdG9pbWFnZSBmcm9tICcuL2RvbS10by1pbWFnZS5qcydcbmltcG9ydCB7IGNzcywgcmVtb3ZlLCBkb21UeXBlLCBhZGRDbGFzcywgdHlwZUNoZWNraW5nLCBsb2FkQ3NzQ29kZSB9IGZyb20gJy4vdXRpbCdcbmltcG9ydCBjcmVhdGVEcmFnRG9tIGZyb20gJy4vY3JlYXRlRHJhZ0RvbS5qcydcbmltcG9ydCBjcmVhdGVUb29sYmFyIGZyb20gJy4vdG9vbGJhci90b29sYmFyLmpzJ1xuaW1wb3J0IGRyYXdNaWRkbGVJbWFnZSBmcm9tICcuL3Rvb2xiYXIvbWlkZGxlSW1hZ2UvZHJhd01pZGRsZUltYWdlJ1xuaW1wb3J0IGNsZWFyTWlkZGxlSW1hZ2UgZnJvbSAnLi90b29sYmFyL21pZGRsZUltYWdlL2NsZWFyTWlkZGxlSW1hZ2UnXG5pbXBvcnQgZW5kQW5kQ2xlYXIgZnJvbSAnLi90b29sYmFyL2VuZEFuZENsZWFyJ1xuaW1wb3J0IGJhY2tSaWdodENsaWVudCBmcm9tICcuL2JhY2tSaWdodENsaWVudCdcbmltcG9ydCB0b29sYmFyUG9zaXRpb24gZnJvbSAnLi90b29sYmFyL3Rvb2xiYXJQb3NpdGlvbidcbmltcG9ydCBjdXJzb3JJbWcgZnJvbSAnLi9hc3NldHMvaW1ncy9jdXJzb3IuaWNvJ1xuaW1wb3J0ICcuL2tzcy5zY3NzJ1xuaW1wb3J0IHsgcmVzb2x2ZSB9IGZyb20gJ3VyaS1qcydcblxuZnVuY3Rpb24gaW5pdExpbmVXaWR0aChpbml0TGluZSkge1xuICAgIGlmIChpc05hTihpbml0TGluZSkpIHtcbiAgICAgICAgcmV0dXJuIDEwXG4gICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKGluaXRMaW5lID4gMTApIHtcbiAgICAgICAgICAgIHJldHVybiAxMFxuICAgICAgICB9IGVsc2UgaWYgKGluaXRMaW5lIDwgMSkge1xuICAgICAgICAgICAgcmV0dXJuIDFcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBpbml0TGluZVxuICAgICAgICB9XG4gICAgfVxufVxuXG5sZXQga3NzID0gKGZ1bmN0aW9uICgpIHtcbiAgICBsZXQgaW5zdGFuY2VcblxuICAgIC8v5Y2V5L6L5qih5byPXG4gICAgbGV0IGtzcyA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG4gICAgICAgIGlmIChpbnN0YW5jZSkge1xuICAgICAgICAgICAgcmV0dXJuIGluc3RhbmNlXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmtzcyA9IG51bGxcbiAgICAgICAgdGhpcy5zdHlsZSA9IG51bGxcbiAgICAgICAgdGhpcy5rc3NTY3JlZW5TaG90V3JhcHBlciA9IG51bGxcbiAgICAgICAgdGhpcy5rc3NUZXh0TGF5ZXIgPSBudWxsXG4gICAgICAgIHRoaXMucmVjdGFuZ2xlQ2FudmFzID0gbnVsbFxuICAgICAgICB0aGlzLnRvb2xiYXIgPSBudWxsXG4gICAgICAgIHRoaXMuc2NhbGUgPSB3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbyB8fCAxXG4gICAgICAgIC8v5a2Y5YKo5b2T5YmN5b+r54Wn55qE5YWD57SgXG4gICAgICAgIHRoaXMuY3VycmVudEltZ0RvbSA9IG51bGxcbiAgICAgICAgLy/miKrlm77nirbmgIFcbiAgICAgICAgdGhpcy5pc1NjcmVlbnNob3QgPSBmYWxzZVxuICAgICAgICAvL+W/q+eFp+e7hFxuICAgICAgICB0aGlzLnNuYXBzaG9vdExpc3QgPSBbXVxuICAgICAgICAvKlxuICAgICAgICAqIDE6IOeCueS4i+W3pumUru+8jOW8gOWni+eKtuaAgVxuICAgICAgICAqIDI6IOm8oOagh+enu+WKqO+8jOi/m+ihjOeKtuaAgVxuICAgICAgICAqIDM6IOaUvuW8gOW3pumUru+8jOe7k+adn+eKtuaAgVxuICAgICAgICAqICovXG4gICAgICAgIHRoaXMuZHJhd2luZ1N0YXR1cyA9IG51bGxcbiAgICAgICAgdGhpcy5jdXJyZW50VG9vbFR5cGUgPSBudWxsXG4gICAgICAgIHRoaXMuaW1nQmFzZTY0ID0gbnVsbFxuICAgICAgICB0aGlzLmlzRWRpdCA9IGZhbHNlXG4gICAgICAgIHRoaXMuc3RhcnRYID0gbnVsbFxuICAgICAgICB0aGlzLnN0YXJ0WSA9IG51bGxcbiAgICAgICAgdGhpcy53aWR0aCA9IG51bGxcbiAgICAgICAgdGhpcy5oZWlnaHQgPSBudWxsXG4gICAgICAgIHRoaXMuZG90U2l6ZSA9IDZcbiAgICAgICAgdGhpcy5saW5lU2l6ZSA9IDJcbiAgICAgICAgLy/lt6XlhbfmmL7npLrnirbmgIFcbiAgICAgICAgdGhpcy50b29sU2hvdyA9IG9wdGlvbnMudG9vbFNob3dcbiAgICAgICAgLy/lt6XlhbfmoI/moLflvI9cbiAgICAgICAgdGhpcy50b29sYmFyV2lkdGggPSBudWxsXG4gICAgICAgIHRoaXMudG9vbGJhckhlaWdodCA9IDMwXG4gICAgICAgIHRoaXMudG9vbGJhck1hcmdpblRvcCA9IDVcbiAgICAgICAgdGhpcy50b29sYmFyQ29sb3IgPSAnI2ZiMzgzOCdcbiAgICAgICAgdGhpcy50b29sYmFyTGluZVdpZHRoID0gdHlwZUNoZWNraW5nKG9wdGlvbnMudG9vbFNob3cpID09PSAnW29iamVjdCBPYmplY3RdJyA/IGluaXRMaW5lV2lkdGgob3B0aW9ucy50b29sU2hvdy5kcmF3TGluZSkgOiAxMFxuXG5cbiAgICAgICAgLy/lt6XlhbfmoI/kuovku7ZcbiAgICAgICAgdGhpcy50b29sbW91c2Vkb3duID0gbnVsbFxuICAgICAgICB0aGlzLnRvb2xtb3VzZW1vdmUgPSBudWxsXG4gICAgICAgIHRoaXMudG9vbG1vdXNldXAgPSBudWxsXG5cbiAgICAgICAgLy/moLnmja5iYXNlNjTojrflj5bnu53lr7nlnLDlnYBcbiAgICAgICAgdGhpcy5jb3B5UGF0aCA9IG9wdGlvbnMuY29weVBhdGhcbiAgICAgICAgLy/mmK/lkKbkuIvovb1cbiAgICAgICAgdGhpcy5uZWVkRG93bmxvYWQgPSBvcHRpb25zLm5lZWREb3dubG9hZFxuXG4gICAgICAgIC8v5oiQ5Yqf5Zue6LCDXG4gICAgICAgIHRoaXMuZW5kQ0IgPSBvcHRpb25zLmVuZENCXG4gICAgICAgIC8v5pKk6ZSA5Zue6LCDXG4gICAgICAgIHRoaXMuY2FuY2VsQ0IgPSBvcHRpb25zLmNhbmNlbENCXG5cbiAgICAgICAgdGhpcy5zdGFydERyYXdEb3duID0gKGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHRoYXQgPSB0aGlzXG4gICAgICAgICAgICB0aGF0Ll9jb250YWluZXJEb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgdGhhdC5jYW5jZWxEcmF3aW5nU3RhdHVzKVxuICAgICAgICAgICAgdGhhdC5fY29udGFpbmVyRG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY29udGV4dG1lbnUnLCB0aGF0LnByZXZlbnRDb250ZXh0TWVudSlcbiAgICAgICAgICAgIC8v5b2T5LiN5piv6byg5qCH5bem6ZSu5pe256uL5Y2z6L+U5ZueXG4gICAgICAgICAgICBpZiAoZS5idXR0b24gIT09IDApIHtcbiAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHRoYXQuZHJhd2luZ1N0YXR1cyAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhhdC5kcmF3aW5nU3RhdHVzID0gMVxuXG4gICAgICAgICAgICB0aGF0LnN0YXJ0WCA9IGUuY2xpZW50WFxuICAgICAgICAgICAgdGhhdC5zdGFydFkgPSBlLmNsaWVudFlcbiAgICAgICAgICAgIC8v56e76Zmk5bm25re75YqgXG4gICAgICAgICAgICByZW1vdmUodGhhdC5fY29udGFpbmVyRG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2tzc1NjcmVlblNob3RXcmFwcGVyJykpXG4gICAgICAgICAgICBsZXQga3NzU2NyZWVuU2hvdFdyYXBwZXIgPSB0aGF0Ll9jb250YWluZXJEb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICAgICAga3NzU2NyZWVuU2hvdFdyYXBwZXIuaWQgPSAna3NzU2NyZWVuU2hvdFdyYXBwZXInXG4gICAgICAgICAgICB0aGF0Lmtzc1NjcmVlblNob3RXcmFwcGVyID0ga3NzU2NyZWVuU2hvdFdyYXBwZXJcbiAgICAgICAgICAgIGxldCBrc3NUZXh0TGF5ZXIgPSB0aGF0Ll9jb250YWluZXJEb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICAgICAga3NzVGV4dExheWVyLmlkID0gJ2tzc1RleHRMYXllcidcbiAgICAgICAgICAgIHRoYXQua3NzVGV4dExheWVyID0ga3NzVGV4dExheWVyXG5cbiAgICAgICAgICAgIGtzc1NjcmVlblNob3RXcmFwcGVyLmFwcGVuZENoaWxkKGtzc1RleHRMYXllcilcbiAgICAgICAgICAgIHRoYXQuX2NvbnRhaW5lci5hcHBlbmRDaGlsZChrc3NTY3JlZW5TaG90V3JhcHBlcilcblxuICAgICAgICAgICAgdGhhdC5fY29udGFpbmVyRG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgdGhhdC5kcmF3aW5nKVxuICAgICAgICAgICAgdGhhdC5fY29udGFpbmVyRG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIHRoYXQuZW5kRHJhdylcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuZHJhd2luZyA9IChlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB0aGF0ID0gdGhpc1xuICAgICAgICAgICAgdGhhdC5kcmF3aW5nU3RhdHVzID0gMlxuXG4gICAgICAgICAgICBsZXQgY2xpZW50ID0gYmFja1JpZ2h0Q2xpZW50KGUpXG4gICAgICAgICAgICBsZXQgY2xpZW50WCA9IGNsaWVudFswXVxuICAgICAgICAgICAgbGV0IGNsaWVudFkgPSBjbGllbnRbMV1cblxuICAgICAgICAgICAgY3NzKHRoYXQua3NzU2NyZWVuU2hvdFdyYXBwZXIsIHtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IE1hdGguYWJzKGNsaWVudFkgLSB0aGF0LnN0YXJ0WSkgKyAncHgnLFxuICAgICAgICAgICAgICAgIHdpZHRoOiBNYXRoLmFicyhjbGllbnRYIC0gdGhhdC5zdGFydFgpICsgJ3B4JyxcbiAgICAgICAgICAgICAgICB0b3A6IE1hdGgubWluKHRoYXQuc3RhcnRZLCBjbGllbnRZKSArICdweCcsXG4gICAgICAgICAgICAgICAgbGVmdDogTWF0aC5taW4odGhhdC5zdGFydFgsIGNsaWVudFgpICsgJ3B4J1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuZW5kRHJhdyA9IChlKSA9PiB7XG4gICAgICAgICAgICBpZiAoZS5idXR0b24gIT09IDApIHtcbiAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHRoYXQgPSB0aGlzXG4gICAgICAgICAgICB0aGF0LmRyYXdpbmdTdGF0dXMgPSAzXG5cbiAgICAgICAgICAgIGlmICh0aGF0LnN0YXJ0WCA9PT0gZS5jbGllbnRYICYmIHRoYXQuc3RhcnRZID09PSBlLmNsaWVudFkpIHtcbiAgICAgICAgICAgICAgICBsZXQgY2xpZW50SGVpZ2h0ID0gdGhhdC5fZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodFxuICAgICAgICAgICAgICAgIGxldCBjbGllbnRXaWR0aCA9IHRoYXQuX2RvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aFxuICAgICAgICAgICAgICAgIHRoYXQuc3RhcnRYID0gMlxuICAgICAgICAgICAgICAgIHRoYXQuc3RhcnRZID0gMlxuICAgICAgICAgICAgICAgIHRoYXQuaGVpZ2h0ID0gY2xpZW50SGVpZ2h0IC0gNFxuICAgICAgICAgICAgICAgIHRoYXQud2lkdGggPSBjbGllbnRXaWR0aCAtIDRcbiAgICAgICAgICAgICAgICBjc3ModGhhdC5rc3NTY3JlZW5TaG90V3JhcHBlciwge1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IHRoYXQuaGVpZ2h0ICsgJ3B4JyxcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IHRoYXQud2lkdGggKyAncHgnLFxuICAgICAgICAgICAgICAgICAgICB0b3A6IHRoYXQuc3RhcnRZICsgJ3B4JyxcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogdGhhdC5zdGFydFggKyAncHgnXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbGV0IGNsaWVudCA9IGJhY2tSaWdodENsaWVudChlKVxuICAgICAgICAgICAgICAgIGxldCBjbGllbnRYID0gY2xpZW50WzBdXG4gICAgICAgICAgICAgICAgbGV0IGNsaWVudFkgPSBjbGllbnRbMV1cblxuICAgICAgICAgICAgICAgIHRoYXQud2lkdGggPSBNYXRoLmFicyhjbGllbnRYIC0gdGhhdC5zdGFydFgpXG4gICAgICAgICAgICAgICAgdGhhdC5oZWlnaHQgPSBNYXRoLmFicyhjbGllbnRZIC0gdGhhdC5zdGFydFkpXG4gICAgICAgICAgICAgICAgdGhhdC5zdGFydFggPSBNYXRoLm1pbih0aGF0LnN0YXJ0WCwgY2xpZW50WClcbiAgICAgICAgICAgICAgICB0aGF0LnN0YXJ0WSA9IE1hdGgubWluKHRoYXQuc3RhcnRZLCBjbGllbnRZKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhhdC5fY29udGFpbmVyRG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgdGhhdC5kcmF3aW5nKVxuXG4gICAgICAgICAgICBsZXQgY2FudmFzID0gdGhhdC5fY29udGFpbmVyRG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJylcbiAgICAgICAgICAgIGNhbnZhcy5pZCA9ICdrc3NSZWN0YW5nbGVDYW52YXMnXG5cbiAgICAgICAgICAgIHRoYXQua3NzU2NyZWVuU2hvdFdyYXBwZXIuYXBwZW5kQ2hpbGQoY2FudmFzKVxuICAgICAgICAgICAgdGhhdC5yZWN0YW5nbGVDYW52YXMgPSBjYW52YXNcbiAgICAgICAgICAgIGNhbnZhcy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhhdC5pc0VkaXQgfHwgZXZlbnQuYnV0dG9uID09PSAyKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjbGVhck1pZGRsZUltYWdlKHRoYXQpXG4gICAgICAgICAgICAgICAgbGV0IHN0YXJ0WCA9IGV2ZW50LmNsaWVudFhcbiAgICAgICAgICAgICAgICBsZXQgc3RhcnRZID0gZXZlbnQuY2xpZW50WVxuICAgICAgICAgICAgICAgIHRoYXQuX2NvbnRhaW5lckRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIGNhbnZhc01vdmVFdmVudClcbiAgICAgICAgICAgICAgICB0aGF0Ll9jb250YWluZXJEb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgY2FudmFzVXBFdmVudClcbiAgICAgICAgICAgICAgICAvL+acgOWQjuW3puS4iuinkueahHRvcOWSjGxlZnRcbiAgICAgICAgICAgICAgICBsZXQgdG9wXG4gICAgICAgICAgICAgICAgbGV0IGxlZnRcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBjYW52YXNNb3ZlRXZlbnQoZSkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgY2xpZW50SGVpZ2h0ID0gdGhhdC5fZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodFxuICAgICAgICAgICAgICAgICAgICBsZXQgY2xpZW50V2lkdGggPSB0aGF0Ll9kb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGhcblxuICAgICAgICAgICAgICAgICAgICB0b3AgPSB0aGF0LnN0YXJ0WSArIGUuY2xpZW50WSAtIHN0YXJ0WVxuXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGF0LnN0YXJ0WSArIGUuY2xpZW50WSAtIHN0YXJ0WSArIHRoYXQuaGVpZ2h0ID4gY2xpZW50SGVpZ2h0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0b3AgPSBjbGllbnRIZWlnaHQgLSB0aGF0LmhlaWdodFxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoYXQuc3RhcnRZICsgZS5jbGllbnRZIC0gc3RhcnRZIDwgMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdG9wID0gMFxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgbGVmdCA9IHRoYXQuc3RhcnRYICsgZS5jbGllbnRYIC0gc3RhcnRYXG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoYXQuc3RhcnRYICsgZS5jbGllbnRYIC0gc3RhcnRYICsgdGhhdC53aWR0aCA+IGNsaWVudFdpZHRoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZWZ0ID0gY2xpZW50V2lkdGggLSB0aGF0LndpZHRoXG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBpZiAodGhhdC5zdGFydFggKyBlLmNsaWVudFggLSBzdGFydFggPCAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZWZ0ID0gMFxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgY3NzKHRoYXQua3NzU2NyZWVuU2hvdFdyYXBwZXIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogdG9wICsgJ3B4JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IGxlZnQgKyAncHgnXG4gICAgICAgICAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgICAgICAgICAgdG9vbGJhclBvc2l0aW9uKHRoYXQsIHRoYXQud2lkdGgsIHRoYXQuaGVpZ2h0LCB0b3AsIGxlZnQsIHRoYXQudG9vbGJhcilcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBjYW52YXNVcEV2ZW50KGUpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRvcCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0b3AgPSB0aGF0LnN0YXJ0WVxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGxlZnQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGVmdCA9IHRoYXQuc3RhcnRYXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGhhdC5zdGFydFkgPSB0b3BcbiAgICAgICAgICAgICAgICAgICAgdGhhdC5zdGFydFggPSBsZWZ0XG4gICAgICAgICAgICAgICAgICAgIHRoYXQuX2NvbnRhaW5lckRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIGNhbnZhc01vdmVFdmVudClcbiAgICAgICAgICAgICAgICAgICAgdGhhdC5fY29udGFpbmVyRG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIGNhbnZhc1VwRXZlbnQpXG4gICAgICAgICAgICAgICAgICAgIGRyYXdNaWRkbGVJbWFnZSh0aGF0KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB0aGF0Lmtzcy5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCB0aGF0LnN0YXJ0RHJhd0Rvd24pXG4gICAgICAgICAgICB0aGF0Ll9jb250YWluZXJEb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgdGhhdC5lbmREcmF3KVxuXG4gICAgICAgICAgICBjcmVhdGVEcmFnRG9tKFxuICAgICAgICAgICAgICAgIHRoYXQua3NzU2NyZWVuU2hvdFdyYXBwZXIsXG4gICAgICAgICAgICAgICAgdGhhdC5kb3RTaXplLFxuICAgICAgICAgICAgICAgIHRoYXQubGluZVNpemUsXG4gICAgICAgICAgICAgICAgdGhhdFxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgbGV0IGltZyA9IHRoYXQuX2NvbnRhaW5lckRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpXG4gICAgICAgICAgICBpbWcuaWQgPSAna3NzQ3VycmVudEltZ0RvbSdcblxuICAgICAgICAgICAgdGhhdC5rc3NTY3JlZW5TaG90V3JhcHBlci5hcHBlbmRDaGlsZChpbWcpXG4gICAgICAgICAgICB0aGF0LmN1cnJlbnRJbWdEb20gPSBpbWdcbiAgICAgICAgICAgIGRyYXdNaWRkbGVJbWFnZSh0aGF0KVxuICAgICAgICAgICAgdGhhdC50b29sYmFyID0gY3JlYXRlVG9vbGJhcih0aGF0KVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5wcmV2ZW50Q29udGV4dE1lbnUgPSAoZSkgPT4ge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmNhbmNlbERyYXdpbmdTdGF0dXMgPSAoZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdGhhdCA9IHRoaXNcbiAgICAgICAgICAgIGlmIChlLmJ1dHRvbiA9PT0gMikge1xuICAgICAgICAgICAgICAgIGlmICh0aGF0LmRyYXdpbmdTdGF0dXMgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhhdC5fY29udGFpbmVyRG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIHRoYXQuY2FuY2VsRHJhd2luZ1N0YXR1cylcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGF0Ll9jb250YWluZXJEb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdjb250ZXh0bWVudScsIHRoYXQucHJldmVudENvbnRleHRNZW51KVxuICAgICAgICAgICAgICAgICAgICB9LCAwKVxuXG4gICAgICAgICAgICAgICAgICAgIGVuZEFuZENsZWFyKHRoYXQpXG4gICAgICAgICAgICAgICAgICAgIHRoYXQuY2FuY2VsQ0IoKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmVtb3ZlKHRoYXQua3NzU2NyZWVuU2hvdFdyYXBwZXIpXG4gICAgICAgICAgICAgICAgdGhhdC5rc3NTY3JlZW5TaG90V3JhcHBlciA9IG51bGxcbiAgICAgICAgICAgICAgICB0aGF0Lmtzc1RleHRMYXllciA9IG51bGxcbiAgICAgICAgICAgICAgICB0aGF0LnJlY3RhbmdsZUNhbnZhcyA9IG51bGxcbiAgICAgICAgICAgICAgICB0aGF0LmRyYXdpbmdTdGF0dXMgPSBudWxsXG4gICAgICAgICAgICAgICAgdGhhdC5pc0VkaXQgPSBmYWxzZVxuICAgICAgICAgICAgICAgIHRoYXQuc25hcHNob290TGlzdCA9IFtdXG4gICAgICAgICAgICAgICAgdGhhdC5jdXJyZW50VG9vbFR5cGUgPSBudWxsXG4gICAgICAgICAgICAgICAgdGhhdC50b29sbW91c2Vkb3duID0gbnVsbFxuICAgICAgICAgICAgICAgIHRoYXQudG9vbG1vdXNlbW92ZSA9IG51bGxcbiAgICAgICAgICAgICAgICB0aGF0LnRvb2xtb3VzZXVwID0gbnVsbFxuICAgICAgICAgICAgICAgIHRoYXQua3NzLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIHRoYXQuc3RhcnREcmF3RG93bilcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLnN0YXJ0U2NyZWVuU2hvdCA9ICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuc3RhcnQoKVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuZW5kU2NyZWVuU2hvdCA9ICgpID0+IHtcbiAgICAgICAgICAgIGVuZEFuZENsZWFyKHRoaXMpXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnNldE5vZGUgPSAobm9kZSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5fbm9kZSA9IG5vZGU7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zZXREb2N1bWVudCA9IChkb2N1bWVudCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5fZG9jdW1lbnQgPSBkb2N1bWVudDtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc2V0Q29udGFpbmVyID0gKGNvbnRhaW5lcikgPT4ge1xuICAgICAgICAgICAgdGhpcy5fY29udGFpbmVyID0gY29udGFpbmVyO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2V0Q29udGFpbmVyRG9jdW1lbnQgPSAoY29udGFpbmVyRG9jdW1lbnQpID0+IHtcbiAgICAgICAgICAgIHRoaXMuX2NvbnRhaW5lckRvY3VtZW50ID0gY29udGFpbmVyRG9jdW1lbnQ7XG5cbiAgICAgICAgICAgIHdpbmRvdy53b25kZXJfY29udGFpbmVyRG9jdW1lbnQgPSBjb250YWluZXJEb2N1bWVudDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNldENhbnZhc0hhbmRsZXIgPSAoY2FudmFzSGFuZGxlckZ1bmMpID0+IHtcbiAgICAgICAgICAgIHRoaXMuX2NhbnZhc0hhbmRsZXJGdW5jID0gKGNhbnZhcykgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiBjYW52YXNIYW5kbGVyRnVuYyh0aGlzLCBjYW52YXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cblxuXG5cbiAgICAgICAgLy8gdGhpcy5pbml0KG9wdGlvbnMua2V5LCBvcHRpb25zLmltbWVkaWF0ZWx5KVxuICAgICAgICByZXR1cm4gaW5zdGFuY2UgPSB0aGlzXG4gICAgfVxuXG4gICAga3NzLnByb3RvdHlwZS5pbml0ID0gZnVuY3Rpb24gKGtleSwgaW1tZWRpYXRlbHkpIHtcbiAgICAgICAgY29uc3QgdGhhdCA9IHRoaXNcblxuICAgICAgICBsb2FkQ3NzQ29kZShcbiAgICAgICAgICAgIGBcblx0XHQua3NzQm9keSB7XG5cdFx0XHQvKiBjdXJzb3I6IHVybChcIi4vYXNzZXRzL2ltZ3MvY3Vyc29yLmljb1wiKSwgYXV0bzsgKi9cblx0XHRcdHVzZXItc2VsZWN0OiBub25lO1xuXHRcdFx0b3ZlcmZsb3c6IGhpZGRlbjtcblx0XHRcdC8qIG1hcmdpbjogMDtcblx0XHRcdHBhZGRpbmc6IDA7ICovXG5cdFx0fVxuXG5cblx0XHQvKiBAY2hhcnNldCBcIlVURi04XCI7ICovXG5cdFx0LyogLmtzc0JvZHkge1xuXHRcdFx0Y3Vyc29yOiB1cmwoXCIuL2Fzc2V0cy9pbWdzL2N1cnNvci5pY29cIiksIGF1dG87XG5cdFx0XHR1c2VyLXNlbGVjdDogbm9uZTtcblx0XHR9ICovXG5cblx0XHQua3NzQm9keSAja3NzIHtcblx0XHRcdHBvc2l0aW9uOiBmaXhlZDtcblx0XHRcdHRvcDogMDtcblx0XHRcdGxlZnQ6IDA7XG5cdFx0XHR6LWluZGV4OiAxMDAwMDtcblx0XHR9XG5cblx0XHQua3NzQm9keSAja3NzU2NyZWVuU2hvdFdyYXBwZXIge1xuXHRcdFx0cG9zaXRpb246IGZpeGVkO1xuXHRcdFx0YmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG5cdFx0XHRib3gtc2hhZG93OiAwIDAgMCA5OTk5cHggcmdiYSgwLCAwLCAwLCAwLjMpO1xuXHRcdFx0ei1pbmRleDogMTAwMDE7XG5cdFx0fVxuXG5cdFx0Lmtzc0JvZHkgI2tzc1NjcmVlblNob3RXcmFwcGVyICNrc3NUZXh0TGF5ZXIge1xuXHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdFx0dG9wOiAwO1xuXHRcdFx0bGVmdDogMDtcblx0XHRcdHdpZHRoOiAxMDAlO1xuXHRcdFx0aGVpZ2h0OiAxMDAlO1xuXHRcdFx0ei1pbmRleDogOTg7XG5cdFx0XHRjdXJzb3I6IGNyb3NzaGFpcjtcblx0XHR9XG5cblx0XHQua3NzQm9keSAja3NzU2NyZWVuU2hvdFdyYXBwZXIgI2tzc1RleHRMYXllciAua3NzVGV4dGFyZWEge1xuXHRcdFx0YmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG5cdFx0XHRyZXNpemU6IG5vbmU7XG5cdFx0XHRtaW4td2lkdGg6IDYwcHg7XG5cdFx0XHRtaW4taGVpZ2h0OiAzNnB4O1xuXHRcdFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcblx0XHRcdGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG5cdFx0XHRvdmVyZmxvdzogaGlkZGVuO1xuXHRcdFx0Zm9udC1mYW1pbHk6IOWui+S9kztcblx0XHR9XG5cblx0XHQua3NzQm9keSAja3NzU2NyZWVuU2hvdFdyYXBwZXIgI2tzc1RleHRMYXllciAua3NzVGV4dGFyZWE6aG92ZXIge1xuXHRcdFx0Y3Vyc29yOiB0ZXh0O1xuXHRcdFx0b3V0bGluZTogIzQ4OGZmOSBzb2xpZCAxcHg7XG5cdFx0fVxuXG5cdFx0Lmtzc0JvZHkgI2tzc1NjcmVlblNob3RXcmFwcGVyICNrc3NSZWN0YW5nbGVDYW52YXMge1xuXHRcdFx0aGVpZ2h0OiAxMDAlO1xuXHRcdFx0d2lkdGg6IDEwMCU7XG5cdFx0XHR0b3A6IDA7XG5cdFx0XHRsZWZ0OiAwO1xuXHRcdFx0Y3Vyc29yOiBtb3ZlO1xuXHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdFx0ei1pbmRleDogOTk7XG5cdFx0fVxuXG5cdFx0Lmtzc0JvZHkgI2tzc1NjcmVlblNob3RXcmFwcGVyIC5rc3NEb3QsXG5cdFx0Lmtzc0JvZHkgI2tzc1NjcmVlblNob3RXcmFwcGVyIC5rc3NMaW5lIHtcblx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHRcdGJhY2tncm91bmQ6ICM0ODhmZjk7XG5cdFx0XHR6LWluZGV4OiAxMDA7XG5cdFx0fVxuXG5cdFx0Lmtzc0JvZHkgI2tzc1NjcmVlblNob3RXcmFwcGVyICNrc3NDdXJyZW50SW1nRG9tIHtcblx0XHRcdHdpZHRoOiAxMDAlO1xuXHRcdFx0aGVpZ2h0OiAxMDAlO1xuXHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdFx0dG9wOiAwO1xuXHRcdFx0bGVmdDogMDtcblx0XHRcdGRpc3BsYXk6IG5vbmU7XG5cdFx0fVxuXG5cdFx0Lmtzc0JvZHkgI2tzc1NjcmVlblNob3RXcmFwcGVyICNrc3NUb29sYmFyIHtcblx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHRcdHJpZ2h0OiAwO1xuXHRcdFx0YmFja2dyb3VuZDogI2YxZjFmMTtcblx0XHRcdGZvbnQtc2l6ZTogMTRweDtcblx0XHRcdGJvcmRlcjogMXB4IHNvbGlkICNkZWRlZGU7XG5cdFx0XHRib3JkZXItcmFkaXVzOiA0cHg7XG5cdFx0XHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xuXHRcdFx0ei1pbmRleDogMTAwO1xuXHRcdH1cblxuXHRcdC5rc3NCb2R5ICNrc3NTY3JlZW5TaG90V3JhcHBlciAja3NzVG9vbGJhciAua3NzVG9vbGJhckl0ZW1CVCB7XG5cdFx0XHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG5cdFx0XHR3aWR0aDogMzBweDtcblx0XHRcdGhlaWdodDogMjhweDtcblx0XHRcdHRleHQtYWxpZ246IGNlbnRlcjtcblx0XHRcdGZsb2F0OiByaWdodDtcblx0XHRcdGN1cnNvcjogcG9pbnRlcjtcblx0XHR9XG5cblx0XHQua3NzQm9keSAja3NzU2NyZWVuU2hvdFdyYXBwZXIgI2tzc1Rvb2xiYXIgLmtzc1Rvb2xiYXJJdGVtQlQ6aG92ZXIge1xuXHRcdFx0YmFja2dyb3VuZDogI2RlZGVkZTtcblx0XHR9XG5cblx0XHQua3NzQm9keSAja3NzU2NyZWVuU2hvdFdyYXBwZXIgI2tzc1Rvb2xiYXIgLmtzc1Rvb2xiYXJJdGVtQlQgLmtzc1Rvb2xiYXJJdGVtSW1nIHtcblx0XHRcdHdpZHRoOiAyMHB4O1xuXHRcdFx0aGVpZ2h0OiAyMHB4O1xuXHRcdFx0bWFyZ2luLXRvcDogNXB4O1xuXHRcdH1cblxuXHRcdC5rc3NCb2R5ICNrc3NTY3JlZW5TaG90V3JhcHBlciAja3NzVG9vbGJhciAua3NzVG9vbGJhckFjdGl2ZUl0ZW1CVCB7XG5cdFx0XHRiYWNrZ3JvdW5kOiAjZGVkZWRlO1xuXHRcdH1cblxuXHRcdC5rc3NCb2R5ICNrc3NTY3JlZW5TaG90V3JhcHBlciAja3NzVG9vbGJhciAja3NzVG9vbGJhck1pZGRsZUFyZWEgI2tzc0NvbG9yQm9hcmQge1xuXHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdFx0d2lkdGg6IDE4MHB4O1xuXHRcdFx0aGVpZ2h0OiA0MHB4O1xuXHRcdFx0cmlnaHQ6IDA7XG5cdFx0XHRiYWNrZ3JvdW5kOiAjZmZmO1xuXHRcdFx0Ym9yZGVyOiAxcHggc29saWQgI2JiYjtcblx0XHRcdGJvcmRlci1yYWRpdXM6IDRweDtcblx0XHRcdGRpc3BsYXk6IG5vbmU7XG5cdFx0XHRvdXRsaW5lOiBub25lO1xuXHRcdFx0Y3Vyc29yOiBkZWZhdWx0O1xuXHRcdFx0ei1pbmRleDogMTAwO1xuXHRcdH1cblxuXHRcdC5rc3NCb2R5ICNrc3NTY3JlZW5TaG90V3JhcHBlciAja3NzVG9vbGJhciAja3NzVG9vbGJhck1pZGRsZUFyZWEgI2tzc0NvbG9yQm9hcmQgI2tzc0N1cnJlbnRDb2xvciB7XG5cdFx0XHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG5cdFx0XHR3aWR0aDogMzBweDtcblx0XHRcdGhlaWdodDogMzBweDtcblx0XHRcdG1hcmdpbjogNXB4IDhweCAwIDhweDtcblx0XHRcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG5cdFx0XHRib3JkZXI6IDFweCBzb2xpZCAjMzMzO1xuXHRcdH1cblxuXHRcdC5rc3NCb2R5ICNrc3NTY3JlZW5TaG90V3JhcHBlciAja3NzVG9vbGJhciAja3NzVG9vbGJhck1pZGRsZUFyZWEgI2tzc0NvbG9yQm9hcmQgI2tzc0NvbG9ySXRlbVdyYXBwZXIge1xuXHRcdFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xuXHRcdFx0dmVydGljYWwtYWxpZ246IHRvcDtcblx0XHRcdHdpZHRoOiAxMzBweDtcblx0XHRcdG1hcmdpbi10b3A6IDVweDtcblx0XHRcdGZvbnQtc2l6ZTogMDtcblx0XHR9XG5cblx0XHQua3NzQm9keSAja3NzU2NyZWVuU2hvdFdyYXBwZXIgI2tzc1Rvb2xiYXIgI2tzc1Rvb2xiYXJNaWRkbGVBcmVhICNrc3NDb2xvckJvYXJkICNrc3NDb2xvckl0ZW1XcmFwcGVyIC5rc3NDb2xvckl0ZW0ge1xuXHRcdFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xuXHRcdFx0d2lkdGg6IDE0cHg7XG5cdFx0XHRoZWlnaHQ6IDE0cHg7XG5cdFx0XHRtYXJnaW4tcmlnaHQ6IDJweDtcblx0XHRcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG5cdFx0XHRib3JkZXI6IDFweCBzb2xpZCAjMzMzO1xuXHRcdFx0Y3Vyc29yOiBwb2ludGVyO1xuXHRcdH1cblxuXHRcdC5rc3NCb2R5ICNrc3NTY3JlZW5TaG90V3JhcHBlciAja3NzVG9vbGJhciAja3NzVG9vbGJhck1pZGRsZUFyZWEgI2tzc1NldExpbmVXaWR0aCB7XG5cdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0XHR3aWR0aDogMTU1cHg7XG5cdFx0XHRoZWlnaHQ6IDQwcHg7XG5cdFx0XHRyaWdodDogMDtcblx0XHRcdGJhY2tncm91bmQ6ICNmZmY7XG5cdFx0XHRib3JkZXI6IDFweCBzb2xpZCAjYmJiO1xuXHRcdFx0Ym9yZGVyLXJhZGl1czogNHB4O1xuXHRcdFx0ZGlzcGxheTogbm9uZTtcblx0XHRcdG91dGxpbmU6IG5vbmU7XG5cdFx0XHRjdXJzb3I6IGRlZmF1bHQ7XG5cdFx0XHR6LWluZGV4OiAxMDA7XG5cdFx0fVxuXG5cdFx0Lmtzc0JvZHkgI2tzc1NjcmVlblNob3RXcmFwcGVyICNrc3NUb29sYmFyICNrc3NUb29sYmFyTWlkZGxlQXJlYSAja3NzU2V0TGluZVdpZHRoICNrc3NOdW1JbnB1dFdyYXBwZXIge1xuXHRcdFx0bWFyZ2luOiA3cHggMCAwIDhweDtcblx0XHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0XHRcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcblx0XHR9XG5cblx0XHQua3NzQm9keSAja3NzU2NyZWVuU2hvdFdyYXBwZXIgI2tzc1Rvb2xiYXIgI2tzc1Rvb2xiYXJNaWRkbGVBcmVhICNrc3NTZXRMaW5lV2lkdGggI2tzc051bUlucHV0V3JhcHBlciAja3NzTnVtSW5wdXQge1xuXHRcdFx0d2lkdGg6IDQwcHg7XG5cdFx0XHRoZWlnaHQ6IDI0cHg7XG5cdFx0XHRib3JkZXI6IDFweCBzb2xpZCAjYmJiO1xuXHRcdFx0Ym9yZGVyLXJhZGl1czogNHB4O1xuXHRcdFx0cGFkZGluZzogMCAxNXB4IDAgOHB4O1xuXHRcdH1cblxuXHRcdC5rc3NCb2R5ICNrc3NTY3JlZW5TaG90V3JhcHBlciAja3NzVG9vbGJhciAja3NzVG9vbGJhck1pZGRsZUFyZWEgI2tzc1NldExpbmVXaWR0aCAja3NzTnVtSW5wdXRXcmFwcGVyICNrc3NBcnJvd051bVdyYXBwZXIge1xuXHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdFx0cmlnaHQ6IDA7XG5cdFx0XHR0b3A6IDFweDtcblx0XHRcdGJvcmRlci1yYWRpdXM6IDAgNHB4IDRweCAwO1xuXHRcdFx0Zm9udC1zaXplOiAwO1xuXHRcdFx0bGluZS1oZWlnaHQ6IDEycHg7XG5cdFx0fVxuXG5cdFx0Lmtzc0JvZHkgI2tzc1NjcmVlblNob3RXcmFwcGVyICNrc3NUb29sYmFyICNrc3NUb29sYmFyTWlkZGxlQXJlYSAja3NzU2V0TGluZVdpZHRoICNrc3NOdW1JbnB1dFdyYXBwZXIgI2tzc0Fycm93TnVtV3JhcHBlciAja3NzVXBOdW0sXG5cdFx0Lmtzc0JvZHkgI2tzc1NjcmVlblNob3RXcmFwcGVyICNrc3NUb29sYmFyICNrc3NUb29sYmFyTWlkZGxlQXJlYSAja3NzU2V0TGluZVdpZHRoICNrc3NOdW1JbnB1dFdyYXBwZXIgI2tzc0Fycm93TnVtV3JhcHBlciAja3NzRG93bk51bSB7XG5cdFx0XHRoZWlnaHQ6IDEycHg7XG5cdFx0XHRmb250LXNpemU6IDEycHg7XG5cdFx0XHRjdXJzb3I6IHBvaW50ZXI7XG5cdFx0fVxuXG5cdFx0Lmtzc0JvZHkgI2tzc1NjcmVlblNob3RXcmFwcGVyICNrc3NUb29sYmFyICNrc3NUb29sYmFyTWlkZGxlQXJlYSAja3NzU2V0TGluZVdpZHRoICNrc3NOdW1JbnB1dFdyYXBwZXIgI2tzc0Fycm93TnVtV3JhcHBlciAja3NzVXBOdW06aG92ZXIsXG5cdFx0Lmtzc0JvZHkgI2tzc1NjcmVlblNob3RXcmFwcGVyICNrc3NUb29sYmFyICNrc3NUb29sYmFyTWlkZGxlQXJlYSAja3NzU2V0TGluZVdpZHRoICNrc3NOdW1JbnB1dFdyYXBwZXIgI2tzc0Fycm93TnVtV3JhcHBlciAja3NzRG93bk51bTpob3ZlciB7XG5cdFx0XHRiYWNrZ3JvdW5kOiAjZGVkZWRlO1xuXHRcdH1cblxuXHRcdC5rc3NCb2R5ICNrc3NTY3JlZW5TaG90V3JhcHBlciAja3NzVG9vbGJhciAja3NzVG9vbGJhck1pZGRsZUFyZWEgI2tzc1NldExpbmVXaWR0aCAja3NzU2hvd0xpbmVXaWR0aFdyYXBwZXIge1xuXHRcdFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xuXHRcdFx0aGVpZ2h0OiA0MHB4O1xuXHRcdFx0bGluZS1oZWlnaHQ6IDQwcHg7XG5cdFx0XHR2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuXHRcdFx0d2lkdGg6IDgwcHg7XG5cdFx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdFx0fVxuXG5cdFx0Lmtzc0JvZHkgI2tzc1NjcmVlblNob3RXcmFwcGVyICNrc3NUb29sYmFyICNrc3NUb29sYmFyTWlkZGxlQXJlYSAja3NzU2V0TGluZVdpZHRoICNrc3NTaG93TGluZVdpZHRoV3JhcHBlciAja3NzU2hvd0xpbmVXaWR0aCB7XG5cdFx0XHRoZWlnaHQ6IDIwcHg7XG5cdFx0XHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG5cdFx0XHR2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuXHRcdH1gXG4gICAgICAgICk7XG5cbiAgICAgICAgaWYgKGltbWVkaWF0ZWx5ID09PSB0cnVlKSB7XG4gICAgICAgICAgICB0aGF0LnN0YXJ0KClcbiAgICAgICAgICAgIHRoYXQuZW5kKClcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChrZXkgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAga2V5ID0gNjVcbiAgICAgICAgfSBlbHNlIGlmIChrZXkgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG5cbiAgICAgICAgdGhhdC5fY29udGFpbmVyRG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGlzUmlnaHRLZXkuYmluZChudWxsLCBrZXkpKVxuXG4gICAgICAgIGZ1bmN0aW9uIGlzUmlnaHRLZXkoa2V5LCBlKSB7XG4gICAgICAgICAgICBpZiAoZS5rZXlDb2RlID09PSBrZXkgJiYgZS5zaGlmdEtleSAmJiAhdGhhdC5pc1NjcmVlbnNob3QpIHtcbiAgICAgICAgICAgICAgICB0aGF0LnN0YXJ0KClcbiAgICAgICAgICAgICAgICB0aGF0LmVuZCgpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBrc3MucHJvdG90eXBlLnN0YXJ0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zdCB0aGF0ID0gdGhpc1xuICAgICAgICBpZiAodGhhdC5pc1NjcmVlbnNob3QpIHtcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICAgIHRoYXQuaXNTY3JlZW5zaG90ID0gdHJ1ZVxuXG4gICAgICAgIC8vIGh0bWwyY2FudmFzKHdpbmRvdy53b25kZXJfY29udGFpbmVyRG9jdW1lbnQuYm9keSwge3VzZUNPUlM6dHJ1ZSwgc2Nyb2xsWToyMDB9KVxuICAgICAgICBkb210b2ltYWdlLnRvQ2FudmFzKHRoYXQuX25vZGUpXG4gICAgICAgICAgICAudGhlbigoY2FudmFzKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2NhbnZhc0hhbmRsZXJGdW5jID09PSB1bmRlZmluZWQgPyBjYW52YXMgOiB0aGlzLl9jYW52YXNIYW5kbGVyRnVuYyhjYW52YXMpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKChjYW52YXMpID0+IHtcbiAgICAgICAgICAgICAgICB0aGF0LmtzcyA9IGNhbnZhc1xuICAgICAgICAgICAgICAgIHRoYXQuc2Nyb2xsVG9wID0gdGhhdC5fZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcFxuICAgICAgICAgICAgICAgIGNhbnZhcy5pZCA9ICdrc3MnXG5cbiAgICAgICAgICAgICAgICB0aGF0Ll9jb250YWluZXIuYXBwZW5kQ2hpbGQoY2FudmFzKVxuXG4gICAgICAgICAgICAgICAgYWRkQ2xhc3ModGhhdC5fY29udGFpbmVyLCAna3NzQm9keScpXG5cbiAgICAgICAgICAgICAgICBsZXQgdG9wID0gLXRoYXQuc2Nyb2xsVG9wO1xuICAgICAgICAgICAgICAgIGxldCBsZWZ0ID0gMDtcbiAgICAgICAgICAgICAgICBjc3MoY2FudmFzLCB7XG4gICAgICAgICAgICAgICAgICAgIHRvcDogYCR7dG9wfXB4YCxcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogYCR7bGVmdH1weGAsXG4gICAgICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgICAgIGNhbnZhcy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCB0aGF0LnN0YXJ0RHJhd0Rvd24pXG4gICAgICAgICAgICB9KVxuICAgIH1cblxuICAgIGtzcy5wcm90b3R5cGUuZW5kID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zdCB0aGF0ID0gdGhpc1xuXG4gICAgICAgIHRoYXQuZW5kU2NyZWVuU2hvdCA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICBpZiAoZS5rZXlDb2RlID09PSAyNykge1xuICAgICAgICAgICAgICAgIGVuZEFuZENsZWFyKHRoYXQpXG4gICAgICAgICAgICAgICAgdGhhdC5jYW5jZWxDQigpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0aGF0Ll9jb250YWluZXJEb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhhdC5lbmRTY3JlZW5TaG90KVxuICAgIH1cblxuICAgIHJldHVybiBrc3Ncbn0pKClcblxuZXhwb3J0IGRlZmF1bHQga3NzIiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2tzcy5zY3NzXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9rc3Muc2Nzc1wiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2tzcy5zY3NzXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiaW1wb3J0IHsgYWRkQ2xhc3MsIHJlbW92ZUNsYXNzIH0gZnJvbSAnLi4vdXRpbCdcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWN0aXZlVG9vbGJhckl0ZW0gKG9iaikge1xuICAgIGxldCBrc3NUb29sYmFySXRlbUJUID0gd2luZG93LndvbmRlcl9jb250YWluZXJEb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdrc3NUb29sYmFySXRlbUJUJylcblxuICAgIEFycmF5LnByb3RvdHlwZS5mb3JFYWNoLmNhbGwoa3NzVG9vbGJhckl0ZW1CVCwgKGl0KSA9PiB7XG4gICAgICAgIHJlbW92ZUNsYXNzKGl0LCAna3NzVG9vbGJhckFjdGl2ZUl0ZW1CVCcpXG4gICAgfSlcblxuICAgIGlmIChvYmopIHtcbiAgICAgICAgYWRkQ2xhc3Mob2JqLCAna3NzVG9vbGJhckFjdGl2ZUl0ZW1CVCcpXG4gICAgICAgIHdpbmRvdy53b25kZXJfY29udGFpbmVyRG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2tzc1JlY3RhbmdsZUNhbnZhcycpLnN0eWxlLmN1cnNvciA9ICdjcm9zc2hhaXInXG4gICAgfSBlbHNlIHtcbiAgICAgICAgd2luZG93LndvbmRlcl9jb250YWluZXJEb2N1bWVudC5nZXRFbGVtZW50QnlJZCgna3NzUmVjdGFuZ2xlQ2FudmFzJykuc3R5bGUuY3Vyc29yID0gJ21vdmUnXG4gICAgfVxufSIsImltcG9ydCB7IGNvbXB1dGVkIH0gZnJvbSAnLi4vdXRpbCdcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYXJyb3cgKHN0YXJ0UG9zLCBlbmRQb3MsIHRyaWFuZ2xlLCBtZSkge1xuICAgIGxldCBzdGFydFggPSBzdGFydFBvcy54ICogbWUuc2NhbGVcbiAgICBsZXQgc3RhcnRZID0gc3RhcnRQb3MueSAqIG1lLnNjYWxlXG4gICAgbGV0IGVuZFggPSBlbmRQb3MueCAqIG1lLnNjYWxlXG4gICAgbGV0IGVuZFkgPSBlbmRQb3MueSAqIG1lLnNjYWxlXG4gICAgbGV0IE1heFR3b1NpemUgPSAyMFxuXG4gICAgY29tcHV0ZWQodHJpYW5nbGUsICdkaXN0YW5jZScsIFsndHdvU2lkZScsICdib3R0b21TaWRlJywgJ2Nyb3NzV2lkdGgnXSwgW2Z1bmN0aW9uIChvYmosIGJhc2VWYWx1ZSwgY2hhbmdlUHJvcGVydHkpIHtcbiAgICAgICAgaWYgKChiYXNlVmFsdWUgLyAyICogMS4xKSA8PSBNYXhUd29TaXplKSB7XG4gICAgICAgICAgICBvYmpbY2hhbmdlUHJvcGVydHldID0gYmFzZVZhbHVlIC8gMiAqIDEuMVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgb2JqW2NoYW5nZVByb3BlcnR5XSA9IE1heFR3b1NpemVcbiAgICAgICAgfVxuICAgIH0sIGZ1bmN0aW9uIChvYmosIGJhc2VWYWx1ZSwgY2hhbmdlUHJvcGVydHkpIHtcbiAgICAgICAgaWYgKChiYXNlVmFsdWUgLyAyICogMS4xKSA8PSBNYXhUd29TaXplKSB7XG4gICAgICAgICAgICBvYmpbY2hhbmdlUHJvcGVydHldID0gYmFzZVZhbHVlIC8gMiAqIDEuMSAqIDAuOFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgb2JqW2NoYW5nZVByb3BlcnR5XSA9IE1heFR3b1NpemUgKiAwLjhcbiAgICAgICAgfVxuICAgICAgIFxuICAgIH0sIGZ1bmN0aW9uIChvYmosIGJhc2VWYWx1ZSwgY2hhbmdlUHJvcGVydHkpIHtcbiAgICAgICAgaWYgKChiYXNlVmFsdWUgLyAyICogMS4xKSA8PSBNYXhUd29TaXplKSB7XG4gICAgICAgICAgICBvYmpbY2hhbmdlUHJvcGVydHldID0gYmFzZVZhbHVlIC8gMiAqIDEuMSAqIDAuNFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgb2JqW2NoYW5nZVByb3BlcnR5XSA9IE1heFR3b1NpemUgKiAwLjRcbiAgICAgICAgfVxuICAgIH1dKVxuICAgIGxldCBkaXN0YW5jZSA9IE1hdGguc3FydChNYXRoLnBvdyhzdGFydFggLSBlbmRYLCAyKSArIE1hdGgucG93KHN0YXJ0WSAtIGVuZFksIDIpKVxuIFxuICAgIHRyaWFuZ2xlLmRpc3RhbmNlID0gZGlzdGFuY2VcbiAgICBcbiAgICBsZXQgaCA9IE1hdGguc3FydChNYXRoLnBvdyh0cmlhbmdsZS50d29TaWRlLCAyKSAgLSBNYXRoLnBvdyh0cmlhbmdsZS5ib3R0b21TaWRlIC8gMiwgMikpXG4gICAgbGV0IHggPSBNYXRoLnNxcnQoTWF0aC5wb3coaCwgMikgKyBNYXRoLnBvdyh0cmlhbmdsZS5jcm9zc1dpZHRoIC8gMiwgMikpXG4gICAgbGV0IGFuZ2xlID0gTWF0aC5hdGFuKHRyaWFuZ2xlLmJvdHRvbVNpZGUgLyAyIC8gaCkgKiAxODAgLyBNYXRoLlBJXG4gICAgbGV0IGFuZ2xlMSA9IE1hdGguYXRhbih0cmlhbmdsZS5jcm9zc1dpZHRoIC8gMiAvIGgpICogMTgwIC8gTWF0aC5QSVxuICAgIGxldCByaWdodFgsIHJpZ2h0WSwgaFgsIGhZLCBjWCwgY1ksIGJYLCBiWVxuICAgIC8v5b2T5bem5LiK5ZKM5Y+z5LiL5pe25Li65LiA56eN5oOF5Ya177yM5bem5LiL5ZKM5Y+z5LiK5Li65LiA56eN5oOF5Ya1XG4gICAgaWYgKChzdGFydFggPiBlbmRYICYmIHN0YXJ0WSA+IGVuZFkpIHx8IChzdGFydFggPCBlbmRYICYmIHN0YXJ0WSA8IGVuZFkpKSB7XG4gICAgICAgIGxldCBhbmdsZTIgPSBNYXRoLmF0YW4oTWF0aC5hYnMoc3RhcnRYIC0gZW5kWCkgLyBNYXRoLmFicyhzdGFydFkgLSBlbmRZKSkgKiAxODAgLyBNYXRoLlBJXG5cbiAgICAgICAgbGV0IHkxID0gTWF0aC5jb3MoKGFuZ2xlMSArIGFuZ2xlMikgKiAyICogTWF0aC5QSSAvIDM2MCkgKiB4XG4gICAgICAgIGxldCB4MSA9IE1hdGguc2luKChhbmdsZTEgKyBhbmdsZTIpICogMiAqIE1hdGguUEkgLyAzNjApICogeFxuXG4gICAgICAgIGxldCBzeW1ib2wgPSAxXG5cbiAgICAgICAgaWYgKChzdGFydFggPCBlbmRYICYmIHN0YXJ0WSA8IGVuZFkpKSB7XG4gICAgICAgICAgICBzeW1ib2wgPSAtMVxuICAgICAgICB9XG5cbiAgICAgICAgcmlnaHRYID0gZW5kWCArIHgxICogc3ltYm9sXG4gICAgICAgIHJpZ2h0WSA9IGVuZFkgKyB5MSAqIHN5bWJvbFxuXG4gICAgICAgIGxldCB5MiA9IE1hdGguY29zKChhbmdsZSArIGFuZ2xlMikgKiAyICogTWF0aC5QSSAvIDM2MCkgKiB0cmlhbmdsZS50d29TaWRlXG4gICAgICAgIGxldCB4MiA9IE1hdGguc2luKChhbmdsZSArIGFuZ2xlMikgKiAyICogTWF0aC5QSSAvIDM2MCkgKiB0cmlhbmdsZS50d29TaWRlXG5cbiAgICAgICAgaFggPSBlbmRYICsgeDIgKiBzeW1ib2xcbiAgICAgICAgaFkgPSBlbmRZICsgeTIgKiBzeW1ib2xcblxuICAgICAgICBsZXQgeTMgPSBNYXRoLmNvcygoYW5nbGUyKSAqIDIgKiBNYXRoLlBJIC8gMzYwKSAqIGhcbiAgICAgICAgbGV0IHgzID0gTWF0aC5zaW4oKGFuZ2xlMikgKiAyICogTWF0aC5QSSAvIDM2MCkgKiBoXG5cbiAgICAgICAgbGV0IHpYID0gZW5kWCArIHgzICogc3ltYm9sXG4gICAgICAgIGxldCB6WSA9IGVuZFkgKyB5MyAqIHN5bWJvbFxuXG4gICAgICAgIGJYID0gMiAqIHpYIC0gcmlnaHRYXG4gICAgICAgIGJZID0gMiAqIHpZIC0gcmlnaHRZXG5cbiAgICAgICAgY1ggPSAyICogelggLSBoWFxuICAgICAgICBjWSA9IDIgKiB6WSAtIGhZXG4gICAgfSBlbHNlIGlmICgoc3RhcnRYIDwgZW5kWCAmJiBzdGFydFkgPiBlbmRZKSB8fCAoc3RhcnRYID4gZW5kWCAmJiBzdGFydFkgPCBlbmRZKSkge1xuICAgICAgICBsZXQgYW5nbGUyID0gTWF0aC5hdGFuKE1hdGguYWJzKHN0YXJ0WSAtIGVuZFkpIC8gTWF0aC5hYnMoc3RhcnRYIC0gZW5kWCkpICogMTgwIC8gTWF0aC5QSVxuICAgICAgICBcbiAgICAgICAgbGV0IHgxID0gTWF0aC5jb3MoKGFuZ2xlMSArIGFuZ2xlMikgKiAyICogTWF0aC5QSSAvIDM2MCkgKiB4XG4gICAgICAgIGxldCB5MSA9IE1hdGguc2luKChhbmdsZTEgKyBhbmdsZTIpICogMiAqIE1hdGguUEkgLyAzNjApICogeFxuIFxuICAgICAgICBsZXQgc3ltYm9sID0gMVxuXG4gICAgICAgIGlmICgoc3RhcnRYIDwgZW5kWCAmJiBzdGFydFkgPiBlbmRZKSkge1xuICAgICAgICAgICAgc3ltYm9sID0gLTFcbiAgICAgICAgfVxuXG4gICAgICAgIHJpZ2h0WCA9IGVuZFggKyB4MSAqIHN5bWJvbFxuICAgICAgICByaWdodFkgPSBlbmRZIC0geTEgKiBzeW1ib2xcbiAgICAgICAgXG4gICAgICAgIGxldCB4MiA9IE1hdGguY29zKChhbmdsZSArIGFuZ2xlMikgKiAyICogTWF0aC5QSSAvIDM2MCkgKiB0cmlhbmdsZS50d29TaWRlXG4gICAgICAgIGxldCB5MiA9IE1hdGguc2luKChhbmdsZSArIGFuZ2xlMikgKiAyICogTWF0aC5QSSAvIDM2MCkgKiB0cmlhbmdsZS50d29TaWRlXG4gICBcbiAgICAgICAgaFggPSBlbmRYICsgeDIgKiBzeW1ib2xcbiAgICAgICAgaFkgPSBlbmRZIC0geTIgKiBzeW1ib2xcblxuICAgICAgICBsZXQgeDMgPSBNYXRoLmNvcygoYW5nbGUyKSAqIDIgKiBNYXRoLlBJIC8gMzYwKSAqIGhcbiAgICAgICAgbGV0IHkzID0gTWF0aC5zaW4oKGFuZ2xlMikgKiAyICogTWF0aC5QSSAvIDM2MCkgKiBoXG5cbiAgICAgICAgbGV0IHpYID0gZW5kWCArIHgzICogc3ltYm9sXG4gICAgICAgIGxldCB6WSA9IGVuZFkgLSB5MyAqIHN5bWJvbFxuXG4gICAgICAgIGJYID0gMiAqIHpYIC0gcmlnaHRYXG4gICAgICAgIGJZID0gMiAqIHpZIC0gcmlnaHRZXG5cbiAgICAgICAgY1ggPSAyICogelggLSBoWFxuICAgICAgICBjWSA9IDIgKiB6WSAtIGhZXG4gICAgfSBlbHNlIGlmIChzdGFydFggPT09IGVuZFgpIHtcbiAgICAgICAgbGV0IHN5bWJvbCA9IDFcblxuICAgICAgICBpZiAoc3RhcnRZIDwgZW5kWSkge1xuICAgICAgICAgICAgc3ltYm9sID0gLTFcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCB6WCA9IGVuZFhcbiAgICAgICAgbGV0IHpZID0gZW5kWSArIGggKiBzeW1ib2xcblxuICAgICAgICByaWdodFggPSB6WCArIHRyaWFuZ2xlLmNyb3NzV2lkdGggLyAyICogc3ltYm9sXG4gICAgICAgIHJpZ2h0WSA9IHpZXG5cbiAgICAgICAgaFggPSB6WCArIHRyaWFuZ2xlLmJvdHRvbVNpZGUgLyAyICogc3ltYm9sXG4gICAgICAgIGhZID0gellcblxuICAgICAgICBiWCA9IHpYIC0gdHJpYW5nbGUuY3Jvc3NXaWR0aCAvIDIgKiBzeW1ib2xcbiAgICAgICAgYlkgPSB6WVxuXG4gICAgICAgIGNYID0gelggLSB0cmlhbmdsZS5ib3R0b21TaWRlIC8gMiAqIHN5bWJvbFxuICAgICAgICBjWSA9IHpZXG4gICAgfSBlbHNlIGlmIChzdGFydFkgPT09IGVuZFkpIHtcbiAgICAgICAgbGV0IHN5bWJvbCA9IDFcblxuICAgICAgICBpZiAoc3RhcnRYIDwgZW5kWCkge1xuICAgICAgICAgICAgc3ltYm9sID0gLTFcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCB6WCA9IGVuZFggKyBoICogc3ltYm9sXG4gICAgICAgIGxldCB6WSA9IGVuZFlcblxuICAgICAgICByaWdodFggPSB6WFxuICAgICAgICByaWdodFkgPSB6WSArIHRyaWFuZ2xlLmNyb3NzV2lkdGggLyAyICogc3ltYm9sXG5cbiAgICAgICAgaFggPSB6WFxuICAgICAgICBoWSA9IHpZICsgdHJpYW5nbGUuYm90dG9tU2lkZSAvIDIgKiBzeW1ib2xcblxuICAgICAgICBiWCA9IHpYXG4gICAgICAgIGJZID0gelkgLSB0cmlhbmdsZS5jcm9zc1dpZHRoIC8gMiAqIHN5bWJvbFxuXG4gICAgICAgIGNYID0gelhcbiAgICAgICAgY1kgPSB6WSAtIHRyaWFuZ2xlLmJvdHRvbVNpZGUgLyAyICogc3ltYm9sXG4gICAgfVxuIFxuICAgIGxldCBjb250ZXh0ID0gbWUucmVjdGFuZ2xlQ2FudmFzLmdldENvbnRleHQoXCIyZFwiKVxuICAgIGNvbnRleHQuYmVnaW5QYXRoKClcbiAgICBjb250ZXh0LmxpbmVXaWR0aCA9IDFcbiAgICBjb250ZXh0Lm1vdmVUbyhzdGFydFgsIHN0YXJ0WSlcbiAgICBjb250ZXh0LmxpbmVUbyhyaWdodFgsIHJpZ2h0WSlcbiAgICBjb250ZXh0LmxpbmVUbyhoWCwgaFkpXG4gICAgY29udGV4dC5saW5lVG8oZW5kWCwgZW5kWSlcbiAgICBjb250ZXh0LmxpbmVUbyhjWCwgY1kpXG4gICAgY29udGV4dC5saW5lVG8oYlgsIGJZKVxuICAgIGNvbnRleHQubGluZVRvKHN0YXJ0WCwgc3RhcnRZKVxuICAgIGNvbnRleHQuZmlsbFN0eWxlID0gbWUudG9vbGJhckNvbG9yXG4gICAgY29udGV4dC5maWxsKClcbiAgICBjb250ZXh0LmNsb3NlUGF0aCgpXG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYmFja1RvUHJlSW1nKG1lKSB7XG4gIGxldCBjdHggPSBtZS5yZWN0YW5nbGVDYW52YXMuZ2V0Q29udGV4dCgnMmQnKVxuXG4gIGN0eC5kcmF3SW1hZ2UoXG4gICAgbWUuY3VycmVudEltZ0RvbSxcbiAgICAwLFxuICAgIDAsXG4gICAgbWUud2lkdGggKiBtZS5zY2FsZSxcbiAgICBtZS5oZWlnaHQgKiBtZS5zY2FsZSxcbiAgICAwLFxuICAgIDAsXG4gICAgbWUud2lkdGggKiBtZS5zY2FsZSxcbiAgICBtZS5oZWlnaHQgKiBtZS5zY2FsZVxuICApXG59XG4iLCJpbXBvcnQgeyBjc3MgfSBmcm9tICcuLi91dGlsJ1xuXG5jb25zdCBjb2xvckxpc3QgPSBbJyMwMDAnLCAnIzgwODA4MCcsICcjODAwMDAwJywgJyNmNzg4M2EnLCAnIzMwODQzMCcsICcjMzg1YWQzJywgJyM4MDAwODAnLCAnIzAwOTk5OScsICcjZmZmJywgJyNjMGMwYzAnLCAnI2ZiMzgzOCcsICcjZmZmZjAwJywgJyM5OWNjMDAnLCAnIzM4OTRlNCcsICcjZjMxYWYzJywgJyMxNmRjZGMnXVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjb2xvckJvYXJkIChtZSkge1xuICAgIGxldCBjb2xvckJvYXJkID0gd2luZG93LndvbmRlcl9jb250YWluZXJEb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJylcbiAgICBjb2xvckJvYXJkLmlkID0gJ2tzc0NvbG9yQm9hcmQnXG4gICAgY29sb3JCb2FyZC50aXRsZSA9ICfpopzoibLmnb8nXG4gICAgY29sb3JCb2FyZC50YWJJbmRleCA9ICctMSdcblxuICAgIGxldCBjdXJyZW50Q29sb3IgPSB3aW5kb3cud29uZGVyX2NvbnRhaW5lckRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKVxuICAgIGN1cnJlbnRDb2xvci5pZCA9ICdrc3NDdXJyZW50Q29sb3InXG5cbiAgICBjc3MoY3VycmVudENvbG9yLCB7XG4gICAgICAgIGJhY2tncm91bmQ6IG1lLnRvb2xiYXJDb2xvclxuICAgIH0pXG5cbiAgICBjb2xvckJvYXJkLmFwcGVuZENoaWxkKGN1cnJlbnRDb2xvcilcbiAgICBcbiAgICBsZXQgY29sb3JJdGVtV3JhcHBlciA9IHdpbmRvdy53b25kZXJfY29udGFpbmVyRG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBjb2xvckl0ZW1XcmFwcGVyLmlkID0gJ2tzc0NvbG9ySXRlbVdyYXBwZXInXG5cbiAgICBjb2xvckxpc3QuZm9yRWFjaChmdW5jdGlvbiAoaXQsIGluZGV4KSB7XG4gICAgICAgIGxldCBkb20gPSB3aW5kb3cud29uZGVyX2NvbnRhaW5lckRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKVxuICAgICAgICBkb20uY2xhc3NOYW1lID0gYGtzc0NvbG9ySXRlbSBrc3Mke2l0fWBcbiAgICAgICAgZG9tLmRhdGFzZXQuY29sb3IgPSBpdFxuXG4gICAgICAgIGNzcyhkb20sIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IGl0XG4gICAgICAgIH0pXG5cbiAgICAgICAgaWYgKGluZGV4IDw9IGNvbG9yTGlzdC5sZW5ndGggLyAyIC0gMSkge1xuICAgICAgICAgICAgY3NzKGRvbSwge1xuICAgICAgICAgICAgICAgICdtYXJnaW4tYm90dG9tJzogJzJweCdcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cblxuICAgICAgICBkb20uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgbGV0IGNvbG9yID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuY29sb3JcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgbWUudG9vbGJhckNvbG9yID0gY29sb3JcbiAgICAgICAgICAgIGN1cnJlbnRDb2xvci5zdHlsZS5iYWNrZ3JvdW5kID0gY29sb3JcbiAgICAgICAgfSlcblxuICAgICAgICBjb2xvckl0ZW1XcmFwcGVyLmFwcGVuZENoaWxkKGRvbSlcbiAgICB9KVxuXG4gICAgY29sb3JCb2FyZC5hcHBlbmRDaGlsZChjb2xvckl0ZW1XcmFwcGVyKVxuXG4gICAgY29sb3JCb2FyZC5hZGRFdmVudExpc3RlbmVyKCdmb2N1cycsIChlKSA9PiB7XG4gICAgICAgIGUuY3VycmVudFRhcmdldC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJ1xuICAgIH0pXG5cbiAgICBjb2xvckJvYXJkLmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLCAoZSkgPT4ge1xuICAgICAgICBlLmN1cnJlbnRUYXJnZXQuc3R5bGUuZGlzcGxheSA9ICdub25lJ1xuICAgIH0pXG5cbiAgICByZXR1cm4gY29sb3JCb2FyZFxufSIsImltcG9ydCB7Y3NzLCByZW1vdmUsIHR5cGVDaGVja2luZ30gZnJvbSAnLi4vdXRpbCdcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY29weSAobWUsIHVybCkge1xuICAgIGxldCBpbWdXcmFwcGVyID0gd2luZG93LndvbmRlcl9jb250YWluZXJEb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJylcbiAgICBjc3MoaW1nV3JhcHBlciwge1xuICAgICAgICBvcGFjaXR5OiAnMCdcbiAgICB9KVxuXG4gICAgbGV0IGltZyA9IHdpbmRvdy53b25kZXJfY29udGFpbmVyRG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJylcbiAgIFxuXG4gICAgbGV0IGFic29sdXRlUGF0aFxuICAgIGlmICh0eXBlQ2hlY2tpbmcobWUuY29weVBhdGgpID09PSAnW29iamVjdCBGdW5jdGlvbl0nKSB7XG4gICAgICAgIGFic29sdXRlUGF0aCA9IG1lLmNvcHlQYXRoKHVybClcbiAgICB9IGVsc2Uge1xuICAgICAgICBhYnNvbHV0ZVBhdGggPSBudWxsXG4gICAgfVxuICAgIFxuICAgIGlmIChhYnNvbHV0ZVBhdGggPT09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIFxuICAgIH0gZWxzZSB7XG4gICAgICAgIGltZy5zcmMgPSBhYnNvbHV0ZVBhdGhcbiAgICB9XG5cbiAgICBpbWdXcmFwcGVyLmFwcGVuZENoaWxkKGltZylcbiAgICB3aW5kb3cud29uZGVyX2NvbnRhaW5lckRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoaW1nV3JhcHBlcilcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY3NzKGltZywge1xuICAgICAgICAgICAgd2lkdGg6IGltZy53aWR0aCAvIG1lLnNjYWxlICsgJ3B4JyxcbiAgICAgICAgICAgIGhlaWdodDogaW1nLmhlaWdodCAvIG1lLnNjYWxlICsgJ3B4J1xuICAgICAgICB9KVxuXG4gICAgICAgIGxldCBzZWxlY3Rpb24gPSB3aW5kb3cuZ2V0U2VsZWN0aW9uKClcbiAgICAgICAgbGV0IHJhbmdlID0gd2luZG93LndvbmRlcl9jb250YWluZXJEb2N1bWVudC5jcmVhdGVSYW5nZSgpXG5cbiAgICAgICAgcmFuZ2Uuc2VsZWN0Tm9kZUNvbnRlbnRzKGltZ1dyYXBwZXIpXG4gXG4gICAgICAgIHNlbGVjdGlvbi5yZW1vdmVBbGxSYW5nZXMoKVxuICAgICAgICBzZWxlY3Rpb24uYWRkUmFuZ2UocmFuZ2UpXG4gICAgICAgIHdpbmRvdy53b25kZXJfY29udGFpbmVyRG9jdW1lbnQuZXhlY0NvbW1hbmQoJ0NvcHknKVxuICBcbiAgICAgICAgcmVtb3ZlKGltZ1dyYXBwZXIpXG4gICAgfSwgMClcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkb3dubG9hZCAobWUpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgICAgbGV0IGltZ1VybCA9IG1lLnNuYXBzaG9vdExpc3RbbWUuc25hcHNob290TGlzdC5sZW5ndGggLSAxXVxuICAgICAgICBsZXQgYSA9IHdpbmRvdy53b25kZXJfY29udGFpbmVyRG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpXG4gICAgICAgIGlmICgnZG93bmxvYWQnIGluIGEpIHtcbiAgICAgICAgICAgIGEuaHJlZiA9IGltZ1VybFxuICAgICAgICAgICAgYS5kb3dubG9hZCA9ICdrc3MnICsgKG5ldyBEYXRlKCkpLmdldFRpbWUoKSArICcucG5nJ1xuXG4gICAgICAgICAgICBsZXQgZXZlbnQgPSB3aW5kb3cud29uZGVyX2NvbnRhaW5lckRvY3VtZW50LmNyZWF0ZUV2ZW50KCdNb3VzZUV2ZW50cycpXG4gICAgICAgICAgICBldmVudC5pbml0RXZlbnQoJ2NsaWNrJywgZmFsc2UsIGZhbHNlKVxuICAgICAgICAgICAgYS5kaXNwYXRjaEV2ZW50KGV2ZW50KVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGV0IG5ld0ltZ1VybCA9IGltZ1VybC5yZXBsYWNlKCdpbWFnZS9wbmcnLCAnaW1hZ2Uvb2N0ZXQtc3RyZWFtJylcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gbmV3SW1nVXJsXG4gICAgICAgIH1cbiAgICAgICAgcmVzb2x2ZSgpXG4gICAgfSlcbiAgIFxufSIsImltcG9ydCB7IHJlbW92ZSwgcmVtb3ZlQ2xhc3MgfSBmcm9tICcuLi91dGlsJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBlbmRBbmRDbGVhciAobWUpIHtcbiAgICByZW1vdmVDbGFzcyh3aW5kb3cud29uZGVyX2NvbnRhaW5lckRvY3VtZW50LmJvZHksICdrc3NCb2R5JylcbiAgICBcbiAgICBtZS5rc3MgJiYgcmVtb3ZlKG1lLmtzcylcbiAgICBtZS5rc3NTY3JlZW5TaG90V3JhcHBlciAmJiByZW1vdmUobWUua3NzU2NyZWVuU2hvdFdyYXBwZXIpXG4gICAgbWUuc3R5bGUgJiYgcmVtb3ZlKG1lLnN0eWxlKVxuICAgIG1lLmtzcyA9IG51bGxcbiAgICBtZS5yZWN0YW5nbGVDYW52YXMgPSBudWxsXG4gICAgbWUua3NzVGV4dExheWVyID0gbnVsbFxuICAgIG1lLmtzc1NjcmVlblNob3RXcmFwcGVyID0gbnVsbFxuICAgIG1lLmRyYXdpbmdTdGF0dXMgPSBudWxsXG4gICAgbWUudG9vbGJhciA9IG51bGxcbiAgICBtZS5jdXJyZW50VG9vbFR5cGUgPSBudWxsXG4gICAgbWUuc25hcHNob290TGlzdCA9IFtdXG4gICAgbWUuaXNTY3JlZW5zaG90ID0gZmFsc2VcbiAgICBtZS5pc0VkaXQgPSBmYWxzZVxuICAgIG1lLnRvb2xtb3VzZWRvd24gPSBudWxsXG4gICAgbWUudG9vbG1vdXNlbW92ZSA9IG51bGxcbiAgICBtZS50b29sbW91c2V1cCA9IG51bGxcbiAgICB3aW5kb3cud29uZGVyX2NvbnRhaW5lckRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBtZS5lbmRTY3JlZW5TaG90KVxuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICB3aW5kb3cud29uZGVyX2NvbnRhaW5lckRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NvbnRleHRtZW51JywgbWUucHJldmVudENvbnRleHRNZW51KVxuICAgIH0sIDApXG4gICAgd2luZG93LndvbmRlcl9jb250YWluZXJEb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgbWUuZW5kU2NyZWVuU2hvdClcbiAgICB3aW5kb3cud29uZGVyX2NvbnRhaW5lckRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBtZS5jYW5jZWxEcmF3aW5nU3RhdHVzKVxufSIsImltcG9ydCB7IGNzcyB9IGZyb20gJy4uL3V0aWwnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGxheWVyU29ydCAobWUsIGxheWVyKSB7XG4gICAgaWYgKGxheWVyID09PSAndGV4dExheWVyJykge1xuICAgICAgICBjc3MobWUua3NzVGV4dExheWVyLCB7XG4gICAgICAgICAgICAnei1pbmRleCc6IDk5XG4gICAgICAgIH0pXG5cbiAgICAgICAgY3NzKG1lLnJlY3RhbmdsZUNhbnZhcywge1xuICAgICAgICAgICAgJ3otaW5kZXgnOiA5OFxuICAgICAgICB9KVxuICAgIH0gZWxzZSBpZiAobGF5ZXIgPT09ICdjYW52YXNMYXllcicpIHtcbiAgICAgICAgY3NzKG1lLnJlY3RhbmdsZUNhbnZhcywge1xuICAgICAgICAgICAgJ3otaW5kZXgnOiA5OVxuICAgICAgICB9KVxuXG4gICAgICAgIGNzcyhtZS5rc3NUZXh0TGF5ZXIsIHtcbiAgICAgICAgICAgICd6LWluZGV4JzogOThcbiAgICAgICAgfSlcbiAgICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWFrZVNuYXBTaG9vdChtZSkge1xuICBsZXQgY3R4ID0gbWUucmVjdGFuZ2xlQ2FudmFzLmdldENvbnRleHQoJzJkJylcblxuICBjdHguZHJhd0ltYWdlKFxuICAgIG1lLnJlY3RhbmdsZUNhbnZhcyxcbiAgICAwLFxuICAgIDAsXG4gICAgbWUud2lkdGggKiBtZS5zY2FsZSxcbiAgICBtZS5oZWlnaHQgKiBtZS5zY2FsZSxcbiAgICAwLFxuICAgIDAsXG4gICAgbWUud2lkdGggKiBtZS5zY2FsZSxcbiAgICBtZS5oZWlnaHQgKiBtZS5zY2FsZVxuICApXG5cbiAgbGV0IGRhdGFVUkwgPSBtZS5yZWN0YW5nbGVDYW52YXMudG9EYXRhVVJMKCdpbWFnZS9wbmcnKVxuXG4gIG1lLnNuYXBzaG9vdExpc3QucHVzaChkYXRhVVJMKVxuICBtZS5jdXJyZW50SW1nRG9tLnNyYyA9IGRhdGFVUkxcblxufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY2xlYXJNaWRkbGVJbWFnZSAobWUpIHtcbiAgICBtZS5yZWN0YW5nbGVDYW52YXMud2lkdGggPSBtZS53aWR0aCAqIG1lLnNjYWxlXG4gICAgbWUucmVjdGFuZ2xlQ2FudmFzLmhlaWdodCA9IG1lLmhlaWdodCAqIG1lLnNjYWxlXG4gICAgbGV0IGN0eCA9IG1lLnJlY3RhbmdsZUNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIilcbiAgICBjdHguY2xlYXJSZWN0KDAsIDAsIG1lLndpZHRoLCBtZS5oZWlnaHQpXG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZHJhd01pZGRsZUltYWdlKG1lKSB7XG4gIG1lLnJlY3RhbmdsZUNhbnZhcy53aWR0aCA9IG1lLndpZHRoICogbWUuc2NhbGVcbiAgbWUucmVjdGFuZ2xlQ2FudmFzLmhlaWdodCA9IG1lLmhlaWdodCAqIG1lLnNjYWxlXG4gIGxldCBjdHggPSBtZS5yZWN0YW5nbGVDYW52YXMuZ2V0Q29udGV4dCgnMmQnKVxuICBjdHguZHJhd0ltYWdlKFxuICAgIG1lLmtzcyxcbiAgICBtZS5zdGFydFggKiBtZS5zY2FsZSxcbiAgICAobWUuc3RhcnRZICsgbWUuc2Nyb2xsVG9wKSAqIG1lLnNjYWxlLFxuICAgIG1lLndpZHRoICogbWUuc2NhbGUsXG4gICAgbWUuaGVpZ2h0ICogbWUuc2NhbGUsXG4gICAgMCxcbiAgICAwLFxuICAgIG1lLndpZHRoICogbWUuc2NhbGUsXG4gICAgbWUuaGVpZ2h0ICogbWUuc2NhbGVcbiAgKVxuXG4gIGxldCBkYXRhVVJMID0gbWUucmVjdGFuZ2xlQ2FudmFzLnRvRGF0YVVSTCgnaW1hZ2UvcG5nJylcblxuICBtZS5pbWdCYXNlNjQgPSBkYXRhVVJMXG4gIG1lLnNuYXBzaG9vdExpc3RbMF0gPSBkYXRhVVJMXG4gIG1lLmN1cnJlbnRJbWdEb20uc3JjID0gbWUuaW1nQmFzZTY0XG59XG4iLCJpbXBvcnQgeyBjc3MgfSBmcm9tICcuLi91dGlsJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzZXRMaW5lV2lkdGggKG1lKSB7XG4gICAgbGV0IHNldExpbmVXaWR0aCA9IHdpbmRvdy53b25kZXJfY29udGFpbmVyRG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpXG4gICAgc2V0TGluZVdpZHRoLmlkID0gJ2tzc1NldExpbmVXaWR0aCdcbiAgICBzZXRMaW5lV2lkdGgudGFiSW5kZXggPSAnLTEnXG5cbiAgICBsZXQgbnVtSW5wdXRXcmFwcGVyID0gd2luZG93LndvbmRlcl9jb250YWluZXJEb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIG51bUlucHV0V3JhcHBlci5pZCA9ICdrc3NOdW1JbnB1dFdyYXBwZXInXG5cbiAgICBsZXQgbnVtSW5wdXQgPSB3aW5kb3cud29uZGVyX2NvbnRhaW5lckRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbiAgICBudW1JbnB1dC5pZCA9ICdrc3NOdW1JbnB1dCdcbiAgICBudW1JbnB1dC52YWx1ZSA9IG1lLnRvb2xiYXJMaW5lV2lkdGhcbiAgICBudW1JbnB1dFdyYXBwZXIuYXBwZW5kQ2hpbGQobnVtSW5wdXQpXG4gICAgbnVtSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoZSkgPT4ge1xuICAgICAgICBsZXQgdmFsID0gcGFyc2VJbnQoZS5jdXJyZW50VGFyZ2V0LnZhbHVlKVxuXG4gICAgICAgIGlmICh2YWwgPiAyMCkge1xuICAgICAgICAgICAgdmFsID0gMjBcbiAgICAgICAgfSBlbHNlIGlmICh2YWwgPD0gMCkge1xuICAgICAgICAgICAgdmFsID0gMVxuICAgICAgICB9XG4gICAgICAgIG51bUlucHV0LnZhbHVlID0gdmFsXG4gICAgICAgIG1lLnRvb2xiYXJMaW5lV2lkdGggPSB2YWxcbiAgICAgICAgY3NzKHNob3dMaW5lV2lkdGgsIHtcbiAgICAgICAgICAgIHdpZHRoOiBtZS50b29sYmFyTGluZVdpZHRoICsgJ3B4J1xuICAgICAgICB9KVxuICAgIH0pXG4gICAgbGV0IGFycm93TnVtV3JhcHBlciA9IHdpbmRvdy53b25kZXJfY29udGFpbmVyRG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpXG4gICAgYXJyb3dOdW1XcmFwcGVyLmlkID0gJ2tzc0Fycm93TnVtV3JhcHBlcidcbiBcbiAgICBsZXQgdXBOdW0gPSB3aW5kb3cud29uZGVyX2NvbnRhaW5lckRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgdXBOdW0uaWQgPSAna3NzVXBOdW0nXG4gICAgdXBOdW0uaW5uZXJIVE1MID0gJ+KWsidcbiAgICBsZXQgZG93bk51bSA9IHdpbmRvdy53b25kZXJfY29udGFpbmVyRG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBkb3duTnVtLmlkID0gJ2tzc0Rvd25OdW0nXG4gICAgZG93bk51bS5pbm5lckhUTUwgPSAn4pa8J1xuXG4gICAgdXBOdW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGlmIChudW1JbnB1dC52YWx1ZSA8IDIwKSB7XG4gICAgICAgICAgICBudW1JbnB1dC52YWx1ZSA9IHBhcnNlSW50KG51bUlucHV0LnZhbHVlKSArIDFcbiAgICAgICAgICAgIG1lLnRvb2xiYXJMaW5lV2lkdGggPSBudW1JbnB1dC52YWx1ZVxuICAgICAgICAgICAgY3NzKHNob3dMaW5lV2lkdGgsIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogbWUudG9vbGJhckxpbmVXaWR0aCArICdweCdcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9KVxuXG4gICAgZG93bk51bS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgaWYgKG51bUlucHV0LnZhbHVlID4gMSkge1xuICAgICAgICAgICAgbnVtSW5wdXQudmFsdWUgPSBwYXJzZUludChudW1JbnB1dC52YWx1ZSkgLSAxXG4gICAgICAgICAgICBtZS50b29sYmFyTGluZVdpZHRoID0gbnVtSW5wdXQudmFsdWVcbiAgICAgICAgICAgIGNzcyhzaG93TGluZVdpZHRoLCB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IG1lLnRvb2xiYXJMaW5lV2lkdGggKyAncHgnXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfSlcblxuICAgIGFycm93TnVtV3JhcHBlci5hcHBlbmRDaGlsZCh1cE51bSlcbiAgICBhcnJvd051bVdyYXBwZXIuYXBwZW5kQ2hpbGQoZG93bk51bSlcblxuICAgIG51bUlucHV0V3JhcHBlci5hcHBlbmRDaGlsZChhcnJvd051bVdyYXBwZXIpXG5cbiAgICBzZXRMaW5lV2lkdGguYXBwZW5kQ2hpbGQobnVtSW5wdXRXcmFwcGVyKVxuXG4gICAgbGV0IHNob3dMaW5lV2lkdGhXcmFwcGVyID0gd2luZG93LndvbmRlcl9jb250YWluZXJEb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIHNob3dMaW5lV2lkdGhXcmFwcGVyLmlkID0gJ2tzc1Nob3dMaW5lV2lkdGhXcmFwcGVyJ1xuXG4gICAgbGV0IHNob3dMaW5lV2lkdGggPSB3aW5kb3cud29uZGVyX2NvbnRhaW5lckRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKVxuICAgIHNob3dMaW5lV2lkdGguaWQgPSAna3NzU2hvd0xpbmVXaWR0aCdcbiAgICBjc3Moc2hvd0xpbmVXaWR0aCwge1xuICAgICAgICB3aWR0aDogbWUudG9vbGJhckxpbmVXaWR0aCArICdweCcsXG4gICAgICAgIGJhY2tncm91bmQ6ICcjZmIzODM4J1xuICAgIH0pXG5cbiAgICBzaG93TGluZVdpZHRoV3JhcHBlci5hcHBlbmRDaGlsZChzaG93TGluZVdpZHRoKVxuXG4gICAgc2V0TGluZVdpZHRoLmFwcGVuZENoaWxkKHNob3dMaW5lV2lkdGhXcmFwcGVyKVxuXG4gICAgc2V0TGluZVdpZHRoLmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3VzJywgKGUpID0+IHtcbiAgICAgICAgZS5jdXJyZW50VGFyZ2V0LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snXG4gICAgfSlcblxuICAgIHNldExpbmVXaWR0aC5hZGRFdmVudExpc3RlbmVyKCdibHVyJywgKCkgPT4ge1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICBpZiAobnVtSW5wdXQgIT09IHdpbmRvdy53b25kZXJfY29udGFpbmVyRG9jdW1lbnQuYWN0aXZlRWxlbWVudCkge1xuICAgICAgICAgICAgICAgIHNldExpbmVXaWR0aC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIDApXG4gICAgfSlcblxuICAgIG51bUlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLCAoKSA9PiB7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHNldExpbmVXaWR0aCAhPT0gd2luZG93LndvbmRlcl9jb250YWluZXJEb2N1bWVudC5hY3RpdmVFbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgc2V0TGluZVdpZHRoLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcbiAgICAgICAgICAgfVxuICAgICAgIH0sIDApXG4gICAgfSlcblxuICAgIHJldHVybiBzZXRMaW5lV2lkdGhcbn0iLCJpbXBvcnQgeyBjc3MsIHJlbW92ZSB9IGZyb20gJy4uLy4uL3V0aWwnXG5pbXBvcnQgYXJyb3cgZnJvbSAnLi4vYXJyb3cnXG5pbXBvcnQgYmFja1RvUHJlSW1nIGZyb20gJy4uL2JhY2tUb1ByZUltZydcbmltcG9ydCBtYWtlU25hcFNob290IGZyb20gJy4uL21ha2VTbmFwU2hvb3QnXG5pbXBvcnQgaW1nIGZyb20gJy4uLy4uL2Fzc2V0cy9pbWdzL2Fycm93LnBuZydcbmltcG9ydCBhY3RpdmVUb29sYmFySXRlbSBmcm9tICcuLi9hY3RpdmVUb29sYmFySXRlbSdcbmltcG9ydCBsYXllclNvcnQgZnJvbSAnLi4vbGF5ZXJTb3J0J1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhcnJvd0JUIChtZSkge1xuICAgIGxldCBhcnJvd0JUID0gd2luZG93LndvbmRlcl9jb250YWluZXJEb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJylcbiAgICBhcnJvd0JULmlkID0gJ2tzc0Fycm93QlQnXG4gICAgYXJyb3dCVC5jbGFzc05hbWUgPSAna3NzVG9vbGJhckl0ZW1CVCdcbiAgICBhcnJvd0JULnRpdGxlID0gJ+eureWktOW3peWFtydcbiAgXG4gICAgbGV0IGFycm93SW1nID0gd2luZG93LndvbmRlcl9jb250YWluZXJEb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKVxuICAgIGFycm93SW1nLmNsYXNzTmFtZSA9ICdrc3NUb29sYmFySXRlbUltZydcbiAgICBhcnJvd0ltZy5zcmMgPSBpbWdcbiAgICBtZS5hcnJvd0JUID0gYXJyb3dCVFxuXG4gICAgYXJyb3dCVC5hcHBlbmRDaGlsZChhcnJvd0ltZylcblxuICAgIGFycm93QlQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIG1lLmlzRWRpdCA9IHRydWVcbiAgICAgICAgXG4gICAgICAgIGlmIChtZS5jdXJyZW50VG9vbFR5cGUgPT09ICdhcnJvdycpIHtcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgXG4gICAgICAgIG1lLmN1cnJlbnRUb29sVHlwZSA9ICdhcnJvdydcbiAgICAgICAgYWN0aXZlVG9vbGJhckl0ZW0oYXJyb3dCVClcbiAgICAgICAgbGF5ZXJTb3J0KG1lLCAnY2FudmFzTGF5ZXInKVxuICAgICBcbiAgICAgICAgaWYgKG1lLnRvb2xtb3VzZWRvd24pIHtcbiAgICAgICAgICAgIG1lLnJlY3RhbmdsZUNhbnZhcy5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBtZS50b29sbW91c2Vkb3duKVxuICAgICAgICAgICAgd2luZG93LndvbmRlcl9jb250YWluZXJEb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBtZS50b29sbW91c2Vtb3ZlKVxuICAgICAgICAgICAgd2luZG93LndvbmRlcl9jb250YWluZXJEb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgbWUudG9vbG1vdXNldXApXG4gICAgICAgIH1cblxuICAgICAgICBtZS5yZWN0YW5nbGVDYW52YXMuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgYXJyb3dNb3VzZWRvd25FdmVudClcbiAgICAgICAgbWUudG9vbG1vdXNlZG93bj0gYXJyb3dNb3VzZWRvd25FdmVudFxuXG4gICAgICAgIGZ1bmN0aW9uIGFycm93TW91c2Vkb3duRXZlbnQgKGUpIHtcbiAgICAgICAgICAgIGlmIChlLmJ1dHRvbiA9PT0gMikge1xuICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IHN0YXJ0WCA9IGUuY2xpZW50WFxuICAgICAgICAgICAgbGV0IHN0YXJ0WSA9IGUuY2xpZW50WVxuICAgICAgICAgICAgXG4gICAgICAgICAgICB3aW5kb3cud29uZGVyX2NvbnRhaW5lckRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIGFycm93TW91c2Vtb3ZlRXZlbnQpXG4gICAgICAgICAgICB3aW5kb3cud29uZGVyX2NvbnRhaW5lckRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBhcnJvd01vdXNldXBFdmVudClcbiAgICAgICAgICAgIG1lLnRvb2xtb3VzZW1vdmUgPSBhcnJvd01vdXNlbW92ZUV2ZW50XG4gICAgICAgICAgICBtZS50b29sbW91c2V1cCA9IGFycm93TW91c2V1cEV2ZW50XG4gICAgICAgICAgICBsZXQgdHJpYW5nbGUgPSB7XG4gICAgICAgICAgICAgICAgICAgIGRpc3RhbmNlOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICB0d29TaWRlOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICBib3R0b21TaWRlOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICBjcm9zc1dpZHRoOiBudWxsXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgZnVuY3Rpb24gYXJyb3dNb3VzZW1vdmVFdmVudCAoZSkge1xuICAgICAgICAgICAgICAgIGJhY2tUb1ByZUltZyhtZSlcbiAgICAgICAgICAgICAgICBsZXQgZW5kWCA9IGUuY2xpZW50WFxuICAgICAgICAgICAgICAgIGxldCBlbmRZID0gZS5jbGllbnRZXG4gICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBpZiAoZW5kWCA8IG1lLnN0YXJ0WCkge1xuICAgICAgICAgICAgICAgICAgICBlbmRYID0gbWUuc3RhcnRYXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChlbmRYID4gKG1lLnN0YXJ0WCArIG1lLndpZHRoKSkge1xuICAgICAgICAgICAgICAgICAgICBlbmRYID0gbWUuc3RhcnRYICsgbWUud2lkdGhcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoZW5kWSA8IG1lLnN0YXJ0WSkge1xuICAgICAgICAgICAgICAgICAgICBlbmRZID0gbWUuc3RhcnRZXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChlbmRZID4gKG1lLnN0YXJ0WSArIG1lLmhlaWdodCkpIHtcbiAgICAgICAgICAgICAgICAgICAgZW5kWSA9IG1lLnN0YXJ0WSArIG1lLmhlaWdodFxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGFycm93KHt4OiBzdGFydFggLSBtZS5zdGFydFgsIHk6IHN0YXJ0WSAtIG1lLnN0YXJ0WX0sIHt4OiBlbmRYIC0gbWUuc3RhcnRYLCB5OiBlbmRZIC0gbWUuc3RhcnRZfSwgdHJpYW5nbGUsIG1lKVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmdW5jdGlvbiBhcnJvd01vdXNldXBFdmVudCAoZSkge1xuICAgICAgICAgICAgICAgIGxldCBlbmRYID0gZS5jbGllbnRYXG4gICAgICAgICAgICAgICAgbGV0IGVuZFkgPSBlLmNsaWVudFlcblxuICAgICAgICAgICAgICAgIGlmIChzdGFydFggPT09IGVuZFggJiYgc3RhcnRZID09PSBlbmRZKSB7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy53b25kZXJfY29udGFpbmVyRG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgYXJyb3dNb3VzZW1vdmVFdmVudClcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LndvbmRlcl9jb250YWluZXJEb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgYXJyb3dNb3VzZXVwRXZlbnQpXG4gICAgICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB3aW5kb3cud29uZGVyX2NvbnRhaW5lckRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIGFycm93TW91c2Vtb3ZlRXZlbnQpXG4gICAgICAgICAgICAgICAgd2luZG93LndvbmRlcl9jb250YWluZXJEb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgYXJyb3dNb3VzZXVwRXZlbnQpXG4gICAgICAgICAgICAgICAgbWFrZVNuYXBTaG9vdChtZSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pXG5cbiAgICByZXR1cm4gYXJyb3dCVFxufSIsImltcG9ydCB7IGNzcyB9IGZyb20gJy4uLy4uL3V0aWwnXG5pbXBvcnQgYmFja1RvUHJlSW1nIGZyb20gJy4uL2JhY2tUb1ByZUltZydcbmltcG9ydCBpbWcgZnJvbSAnLi4vLi4vYXNzZXRzL2ltZ3MvYmFjay5wbmcnXG5pbXBvcnQgYWN0aXZlVG9vbGJhckl0ZW0gZnJvbSAnLi4vYWN0aXZlVG9vbGJhckl0ZW0nXG5pbXBvcnQgbGF5ZXJTb3J0IGZyb20gJy4uL2xheWVyU29ydCdcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYmFja0JUIChtZSkge1xuICAgIGxldCBiYWNrQlQgPSB3aW5kb3cud29uZGVyX2NvbnRhaW5lckRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKVxuICAgIGJhY2tCVC5pZCA9ICdrc3NiYWNrZUJUJ1xuICAgIGJhY2tCVC5jbGFzc05hbWUgPSAna3NzVG9vbGJhckl0ZW1CVCdcbiAgICBiYWNrQlQudGl0bGUgPSAn5ZCO6YCAJ1xuXG4gICAgbGV0IGJhY2tJbWcgPSB3aW5kb3cud29uZGVyX2NvbnRhaW5lckRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpXG4gICAgYmFja0ltZy5jbGFzc05hbWUgPSAna3NzVG9vbGJhckl0ZW1JbWcnXG4gICAgYmFja0ltZy5zcmMgPSBpbWdcbiAgICBtZS5iYWNrQlQgPSBiYWNrQlRcblxuICAgIGJhY2tCVC5hcHBlbmRDaGlsZChiYWNrSW1nKVxuXG4gICAgYmFja0JULmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAobWUuc25hcHNob290TGlzdC5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICBpZiAobWUuc25hcHNob290TGlzdC5sZW5ndGggPT09IDIpIHtcbiAgICAgICAgICAgICAgICBsYXllclNvcnQobWUsICdjYW52YXNMYXllcicpXG4gICAgICAgICAgICAgICAgYmFja1RvSW5pdCgpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBtZS5zbmFwc2hvb3RMaXN0LnBvcCgpXG4gICAgICAgIH0gZWxzZSBpZiAobWUuc25hcHNob290TGlzdC5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAgIGxheWVyU29ydChtZSwgJ2NhbnZhc0xheWVyJylcbiAgICAgICAgICAgIGJhY2tUb0luaXQoKVxuICAgICAgICB9XG4gICAgICBcbiAgICAgICAgbWUuY3VycmVudEltZ0RvbS5zcmMgPSBtZS5zbmFwc2hvb3RMaXN0W21lLnNuYXBzaG9vdExpc3QubGVuZ3RoIC0gMV1cbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBiYWNrVG9QcmVJbWcobWUpXG4gICAgICAgIH0sIDApXG4gICAgfSlcblxuICAgIGZ1bmN0aW9uIGJhY2tUb0luaXQgKCkge1xuICAgICAgICBtZS5pc0VkaXQgPSBmYWxzZVxuICAgICAgICBtZS5jdXJyZW50VG9vbFR5cGUgPSBudWxsXG4gICAgICAgIG1lLnJlY3RhbmdsZUNhbnZhcy5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBtZS50b29sbW91c2Vkb3duKVxuICAgICAgICB3aW5kb3cud29uZGVyX2NvbnRhaW5lckRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIG1lLnRvb2xtb3VzZW1vdmUpXG4gICAgICAgIHdpbmRvdy53b25kZXJfY29udGFpbmVyRG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIG1lLnRvb2xtb3VzZXVwKVxuICAgICAgICBhY3RpdmVUb29sYmFySXRlbShudWxsKVxuICAgIH1cblxuICAgIHJldHVybiBiYWNrQlRcbn0gIiwiaW1wb3J0IHsgY3NzIH0gZnJvbSAnLi4vLi4vdXRpbCdcbmltcG9ydCBpbWcgZnJvbSAnLi4vLi4vYXNzZXRzL2ltZ3MvY29sb3IucG5nJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjb2xvckJUIChtZSkge1xuICAgIGxldCBjb2xvckJUID0gd2luZG93LndvbmRlcl9jb250YWluZXJEb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJylcbiAgICBjb2xvckJULmlkID0gJ2tzc0NvbG9yQlQnXG4gICAgY29sb3JCVC5jbGFzc05hbWUgPSAna3NzVG9vbGJhckl0ZW1CVCdcbiAgICBjb2xvckJULnRpdGxlID0gJ+minOiJsuW3peWFtydcblxuICAgIGxldCBjb2xvckltZyA9IHdpbmRvdy53b25kZXJfY29udGFpbmVyRG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJylcbiAgICBjb2xvckltZy5jbGFzc05hbWUgPSAna3NzVG9vbGJhckl0ZW1JbWcnXG4gICAgY29sb3JJbWcuc3JjID0gaW1nXG4gICAgbWUuY29sb3JCVCA9IGNvbG9yQlRcblxuICAgIGNvbG9yQlQuYXBwZW5kQ2hpbGQoY29sb3JJbWcpXG5cbiAgICBjb2xvckJULmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgICBsZXQgY2xpZW50SGVpZ2h0ID0gd2luZG93LndvbmRlcl9jb250YWluZXJEb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0XG4gICAgICAgIGxldCBjb2xvckJvYXJkID0gd2luZG93LndvbmRlcl9jb250YWluZXJEb2N1bWVudC5nZXRFbGVtZW50QnlJZCgna3NzQ29sb3JCb2FyZCcpXG4gICAgICAgIGxldCBib3R0b21TdXJwbHVzID0gY2xpZW50SGVpZ2h0IC0gbWUuc3RhcnRZIC0gbWUuaGVpZ2h0IC0gbWUudG9vbGJhck1hcmdpblRvcCAtIG1lLnRvb2xiYXJIZWlnaHRcblxuICAgICAgICBpZiAoYm90dG9tU3VycGx1cyA8IDApIHtcbiAgICAgICAgICAgIGNzcyhjb2xvckJvYXJkLCB7XG4gICAgICAgICAgICAgICAgdG9wOiAnMzBweCcsXG4gICAgICAgICAgICB9KVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY3NzKGNvbG9yQm9hcmQsIHtcbiAgICAgICAgICAgICAgICB0b3A6ICctNDBweCcsXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG5cbiAgICAgICAgY29sb3JCb2FyZC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJ1xuICAgICAgICBjb2xvckJvYXJkLmZvY3VzKClcbiAgICB9KVxuXG4gICAgcmV0dXJuIGNvbG9yQlRcbn0iLCJpbXBvcnQgeyBjc3MsIHJlbW92ZSwgdHlwZUNoZWNraW5nIH0gZnJvbSAnLi4vLi4vdXRpbCdcbmltcG9ydCBkcmF3TWlkZGxlSW1hZ2UgZnJvbSAnLi4vbWlkZGxlSW1hZ2UvZHJhd01pZGRsZUltYWdlJ1xuaW1wb3J0IGNvcHkgZnJvbSAnLi4vY29weSdcbmltcG9ydCBkb3dubG9hZCBmcm9tICcuLi9kb3dubG9hZCdcbmltcG9ydCBlbmRBbmRDbGVhciBmcm9tICcuLi9lbmRBbmRDbGVhcidcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY29tcGxldGVCVCAobWUpIHtcbiAgICBsZXQgY29tcGxldGVCVCA9IHdpbmRvdy53b25kZXJfY29udGFpbmVyRG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpXG4gICAgY29tcGxldGVCVC5pZCA9ICdrc3NDb21wbGV0ZUJUJ1xuICAgIGNvbXBsZXRlQlQuY2xhc3NOYW1lID0gJ2tzc1Rvb2xiYXJJdGVtQlQnXG4gICAgY29tcGxldGVCVC5pbm5lckhUTUwgPSAn5a6M5oiQJ1xuICAgIGNvbXBsZXRlQlQudGl0bGUgPSAn5a6M5oiQ5oiq5Zu+J1xuXG4gICAgY3NzKGNvbXBsZXRlQlQsIHtcbiAgICAgICAgd2lkdGg6ICc0MHB4JyxcbiAgICAgICAgJ2xpbmUtaGVpZ2h0JzogJzI4cHgnXG4gICAgfSlcblxuICAgIGNvbXBsZXRlQlQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhc3luYyBmdW5jdGlvbiAoKSB7XG4gICAgICAgIG1lLmlzRWRpdCA9IHRydWVcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IGxhc3RTaG90ID0gbWUuc25hcHNob290TGlzdFttZS5zbmFwc2hvb3RMaXN0Lmxlbmd0aCAtIDFdXG4gICAgICAgIGNvcHkobWUsIGxhc3RTaG90KVxuICAgICAgICBtZS5uZWVkRG93bmxvYWQgPT09IHRydWUgJiYgKGF3YWl0IGRvd25sb2FkKG1lKSlcbiAgICAgICAgdHlwZUNoZWNraW5nKG1lLmVuZENCKSA9PT0gJ1tvYmplY3QgRnVuY3Rpb25dJyAmJiBtZS5lbmRDQihsYXN0U2hvdClcbiAgICAgICAgZW5kQW5kQ2xlYXIobWUpXG4gICAgfSlcblxuICAgIHJldHVybiBjb21wbGV0ZUJUXG59IiwiaW1wb3J0IHsgY3NzIH0gZnJvbSAnLi4vLi4vdXRpbCdcbmltcG9ydCBtYWtlU25hcFNob290IGZyb20gJy4uL21ha2VTbmFwU2hvb3QnXG5pbXBvcnQgaW1nIGZyb20gJy4uLy4uL2Fzc2V0cy9pbWdzL2RyYXcucG5nJ1xuaW1wb3J0IGFjdGl2ZVRvb2xiYXJJdGVtIGZyb20gJy4uL2FjdGl2ZVRvb2xiYXJJdGVtJ1xuaW1wb3J0IGxheWVyU29ydCBmcm9tICcuLi9sYXllclNvcnQnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRyYXdMaW5lQlQgKG1lKSB7XG4gICAgbGV0IGRyYXdMaW5lQlQgPSB3aW5kb3cud29uZGVyX2NvbnRhaW5lckRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKVxuICAgIGRyYXdMaW5lQlQuaWQgPSAna3NzRHJhd0xpbmVCVCdcbiAgICBkcmF3TGluZUJULmNsYXNzTmFtZSA9ICdrc3NUb29sYmFySXRlbUJUJ1xuICAgIGRyYXdMaW5lQlQudGl0bGUgPSAn55S75Yi35bel5YW3J1xuXG4gICAgbGV0IGRyYXdMaW5lSW1nID0gd2luZG93LndvbmRlcl9jb250YWluZXJEb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKVxuICAgIGRyYXdMaW5lSW1nLmNsYXNzTmFtZSA9ICdrc3NUb29sYmFySXRlbUltZydcbiAgICBkcmF3TGluZUltZy5zcmMgPSBpbWdcbiAgICBtZS5kcmF3TGluZUJUID0gZHJhd0xpbmVCVFxuXG4gICAgZHJhd0xpbmVCVC5hcHBlbmRDaGlsZChkcmF3TGluZUltZylcblxuICAgIGRyYXdMaW5lQlQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIG1lLmlzRWRpdCA9IHRydWVcbiAgICAgICAgXG4gICAgICAgIGxldCBrc3NTZXRMaW5lV2lkdGggPSB3aW5kb3cud29uZGVyX2NvbnRhaW5lckRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdrc3NTZXRMaW5lV2lkdGgnKVxuICAgICAgICBsZXQgY2xpZW50SGVpZ2h0ID0gd2luZG93LndvbmRlcl9jb250YWluZXJEb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0XG4gICAgICAgIGxldCBib3R0b21TdXJwbHVzID0gY2xpZW50SGVpZ2h0IC0gbWUuc3RhcnRZIC0gbWUuaGVpZ2h0IC0gbWUudG9vbGJhck1hcmdpblRvcCAtIG1lLnRvb2xiYXJIZWlnaHRcbiAgICAgICAgXG4gICAgICAgIGlmIChib3R0b21TdXJwbHVzIDwgMCkge1xuICAgICAgICAgICAgY3NzKGtzc1NldExpbmVXaWR0aCwge1xuICAgICAgICAgICAgICAgIHRvcDogJzMwcHgnLFxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNzcyhrc3NTZXRMaW5lV2lkdGgsIHtcbiAgICAgICAgICAgICAgICB0b3A6ICctNDBweCcsXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG5cbiAgICAgICAga3NzU2V0TGluZVdpZHRoLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snXG4gICAgICAgIGtzc1NldExpbmVXaWR0aC5mb2N1cygpXG5cbiAgICAgICAgaWYgKG1lLmN1cnJlbnRUb29sVHlwZSA9PT0gJ2RyYXdMaW5lJykge1xuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgXG4gICAgICAgIG1lLmN1cnJlbnRUb29sVHlwZSA9ICdkcmF3TGluZSdcbiAgICAgICAgYWN0aXZlVG9vbGJhckl0ZW0oZHJhd0xpbmVCVClcbiAgICAgICAgbGF5ZXJTb3J0KG1lLCAnY2FudmFzTGF5ZXInKVxuICAgICAgIFxuICAgICAgIGlmIChtZS50b29sbW91c2Vkb3duKSB7XG4gICAgICAgICAgICBtZS5yZWN0YW5nbGVDYW52YXMucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgbWUudG9vbG1vdXNlZG93bilcbiAgICAgICAgICAgIHdpbmRvdy53b25kZXJfY29udGFpbmVyRG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgbWUudG9vbG1vdXNlbW92ZSlcbiAgICAgICAgICAgIHdpbmRvdy53b25kZXJfY29udGFpbmVyRG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIG1lLnRvb2xtb3VzZXVwKVxuICAgICAgICB9XG5cbiAgICAgICAgbWUucmVjdGFuZ2xlQ2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIGRyYXdMaW5lTW91c2Vkb3duRXZlbnQpXG4gICAgICAgIG1lLnRvb2xtb3VzZWRvd249IGRyYXdMaW5lTW91c2Vkb3duRXZlbnRcblxuICAgICAgICBmdW5jdGlvbiBkcmF3TGluZU1vdXNlZG93bkV2ZW50IChlKSB7XG4gICAgICAgICAgICBpZiAoZS5idXR0b24gPT09IDIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCBjb250ZXh0ID0gbWUucmVjdGFuZ2xlQ2FudmFzLmdldENvbnRleHQoXCIyZFwiKVxuICAgICAgICAgICAgY29udGV4dC5iZWdpblBhdGgoKVxuICAgICAgICAgICAgY29udGV4dC5tb3ZlVG8oKGUuY2xpZW50WCAtIG1lLnN0YXJ0WCkgKiBtZS5zY2FsZSwgKGUuY2xpZW50WSAtIG1lLnN0YXJ0WSkgKiBtZS5zY2FsZSlcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgY29udGV4dC5zdHJva2VTdHlsZSA9IG1lLnRvb2xiYXJDb2xvclxuICAgICBcbiAgICAgICAgICAgIHdpbmRvdy53b25kZXJfY29udGFpbmVyRG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgZHJhd0xpbmVNb3VzZW1vdmVFdmVudClcbiAgICAgICAgICAgIHdpbmRvdy53b25kZXJfY29udGFpbmVyRG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIGRyYXdMaW5lTW91c2V1cEV2ZW50KVxuICAgICAgICAgICAgbWUudG9vbG1vdXNlbW92ZSA9IGRyYXdMaW5lTW91c2Vtb3ZlRXZlbnRcbiAgICAgICAgICAgIG1lLnRvb2xtb3VzZXVwID0gZHJhd0xpbmVNb3VzZXVwRXZlbnRcblxuICAgICAgICAgICAgZnVuY3Rpb24gZHJhd0xpbmVNb3VzZW1vdmVFdmVudCAoZSkge1xuICAgICAgICAgICAgICAgIGNvbnRleHQubGluZVdpZHRoID0gbWUudG9vbGJhckxpbmVXaWR0aFxuICAgICAgICAgICAgICAgIGNvbnRleHQubGluZVRvKChlLmNsaWVudFggLSBtZS5zdGFydFgpICogbWUuc2NhbGUsIChlLmNsaWVudFkgLSBtZS5zdGFydFkpICogbWUuc2NhbGUpXG4gICAgICAgICAgICAgICAgY29udGV4dC5zdHJva2UoKSAgXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGZ1bmN0aW9uIGRyYXdMaW5lTW91c2V1cEV2ZW50IChlKSB7XG4gICAgICAgICAgICAgICAgY29udGV4dC5jbG9zZVBhdGgoKVxuICAgICAgICAgICAgICAgIHdpbmRvdy53b25kZXJfY29udGFpbmVyRG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgZHJhd0xpbmVNb3VzZW1vdmVFdmVudClcbiAgICAgICAgICAgICAgICB3aW5kb3cud29uZGVyX2NvbnRhaW5lckRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBkcmF3TGluZU1vdXNldXBFdmVudClcbiAgICAgICAgICAgICAgICBtYWtlU25hcFNob290KG1lKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSlcblxuICAgIHJldHVybiBkcmF3TGluZUJUXG59IiwiaW1wb3J0IHsgY3NzIH0gZnJvbSAnLi4vLi4vdXRpbCdcbmltcG9ydCBiYWNrVG9QcmVJbWcgZnJvbSAnLi4vYmFja1RvUHJlSW1nJ1xuaW1wb3J0IG1ha2VTbmFwU2hvb3QgZnJvbSAnLi4vbWFrZVNuYXBTaG9vdCdcbmltcG9ydCBpbWcgZnJvbSAnLi4vLi4vYXNzZXRzL2ltZ3MvZWxsaXBzZS5wbmcnXG5pbXBvcnQgYWN0aXZlVG9vbGJhckl0ZW0gZnJvbSAnLi4vYWN0aXZlVG9vbGJhckl0ZW0nXG5pbXBvcnQgbGF5ZXJTb3J0IGZyb20gJy4uL2xheWVyU29ydCdcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZWxsaXBzZUJUKG1lKSB7XG4gIGxldCBlbGxpcHNlQlQgPSB3aW5kb3cud29uZGVyX2NvbnRhaW5lckRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKVxuICBlbGxpcHNlQlQuaWQgPSAna3NzQXJyb3dCVCdcbiAgZWxsaXBzZUJULmNsYXNzTmFtZSA9ICdrc3NUb29sYmFySXRlbUJUJ1xuICBlbGxpcHNlQlQudGl0bGUgPSAn5qSt5ZyG5bel5YW3J1xuXG4gIGxldCBlbGxpcHNlSW1nID0gd2luZG93LndvbmRlcl9jb250YWluZXJEb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKVxuICBlbGxpcHNlSW1nLmNsYXNzTmFtZSA9ICdrc3NUb29sYmFySXRlbUltZydcbiAgZWxsaXBzZUltZy5zcmMgPSBpbWdcbiAgbWUuZWxsaXBzZUJUID0gZWxsaXBzZUJUXG5cbiAgZWxsaXBzZUJULmFwcGVuZENoaWxkKGVsbGlwc2VJbWcpXG5cbiAgZWxsaXBzZUJULmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgIG1lLmlzRWRpdCA9IHRydWVcblxuICAgIGlmIChtZS5jdXJyZW50VG9vbFR5cGUgPT09ICdlbGxpcHNlJykge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgbWUuY3VycmVudFRvb2xUeXBlID0gJ2VsbGlwc2UnXG4gICAgYWN0aXZlVG9vbGJhckl0ZW0oZWxsaXBzZUJUKVxuICAgIGxheWVyU29ydChtZSwgJ2NhbnZhc0xheWVyJylcblxuICAgIGlmIChtZS50b29sbW91c2Vkb3duKSB7XG4gICAgICBtZS5yZWN0YW5nbGVDYW52YXMucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgbWUudG9vbG1vdXNlZG93bilcbiAgICAgIHdpbmRvdy53b25kZXJfY29udGFpbmVyRG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgbWUudG9vbG1vdXNlbW92ZSlcbiAgICAgIHdpbmRvdy53b25kZXJfY29udGFpbmVyRG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIG1lLnRvb2xtb3VzZXVwKVxuICAgIH1cblxuICAgIG1lLnJlY3RhbmdsZUNhbnZhcy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBlbGxpcHNlTW91c2Vkb3duRXZlbnQpXG4gICAgbWUudG9vbG1vdXNlZG93biA9IGVsbGlwc2VNb3VzZWRvd25FdmVudFxuXG4gICAgZnVuY3Rpb24gZWxsaXBzZU1vdXNlZG93bkV2ZW50KGUpIHtcbiAgICAgIGlmIChlLmJ1dHRvbiA9PT0gMikge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgbGV0IHN0YXJ0WCA9IGUuY2xpZW50WCAtIG1lLnN0YXJ0WFxuICAgICAgbGV0IHN0YXJ0WSA9IGUuY2xpZW50WSAtIG1lLnN0YXJ0WVxuXG4gICAgICB3aW5kb3cud29uZGVyX2NvbnRhaW5lckRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIGVsbGlwc2VNb3VzZW1vdmVFdmVudClcbiAgICAgIHdpbmRvdy53b25kZXJfY29udGFpbmVyRG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIGVsbGlwc2VNb3VzZXVwRXZlbnQpXG4gICAgICBtZS50b29sbW91c2Vtb3ZlID0gZWxsaXBzZU1vdXNlbW92ZUV2ZW50XG4gICAgICBtZS50b29sbW91c2V1cCA9IGVsbGlwc2VNb3VzZXVwRXZlbnRcblxuICAgICAgZnVuY3Rpb24gZWxsaXBzZU1vdXNlbW92ZUV2ZW50KGUpIHtcbiAgICAgICAgbGV0IGNvbnRleHQgPSBtZS5yZWN0YW5nbGVDYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpXG4gICAgICAgIGNvbnRleHQuY2xlYXJSZWN0KDAsIDAsIG1lLndpZHRoLCBtZS5oZWlnaHQpXG4gICAgICAgIGJhY2tUb1ByZUltZyhtZSlcblxuICAgICAgICBsZXQgZW5kWCA9IGUuY2xpZW50WFxuICAgICAgICBsZXQgZW5kWSA9IGUuY2xpZW50WVxuXG4gICAgICAgIGlmIChlbmRYIDwgbWUuc3RhcnRYKSB7XG4gICAgICAgICAgZW5kWCA9IG1lLnN0YXJ0WFxuICAgICAgICB9IGVsc2UgaWYgKGVuZFggPiBtZS5zdGFydFggKyBtZS53aWR0aCkge1xuICAgICAgICAgIGVuZFggPSBtZS5zdGFydFggKyBtZS53aWR0aFxuICAgICAgICB9XG5cbiAgICAgICAgZW5kWCAtPSBtZS5zdGFydFhcblxuICAgICAgICBpZiAoZW5kWSA8IG1lLnN0YXJ0WSkge1xuICAgICAgICAgIGVuZFkgPSBtZS5zdGFydFlcbiAgICAgICAgfSBlbHNlIGlmIChlbmRZID4gbWUuc3RhcnRZICsgbWUuaGVpZ2h0KSB7XG4gICAgICAgICAgZW5kWSA9IG1lLnN0YXJ0WSArIG1lLmhlaWdodFxuICAgICAgICB9XG5cbiAgICAgICAgZW5kWSAtPSBtZS5zdGFydFlcblxuICAgICAgICBsZXQgY2VudGVyWCA9IChzdGFydFggKyBlbmRYKSAvIDJcbiAgICAgICAgbGV0IGNlbnRlclkgPSAoc3RhcnRZICsgZW5kWSkgLyAyXG4gICAgICAgIGxldCByYWRpdXNYID0gTWF0aC5hYnMoZW5kWCAtIHN0YXJ0WCkgLyAyXG4gICAgICAgIGxldCByYWRpdXNZID0gTWF0aC5hYnMoZW5kWSAtIHN0YXJ0WSkgLyAyXG4gICAgICAgIGxldCBrID0gMC41NTIyODQ4XG4gICAgICAgIGxldCBveCA9IHJhZGl1c1ggKiBrXG4gICAgICAgIGxldCBveSA9IHJhZGl1c1kgKiBrXG5cbiAgICAgICAgY29udGV4dC5iZWdpblBhdGgoKVxuICAgICAgICBjb250ZXh0LmxpbmVXaWR0aCA9IDFcbiAgICAgICAgY29udGV4dC5zdHJva2VTdHlsZSA9IG1lLnRvb2xiYXJDb2xvclxuICAgICAgICBjb250ZXh0Lm1vdmVUbygoY2VudGVyWCAtIHJhZGl1c1gpICogbWUuc2NhbGUsIGNlbnRlclkgKiBtZS5zY2FsZSlcbiAgICAgICAgY29udGV4dC5iZXppZXJDdXJ2ZVRvKFxuICAgICAgICAgIChjZW50ZXJYIC0gcmFkaXVzWCkgKiBtZS5zY2FsZSxcbiAgICAgICAgICAoY2VudGVyWSAtIG95KSAqIG1lLnNjYWxlLFxuICAgICAgICAgIChjZW50ZXJYIC0gb3gpICogbWUuc2NhbGUsXG4gICAgICAgICAgKGNlbnRlclkgLSByYWRpdXNZKSAqIG1lLnNjYWxlLFxuICAgICAgICAgIGNlbnRlclggKiBtZS5zY2FsZSxcbiAgICAgICAgICAoY2VudGVyWSAtIHJhZGl1c1kpICogbWUuc2NhbGVcbiAgICAgICAgKVxuICAgICAgICBjb250ZXh0LmJlemllckN1cnZlVG8oXG4gICAgICAgICAgKGNlbnRlclggKyBveCkgKiBtZS5zY2FsZSxcbiAgICAgICAgICAoY2VudGVyWSAtIHJhZGl1c1kpICogbWUuc2NhbGUsXG4gICAgICAgICAgKGNlbnRlclggKyByYWRpdXNYKSAqIG1lLnNjYWxlLFxuICAgICAgICAgIChjZW50ZXJZIC0gb3kpICogbWUuc2NhbGUsXG4gICAgICAgICAgKGNlbnRlclggKyByYWRpdXNYKSAqIG1lLnNjYWxlLFxuICAgICAgICAgIGNlbnRlclkgKiBtZS5zY2FsZVxuICAgICAgICApXG4gICAgICAgIGNvbnRleHQuYmV6aWVyQ3VydmVUbyhcbiAgICAgICAgICAoY2VudGVyWCArIHJhZGl1c1gpICogbWUuc2NhbGUsXG4gICAgICAgICAgKGNlbnRlclkgKyBveSkgKiBtZS5zY2FsZSxcbiAgICAgICAgICAoY2VudGVyWCArIG94KSAqIG1lLnNjYWxlLFxuICAgICAgICAgIChjZW50ZXJZICsgcmFkaXVzWSkgKiBtZS5zY2FsZSxcbiAgICAgICAgICBjZW50ZXJYICogbWUuc2NhbGUsXG4gICAgICAgICAgKGNlbnRlclkgKyByYWRpdXNZKSAqIG1lLnNjYWxlXG4gICAgICAgIClcbiAgICAgICAgY29udGV4dC5iZXppZXJDdXJ2ZVRvKFxuICAgICAgICAgIChjZW50ZXJYIC0gb3gpICogbWUuc2NhbGUsXG4gICAgICAgICAgKGNlbnRlclkgKyByYWRpdXNZKSAqIG1lLnNjYWxlLFxuICAgICAgICAgIChjZW50ZXJYIC0gcmFkaXVzWCkgKiBtZS5zY2FsZSxcbiAgICAgICAgICAoY2VudGVyWSArIG95KSAqIG1lLnNjYWxlLFxuICAgICAgICAgIChjZW50ZXJYIC0gcmFkaXVzWCkgKiBtZS5zY2FsZSxcbiAgICAgICAgICBjZW50ZXJZICogbWUuc2NhbGVcbiAgICAgICAgKVxuICAgICAgICBjb250ZXh0LnN0cm9rZSgpXG4gICAgICAgIGNvbnRleHQuY2xvc2VQYXRoKClcbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gZWxsaXBzZU1vdXNldXBFdmVudChlKSB7XG4gICAgICAgIHdpbmRvdy53b25kZXJfY29udGFpbmVyRG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgZWxsaXBzZU1vdXNlbW92ZUV2ZW50KVxuICAgICAgICB3aW5kb3cud29uZGVyX2NvbnRhaW5lckRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBlbGxpcHNlTW91c2V1cEV2ZW50KVxuICAgICAgICBtYWtlU25hcFNob290KG1lKVxuICAgICAgfVxuICAgIH1cbiAgfSlcblxuICByZXR1cm4gZWxsaXBzZUJUXG59XG4iLCJpbXBvcnQgeyBjc3MsIHJlbW92ZSB9IGZyb20gJy4uLy4uL3V0aWwnXG5pbXBvcnQgZHJhd01pZGRsZUltYWdlIGZyb20gJy4uL21pZGRsZUltYWdlL2RyYXdNaWRkbGVJbWFnZSdcbmltcG9ydCBpbWcgZnJvbSAnLi4vLi4vYXNzZXRzL2ltZ3MvY2FuY2VsLnBuZydcbmltcG9ydCBlbmRBbmRDbGVhciBmcm9tICcuLi9lbmRBbmRDbGVhcidcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcXVpdEJUIChtZSkge1xuICAgIGxldCBxdWl0QlQgPSB3aW5kb3cud29uZGVyX2NvbnRhaW5lckRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKVxuICAgIHF1aXRCVC5pZCA9ICdrc3NRdWl0QlQnXG4gICAgcXVpdEJULmNsYXNzTmFtZSA9ICdrc3NUb29sYmFySXRlbUJUJ1xuICAgIHF1aXRCVC50aXRsZSA9ICfpgIDlh7rmiKrlm74nXG5cbiAgICBsZXQgcXVpdEltZyA9IHdpbmRvdy53b25kZXJfY29udGFpbmVyRG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJylcbiAgICBxdWl0SW1nLmNsYXNzTmFtZSA9ICdrc3NUb29sYmFySXRlbUltZydcbiAgICBxdWl0SW1nLnNyYyA9IGltZ1xuICAgIG1lLnF1aXRCVCA9IHF1aXRJbWdcblxuICAgIHF1aXRCVC5hcHBlbmRDaGlsZChxdWl0SW1nKVxuXG5cbiAgICBxdWl0QlQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIG1lLmlzRWRpdCA9IHRydWVcbiAgICAgICAgXG4gICAgICAgIGVuZEFuZENsZWFyKG1lKVxuICAgICAgICBtZS5jYW5jZWxDQigpXG4gICAgfSlcblxuICAgIHJldHVybiBxdWl0QlRcbn0iLCJpbXBvcnQgeyBjc3MgfSBmcm9tICcuLi8uLi91dGlsJ1xuaW1wb3J0IGJhY2tUb1ByZUltZyBmcm9tICcuLi9iYWNrVG9QcmVJbWcnXG5pbXBvcnQgbWFrZVNuYXBTaG9vdCBmcm9tICcuLi9tYWtlU25hcFNob290J1xuaW1wb3J0IGltZyBmcm9tICcuLi8uLi9hc3NldHMvaW1ncy9yZWN0LnBuZydcbmltcG9ydCBhY3RpdmVUb29sYmFySXRlbSBmcm9tICcuLi9hY3RpdmVUb29sYmFySXRlbSdcbmltcG9ydCBsYXllclNvcnQgZnJvbSAnLi4vbGF5ZXJTb3J0J1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZWN0QlQobWUpIHtcbiAgICBsZXQgcmVjdEJUID0gd2luZG93LndvbmRlcl9jb250YWluZXJEb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJylcbiAgICByZWN0QlQuaWQgPSAna3NzUmVjdEJUJ1xuICAgIHJlY3RCVC5jbGFzc05hbWUgPSAna3NzVG9vbGJhckl0ZW1CVCdcbiAgICByZWN0QlQudGl0bGUgPSAn5pa55b2i5bel5YW3J1xuXG4gICAgbGV0IHJlY3RJbWcgPSB3aW5kb3cud29uZGVyX2NvbnRhaW5lckRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpXG4gICAgcmVjdEltZy5jbGFzc05hbWUgPSAna3NzVG9vbGJhckl0ZW1JbWcnXG4gICAgcmVjdEltZy5zcmMgPSBpbWdcbiAgICBtZS5yZWN0QlQgPSByZWN0QlRcblxuICAgIHJlY3RCVC5hcHBlbmRDaGlsZChyZWN0SW1nKVxuXG4gICAgcmVjdEJULmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgICBtZS5pc0VkaXQgPSB0cnVlXG5cbiAgICAgICAgaWYgKG1lLmN1cnJlbnRUb29sVHlwZSA9PT0gJ3JlY3QnKSB7XG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuXG4gICAgICAgIG1lLmN1cnJlbnRUb29sVHlwZSA9ICdyZWN0J1xuICAgICAgICBhY3RpdmVUb29sYmFySXRlbShyZWN0QlQpXG4gICAgICAgIGxheWVyU29ydChtZSwgJ2NhbnZhc0xheWVyJylcblxuICAgICAgICBpZiAobWUudG9vbG1vdXNlZG93bikge1xuICAgICAgICAgICAgbWUucmVjdGFuZ2xlQ2FudmFzLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIG1lLnRvb2xtb3VzZWRvd24pXG4gICAgICAgICAgICB3aW5kb3cud29uZGVyX2NvbnRhaW5lckRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIG1lLnRvb2xtb3VzZW1vdmUpXG4gICAgICAgICAgICB3aW5kb3cud29uZGVyX2NvbnRhaW5lckRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBtZS50b29sbW91c2V1cClcbiAgICAgICAgfVxuXG4gICAgICAgIG1lLnJlY3RhbmdsZUNhbnZhcy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCByZWN0TW91c2Vkb3duRXZlbnQpXG4gICAgICAgIG1lLnRvb2xtb3VzZWRvd24gPSByZWN0TW91c2Vkb3duRXZlbnRcblxuICAgICAgICBmdW5jdGlvbiByZWN0TW91c2Vkb3duRXZlbnQoZSkge1xuICAgICAgICAgICAgaWYgKGUuYnV0dG9uID09PSAyKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgc3RhcnRYID0gZS5jbGllbnRYIC0gbWUuc3RhcnRYXG4gICAgICAgICAgICBsZXQgc3RhcnRZID0gZS5jbGllbnRZIC0gbWUuc3RhcnRZXG5cbiAgICAgICAgICAgIHdpbmRvdy53b25kZXJfY29udGFpbmVyRG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgcmVjdE1vdXNlbW92ZUV2ZW50KVxuICAgICAgICAgICAgd2luZG93LndvbmRlcl9jb250YWluZXJEb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgcmVjdE1vdXNldXBFdmVudClcbiAgICAgICAgICAgIG1lLnRvb2xtb3VzZW1vdmUgPSByZWN0TW91c2Vtb3ZlRXZlbnRcbiAgICAgICAgICAgIG1lLnRvb2xtb3VzZXVwID0gcmVjdE1vdXNldXBFdmVudFxuXG4gICAgICAgICAgICBmdW5jdGlvbiByZWN0TW91c2Vtb3ZlRXZlbnQoZSkge1xuICAgICAgICAgICAgICAgIGxldCBjb250ZXh0ID0gbWUucmVjdGFuZ2xlQ2FudmFzLmdldENvbnRleHQoXCIyZFwiKVxuICAgICAgICAgICAgICAgIGNvbnRleHQuY2xlYXJSZWN0KDAsIDAsIG1lLndpZHRoLCBtZS5oZWlnaHQpXG4gICAgICAgICAgICAgICAgYmFja1RvUHJlSW1nKG1lKVxuXG4gICAgICAgICAgICAgICAgbGV0IGVuZFggPSBlLmNsaWVudFhcbiAgICAgICAgICAgICAgICBsZXQgZW5kWSA9IGUuY2xpZW50WVxuXG4gICAgICAgICAgICAgICAgaWYgKGVuZFggPCBtZS5zdGFydFgpIHtcbiAgICAgICAgICAgICAgICAgICAgZW5kWCA9IG1lLnN0YXJ0WFxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoZW5kWCA+IChtZS5zdGFydFggKyBtZS53aWR0aCkpIHtcbiAgICAgICAgICAgICAgICAgICAgZW5kWCA9IG1lLnN0YXJ0WCArIG1lLndpZHRoXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgZW5kWCAtPSBtZS5zdGFydFhcblxuICAgICAgICAgICAgICAgIGlmIChlbmRZIDwgbWUuc3RhcnRZKSB7XG4gICAgICAgICAgICAgICAgICAgIGVuZFkgPSBtZS5zdGFydFlcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGVuZFkgPiAobWUuc3RhcnRZICsgbWUuaGVpZ2h0KSkge1xuICAgICAgICAgICAgICAgICAgICBlbmRZID0gbWUuc3RhcnRZICsgbWUuaGVpZ2h0XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgZW5kWSAtPSBtZS5zdGFydFlcblxuICAgICAgICAgICAgICAgIGNvbnRleHQuYmVnaW5QYXRoKClcbiAgICAgICAgICAgICAgICBjb250ZXh0Lm1vdmVUbyhNYXRoLm1pbihzdGFydFgsIGVuZFgpICogbWUuc2NhbGUsIE1hdGgubWluKHN0YXJ0WSwgZW5kWSkgKiBtZS5zY2FsZSlcbiAgICAgICAgICAgICAgICBjb250ZXh0LmxpbmVUbyhNYXRoLm1heChzdGFydFgsIGVuZFgpICogbWUuc2NhbGUsIE1hdGgubWluKHN0YXJ0WSwgZW5kWSkgKiBtZS5zY2FsZSlcbiAgICAgICAgICAgICAgICBjb250ZXh0LmxpbmVUbyhNYXRoLm1heChzdGFydFgsIGVuZFgpICogbWUuc2NhbGUsIE1hdGgubWF4KHN0YXJ0WSwgZW5kWSkgKiBtZS5zY2FsZSlcbiAgICAgICAgICAgICAgICBjb250ZXh0LmxpbmVUbyhNYXRoLm1pbihzdGFydFgsIGVuZFgpICogbWUuc2NhbGUsIE1hdGgubWF4KHN0YXJ0WSwgZW5kWSkgKiBtZS5zY2FsZSlcbiAgICAgICAgICAgICAgICBjb250ZXh0LmxpbmVUbyhNYXRoLm1pbihzdGFydFgsIGVuZFgpICogbWUuc2NhbGUsIE1hdGgubWluKHN0YXJ0WSwgZW5kWSkgKiBtZS5zY2FsZSlcbiAgICAgICAgICAgICAgICBjb250ZXh0LmxpbmVXaWR0aCA9IDFcbiAgICAgICAgICAgICAgICBjb250ZXh0LnN0cm9rZVN0eWxlID0gbWUudG9vbGJhckNvbG9yXG4gICAgICAgICAgICAgICAgY29udGV4dC5zdHJva2UoKVxuICAgICAgICAgICAgICAgIGNvbnRleHQuY2xvc2VQYXRoKClcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZnVuY3Rpb24gcmVjdE1vdXNldXBFdmVudChlKSB7XG4gICAgICAgICAgICAgICAgd2luZG93LndvbmRlcl9jb250YWluZXJEb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCByZWN0TW91c2Vtb3ZlRXZlbnQpXG4gICAgICAgICAgICAgICAgd2luZG93LndvbmRlcl9jb250YWluZXJEb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgcmVjdE1vdXNldXBFdmVudClcbiAgICAgICAgICAgICAgICBtYWtlU25hcFNob290KG1lKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSlcblxuICAgIHJldHVybiByZWN0QlRcbn0iLCJpbXBvcnQgeyBjc3MsIHJlbW92ZSB9IGZyb20gJy4uLy4uL3V0aWwnXG5pbXBvcnQgbWFrZVNuYXBTaG9vdCBmcm9tICcuLi9tYWtlU25hcFNob290J1xuaW1wb3J0IGFjdGl2ZVRvb2xiYXJJdGVtIGZyb20gJy4uL2FjdGl2ZVRvb2xiYXJJdGVtJ1xuaW1wb3J0IGxheWVyU29ydCBmcm9tICcuLi9sYXllclNvcnQnXG5pbXBvcnQgaW1nIGZyb20gJy4uLy4uL2Fzc2V0cy9pbWdzL3RleHQucG5nJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0ZXh0QlQgKG1lKSB7XG4gICAgbGV0IHRleHRCVCA9IHdpbmRvdy53b25kZXJfY29udGFpbmVyRG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpXG4gICAgdGV4dEJULmlkID0gJ2tzc1RleHRCVCdcbiAgICB0ZXh0QlQuY2xhc3NOYW1lID0gJ2tzc1Rvb2xiYXJJdGVtQlQnXG4gICAgdGV4dEJULnRpdGxlID0gJ+Wtl+S9k+W3peWFtydcblxuICAgIGxldCB0ZXh0SW1nID0gd2luZG93LndvbmRlcl9jb250YWluZXJEb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKVxuICAgIHRleHRJbWcuY2xhc3NOYW1lID0gJ2tzc1Rvb2xiYXJJdGVtSW1nJ1xuICAgIHRleHRJbWcuc3JjID0gaW1nXG4gICAgbWUudGV4dEJUID0gdGV4dEJUXG5cbiAgICB0ZXh0QlQuYXBwZW5kQ2hpbGQodGV4dEltZylcblxuICAgIHRleHRCVC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgbWUuaXNFZGl0ID0gdHJ1ZVxuICAgICAgICBcbiAgICAgICAgaWYgKG1lLmN1cnJlbnRUb29sVHlwZSA9PT0gJ3RleHQnKSB7XG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuXG4gICAgICAgIG1lLmN1cnJlbnRUb29sVHlwZSA9ICd0ZXh0J1xuICAgICAgICBhY3RpdmVUb29sYmFySXRlbSh0ZXh0QlQpXG4gICAgICAgIGxheWVyU29ydChtZSwgJ3RleHRMYXllcicpXG5cbiAgICAgICAgaWYgKG1lLnRvb2xtb3VzZWRvd24pIHtcbiAgICAgICAgICAgIG1lLnJlY3RhbmdsZUNhbnZhcy5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBtZS50b29sbW91c2Vkb3duKVxuICAgICAgICAgICAgd2luZG93LndvbmRlcl9jb250YWluZXJEb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBtZS50b29sbW91c2Vtb3ZlKVxuICAgICAgICAgICAgd2luZG93LndvbmRlcl9jb250YWluZXJEb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgbWUudG9vbG1vdXNldXApXG4gICAgICAgIH1cblxuICAgICAgICBsZXQgaXNGb2N1cyA9IGZhbHNlXG4gICAgICAgIGxldCBpc0lubmVyID0gZmFsc2VcblxuICAgICAgICBpZiAoIW1lLnRleHRDbGlja0V2ZW50KSB7XG4gICAgICAgICAgICBtZS50ZXh0Q2xpY2tFdmVudCA9IHRleHRDbGlja0V2ZW50XG5cbiAgICAgICAgICAgIGZ1bmN0aW9uIHRleHRDbGlja0V2ZW50IChlKSB7XG4gICAgICAgICAgICAgICAgaWYgKGlzRm9jdXMpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGxldCBzdGFydFggPSBlLmNsaWVudFggLSBtZS5zdGFydFhcbiAgICAgICAgICAgICAgICBsZXQgc3RhcnRZID0gZS5jbGllbnRZIC0gbWUuc3RhcnRZXG4gICAgICAgICAgICAgICAgbGV0IG1pbldpZHRoID0gNjBcbiAgICAgICAgICAgICAgICBsZXQgbWluSGVpZ2h0ID0gMzZcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBsZXQgdGV4dGFyZWEgPSB3aW5kb3cud29uZGVyX2NvbnRhaW5lckRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgICAgICAgICAgdGV4dGFyZWEuY2xhc3NOYW1lID0gJ2tzc1RleHRhcmVhJ1xuICAgICAgICAgICAgICAgIHRleHRhcmVhLmNvbnRlbnRFZGl0YWJsZSA9IHRydWVcbiAgICAgICAgICAgICAgICB0ZXh0YXJlYS50YWJJbmRleCA9IC0xXG4gICAgICAgICAgICAgICAgbGV0IG9mZnNldFggPSAwXG4gICAgICAgICAgICAgICAgbGV0IG9mZnNldFkgPSAwXG4gICAgICAgICAgICAgICAgaWYgKG1lLndpZHRoIC0gc3RhcnRYIDwgbWluV2lkdGgpIHtcbiAgICAgICAgICAgICAgICAgICAgb2Zmc2V0WCA9IG1pbldpZHRoIC0gKG1lLndpZHRoIC0gc3RhcnRYKVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNzcyh0ZXh0YXJlYSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgJ21pbi13aWR0aCc6IG1pbldpZHRoICsgJ3B4J1xuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChtZS5oZWlnaHQgLSBzdGFydFkgPCBtaW5IZWlnaHQpIHtcbiAgICAgICAgICAgICAgICAgICAgb2Zmc2V0WSA9IG1pbkhlaWdodCAtIChtZS5oZWlnaHQgLSBzdGFydFkpXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY3NzKHRleHRhcmVhLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAnbWluLWhlaWdodCc6IG1pbkhlaWdodCArICdweCdcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBjc3ModGV4dGFyZWEsIHtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICAgICAgICAgICAgICAgIHRvcDogc3RhcnRZIC0gb2Zmc2V0WSArICdweCcsXG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IHN0YXJ0WCAtIG9mZnNldFggKyAncHgnLFxuICAgICAgICAgICAgICAgICAgICAnbWF4LXdpZHRoJzogbWUud2lkdGggLSBzdGFydFggKyAncHgnLFxuICAgICAgICAgICAgICAgICAgICAnbWF4LWhlaWdodCc6IG1lLmhlaWdodCAtIHN0YXJ0WSArICdweCdcbiAgICAgICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICAgICAgbWUua3NzVGV4dExheWVyLmFwcGVuZENoaWxkKHRleHRhcmVhKVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHRleHRhcmVhLmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3VzJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBpc0ZvY3VzID0gdHJ1ZVxuICAgICAgICAgICAgICAgICAgICBjc3ModGV4dGFyZWEsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBtZS50b29sYmFyQ29sb3JcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICAgICAgdGV4dGFyZWEuYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgICAgIGlzRm9jdXMgPSBmYWxzZVxuICAgICAgICAgICAgICAgICAgICBpZiAodGV4dGFyZWEuaW5uZXJIVE1MID09PSAnJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVtb3ZlKHRleHRhcmVhKVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdmFyIGNvbnRleHQgPSBtZS5yZWN0YW5nbGVDYW52YXMuZ2V0Q29udGV4dCgnMmQnKVxuICAgICAgICAgICAgICAgICAgICBjb250ZXh0LmZvbnQ9YCR7MTYgKiBtZS5zY2FsZX1weCDlrovkvZNgXG4gICAgICAgICAgICAgICAgICAgIGxldCB0ZXh0UGVyTGluZSA9IHRleHRhcmVhLmlubmVySFRNTC5zcGxpdCgnPGRpdj4nKVxuICAgICAgICAgICAgICAgICAgICBsZXQgbmV3VGV4dFBlckxpbmUgPSBbXVxuICAgICAgICAgICAgICAgICAgICB0ZXh0UGVyTGluZS5mb3JFYWNoKChpdCwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCB2YWwgPSBpdFxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGluZGV4ID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbCA9IGl0LnJlcGxhY2UoJzwvZGl2PicsICcnKVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHJlZyA9IC8mbmJzcDt8XFw8YnJcXD4vZ1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsID0gdmFsLnJlcGxhY2UocmVnLCAnICAnKSAgXG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBtYXhXaWR0aCA9IChtZS53aWR0aCAtIHN0YXJ0WCkgPiA2MCA/IChtZS53aWR0aCAtIHN0YXJ0WCkgOiA2MCBcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCB3aWR0aCA9IDBcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBzdHIgPSAnJ1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBBcnJheS5wcm90b3R5cGUuZm9yRWFjaC5jYWxsKHZhbCwgKG9iaiwgSW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aCArPSBjb250ZXh0Lm1lYXN1cmVUZXh0KG9iaikud2lkdGhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAod2lkdGggPj0gbWF4V2lkdGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGggPSBjb250ZXh0Lm1lYXN1cmVUZXh0KG9iaikud2lkdGhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3VGV4dFBlckxpbmUucHVzaChzdHIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0ciA9IG9ialxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0ciArPSBvYmpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KSBcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld1RleHRQZXJMaW5lLnB1c2goc3RyKVxuICAgICAgICAgICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICAgICAgICAgIGNvbnRleHQuZmlsbFN0eWxlID0gbWUudG9vbGJhckNvbG9yXG4gICAgICAgICAgICAgICAgICAgIG5ld1RleHRQZXJMaW5lLmZvckVhY2goKGl0LCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRleHQuZmlsbFRleHQoaXQsIChzdGFydFggLSBvZmZzZXRYKSAqIG1lLnNjYWxlLCAoc3RhcnRZIC0gb2Zmc2V0WSArIDE1ICsgKGluZGV4ICogMTgpKSAqIG1lLnNjYWxlKVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgbWFrZVNuYXBTaG9vdChtZSlcbiAgICAgICAgICAgICAgICAgICAgcmVtb3ZlKHRleHRhcmVhKVxuICAgICAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgdGV4dGFyZWEuZm9jdXMoKVxuICAgICAgICAgICAgICAgIH0sIDApXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIG1lLmtzc1RleHRMYXllci5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBtZS50ZXh0Q2xpY2tFdmVudClcbiAgICAgICAgbWUua3NzVGV4dExheWVyLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIG1lLnRleHRDbGlja0V2ZW50KVxuICAgIH0pXG5cbiAgICByZXR1cm4gdGV4dEJUXG59IiwiaW1wb3J0IHsgY3NzLCB0eXBlQ2hlY2tpbmcgfSBmcm9tICcuLi91dGlsJ1xuXG5pbXBvcnQgY29tcGxldGVCVCBmcm9tICcuL3Rvb2wvY29tcGxldGVCVCdcbmltcG9ydCBxdWl0QlQgZnJvbSAnLi90b29sL3F1aXRCVCdcbmltcG9ydCBhcnJvd0JUIGZyb20gJy4vdG9vbC9hcnJvd0JUJ1xuaW1wb3J0IGJhY2tCVCBmcm9tICcuL3Rvb2wvYmFja0JUJ1xuaW1wb3J0IGRyYXdMaW5lQlQgZnJvbSAnLi90b29sL2RyYXdMaW5lQlQnXG5pbXBvcnQgcmVjdEJUIGZyb20gJy4vdG9vbC9yZWN0QlQnXG5pbXBvcnQgZWxsaXBzZUJUIGZyb20gJy4vdG9vbC9lbGxpcHNlQlQnXG5pbXBvcnQgY29sb3JCVCBmcm9tICcuL3Rvb2wvY29sb3JCVCdcbmltcG9ydCB0ZXh0QlQgZnJvbSAnLi90b29sL3RleHRCVCdcblxuaW1wb3J0IHRvb2xiYXJNaWRkbGVBcmVhIGZyb20gJy4vdG9vbGJhck1pZGRsZUFyZWEnXG5pbXBvcnQgdG9vbGJhclBvc2l0aW9uIGZyb20gJy4vdG9vbGJhclBvc2l0aW9uJ1xuXG5jb25zdCB0b29sQ29uZmlnID0gW1xuICAgIHtcbiAgICAgICAgY29tcG9uZW50OiBjb21wbGV0ZUJULFxuICAgICAgICBzaG93OiAnY29tcGxldGUnLFxuICAgICAgICB3aWR0aDogNDBcbiAgICB9LFxuICAgIHtcbiAgICAgICAgY29tcG9uZW50OiBxdWl0QlQsXG4gICAgICAgIHNob3c6ICdxdWl0JyxcbiAgICAgICAgd2lkdGg6IDMwXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGNvbXBvbmVudDogYmFja0JULFxuICAgICAgICBzaG93OiAnYmFjaycsXG4gICAgICAgIHdpZHRoOiAzMFxuICAgIH0sXG4gICAge1xuICAgICAgICBjb21wb25lbnQ6IGFycm93QlQsXG4gICAgICAgIHNob3c6ICdhcnJvdycsXG4gICAgICAgIHdpZHRoOiAzMFxuICAgIH0sXG4gICAge1xuICAgICAgICBjb21wb25lbnQ6IGRyYXdMaW5lQlQsXG4gICAgICAgIHNob3c6ICdkcmF3TGluZScsXG4gICAgICAgIHdpZHRoOiAzMFxuICAgIH0sXG4gICAge1xuICAgICAgICBjb21wb25lbnQ6IHJlY3RCVCxcbiAgICAgICAgc2hvdzogJ3JlY3QnLFxuICAgICAgICB3aWR0aDogMzBcbiAgICB9LFxuICAgIHtcbiAgICAgICAgY29tcG9uZW50OiBlbGxpcHNlQlQsXG4gICAgICAgIHNob3c6ICdlbGxpcHNlJyxcbiAgICAgICAgd2lkdGg6IDMwXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGNvbXBvbmVudDogdGV4dEJULFxuICAgICAgICBzaG93OiAndGV4dCcsXG4gICAgICAgIHdpZHRoOiAzMFxuICAgIH0sXG4gICAge1xuICAgICAgICBjb21wb25lbnQ6IGNvbG9yQlQsXG4gICAgICAgIHNob3c6ICdjb2xvcicsXG4gICAgICAgIHdpZHRoOiAzMFxuICAgIH1cbl1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlVG9vbGJhciAobWUpIHtcbiAgICBsZXQgdG9vbGJhciA9IHdpbmRvdy53b25kZXJfY29udGFpbmVyRG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICB0b29sYmFyLmlkID0gJ2tzc1Rvb2xiYXInXG4gICAgXG4gICAgaWYgKHR5cGVDaGVja2luZyhtZS50b29sU2hvdykgIT09ICdbb2JqZWN0IE9iamVjdF0nKSB7XG4gICAgICAgIG1lLnRvb2xTaG93ID0ge31cbiAgICB9XG4gICAgbGV0IHRvb2xiYXJXaWR0aCA9IDBcbiAgICBcbiAgICB0b29sQ29uZmlnLmZvckVhY2goKGl0KSA9PiB7XG4gICAgICAgIGlmIChtZS50b29sU2hvd1tpdC5zaG93XSAhPT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHRvb2xiYXIuYXBwZW5kQ2hpbGQoaXQuY29tcG9uZW50KG1lKSlcbiAgICAgICAgICAgIHRvb2xiYXJXaWR0aCArPSBpdC53aWR0aFxuICAgICAgICB9XG4gICAgfSlcblxuICAgIHRvb2xiYXJXaWR0aCArPSAxMFxuICAgIG1lLnRvb2xiYXJXaWR0aCA9IHRvb2xiYXJXaWR0aFxuICAgIGNzcyh0b29sYmFyLCB7XG4gICAgICAgIHRvcDogbWUuaGVpZ2h0ICsgbWUudG9vbGJhck1hcmdpblRvcCArICdweCcsXG4gICAgICAgIHdpZHRoOiB0b29sYmFyV2lkdGggKyAncHgnLFxuICAgICAgICBoZWlnaHQ6IG1lLnRvb2xiYXJIZWlnaHQgKyAncHgnXG4gICAgfSlcblxuICAgIHRvb2xiYXJQb3NpdGlvbihtZSwgbWUud2lkdGgsIG1lLmhlaWdodCwgbWUuc3RhcnRZLCBtZS5zdGFydFgsIHRvb2xiYXIpXG5cbiAgICAvLyBtZS50b29sU2hvdy5jb21wbGV0ZSAhPT0gZmFsc2UgJiYgdG9vbGJhci5hcHBlbmRDaGlsZChjb21wbGV0ZUJUKG1lKSlcbiAgICAvLyBtZS50b29sU2hvdy5iYWNrICE9PSBmYWxzZSAmJiB0b29sYmFyLmFwcGVuZENoaWxkKGJhY2tCVChtZSkpXG4gICAgLy8gbWUudG9vbFNob3cuYXJyb3cgIT09IGZhbHNlICYmIHRvb2xiYXIuYXBwZW5kQ2hpbGQoYXJyb3dCVChtZSkpXG4gICAgLy8gbWUudG9vbFNob3cuZHJhd0xpbmUgIT09IGZhbHNlICYmIHRvb2xiYXIuYXBwZW5kQ2hpbGQoZHJhd0xpbmVCVChtZSkpXG4gICAgLy8gbWUudG9vbFNob3cucmVjdCAhPT0gZmFsc2UgJiYgdG9vbGJhci5hcHBlbmRDaGlsZChyZWN0QlQobWUpKVxuICAgIC8vIG1lLnRvb2xTaG93LmVsbGlwc2UgIT09IGZhbHNlICYmIHRvb2xiYXIuYXBwZW5kQ2hpbGQoZWxsaXBzZUJUKG1lKSlcbiAgICAvLyBtZS50b29sU2hvdy50ZXh0ICE9PSBmYWxzZSAmJiB0b29sYmFyLmFwcGVuZENoaWxkKHRleHRCVChtZSkpXG4gICAgLy8gbWUudG9vbFNob3cuY29sb3IgIT09IGZhbHNlICYmIHRvb2xiYXIuYXBwZW5kQ2hpbGQoY29sb3JCVChtZSkpXG4gICAgXG4gICAgdG9vbGJhci5hcHBlbmRDaGlsZCh0b29sYmFyTWlkZGxlQXJlYShtZSkpXG5cbiAgICBtZS5rc3NTY3JlZW5TaG90V3JhcHBlci5hcHBlbmRDaGlsZCh0b29sYmFyKVxuXG4gICAgcmV0dXJuIHRvb2xiYXJcbn0iLCJpbXBvcnQgeyBjc3MgfSBmcm9tICcuLi91dGlsJ1xuaW1wb3J0IGNvbG9yQm9hcmQgZnJvbSAnLi9jb2xvckJvYXJkJ1xuaW1wb3J0IHNldExpbmVXaWR0aCBmcm9tICcuL3NldExpbmVXaWR0aCdcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdG9vbGJhck1pZGRsZUFyZWEgKG1lKSB7XG4gICAgbGV0IGNsaWVudEhlaWdodCA9IHdpbmRvdy53b25kZXJfY29udGFpbmVyRG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodFxuICAgIGxldCB0b29sYmFyTWlkZGxlQXJlYSA9IHdpbmRvdy53b25kZXJfY29udGFpbmVyRG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpXG4gICAgdG9vbGJhck1pZGRsZUFyZWEuaWQgPSAna3NzVG9vbGJhck1pZGRsZUFyZWEnXG5cbiAgICB0b29sYmFyTWlkZGxlQXJlYS5hcHBlbmRDaGlsZChjb2xvckJvYXJkKG1lKSlcbiAgICB0b29sYmFyTWlkZGxlQXJlYS5hcHBlbmRDaGlsZChzZXRMaW5lV2lkdGgobWUpKVxuXG4gICAgcmV0dXJuIHRvb2xiYXJNaWRkbGVBcmVhXG59IiwiaW1wb3J0IHsgY3NzIH0gZnJvbSAnLi4vdXRpbCdcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdG9vbGJhclBvc2l0aW9uIChtZSwgd2lkdGgsIGhlaWdodCwgdG9wLCBsZWZ0LCB0b29sYmFyKSB7XG4gICAgbGV0IGNsaWVudEhlaWdodCA9IHdpbmRvdy53b25kZXJfY29udGFpbmVyRG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodFxuICAgIGxldCBleGNlZWQgPSBtZS50b29sYmFyV2lkdGggLSB3aWR0aCAtIGxlZnRcbiAgICAgICBcbiAgICBpZiAoZXhjZWVkID4gMCkge1xuICAgICAgICBjc3ModG9vbGJhciwge1xuICAgICAgICAgICAgcmlnaHQ6ICctJyArIGV4Y2VlZCArICdweCdcbiAgICAgICAgfSlcbiAgICB9IGVsc2Uge1xuICAgICAgICBjc3ModG9vbGJhciwge1xuICAgICAgICAgICAgcmlnaHQ6IDAgKyAncHgnXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgbGV0IGJvdHRvbVN1cnBsdXMgPSBjbGllbnRIZWlnaHQgLSB0b3AgLSBoZWlnaHQgLSBtZS50b29sYmFyTWFyZ2luVG9wIC0gbWUudG9vbGJhckhlaWdodFxuXG4gICAgaWYgKGJvdHRvbVN1cnBsdXMgPCAwKSB7XG4gICAgICAgIGlmICh0b3AgPj0gMzUpIHtcbiAgICAgICAgICAgIGNzcyh0b29sYmFyLCB7XG4gICAgICAgICAgICAgICAgdG9wOiAnLScgKyAobWUudG9vbGJhckhlaWdodCArIG1lLnRvb2xiYXJNYXJnaW5Ub3ApICsgJ3B4J1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNzcyh0b29sYmFyLCB7XG4gICAgICAgICAgICAgICAgdG9wOiBtZS50b29sYmFyTWFyZ2luVG9wICsgJ3B4J1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgIGNzcyh0b29sYmFyLCB7XG4gICAgICAgICAgICB0b3A6IGhlaWdodCArIG1lLnRvb2xiYXJNYXJnaW5Ub3AgKyAncHgnXG4gICAgICAgIH0pXG4gICAgfVxufSIsImV4cG9ydCBmdW5jdGlvbiBjc3MoZG9tLCBvYmopIHtcbiAgICBmb3IgKGxldCBpIGluIG9iaikge1xuICAgICAgICBkb20uc3R5bGVbaV0gPSBvYmpbaV1cbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmUoZG9tKSB7XG4gICAgLy8gaWYgKGRvbSBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSB7XG4gICAgLy8gICAgIGRvbS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGRvbSlcbiAgICAvLyB9IGVsc2UgaWYgKGRvbSBpbnN0YW5jZW9mIEhUTUxDb2xsZWN0aW9uKSB7XG4gICAgLy8gICAgIEFycmF5LnByb3RvdHlwZS5mb3JFYWNoLmNhbGwoZG9tLCBmdW5jdGlvbiAob2JqKSB7XG4gICAgLy8gICAgICAgICBvYmoucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChvYmopXG4gICAgLy8gICAgIH0pXG4gICAgLy8gfVxuXG4gICAgaWYgKCEhIWRvbSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKCEhZG9tLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQpIHtcbiAgICAgICAgZG9tLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZG9tKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIEFycmF5LnByb3RvdHlwZS5mb3JFYWNoLmNhbGwoZG9tLCBmdW5jdGlvbiAob2JqKSB7XG4gICAgICAgICAgICBvYmoucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChvYmopXG4gICAgICAgIH0pXG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZG9tVHlwZShkb20pIHtcbiAgICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGRvbSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGhhc0NsYXNzKG9iaiwgY2xzKSB7XG4gICAgcmV0dXJuIG9iai5jbGFzc05hbWUubWF0Y2gobmV3IFJlZ0V4cCgnKFxcXFxzfF4pJyArIGNscyArICcoXFxcXHN8JCknKSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZENsYXNzKG9iaiwgY2xzKSB7XG4gICAgaWYgKCFoYXNDbGFzcyhvYmosIGNscykpIHtcbiAgICAgICAgb2JqLmNsYXNzTmFtZSArPSBcIiBcIiArIGNsc1xuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZUNsYXNzKG9iaiwgY2xzKSB7XG4gICAgaWYgKGhhc0NsYXNzKG9iaiwgY2xzKSkge1xuICAgICAgICBsZXQgcmVnID0gbmV3IFJlZ0V4cCgnKFxcXFxzfF4pJyArIGNscyArICcoXFxcXHN8JCknKTtcbiAgICAgICAgb2JqLmNsYXNzTmFtZSA9IG9iai5jbGFzc05hbWUucmVwbGFjZShyZWcsICcgJyk7XG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gY29tcHV0ZWQob2JqLCBiYXNlUHJvcGVydHksIGNoYW5nZVByb3BlcnR5LCBjYikge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGJhc2VQcm9wZXJ0eSwge1xuICAgICAgICBzZXQ6IGZ1bmN0aW9uICh2YWwpIHtcbiAgICAgICAgICAgIGNoYW5nZVByb3BlcnR5LmZvckVhY2goKGl0LCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgIGNiW2luZGV4XShvYmosIHZhbCwgY2hhbmdlUHJvcGVydHlbaW5kZXhdKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH0pXG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0eXBlQ2hlY2tpbmcodmFsKSB7XG4gICAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWwpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsb2FkQ3NzQ29kZShjb2RlKSB7XG4gICAgdmFyIHN0eWxlID0gd2luZG93LndvbmRlcl9jb250YWluZXJEb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICAgIHN0eWxlLnR5cGUgPSAndGV4dC9jc3MnO1xuICAgIHN0eWxlLnJlbCA9ICdzdHlsZXNoZWV0JztcbiAgICB0cnkge1xuICAgICAgICAvL2ZvciBDaHJvbWUgRmlyZWZveCBPcGVyYSBTYWZhcmlcbiAgICAgICAgc3R5bGUuYXBwZW5kQ2hpbGQod2luZG93LndvbmRlcl9jb250YWluZXJEb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjb2RlKSk7XG4gICAgfSBjYXRjaCAoZXgpIHtcbiAgICAgICAgLy9mb3IgSUVcbiAgICAgICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY29kZTtcbiAgICB9XG4gICAgdmFyIGhlYWQgPSB3aW5kb3cud29uZGVyX2NvbnRhaW5lckRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdoZWFkJylbMF07XG4gICAgaGVhZC5hcHBlbmRDaGlsZChzdHlsZSk7XG59Il0sInNvdXJjZVJvb3QiOiIifQ==
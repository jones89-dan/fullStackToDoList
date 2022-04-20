/******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "/packs/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/javascript/packs/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/javascript/packs/index.js":
/*!***************************************!*\
  !*** ./app/javascript/packs/index.js ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var src_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/index */ "./app/javascript/src/index.js");
/* harmony import */ var src_index__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(src_index__WEBPACK_IMPORTED_MODULE_0__);


/***/ }),

/***/ "./app/javascript/src/index.js":
/*!*************************************!*\
  !*** ./app/javascript/src/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: /Users/djones/altCademy/Ruby/fswd-todolist/app/javascript/src/index.js: Unexpected token (25:23)\n\n  23 |\n  24 |   $(document).on('click', '.delete', function () {\n> 25 |     deleteTask($(delete).data(\"id\"));\n     |                        ^\n  26 |   });\n  27 |\n  28 |   console.log(response);\n    at instantiate (/Users/djones/altCademy/Ruby/fswd-todolist/node_modules/@babel/parser/lib/index.js:72:32)\n    at constructor (/Users/djones/altCademy/Ruby/fswd-todolist/node_modules/@babel/parser/lib/index.js:358:12)\n    at Parser.raise (/Users/djones/altCademy/Ruby/fswd-todolist/node_modules/@babel/parser/lib/index.js:3334:19)\n    at Parser.unexpected (/Users/djones/altCademy/Ruby/fswd-todolist/node_modules/@babel/parser/lib/index.js:3372:16)\n    at Parser.parseExprAtom (/Users/djones/altCademy/Ruby/fswd-todolist/node_modules/@babel/parser/lib/index.js:13042:22)\n    at Parser.parseExprSubscripts (/Users/djones/altCademy/Ruby/fswd-todolist/node_modules/@babel/parser/lib/index.js:12567:23)\n    at Parser.parseUpdate (/Users/djones/altCademy/Ruby/fswd-todolist/node_modules/@babel/parser/lib/index.js:12546:21)\n    at Parser.parseMaybeUnary (/Users/djones/altCademy/Ruby/fswd-todolist/node_modules/@babel/parser/lib/index.js:12517:23)\n    at Parser.parseMaybeUnary (/Users/djones/altCademy/Ruby/fswd-todolist/node_modules/@babel/parser/lib/index.js:12494:28)\n    at Parser.parseMaybeUnaryOrPrivate (/Users/djones/altCademy/Ruby/fswd-todolist/node_modules/@babel/parser/lib/index.js:12311:61)\n    at Parser.parseExprOps (/Users/djones/altCademy/Ruby/fswd-todolist/node_modules/@babel/parser/lib/index.js:12318:23)\n    at Parser.parseMaybeConditional (/Users/djones/altCademy/Ruby/fswd-todolist/node_modules/@babel/parser/lib/index.js:12288:23)\n    at Parser.parseMaybeAssign (/Users/djones/altCademy/Ruby/fswd-todolist/node_modules/@babel/parser/lib/index.js:12241:21)\n    at /Users/djones/altCademy/Ruby/fswd-todolist/node_modules/@babel/parser/lib/index.js:12199:39\n    at Parser.allowInAnd (/Users/djones/altCademy/Ruby/fswd-todolist/node_modules/@babel/parser/lib/index.js:14265:12)\n    at Parser.parseMaybeAssignAllowIn (/Users/djones/altCademy/Ruby/fswd-todolist/node_modules/@babel/parser/lib/index.js:12199:17)\n    at Parser.parseExprListItem (/Users/djones/altCademy/Ruby/fswd-todolist/node_modules/@babel/parser/lib/index.js:13970:18)\n    at Parser.parseCallExpressionArguments (/Users/djones/altCademy/Ruby/fswd-todolist/node_modules/@babel/parser/lib/index.js:12793:22)\n    at Parser.parseCoverCallAndAsyncArrowHead (/Users/djones/altCademy/Ruby/fswd-todolist/node_modules/@babel/parser/lib/index.js:12690:29)\n    at Parser.parseSubscript (/Users/djones/altCademy/Ruby/fswd-todolist/node_modules/@babel/parser/lib/index.js:12615:19)\n    at Parser.parseSubscripts (/Users/djones/altCademy/Ruby/fswd-todolist/node_modules/@babel/parser/lib/index.js:12584:19)\n    at Parser.parseExprSubscripts (/Users/djones/altCademy/Ruby/fswd-todolist/node_modules/@babel/parser/lib/index.js:12573:17)\n    at Parser.parseUpdate (/Users/djones/altCademy/Ruby/fswd-todolist/node_modules/@babel/parser/lib/index.js:12546:21)\n    at Parser.parseMaybeUnary (/Users/djones/altCademy/Ruby/fswd-todolist/node_modules/@babel/parser/lib/index.js:12517:23)\n    at Parser.parseMaybeUnaryOrPrivate (/Users/djones/altCademy/Ruby/fswd-todolist/node_modules/@babel/parser/lib/index.js:12311:61)\n    at Parser.parseExprOps (/Users/djones/altCademy/Ruby/fswd-todolist/node_modules/@babel/parser/lib/index.js:12318:23)\n    at Parser.parseMaybeConditional (/Users/djones/altCademy/Ruby/fswd-todolist/node_modules/@babel/parser/lib/index.js:12288:23)\n    at Parser.parseMaybeAssign (/Users/djones/altCademy/Ruby/fswd-todolist/node_modules/@babel/parser/lib/index.js:12241:21)\n    at /Users/djones/altCademy/Ruby/fswd-todolist/node_modules/@babel/parser/lib/index.js:12199:39\n    at Parser.allowInAnd (/Users/djones/altCademy/Ruby/fswd-todolist/node_modules/@babel/parser/lib/index.js:14265:12)");

/***/ })

/******/ });
//# sourceMappingURL=index-0be39f22d5f40594df16.js.map
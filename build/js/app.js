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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "js/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nfunction sayHello() {\n  if (navigator.userAgent.toLowerCase().indexOf('chrome') > -1) {\n    var args = ['\\n %c Made with ❤️ by Rivercode %c http://www.riverco.de/ %c %c 🐳 \\n\\n', 'border: 1px solid #000;color: #000; background: #fff001; padding:5px 0;', 'color: #fff; background: #1c1c1c; padding:5px 0;border: 1px solid #000;', 'background: #fff; padding:5px 0;', 'color: #b0976d; background: #fff; padding:5px 0;'];\n    window.console.log.apply(console, args);\n  } else if (window.console) {\n    window.console.log('Made with love ❤️ Riverco.de - http://www.riverco.de/  ❤️');\n  }\n}\nmodule.exports = sayHello;\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvanMvbGliL3NheUhlbGxvLmpzP2E2MmQiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gc2F5SGVsbG8oKSB7XHJcbiAgaWYgKG5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKS5pbmRleE9mKCdjaHJvbWUnKSA+IC0xKSB7XHJcbiAgICB2YXIgYXJncyA9IFsnXFxuICVjIE1hZGUgd2l0aCDinaTvuI8gYnkgUml2ZXJjb2RlICVjIGh0dHA6Ly93d3cucml2ZXJjby5kZS8gJWMgJWMg8J+QsyBcXG5cXG4nLCAnYm9yZGVyOiAxcHggc29saWQgIzAwMDtjb2xvcjogIzAwMDsgYmFja2dyb3VuZDogI2ZmZjAwMTsgcGFkZGluZzo1cHggMDsnLCAnY29sb3I6ICNmZmY7IGJhY2tncm91bmQ6ICMxYzFjMWM7IHBhZGRpbmc6NXB4IDA7Ym9yZGVyOiAxcHggc29saWQgIzAwMDsnLCAnYmFja2dyb3VuZDogI2ZmZjsgcGFkZGluZzo1cHggMDsnLCAnY29sb3I6ICNiMDk3NmQ7IGJhY2tncm91bmQ6ICNmZmY7IHBhZGRpbmc6NXB4IDA7J107XHJcbiAgICB3aW5kb3cuY29uc29sZS5sb2cuYXBwbHkoY29uc29sZSwgYXJncyk7XHJcbiAgfSBlbHNlIGlmICh3aW5kb3cuY29uc29sZSkge1xyXG4gICAgd2luZG93LmNvbnNvbGUubG9nKCdNYWRlIHdpdGggbG92ZSDinaTvuI8gUml2ZXJjby5kZSAtIGh0dHA6Ly93d3cucml2ZXJjby5kZS8gIOKdpO+4jycpO1xyXG4gIH1cclxufVxyXG5tb2R1bGUuZXhwb3J0cyA9IHNheUhlbGxvO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2pzL2xpYi9zYXlIZWxsby5qcyJdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _sayHello = __webpack_require__(0);\n\nvar _sayHello2 = _interopRequireDefault(_sayHello);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n(0, _sayHello2.default)();\n\n// document.querySelector('.lang-changer').addEventListener('mouseover', (e) => {\n//   document.querySelector('.lang-changer').classList.toggle('lang-changer--open');\n// });\n\nvar video = document.getElementById('video');\nvar playing = false;\n\ndocument.querySelector('.tv__play').addEventListener('click', function (e) {\n  if (playing) {\n    video.pause();\n  } else {\n    video.play();\n  }\n  playing = !playing;\n});\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvanMvYXBwLmpzPzcxNmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHNheUhlbGxvIGZyb20gJy4vbGliL3NheUhlbGxvLmpzJztcclxuXHJcbnNheUhlbGxvKCk7XHJcblxyXG4vLyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubGFuZy1jaGFuZ2VyJykuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywgKGUpID0+IHtcclxuLy8gICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubGFuZy1jaGFuZ2VyJykuY2xhc3NMaXN0LnRvZ2dsZSgnbGFuZy1jaGFuZ2VyLS1vcGVuJyk7XHJcbi8vIH0pO1xyXG5cclxuY29uc3QgdmlkZW8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndmlkZW8nKTtcclxubGV0IHBsYXlpbmcgPSBmYWxzZTtcclxuXHJcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50dl9fcGxheScpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XHJcbiAgaWYgKHBsYXlpbmcpIHtcclxuICAgIHZpZGVvLnBhdXNlKCk7XHJcbiAgfSBlbHNlIHtcclxuICAgIHZpZGVvLnBsYXkoKTtcclxuICB9XHJcbiAgcGxheWluZyA9ICFwbGF5aW5nO1xyXG59KTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9qcy9hcHAuanMiXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFDQTs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///1\n");

/***/ })
/******/ ]);
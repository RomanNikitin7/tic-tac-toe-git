"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/profile/profile.jsx":
/*!****************************************!*\
  !*** ./components/profile/profile.jsx ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Profile: function() { return /* binding */ Profile; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _avatar_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./avatar.png */ \"./components/profile/avatar.png\");\n/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! clsx */ \"./node_modules/clsx/dist/clsx.mjs\");\n\n\n\n\nfunction Profile(param) {\n    let { className, imgSrc = _avatar_png__WEBPACK_IMPORTED_MODULE_2__[\"default\"], name, rating } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (0,clsx__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(className, \"flex gap-x-2 items-center text-teal-600\"),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                src: imgSrc,\n                alt: \"avatar\",\n                width: 48,\n                height: 48\n            }, void 0, false, {\n                fileName: \"D:\\\\react course\\\\tic-tac-toe-git\\\\components\\\\profile\\\\profile.jsx\",\n                lineNumber: 8,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"text-lg leading-tight truncate\",\n                        children: name\n                    }, void 0, false, {\n                        fileName: \"D:\\\\react course\\\\tic-tac-toe-git\\\\components\\\\profile\\\\profile.jsx\",\n                        lineNumber: 10,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"text-slate-400 text-xs leading-tight\",\n                        children: [\n                            \"Рейтинг: \",\n                            rating\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\react course\\\\tic-tac-toe-git\\\\components\\\\profile\\\\profile.jsx\",\n                        lineNumber: 11,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\react course\\\\tic-tac-toe-git\\\\components\\\\profile\\\\profile.jsx\",\n                lineNumber: 9,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\react course\\\\tic-tac-toe-git\\\\components\\\\profile\\\\profile.jsx\",\n        lineNumber: 7,\n        columnNumber: 5\n    }, this);\n}\n_c = Profile;\nvar _c;\n$RefreshReg$(_c, \"Profile\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3Byb2ZpbGUvcHJvZmlsZS5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBK0I7QUFDTTtBQUNiO0FBRWpCLFNBQVNHLFFBQVEsS0FBK0M7UUFBL0MsRUFBRUMsU0FBUyxFQUFFQyxTQUFTSixtREFBUyxFQUFFSyxJQUFJLEVBQUVDLE1BQU0sRUFBRSxHQUEvQztJQUN0QixxQkFDRSw4REFBQ0M7UUFBSUosV0FBV0YsZ0RBQUlBLENBQUNFLFdBQVc7OzBCQUM5Qiw4REFBQ0osbURBQUtBO2dCQUFDUyxLQUFLSjtnQkFBUUssS0FBSTtnQkFBU0MsT0FBTztnQkFBSUMsUUFBUTs7Ozs7OzBCQUNwRCw4REFBQ0o7O2tDQUNDLDhEQUFDQTt3QkFBSUosV0FBVTtrQ0FBa0NFOzs7Ozs7a0NBQ2pELDhEQUFDRTt3QkFBSUosV0FBVTs7NEJBQXVDOzRCQUMxQ0c7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLcEI7S0FaZ0JKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvcHJvZmlsZS9wcm9maWxlLmpzeD83NDg3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xyXG5pbXBvcnQgYXZhdGFyU3JjIGZyb20gXCIuL2F2YXRhci5wbmdcIjtcclxuaW1wb3J0IGNsc3ggZnJvbSBcImNsc3hcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBQcm9maWxlKHsgY2xhc3NOYW1lLCBpbWdTcmMgPSBhdmF0YXJTcmMsIG5hbWUsIHJhdGluZyB9KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbHN4KGNsYXNzTmFtZSwgXCJmbGV4IGdhcC14LTIgaXRlbXMtY2VudGVyIHRleHQtdGVhbC02MDBcIil9PlxyXG4gICAgICA8SW1hZ2Ugc3JjPXtpbWdTcmN9IGFsdD1cImF2YXRhclwiIHdpZHRoPXs0OH0gaGVpZ2h0PXs0OH0gLz5cclxuICAgICAgPGRpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtbGcgbGVhZGluZy10aWdodCB0cnVuY2F0ZVwiPntuYW1lfTwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1zbGF0ZS00MDAgdGV4dC14cyBsZWFkaW5nLXRpZ2h0XCI+XHJcbiAgICAgICAgICDQoNC10LnRgtC40L3Qszoge3JhdGluZ31cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJJbWFnZSIsImF2YXRhclNyYyIsImNsc3giLCJQcm9maWxlIiwiY2xhc3NOYW1lIiwiaW1nU3JjIiwibmFtZSIsInJhdGluZyIsImRpdiIsInNyYyIsImFsdCIsIndpZHRoIiwiaGVpZ2h0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/profile/profile.jsx\n"));

/***/ })

});
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

/***/ "./components/game/game-field.jsx":
/*!****************************************!*\
  !*** ./components/game/game-field.jsx ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GameField: function() { return /* binding */ GameField; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! clsx */ \"./node_modules/clsx/dist/clsx.mjs\");\n/* harmony import */ var _ui_kit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ui-kit */ \"./components/ui-kit/index.js\");\n/* harmony import */ var _icons_zero_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./icons/zero-icon */ \"./components/game/icons/zero-icon.jsx\");\n/* harmony import */ var _icons_cross_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./icons/cross-icon */ \"./components/game/icons/cross-icon.jsx\");\n\n\n\n\n\nconst cells = new Array(19 * 19).fill(null);\nfunction GameField(param) {\n    let { className } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (0,clsx__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(className, \"bg-white pt-5 pb-7 px-8 rounded-2xl shadow-md\"),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex items-center gap-x-3\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mr-auto\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex items-center gap-x-1 text-xl font-semibold\",\n                                children: [\n                                    \"Ход: \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_icons_zero_icon__WEBPACK_IMPORTED_MODULE_3__.ZeroIcon, {\n                                        className: \"w-5 h-5\"\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\react course\\\\tic-tac-toe-online\\\\components\\\\game\\\\game-field.jsx\",\n                                        lineNumber: 19,\n                                        columnNumber: 18\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\react course\\\\tic-tac-toe-online\\\\components\\\\game\\\\game-field.jsx\",\n                                lineNumber: 18,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex items-center gap-x-1 text-slate-400 text-sm\",\n                                children: [\n                                    \"Следующий: \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_icons_cross_icon__WEBPACK_IMPORTED_MODULE_4__.CrossIcon, {}, void 0, false, {\n                                        fileName: \"D:\\\\react course\\\\tic-tac-toe-online\\\\components\\\\game\\\\game-field.jsx\",\n                                        lineNumber: 22,\n                                        columnNumber: 24\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\react course\\\\tic-tac-toe-online\\\\components\\\\game\\\\game-field.jsx\",\n                                lineNumber: 21,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\react course\\\\tic-tac-toe-online\\\\components\\\\game\\\\game-field.jsx\",\n                        lineNumber: 17,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_kit__WEBPACK_IMPORTED_MODULE_2__.UiButton, {\n                        size: \"md\",\n                        variant: \"primary\",\n                        children: \"Ничья\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\react course\\\\tic-tac-toe-online\\\\components\\\\game\\\\game-field.jsx\",\n                        lineNumber: 25,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_kit__WEBPACK_IMPORTED_MODULE_2__.UiButton, {\n                        size: \"md\",\n                        variant: \"outline\",\n                        children: \"Сдаться\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\react course\\\\tic-tac-toe-online\\\\components\\\\game\\\\game-field.jsx\",\n                        lineNumber: 28,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\react course\\\\tic-tac-toe-online\\\\components\\\\game\\\\game-field.jsx\",\n                lineNumber: 16,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mt-3 grid\",\n                children: cells.map((_, i)=>{\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"w-5 h-5 border border-solid border-slate-200 flex items-center\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_icons_zero_icon__WEBPACK_IMPORTED_MODULE_3__.ZeroIcon, {}, void 0, false, {\n                            fileName: \"D:\\\\react course\\\\tic-tac-toe-online\\\\components\\\\game\\\\game-field.jsx\",\n                            lineNumber: 39,\n                            columnNumber: 15\n                        }, this)\n                    }, i, false, {\n                        fileName: \"D:\\\\react course\\\\tic-tac-toe-online\\\\components\\\\game\\\\game-field.jsx\",\n                        lineNumber: 35,\n                        columnNumber: 13\n                    }, this);\n                })\n            }, void 0, false, {\n                fileName: \"D:\\\\react course\\\\tic-tac-toe-online\\\\components\\\\game\\\\game-field.jsx\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\react course\\\\tic-tac-toe-online\\\\components\\\\game\\\\game-field.jsx\",\n        lineNumber: 10,\n        columnNumber: 5\n    }, this);\n}\n_c = GameField;\nvar _c;\n$RefreshReg$(_c, \"GameField\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2dhbWUvZ2FtZS1maWVsZC5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBd0I7QUFDYTtBQUNRO0FBQ0U7QUFFL0MsTUFBTUksUUFBUSxJQUFJQyxNQUFNLEtBQUssSUFBSUMsSUFBSSxDQUFDO0FBRS9CLFNBQVNDLFVBQVUsS0FBYTtRQUFiLEVBQUVDLFNBQVMsRUFBRSxHQUFiO0lBQ3hCLHFCQUNFLDhEQUFDQztRQUNDRCxXQUFXUixnREFBSUEsQ0FDYlEsV0FDQTs7MEJBR0YsOERBQUNDO2dCQUFJRCxXQUFVOztrQ0FDYiw4REFBQ0M7d0JBQUlELFdBQVU7OzBDQUNiLDhEQUFDQztnQ0FBSUQsV0FBVTs7b0NBQWtEO2tEQUMxRCw4REFBQ04sc0RBQVFBO3dDQUFDTSxXQUFVOzs7Ozs7Ozs7Ozs7MENBRTNCLDhEQUFDQztnQ0FBSUQsV0FBVTs7b0NBQW1EO2tEQUNyRCw4REFBQ0wsd0RBQVNBOzs7Ozs7Ozs7Ozs7Ozs7OztrQ0FHekIsOERBQUNGLDZDQUFRQTt3QkFBQ1MsTUFBTTt3QkFBTUMsU0FBUztrQ0FBVzs7Ozs7O2tDQUcxQyw4REFBQ1YsNkNBQVFBO3dCQUFDUyxNQUFNO3dCQUFNQyxTQUFTO2tDQUFXOzs7Ozs7Ozs7Ozs7MEJBSTVDLDhEQUFDRjtnQkFBSUQsV0FBVTswQkFDWkosTUFBTVEsR0FBRyxDQUFDLENBQUNDLEdBQUdDO29CQUNiLHFCQUNFLDhEQUFDQzt3QkFFQ1AsV0FBVTtrQ0FFViw0RUFBQ04sc0RBQVFBOzs7Ozt1QkFISlk7Ozs7O2dCQU1YOzs7Ozs7Ozs7Ozs7QUFJUjtLQXRDZ0JQIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvZ2FtZS9nYW1lLWZpZWxkLmpzeD9jNjAzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjbHN4IGZyb20gXCJjbHN4XCI7XHJcbmltcG9ydCB7IFVpQnV0dG9uIH0gZnJvbSBcIi4uL3VpLWtpdFwiO1xyXG5pbXBvcnQgeyBaZXJvSWNvbiB9IGZyb20gXCIuL2ljb25zL3plcm8taWNvblwiO1xyXG5pbXBvcnQgeyBDcm9zc0ljb24gfSBmcm9tIFwiLi9pY29ucy9jcm9zcy1pY29uXCI7XHJcblxyXG5jb25zdCBjZWxscyA9IG5ldyBBcnJheSgxOSAqIDE5KS5maWxsKG51bGwpO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIEdhbWVGaWVsZCh7IGNsYXNzTmFtZSB9KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXZcclxuICAgICAgY2xhc3NOYW1lPXtjbHN4KFxyXG4gICAgICAgIGNsYXNzTmFtZSxcclxuICAgICAgICBcImJnLXdoaXRlIHB0LTUgcGItNyBweC04IHJvdW5kZWQtMnhsIHNoYWRvdy1tZFwiLFxyXG4gICAgICApfVxyXG4gICAgPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC14LTNcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1yLWF1dG9cIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLXgtMSB0ZXh0LXhsIGZvbnQtc2VtaWJvbGRcIj5cclxuICAgICAgICAgICAg0KXQvtC0OiA8WmVyb0ljb24gY2xhc3NOYW1lPVwidy01IGgtNVwiIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLXgtMSB0ZXh0LXNsYXRlLTQwMCB0ZXh0LXNtXCI+XHJcbiAgICAgICAgICAgINCh0LvQtdC00YPRjtGJ0LjQuTogPENyb3NzSWNvbiAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPFVpQnV0dG9uIHNpemU9e1wibWRcIn0gdmFyaWFudD17XCJwcmltYXJ5XCJ9PlxyXG4gICAgICAgICAg0J3QuNGH0YzRj1xyXG4gICAgICAgIDwvVWlCdXR0b24+XHJcbiAgICAgICAgPFVpQnV0dG9uIHNpemU9e1wibWRcIn0gdmFyaWFudD17XCJvdXRsaW5lXCJ9PlxyXG4gICAgICAgICAg0KHQtNCw0YLRjNGB0Y9cclxuICAgICAgICA8L1VpQnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC0zIGdyaWRcIj5cclxuICAgICAgICB7Y2VsbHMubWFwKChfLCBpKSA9PiB7XHJcbiAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAga2V5PXtpfVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctNSBoLTUgYm9yZGVyIGJvcmRlci1zb2xpZCBib3JkZXItc2xhdGUtMjAwIGZsZXggaXRlbXMtY2VudGVyXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxaZXJvSWNvbiAvPlxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfSl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsiY2xzeCIsIlVpQnV0dG9uIiwiWmVyb0ljb24iLCJDcm9zc0ljb24iLCJjZWxscyIsIkFycmF5IiwiZmlsbCIsIkdhbWVGaWVsZCIsImNsYXNzTmFtZSIsImRpdiIsInNpemUiLCJ2YXJpYW50IiwibWFwIiwiXyIsImkiLCJidXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/game/game-field.jsx\n"));

/***/ })

});
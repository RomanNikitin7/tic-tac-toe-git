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

/***/ "./components/ui-kit/ui-button.jsx":
/*!*****************************************!*\
  !*** ./components/ui-kit/ui-button.jsx ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   UiButton: function() { return /* binding */ UiButton; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! clsx */ \"./node_modules/clsx/dist/clsx.mjs\");\n\n\nfunction UiButton(param) {\n    let { size, type, text } = param;\n    /**\r\n   * Кнопка UI.\r\n   *\r\n   * @param {Object} props - Свойства компонента.\r\n   * @param {\"xl\"|\"md\"} props.size - Размер кнопки, может быть \"xl\" или \"md\".\r\n   * @param {\"filled\"|\"outline\"} props.type - Тип кнопки, может быть \"filled\" или \"outline\".\r\n   * @param {string} props.text - Текст, отображаемый на кнопке.\r\n   * @returns {JSX.Element} Кнопка с заданными стилями.\r\n   */ const buttonStyles = (0,clsx__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"leading-tight transition-colors\", {\n        xl: \"text-2xl px-5 py-2 w-44 rounded-lg\",\n        md: \"text-sm px-6 py-2 rounded\"\n    }[size], {\n        filled: \"text-white bg-teal-600 hover:bg-teal-500\",\n        outline: \"text-teal-600 border-solid border border-teal-600 hover:bg-teal-50\"\n    }[type]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        className: buttonStyles,\n        children: text\n    }, void 0, false, {\n        fileName: \"D:\\\\react course\\\\tic-tac-toe-online\\\\components\\\\ui-kit\\\\ui-button.jsx\",\n        lineNumber: 25,\n        columnNumber: 10\n    }, this);\n}\n_c = UiButton;\nvar _c;\n$RefreshReg$(_c, \"UiButton\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3VpLWtpdC91aS1idXR0b24uanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQXdCO0FBRWpCLFNBQVNDLFNBQVMsS0FBb0I7UUFBcEIsRUFBRUMsSUFBSSxFQUFFQyxJQUFJLEVBQUVDLElBQUksRUFBRSxHQUFwQjtJQUN2Qjs7Ozs7Ozs7R0FRQyxHQUNELE1BQU1DLGVBQWVMLGdEQUFJQSxDQUN2QixtQ0FDQTtRQUNFTSxJQUFJO1FBQ0pDLElBQUk7SUFDTixDQUFDLENBQUNMLEtBQUssRUFDUDtRQUNFTSxRQUFRO1FBQ1JDLFNBQ0U7SUFDSixDQUFDLENBQUNOLEtBQUs7SUFFVCxxQkFBTyw4REFBQ087UUFBT0MsV0FBV047a0JBQWVEOzs7Ozs7QUFDM0M7S0F2QmdCSCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL3VpLWtpdC91aS1idXR0b24uanN4P2ZkOTQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNsc3ggZnJvbSBcImNsc3hcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBVaUJ1dHRvbih7IHNpemUsIHR5cGUsIHRleHQgfSkge1xyXG4gIC8qKlxyXG4gICAqINCa0L3QvtC/0LrQsCBVSS5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBwcm9wcyAtINCh0LLQvtC50YHRgtCy0LAg0LrQvtC80L/QvtC90LXQvdGC0LAuXHJcbiAgICogQHBhcmFtIHtcInhsXCJ8XCJtZFwifSBwcm9wcy5zaXplIC0g0KDQsNC30LzQtdGAINC60L3QvtC/0LrQuCwg0LzQvtC20LXRgiDQsdGL0YLRjCBcInhsXCIg0LjQu9C4IFwibWRcIi5cclxuICAgKiBAcGFyYW0ge1wiZmlsbGVkXCJ8XCJvdXRsaW5lXCJ9IHByb3BzLnR5cGUgLSDQotC40L8g0LrQvdC+0L/QutC4LCDQvNC+0LbQtdGCINCx0YvRgtGMIFwiZmlsbGVkXCIg0LjQu9C4IFwib3V0bGluZVwiLlxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBwcm9wcy50ZXh0IC0g0KLQtdC60YHRgiwg0L7RgtC+0LHRgNCw0LbQsNC10LzRi9C5INC90LAg0LrQvdC+0L/QutC1LlxyXG4gICAqIEByZXR1cm5zIHtKU1guRWxlbWVudH0g0JrQvdC+0L/QutCwINGBINC30LDQtNCw0L3QvdGL0LzQuCDRgdGC0LjQu9GP0LzQuC5cclxuICAgKi9cclxuICBjb25zdCBidXR0b25TdHlsZXMgPSBjbHN4KFxyXG4gICAgXCJsZWFkaW5nLXRpZ2h0IHRyYW5zaXRpb24tY29sb3JzXCIsXHJcbiAgICB7XHJcbiAgICAgIHhsOiBcInRleHQtMnhsIHB4LTUgcHktMiB3LTQ0IHJvdW5kZWQtbGdcIixcclxuICAgICAgbWQ6IFwidGV4dC1zbSBweC02IHB5LTIgcm91bmRlZFwiLFxyXG4gICAgfVtzaXplXSxcclxuICAgIHtcclxuICAgICAgZmlsbGVkOiBcInRleHQtd2hpdGUgYmctdGVhbC02MDAgaG92ZXI6YmctdGVhbC01MDBcIixcclxuICAgICAgb3V0bGluZTpcclxuICAgICAgICBcInRleHQtdGVhbC02MDAgYm9yZGVyLXNvbGlkIGJvcmRlciBib3JkZXItdGVhbC02MDAgaG92ZXI6YmctdGVhbC01MFwiLFxyXG4gICAgfVt0eXBlXSxcclxuICApO1xyXG4gIHJldHVybiA8YnV0dG9uIGNsYXNzTmFtZT17YnV0dG9uU3R5bGVzfT57dGV4dH08L2J1dHRvbj47XHJcbn1cclxuIl0sIm5hbWVzIjpbImNsc3giLCJVaUJ1dHRvbiIsInNpemUiLCJ0eXBlIiwidGV4dCIsImJ1dHRvblN0eWxlcyIsInhsIiwibWQiLCJmaWxsZWQiLCJvdXRsaW5lIiwiYnV0dG9uIiwiY2xhc3NOYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/ui-kit/ui-button.jsx\n"));

/***/ })

});
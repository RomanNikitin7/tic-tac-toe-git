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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GameField: function() { return /* binding */ GameField; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! clsx */ \"./node_modules/clsx/dist/clsx.mjs\");\n/* harmony import */ var _ui_kit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ui-kit */ \"./components/ui-kit/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./constants */ \"./components/game/constants.js\");\n/* harmony import */ var _game_symbol__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./game-symbol */ \"./components/game/game-symbol.jsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst MOVE_ORDER = [\n    _constants__WEBPACK_IMPORTED_MODULE_4__.GAME_SYMBOLS.CROSS,\n    _constants__WEBPACK_IMPORTED_MODULE_4__.GAME_SYMBOLS.ZERO,\n    _constants__WEBPACK_IMPORTED_MODULE_4__.GAME_SYMBOLS.TRIANGLE,\n    _constants__WEBPACK_IMPORTED_MODULE_4__.GAME_SYMBOLS.SQUARE\n];\nconst getNextMove = (currentMove)=>{\n    let nextMoveIndex = MOVE_ORDER.indexOf(currentMove) + 1;\n    var _MOVE_ORDER_nextMoveIndex;\n    return (_MOVE_ORDER_nextMoveIndex = MOVE_ORDER[nextMoveIndex]) !== null && _MOVE_ORDER_nextMoveIndex !== void 0 ? _MOVE_ORDER_nextMoveIndex : MOVE_ORDER[0];\n};\nfunction GameField(param) {\n    let { className } = param;\n    _s();\n    const [{ cells, currentMove }, setGameState] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)({\n        cells: ()=>new Array(19 * 19).fill(null),\n        currentMove: _constants__WEBPACK_IMPORTED_MODULE_4__.GAME_SYMBOLS.CROSS\n    });\n    console.log(cells);\n    const nextMove = getNextMove(currentMove);\n    const handleCellClick = (param)=>{\n        let { index } = param;\n        setGameState((lastGameState)=>({\n                ...lastGameState,\n                currentMove: getNextMove(lastGameState.currentMove),\n                cells: lastGameState.cells.map((cell, i)=>i === index ? lastGameState.currentMove : cell)\n            }));\n    };\n    const actions = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_kit__WEBPACK_IMPORTED_MODULE_2__.UiButton, {\n                size: \"md\",\n                variant: \"primary\",\n                children: \"Ничья\"\n            }, void 0, false, {\n                fileName: \"D:\\\\react course\\\\tic-tac-toe-git\\\\components\\\\game\\\\game-field.jsx\",\n                lineNumber: 38,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_kit__WEBPACK_IMPORTED_MODULE_2__.UiButton, {\n                size: \"md\",\n                variant: \"outline\",\n                children: \"Сдаться\"\n            }, void 0, false, {\n                fileName: \"D:\\\\react course\\\\tic-tac-toe-git\\\\components\\\\game\\\\game-field.jsx\",\n                lineNumber: 41,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(GameFieldLayout, {\n        className: className,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(GameMoveInfo, {\n                actions: actions,\n                currentMove: currentMove,\n                nextMove: nextMove\n            }, void 0, false, {\n                fileName: \"D:\\\\react course\\\\tic-tac-toe-git\\\\components\\\\game\\\\game-field.jsx\",\n                lineNumber: 48,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(GameGrid, {\n                children: console.log(cells)\n            }, void 0, false, {\n                fileName: \"D:\\\\react course\\\\tic-tac-toe-git\\\\components\\\\game\\\\game-field.jsx\",\n                lineNumber: 53,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\react course\\\\tic-tac-toe-git\\\\components\\\\game\\\\game-field.jsx\",\n        lineNumber: 47,\n        columnNumber: 5\n    }, this);\n}\n_s(GameField, \"TdcoW+okF/x8kHSYFMOGmrIkz9A=\");\n_c = GameField;\nfunction GameFieldLayout(param) {\n    let { className, children } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (0,clsx__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(className, \"bg-white pt-5 pb-7 px-8 rounded-2xl shadow-md\"),\n        children: children\n    }, void 0, false, {\n        fileName: \"D:\\\\react course\\\\tic-tac-toe-git\\\\components\\\\game\\\\game-field.jsx\",\n        lineNumber: 60,\n        columnNumber: 5\n    }, this);\n}\n_c1 = GameFieldLayout;\nfunction GameMoveInfo(param) {\n    let { actions, currentMove, nextMove } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex items-center gap-x-3\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mr-auto\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex items-center gap-x-1 text-xl font-semibold\",\n                        children: [\n                            \"Ход: \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_game_symbol__WEBPACK_IMPORTED_MODULE_5__.GameSymbol, {\n                                symbol: currentMove,\n                                className: \"w-5 h-5\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\react course\\\\tic-tac-toe-git\\\\components\\\\game\\\\game-field.jsx\",\n                                lineNumber: 76,\n                                columnNumber: 16\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\react course\\\\tic-tac-toe-git\\\\components\\\\game\\\\game-field.jsx\",\n                        lineNumber: 75,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex items-center gap-x-1 text-slate-400 text-sm\",\n                        children: [\n                            \"Следующий: \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_game_symbol__WEBPACK_IMPORTED_MODULE_5__.GameSymbol, {\n                                symbol: nextMove,\n                                className: \"w-3 h-3\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\react course\\\\tic-tac-toe-git\\\\components\\\\game\\\\game-field.jsx\",\n                                lineNumber: 79,\n                                columnNumber: 22\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\react course\\\\tic-tac-toe-git\\\\components\\\\game\\\\game-field.jsx\",\n                        lineNumber: 78,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\react course\\\\tic-tac-toe-git\\\\components\\\\game\\\\game-field.jsx\",\n                lineNumber: 74,\n                columnNumber: 7\n            }, this),\n            actions\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\react course\\\\tic-tac-toe-git\\\\components\\\\game\\\\game-field.jsx\",\n        lineNumber: 73,\n        columnNumber: 5\n    }, this);\n}\n_c2 = GameMoveInfo;\nfunction GameGrid(param) {\n    let { children } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"mt-3 grid grid-cols-[repeat(19,_30px)] pt-px pl-px\",\n        children: children\n    }, void 0, false, {\n        fileName: \"D:\\\\react course\\\\tic-tac-toe-git\\\\components\\\\game\\\\game-field.jsx\",\n        lineNumber: 89,\n        columnNumber: 5\n    }, this);\n}\n_c3 = GameGrid;\nfunction GameCell(param) {\n    let { children, onClick } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        className: \"w-[30px] h-[30px] border border-solid border-slate-200 flex items-center justify-center -mt-px -ml-px\",\n        onClick: onClick,\n        children: children\n    }, void 0, false, {\n        fileName: \"D:\\\\react course\\\\tic-tac-toe-git\\\\components\\\\game\\\\game-field.jsx\",\n        lineNumber: 97,\n        columnNumber: 5\n    }, this);\n}\n_c4 = GameCell;\nvar _c, _c1, _c2, _c3, _c4;\n$RefreshReg$(_c, \"GameField\");\n$RefreshReg$(_c1, \"GameFieldLayout\");\n$RefreshReg$(_c2, \"GameMoveInfo\");\n$RefreshReg$(_c3, \"GameGrid\");\n$RefreshReg$(_c4, \"GameCell\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFyQjtJQUNoQixxQkFDRSw4REFBQ0M7UUFDQ3pCLFdBQVU7UUFDVndCLFNBQVNBO2tCQUVSSjs7Ozs7O0FBR1A7TUFUU0ciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9nYW1lL2dhbWUtZmllbGQuanN4P2M2MDMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNsc3ggZnJvbSBcImNsc3hcIjtcclxuaW1wb3J0IHsgVWlCdXR0b24gfSBmcm9tIFwiLi4vdWkta2l0XCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IEdBTUVfU1lNQk9MUyB9IGZyb20gXCIuL2NvbnN0YW50c1wiO1xyXG5pbXBvcnQgeyBHYW1lU3ltYm9sIH0gZnJvbSBcIi4vZ2FtZS1zeW1ib2xcIjtcclxuXHJcbmNvbnN0IE1PVkVfT1JERVIgPSBbXHJcbiAgR0FNRV9TWU1CT0xTLkNST1NTLFxyXG4gIEdBTUVfU1lNQk9MUy5aRVJPLFxyXG4gIEdBTUVfU1lNQk9MUy5UUklBTkdMRSxcclxuICBHQU1FX1NZTUJPTFMuU1FVQVJFLFxyXG5dO1xyXG5cclxuY29uc3QgZ2V0TmV4dE1vdmUgPSAoY3VycmVudE1vdmUpID0+IHtcclxuICBsZXQgbmV4dE1vdmVJbmRleCA9IE1PVkVfT1JERVIuaW5kZXhPZihjdXJyZW50TW92ZSkgKyAxO1xyXG4gIHJldHVybiBNT1ZFX09SREVSW25leHRNb3ZlSW5kZXhdID8/IE1PVkVfT1JERVJbMF07XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gR2FtZUZpZWxkKHsgY2xhc3NOYW1lIH0pIHtcclxuICBjb25zdCBbeyBjZWxscywgY3VycmVudE1vdmUgfSwgc2V0R2FtZVN0YXRlXSA9IHVzZVN0YXRlKHtcclxuICAgIGNlbGxzOiAoKSA9PiBuZXcgQXJyYXkoMTkgKiAxOSkuZmlsbChudWxsKSxcclxuICAgIGN1cnJlbnRNb3ZlOiBHQU1FX1NZTUJPTFMuQ1JPU1MsXHJcbiAgfSk7XHJcbiAgY29uc29sZS5sb2coY2VsbHMpO1xyXG4gIGNvbnN0IG5leHRNb3ZlID0gZ2V0TmV4dE1vdmUoY3VycmVudE1vdmUpO1xyXG5cclxuICBjb25zdCBoYW5kbGVDZWxsQ2xpY2sgPSAoeyBpbmRleCB9KSA9PiB7XHJcbiAgICBzZXRHYW1lU3RhdGUoKGxhc3RHYW1lU3RhdGUpID0+ICh7XHJcbiAgICAgIC4uLmxhc3RHYW1lU3RhdGUsXHJcbiAgICAgIGN1cnJlbnRNb3ZlOiBnZXROZXh0TW92ZShsYXN0R2FtZVN0YXRlLmN1cnJlbnRNb3ZlKSxcclxuICAgICAgY2VsbHM6IGxhc3RHYW1lU3RhdGUuY2VsbHMubWFwKChjZWxsLCBpKSA9PlxyXG4gICAgICAgIGkgPT09IGluZGV4ID8gbGFzdEdhbWVTdGF0ZS5jdXJyZW50TW92ZSA6IGNlbGwsXHJcbiAgICAgICksXHJcbiAgICB9KSk7XHJcbiAgfTtcclxuICBjb25zdCBhY3Rpb25zID0gKFxyXG4gICAgPD5cclxuICAgICAgPFVpQnV0dG9uIHNpemU9e1wibWRcIn0gdmFyaWFudD17XCJwcmltYXJ5XCJ9PlxyXG4gICAgICAgINCd0LjRh9GM0Y9cclxuICAgICAgPC9VaUJ1dHRvbj5cclxuICAgICAgPFVpQnV0dG9uIHNpemU9e1wibWRcIn0gdmFyaWFudD17XCJvdXRsaW5lXCJ9PlxyXG4gICAgICAgINCh0LTQsNGC0YzRgdGPXHJcbiAgICAgIDwvVWlCdXR0b24+XHJcbiAgICA8Lz5cclxuICApO1xyXG4gIHJldHVybiAoXHJcbiAgICA8R2FtZUZpZWxkTGF5b3V0IGNsYXNzTmFtZT17Y2xhc3NOYW1lfT5cclxuICAgICAgPEdhbWVNb3ZlSW5mb1xyXG4gICAgICAgIGFjdGlvbnM9e2FjdGlvbnN9XHJcbiAgICAgICAgY3VycmVudE1vdmU9e2N1cnJlbnRNb3ZlfVxyXG4gICAgICAgIG5leHRNb3ZlPXtuZXh0TW92ZX1cclxuICAgICAgLz5cclxuICAgICAgPEdhbWVHcmlkPntjb25zb2xlLmxvZyhjZWxscyl9PC9HYW1lR3JpZD5cclxuICAgIDwvR2FtZUZpZWxkTGF5b3V0PlxyXG4gICk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIEdhbWVGaWVsZExheW91dCh7IGNsYXNzTmFtZSwgY2hpbGRyZW4gfSkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2XHJcbiAgICAgIGNsYXNzTmFtZT17Y2xzeChcclxuICAgICAgICBjbGFzc05hbWUsXHJcbiAgICAgICAgXCJiZy13aGl0ZSBwdC01IHBiLTcgcHgtOCByb3VuZGVkLTJ4bCBzaGFkb3ctbWRcIixcclxuICAgICAgKX1cclxuICAgID5cclxuICAgICAge2NoaWxkcmVufVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZnVuY3Rpb24gR2FtZU1vdmVJbmZvKHsgYWN0aW9ucywgY3VycmVudE1vdmUsIG5leHRNb3ZlIH0pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAteC0zXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXItYXV0b1wiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLXgtMSB0ZXh0LXhsIGZvbnQtc2VtaWJvbGRcIj5cclxuICAgICAgICAgINCl0L7QtDogPEdhbWVTeW1ib2wgc3ltYm9sPXtjdXJyZW50TW92ZX0gY2xhc3NOYW1lPVwidy01IGgtNVwiIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAteC0xIHRleHQtc2xhdGUtNDAwIHRleHQtc21cIj5cclxuICAgICAgICAgINCh0LvQtdC00YPRjtGJ0LjQuTogPEdhbWVTeW1ib2wgc3ltYm9sPXtuZXh0TW92ZX0gY2xhc3NOYW1lPVwidy0zIGgtM1wiIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICB7YWN0aW9uc31cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIEdhbWVHcmlkKHsgY2hpbGRyZW4gfSkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTMgZ3JpZCBncmlkLWNvbHMtW3JlcGVhdCgxOSxfMzBweCldIHB0LXB4IHBsLXB4XCI+XHJcbiAgICAgIHtjaGlsZHJlbn1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIEdhbWVDZWxsKHsgY2hpbGRyZW4sIG9uQ2xpY2sgfSkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8YnV0dG9uXHJcbiAgICAgIGNsYXNzTmFtZT1cInctWzMwcHhdIGgtWzMwcHhdIGJvcmRlciBib3JkZXItc29saWQgYm9yZGVyLXNsYXRlLTIwMCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciAtbXQtcHggLW1sLXB4XCJcclxuICAgICAgb25DbGljaz17b25DbGlja31cclxuICAgID5cclxuICAgICAge2NoaWxkcmVufVxyXG4gICAgPC9idXR0b24+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsiY2xzeCIsIlVpQnV0dG9uIiwidXNlU3RhdGUiLCJHQU1FX1NZTUJPTFMiLCJHYW1lU3ltYm9sIiwiTU9WRV9PUkRFUiIsIkNST1NTIiwiWkVSTyIsIlRSSUFOR0xFIiwiU1FVQVJFIiwiZ2V0TmV4dE1vdmUiLCJjdXJyZW50TW92ZSIsIm5leHRNb3ZlSW5kZXgiLCJpbmRleE9mIiwiR2FtZUZpZWxkIiwiY2xhc3NOYW1lIiwiY2VsbHMiLCJzZXRHYW1lU3RhdGUiLCJBcnJheSIsImZpbGwiLCJjb25zb2xlIiwibG9nIiwibmV4dE1vdmUiLCJoYW5kbGVDZWxsQ2xpY2siLCJpbmRleCIsImxhc3RHYW1lU3RhdGUiLCJtYXAiLCJjZWxsIiwiaSIsImFjdGlvbnMiLCJzaXplIiwidmFyaWFudCIsIkdhbWVGaWVsZExheW91dCIsIkdhbWVNb3ZlSW5mbyIsIkdhbWVHcmlkIiwiY2hpbGRyZW4iLCJkaXYiLCJzeW1ib2wiLCJHYW1lQ2VsbCIsIm9uQ2xpY2siLCJidXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/game/game-field.jsx\n"));

/***/ })

});
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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GameField: function() { return /* binding */ GameField; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! clsx */ \"./node_modules/clsx/dist/clsx.mjs\");\n/* harmony import */ var _ui_kit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ui-kit */ \"./components/ui-kit/index.js\");\n/* harmony import */ var _icons_zero_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./icons/zero-icon */ \"./components/game/icons/zero-icon.jsx\");\n/* harmony import */ var _icons_cross_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./icons/cross-icon */ \"./components/game/icons/cross-icon.jsx\");\n/* harmony import */ var _icons_triangle_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./icons/triangle-icon */ \"./components/game/icons/triangle-icon.jsx\");\n/* harmony import */ var _icons_square_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./icons/square-icon */ \"./components/game/icons/square-icon.jsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./constants */ \"./components/game/constants.js\");\n/* harmony import */ var _game_symbol__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./game-symbol */ \"./components/game/game-symbol.jsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nconst MOVE_ORDER = [\n    _constants__WEBPACK_IMPORTED_MODULE_8__.GAME_SYMBOLS.CROSS,\n    _constants__WEBPACK_IMPORTED_MODULE_8__.GAME_SYMBOLS.ZERO,\n    _constants__WEBPACK_IMPORTED_MODULE_8__.GAME_SYMBOLS.TRIANGLE,\n    _constants__WEBPACK_IMPORTED_MODULE_8__.GAME_SYMBOLS.SQUARE\n];\nconst getNextMove = (currentMove)=>{\n    let nextMoveIndex = MOVE_ORDER.indexOf(currentMove) + 1;\n    var _MOVE_ORDER_nextMoveIndex;\n    return (_MOVE_ORDER_nextMoveIndex = MOVE_ORDER[nextMoveIndex]) !== null && _MOVE_ORDER_nextMoveIndex !== void 0 ? _MOVE_ORDER_nextMoveIndex : MOVE_ORDER[0];\n};\nfunction GameField(param) {\n    let { className } = param;\n    _s();\n    const [{ cells, currentMove }, setGameState] = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)({\n        cells: new Array(19 * 19).fill(null),\n        currentMove: _constants__WEBPACK_IMPORTED_MODULE_8__.GAME_SYMBOLS.CROSS\n    });\n    const nextMove = getNextMove(currentMove);\n    const handleCellClick = (index)=>{\n        setGameState((lastGameState)=>{\n            return {\n                ...lastGameState,\n                currentMove: getNextMove(lastGameState.currentMove),\n                cells: lastGameState.cells.map((cell, i)=>i === index ? lastGameState.currentMove : cell)\n            };\n        });\n    };\n    const actions = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_kit__WEBPACK_IMPORTED_MODULE_2__.UiButton, {\n                size: \"md\",\n                variant: \"primary\",\n                children: \"Ничья\"\n            }, void 0, false, {\n                fileName: \"D:\\\\react course\\\\tic-tac-toe-git\\\\components\\\\game\\\\game-field.jsx\",\n                lineNumber: 43,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_kit__WEBPACK_IMPORTED_MODULE_2__.UiButton, {\n                size: \"md\",\n                variant: \"outline\",\n                children: \"Сдаться\"\n            }, void 0, false, {\n                fileName: \"D:\\\\react course\\\\tic-tac-toe-git\\\\components\\\\game\\\\game-field.jsx\",\n                lineNumber: 46,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(GameFieldLayout, {\n        className: className,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(GameMoveInfo, {\n                actions: actions,\n                currentMove: currentMove,\n                nextMove: nextMove\n            }, void 0, false, {\n                fileName: \"D:\\\\react course\\\\tic-tac-toe-git\\\\components\\\\game\\\\game-field.jsx\",\n                lineNumber: 53,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(GameGrid, {\n                children: cells.map((symbol, i)=>{\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(GameCell, {\n                        onClick: ()=>handleCellClick(i),\n                        children: symbol && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_game_symbol__WEBPACK_IMPORTED_MODULE_9__.GameSymbol, {\n                            symbol: symbol,\n                            className: \"w-5 h-5\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\react course\\\\tic-tac-toe-git\\\\components\\\\game\\\\game-field.jsx\",\n                            lineNumber: 62,\n                            columnNumber: 26\n                        }, this)\n                    }, i, false, {\n                        fileName: \"D:\\\\react course\\\\tic-tac-toe-git\\\\components\\\\game\\\\game-field.jsx\",\n                        lineNumber: 61,\n                        columnNumber: 13\n                    }, this);\n                })\n            }, void 0, false, {\n                fileName: \"D:\\\\react course\\\\tic-tac-toe-git\\\\components\\\\game\\\\game-field.jsx\",\n                lineNumber: 58,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\react course\\\\tic-tac-toe-git\\\\components\\\\game\\\\game-field.jsx\",\n        lineNumber: 52,\n        columnNumber: 5\n    }, this);\n}\n_s(GameField, \"U+HtGMq2gM75v/xHtiyhpEgzVpo=\");\n_c = GameField;\nfunction GameFieldLayout(param) {\n    let { className, children } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (0,clsx__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(className, \"bg-white pt-5 pb-7 px-8 rounded-2xl shadow-md\"),\n        children: children\n    }, void 0, false, {\n        fileName: \"D:\\\\react course\\\\tic-tac-toe-git\\\\components\\\\game\\\\game-field.jsx\",\n        lineNumber: 73,\n        columnNumber: 5\n    }, this);\n}\n_c1 = GameFieldLayout;\nfunction GameMoveInfo(param) {\n    let { actions, currentMove, nextMove } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex items-center gap-x-3\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mr-auto\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex items-center gap-x-1 text-xl font-semibold\",\n                        children: [\n                            \"Ход: \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_game_symbol__WEBPACK_IMPORTED_MODULE_9__.GameSymbol, {\n                                symbol: currentMove,\n                                className: \"w-5 h-5\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\react course\\\\tic-tac-toe-git\\\\components\\\\game\\\\game-field.jsx\",\n                                lineNumber: 89,\n                                columnNumber: 16\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\react course\\\\tic-tac-toe-git\\\\components\\\\game\\\\game-field.jsx\",\n                        lineNumber: 88,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex items-center gap-x-1 text-slate-400 text-sm\",\n                        children: [\n                            \"Следующий: \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_game_symbol__WEBPACK_IMPORTED_MODULE_9__.GameSymbol, {\n                                symbol: nextMove,\n                                className: \"w-3 h-3\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\react course\\\\tic-tac-toe-git\\\\components\\\\game\\\\game-field.jsx\",\n                                lineNumber: 92,\n                                columnNumber: 22\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\react course\\\\tic-tac-toe-git\\\\components\\\\game\\\\game-field.jsx\",\n                        lineNumber: 91,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\react course\\\\tic-tac-toe-git\\\\components\\\\game\\\\game-field.jsx\",\n                lineNumber: 87,\n                columnNumber: 7\n            }, this),\n            actions\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\react course\\\\tic-tac-toe-git\\\\components\\\\game\\\\game-field.jsx\",\n        lineNumber: 86,\n        columnNumber: 5\n    }, this);\n}\n_c2 = GameMoveInfo;\nfunction GameGrid(param) {\n    let { children } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"mt-3 grid grid-cols-[repeat(19,_30px)] pt-px pl-px\",\n        children: children\n    }, void 0, false, {\n        fileName: \"D:\\\\react course\\\\tic-tac-toe-git\\\\components\\\\game\\\\game-field.jsx\",\n        lineNumber: 102,\n        columnNumber: 5\n    }, this);\n}\n_c3 = GameGrid;\nfunction GameCell(param) {\n    let { children, onClick } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        className: \"w-[30px] h-[30px] border border-solid border-slate-200 flex items-center justify-center -mt-px -ml-px\",\n        onClick: onClick,\n        children: children\n    }, void 0, false, {\n        fileName: \"D:\\\\react course\\\\tic-tac-toe-git\\\\components\\\\game\\\\game-field.jsx\",\n        lineNumber: 110,\n        columnNumber: 5\n    }, this);\n}\n_c4 = GameCell;\nvar _c, _c1, _c2, _c3, _c4;\n$RefreshReg$(_c, \"GameField\");\n$RefreshReg$(_c1, \"GameFieldLayout\");\n$RefreshReg$(_c2, \"GameMoveInfo\");\n$RefreshReg$(_c3, \"GameGrid\");\n$RefreshReg$(_c4, \"GameCell\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFFBQVEsRUFBRSxHQUFaO0lBQ2hCLHFCQUNFLDhEQUFDQztRQUFJdEIsV0FBVTtrQkFDWnFCOzs7Ozs7QUFHUDtNQU5TSjtBQVFULFNBQVNFLFNBQVMsS0FBcUI7UUFBckIsRUFBRUUsUUFBUSxFQUFFRCxPQUFPLEVBQUUsR0FBckI7SUFDaEIscUJBQ0UsOERBQUNHO1FBQ0N2QixXQUFVO1FBQ1ZvQixTQUFTQTtrQkFFUkM7Ozs7OztBQUdQO01BVFNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvZ2FtZS9nYW1lLWZpZWxkLmpzeD9jNjAzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjbHN4IGZyb20gXCJjbHN4XCI7XHJcbmltcG9ydCB7IFVpQnV0dG9uIH0gZnJvbSBcIi4uL3VpLWtpdFwiO1xyXG5pbXBvcnQgeyBaZXJvSWNvbiB9IGZyb20gXCIuL2ljb25zL3plcm8taWNvblwiO1xyXG5pbXBvcnQgeyBDcm9zc0ljb24gfSBmcm9tIFwiLi9pY29ucy9jcm9zcy1pY29uXCI7XHJcbmltcG9ydCB7IFRyaWFuZ2xlSWNvbiB9IGZyb20gXCIuL2ljb25zL3RyaWFuZ2xlLWljb25cIjtcclxuaW1wb3J0IHsgU3F1YXJlSWNvbiB9IGZyb20gXCIuL2ljb25zL3NxdWFyZS1pY29uXCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IEdBTUVfU1lNQk9MUyB9IGZyb20gXCIuL2NvbnN0YW50c1wiO1xyXG5pbXBvcnQgeyBHYW1lU3ltYm9sIH0gZnJvbSBcIi4vZ2FtZS1zeW1ib2xcIjtcclxuXHJcbmNvbnN0IE1PVkVfT1JERVIgPSBbXHJcbiAgR0FNRV9TWU1CT0xTLkNST1NTLFxyXG4gIEdBTUVfU1lNQk9MUy5aRVJPLFxyXG4gIEdBTUVfU1lNQk9MUy5UUklBTkdMRSxcclxuICBHQU1FX1NZTUJPTFMuU1FVQVJFLFxyXG5dO1xyXG5cclxuY29uc3QgZ2V0TmV4dE1vdmUgPSAoY3VycmVudE1vdmUpID0+IHtcclxuICBsZXQgbmV4dE1vdmVJbmRleCA9IE1PVkVfT1JERVIuaW5kZXhPZihjdXJyZW50TW92ZSkgKyAxO1xyXG4gIHJldHVybiBNT1ZFX09SREVSW25leHRNb3ZlSW5kZXhdID8/IE1PVkVfT1JERVJbMF07XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gR2FtZUZpZWxkKHsgY2xhc3NOYW1lIH0pIHtcclxuICBjb25zdCBbeyBjZWxscywgY3VycmVudE1vdmUgfSwgc2V0R2FtZVN0YXRlXSA9IHVzZVN0YXRlKHtcclxuICAgIGNlbGxzOiBuZXcgQXJyYXkoMTkgKiAxOSkuZmlsbChudWxsKSxcclxuICAgIGN1cnJlbnRNb3ZlOiBHQU1FX1NZTUJPTFMuQ1JPU1MsXHJcbiAgfSk7XHJcbiAgY29uc3QgbmV4dE1vdmUgPSBnZXROZXh0TW92ZShjdXJyZW50TW92ZSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNlbGxDbGljayA9IChpbmRleCkgPT4ge1xyXG4gICAgc2V0R2FtZVN0YXRlKChsYXN0R2FtZVN0YXRlKSA9PiB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4ubGFzdEdhbWVTdGF0ZSxcclxuICAgICAgICBjdXJyZW50TW92ZTogZ2V0TmV4dE1vdmUobGFzdEdhbWVTdGF0ZS5jdXJyZW50TW92ZSksXHJcbiAgICAgICAgY2VsbHM6IGxhc3RHYW1lU3RhdGUuY2VsbHMubWFwKChjZWxsLCBpKSA9PlxyXG4gICAgICAgICAgaSA9PT0gaW5kZXggPyBsYXN0R2FtZVN0YXRlLmN1cnJlbnRNb3ZlIDogY2VsbCxcclxuICAgICAgICApLFxyXG4gICAgICB9O1xyXG4gICAgfSk7XHJcbiAgfTtcclxuICBjb25zdCBhY3Rpb25zID0gKFxyXG4gICAgPD5cclxuICAgICAgPFVpQnV0dG9uIHNpemU9e1wibWRcIn0gdmFyaWFudD17XCJwcmltYXJ5XCJ9PlxyXG4gICAgICAgINCd0LjRh9GM0Y9cclxuICAgICAgPC9VaUJ1dHRvbj5cclxuICAgICAgPFVpQnV0dG9uIHNpemU9e1wibWRcIn0gdmFyaWFudD17XCJvdXRsaW5lXCJ9PlxyXG4gICAgICAgINCh0LTQsNGC0YzRgdGPXHJcbiAgICAgIDwvVWlCdXR0b24+XHJcbiAgICA8Lz5cclxuICApO1xyXG4gIHJldHVybiAoXHJcbiAgICA8R2FtZUZpZWxkTGF5b3V0IGNsYXNzTmFtZT17Y2xhc3NOYW1lfT5cclxuICAgICAgPEdhbWVNb3ZlSW5mb1xyXG4gICAgICAgIGFjdGlvbnM9e2FjdGlvbnN9XHJcbiAgICAgICAgY3VycmVudE1vdmU9e2N1cnJlbnRNb3ZlfVxyXG4gICAgICAgIG5leHRNb3ZlPXtuZXh0TW92ZX1cclxuICAgICAgLz5cclxuICAgICAgPEdhbWVHcmlkPlxyXG4gICAgICAgIHtjZWxscy5tYXAoKHN5bWJvbCwgaSkgPT4ge1xyXG4gICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPEdhbWVDZWxsIGtleT17aX0gb25DbGljaz17KCkgPT4gaGFuZGxlQ2VsbENsaWNrKGkpfT5cclxuICAgICAgICAgICAgICB7c3ltYm9sICYmIDxHYW1lU3ltYm9sIHN5bWJvbD17c3ltYm9sfSBjbGFzc05hbWU9XCJ3LTUgaC01XCIgLz59XHJcbiAgICAgICAgICAgIDwvR2FtZUNlbGw+XHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH0pfVxyXG4gICAgICA8L0dhbWVHcmlkPlxyXG4gICAgPC9HYW1lRmllbGRMYXlvdXQ+XHJcbiAgKTtcclxufVxyXG5cclxuZnVuY3Rpb24gR2FtZUZpZWxkTGF5b3V0KHsgY2xhc3NOYW1lLCBjaGlsZHJlbiB9KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXZcclxuICAgICAgY2xhc3NOYW1lPXtjbHN4KFxyXG4gICAgICAgIGNsYXNzTmFtZSxcclxuICAgICAgICBcImJnLXdoaXRlIHB0LTUgcGItNyBweC04IHJvdW5kZWQtMnhsIHNoYWRvdy1tZFwiLFxyXG4gICAgICApfVxyXG4gICAgPlxyXG4gICAgICB7Y2hpbGRyZW59XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBHYW1lTW92ZUluZm8oeyBhY3Rpb25zLCBjdXJyZW50TW92ZSwgbmV4dE1vdmUgfSkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC14LTNcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtci1hdXRvXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAteC0xIHRleHQteGwgZm9udC1zZW1pYm9sZFwiPlxyXG4gICAgICAgICAg0KXQvtC0OiA8R2FtZVN5bWJvbCBzeW1ib2w9e2N1cnJlbnRNb3ZlfSBjbGFzc05hbWU9XCJ3LTUgaC01XCIgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC14LTEgdGV4dC1zbGF0ZS00MDAgdGV4dC1zbVwiPlxyXG4gICAgICAgICAg0KHQu9C10LTRg9GO0YnQuNC5OiA8R2FtZVN5bWJvbCBzeW1ib2w9e25leHRNb3ZlfSBjbGFzc05hbWU9XCJ3LTMgaC0zXCIgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIHthY3Rpb25zfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZnVuY3Rpb24gR2FtZUdyaWQoeyBjaGlsZHJlbiB9KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtMyBncmlkIGdyaWQtY29scy1bcmVwZWF0KDE5LF8zMHB4KV0gcHQtcHggcGwtcHhcIj5cclxuICAgICAge2NoaWxkcmVufVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZnVuY3Rpb24gR2FtZUNlbGwoeyBjaGlsZHJlbiwgb25DbGljayB9KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxidXR0b25cclxuICAgICAgY2xhc3NOYW1lPVwidy1bMzBweF0gaC1bMzBweF0gYm9yZGVyIGJvcmRlci1zb2xpZCBib3JkZXItc2xhdGUtMjAwIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIC1tdC1weCAtbWwtcHhcIlxyXG4gICAgICBvbkNsaWNrPXtvbkNsaWNrfVxyXG4gICAgPlxyXG4gICAgICB7Y2hpbGRyZW59XHJcbiAgICA8L2J1dHRvbj5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJjbHN4IiwiVWlCdXR0b24iLCJaZXJvSWNvbiIsIkNyb3NzSWNvbiIsIlRyaWFuZ2xlSWNvbiIsIlNxdWFyZUljb24iLCJ1c2VTdGF0ZSIsIkdBTUVfU1lNQk9MUyIsIkdhbWVTeW1ib2wiLCJNT1ZFX09SREVSIiwiQ1JPU1MiLCJaRVJPIiwiVFJJQU5HTEUiLCJTUVVBUkUiLCJnZXROZXh0TW92ZSIsImN1cnJlbnRNb3ZlIiwibmV4dE1vdmVJbmRleCIsImluZGV4T2YiLCJHYW1lRmllbGQiLCJjbGFzc05hbWUiLCJjZWxscyIsInNldEdhbWVTdGF0ZSIsIkFycmF5IiwiZmlsbCIsIm5leHRNb3ZlIiwiaGFuZGxlQ2VsbENsaWNrIiwiaW5kZXgiLCJsYXN0R2FtZVN0YXRlIiwibWFwIiwiY2VsbCIsImkiLCJhY3Rpb25zIiwic2l6ZSIsInZhcmlhbnQiLCJHYW1lRmllbGRMYXlvdXQiLCJHYW1lTW92ZUluZm8iLCJHYW1lR3JpZCIsInN5bWJvbCIsIkdhbWVDZWxsIiwib25DbGljayIsImNoaWxkcmVuIiwiZGl2IiwiYnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/game/game-field.jsx\n"));

/***/ })

});
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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GameField: function() { return /* binding */ GameField; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! clsx */ \"./node_modules/clsx/dist/clsx.mjs\");\n/* harmony import */ var _ui_kit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ui-kit */ \"./components/ui-kit/index.js\");\n/* harmony import */ var _icons_zero_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./icons/zero-icon */ \"./components/game/icons/zero-icon.jsx\");\n/* harmony import */ var _icons_cross_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./icons/cross-icon */ \"./components/game/icons/cross-icon.jsx\");\n/* harmony import */ var _icons_triangle_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./icons/triangle-icon */ \"./components/game/icons/triangle-icon.jsx\");\n/* harmony import */ var _icons_square_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./icons/square-icon */ \"./components/game/icons/square-icon.jsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./constants */ \"./components/game/constants.js\");\n/* harmony import */ var _game_symbol__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./game-symbol */ \"./components/game/game-symbol.jsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nconst MOVE_ORDER = [\n    _constants__WEBPACK_IMPORTED_MODULE_8__.GAME_SYMBOLS.CROSS,\n    _constants__WEBPACK_IMPORTED_MODULE_8__.GAME_SYMBOLS.ZERO,\n    _constants__WEBPACK_IMPORTED_MODULE_8__.GAME_SYMBOLS.TRIANGLE,\n    _constants__WEBPACK_IMPORTED_MODULE_8__.GAME_SYMBOLS.SQUARE\n];\nconst getNextMove = (currentMove)=>{\n    let nextMoveIndex = MOVE_ORDER.indexOf(currentMove) + 1;\n    var _MOVE_ORDER_nextMoveIndex;\n    return (_MOVE_ORDER_nextMoveIndex = MOVE_ORDER[nextMoveIndex]) !== null && _MOVE_ORDER_nextMoveIndex !== void 0 ? _MOVE_ORDER_nextMoveIndex : MOVE_ORDER[0];\n};\nfunction GameField(param) {\n    let { className } = param;\n    _s();\n    const [{ cells, currentMove }, setGameState] = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)({\n        cells: new Array(19 * 19).fill(null),\n        currentMove: _constants__WEBPACK_IMPORTED_MODULE_8__.GAME_SYMBOLS.CROSS\n    });\n    const nextMove = getNextMove(currentMove);\n    const handleCellClick = (param)=>{\n        let { index } = param;\n        setGameState((lastGameState)=>({\n                ...lastGameState,\n                currentMove: getNextMove(lastGameState.currentMove),\n                cells: lastGameState.cells.map((cell, i)=>i === index ? lastGameState.currentMove : cell)\n            }));\n    };\n    const actions = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_kit__WEBPACK_IMPORTED_MODULE_2__.UiButton, {\n                size: \"md\",\n                variant: \"primary\",\n                children: \"Ничья\"\n            }, void 0, false, {\n                fileName: \"D:\\\\react course\\\\tic-tac-toe-git\\\\components\\\\game\\\\game-field.jsx\",\n                lineNumber: 41,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_kit__WEBPACK_IMPORTED_MODULE_2__.UiButton, {\n                size: \"md\",\n                variant: \"outline\",\n                children: \"Сдаться\"\n            }, void 0, false, {\n                fileName: \"D:\\\\react course\\\\tic-tac-toe-git\\\\components\\\\game\\\\game-field.jsx\",\n                lineNumber: 44,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(GameFieldLayout, {\n        className: className,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(GameMoveInfo, {\n                actions: actions,\n                currentMove: currentMove,\n                nextMove: nextMove\n            }, void 0, false, {\n                fileName: \"D:\\\\react course\\\\tic-tac-toe-git\\\\components\\\\game\\\\game-field.jsx\",\n                lineNumber: 51,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(GameGrid, {\n                children: cells.map((symbol, i)=>{\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(GameCell, {\n                        onClick: ()=>handleCellClick(i),\n                        children: symbol && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_game_symbol__WEBPACK_IMPORTED_MODULE_9__.GameSymbol, {\n                            symbol: currentMove,\n                            className: \"w-3 h-3\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\react course\\\\tic-tac-toe-git\\\\components\\\\game\\\\game-field.jsx\",\n                            lineNumber: 61,\n                            columnNumber: 17\n                        }, this)\n                    }, i, false, {\n                        fileName: \"D:\\\\react course\\\\tic-tac-toe-git\\\\components\\\\game\\\\game-field.jsx\",\n                        lineNumber: 59,\n                        columnNumber: 13\n                    }, this);\n                })\n            }, void 0, false, {\n                fileName: \"D:\\\\react course\\\\tic-tac-toe-git\\\\components\\\\game\\\\game-field.jsx\",\n                lineNumber: 56,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\react course\\\\tic-tac-toe-git\\\\components\\\\game\\\\game-field.jsx\",\n        lineNumber: 50,\n        columnNumber: 5\n    }, this);\n}\n_s(GameField, \"U+HtGMq2gM75v/xHtiyhpEgzVpo=\");\n_c = GameField;\nfunction GameFieldLayout(param) {\n    let { className, children } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (0,clsx__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(className, \"bg-white pt-5 pb-7 px-8 rounded-2xl shadow-md\"),\n        children: children\n    }, void 0, false, {\n        fileName: \"D:\\\\react course\\\\tic-tac-toe-git\\\\components\\\\game\\\\game-field.jsx\",\n        lineNumber: 73,\n        columnNumber: 5\n    }, this);\n}\n_c1 = GameFieldLayout;\nfunction GameMoveInfo(param) {\n    let { actions, currentMove, nextMove } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex items-center gap-x-3\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mr-auto\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex items-center gap-x-1 text-xl font-semibold\",\n                        children: [\n                            \"Ход: \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_game_symbol__WEBPACK_IMPORTED_MODULE_9__.GameSymbol, {\n                                symbol: currentMove,\n                                className: \"w-5 h-5\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\react course\\\\tic-tac-toe-git\\\\components\\\\game\\\\game-field.jsx\",\n                                lineNumber: 89,\n                                columnNumber: 16\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\react course\\\\tic-tac-toe-git\\\\components\\\\game\\\\game-field.jsx\",\n                        lineNumber: 88,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex items-center gap-x-1 text-slate-400 text-sm\",\n                        children: [\n                            \"Следующий: \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_game_symbol__WEBPACK_IMPORTED_MODULE_9__.GameSymbol, {\n                                symbol: nextMove,\n                                className: \"w-3 h-3\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\react course\\\\tic-tac-toe-git\\\\components\\\\game\\\\game-field.jsx\",\n                                lineNumber: 92,\n                                columnNumber: 22\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\react course\\\\tic-tac-toe-git\\\\components\\\\game\\\\game-field.jsx\",\n                        lineNumber: 91,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\react course\\\\tic-tac-toe-git\\\\components\\\\game\\\\game-field.jsx\",\n                lineNumber: 87,\n                columnNumber: 7\n            }, this),\n            actions\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\react course\\\\tic-tac-toe-git\\\\components\\\\game\\\\game-field.jsx\",\n        lineNumber: 86,\n        columnNumber: 5\n    }, this);\n}\n_c2 = GameMoveInfo;\nfunction GameGrid(param) {\n    let { children } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"mt-3 grid grid-cols-[repeat(19,_30px)] pt-px pl-px\",\n        children: children\n    }, void 0, false, {\n        fileName: \"D:\\\\react course\\\\tic-tac-toe-git\\\\components\\\\game\\\\game-field.jsx\",\n        lineNumber: 102,\n        columnNumber: 5\n    }, this);\n}\n_c3 = GameGrid;\nfunction GameCell(param) {\n    let { children, onClick } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        className: \"w-[30px] h-[30px] border border-solid border-slate-200 flex items-center justify-center -mt-px -ml-px\",\n        onClick: onClick,\n        children: children\n    }, void 0, false, {\n        fileName: \"D:\\\\react course\\\\tic-tac-toe-git\\\\components\\\\game\\\\game-field.jsx\",\n        lineNumber: 110,\n        columnNumber: 5\n    }, this);\n}\n_c4 = GameCell;\nvar _c, _c1, _c2, _c3, _c4;\n$RefreshReg$(_c, \"GameField\");\n$RefreshReg$(_c1, \"GameFieldLayout\");\n$RefreshReg$(_c2, \"GameMoveInfo\");\n$RefreshReg$(_c3, \"GameGrid\");\n$RefreshReg$(_c4, \"GameCell\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVosRUFBRUksUUFBUSxFQUFFLEdBQVo7SUFDaEIscUJBQ0UsOERBQUNDO1FBQUl0QixXQUFVO2tCQUNacUI7Ozs7OztBQUdQO01BTlNKO0FBUVQsU0FBU0UsU0FBUyxLQUFxQjtRQUFyQixFQUFFRSxRQUFRLEVBQUVELE9BQU8sRUFBRSxHQUFyQjtJQUNoQixxQkFDRSw4REFBQ0c7UUFDQ3ZCLFdBQVU7UUFDVm9CLFNBQVNBO2tCQUVSQzs7Ozs7O0FBR1A7TUFUU0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9nYW1lL2dhbWUtZmllbGQuanN4P2M2MDMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNsc3ggZnJvbSBcImNsc3hcIjtcclxuaW1wb3J0IHsgVWlCdXR0b24gfSBmcm9tIFwiLi4vdWkta2l0XCI7XHJcbmltcG9ydCB7IFplcm9JY29uIH0gZnJvbSBcIi4vaWNvbnMvemVyby1pY29uXCI7XHJcbmltcG9ydCB7IENyb3NzSWNvbiB9IGZyb20gXCIuL2ljb25zL2Nyb3NzLWljb25cIjtcclxuaW1wb3J0IHsgVHJpYW5nbGVJY29uIH0gZnJvbSBcIi4vaWNvbnMvdHJpYW5nbGUtaWNvblwiO1xyXG5pbXBvcnQgeyBTcXVhcmVJY29uIH0gZnJvbSBcIi4vaWNvbnMvc3F1YXJlLWljb25cIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgR0FNRV9TWU1CT0xTIH0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XHJcbmltcG9ydCB7IEdhbWVTeW1ib2wgfSBmcm9tIFwiLi9nYW1lLXN5bWJvbFwiO1xyXG5cclxuY29uc3QgTU9WRV9PUkRFUiA9IFtcclxuICBHQU1FX1NZTUJPTFMuQ1JPU1MsXHJcbiAgR0FNRV9TWU1CT0xTLlpFUk8sXHJcbiAgR0FNRV9TWU1CT0xTLlRSSUFOR0xFLFxyXG4gIEdBTUVfU1lNQk9MUy5TUVVBUkUsXHJcbl07XHJcblxyXG5jb25zdCBnZXROZXh0TW92ZSA9IChjdXJyZW50TW92ZSkgPT4ge1xyXG4gIGxldCBuZXh0TW92ZUluZGV4ID0gTU9WRV9PUkRFUi5pbmRleE9mKGN1cnJlbnRNb3ZlKSArIDE7XHJcbiAgcmV0dXJuIE1PVkVfT1JERVJbbmV4dE1vdmVJbmRleF0gPz8gTU9WRV9PUkRFUlswXTtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBHYW1lRmllbGQoeyBjbGFzc05hbWUgfSkge1xyXG4gIGNvbnN0IFt7IGNlbGxzLCBjdXJyZW50TW92ZSB9LCBzZXRHYW1lU3RhdGVdID0gdXNlU3RhdGUoe1xyXG4gICAgY2VsbHM6IG5ldyBBcnJheSgxOSAqIDE5KS5maWxsKG51bGwpLFxyXG4gICAgY3VycmVudE1vdmU6IEdBTUVfU1lNQk9MUy5DUk9TUyxcclxuICB9KTtcclxuICBjb25zdCBuZXh0TW92ZSA9IGdldE5leHRNb3ZlKGN1cnJlbnRNb3ZlKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2VsbENsaWNrID0gKHsgaW5kZXggfSkgPT4ge1xyXG4gICAgc2V0R2FtZVN0YXRlKChsYXN0R2FtZVN0YXRlKSA9PiAoe1xyXG4gICAgICAuLi5sYXN0R2FtZVN0YXRlLFxyXG4gICAgICBjdXJyZW50TW92ZTogZ2V0TmV4dE1vdmUobGFzdEdhbWVTdGF0ZS5jdXJyZW50TW92ZSksXHJcbiAgICAgIGNlbGxzOiBsYXN0R2FtZVN0YXRlLmNlbGxzLm1hcCgoY2VsbCwgaSkgPT5cclxuICAgICAgICBpID09PSBpbmRleCA/IGxhc3RHYW1lU3RhdGUuY3VycmVudE1vdmUgOiBjZWxsLFxyXG4gICAgICApLFxyXG4gICAgfSkpO1xyXG4gIH07XHJcbiAgY29uc3QgYWN0aW9ucyA9IChcclxuICAgIDw+XHJcbiAgICAgIDxVaUJ1dHRvbiBzaXplPXtcIm1kXCJ9IHZhcmlhbnQ9e1wicHJpbWFyeVwifT5cclxuICAgICAgICDQndC40YfRjNGPXHJcbiAgICAgIDwvVWlCdXR0b24+XHJcbiAgICAgIDxVaUJ1dHRvbiBzaXplPXtcIm1kXCJ9IHZhcmlhbnQ9e1wib3V0bGluZVwifT5cclxuICAgICAgICDQodC00LDRgtGM0YHRj1xyXG4gICAgICA8L1VpQnV0dG9uPlxyXG4gICAgPC8+XHJcbiAgKTtcclxuICByZXR1cm4gKFxyXG4gICAgPEdhbWVGaWVsZExheW91dCBjbGFzc05hbWU9e2NsYXNzTmFtZX0+XHJcbiAgICAgIDxHYW1lTW92ZUluZm9cclxuICAgICAgICBhY3Rpb25zPXthY3Rpb25zfVxyXG4gICAgICAgIGN1cnJlbnRNb3ZlPXtjdXJyZW50TW92ZX1cclxuICAgICAgICBuZXh0TW92ZT17bmV4dE1vdmV9XHJcbiAgICAgIC8+XHJcbiAgICAgIDxHYW1lR3JpZD5cclxuICAgICAgICB7Y2VsbHMubWFwKChzeW1ib2wsIGkpID0+IHtcclxuICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxHYW1lQ2VsbCBrZXk9e2l9IG9uQ2xpY2s9eygpID0+IGhhbmRsZUNlbGxDbGljayhpKX0+XHJcbiAgICAgICAgICAgICAge3N5bWJvbCAmJiAoXHJcbiAgICAgICAgICAgICAgICA8R2FtZVN5bWJvbCBzeW1ib2w9e2N1cnJlbnRNb3ZlfSBjbGFzc05hbWU9XCJ3LTMgaC0zXCIgLz5cclxuICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA8L0dhbWVDZWxsPlxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9KX1cclxuICAgICAgPC9HYW1lR3JpZD5cclxuICAgIDwvR2FtZUZpZWxkTGF5b3V0PlxyXG4gICk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIEdhbWVGaWVsZExheW91dCh7IGNsYXNzTmFtZSwgY2hpbGRyZW4gfSkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2XHJcbiAgICAgIGNsYXNzTmFtZT17Y2xzeChcclxuICAgICAgICBjbGFzc05hbWUsXHJcbiAgICAgICAgXCJiZy13aGl0ZSBwdC01IHBiLTcgcHgtOCByb3VuZGVkLTJ4bCBzaGFkb3ctbWRcIixcclxuICAgICAgKX1cclxuICAgID5cclxuICAgICAge2NoaWxkcmVufVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZnVuY3Rpb24gR2FtZU1vdmVJbmZvKHsgYWN0aW9ucywgY3VycmVudE1vdmUsIG5leHRNb3ZlIH0pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAteC0zXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXItYXV0b1wiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLXgtMSB0ZXh0LXhsIGZvbnQtc2VtaWJvbGRcIj5cclxuICAgICAgICAgINCl0L7QtDogPEdhbWVTeW1ib2wgc3ltYm9sPXtjdXJyZW50TW92ZX0gY2xhc3NOYW1lPVwidy01IGgtNVwiIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAteC0xIHRleHQtc2xhdGUtNDAwIHRleHQtc21cIj5cclxuICAgICAgICAgINCh0LvQtdC00YPRjtGJ0LjQuTogPEdhbWVTeW1ib2wgc3ltYm9sPXtuZXh0TW92ZX0gY2xhc3NOYW1lPVwidy0zIGgtM1wiIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICB7YWN0aW9uc31cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIEdhbWVHcmlkKHsgY2hpbGRyZW4gfSkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTMgZ3JpZCBncmlkLWNvbHMtW3JlcGVhdCgxOSxfMzBweCldIHB0LXB4IHBsLXB4XCI+XHJcbiAgICAgIHtjaGlsZHJlbn1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIEdhbWVDZWxsKHsgY2hpbGRyZW4sIG9uQ2xpY2sgfSkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8YnV0dG9uXHJcbiAgICAgIGNsYXNzTmFtZT1cInctWzMwcHhdIGgtWzMwcHhdIGJvcmRlciBib3JkZXItc29saWQgYm9yZGVyLXNsYXRlLTIwMCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciAtbXQtcHggLW1sLXB4XCJcclxuICAgICAgb25DbGljaz17b25DbGlja31cclxuICAgID5cclxuICAgICAge2NoaWxkcmVufVxyXG4gICAgPC9idXR0b24+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsiY2xzeCIsIlVpQnV0dG9uIiwiWmVyb0ljb24iLCJDcm9zc0ljb24iLCJUcmlhbmdsZUljb24iLCJTcXVhcmVJY29uIiwidXNlU3RhdGUiLCJHQU1FX1NZTUJPTFMiLCJHYW1lU3ltYm9sIiwiTU9WRV9PUkRFUiIsIkNST1NTIiwiWkVSTyIsIlRSSUFOR0xFIiwiU1FVQVJFIiwiZ2V0TmV4dE1vdmUiLCJjdXJyZW50TW92ZSIsIm5leHRNb3ZlSW5kZXgiLCJpbmRleE9mIiwiR2FtZUZpZWxkIiwiY2xhc3NOYW1lIiwiY2VsbHMiLCJzZXRHYW1lU3RhdGUiLCJBcnJheSIsImZpbGwiLCJuZXh0TW92ZSIsImhhbmRsZUNlbGxDbGljayIsImluZGV4IiwibGFzdEdhbWVTdGF0ZSIsIm1hcCIsImNlbGwiLCJpIiwiYWN0aW9ucyIsInNpemUiLCJ2YXJpYW50IiwiR2FtZUZpZWxkTGF5b3V0IiwiR2FtZU1vdmVJbmZvIiwiR2FtZUdyaWQiLCJzeW1ib2wiLCJHYW1lQ2VsbCIsIm9uQ2xpY2siLCJjaGlsZHJlbiIsImRpdiIsImJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/game/game-field.jsx\n"));

/***/ })

});
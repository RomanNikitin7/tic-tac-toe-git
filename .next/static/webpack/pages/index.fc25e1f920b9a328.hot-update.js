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

/***/ "./components/game/use-game-state.js":
/*!*******************************************!*\
  !*** ./components/game/use-game-state.js ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   UseGameState: function() { return /* binding */ UseGameState; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ \"./components/game/constants.js\");\nvar _s = $RefreshSig$();\n\n\nfunction UseGameState(param) {\n    let { playersCount } = param;\n    _s();\n    const [{ cells, currentMove }, setGameState] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({\n        cells: new Array(19 * 19).fill(null),\n        currentMove: _constants__WEBPACK_IMPORTED_MODULE_1__.GAME_SYMBOLS.CROSS\n    });\n    const getNextMove = (currentMove, playersCount)=>{\n        const slicedMoveOrder = _constants__WEBPACK_IMPORTED_MODULE_1__.MOVE_ORDER.slice(0, playersCount);\n        let nextMoveIndex = slicedMoveOrder.indexOf(currentMove) + 1;\n        var _slicedMoveOrder_nextMoveIndex;\n        return (_slicedMoveOrder_nextMoveIndex = slicedMoveOrder[nextMoveIndex]) !== null && _slicedMoveOrder_nextMoveIndex !== void 0 ? _slicedMoveOrder_nextMoveIndex : slicedMoveOrder[0];\n    };\n    const nextMove = getNextMove(currentMove, playersCount);\n    const handleCellClick = (index)=>{\n        setGameState((lastGameState)=>{\n            if (lastGameState.cells[index]) {\n                return lastGameState;\n            }\n            return {\n                ...lastGameState,\n                currentMove: getNextMove(lastGameState.currentMove, playersCount),\n                cells: lastGameState.cells.map((cell, i)=>i === index ? lastGameState.currentMove : cell)\n            };\n        });\n    };\n    return {\n        cells,\n        currentMove,\n        nextMove,\n        handleCellClick\n    };\n}\n_s(UseGameState, \"U+HtGMq2gM75v/xHtiyhpEgzVpo=\");\n_c = UseGameState;\nvar _c;\n$RefreshReg$(_c, \"UseGameState\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2dhbWUvdXNlLWdhbWUtc3RhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBaUM7QUFDc0I7QUFFaEQsU0FBU0csYUFBYSxLQUFnQjtRQUFoQixFQUFFQyxZQUFZLEVBQUUsR0FBaEI7O0lBQzNCLE1BQU0sQ0FBQyxFQUFFQyxLQUFLLEVBQUVDLFdBQVcsRUFBRSxFQUFFQyxhQUFhLEdBQUdQLCtDQUFRQSxDQUFDO1FBQ3RESyxPQUFPLElBQUlHLE1BQU0sS0FBSyxJQUFJQyxJQUFJLENBQUM7UUFDL0JILGFBQWFMLG9EQUFZQSxDQUFDUyxLQUFLO0lBQ2pDO0lBQ0EsTUFBTUMsY0FBYyxDQUFDTCxhQUFhRjtRQUNoQyxNQUFNUSxrQkFBa0JWLGtEQUFVQSxDQUFDVyxLQUFLLENBQUMsR0FBR1Q7UUFDNUMsSUFBSVUsZ0JBQWdCRixnQkFBZ0JHLE9BQU8sQ0FBQ1QsZUFBZTtZQUNwRE07UUFBUCxPQUFPQSxDQUFBQSxpQ0FBQUEsZUFBZSxDQUFDRSxjQUFjLGNBQTlCRiw0Q0FBQUEsaUNBQWtDQSxlQUFlLENBQUMsRUFBRTtJQUM3RDtJQUNBLE1BQU1JLFdBQVdMLFlBQVlMLGFBQWFGO0lBRTFDLE1BQU1hLGtCQUFrQixDQUFDQztRQUN2QlgsYUFBYSxDQUFDWTtZQUNaLElBQUlBLGNBQWNkLEtBQUssQ0FBQ2EsTUFBTSxFQUFFO2dCQUM5QixPQUFPQztZQUNUO1lBQ0EsT0FBTztnQkFDTCxHQUFHQSxhQUFhO2dCQUNoQmIsYUFBYUssWUFBWVEsY0FBY2IsV0FBVyxFQUFFRjtnQkFDcERDLE9BQU9jLGNBQWNkLEtBQUssQ0FBQ2UsR0FBRyxDQUFDLENBQUNDLE1BQU1DLElBQ3BDQSxNQUFNSixRQUFRQyxjQUFjYixXQUFXLEdBQUdlO1lBRTlDO1FBQ0Y7SUFDRjtJQUNBLE9BQU87UUFDTGhCO1FBQ0FDO1FBQ0FVO1FBQ0FDO0lBQ0Y7QUFDRjtHQWhDZ0JkO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvZ2FtZS91c2UtZ2FtZS1zdGF0ZS5qcz8xMTAyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IEdBTUVfU1lNQk9MUywgTU9WRV9PUkRFUiB9IGZyb20gXCIuL2NvbnN0YW50c1wiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFVzZUdhbWVTdGF0ZSh7IHBsYXllcnNDb3VudCB9KSB7XHJcbiAgY29uc3QgW3sgY2VsbHMsIGN1cnJlbnRNb3ZlIH0sIHNldEdhbWVTdGF0ZV0gPSB1c2VTdGF0ZSh7XHJcbiAgICBjZWxsczogbmV3IEFycmF5KDE5ICogMTkpLmZpbGwobnVsbCksXHJcbiAgICBjdXJyZW50TW92ZTogR0FNRV9TWU1CT0xTLkNST1NTLFxyXG4gIH0pO1xyXG4gIGNvbnN0IGdldE5leHRNb3ZlID0gKGN1cnJlbnRNb3ZlLCBwbGF5ZXJzQ291bnQpID0+IHtcclxuICAgIGNvbnN0IHNsaWNlZE1vdmVPcmRlciA9IE1PVkVfT1JERVIuc2xpY2UoMCwgcGxheWVyc0NvdW50KTtcclxuICAgIGxldCBuZXh0TW92ZUluZGV4ID0gc2xpY2VkTW92ZU9yZGVyLmluZGV4T2YoY3VycmVudE1vdmUpICsgMTtcclxuICAgIHJldHVybiBzbGljZWRNb3ZlT3JkZXJbbmV4dE1vdmVJbmRleF0gPz8gc2xpY2VkTW92ZU9yZGVyWzBdO1xyXG4gIH07XHJcbiAgY29uc3QgbmV4dE1vdmUgPSBnZXROZXh0TW92ZShjdXJyZW50TW92ZSwgcGxheWVyc0NvdW50KTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2VsbENsaWNrID0gKGluZGV4KSA9PiB7XHJcbiAgICBzZXRHYW1lU3RhdGUoKGxhc3RHYW1lU3RhdGUpID0+IHtcclxuICAgICAgaWYgKGxhc3RHYW1lU3RhdGUuY2VsbHNbaW5kZXhdKSB7XHJcbiAgICAgICAgcmV0dXJuIGxhc3RHYW1lU3RhdGU7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5sYXN0R2FtZVN0YXRlLFxyXG4gICAgICAgIGN1cnJlbnRNb3ZlOiBnZXROZXh0TW92ZShsYXN0R2FtZVN0YXRlLmN1cnJlbnRNb3ZlLCBwbGF5ZXJzQ291bnQpLFxyXG4gICAgICAgIGNlbGxzOiBsYXN0R2FtZVN0YXRlLmNlbGxzLm1hcCgoY2VsbCwgaSkgPT5cclxuICAgICAgICAgIGkgPT09IGluZGV4ID8gbGFzdEdhbWVTdGF0ZS5jdXJyZW50TW92ZSA6IGNlbGwsXHJcbiAgICAgICAgKSxcclxuICAgICAgfTtcclxuICAgIH0pO1xyXG4gIH07XHJcbiAgcmV0dXJuIHtcclxuICAgIGNlbGxzLFxyXG4gICAgY3VycmVudE1vdmUsXHJcbiAgICBuZXh0TW92ZSxcclxuICAgIGhhbmRsZUNlbGxDbGljayxcclxuICB9O1xyXG59XHJcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIkdBTUVfU1lNQk9MUyIsIk1PVkVfT1JERVIiLCJVc2VHYW1lU3RhdGUiLCJwbGF5ZXJzQ291bnQiLCJjZWxscyIsImN1cnJlbnRNb3ZlIiwic2V0R2FtZVN0YXRlIiwiQXJyYXkiLCJmaWxsIiwiQ1JPU1MiLCJnZXROZXh0TW92ZSIsInNsaWNlZE1vdmVPcmRlciIsInNsaWNlIiwibmV4dE1vdmVJbmRleCIsImluZGV4T2YiLCJuZXh0TW92ZSIsImhhbmRsZUNlbGxDbGljayIsImluZGV4IiwibGFzdEdhbWVTdGF0ZSIsIm1hcCIsImNlbGwiLCJpIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/game/use-game-state.js\n"));

/***/ })

});
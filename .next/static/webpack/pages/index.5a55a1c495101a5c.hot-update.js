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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   UseGameState: function() { return /* binding */ UseGameState; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ \"./components/game/constants.js\");\nvar _s = $RefreshSig$();\n\n\nconst getNextMove = (currentMove, playersCount)=>{\n    const slicedMoveOrder = _constants__WEBPACK_IMPORTED_MODULE_1__.MOVE_ORDER.slice(0, playersCount);\n    let nextMoveIndex = slicedMoveOrder.indexOf(currentMove) + 1;\n    var _slicedMoveOrder_nextMoveIndex;\n    return (_slicedMoveOrder_nextMoveIndex = slicedMoveOrder[nextMoveIndex]) !== null && _slicedMoveOrder_nextMoveIndex !== void 0 ? _slicedMoveOrder_nextMoveIndex : slicedMoveOrder[0];\n};\nfunction computeWinner(cells) {\n    let sequenceSize = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 5, fieldSize = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 19;\n    const gap = Math.floor(sequenceSize / 2);\n    function compareElements(indexes) {\n        let result = true;\n        for(let i = 1; i < indexes.length; i++){\n            result && (result = !!cells[indexes[i]]);\n            result && (result = cells[indexes[i - 1]] === cells[indexes[i]]);\n        }\n        return result;\n    }\n    function getSequenceIndexes(i) {\n        const res = [\n            [],\n            [],\n            [],\n            []\n        ];\n        for(let j = 0; j < sequenceSize; j++){\n            res[0].push(j - gap + i);\n            res[1].push(fieldSize * (j - gap) + (j - gap) + i);\n            res[2].push(-fieldSize * (j - gap) + (j - gap) + i);\n            res[3].push(fieldSize * (j - gap) + i);\n        }\n        return res;\n    }\n    for(let i = 0; i < cells.length; i++){\n        if (cells[i]) {\n            const indexRows = getSequenceIndexes(i);\n            const winnerIndexes = indexRows.find((row)=>compareElements(row));\n            if (winnerIndexes) {\n                return winnerIndexes;\n            }\n        }\n        return undefined;\n    }\n}\nfunction UseGameState(playersCount) {\n    _s();\n    const [{ cells, currentMove }, setGameState] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({\n        cells: new Array(19 * 19).fill(null),\n        currentMove: _constants__WEBPACK_IMPORTED_MODULE_1__.GAME_SYMBOLS.CROSS\n    });\n    console.log(computeWinner(cells));\n    const nextMove = getNextMove(currentMove, playersCount);\n    const handleCellClick = (index)=>{\n        setGameState((lastGameState)=>{\n            if (lastGameState.cells[index]) {\n                return lastGameState;\n            }\n            return {\n                ...lastGameState,\n                currentMove: getNextMove(lastGameState.currentMove, playersCount),\n                cells: lastGameState.cells.map((cell, i)=>i === index ? lastGameState.currentMove : cell)\n            };\n        });\n    };\n    return {\n        cells,\n        currentMove,\n        nextMove,\n        handleCellClick\n    };\n}\n_s(UseGameState, \"U+HtGMq2gM75v/xHtiyhpEgzVpo=\");\n_c = UseGameState;\nvar _c;\n$RefreshReg$(_c, \"UseGameState\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUssQ0FBQytCLEdBQUcsQ0FBQyxDQUFDQyxNQUFNdkIsSUFDcENBLE1BQU1vQixRQUFRQyxjQUFjckMsV0FBVyxHQUFHdUM7WUFFOUM7UUFDRjtJQUNGO0lBQ0EsT0FBTztRQUNMaEM7UUFDQVA7UUFDQWtDO1FBQ0FDO0lBQ0Y7QUFDRjtHQTNCZ0JSO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvZ2FtZS91c2UtZ2FtZS1zdGF0ZS5qcz8xMTAyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IEdBTUVfU1lNQk9MUywgTU9WRV9PUkRFUiB9IGZyb20gXCIuL2NvbnN0YW50c1wiO1xyXG5cclxuY29uc3QgZ2V0TmV4dE1vdmUgPSAoY3VycmVudE1vdmUsIHBsYXllcnNDb3VudCkgPT4ge1xyXG4gIGNvbnN0IHNsaWNlZE1vdmVPcmRlciA9IE1PVkVfT1JERVIuc2xpY2UoMCwgcGxheWVyc0NvdW50KTtcclxuICBsZXQgbmV4dE1vdmVJbmRleCA9IHNsaWNlZE1vdmVPcmRlci5pbmRleE9mKGN1cnJlbnRNb3ZlKSArIDE7XHJcbiAgcmV0dXJuIHNsaWNlZE1vdmVPcmRlcltuZXh0TW92ZUluZGV4XSA/PyBzbGljZWRNb3ZlT3JkZXJbMF07XHJcbn07XHJcblxyXG5mdW5jdGlvbiBjb21wdXRlV2lubmVyKGNlbGxzLCBzZXF1ZW5jZVNpemUgPSA1LCBmaWVsZFNpemUgPSAxOSkge1xyXG4gIGNvbnN0IGdhcCA9IE1hdGguZmxvb3Ioc2VxdWVuY2VTaXplIC8gMik7XHJcbiAgZnVuY3Rpb24gY29tcGFyZUVsZW1lbnRzKGluZGV4ZXMpIHtcclxuICAgIGxldCByZXN1bHQgPSB0cnVlO1xyXG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPCBpbmRleGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIHJlc3VsdCAmJj0gISFjZWxsc1tpbmRleGVzW2ldXTtcclxuICAgICAgcmVzdWx0ICYmPSBjZWxsc1tpbmRleGVzW2kgLSAxXV0gPT09IGNlbGxzW2luZGV4ZXNbaV1dO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxuICB9XHJcbiAgZnVuY3Rpb24gZ2V0U2VxdWVuY2VJbmRleGVzKGkpIHtcclxuICAgIGNvbnN0IHJlcyA9IFtbXSwgW10sIFtdLCBbXV07XHJcblxyXG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCBzZXF1ZW5jZVNpemU7IGorKykge1xyXG4gICAgICByZXNbMF0ucHVzaChqIC0gZ2FwICsgaSk7XHJcbiAgICAgIHJlc1sxXS5wdXNoKGZpZWxkU2l6ZSAqIChqIC0gZ2FwKSArIChqIC0gZ2FwKSArIGkpO1xyXG4gICAgICByZXNbMl0ucHVzaCgtZmllbGRTaXplICogKGogLSBnYXApICsgKGogLSBnYXApICsgaSk7XHJcbiAgICAgIHJlc1szXS5wdXNoKGZpZWxkU2l6ZSAqIChqIC0gZ2FwKSArIGkpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJlcztcclxuICB9XHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBjZWxscy5sZW5ndGg7IGkrKykge1xyXG4gICAgaWYgKGNlbGxzW2ldKSB7XHJcbiAgICAgIGNvbnN0IGluZGV4Um93cyA9IGdldFNlcXVlbmNlSW5kZXhlcyhpKTtcclxuICAgICAgY29uc3Qgd2lubmVySW5kZXhlcyA9IGluZGV4Um93cy5maW5kKChyb3cpID0+IGNvbXBhcmVFbGVtZW50cyhyb3cpKTtcclxuICAgICAgaWYgKHdpbm5lckluZGV4ZXMpIHtcclxuICAgICAgICByZXR1cm4gd2lubmVySW5kZXhlcztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBVc2VHYW1lU3RhdGUocGxheWVyc0NvdW50KSB7XHJcbiAgY29uc3QgW3sgY2VsbHMsIGN1cnJlbnRNb3ZlIH0sIHNldEdhbWVTdGF0ZV0gPSB1c2VTdGF0ZSh7XHJcbiAgICBjZWxsczogbmV3IEFycmF5KDE5ICogMTkpLmZpbGwobnVsbCksXHJcbiAgICBjdXJyZW50TW92ZTogR0FNRV9TWU1CT0xTLkNST1NTLFxyXG4gIH0pO1xyXG4gIGNvbnNvbGUubG9nKGNvbXB1dGVXaW5uZXIoY2VsbHMpKTtcclxuICBjb25zdCBuZXh0TW92ZSA9IGdldE5leHRNb3ZlKGN1cnJlbnRNb3ZlLCBwbGF5ZXJzQ291bnQpO1xyXG4gIGNvbnN0IGhhbmRsZUNlbGxDbGljayA9IChpbmRleCkgPT4ge1xyXG4gICAgc2V0R2FtZVN0YXRlKChsYXN0R2FtZVN0YXRlKSA9PiB7XHJcbiAgICAgIGlmIChsYXN0R2FtZVN0YXRlLmNlbGxzW2luZGV4XSkge1xyXG4gICAgICAgIHJldHVybiBsYXN0R2FtZVN0YXRlO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4ubGFzdEdhbWVTdGF0ZSxcclxuICAgICAgICBjdXJyZW50TW92ZTogZ2V0TmV4dE1vdmUobGFzdEdhbWVTdGF0ZS5jdXJyZW50TW92ZSwgcGxheWVyc0NvdW50KSxcclxuICAgICAgICBjZWxsczogbGFzdEdhbWVTdGF0ZS5jZWxscy5tYXAoKGNlbGwsIGkpID0+XHJcbiAgICAgICAgICBpID09PSBpbmRleCA/IGxhc3RHYW1lU3RhdGUuY3VycmVudE1vdmUgOiBjZWxsLFxyXG4gICAgICAgICksXHJcbiAgICAgIH07XHJcbiAgICB9KTtcclxuICB9O1xyXG4gIHJldHVybiB7XHJcbiAgICBjZWxscyxcclxuICAgIGN1cnJlbnRNb3ZlLFxyXG4gICAgbmV4dE1vdmUsXHJcbiAgICBoYW5kbGVDZWxsQ2xpY2ssXHJcbiAgfTtcclxufVxyXG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJHQU1FX1NZTUJPTFMiLCJNT1ZFX09SREVSIiwiZ2V0TmV4dE1vdmUiLCJjdXJyZW50TW92ZSIsInBsYXllcnNDb3VudCIsInNsaWNlZE1vdmVPcmRlciIsInNsaWNlIiwibmV4dE1vdmVJbmRleCIsImluZGV4T2YiLCJjb21wdXRlV2lubmVyIiwiY2VsbHMiLCJzZXF1ZW5jZVNpemUiLCJmaWVsZFNpemUiLCJnYXAiLCJNYXRoIiwiZmxvb3IiLCJjb21wYXJlRWxlbWVudHMiLCJpbmRleGVzIiwicmVzdWx0IiwiaSIsImxlbmd0aCIsImdldFNlcXVlbmNlSW5kZXhlcyIsInJlcyIsImoiLCJwdXNoIiwiaW5kZXhSb3dzIiwid2lubmVySW5kZXhlcyIsImZpbmQiLCJyb3ciLCJ1bmRlZmluZWQiLCJVc2VHYW1lU3RhdGUiLCJzZXRHYW1lU3RhdGUiLCJBcnJheSIsImZpbGwiLCJDUk9TUyIsImNvbnNvbGUiLCJsb2ciLCJuZXh0TW92ZSIsImhhbmRsZUNlbGxDbGljayIsImluZGV4IiwibGFzdEdhbWVTdGF0ZSIsIm1hcCIsImNlbGwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/game/use-game-state.js\n"));

/***/ })

});
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

/***/ "./pages/index.jsx":
/*!*************************!*\
  !*** ./pages/index.jsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; },\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout.js\");\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! uuid */ \"./node_modules/uuid/dist/esm-browser/index.js\");\n\n\n\nvar __N_SSG = true;\nfunction Home(param) {\n    var name = param.name;\n    var _this = this;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex flex-row justify-center\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                className: \"mt-8\",\n                children: name.map(function(each) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        className: \"mt-4 font-biz\",\n                        children: each\n                    }, (0,uuid__WEBPACK_IMPORTED_MODULE_2__.v4)(), false, {\n                        fileName: \"/Users/cygnuswang/WebDevelopment/random-coding-notes/main/pages/index.jsx\",\n                        lineNumber: 13,\n                        columnNumber: 15\n                    }, _this);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/cygnuswang/WebDevelopment/random-coding-notes/main/pages/index.jsx\",\n                lineNumber: 10,\n                columnNumber: 11\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/cygnuswang/WebDevelopment/random-coding-notes/main/pages/index.jsx\",\n            lineNumber: 9,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/cygnuswang/WebDevelopment/random-coding-notes/main/pages/index.jsx\",\n        lineNumber: 8,\n        columnNumber: 5\n    }, this);\n};\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFBMEM7QUFDTjs7QUFJckIsU0FBU0csSUFBSSxDQUFDLEtBQVEsRUFBRTtRQUFWLElBQU0sR0FBTixLQUFRLENBQU5DLElBQUk7O0lBQ2pDLHFCQUNFLDhEQUFDSiwwREFBTTtrQkFDTCw0RUFBQ0ssS0FBRztZQUFDQyxTQUFTLEVBQUMsOEJBQThCO3NCQUN6Qyw0RUFBQ0MsSUFBRTtnQkFBQ0QsU0FBUyxFQUFDLE1BQU07MEJBQ25CRixJQUFJLENBQUNJLEdBQUcsQ0FBQ0MsU0FBQUEsSUFBSSxFQUFJO29CQUNoQixxQkFDRSw4REFBQ0MsSUFBRTt3QkFDQ0osU0FBUyxFQUFDLGVBQWU7a0NBRXRCRyxJQUFJO3VCQUhGUCx3Q0FBTSxFQUFFOzs7OzZCQUlaLENBQ047aUJBQ0YsQ0FBQzs7Ozs7b0JBQ0c7Ozs7O2dCQUNIOzs7OztZQUNDLENBQ1Y7Q0FDRjtBQWxCdUJDLEtBQUFBLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanN4PzdmZmQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dCc7XG5pbXBvcnQgeyB2NCBhcyB1dWlkdjQgfSBmcm9tICd1dWlkJztcbmltcG9ydCBwYXRoIGZyb20gJ3BhdGgnO1xuaW1wb3J0IGZzIGZyb20gJ2ZzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSh7IG5hbWUgfSkge1xuICByZXR1cm4gKFxuICAgIDxMYXlvdXQ+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBmbGV4LXJvdyBqdXN0aWZ5LWNlbnRlcic+XG4gICAgICAgICAgPHVsIGNsYXNzTmFtZT0nbXQtOCc+XG4gICAgICAgICAge25hbWUubWFwKGVhY2ggPT4ge1xuICAgICAgICAgICAgcmV0dXJuKFxuICAgICAgICAgICAgICA8bGkga2V5PXt1dWlkdjQoKX1cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm10LTQgZm9udC1iaXpcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIHtlYWNofVxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgKVxuICAgICAgICAgIH0pfVxuICAgICAgICAgIDwvdWw+XG4gICAgICA8L2Rpdj5cbiAgICA8L0xheW91dD5cbiAgKVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoKSB7XG4gIC8vIEdldCBmaWxlcyBmcm9tIHRoZSBwb3N0cyBkaXJcbiAgY29uc3QgZmlsZXMgPSBmcy5yZWFkZGlyU3luYyhwYXRoLmpvaW4oJ25vdGVzJykpO1xuICBjb25zdCBub3RlcyA9IGZpbGVzLm1hcChlYWNoID0+IHtcbiAgICBjb25zdCBtYXJrZG93bkRvYyA9IGZzLnJlYWRGaWxlU3luYyhwYXRoLmpvaW4oJ25vdGVzJywgZWFjaCksICd1dGYtOCcpO1xuICAgIHJldHVybihtYXJrZG93bkRvYy5zcGxpdCgnXFxuJylbMF0pXG4gIH0pO1xuICBjb25zdCB2YWxpZCA9IG5vdGVzLmZpbHRlcihlYWNoID0+IGVhY2guY2hhckF0KDIpID09PSBcIkxcIik7XG4gIGNvbnN0IG5hbWUgPSB2YWxpZC5tYXAoZWFjaCA9PiBlYWNoLnN1YnN0cmluZygyKSk7XG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIG5hbWUsXG4gICAgfSxcbiAgfVxufVxuIl0sIm5hbWVzIjpbIkxheW91dCIsInY0IiwidXVpZHY0IiwiSG9tZSIsIm5hbWUiLCJkaXYiLCJjbGFzc05hbWUiLCJ1bCIsIm1hcCIsImVhY2giLCJsaSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.jsx\n");

/***/ })

});
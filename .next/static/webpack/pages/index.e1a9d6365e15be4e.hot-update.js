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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; },\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout.js\");\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! uuid */ \"./node_modules/uuid/dist/esm-browser/index.js\");\n\n\n\nvar __N_SSG = true;\nfunction Home(param) {\n    var name = param.name;\n    var _this = this;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex flex-row justify-center\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                className: \"mt-8\",\n                children: name.map(function(each) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        className: \"mt-4 font-biz border-b-2 border-white hover:border-gray-300\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            name: each,\n                            onClick: function() {\n                                console.log(\"\".concat(each, \" is clicked\"));\n                            },\n                            children: each\n                        }, (0,uuid__WEBPACK_IMPORTED_MODULE_2__.v4)(), false, {\n                            fileName: \"/Users/cygnuswang/WebDevelopment/random-coding-notes/main/pages/index.jsx\",\n                            lineNumber: 16,\n                            columnNumber: 19\n                        }, _this)\n                    }, (0,uuid__WEBPACK_IMPORTED_MODULE_2__.v4)(), false, {\n                        fileName: \"/Users/cygnuswang/WebDevelopment/random-coding-notes/main/pages/index.jsx\",\n                        lineNumber: 13,\n                        columnNumber: 15\n                    }, _this);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/cygnuswang/WebDevelopment/random-coding-notes/main/pages/index.jsx\",\n                lineNumber: 10,\n                columnNumber: 11\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/cygnuswang/WebDevelopment/random-coding-notes/main/pages/index.jsx\",\n            lineNumber: 9,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/cygnuswang/WebDevelopment/random-coding-notes/main/pages/index.jsx\",\n        lineNumber: 8,\n        columnNumber: 5\n    }, this);\n};\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFBMEM7QUFDTjs7QUFJckIsU0FBU0csSUFBSSxDQUFDLEtBQVEsRUFBRTtRQUFWLElBQU0sR0FBTixLQUFRLENBQU5DLElBQUk7O0lBQ2pDLHFCQUNFLDhEQUFDSiwwREFBTTtrQkFDTCw0RUFBQ0ssS0FBRztZQUFDQyxTQUFTLEVBQUMsOEJBQThCO3NCQUN6Qyw0RUFBQ0MsSUFBRTtnQkFBQ0QsU0FBUyxFQUFDLE1BQU07MEJBQ25CRixJQUFJLENBQUNJLEdBQUcsQ0FBQ0MsU0FBQUEsSUFBSSxFQUFJO29CQUNoQixxQkFDRSw4REFBQ0MsSUFBRTt3QkFDQ0osU0FBUyxFQUFDLDZEQUE2RDtrQ0FFdkUsNEVBQUNLLFFBQU07NEJBRUxQLElBQUksRUFBRUssSUFBSTs0QkFDVkcsT0FBTyxFQUFFLFdBQU07Z0NBQUNDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLEVBQUMsQ0FBTyxNQUFXLENBQWhCTCxJQUFJLEVBQUMsYUFBVyxDQUFDLENBQUM7NkJBQUM7c0NBRWpEQSxJQUFJOzJCQUpBUCx3Q0FBTSxFQUFFOzs7O2lDQUtOO3VCQVRKQSx3Q0FBTSxFQUFFOzs7OzZCQVVaLENBQ047aUJBQ0YsQ0FBQzs7Ozs7b0JBQ0c7Ozs7O2dCQUNIOzs7OztZQUNDLENBQ1Y7Q0FDRjtBQXhCdUJDLEtBQUFBLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanN4PzdmZmQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dCc7XG5pbXBvcnQgeyB2NCBhcyB1dWlkdjQgfSBmcm9tICd1dWlkJztcbmltcG9ydCBwYXRoIGZyb20gJ3BhdGgnO1xuaW1wb3J0IGZzIGZyb20gJ2ZzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSh7IG5hbWUgfSkge1xuICByZXR1cm4gKFxuICAgIDxMYXlvdXQ+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBmbGV4LXJvdyBqdXN0aWZ5LWNlbnRlcic+XG4gICAgICAgICAgPHVsIGNsYXNzTmFtZT0nbXQtOCc+XG4gICAgICAgICAge25hbWUubWFwKGVhY2ggPT4ge1xuICAgICAgICAgICAgcmV0dXJuKFxuICAgICAgICAgICAgICA8bGkga2V5PXt1dWlkdjQoKX1cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm10LTQgZm9udC1iaXogYm9yZGVyLWItMiBib3JkZXItd2hpdGUgaG92ZXI6Ym9yZGVyLWdyYXktMzAwXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICBrZXk9e3V1aWR2NCgpfVxuICAgICAgICAgICAgICAgICAgICBuYW1lPXtlYWNofVxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7Y29uc29sZS5sb2coYCR7ZWFjaH0gaXMgY2xpY2tlZGApfX1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAge2VhY2h9XG4gICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIClcbiAgICAgICAgICB9KX1cbiAgICAgICAgICA8L3VsPlxuICAgICAgPC9kaXY+XG4gICAgPC9MYXlvdXQ+XG4gIClcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKCkge1xuICAvLyBHZXQgZmlsZXMgZnJvbSB0aGUgcG9zdHMgZGlyXG4gIGNvbnN0IGZpbGVzID0gZnMucmVhZGRpclN5bmMocGF0aC5qb2luKCdub3RlcycpKTtcbiAgY29uc3Qgbm90ZXMgPSBmaWxlcy5tYXAoZWFjaCA9PiB7XG4gICAgY29uc3QgbWFya2Rvd25Eb2MgPSBmcy5yZWFkRmlsZVN5bmMocGF0aC5qb2luKCdub3RlcycsIGVhY2gpLCAndXRmLTgnKTtcbiAgICByZXR1cm4obWFya2Rvd25Eb2Muc3BsaXQoJ1xcbicpWzBdKVxuICB9KTtcbiAgY29uc3QgdmFsaWQgPSBub3Rlcy5maWx0ZXIoZWFjaCA9PiBlYWNoLmNoYXJBdCgyKSA9PT0gXCJMXCIpO1xuICBjb25zdCBuYW1lID0gdmFsaWQubWFwKGVhY2ggPT4gZWFjaC5zdWJzdHJpbmcoMikpO1xuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBuYW1lLFxuICAgIH0sXG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJMYXlvdXQiLCJ2NCIsInV1aWR2NCIsIkhvbWUiLCJuYW1lIiwiZGl2IiwiY2xhc3NOYW1lIiwidWwiLCJtYXAiLCJlYWNoIiwibGkiLCJidXR0b24iLCJvbkNsaWNrIiwiY29uc29sZSIsImxvZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.jsx\n");

/***/ })

});
"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./components/LoadMore.tsx":
/*!*********************************!*\
  !*** ./components/LoadMore.tsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var react_intersection_observer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-intersection-observer */ \"(app-pages-browser)/./node_modules/react-intersection-observer/dist/index.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _app_action__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/app/action */ \"(app-pages-browser)/./app/action.ts\");\n/* harmony import */ var _components_AnimeCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/AnimeCard */ \"(app-pages-browser)/./components/AnimeCard.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nlet page = 2;\nfunction LoadMore() {\n    _s();\n    const { ref, inView } = (0,react_intersection_observer__WEBPACK_IMPORTED_MODULE_5__.useInView)();\n    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        if (inView) {\n            (0,_app_action__WEBPACK_IMPORTED_MODULE_3__.fetchAnime)(page).then((res)=>{\n                setData([\n                    ...data,\n                    ...res\n                ]);\n                page++;\n            });\n        }\n    }, [\n        inView,\n        data\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                className: \"grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10\",\n                children: data.map((item, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_AnimeCard__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        anime: item,\n                        index: index\n                    }, item.id, false, {\n                        fileName: \"/Users/user/WebstormProjects/react-server/components/LoadMore.tsx\",\n                        lineNumber: 27,\n                        columnNumber: 19\n                    }, this))\n            }, void 0, false, {\n                fileName: \"/Users/user/WebstormProjects/react-server/components/LoadMore.tsx\",\n                lineNumber: 25,\n                columnNumber: 11\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                className: \"flex justify-center items-center w-full\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    ref: ref,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                        src: \"./spinner.svg\",\n                        alt: \"spinner\",\n                        width: 56,\n                        height: 56,\n                        className: \"object-contain\"\n                    }, void 0, false, {\n                        fileName: \"/Users/user/WebstormProjects/react-server/components/LoadMore.tsx\",\n                        lineNumber: 33,\n                        columnNumber: 19\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/user/WebstormProjects/react-server/components/LoadMore.tsx\",\n                    lineNumber: 32,\n                    columnNumber: 15\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/user/WebstormProjects/react-server/components/LoadMore.tsx\",\n                lineNumber: 31,\n                columnNumber: 11\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(LoadMore, \"tbcFZIcxZbzWpW9XR2d71GQO75M=\", false, function() {\n    return [\n        react_intersection_observer__WEBPACK_IMPORTED_MODULE_5__.useInView\n    ];\n});\n_c = LoadMore;\n/* harmony default export */ __webpack_exports__[\"default\"] = (LoadMore);\nvar _c;\n$RefreshReg$(_c, \"LoadMore\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvTG9hZE1vcmUudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFFK0I7QUFDd0I7QUFDYjtBQUNGO0FBQ29CO0FBRTVELElBQUlNLE9BQU87QUFFWCxTQUFTQzs7SUFDTCxNQUFNLEVBQUNDLEdBQUcsRUFBRUMsTUFBTSxFQUFDLEdBQUdSLHNFQUFTQTtJQUMvQixNQUFNLENBQUNTLE1BQU1DLFFBQVEsR0FBR1IsK0NBQVFBLENBQVksRUFBRTtJQUU5Q0QsZ0RBQVNBLENBQUM7UUFDTixJQUFJTyxRQUFRO1lBQ2JMLHVEQUFVQSxDQUFDRSxNQUFNTSxJQUFJLENBQUMsQ0FBQ0M7Z0JBQ2pCRixRQUFRO3VCQUFJRDt1QkFBU0c7aUJBQUk7Z0JBQ3pCUDtZQUNGO1FBQ0g7SUFDSixHQUFHO1FBQUNHO1FBQVFDO0tBQUs7SUFDbkIscUJBQ0k7OzBCQUNJLDhEQUFDSTtnQkFBUUMsV0FBVTswQkFDZEwsS0FBS00sR0FBRyxDQUFDLENBQUNDLE1BQWlCQyxzQkFDeEIsOERBQUNiLDZEQUFTQTt3QkFBZWMsT0FBT0Y7d0JBQU1DLE9BQU9BO3VCQUE3QkQsS0FBS0csRUFBRTs7Ozs7Ozs7OzswQkFJL0IsOERBQUNOO2dCQUFRQyxXQUFVOzBCQUNmLDRFQUFDTTtvQkFBSWIsS0FBS0E7OEJBQ04sNEVBQUNSLGtEQUFLQTt3QkFDRnNCLEtBQUk7d0JBQ0pDLEtBQUk7d0JBQ0pDLE9BQU87d0JBQ1BDLFFBQVE7d0JBQ1JWLFdBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU1oQztHQWpDU1I7O1FBQ2lCTixrRUFBU0E7OztLQUQxQk07QUFtQ1QsK0RBQWVBLFFBQVFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Mb2FkTW9yZS50c3g/NzMxMiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcblxuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgeyB1c2VJblZpZXd9IGZyb20gXCJyZWFjdC1pbnRlcnNlY3Rpb24tb2JzZXJ2ZXJcIjtcbmltcG9ydCB7dXNlRWZmZWN0LCB1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge2ZldGNoQW5pbWV9IGZyb20gXCJAL2FwcC9hY3Rpb25cIjtcbmltcG9ydCBBbmltZUNhcmQsIHtBbmltZVByb3B9IGZyb20gXCJAL2NvbXBvbmVudHMvQW5pbWVDYXJkXCI7XG5cbmxldCBwYWdlID0gMjtcblxuZnVuY3Rpb24gTG9hZE1vcmUoKSB7XG4gICAgY29uc3Qge3JlZiwgaW5WaWV3fSA9IHVzZUluVmlldygpO1xuICAgIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlPEFuaW1lUHJvcD4oW10pO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgaWYgKGluVmlldykge1xuICAgICAgIGZldGNoQW5pbWUocGFnZSkudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgICAgc2V0RGF0YShbLi4uZGF0YSwgLi4ucmVzXSk7XG4gICAgICAgICAgICAgcGFnZSsrO1xuICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfSwgW2luVmlldywgZGF0YV0pO1xuICByZXR1cm4gKFxuICAgICAgPD5cbiAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJncmlkIGxnOmdyaWQtY29scy00IG1kOmdyaWQtY29scy0zIHNtOmdyaWQtY29scy0yIGdyaWQtY29scy0xIGdhcC0xMFwiPlxuICAgICAgICAgICAgICB7ZGF0YS5tYXAoKGl0ZW06IEFuaW1lUHJvcCwgaW5kZXg6IG51bWJlcikgPT4gKFxuICAgICAgICAgICAgICAgICAgPEFuaW1lQ2FyZCBrZXk9e2l0ZW0uaWR9IGFuaW1lPXtpdGVtfSBpbmRleD17aW5kZXh9Lz5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9zZWN0aW9uPlxuXG4gICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgdy1mdWxsXCI+XG4gICAgICAgICAgICAgIDxkaXYgcmVmPXtyZWZ9PlxuICAgICAgICAgICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICAgICAgICAgICAgc3JjPVwiLi9zcGlubmVyLnN2Z1wiXG4gICAgICAgICAgICAgICAgICAgICAgYWx0PVwic3Bpbm5lclwiXG4gICAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezU2fVxuICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD17NTZ9XG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwib2JqZWN0LWNvbnRhaW5cIlxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgPC8+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IExvYWRNb3JlO1xuIl0sIm5hbWVzIjpbIkltYWdlIiwidXNlSW5WaWV3IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJmZXRjaEFuaW1lIiwiQW5pbWVDYXJkIiwicGFnZSIsIkxvYWRNb3JlIiwicmVmIiwiaW5WaWV3IiwiZGF0YSIsInNldERhdGEiLCJ0aGVuIiwicmVzIiwic2VjdGlvbiIsImNsYXNzTmFtZSIsIm1hcCIsIml0ZW0iLCJpbmRleCIsImFuaW1lIiwiaWQiLCJkaXYiLCJzcmMiLCJhbHQiLCJ3aWR0aCIsImhlaWdodCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/LoadMore.tsx\n"));

/***/ })

});
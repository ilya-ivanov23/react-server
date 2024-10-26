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

/***/ "(app-pages-browser)/./app/action.tsx":
/*!************************!*\
  !*** ./app/action.tsx ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fetchAnime: function() { return /* binding */ fetchAnime; }
/* harmony export */ });
/* harmony import */ var next_dist_client_app_call_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/client/app-call-server */ "(app-pages-browser)/./node_modules/next/dist/client/app-call-server.js");
/* harmony import */ var next_dist_client_app_call_server__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_client_app_call_server__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var private_next_rsc_action_client_wrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! private-next-rsc-action-client-wrapper */ "(app-pages-browser)/./node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js");



function __build_action__(action, args) {
  return (0,next_dist_client_app_call_server__WEBPACK_IMPORTED_MODULE_0__.callServer)(action.$$id, args)
}

/* __next_internal_action_entry_do_not_use__ {"0eb6f53a631b9fa58288b2e5dd5b4edeeed57cc9":"fetchAnime","1e7800d7ec33060dcc480eae16fc9e0fc2021de4":"$$ACTION_0"} */ var fetchAnime = (0,private_next_rsc_action_client_wrapper__WEBPACK_IMPORTED_MODULE_1__.createServerReference)("0eb6f53a631b9fa58288b2e5dd5b4edeeed57cc9");




;
    // Wrapped in an IIFE to avoid polluting the global scope
    ;
    (function () {
        var _a, _b;
        // Legacy CSS implementations will `eval` browser code in a Node.js context
        // to extract CSS. For backwards compatibility, we need to check we're in a
        // browser context before continuing.
        if (typeof self !== 'undefined' &&
            // AMP / No-JS mode does not inject these helpers:
            '$RefreshHelpers$' in self) {
            // @ts-ignore __webpack_module__ is global
            var currentExports = module.exports;
            // @ts-ignore __webpack_module__ is global
            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;
            // This cannot happen in MainTemplate because the exports mismatch between
            // templating and execution.
            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
            // A module can be accepted automatically based on its exports, e.g. when
            // it is a Refresh Boundary.
            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
                // Save the previous exports signature on update so we can compare the boundary
                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)
                module.hot.dispose(function (data) {
                    data.prevSignature =
                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);
                });
                // Unconditionally accept an update to this module, we'll check if it's
                // still a Refresh Boundary later.
                // @ts-ignore importMeta is replaced in the loader
                module.hot.accept();
                // This field is set when the previous version of this module was a
                // Refresh Boundary, letting us know we need to check for invalidation or
                // enqueue an update.
                if (prevSignature !== null) {
                    // A boundary can become ineligible if its exports are incompatible
                    // with the previous exports.
                    //
                    // For example, if you add/remove/change exports, we'll want to
                    // re-execute the importing modules, and force those components to
                    // re-render. Similarly, if you convert a class component to a
                    // function, we want to invalidate the boundary.
                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {
                        module.hot.invalidate();
                    }
                    else {
                        self.$RefreshHelpers$.scheduleUpdate();
                    }
                }
            }
            else {
                // Since we just executed the code for the module, it's possible that the
                // new exports made it ineligible for being a boundary.
                // We only care about the case when we were _previously_ a boundary,
                // because we already accepted this update (accidental side effect).
                var isNoLongerABoundary = prevSignature !== null;
                if (isNoLongerABoundary) {
                    module.hot.invalidate();
                }
            }
        }
    })();


/***/ }),

/***/ "(app-pages-browser)/./components/LoadMore.tsx":
/*!*********************************!*\
  !*** ./components/LoadMore.tsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var react_intersection_observer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-intersection-observer */ \"(app-pages-browser)/./node_modules/react-intersection-observer/dist/index.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _app_action__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/app/action */ \"(app-pages-browser)/./app/action.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nlet page = 2;\nfunction LoadMore() {\n    _s();\n    const { ref, inView } = (0,react_intersection_observer__WEBPACK_IMPORTED_MODULE_4__.useInView)();\n    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        if (inView) {\n            (0,_app_action__WEBPACK_IMPORTED_MODULE_3__.fetchAnime)(page).then((res)=>{\n                setData([\n                    ...data,\n                    ...res\n                ]);\n                page++;\n            });\n        }\n    }, [\n        inView,\n        data\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                className: \"grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10\",\n                children: data\n            }, void 0, false, {\n                fileName: \"/Users/user/WebstormProjects/react-server/components/LoadMore.tsx\",\n                lineNumber: 25,\n                columnNumber: 11\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                className: \"flex justify-center items-center w-full\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    ref: ref,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                        src: \"./spinner.svg\",\n                        alt: \"spinner\",\n                        width: 56,\n                        height: 56,\n                        className: \"object-contain\"\n                    }, void 0, false, {\n                        fileName: \"/Users/user/WebstormProjects/react-server/components/LoadMore.tsx\",\n                        lineNumber: 31,\n                        columnNumber: 19\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/user/WebstormProjects/react-server/components/LoadMore.tsx\",\n                    lineNumber: 30,\n                    columnNumber: 15\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/user/WebstormProjects/react-server/components/LoadMore.tsx\",\n                lineNumber: 29,\n                columnNumber: 11\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(LoadMore, \"tbcFZIcxZbzWpW9XR2d71GQO75M=\", false, function() {\n    return [\n        react_intersection_observer__WEBPACK_IMPORTED_MODULE_4__.useInView\n    ];\n});\n_c = LoadMore;\n/* harmony default export */ __webpack_exports__[\"default\"] = (LoadMore);\nvar _c;\n$RefreshReg$(_c, \"LoadMore\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvTG9hZE1vcmUudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUUrQjtBQUN3QjtBQUNiO0FBQ0Y7QUFHeEMsSUFBSUssT0FBTztBQUVYLFNBQVNDOztJQUNMLE1BQU0sRUFBQ0MsR0FBRyxFQUFFQyxNQUFNLEVBQUMsR0FBR1Asc0VBQVNBO0lBQy9CLE1BQU0sQ0FBQ1EsTUFBTUMsUUFBUSxHQUFHUCwrQ0FBUUEsQ0FBWSxFQUFFO0lBRTlDRCxnREFBU0EsQ0FBQztRQUNOLElBQUlNLFFBQVE7WUFDYkosdURBQVVBLENBQUNDLE1BQU1NLElBQUksQ0FBQyxDQUFDQztnQkFDakJGLFFBQVE7dUJBQUlEO3VCQUFTRztpQkFBSTtnQkFDekJQO1lBQ0Y7UUFDSDtJQUNKLEdBQUc7UUFBQ0c7UUFBUUM7S0FBSztJQUNuQixxQkFDSTs7MEJBQ0ksOERBQUNJO2dCQUFRQyxXQUFVOzBCQUNkTDs7Ozs7OzBCQUdMLDhEQUFDSTtnQkFBUUMsV0FBVTswQkFDZiw0RUFBQ0M7b0JBQUlSLEtBQUtBOzhCQUNOLDRFQUFDUCxrREFBS0E7d0JBQ0ZnQixLQUFJO3dCQUNKQyxLQUFJO3dCQUNKQyxPQUFPO3dCQUNQQyxRQUFRO3dCQUNSTCxXQUFVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNaEM7R0EvQlNSOztRQUNpQkwsa0VBQVNBOzs7S0FEMUJLO0FBaUNULCtEQUFlQSxRQUFRQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvTG9hZE1vcmUudHN4PzczMTIiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5cbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IHsgdXNlSW5WaWV3fSBmcm9tIFwicmVhY3QtaW50ZXJzZWN0aW9uLW9ic2VydmVyXCI7XG5pbXBvcnQge3VzZUVmZmVjdCwgdXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtmZXRjaEFuaW1lfSBmcm9tIFwiQC9hcHAvYWN0aW9uXCI7XG5pbXBvcnQgQW5pbWVDYXJkLCB7QW5pbWVQcm9wfSBmcm9tIFwiQC9jb21wb25lbnRzL0FuaW1lQ2FyZFwiO1xuXG5sZXQgcGFnZSA9IDI7XG5cbmZ1bmN0aW9uIExvYWRNb3JlKCkge1xuICAgIGNvbnN0IHtyZWYsIGluVmlld30gPSB1c2VJblZpZXcoKTtcbiAgICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZTxBbmltZVByb3A+KFtdKTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGlmIChpblZpZXcpIHtcbiAgICAgICBmZXRjaEFuaW1lKHBhZ2UpLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgICAgIHNldERhdGEoWy4uLmRhdGEsIC4uLnJlc10pO1xuICAgICAgICAgICAgIHBhZ2UrKztcbiAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH0sIFtpblZpZXcsIGRhdGFdKTtcbiAgcmV0dXJuIChcbiAgICAgIDw+XG4gICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiZ3JpZCBsZzpncmlkLWNvbHMtNCBtZDpncmlkLWNvbHMtMyBzbTpncmlkLWNvbHMtMiBncmlkLWNvbHMtMSBnYXAtMTBcIj5cbiAgICAgICAgICAgICAge2RhdGF9XG4gICAgICAgICAgPC9zZWN0aW9uPlxuXG4gICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgdy1mdWxsXCI+XG4gICAgICAgICAgICAgIDxkaXYgcmVmPXtyZWZ9PlxuICAgICAgICAgICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICAgICAgICAgICAgc3JjPVwiLi9zcGlubmVyLnN2Z1wiXG4gICAgICAgICAgICAgICAgICAgICAgYWx0PVwic3Bpbm5lclwiXG4gICAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezU2fVxuICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD17NTZ9XG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwib2JqZWN0LWNvbnRhaW5cIlxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgPC8+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IExvYWRNb3JlO1xuIl0sIm5hbWVzIjpbIkltYWdlIiwidXNlSW5WaWV3IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJmZXRjaEFuaW1lIiwicGFnZSIsIkxvYWRNb3JlIiwicmVmIiwiaW5WaWV3IiwiZGF0YSIsInNldERhdGEiLCJ0aGVuIiwicmVzIiwic2VjdGlvbiIsImNsYXNzTmFtZSIsImRpdiIsInNyYyIsImFsdCIsIndpZHRoIiwiaGVpZ2h0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/LoadMore.tsx\n"));

/***/ })

});
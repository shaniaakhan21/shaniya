"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/companies/page",{

/***/ "(app-pages-browser)/./node_modules/next/dist/api/navigation.js":
/*!**************************************************!*\
  !*** ./node_modules/next/dist/api/navigation.js ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _client_components_navigation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../client/components/navigation */ \"(app-pages-browser)/./node_modules/next/dist/client/components/navigation.js\");\n/* harmony import */ var _client_components_navigation__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_client_components_navigation__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _client_components_navigation__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== \"default\") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _client_components_navigation__WEBPACK_IMPORTED_MODULE_0__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)\n/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);\n\n\n//# sourceMappingURL=navigation.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvYXBpL25hdmlnYXRpb24uanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQWdEOztBQUVoRCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2FwaS9uYXZpZ2F0aW9uLmpzPzRkMDYiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0ICogZnJvbSBcIi4uL2NsaWVudC9jb21wb25lbnRzL25hdmlnYXRpb25cIjtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bmF2aWdhdGlvbi5qcy5tYXAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./node_modules/next/dist/api/navigation.js\n"));

/***/ }),

/***/ "(app-pages-browser)/./src/app/companies/page.tsx":
/*!************************************!*\
  !*** ./src/app/companies/page.tsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var _components_CompanyPostFeed__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/CompanyPostFeed */ \"(app-pages-browser)/./src/app/components/CompanyPostFeed.tsx\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n // Import the new component\n // Import useSearchParams\nconst CompanyApplicationPage = ()=>{\n    _s();\n    const searchParams = (0,next_navigation__WEBPACK_IMPORTED_MODULE_3__.useSearchParams)();\n    const company_name = searchParams.get(\"company_name\"); // Get the company_name from the query parameters\n    const [posts, setPosts] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const fetchPosts = async ()=>{\n            if (!company_name) return; // Exit if company_name is not defined\n            try {\n                // Construct the URL for fetching posts using the company name\n                const response = await axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].get(\"http://localhost:8000/application-to-\".concat(company_name, \"/\"));\n                setPosts(response.data);\n            } catch (err) {\n                console.error(\"Error fetching posts:\", err);\n                setError(\"Failed to load posts.\");\n            }\n        };\n        fetchPosts();\n    }, [\n        company_name\n    ]); // Fetch posts when company_name changes\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            error && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: error\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Shaniya Khan\\\\PROJECTS\\\\shaniya\\\\frontend\\\\src\\\\app\\\\companies\\\\page.tsx\",\n                lineNumber: 45,\n                columnNumber: 23\n            }, undefined),\n            posts.length > 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        children: [\n                            \"Posts for \",\n                            company_name\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Shaniya Khan\\\\PROJECTS\\\\shaniya\\\\frontend\\\\src\\\\app\\\\companies\\\\page.tsx\",\n                        lineNumber: 48,\n                        columnNumber: 21\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_CompanyPostFeed__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        company_name: company_name,\n                        posts: posts\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Shaniya Khan\\\\PROJECTS\\\\shaniya\\\\frontend\\\\src\\\\app\\\\companies\\\\page.tsx\",\n                        lineNumber: 50,\n                        columnNumber: 21\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Shaniya Khan\\\\PROJECTS\\\\shaniya\\\\frontend\\\\src\\\\app\\\\companies\\\\page.tsx\",\n                lineNumber: 47,\n                columnNumber: 17\n            }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"No posts available for this company.\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Shaniya Khan\\\\PROJECTS\\\\shaniya\\\\frontend\\\\src\\\\app\\\\companies\\\\page.tsx\",\n                lineNumber: 53,\n                columnNumber: 17\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Shaniya Khan\\\\PROJECTS\\\\shaniya\\\\frontend\\\\src\\\\app\\\\companies\\\\page.tsx\",\n        lineNumber: 44,\n        columnNumber: 9\n    }, undefined);\n};\n_s(CompanyApplicationPage, \"ISOCSmgdHIF5ukne6ZG2jcm+lHs=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_3__.useSearchParams\n    ];\n});\n_c = CompanyApplicationPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CompanyApplicationPage);\nvar _c;\n$RefreshReg$(_c, \"CompanyApplicationPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcGFuaWVzL3BhZ2UudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUVtRDtBQUN6QjtBQUNrQyxDQUFDLDJCQUEyQjtBQUN0QyxDQUFDLHlCQUF5QjtBQWM1RSxNQUFNTSx5QkFBbUM7O0lBQ3JDLE1BQU1DLGVBQWVGLGdFQUFlQTtJQUNwQyxNQUFNRyxlQUFlRCxhQUFhRSxHQUFHLENBQUMsaUJBQWlCLGlEQUFpRDtJQUN4RyxNQUFNLENBQUNDLE9BQU9DLFNBQVMsR0FBR1QsK0NBQVFBLENBQVMsRUFBRTtJQUM3QyxNQUFNLENBQUNVLE9BQU9DLFNBQVMsR0FBR1gsK0NBQVFBLENBQUM7SUFFbkNELGdEQUFTQSxDQUFDO1FBQ04sTUFBTWEsYUFBYTtZQUNmLElBQUksQ0FBQ04sY0FBYyxRQUFRLHNDQUFzQztZQUVqRSxJQUFJO2dCQUNBLDhEQUE4RDtnQkFDOUQsTUFBTU8sV0FBVyxNQUFNWiw2Q0FBS0EsQ0FBQ00sR0FBRyxDQUFTLHdDQUFxRCxPQUFiRCxjQUFhO2dCQUM5RkcsU0FBU0ksU0FBU0MsSUFBSTtZQUMxQixFQUFFLE9BQU9DLEtBQUs7Z0JBQ1ZDLFFBQVFOLEtBQUssQ0FBQyx5QkFBeUJLO2dCQUN2Q0osU0FBUztZQUNiO1FBQ0o7UUFFQUM7SUFDSixHQUFHO1FBQUNOO0tBQWEsR0FBRyx3Q0FBd0M7SUFFNUQscUJBQ0ksOERBQUNXOztZQUNJUCx1QkFBUyw4REFBQ1E7MEJBQUdSOzs7Ozs7WUFDYkYsTUFBTVcsTUFBTSxHQUFHLGtCQUNaLDhEQUFDRjs7a0NBQ0csOERBQUNHOzs0QkFBRzs0QkFBV2Q7Ozs7Ozs7a0NBRWYsOERBQUNKLG1FQUFlQTt3QkFBQ0ksY0FBY0E7d0JBQWVFLE9BQU9BOzs7Ozs7Ozs7OzswQ0FHekQsOERBQUNVOzBCQUFFOzs7Ozs7Ozs7Ozs7QUFJbkI7R0FyQ01kOztRQUNtQkQsNERBQWVBOzs7S0FEbENDO0FBdUNOLCtEQUFlQSxzQkFBc0JBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9jb21wYW5pZXMvcGFnZS50c3g/MDcyOCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjsgLy8gRW5zdXJlIHRoaXMgaXMgYSBDbGllbnQgQ29tcG9uZW50XHJcblxyXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IENvbXBhbnlQb3N0RmVlZCBmcm9tICcuLi9jb21wb25lbnRzL0NvbXBhbnlQb3N0RmVlZCc7IC8vIEltcG9ydCB0aGUgbmV3IGNvbXBvbmVudFxyXG5pbXBvcnQgeyB1c2VTZWFyY2hQYXJhbXMgfSBmcm9tICduZXh0L25hdmlnYXRpb24nOyAvLyBJbXBvcnQgdXNlU2VhcmNoUGFyYW1zXHJcblxyXG5pbnRlcmZhY2UgUG9zdCB7XHJcbiAgICB0aXRsZTogc3RyaW5nO1xyXG4gICAgY29udGVudDogc3RyaW5nO1xyXG4gICAgYXV0aG9yOiBzdHJpbmc7XHJcbiAgICBwcm9maWxlUGljPzogc3RyaW5nO1xyXG4gICAgbW9vZDogc3RyaW5nO1xyXG4gICAgaW1hZ2U/OiBzdHJpbmc7XHJcbiAgICBkYXRlOiBzdHJpbmc7IC8vIEtlZXAgYXMgc3RyaW5nIHRvIGNvbnZlcnQgbGF0ZXJcclxuICAgIHBpbm5lZD86IGJvb2xlYW47XHJcbiAgICBjb21wYW55X25hbWU/OiBzdHJpbmc7XHJcbn1cclxuXHJcbmNvbnN0IENvbXBhbnlBcHBsaWNhdGlvblBhZ2U6IFJlYWN0LkZDID0gKCkgPT4ge1xyXG4gICAgY29uc3Qgc2VhcmNoUGFyYW1zID0gdXNlU2VhcmNoUGFyYW1zKCk7XHJcbiAgICBjb25zdCBjb21wYW55X25hbWUgPSBzZWFyY2hQYXJhbXMuZ2V0KCdjb21wYW55X25hbWUnKTsgLy8gR2V0IHRoZSBjb21wYW55X25hbWUgZnJvbSB0aGUgcXVlcnkgcGFyYW1ldGVyc1xyXG4gICAgY29uc3QgW3Bvc3RzLCBzZXRQb3N0c10gPSB1c2VTdGF0ZTxQb3N0W10+KFtdKTtcclxuICAgIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUoJycpO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgZmV0Y2hQb3N0cyA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICAgICAgaWYgKCFjb21wYW55X25hbWUpIHJldHVybjsgLy8gRXhpdCBpZiBjb21wYW55X25hbWUgaXMgbm90IGRlZmluZWRcclxuXHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAvLyBDb25zdHJ1Y3QgdGhlIFVSTCBmb3IgZmV0Y2hpbmcgcG9zdHMgdXNpbmcgdGhlIGNvbXBhbnkgbmFtZVxyXG4gICAgICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQ8UG9zdFtdPihgaHR0cDovL2xvY2FsaG9zdDo4MDAwL2FwcGxpY2F0aW9uLXRvLSR7Y29tcGFueV9uYW1lfS9gKTtcclxuICAgICAgICAgICAgICAgIHNldFBvc3RzKHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBmZXRjaGluZyBwb3N0czpcIiwgZXJyKTtcclxuICAgICAgICAgICAgICAgIHNldEVycm9yKCdGYWlsZWQgdG8gbG9hZCBwb3N0cy4nKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGZldGNoUG9zdHMoKTtcclxuICAgIH0sIFtjb21wYW55X25hbWVdKTsgLy8gRmV0Y2ggcG9zdHMgd2hlbiBjb21wYW55X25hbWUgY2hhbmdlc1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAge2Vycm9yICYmIDxwPntlcnJvcn08L3A+fVxyXG4gICAgICAgICAgICB7cG9zdHMubGVuZ3RoID4gMCA/IChcclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgyPlBvc3RzIGZvciB7Y29tcGFueV9uYW1lfTwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgey8qIFBhc3MgcG9zdHMgdG8gdGhlIENvbXBhbnlQb3N0RmVlZCBjb21wb25lbnQgKi99XHJcbiAgICAgICAgICAgICAgICAgICAgPENvbXBhbnlQb3N0RmVlZCBjb21wYW55X25hbWU9e2NvbXBhbnlfbmFtZSF9IHBvc3RzPXtwb3N0c30gLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgPHA+Tm8gcG9zdHMgYXZhaWxhYmxlIGZvciB0aGlzIGNvbXBhbnkuPC9wPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbXBhbnlBcHBsaWNhdGlvblBhZ2U7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiYXhpb3MiLCJDb21wYW55UG9zdEZlZWQiLCJ1c2VTZWFyY2hQYXJhbXMiLCJDb21wYW55QXBwbGljYXRpb25QYWdlIiwic2VhcmNoUGFyYW1zIiwiY29tcGFueV9uYW1lIiwiZ2V0IiwicG9zdHMiLCJzZXRQb3N0cyIsImVycm9yIiwic2V0RXJyb3IiLCJmZXRjaFBvc3RzIiwicmVzcG9uc2UiLCJkYXRhIiwiZXJyIiwiY29uc29sZSIsImRpdiIsInAiLCJsZW5ndGgiLCJoMiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/companies/page.tsx\n"));

/***/ })

});
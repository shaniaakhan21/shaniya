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

/***/ "(app-pages-browser)/./src/app/companies/page.tsx":
/*!************************************!*\
  !*** ./src/app/companies/page.tsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var _components_CompanyPostFeed__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/CompanyPostFeed */ \"(app-pages-browser)/./src/app/components/CompanyPostFeed.tsx\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n // Import the new component\n // Import useSearchParams\nconst CompanyApplicationPage = ()=>{\n    _s();\n    const searchParams = (0,next_navigation__WEBPACK_IMPORTED_MODULE_3__.useSearchParams)();\n    const company_name = searchParams.get(\"company_name\"); // Get the company_name from the query parameters\n    const [posts, setPosts] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const fetchPosts = async ()=>{\n            if (!company_name) {\n                console.warn(\"Company name is null\"); // Log warning if company name is null\n                return; // Exit if company_name is not defined\n            }\n            try {\n                // Fetch posts for the specific company\n                const response = await axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].get(\"http://localhost:8000/api/posts\");\n                console.log(\"API Response:\", response.data); // Log the response data\n                // Set posts from the response\n                setPosts(response.data);\n            } catch (err) {\n                console.error(\"Error fetching posts:\", err);\n                setError(\"Failed to load posts.\");\n            }\n        };\n        fetchPosts();\n    }, [\n        company_name\n    ]); // Fetch posts when company_name changes\n    // Normalize company name for comparison and handle null\n    const normalizedCompanyName = company_name ? company_name.toLowerCase().trim() : \"\";\n    // Log filtered posts for debugging\n    const filteredPosts = posts.filter((post)=>{\n        var _post_company_name;\n        return ((_post_company_name = post.company_name) === null || _post_company_name === void 0 ? void 0 : _post_company_name.toLowerCase().trim()) === normalizedCompanyName;\n    });\n    console.log(\"Filtered Posts:\", filteredPosts); // Log filtered posts\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            error && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: error\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Shaniya Khan\\\\PROJECTS\\\\shaniya\\\\frontend\\\\src\\\\app\\\\companies\\\\page.tsx\",\n                lineNumber: 54,\n                columnNumber: 23\n            }, undefined),\n            filteredPosts.length > 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        children: [\n                            \"Posts for \",\n                            company_name\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Shaniya Khan\\\\PROJECTS\\\\shaniya\\\\frontend\\\\src\\\\app\\\\companies\\\\page.tsx\",\n                        lineNumber: 57,\n                        columnNumber: 21\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_CompanyPostFeed__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        company_name: company_name,\n                        posts: filteredPosts\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Shaniya Khan\\\\PROJECTS\\\\shaniya\\\\frontend\\\\src\\\\app\\\\companies\\\\page.tsx\",\n                        lineNumber: 59,\n                        columnNumber: 21\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Shaniya Khan\\\\PROJECTS\\\\shaniya\\\\frontend\\\\src\\\\app\\\\companies\\\\page.tsx\",\n                lineNumber: 56,\n                columnNumber: 17\n            }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"No posts available for this company.\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Shaniya Khan\\\\PROJECTS\\\\shaniya\\\\frontend\\\\src\\\\app\\\\companies\\\\page.tsx\",\n                lineNumber: 62,\n                columnNumber: 17\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Shaniya Khan\\\\PROJECTS\\\\shaniya\\\\frontend\\\\src\\\\app\\\\companies\\\\page.tsx\",\n        lineNumber: 53,\n        columnNumber: 9\n    }, undefined);\n};\n_s(CompanyApplicationPage, \"ISOCSmgdHIF5ukne6ZG2jcm+lHs=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_3__.useSearchParams\n    ];\n});\n_c = CompanyApplicationPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CompanyApplicationPage);\nvar _c;\n$RefreshReg$(_c, \"CompanyApplicationPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcGFuaWVzL3BhZ2UudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUVtRDtBQUN6QjtBQUNrQyxDQUFDLDJCQUEyQjtBQUN0QyxDQUFDLHlCQUF5QjtBQVU1RSxNQUFNTSx5QkFBbUM7O0lBQ3JDLE1BQU1DLGVBQWVGLGdFQUFlQTtJQUNwQyxNQUFNRyxlQUFlRCxhQUFhRSxHQUFHLENBQUMsaUJBQWlCLGlEQUFpRDtJQUN4RyxNQUFNLENBQUNDLE9BQU9DLFNBQVMsR0FBR1QsK0NBQVFBLENBQVMsRUFBRTtJQUM3QyxNQUFNLENBQUNVLE9BQU9DLFNBQVMsR0FBR1gsK0NBQVFBLENBQUM7SUFFbkNELGdEQUFTQSxDQUFDO1FBQ04sTUFBTWEsYUFBYTtZQUNmLElBQUksQ0FBQ04sY0FBYztnQkFDZk8sUUFBUUMsSUFBSSxDQUFDLHlCQUF5QixzQ0FBc0M7Z0JBQzVFLFFBQVEsc0NBQXNDO1lBQ2xEO1lBRUEsSUFBSTtnQkFDQSx1Q0FBdUM7Z0JBQ3ZDLE1BQU1DLFdBQVcsTUFBTWQsNkNBQUtBLENBQUNNLEdBQUcsQ0FBVTtnQkFDMUNNLFFBQVFHLEdBQUcsQ0FBQyxpQkFBaUJELFNBQVNFLElBQUksR0FBRyx3QkFBd0I7Z0JBRXJFLDhCQUE4QjtnQkFDOUJSLFNBQVNNLFNBQVNFLElBQUk7WUFDMUIsRUFBRSxPQUFPQyxLQUFLO2dCQUNWTCxRQUFRSCxLQUFLLENBQUMseUJBQXlCUTtnQkFDdkNQLFNBQVM7WUFDYjtRQUNKO1FBRUFDO0lBQ0osR0FBRztRQUFDTjtLQUFhLEdBQUcsd0NBQXdDO0lBRTVELHdEQUF3RDtJQUN4RCxNQUFNYSx3QkFBd0JiLGVBQWVBLGFBQWFjLFdBQVcsR0FBR0MsSUFBSSxLQUFLO0lBRWpGLG1DQUFtQztJQUNuQyxNQUFNQyxnQkFBZ0JkLE1BQU1lLE1BQU0sQ0FBQ0MsQ0FBQUE7WUFBUUE7ZUFBQUEsRUFBQUEscUJBQUFBLEtBQUtsQixZQUFZLGNBQWpCa0IseUNBQUFBLG1CQUFtQkosV0FBVyxHQUFHQyxJQUFJLFFBQU9GOztJQUN2Rk4sUUFBUUcsR0FBRyxDQUFDLG1CQUFtQk0sZ0JBQWdCLHFCQUFxQjtJQUVwRSxxQkFDSSw4REFBQ0c7O1lBQ0lmLHVCQUFTLDhEQUFDZ0I7MEJBQUdoQjs7Ozs7O1lBQ2JZLGNBQWNLLE1BQU0sR0FBRyxrQkFDcEIsOERBQUNGOztrQ0FDRyw4REFBQ0c7OzRCQUFHOzRCQUFXdEI7Ozs7Ozs7a0NBRWYsOERBQUNKLG1FQUFlQTt3QkFBQ0ksY0FBY0E7d0JBQWVFLE9BQU9jOzs7Ozs7Ozs7OzswQ0FHekQsOERBQUNJOzBCQUFFOzs7Ozs7Ozs7Ozs7QUFJbkI7R0FsRE10Qjs7UUFDbUJELDREQUFlQTs7O0tBRGxDQztBQW9ETiwrREFBZUEsc0JBQXNCQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvY29tcGFuaWVzL3BhZ2UudHN4PzA3MjgiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7IC8vIEVuc3VyZSB0aGlzIGlzIGEgQ2xpZW50IENvbXBvbmVudFxyXG5cclxuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCBDb21wYW55UG9zdEZlZWQgZnJvbSAnLi4vY29tcG9uZW50cy9Db21wYW55UG9zdEZlZWQnOyAvLyBJbXBvcnQgdGhlIG5ldyBjb21wb25lbnRcclxuaW1wb3J0IHsgdXNlU2VhcmNoUGFyYW1zIH0gZnJvbSAnbmV4dC9uYXZpZ2F0aW9uJzsgLy8gSW1wb3J0IHVzZVNlYXJjaFBhcmFtc1xyXG5cclxuaW50ZXJmYWNlIFBvc3Qge1xyXG4gICAgdGl0bGU6IHN0cmluZztcclxuICAgIGNvbnRlbnQ6IHN0cmluZztcclxuICAgIGF1dGhvcjogc3RyaW5nO1xyXG4gICAgZGF0ZTogc3RyaW5nOyAvLyBLZWVwaW5nIHRoaXMgYXMgYSBzdHJpbmcgdG8gY29udmVydCBsYXRlclxyXG4gICAgY29tcGFueV9uYW1lPzogc3RyaW5nOyAvLyBFbnN1cmUgdGhpcyBtYXRjaGVzIHlvdXIgbW9kZWxcclxufVxyXG5cclxuY29uc3QgQ29tcGFueUFwcGxpY2F0aW9uUGFnZTogUmVhY3QuRkMgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBzZWFyY2hQYXJhbXMgPSB1c2VTZWFyY2hQYXJhbXMoKTtcclxuICAgIGNvbnN0IGNvbXBhbnlfbmFtZSA9IHNlYXJjaFBhcmFtcy5nZXQoJ2NvbXBhbnlfbmFtZScpOyAvLyBHZXQgdGhlIGNvbXBhbnlfbmFtZSBmcm9tIHRoZSBxdWVyeSBwYXJhbWV0ZXJzXHJcbiAgICBjb25zdCBbcG9zdHMsIHNldFBvc3RzXSA9IHVzZVN0YXRlPFBvc3RbXT4oW10pO1xyXG4gICAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZSgnJyk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBjb25zdCBmZXRjaFBvc3RzID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIWNvbXBhbnlfbmFtZSkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKFwiQ29tcGFueSBuYW1lIGlzIG51bGxcIik7IC8vIExvZyB3YXJuaW5nIGlmIGNvbXBhbnkgbmFtZSBpcyBudWxsXHJcbiAgICAgICAgICAgICAgICByZXR1cm47IC8vIEV4aXQgaWYgY29tcGFueV9uYW1lIGlzIG5vdCBkZWZpbmVkXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAvLyBGZXRjaCBwb3N0cyBmb3IgdGhlIHNwZWNpZmljIGNvbXBhbnlcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0PFBvc3RbXT4oYGh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hcGkvcG9zdHNgKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQVBJIFJlc3BvbnNlOlwiLCByZXNwb25zZS5kYXRhKTsgLy8gTG9nIHRoZSByZXNwb25zZSBkYXRhXHJcblxyXG4gICAgICAgICAgICAgICAgLy8gU2V0IHBvc3RzIGZyb20gdGhlIHJlc3BvbnNlXHJcbiAgICAgICAgICAgICAgICBzZXRQb3N0cyhyZXNwb25zZS5kYXRhKTtcclxuICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZmV0Y2hpbmcgcG9zdHM6XCIsIGVycik7XHJcbiAgICAgICAgICAgICAgICBzZXRFcnJvcignRmFpbGVkIHRvIGxvYWQgcG9zdHMuJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBmZXRjaFBvc3RzKCk7XHJcbiAgICB9LCBbY29tcGFueV9uYW1lXSk7IC8vIEZldGNoIHBvc3RzIHdoZW4gY29tcGFueV9uYW1lIGNoYW5nZXNcclxuXHJcbiAgICAvLyBOb3JtYWxpemUgY29tcGFueSBuYW1lIGZvciBjb21wYXJpc29uIGFuZCBoYW5kbGUgbnVsbFxyXG4gICAgY29uc3Qgbm9ybWFsaXplZENvbXBhbnlOYW1lID0gY29tcGFueV9uYW1lID8gY29tcGFueV9uYW1lLnRvTG93ZXJDYXNlKCkudHJpbSgpIDogJyc7XHJcblxyXG4gICAgLy8gTG9nIGZpbHRlcmVkIHBvc3RzIGZvciBkZWJ1Z2dpbmdcclxuICAgIGNvbnN0IGZpbHRlcmVkUG9zdHMgPSBwb3N0cy5maWx0ZXIocG9zdCA9PiBwb3N0LmNvbXBhbnlfbmFtZT8udG9Mb3dlckNhc2UoKS50cmltKCkgPT09IG5vcm1hbGl6ZWRDb21wYW55TmFtZSk7XHJcbiAgICBjb25zb2xlLmxvZyhcIkZpbHRlcmVkIFBvc3RzOlwiLCBmaWx0ZXJlZFBvc3RzKTsgLy8gTG9nIGZpbHRlcmVkIHBvc3RzXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICB7ZXJyb3IgJiYgPHA+e2Vycm9yfTwvcD59XHJcbiAgICAgICAgICAgIHtmaWx0ZXJlZFBvc3RzLmxlbmd0aCA+IDAgPyAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMj5Qb3N0cyBmb3Ige2NvbXBhbnlfbmFtZX08L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgIHsvKiBQYXNzIHBvc3RzIHRvIHRoZSBDb21wYW55UG9zdEZlZWQgY29tcG9uZW50ICovfVxyXG4gICAgICAgICAgICAgICAgICAgIDxDb21wYW55UG9zdEZlZWQgY29tcGFueV9uYW1lPXtjb21wYW55X25hbWUhfSBwb3N0cz17ZmlsdGVyZWRQb3N0c30gLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgPHA+Tm8gcG9zdHMgYXZhaWxhYmxlIGZvciB0aGlzIGNvbXBhbnkuPC9wPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbXBhbnlBcHBsaWNhdGlvblBhZ2U7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiYXhpb3MiLCJDb21wYW55UG9zdEZlZWQiLCJ1c2VTZWFyY2hQYXJhbXMiLCJDb21wYW55QXBwbGljYXRpb25QYWdlIiwic2VhcmNoUGFyYW1zIiwiY29tcGFueV9uYW1lIiwiZ2V0IiwicG9zdHMiLCJzZXRQb3N0cyIsImVycm9yIiwic2V0RXJyb3IiLCJmZXRjaFBvc3RzIiwiY29uc29sZSIsIndhcm4iLCJyZXNwb25zZSIsImxvZyIsImRhdGEiLCJlcnIiLCJub3JtYWxpemVkQ29tcGFueU5hbWUiLCJ0b0xvd2VyQ2FzZSIsInRyaW0iLCJmaWx0ZXJlZFBvc3RzIiwiZmlsdGVyIiwicG9zdCIsImRpdiIsInAiLCJsZW5ndGgiLCJoMiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/companies/page.tsx\n"));

/***/ })

});
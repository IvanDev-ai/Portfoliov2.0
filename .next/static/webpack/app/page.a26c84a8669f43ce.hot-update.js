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

/***/ "(app-pages-browser)/./components/ui/BentoGrid.tsx":
/*!*************************************!*\
  !*** ./components/ui/BentoGrid.tsx ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   BentoGrid: function() { return /* binding */ BentoGrid; },\n/* harmony export */   BentoGridItem: function() { return /* binding */ BentoGridItem; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _utils_cn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/utils/cn */ \"(app-pages-browser)/./utils/cn.ts\");\n/* harmony import */ var _GradientBg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./GradientBg */ \"(app-pages-browser)/./components/ui/GradientBg.tsx\");\n/* harmony import */ var _data_conffeti_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/data/conffeti.json */ \"(app-pages-browser)/./data/conffeti.json\");\n/* __next_internal_client_entry_do_not_use__ BentoGrid,BentoGridItem auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst BentoGrid = (param)=>{\n    let { className, children } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (0,_utils_cn__WEBPACK_IMPORTED_MODULE_2__.cn)(\"grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto\", className),\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/ivanl./Documents/GitHub/Portfoliov2.0/components/ui/BentoGrid.tsx\",\n        lineNumber: 21,\n        columnNumber: 5\n    }, undefined);\n};\n_c = BentoGrid;\nconst BentoGridItem = (param)=>{\n    let { className, id, title, description, img, imgClassName, titleClassName, spareImg } = param;\n    _s();\n    const leftLists = [\n        \"ReactJS\",\n        \"NextJS\",\n        \"Typescript\"\n    ];\n    const rightLists = [\n        \"Pytorch\",\n        \"Pandas\",\n        \"Tensorflow\"\n    ];\n    const [copied, setCopied] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const defaultOptions = {\n        loop: copied,\n        autoplay: copied,\n        animationData: _data_conffeti_json__WEBPACK_IMPORTED_MODULE_4__,\n        rendererSettings: {\n            preserveAspectRatio: \"xMidYMid slice\"\n        }\n    };\n    const handleCopy = ()=>{\n        const text = \"imartin.desarrollo@gmail.com\";\n        navigator.clipboard.writeText(text);\n        setCopied(true);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (0,_utils_cn__WEBPACK_IMPORTED_MODULE_2__.cn)(\"row-span-1 mx-[2rem] lg:mx-0 relative overflow-hidden bg-gradient-to-tl from-black-600 from-85% to-black-500 rounded-3xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4\", className),\n        style: {\n            backgroundColor: \"linear-gradient(30deg, rgba(0,0,0,1) 0%, rgba(255,255,255,1) 100%);\"\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"\".concat(id === 6 && \"flex justify-center\", \" h-full\"),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"w-full h-full absolute hidden lg:block\",\n                    children: img && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: img,\n                        alt: img,\n                        className: (0,_utils_cn__WEBPACK_IMPORTED_MODULE_2__.cn)(imgClassName, \"object-cover object-center \")\n                    }, void 0, false, {\n                        fileName: \"/Users/ivanl./Documents/GitHub/Portfoliov2.0/components/ui/BentoGrid.tsx\",\n                        lineNumber: 85,\n                        columnNumber: 13\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/ivanl./Documents/GitHub/Portfoliov2.0/components/ui/BentoGrid.tsx\",\n                    lineNumber: 83,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"absolute right-0 -bottom-5 \".concat(id === 5 && \"w-full opacity-80\", \" \"),\n                    children: spareImg && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: spareImg,\n                        alt: spareImg,\n                        className: \"object-cover object-center w-full h-full\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ivanl./Documents/GitHub/Portfoliov2.0/components/ui/BentoGrid.tsx\",\n                        lineNumber: 97,\n                        columnNumber: 13\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/ivanl./Documents/GitHub/Portfoliov2.0/components/ui/BentoGrid.tsx\",\n                    lineNumber: 92,\n                    columnNumber: 9\n                }, undefined),\n                id === 6 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_GradientBg__WEBPACK_IMPORTED_MODULE_3__.BackgroundGradientAnimation, {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ivanl./Documents/GitHub/Portfoliov2.0/components/ui/BentoGrid.tsx\",\n                        lineNumber: 106,\n                        columnNumber: 13\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/ivanl./Documents/GitHub/Portfoliov2.0/components/ui/BentoGrid.tsx\",\n                    lineNumber: 105,\n                    columnNumber: 11\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (0,_utils_cn__WEBPACK_IMPORTED_MODULE_2__.cn)(titleClassName, \"group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10\"),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"font-sans text-black-400 text-lg lg:text-3xl lg:max-w-56 max-w-36 font-bold z-10\",\n                            children: title\n                        }, void 0, false, {\n                            fileName: \"/Users/ivanl./Documents/GitHub/Portfoliov2.0/components/ui/BentoGrid.tsx\",\n                            lineNumber: 116,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"font-sans text-black-500 font-extralight md:max-w-full pt-5 md:text-xs lg:text-base text-sm z-10\",\n                            children: description\n                        }, void 0, false, {\n                            fileName: \"/Users/ivanl./Documents/GitHub/Portfoliov2.0/components/ui/BentoGrid.tsx\",\n                            lineNumber: 121,\n                            columnNumber: 11\n                        }, undefined),\n                        (id === 2 || id === 3) && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex gap-1 lg:gap-5 w-fit absolute -right-3 lg:-right-2\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flex flex-col gap-3 md:gap-3 lg:gap-8\",\n                                    children: [\n                                        leftLists.map((item, i)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                className: \"lg:py-4 lg:px-3 py-2 px-3 text-xs lg:text-base opacity-50  lg:opacity-100 rounded-lg text-center bg-[#222222]\",\n                                                children: item\n                                            }, i, false, {\n                                                fileName: \"/Users/ivanl./Documents/GitHub/Portfoliov2.0/components/ui/BentoGrid.tsx\",\n                                                lineNumber: 128,\n                                                columnNumber: 19\n                                            }, undefined)),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: \"lg:py-4 lg:px-3 py-4 px-3  rounded-lg text-center bg-[#222222]\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/ivanl./Documents/GitHub/Portfoliov2.0/components/ui/BentoGrid.tsx\",\n                                            lineNumber: 136,\n                                            columnNumber: 17\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/ivanl./Documents/GitHub/Portfoliov2.0/components/ui/BentoGrid.tsx\",\n                                    lineNumber: 126,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flex flex-col gap-3 md:gap-3 lg:gap-8\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: \"lg:py-4 lg:px-3 py-4 px-3  rounded-lg text-center bg-[#222222]\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/ivanl./Documents/GitHub/Portfoliov2.0/components/ui/BentoGrid.tsx\",\n                                            lineNumber: 139,\n                                            columnNumber: 17\n                                        }, undefined),\n                                        rightLists.map((item, i)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                className: \"lg:py-4 lg:px-3 py-2 px-3 text-xs lg:text-base opacity-50  lg:opacity-100 rounded-lg text-center bg-[#222222]\",\n                                                children: item\n                                            }, i, false, {\n                                                fileName: \"/Users/ivanl./Documents/GitHub/Portfoliov2.0/components/ui/BentoGrid.tsx\",\n                                                lineNumber: 141,\n                                                columnNumber: 19\n                                            }, undefined))\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/ivanl./Documents/GitHub/Portfoliov2.0/components/ui/BentoGrid.tsx\",\n                                    lineNumber: 138,\n                                    columnNumber: 15\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/ivanl./Documents/GitHub/Portfoliov2.0/components/ui/BentoGrid.tsx\",\n                            lineNumber: 125,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/ivanl./Documents/GitHub/Portfoliov2.0/components/ui/BentoGrid.tsx\",\n                    lineNumber: 110,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/ivanl./Documents/GitHub/Portfoliov2.0/components/ui/BentoGrid.tsx\",\n            lineNumber: 82,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/ivanl./Documents/GitHub/Portfoliov2.0/components/ui/BentoGrid.tsx\",\n        lineNumber: 72,\n        columnNumber: 5\n    }, undefined);\n};\n_s(BentoGridItem, \"NE86rL3vg4NVcTTWDavsT0hUBJs=\");\n_c1 = BentoGridItem;\nvar _c, _c1;\n$RefreshReg$(_c, \"BentoGrid\");\n$RefreshReg$(_c1, \"BentoGridItem\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvdWkvQmVudG9HcmlkLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQ2lDO0FBS0Q7QUFHMkI7QUFDVjtBQUUxQyxNQUFNSSxZQUFZO1FBQUMsRUFDeEJDLFNBQVMsRUFDVEMsUUFBUSxFQUlUO0lBQ0MscUJBQ0UsOERBQUNDO1FBQ0NGLFdBQVdKLDZDQUFFQSxDQUNYLHVGQUNBSTtrQkFHREM7Ozs7OztBQUdQLEVBQUU7S0FqQldGO0FBbUJOLE1BQU1JLGdCQUFnQjtRQUFDLEVBQzVCSCxTQUFTLEVBQ1RJLEVBQUUsRUFDRkMsS0FBSyxFQUNMQyxXQUFXLEVBQ1hDLEdBQUcsRUFDSEMsWUFBWSxFQUNaQyxjQUFjLEVBQ2RDLFFBQVEsRUFVVDs7SUFDQyxNQUFNQyxZQUFZO1FBQUM7UUFBVztRQUFVO0tBQWE7SUFDckQsTUFBTUMsYUFBYTtRQUFDO1FBQVc7UUFBVTtLQUFhO0lBRXRELE1BQU0sQ0FBQ0MsUUFBUUMsVUFBVSxHQUFHbkIsK0NBQVFBLENBQUM7SUFFckMsTUFBTW9CLGlCQUFpQjtRQUNyQkMsTUFBTUg7UUFDTkksVUFBVUo7UUFDVmYsZUFBZUEsZ0RBQWFBO1FBQzVCb0Isa0JBQWtCO1lBQ2hCQyxxQkFBcUI7UUFDdkI7SUFDRjtJQUVBLE1BQU1DLGFBQWE7UUFDakIsTUFBTUMsT0FBTztRQUNiQyxVQUFVQyxTQUFTLENBQUNDLFNBQVMsQ0FBQ0g7UUFDOUJQLFVBQVU7SUFDWjtJQUVBLHFCQUNFLDhEQUFDWjtRQUNDRixXQUFXSiw2Q0FBRUEsQ0FDWCxzUEFDQUk7UUFFRnlCLE9BQU87WUFDTEMsaUJBQ0U7UUFDSjtrQkFFQSw0RUFBQ3hCO1lBQUlGLFdBQVcsR0FBcUMsT0FBbENJLE9BQU8sS0FBSyx1QkFBc0I7OzhCQUNuRCw4REFBQ0Y7b0JBQUlGLFdBQVU7OEJBQ1pPLHFCQUNDLDhEQUFDQTt3QkFDQ29CLEtBQUtwQjt3QkFDTHFCLEtBQUtyQjt3QkFDTFAsV0FBV0osNkNBQUVBLENBQUNZLGNBQWM7Ozs7Ozs7Ozs7OzhCQUlsQyw4REFBQ047b0JBQ0NGLFdBQVcsOEJBQ1IsT0FEc0NJLE9BQU8sS0FBSyxxQkFDbEQ7OEJBRUZNLDBCQUNDLDhEQUFDSDt3QkFDQ29CLEtBQUtqQjt3QkFDTGtCLEtBQUtsQjt3QkFDTFYsV0FBVTs7Ozs7Ozs7Ozs7Z0JBSWZJLE9BQU8sbUJBQ04sOERBQUNQLG9FQUEyQkE7OEJBQzFCLDRFQUFDSzt3QkFBSUYsV0FBVTs7Ozs7Ozs7Ozs7OEJBSW5CLDhEQUFDRTtvQkFDQ0YsV0FBV0osNkNBQUVBLENBQ1hhLGdCQUNBOztzQ0FHRiw4REFBQ1A7NEJBQ0NGLFdBQVk7c0NBRVhLOzs7Ozs7c0NBRUgsOERBQUNIOzRCQUFJRixXQUFVO3NDQUNaTTs7Ozs7O3dCQUVERixDQUFBQSxPQUFPLEtBQUtBLE9BQU8sb0JBQ25CLDhEQUFDRjs0QkFBSUYsV0FBVTs7OENBQ2IsOERBQUNFO29DQUFJRixXQUFVOzt3Q0FDWlcsVUFBVWtCLEdBQUcsQ0FBQyxDQUFDQyxNQUFNQyxrQkFDcEIsOERBQUNDO2dEQUVDaEMsV0FBVTswREFHVDhCOytDQUpJQzs7Ozs7c0RBT1QsOERBQUNDOzRDQUFLaEMsV0FBVTs7Ozs7Ozs7Ozs7OzhDQUVsQiw4REFBQ0U7b0NBQUlGLFdBQVU7O3NEQUNiLDhEQUFDZ0M7NENBQUtoQyxXQUFVOzs7Ozs7d0NBQ2ZZLFdBQVdpQixHQUFHLENBQUMsQ0FBQ0MsTUFBTUMsa0JBQ3JCLDhEQUFDQztnREFFQ2hDLFdBQVU7MERBR1Q4QjsrQ0FKSUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFjekIsRUFBRTtHQTVIVzVCO01BQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvdWkvQmVudG9HcmlkLnRzeD81ZWNjIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IElvQ29weU91dGxpbmUgfSBmcm9tIFwicmVhY3QtaWNvbnMvaW81XCI7XG5cbmltcG9ydCBMb3R0aWUgZnJvbSBcInJlYWN0LWxvdHRpZVwiO1xuXG5pbXBvcnQgeyBjbiB9IGZyb20gXCJAL3V0aWxzL2NuXCI7XG5cblxuaW1wb3J0IHsgQmFja2dyb3VuZEdyYWRpZW50QW5pbWF0aW9uIH0gZnJvbSBcIi4vR3JhZGllbnRCZ1wiO1xuaW1wb3J0IGFuaW1hdGlvbkRhdGEgZnJvbSBcIkAvZGF0YS9jb25mZmV0aS5qc29uXCI7XG5cbmV4cG9ydCBjb25zdCBCZW50b0dyaWQgPSAoe1xuICBjbGFzc05hbWUsXG4gIGNoaWxkcmVuLFxufToge1xuICBjbGFzc05hbWU/OiBzdHJpbmc7XG4gIGNoaWxkcmVuPzogUmVhY3QuUmVhY3ROb2RlO1xufSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIGNsYXNzTmFtZT17Y24oXG4gICAgICAgIFwiZ3JpZCBncmlkLWNvbHMtMSBtZDpncmlkLWNvbHMtNiBsZzpncmlkLWNvbHMtNSBtZDpncmlkLXJvdy03IGdhcC00IGxnOmdhcC04IG14LWF1dG9cIixcbiAgICAgICAgY2xhc3NOYW1lXG4gICAgICApfVxuICAgID5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBjb25zdCBCZW50b0dyaWRJdGVtID0gKHtcbiAgY2xhc3NOYW1lLFxuICBpZCxcbiAgdGl0bGUsXG4gIGRlc2NyaXB0aW9uLFxuICBpbWcsXG4gIGltZ0NsYXNzTmFtZSxcbiAgdGl0bGVDbGFzc05hbWUsXG4gIHNwYXJlSW1nLFxufToge1xuICBjbGFzc05hbWU/OiBzdHJpbmc7XG4gIGlkOiBudW1iZXI7XG4gIHRpdGxlPzogc3RyaW5nIHwgUmVhY3QuUmVhY3ROb2RlO1xuICBkZXNjcmlwdGlvbj86IHN0cmluZyB8IFJlYWN0LlJlYWN0Tm9kZTtcbiAgaW1nPzogc3RyaW5nO1xuICBpbWdDbGFzc05hbWU/OiBzdHJpbmc7XG4gIHRpdGxlQ2xhc3NOYW1lPzogc3RyaW5nO1xuICBzcGFyZUltZz86IHN0cmluZztcbn0pID0+IHtcbiAgY29uc3QgbGVmdExpc3RzID0gW1wiUmVhY3RKU1wiLCBcIk5leHRKU1wiLCBcIlR5cGVzY3JpcHRcIl07XG4gIGNvbnN0IHJpZ2h0TGlzdHMgPSBbXCJQeXRvcmNoXCIsIFwiUGFuZGFzXCIsIFwiVGVuc29yZmxvd1wiXTtcblxuICBjb25zdCBbY29waWVkLCBzZXRDb3BpZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0IGRlZmF1bHRPcHRpb25zID0ge1xuICAgIGxvb3A6IGNvcGllZCxcbiAgICBhdXRvcGxheTogY29waWVkLFxuICAgIGFuaW1hdGlvbkRhdGE6IGFuaW1hdGlvbkRhdGEsXG4gICAgcmVuZGVyZXJTZXR0aW5nczoge1xuICAgICAgcHJlc2VydmVBc3BlY3RSYXRpbzogXCJ4TWlkWU1pZCBzbGljZVwiLFxuICAgIH0sXG4gIH07XG5cbiAgY29uc3QgaGFuZGxlQ29weSA9ICgpID0+IHtcbiAgICBjb25zdCB0ZXh0ID0gXCJpbWFydGluLmRlc2Fycm9sbG9AZ21haWwuY29tXCI7XG4gICAgbmF2aWdhdG9yLmNsaXBib2FyZC53cml0ZVRleHQodGV4dCk7XG4gICAgc2V0Q29waWVkKHRydWUpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgY2xhc3NOYW1lPXtjbihcbiAgICAgICAgXCJyb3ctc3Bhbi0xIG14LVsycmVtXSBsZzpteC0wIHJlbGF0aXZlIG92ZXJmbG93LWhpZGRlbiBiZy1ncmFkaWVudC10by10bCBmcm9tLWJsYWNrLTYwMCBmcm9tLTg1JSB0by1ibGFjay01MDAgcm91bmRlZC0zeGwgZ3JvdXAvYmVudG8gaG92ZXI6c2hhZG93LXhsIHRyYW5zaXRpb24gZHVyYXRpb24tMjAwIHNoYWRvdy1pbnB1dCBkYXJrOnNoYWRvdy1ub25lIGp1c3RpZnktYmV0d2VlbiBmbGV4IGZsZXgtY29sIHNwYWNlLXktNFwiLFxuICAgICAgICBjbGFzc05hbWVcbiAgICAgICl9XG4gICAgICBzdHlsZT17e1xuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6XG4gICAgICAgICAgXCJsaW5lYXItZ3JhZGllbnQoMzBkZWcsIHJnYmEoMCwwLDAsMSkgMCUsIHJnYmEoMjU1LDI1NSwyNTUsMSkgMTAwJSk7XCIsXG4gICAgICB9fVxuICAgID5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtpZCA9PT0gNiAmJiBcImZsZXgganVzdGlmeS1jZW50ZXJcIn0gaC1mdWxsYH0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGgtZnVsbCBhYnNvbHV0ZSBoaWRkZW4gbGc6YmxvY2tcIj5cbiAgICAgICAgICB7aW1nICYmIChcbiAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgc3JjPXtpbWd9XG4gICAgICAgICAgICAgIGFsdD17aW1nfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2NuKGltZ0NsYXNzTmFtZSwgXCJvYmplY3QtY292ZXIgb2JqZWN0LWNlbnRlciBcIil9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3NOYW1lPXtgYWJzb2x1dGUgcmlnaHQtMCAtYm90dG9tLTUgJHtpZCA9PT0gNSAmJiBcInctZnVsbCBvcGFjaXR5LTgwXCJcbiAgICAgICAgICAgIH0gYH1cbiAgICAgICAgPlxuICAgICAgICAgIHtzcGFyZUltZyAmJiAoXG4gICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgIHNyYz17c3BhcmVJbWd9XG4gICAgICAgICAgICAgIGFsdD17c3BhcmVJbWd9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm9iamVjdC1jb3ZlciBvYmplY3QtY2VudGVyIHctZnVsbCBoLWZ1bGxcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAge2lkID09PSA2ICYmIChcbiAgICAgICAgICA8QmFja2dyb3VuZEdyYWRpZW50QW5pbWF0aW9uPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSB6LTUwIGluc2V0LTAgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgdGV4dC13aGl0ZSBmb250LWJvbGQgcHgtNCBwb2ludGVyLWV2ZW50cy1ub25lIHRleHQtM3hsIHRleHQtY2VudGVyIG1kOnRleHQtNHhsIGxnOnRleHQtN3hsXCI+PC9kaXY+XG4gICAgICAgICAgPC9CYWNrZ3JvdW5kR3JhZGllbnRBbmltYXRpb24+XG4gICAgICAgICl9XG5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIGNsYXNzTmFtZT17Y24oXG4gICAgICAgICAgICB0aXRsZUNsYXNzTmFtZSxcbiAgICAgICAgICAgIFwiZ3JvdXAtaG92ZXIvYmVudG86dHJhbnNsYXRlLXgtMiB0cmFuc2l0aW9uIGR1cmF0aW9uLTIwMCByZWxhdGl2ZSBtZDpoLWZ1bGwgbWluLWgtNDAgZmxleCBmbGV4LWNvbCBweC01IHAtNSBsZzpwLTEwXCJcbiAgICAgICAgICApfVxuICAgICAgICA+XG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgZm9udC1zYW5zIHRleHQtYmxhY2stNDAwIHRleHQtbGcgbGc6dGV4dC0zeGwgbGc6bWF4LXctNTYgbWF4LXctMzYgZm9udC1ib2xkIHotMTBgfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHt0aXRsZX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvbnQtc2FucyB0ZXh0LWJsYWNrLTUwMCBmb250LWV4dHJhbGlnaHQgbWQ6bWF4LXctZnVsbCBwdC01IG1kOnRleHQteHMgbGc6dGV4dC1iYXNlIHRleHQtc20gei0xMFwiPlxuICAgICAgICAgICAge2Rlc2NyaXB0aW9ufVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIHsoaWQgPT09IDIgfHwgaWQgPT09IDMpICYmIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBnYXAtMSBsZzpnYXAtNSB3LWZpdCBhYnNvbHV0ZSAtcmlnaHQtMyBsZzotcmlnaHQtMlwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgZ2FwLTMgbWQ6Z2FwLTMgbGc6Z2FwLThcIj5cbiAgICAgICAgICAgICAgICB7bGVmdExpc3RzLm1hcCgoaXRlbSwgaSkgPT4gKFxuICAgICAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICAgICAga2V5PXtpfVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJsZzpweS00IGxnOnB4LTMgcHktMiBweC0zIHRleHQteHMgbGc6dGV4dC1iYXNlIG9wYWNpdHktNTAgXG4gICAgICAgICAgICAgICAgICAgIGxnOm9wYWNpdHktMTAwIHJvdW5kZWQtbGcgdGV4dC1jZW50ZXIgYmctWyMyMjIyMjJdXCJcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAge2l0ZW19XG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibGc6cHktNCBsZzpweC0zIHB5LTQgcHgtMyAgcm91bmRlZC1sZyB0ZXh0LWNlbnRlciBiZy1bIzIyMjIyMl1cIj48L3NwYW4+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgZ2FwLTMgbWQ6Z2FwLTMgbGc6Z2FwLThcIj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJsZzpweS00IGxnOnB4LTMgcHktNCBweC0zICByb3VuZGVkLWxnIHRleHQtY2VudGVyIGJnLVsjMjIyMjIyXVwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICB7cmlnaHRMaXN0cy5tYXAoKGl0ZW0sIGkpID0+IChcbiAgICAgICAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAgICAgIGtleT17aX1cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibGc6cHktNCBsZzpweC0zIHB5LTIgcHgtMyB0ZXh0LXhzIGxnOnRleHQtYmFzZSBvcGFjaXR5LTUwIFxuICAgICAgICAgICAgICAgICAgICBsZzpvcGFjaXR5LTEwMCByb3VuZGVkLWxnIHRleHQtY2VudGVyIGJnLVsjMjIyMjIyXVwiXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIHtpdGVtfVxuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59OyJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsImNuIiwiQmFja2dyb3VuZEdyYWRpZW50QW5pbWF0aW9uIiwiYW5pbWF0aW9uRGF0YSIsIkJlbnRvR3JpZCIsImNsYXNzTmFtZSIsImNoaWxkcmVuIiwiZGl2IiwiQmVudG9HcmlkSXRlbSIsImlkIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImltZyIsImltZ0NsYXNzTmFtZSIsInRpdGxlQ2xhc3NOYW1lIiwic3BhcmVJbWciLCJsZWZ0TGlzdHMiLCJyaWdodExpc3RzIiwiY29waWVkIiwic2V0Q29waWVkIiwiZGVmYXVsdE9wdGlvbnMiLCJsb29wIiwiYXV0b3BsYXkiLCJyZW5kZXJlclNldHRpbmdzIiwicHJlc2VydmVBc3BlY3RSYXRpbyIsImhhbmRsZUNvcHkiLCJ0ZXh0IiwibmF2aWdhdG9yIiwiY2xpcGJvYXJkIiwid3JpdGVUZXh0Iiwic3R5bGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJzcmMiLCJhbHQiLCJtYXAiLCJpdGVtIiwiaSIsInNwYW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/ui/BentoGrid.tsx\n"));

/***/ })

});
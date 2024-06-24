"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/html-dom-parser";
exports.ids = ["vendor-chunks/html-dom-parser"];
exports.modules = {

/***/ "(ssr)/./node_modules/html-dom-parser/lib/index.js":
/*!***************************************************!*\
  !*** ./node_modules/html-dom-parser/lib/index.js ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports[\"default\"] = void 0;\n/**\n * When running on Node.js, use the server parser.\n * When bundling for the browser, use the client parser.\n *\n * @see https://github.com/substack/node-browserify#browser-field\n */\nvar html_to_dom_1 = __webpack_require__(/*! ./server/html-to-dom */ \"(ssr)/./node_modules/html-dom-parser/lib/server/html-to-dom.js\");\nObject.defineProperty(exports, \"default\", ({ enumerable: true, get: function () { return __importDefault(html_to_dom_1).default; } }));\n__exportStar(__webpack_require__(/*! ./types */ \"(ssr)/./node_modules/html-dom-parser/lib/types.js\"), exports);\n//# sourceMappingURL=index.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvaHRtbC1kb20tcGFyc2VyL2xpYi9pbmRleC5qcyIsIm1hcHBpbmdzIjoiQUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxvQ0FBb0M7QUFDbkQ7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkNBQTZDO0FBQzdDO0FBQ0EsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdELGtCQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLG1CQUFPLENBQUMsNEZBQXNCO0FBQ2xELDJDQUEwQyxFQUFFLHFDQUFxQyxrREFBa0QsRUFBQztBQUNwSSxhQUFhLG1CQUFPLENBQUMsa0VBQVM7QUFDOUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXdfcG9ydGZvbGlvLy4vbm9kZV9tb2R1bGVzL2h0bWwtZG9tLXBhcnNlci9saWIvaW5kZXguanM/YzdkZSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2NyZWF0ZUJpbmRpbmcgPSAodGhpcyAmJiB0aGlzLl9fY3JlYXRlQmluZGluZykgfHwgKE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xuICAgIHZhciBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihtLCBrKTtcbiAgICBpZiAoIWRlc2MgfHwgKFwiZ2V0XCIgaW4gZGVzYyA/ICFtLl9fZXNNb2R1bGUgOiBkZXNjLndyaXRhYmxlIHx8IGRlc2MuY29uZmlndXJhYmxlKSkge1xuICAgICAgZGVzYyA9IHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbigpIHsgcmV0dXJuIG1ba107IH0gfTtcbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIGsyLCBkZXNjKTtcbn0pIDogKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcbiAgICBvW2syXSA9IG1ba107XG59KSk7XG52YXIgX19leHBvcnRTdGFyID0gKHRoaXMgJiYgdGhpcy5fX2V4cG9ydFN0YXIpIHx8IGZ1bmN0aW9uKG0sIGV4cG9ydHMpIHtcbiAgICBmb3IgKHZhciBwIGluIG0pIGlmIChwICE9PSBcImRlZmF1bHRcIiAmJiAhT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGV4cG9ydHMsIHApKSBfX2NyZWF0ZUJpbmRpbmcoZXhwb3J0cywgbSwgcCk7XG59O1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xuLyoqXG4gKiBXaGVuIHJ1bm5pbmcgb24gTm9kZS5qcywgdXNlIHRoZSBzZXJ2ZXIgcGFyc2VyLlxuICogV2hlbiBidW5kbGluZyBmb3IgdGhlIGJyb3dzZXIsIHVzZSB0aGUgY2xpZW50IHBhcnNlci5cbiAqXG4gKiBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9zdWJzdGFjay9ub2RlLWJyb3dzZXJpZnkjYnJvd3Nlci1maWVsZFxuICovXG52YXIgaHRtbF90b19kb21fMSA9IHJlcXVpcmUoXCIuL3NlcnZlci9odG1sLXRvLWRvbVwiKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcImRlZmF1bHRcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIF9faW1wb3J0RGVmYXVsdChodG1sX3RvX2RvbV8xKS5kZWZhdWx0OyB9IH0pO1xuX19leHBvcnRTdGFyKHJlcXVpcmUoXCIuL3R5cGVzXCIpLCBleHBvcnRzKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcCJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/html-dom-parser/lib/index.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/html-dom-parser/lib/server/html-to-dom.js":
/*!****************************************************************!*\
  !*** ./node_modules/html-dom-parser/lib/server/html-to-dom.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar htmlparser2_1 = __webpack_require__(/*! htmlparser2 */ \"(ssr)/./node_modules/htmlparser2/lib/index.js\");\nvar domhandler_1 = __webpack_require__(/*! domhandler */ \"(ssr)/./node_modules/domhandler/lib/index.js\");\nvar utilities_1 = __webpack_require__(/*! ./utilities */ \"(ssr)/./node_modules/html-dom-parser/lib/server/utilities.js\");\n/**\n * Parses HTML string to DOM nodes in Node.js.\n *\n * This is the same method as `require('htmlparser2').parseDOM`\n *\n * @see https://github.com/fb55/htmlparser2/blob/v9.0.0/src/index.ts#L44-L46\n * @see https://github.com/fb55/domhandler/tree/v5.0.3#readme\n *\n * @param html - HTML markup.\n * @param options - Parser options.\n * @returns - DOM nodes.\n */\nfunction HTMLDOMParser(html, options) {\n    if (typeof html !== 'string') {\n        throw new TypeError('First argument must be a string.');\n    }\n    if (!html) {\n        return [];\n    }\n    var handler = new domhandler_1.DomHandler(undefined, options);\n    new htmlparser2_1.Parser(handler, options).end(html);\n    return (0, utilities_1.unsetRootParent)(handler.dom);\n}\nexports[\"default\"] = HTMLDOMParser;\n//# sourceMappingURL=html-to-dom.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvaHRtbC1kb20tcGFyc2VyL2xpYi9zZXJ2ZXIvaHRtbC10by1kb20uanMiLCJtYXBwaW5ncyI6IkFBQWE7QUFDYiw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0Qsb0JBQW9CLG1CQUFPLENBQUMsa0VBQWE7QUFDekMsbUJBQW1CLG1CQUFPLENBQUMsZ0VBQVk7QUFDdkMsa0JBQWtCLG1CQUFPLENBQUMsaUZBQWE7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFlO0FBQ2YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXdfcG9ydGZvbGlvLy4vbm9kZV9tb2R1bGVzL2h0bWwtZG9tLXBhcnNlci9saWIvc2VydmVyL2h0bWwtdG8tZG9tLmpzPzg3ZDkiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgaHRtbHBhcnNlcjJfMSA9IHJlcXVpcmUoXCJodG1scGFyc2VyMlwiKTtcbnZhciBkb21oYW5kbGVyXzEgPSByZXF1aXJlKFwiZG9taGFuZGxlclwiKTtcbnZhciB1dGlsaXRpZXNfMSA9IHJlcXVpcmUoXCIuL3V0aWxpdGllc1wiKTtcbi8qKlxuICogUGFyc2VzIEhUTUwgc3RyaW5nIHRvIERPTSBub2RlcyBpbiBOb2RlLmpzLlxuICpcbiAqIFRoaXMgaXMgdGhlIHNhbWUgbWV0aG9kIGFzIGByZXF1aXJlKCdodG1scGFyc2VyMicpLnBhcnNlRE9NYFxuICpcbiAqIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL2ZiNTUvaHRtbHBhcnNlcjIvYmxvYi92OS4wLjAvc3JjL2luZGV4LnRzI0w0NC1MNDZcbiAqIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL2ZiNTUvZG9taGFuZGxlci90cmVlL3Y1LjAuMyNyZWFkbWVcbiAqXG4gKiBAcGFyYW0gaHRtbCAtIEhUTUwgbWFya3VwLlxuICogQHBhcmFtIG9wdGlvbnMgLSBQYXJzZXIgb3B0aW9ucy5cbiAqIEByZXR1cm5zIC0gRE9NIG5vZGVzLlxuICovXG5mdW5jdGlvbiBIVE1MRE9NUGFyc2VyKGh0bWwsIG9wdGlvbnMpIHtcbiAgICBpZiAodHlwZW9mIGh0bWwgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0ZpcnN0IGFyZ3VtZW50IG11c3QgYmUgYSBzdHJpbmcuJyk7XG4gICAgfVxuICAgIGlmICghaHRtbCkge1xuICAgICAgICByZXR1cm4gW107XG4gICAgfVxuICAgIHZhciBoYW5kbGVyID0gbmV3IGRvbWhhbmRsZXJfMS5Eb21IYW5kbGVyKHVuZGVmaW5lZCwgb3B0aW9ucyk7XG4gICAgbmV3IGh0bWxwYXJzZXIyXzEuUGFyc2VyKGhhbmRsZXIsIG9wdGlvbnMpLmVuZChodG1sKTtcbiAgICByZXR1cm4gKDAsIHV0aWxpdGllc18xLnVuc2V0Um9vdFBhcmVudCkoaGFuZGxlci5kb20pO1xufVxuZXhwb3J0cy5kZWZhdWx0ID0gSFRNTERPTVBhcnNlcjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWh0bWwtdG8tZG9tLmpzLm1hcCJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/html-dom-parser/lib/server/html-to-dom.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/html-dom-parser/lib/server/utilities.js":
/*!**************************************************************!*\
  !*** ./node_modules/html-dom-parser/lib/server/utilities.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.unsetRootParent = void 0;\n/**\n * Sets root parent to null.\n *\n * @param nodes - Nodes.\n * @returns - Nodes.\n */\nfunction unsetRootParent(nodes) {\n    var index = 0;\n    var nodesLength = nodes.length;\n    for (; index < nodesLength; index++) {\n        var node = nodes[index];\n        node.parent = null;\n    }\n    return nodes;\n}\nexports.unsetRootParent = unsetRootParent;\n//# sourceMappingURL=utilities.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvaHRtbC1kb20tcGFyc2VyL2xpYi9zZXJ2ZXIvdXRpbGl0aWVzLmpzIiwibWFwcGluZ3MiOiJBQUFhO0FBQ2IsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdELHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLHFCQUFxQjtBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV3X3BvcnRmb2xpby8uL25vZGVfbW9kdWxlcy9odG1sLWRvbS1wYXJzZXIvbGliL3NlcnZlci91dGlsaXRpZXMuanM/MGU2MSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMudW5zZXRSb290UGFyZW50ID0gdm9pZCAwO1xuLyoqXG4gKiBTZXRzIHJvb3QgcGFyZW50IHRvIG51bGwuXG4gKlxuICogQHBhcmFtIG5vZGVzIC0gTm9kZXMuXG4gKiBAcmV0dXJucyAtIE5vZGVzLlxuICovXG5mdW5jdGlvbiB1bnNldFJvb3RQYXJlbnQobm9kZXMpIHtcbiAgICB2YXIgaW5kZXggPSAwO1xuICAgIHZhciBub2Rlc0xlbmd0aCA9IG5vZGVzLmxlbmd0aDtcbiAgICBmb3IgKDsgaW5kZXggPCBub2Rlc0xlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICB2YXIgbm9kZSA9IG5vZGVzW2luZGV4XTtcbiAgICAgICAgbm9kZS5wYXJlbnQgPSBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gbm9kZXM7XG59XG5leHBvcnRzLnVuc2V0Um9vdFBhcmVudCA9IHVuc2V0Um9vdFBhcmVudDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXV0aWxpdGllcy5qcy5tYXAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/html-dom-parser/lib/server/utilities.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/html-dom-parser/lib/types.js":
/*!***************************************************!*\
  !*** ./node_modules/html-dom-parser/lib/types.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\n//# sourceMappingURL=types.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvaHRtbC1kb20tcGFyc2VyL2xpYi90eXBlcy5qcyIsIm1hcHBpbmdzIjoiQUFBYTtBQUNiLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCIsInNvdXJjZXMiOlsid2VicGFjazovL25ld19wb3J0Zm9saW8vLi9ub2RlX21vZHVsZXMvaHRtbC1kb20tcGFyc2VyL2xpYi90eXBlcy5qcz9kOGFmIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dHlwZXMuanMubWFwIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/html-dom-parser/lib/types.js\n");

/***/ })

};
;
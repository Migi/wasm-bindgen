(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./dom.js":
/*!****************!*\
  !*** ./dom.js ***!
  \****************/
/*! exports provided: run, __widl_f_create_element_Document, __widl_f_body_Document, __widl_f_set_inner_html_Element, __widl_f_append_child_Node, __widl_instanceof_Window, __widl_f_document_Window, __wbg_newnoargs_b1f726fad978f5a3, __wbg_call_fa7f0da29d7b9250, __wbindgen_object_clone_ref, __wbindgen_object_drop_ref, __wbindgen_rethrow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(TextDecoder) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"run\", function() { return run; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__widl_f_create_element_Document\", function() { return __widl_f_create_element_Document; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__widl_f_body_Document\", function() { return __widl_f_body_Document; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__widl_f_set_inner_html_Element\", function() { return __widl_f_set_inner_html_Element; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__widl_f_append_child_Node\", function() { return __widl_f_append_child_Node; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__widl_instanceof_Window\", function() { return __widl_instanceof_Window; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__widl_f_document_Window\", function() { return __widl_f_document_Window; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_newnoargs_b1f726fad978f5a3\", function() { return __wbg_newnoargs_b1f726fad978f5a3; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_call_fa7f0da29d7b9250\", function() { return __wbg_call_fa7f0da29d7b9250; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_object_clone_ref\", function() { return __wbindgen_object_clone_ref; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_object_drop_ref\", function() { return __wbindgen_object_drop_ref; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_rethrow\", function() { return __wbindgen_rethrow; });\n/* harmony import */ var _dom_bg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom_bg */ \"./dom_bg.wasm\");\n/* tslint:disable */\n\n\n/**\n* @returns {void}\n*/\nfunction run() {\n    return _dom_bg__WEBPACK_IMPORTED_MODULE_0__[\"run\"]();\n}\n\nconst __widl_f_create_element_Document_target = Document.prototype.createElement || function() {\n    throw new Error(`wasm-bindgen: Document.prototype.createElement does not exist`);\n};\n\nlet cachegetUint32Memory = null;\nfunction getUint32Memory() {\n    if (cachegetUint32Memory === null || cachegetUint32Memory.buffer !== _dom_bg__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer) {\n        cachegetUint32Memory = new Uint32Array(_dom_bg__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer);\n    }\n    return cachegetUint32Memory;\n}\n\nconst slab = [{ obj: undefined }, { obj: null }, { obj: true }, { obj: false }];\n\nlet slab_next = slab.length;\n\nfunction addHeapObject(obj) {\n    if (slab_next === slab.length) slab.push(slab.length + 1);\n    const idx = slab_next;\n    const next = slab[idx];\n\n    slab_next = next;\n\n    slab[idx] = { obj, cnt: 1 };\n    return idx << 1;\n}\n\nconst stack = [];\n\nfunction getObject(idx) {\n    if ((idx & 1) === 1) {\n        return stack[idx >> 1];\n    } else {\n        const val = slab[idx >> 1];\n\n        return val.obj;\n\n    }\n}\n\nconst lTextDecoder = typeof TextDecoder === 'undefined' ? __webpack_require__(/*! util */ \"../../node_modules/util/util.js\").TextDecoder : TextDecoder;\n\nlet cachedTextDecoder = new lTextDecoder('utf-8');\n\nlet cachegetUint8Memory = null;\nfunction getUint8Memory() {\n    if (cachegetUint8Memory === null || cachegetUint8Memory.buffer !== _dom_bg__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer) {\n        cachegetUint8Memory = new Uint8Array(_dom_bg__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer);\n    }\n    return cachegetUint8Memory;\n}\n\nfunction getStringFromWasm(ptr, len) {\n    return cachedTextDecoder.decode(getUint8Memory().subarray(ptr, ptr + len));\n}\n\nfunction __widl_f_create_element_Document(arg0, arg1, arg2, exnptr) {\n    let varg1 = getStringFromWasm(arg1, arg2);\n    try {\n        return addHeapObject(__widl_f_create_element_Document_target.call(getObject(arg0), varg1));\n    } catch (e) {\n        const view = getUint32Memory();\n        view[exnptr / 4] = 1;\n        view[exnptr / 4 + 1] = addHeapObject(e);\n\n    }\n}\n\nfunction GetOwnOrInheritedPropertyDescriptor(obj, id) {\n    while (obj) {\n        let desc = Object.getOwnPropertyDescriptor(obj, id);\n        if (desc) return desc;\n        obj = Object.getPrototypeOf(obj);\n    }\n    throw new Error(`descriptor for id='${id}' not found`);\n}\n\nconst __widl_f_body_Document_target = GetOwnOrInheritedPropertyDescriptor(Document.prototype, 'body').get || function() {\n    throw new Error(`wasm-bindgen: GetOwnOrInheritedPropertyDescriptor(Document.prototype, 'body').get does not exist`);\n};\n\nfunction isLikeNone(x) {\n    return x === undefined || x === null;\n}\n\nfunction __widl_f_body_Document(arg0) {\n\n    const val = __widl_f_body_Document_target.call(getObject(arg0));\n    return isLikeNone(val) ? 0 : addHeapObject(val);\n\n}\n\nconst __widl_f_set_inner_html_Element_target = GetOwnOrInheritedPropertyDescriptor(Element.prototype, 'innerHTML').set || function() {\n    throw new Error(`wasm-bindgen: GetOwnOrInheritedPropertyDescriptor(Element.prototype, 'innerHTML').set does not exist`);\n};\n\nfunction __widl_f_set_inner_html_Element(arg0, arg1, arg2) {\n    let varg1 = getStringFromWasm(arg1, arg2);\n    __widl_f_set_inner_html_Element_target.call(getObject(arg0), varg1);\n}\n\nconst __widl_f_append_child_Node_target = Node.prototype.appendChild || function() {\n    throw new Error(`wasm-bindgen: Node.prototype.appendChild does not exist`);\n};\n\nfunction __widl_f_append_child_Node(arg0, arg1, exnptr) {\n    try {\n        return addHeapObject(__widl_f_append_child_Node_target.call(getObject(arg0), getObject(arg1)));\n    } catch (e) {\n        const view = getUint32Memory();\n        view[exnptr / 4] = 1;\n        view[exnptr / 4 + 1] = addHeapObject(e);\n\n    }\n}\n\nfunction __widl_instanceof_Window(idx) {\n    return getObject(idx) instanceof Window ? 1 : 0;\n}\n\nconst __widl_f_document_Window_target = function() {\n    return this.document;\n};\n\nfunction __widl_f_document_Window(arg0) {\n\n    const val = __widl_f_document_Window_target.call(getObject(arg0));\n    return isLikeNone(val) ? 0 : addHeapObject(val);\n\n}\n\nfunction __wbg_newnoargs_b1f726fad978f5a3(arg0, arg1) {\n    let varg0 = getStringFromWasm(arg0, arg1);\n    return addHeapObject(new Function(varg0));\n}\n\nconst __wbg_call_fa7f0da29d7b9250_target = Function.prototype.call || function() {\n    throw new Error(`wasm-bindgen: Function.prototype.call does not exist`);\n};\n\nfunction __wbg_call_fa7f0da29d7b9250(arg0, arg1, exnptr) {\n    try {\n        return addHeapObject(__wbg_call_fa7f0da29d7b9250_target.call(getObject(arg0), getObject(arg1)));\n    } catch (e) {\n        const view = getUint32Memory();\n        view[exnptr / 4] = 1;\n        view[exnptr / 4 + 1] = addHeapObject(e);\n\n    }\n}\n\nfunction __wbindgen_object_clone_ref(idx) {\n    // If this object is on the stack promote it to the heap.\n    if ((idx & 1) === 1) return addHeapObject(getObject(idx));\n\n    // Otherwise if the object is on the heap just bump the\n    // refcount and move on\n    const val = slab[idx >> 1];\n    val.cnt += 1;\n    return idx;\n}\n\nfunction dropRef(idx) {\n\n    idx = idx >> 1;\n    if (idx < 4) return;\n    let obj = slab[idx];\n\n    obj.cnt -= 1;\n    if (obj.cnt > 0) return;\n\n    // If we hit 0 then free up our space in the slab\n    slab[idx] = slab_next;\n    slab_next = idx;\n}\n\nfunction __wbindgen_object_drop_ref(i) {\n    dropRef(i);\n}\n\nfunction takeObject(idx) {\n    const ret = getObject(idx);\n    dropRef(idx);\n    return ret;\n}\n\nfunction __wbindgen_rethrow(idx) { throw takeObject(idx); }\n\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! text-encoding */ \"../../node_modules/text-encoding/index.js\")[\"TextDecoder\"]))\n\n//# sourceURL=webpack:///./dom.js?");

/***/ }),

/***/ "./dom_bg.wasm":
/*!*********************!*\
  !*** ./dom_bg.wasm ***!
  \*********************/
/*! exports provided: memory, __indirect_function_table, __heap_base, __data_end, __rustc_debug_gdb_scripts_section__, run */
/***/ (function(module, exports, __webpack_require__) {

eval("\"use strict\";\n// Instantiate WebAssembly module\nvar wasmExports = __webpack_require__.w[module.i];\n__webpack_require__.r(exports);\n// export exports from WebAssembly module\nfor(var name in wasmExports) if(name != \"__webpack_init__\") exports[name] = wasmExports[name];\n// exec imports from WebAssembly module (for esm order)\n/* harmony import */ var m0 = __webpack_require__(/*! ./dom */ \"./dom.js\");\n\n\n// exec wasm module\nwasmExports[\"__webpack_init__\"]()\n\n//# sourceURL=webpack:///./dom_bg.wasm?");

/***/ })

}]);
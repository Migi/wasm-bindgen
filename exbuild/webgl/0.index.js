(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./webgl.js":
/*!******************!*\
  !*** ./webgl.js ***!
  \******************/
/*! exports provided: draw, __widl_f_get_element_by_id_Document, __widl_instanceof_HTMLCanvasElement, __widl_f_get_context_HTMLCanvasElement, __widl_instanceof_WebGLRenderingContext, __widl_f_buffer_data_with_opt_array_buffer_WebGLRenderingContext, __widl_f_attach_shader_WebGLRenderingContext, __widl_f_bind_buffer_WebGLRenderingContext, __widl_f_clear_WebGLRenderingContext, __widl_f_clear_color_WebGLRenderingContext, __widl_f_compile_shader_WebGLRenderingContext, __widl_f_create_buffer_WebGLRenderingContext, __widl_f_create_program_WebGLRenderingContext, __widl_f_create_shader_WebGLRenderingContext, __widl_f_draw_arrays_WebGLRenderingContext, __widl_f_enable_vertex_attrib_array_WebGLRenderingContext, __widl_f_get_program_info_log_WebGLRenderingContext, __widl_f_get_program_parameter_WebGLRenderingContext, __widl_f_get_shader_info_log_WebGLRenderingContext, __widl_f_get_shader_parameter_WebGLRenderingContext, __widl_f_link_program_WebGLRenderingContext, __widl_f_shader_source_WebGLRenderingContext, __widl_f_use_program_WebGLRenderingContext, __widl_f_vertex_attrib_pointer_with_i32_WebGLRenderingContext, __widl_instanceof_Window, __widl_f_document_Window, __wbg_new_b0f6b20c16090c90, __wbg_fill_9f0d9c86387a5bbe, __wbg_buffer_1034a5b5085bbbb5, __wbg_newnoargs_b1f726fad978f5a3, __wbg_call_fa7f0da29d7b9250, __wbindgen_object_clone_ref, __wbindgen_object_drop_ref, __wbindgen_number_new, __wbindgen_number_get, __wbindgen_is_null, __wbindgen_is_undefined, __wbindgen_boolean_get, __wbindgen_is_symbol, __wbindgen_string_get, __wbindgen_throw */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(TextDecoder, TextEncoder) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"draw\", function() { return draw; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__widl_f_get_element_by_id_Document\", function() { return __widl_f_get_element_by_id_Document; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__widl_instanceof_HTMLCanvasElement\", function() { return __widl_instanceof_HTMLCanvasElement; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__widl_f_get_context_HTMLCanvasElement\", function() { return __widl_f_get_context_HTMLCanvasElement; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__widl_instanceof_WebGLRenderingContext\", function() { return __widl_instanceof_WebGLRenderingContext; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__widl_f_buffer_data_with_opt_array_buffer_WebGLRenderingContext\", function() { return __widl_f_buffer_data_with_opt_array_buffer_WebGLRenderingContext; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__widl_f_attach_shader_WebGLRenderingContext\", function() { return __widl_f_attach_shader_WebGLRenderingContext; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__widl_f_bind_buffer_WebGLRenderingContext\", function() { return __widl_f_bind_buffer_WebGLRenderingContext; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__widl_f_clear_WebGLRenderingContext\", function() { return __widl_f_clear_WebGLRenderingContext; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__widl_f_clear_color_WebGLRenderingContext\", function() { return __widl_f_clear_color_WebGLRenderingContext; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__widl_f_compile_shader_WebGLRenderingContext\", function() { return __widl_f_compile_shader_WebGLRenderingContext; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__widl_f_create_buffer_WebGLRenderingContext\", function() { return __widl_f_create_buffer_WebGLRenderingContext; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__widl_f_create_program_WebGLRenderingContext\", function() { return __widl_f_create_program_WebGLRenderingContext; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__widl_f_create_shader_WebGLRenderingContext\", function() { return __widl_f_create_shader_WebGLRenderingContext; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__widl_f_draw_arrays_WebGLRenderingContext\", function() { return __widl_f_draw_arrays_WebGLRenderingContext; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__widl_f_enable_vertex_attrib_array_WebGLRenderingContext\", function() { return __widl_f_enable_vertex_attrib_array_WebGLRenderingContext; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__widl_f_get_program_info_log_WebGLRenderingContext\", function() { return __widl_f_get_program_info_log_WebGLRenderingContext; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__widl_f_get_program_parameter_WebGLRenderingContext\", function() { return __widl_f_get_program_parameter_WebGLRenderingContext; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__widl_f_get_shader_info_log_WebGLRenderingContext\", function() { return __widl_f_get_shader_info_log_WebGLRenderingContext; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__widl_f_get_shader_parameter_WebGLRenderingContext\", function() { return __widl_f_get_shader_parameter_WebGLRenderingContext; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__widl_f_link_program_WebGLRenderingContext\", function() { return __widl_f_link_program_WebGLRenderingContext; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__widl_f_shader_source_WebGLRenderingContext\", function() { return __widl_f_shader_source_WebGLRenderingContext; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__widl_f_use_program_WebGLRenderingContext\", function() { return __widl_f_use_program_WebGLRenderingContext; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__widl_f_vertex_attrib_pointer_with_i32_WebGLRenderingContext\", function() { return __widl_f_vertex_attrib_pointer_with_i32_WebGLRenderingContext; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__widl_instanceof_Window\", function() { return __widl_instanceof_Window; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__widl_f_document_Window\", function() { return __widl_f_document_Window; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_new_b0f6b20c16090c90\", function() { return __wbg_new_b0f6b20c16090c90; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_fill_9f0d9c86387a5bbe\", function() { return __wbg_fill_9f0d9c86387a5bbe; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_buffer_1034a5b5085bbbb5\", function() { return __wbg_buffer_1034a5b5085bbbb5; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_newnoargs_b1f726fad978f5a3\", function() { return __wbg_newnoargs_b1f726fad978f5a3; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_call_fa7f0da29d7b9250\", function() { return __wbg_call_fa7f0da29d7b9250; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_object_clone_ref\", function() { return __wbindgen_object_clone_ref; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_object_drop_ref\", function() { return __wbindgen_object_drop_ref; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_number_new\", function() { return __wbindgen_number_new; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_number_get\", function() { return __wbindgen_number_get; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_is_null\", function() { return __wbindgen_is_null; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_is_undefined\", function() { return __wbindgen_is_undefined; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_boolean_get\", function() { return __wbindgen_boolean_get; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_is_symbol\", function() { return __wbindgen_is_symbol; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_string_get\", function() { return __wbindgen_string_get; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_throw\", function() { return __wbindgen_throw; });\n/* harmony import */ var _webgl_bg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./webgl_bg */ \"./webgl_bg.wasm\");\n/* tslint:disable */\n\n\n/**\n* @returns {void}\n*/\nfunction draw() {\n    return _webgl_bg__WEBPACK_IMPORTED_MODULE_0__[\"draw\"]();\n}\n\nconst __widl_f_get_element_by_id_Document_target = Document.prototype.getElementById || function() {\n    throw new Error(`wasm-bindgen: Document.prototype.getElementById does not exist`);\n};\n\nconst stack = [];\n\nconst slab = [{ obj: undefined }, { obj: null }, { obj: true }, { obj: false }];\n\nfunction getObject(idx) {\n    if ((idx & 1) === 1) {\n        return stack[idx >> 1];\n    } else {\n        const val = slab[idx >> 1];\n\n        return val.obj;\n\n    }\n}\n\nconst lTextDecoder = typeof TextDecoder === 'undefined' ? __webpack_require__(/*! util */ \"../../node_modules/util/util.js\").TextDecoder : TextDecoder;\n\nlet cachedTextDecoder = new lTextDecoder('utf-8');\n\nlet cachegetUint8Memory = null;\nfunction getUint8Memory() {\n    if (cachegetUint8Memory === null || cachegetUint8Memory.buffer !== _webgl_bg__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer) {\n        cachegetUint8Memory = new Uint8Array(_webgl_bg__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer);\n    }\n    return cachegetUint8Memory;\n}\n\nfunction getStringFromWasm(ptr, len) {\n    return cachedTextDecoder.decode(getUint8Memory().subarray(ptr, ptr + len));\n}\n\nlet slab_next = slab.length;\n\nfunction addHeapObject(obj) {\n    if (slab_next === slab.length) slab.push(slab.length + 1);\n    const idx = slab_next;\n    const next = slab[idx];\n\n    slab_next = next;\n\n    slab[idx] = { obj, cnt: 1 };\n    return idx << 1;\n}\n\nfunction isLikeNone(x) {\n    return x === undefined || x === null;\n}\n\nfunction __widl_f_get_element_by_id_Document(arg0, arg1, arg2) {\n    let varg1 = getStringFromWasm(arg1, arg2);\n\n    const val = __widl_f_get_element_by_id_Document_target.call(getObject(arg0), varg1);\n    return isLikeNone(val) ? 0 : addHeapObject(val);\n\n}\n\nfunction __widl_instanceof_HTMLCanvasElement(idx) {\n    return getObject(idx) instanceof HTMLCanvasElement ? 1 : 0;\n}\n\nconst __widl_f_get_context_HTMLCanvasElement_target = HTMLCanvasElement.prototype.getContext || function() {\n    throw new Error(`wasm-bindgen: HTMLCanvasElement.prototype.getContext does not exist`);\n};\n\nlet cachegetUint32Memory = null;\nfunction getUint32Memory() {\n    if (cachegetUint32Memory === null || cachegetUint32Memory.buffer !== _webgl_bg__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer) {\n        cachegetUint32Memory = new Uint32Array(_webgl_bg__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer);\n    }\n    return cachegetUint32Memory;\n}\n\nfunction __widl_f_get_context_HTMLCanvasElement(arg0, arg1, arg2, exnptr) {\n    let varg1 = getStringFromWasm(arg1, arg2);\n    try {\n\n        const val = __widl_f_get_context_HTMLCanvasElement_target.call(getObject(arg0), varg1);\n        return isLikeNone(val) ? 0 : addHeapObject(val);\n\n    } catch (e) {\n        const view = getUint32Memory();\n        view[exnptr / 4] = 1;\n        view[exnptr / 4 + 1] = addHeapObject(e);\n\n    }\n}\n\nfunction __widl_instanceof_WebGLRenderingContext(idx) {\n    return getObject(idx) instanceof WebGLRenderingContext ? 1 : 0;\n}\n\nconst __widl_f_buffer_data_with_opt_array_buffer_WebGLRenderingContext_target = WebGLRenderingContext.prototype.bufferData || function() {\n    throw new Error(`wasm-bindgen: WebGLRenderingContext.prototype.bufferData does not exist`);\n};\n\nfunction __widl_f_buffer_data_with_opt_array_buffer_WebGLRenderingContext(arg0, arg1, arg2, arg3) {\n    __widl_f_buffer_data_with_opt_array_buffer_WebGLRenderingContext_target.call(getObject(arg0), arg1, getObject(arg2), arg3);\n}\n\nconst __widl_f_attach_shader_WebGLRenderingContext_target = WebGLRenderingContext.prototype.attachShader || function() {\n    throw new Error(`wasm-bindgen: WebGLRenderingContext.prototype.attachShader does not exist`);\n};\n\nfunction __widl_f_attach_shader_WebGLRenderingContext(arg0, arg1, arg2) {\n    __widl_f_attach_shader_WebGLRenderingContext_target.call(getObject(arg0), getObject(arg1), getObject(arg2));\n}\n\nconst __widl_f_bind_buffer_WebGLRenderingContext_target = WebGLRenderingContext.prototype.bindBuffer || function() {\n    throw new Error(`wasm-bindgen: WebGLRenderingContext.prototype.bindBuffer does not exist`);\n};\n\nfunction __widl_f_bind_buffer_WebGLRenderingContext(arg0, arg1, arg2) {\n    __widl_f_bind_buffer_WebGLRenderingContext_target.call(getObject(arg0), arg1, getObject(arg2));\n}\n\nconst __widl_f_clear_WebGLRenderingContext_target = WebGLRenderingContext.prototype.clear || function() {\n    throw new Error(`wasm-bindgen: WebGLRenderingContext.prototype.clear does not exist`);\n};\n\nfunction __widl_f_clear_WebGLRenderingContext(arg0, arg1) {\n    __widl_f_clear_WebGLRenderingContext_target.call(getObject(arg0), arg1);\n}\n\nconst __widl_f_clear_color_WebGLRenderingContext_target = WebGLRenderingContext.prototype.clearColor || function() {\n    throw new Error(`wasm-bindgen: WebGLRenderingContext.prototype.clearColor does not exist`);\n};\n\nfunction __widl_f_clear_color_WebGLRenderingContext(arg0, arg1, arg2, arg3, arg4) {\n    __widl_f_clear_color_WebGLRenderingContext_target.call(getObject(arg0), arg1, arg2, arg3, arg4);\n}\n\nconst __widl_f_compile_shader_WebGLRenderingContext_target = WebGLRenderingContext.prototype.compileShader || function() {\n    throw new Error(`wasm-bindgen: WebGLRenderingContext.prototype.compileShader does not exist`);\n};\n\nfunction __widl_f_compile_shader_WebGLRenderingContext(arg0, arg1) {\n    __widl_f_compile_shader_WebGLRenderingContext_target.call(getObject(arg0), getObject(arg1));\n}\n\nconst __widl_f_create_buffer_WebGLRenderingContext_target = WebGLRenderingContext.prototype.createBuffer || function() {\n    throw new Error(`wasm-bindgen: WebGLRenderingContext.prototype.createBuffer does not exist`);\n};\n\nfunction __widl_f_create_buffer_WebGLRenderingContext(arg0) {\n\n    const val = __widl_f_create_buffer_WebGLRenderingContext_target.call(getObject(arg0));\n    return isLikeNone(val) ? 0 : addHeapObject(val);\n\n}\n\nconst __widl_f_create_program_WebGLRenderingContext_target = WebGLRenderingContext.prototype.createProgram || function() {\n    throw new Error(`wasm-bindgen: WebGLRenderingContext.prototype.createProgram does not exist`);\n};\n\nfunction __widl_f_create_program_WebGLRenderingContext(arg0) {\n\n    const val = __widl_f_create_program_WebGLRenderingContext_target.call(getObject(arg0));\n    return isLikeNone(val) ? 0 : addHeapObject(val);\n\n}\n\nconst __widl_f_create_shader_WebGLRenderingContext_target = WebGLRenderingContext.prototype.createShader || function() {\n    throw new Error(`wasm-bindgen: WebGLRenderingContext.prototype.createShader does not exist`);\n};\n\nfunction __widl_f_create_shader_WebGLRenderingContext(arg0, arg1) {\n\n    const val = __widl_f_create_shader_WebGLRenderingContext_target.call(getObject(arg0), arg1);\n    return isLikeNone(val) ? 0 : addHeapObject(val);\n\n}\n\nconst __widl_f_draw_arrays_WebGLRenderingContext_target = WebGLRenderingContext.prototype.drawArrays || function() {\n    throw new Error(`wasm-bindgen: WebGLRenderingContext.prototype.drawArrays does not exist`);\n};\n\nfunction __widl_f_draw_arrays_WebGLRenderingContext(arg0, arg1, arg2, arg3) {\n    __widl_f_draw_arrays_WebGLRenderingContext_target.call(getObject(arg0), arg1, arg2, arg3);\n}\n\nconst __widl_f_enable_vertex_attrib_array_WebGLRenderingContext_target = WebGLRenderingContext.prototype.enableVertexAttribArray || function() {\n    throw new Error(`wasm-bindgen: WebGLRenderingContext.prototype.enableVertexAttribArray does not exist`);\n};\n\nfunction __widl_f_enable_vertex_attrib_array_WebGLRenderingContext(arg0, arg1) {\n    __widl_f_enable_vertex_attrib_array_WebGLRenderingContext_target.call(getObject(arg0), arg1);\n}\n\nconst __widl_f_get_program_info_log_WebGLRenderingContext_target = WebGLRenderingContext.prototype.getProgramInfoLog || function() {\n    throw new Error(`wasm-bindgen: WebGLRenderingContext.prototype.getProgramInfoLog does not exist`);\n};\n\nconst lTextEncoder = typeof TextEncoder === 'undefined' ? __webpack_require__(/*! util */ \"../../node_modules/util/util.js\").TextEncoder : TextEncoder;\n\nlet cachedTextEncoder = new lTextEncoder('utf-8');\n\nfunction passStringToWasm(arg) {\n\n    const buf = cachedTextEncoder.encode(arg);\n    const ptr = _webgl_bg__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_malloc\"](buf.length);\n    getUint8Memory().set(buf, ptr);\n    return [ptr, buf.length];\n}\n\nfunction __widl_f_get_program_info_log_WebGLRenderingContext(ret, arg0, arg1) {\n    const val = __widl_f_get_program_info_log_WebGLRenderingContext_target.call(getObject(arg0), getObject(arg1));\n    const [retptr, retlen] = isLikeNone(val) ? [0, 0] : passStringToWasm(val);\n    const mem = getUint32Memory();\n    mem[ret / 4] = retptr;\n    mem[ret / 4 + 1] = retlen;\n\n}\n\nconst __widl_f_get_program_parameter_WebGLRenderingContext_target = WebGLRenderingContext.prototype.getProgramParameter || function() {\n    throw new Error(`wasm-bindgen: WebGLRenderingContext.prototype.getProgramParameter does not exist`);\n};\n\nfunction __widl_f_get_program_parameter_WebGLRenderingContext(arg0, arg1, arg2) {\n    return addHeapObject(__widl_f_get_program_parameter_WebGLRenderingContext_target.call(getObject(arg0), getObject(arg1), arg2));\n}\n\nconst __widl_f_get_shader_info_log_WebGLRenderingContext_target = WebGLRenderingContext.prototype.getShaderInfoLog || function() {\n    throw new Error(`wasm-bindgen: WebGLRenderingContext.prototype.getShaderInfoLog does not exist`);\n};\n\nfunction __widl_f_get_shader_info_log_WebGLRenderingContext(ret, arg0, arg1) {\n    const val = __widl_f_get_shader_info_log_WebGLRenderingContext_target.call(getObject(arg0), getObject(arg1));\n    const [retptr, retlen] = isLikeNone(val) ? [0, 0] : passStringToWasm(val);\n    const mem = getUint32Memory();\n    mem[ret / 4] = retptr;\n    mem[ret / 4 + 1] = retlen;\n\n}\n\nconst __widl_f_get_shader_parameter_WebGLRenderingContext_target = WebGLRenderingContext.prototype.getShaderParameter || function() {\n    throw new Error(`wasm-bindgen: WebGLRenderingContext.prototype.getShaderParameter does not exist`);\n};\n\nfunction __widl_f_get_shader_parameter_WebGLRenderingContext(arg0, arg1, arg2) {\n    return addHeapObject(__widl_f_get_shader_parameter_WebGLRenderingContext_target.call(getObject(arg0), getObject(arg1), arg2));\n}\n\nconst __widl_f_link_program_WebGLRenderingContext_target = WebGLRenderingContext.prototype.linkProgram || function() {\n    throw new Error(`wasm-bindgen: WebGLRenderingContext.prototype.linkProgram does not exist`);\n};\n\nfunction __widl_f_link_program_WebGLRenderingContext(arg0, arg1) {\n    __widl_f_link_program_WebGLRenderingContext_target.call(getObject(arg0), getObject(arg1));\n}\n\nconst __widl_f_shader_source_WebGLRenderingContext_target = WebGLRenderingContext.prototype.shaderSource || function() {\n    throw new Error(`wasm-bindgen: WebGLRenderingContext.prototype.shaderSource does not exist`);\n};\n\nfunction __widl_f_shader_source_WebGLRenderingContext(arg0, arg1, arg2, arg3) {\n    let varg2 = getStringFromWasm(arg2, arg3);\n    __widl_f_shader_source_WebGLRenderingContext_target.call(getObject(arg0), getObject(arg1), varg2);\n}\n\nconst __widl_f_use_program_WebGLRenderingContext_target = WebGLRenderingContext.prototype.useProgram || function() {\n    throw new Error(`wasm-bindgen: WebGLRenderingContext.prototype.useProgram does not exist`);\n};\n\nfunction __widl_f_use_program_WebGLRenderingContext(arg0, arg1) {\n    __widl_f_use_program_WebGLRenderingContext_target.call(getObject(arg0), getObject(arg1));\n}\n\nconst __widl_f_vertex_attrib_pointer_with_i32_WebGLRenderingContext_target = WebGLRenderingContext.prototype.vertexAttribPointer || function() {\n    throw new Error(`wasm-bindgen: WebGLRenderingContext.prototype.vertexAttribPointer does not exist`);\n};\n\nfunction __widl_f_vertex_attrib_pointer_with_i32_WebGLRenderingContext(arg0, arg1, arg2, arg3, arg4, arg5, arg6) {\n    __widl_f_vertex_attrib_pointer_with_i32_WebGLRenderingContext_target.call(getObject(arg0), arg1, arg2, arg3, arg4 !== 0, arg5, arg6);\n}\n\nfunction __widl_instanceof_Window(idx) {\n    return getObject(idx) instanceof Window ? 1 : 0;\n}\n\nconst __widl_f_document_Window_target = function() {\n    return this.document;\n};\n\nfunction __widl_f_document_Window(arg0) {\n\n    const val = __widl_f_document_Window_target.call(getObject(arg0));\n    return isLikeNone(val) ? 0 : addHeapObject(val);\n\n}\n\nfunction __wbg_new_b0f6b20c16090c90(arg0) {\n    return addHeapObject(new Float32Array(getObject(arg0)));\n}\n\nconst __wbg_fill_9f0d9c86387a5bbe_target = Float32Array.prototype.fill || function() {\n    throw new Error(`wasm-bindgen: Float32Array.prototype.fill does not exist`);\n};\n\nfunction __wbg_fill_9f0d9c86387a5bbe(arg0, arg1, arg2, arg3) {\n    return addHeapObject(__wbg_fill_9f0d9c86387a5bbe_target.call(getObject(arg0), arg1, arg2, arg3));\n}\n\nfunction GetOwnOrInheritedPropertyDescriptor(obj, id) {\n    while (obj) {\n        let desc = Object.getOwnPropertyDescriptor(obj, id);\n        if (desc) return desc;\n        obj = Object.getPrototypeOf(obj);\n    }\n    throw new Error(`descriptor for id='${id}' not found`);\n}\n\nconst __wbg_buffer_1034a5b5085bbbb5_target = GetOwnOrInheritedPropertyDescriptor(Float32Array.prototype, 'buffer').get || function() {\n    throw new Error(`wasm-bindgen: GetOwnOrInheritedPropertyDescriptor(Float32Array.prototype, 'buffer').get does not exist`);\n};\n\nfunction __wbg_buffer_1034a5b5085bbbb5(arg0) {\n    return addHeapObject(__wbg_buffer_1034a5b5085bbbb5_target.call(getObject(arg0)));\n}\n\nfunction __wbg_newnoargs_b1f726fad978f5a3(arg0, arg1) {\n    let varg0 = getStringFromWasm(arg0, arg1);\n    return addHeapObject(new Function(varg0));\n}\n\nconst __wbg_call_fa7f0da29d7b9250_target = Function.prototype.call || function() {\n    throw new Error(`wasm-bindgen: Function.prototype.call does not exist`);\n};\n\nfunction __wbg_call_fa7f0da29d7b9250(arg0, arg1, exnptr) {\n    try {\n        return addHeapObject(__wbg_call_fa7f0da29d7b9250_target.call(getObject(arg0), getObject(arg1)));\n    } catch (e) {\n        const view = getUint32Memory();\n        view[exnptr / 4] = 1;\n        view[exnptr / 4 + 1] = addHeapObject(e);\n\n    }\n}\n\nfunction __wbindgen_object_clone_ref(idx) {\n    // If this object is on the stack promote it to the heap.\n    if ((idx & 1) === 1) return addHeapObject(getObject(idx));\n\n    // Otherwise if the object is on the heap just bump the\n    // refcount and move on\n    const val = slab[idx >> 1];\n    val.cnt += 1;\n    return idx;\n}\n\nfunction dropRef(idx) {\n\n    idx = idx >> 1;\n    if (idx < 4) return;\n    let obj = slab[idx];\n\n    obj.cnt -= 1;\n    if (obj.cnt > 0) return;\n\n    // If we hit 0 then free up our space in the slab\n    slab[idx] = slab_next;\n    slab_next = idx;\n}\n\nfunction __wbindgen_object_drop_ref(i) {\n    dropRef(i);\n}\n\nfunction __wbindgen_number_new(i) {\n    return addHeapObject(i);\n}\n\nfunction __wbindgen_number_get(n, invalid) {\n    let obj = getObject(n);\n    if (typeof(obj) === 'number') return obj;\n    getUint8Memory()[invalid] = 1;\n    return 0;\n}\n\nfunction __wbindgen_is_null(idx) {\n    return getObject(idx) === null ? 1 : 0;\n}\n\nfunction __wbindgen_is_undefined(idx) {\n    return getObject(idx) === undefined ? 1 : 0;\n}\n\nfunction __wbindgen_boolean_get(i) {\n    let v = getObject(i);\n    if (typeof(v) === 'boolean') {\n        return v ? 1 : 0;\n    } else {\n        return 2;\n    }\n}\n\nfunction __wbindgen_is_symbol(i) {\n    return typeof(getObject(i)) === 'symbol' ? 1 : 0;\n}\n\nfunction __wbindgen_string_get(i, len_ptr) {\n    let obj = getObject(i);\n    if (typeof(obj) !== 'string') return 0;\n    const [ptr, len] = passStringToWasm(obj);\n    getUint32Memory()[len_ptr / 4] = len;\n    return ptr;\n}\n\nfunction __wbindgen_throw(ptr, len) {\n    throw new Error(getStringFromWasm(ptr, len));\n}\n\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! text-encoding */ \"../../node_modules/text-encoding/index.js\")[\"TextDecoder\"], __webpack_require__(/*! text-encoding */ \"../../node_modules/text-encoding/index.js\")[\"TextEncoder\"]))\n\n//# sourceURL=webpack:///./webgl.js?");

/***/ }),

/***/ "./webgl_bg.wasm":
/*!***********************!*\
  !*** ./webgl_bg.wasm ***!
  \***********************/
/*! exports provided: memory, __indirect_function_table, __heap_base, __data_end, __rustc_debug_gdb_scripts_section__, draw, __wbindgen_malloc */
/***/ (function(module, exports, __webpack_require__) {

eval("\"use strict\";\n// Instantiate WebAssembly module\nvar wasmExports = __webpack_require__.w[module.i];\n__webpack_require__.r(exports);\n// export exports from WebAssembly module\nfor(var name in wasmExports) if(name != \"__webpack_init__\") exports[name] = wasmExports[name];\n// exec imports from WebAssembly module (for esm order)\n/* harmony import */ var m0 = __webpack_require__(/*! ./webgl */ \"./webgl.js\");\n\n\n// exec wasm module\nwasmExports[\"__webpack_init__\"]()\n\n//# sourceURL=webpack:///./webgl_bg.wasm?");

/***/ })

}]);
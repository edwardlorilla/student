webpackJsonp([11],{

/***/ 310:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(360)
}
var normalizeComponent = __webpack_require__(19)
/* script */
var __vue_script__ = __webpack_require__(362)
/* template */
var __vue_template__ = __webpack_require__(363)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources\\assets\\js\\components\\Layout\\Permissions\\create.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-07883eff", Component.options)
  } else {
    hotAPI.reload("data-v-07883eff", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 360:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(361);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(49)("1927d058", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-07883eff\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./create.vue", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-07883eff\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./create.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 361:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),

/***/ 362:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            permissionType: 'basic',
            resource: '',
            crudSelected: ['create', 'read', 'update', 'delete']
        };
    },

    methods: {

        crudName: function crudName(item) {
            var vm = this;
            return item.substr(0, 1).toUpperCase() + item.substr(1) + " " + vm.resource.substr(0, 1).toUpperCase() + vm.resource.substr(1);
        },
        crudSlug: function crudSlug(item) {
            var vm = this;
            return item.toLowerCase() + "-" + vm.resource.toLowerCase();
        },
        crudDescription: function crudDescription(item) {
            var vm = this;
            return "Allow a User to " + item.toUpperCase() + " a " + vm.resource.substr(0, 1).toUpperCase() + vm.resource.substr(1);
        }
    }

});

/***/ }),

/***/ 363:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "row" }, [
    _c("div", { staticClass: "col-md-6" }, [
      _c("div", { staticClass: "form-group" }, [
        _c("div", { staticClass: "form-check" }, [
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.permissionType,
                expression: "permissionType"
              }
            ],
            staticClass: "form-check-input",
            attrs: { type: "radio", name: "permission_type", value: "basic" },
            domProps: { checked: _vm._q(_vm.permissionType, "basic") },
            on: {
              change: function($event) {
                _vm.permissionType = "basic"
              }
            }
          }),
          _vm._v(" "),
          _c("label", { staticClass: "form-check-label" }, [
            _vm._v("Basic Permission")
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "form-check" }, [
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.permissionType,
                expression: "permissionType"
              }
            ],
            staticClass: "form-check-input",
            attrs: { type: "radio", name: "permission_type", value: "crud" },
            domProps: { checked: _vm._q(_vm.permissionType, "crud") },
            on: {
              change: function($event) {
                _vm.permissionType = "crud"
              }
            }
          }),
          _vm._v(" "),
          _c("label", { staticClass: "form-check-label" }, [
            _vm._v("CRUD Permission")
          ])
        ])
      ]),
      _vm._v(" "),
      _vm.permissionType === "basic"
        ? _c("div", { staticClass: "form-group" }, [
            _c(
              "label",
              { staticClass: "label", attrs: { for: "display_name" } },
              [_vm._v("Name (Display Name)")]
            ),
            _vm._v(" "),
            _c("input", {
              staticClass: "form-control",
              attrs: { type: "text", name: "display_name", id: "display_name" }
            })
          ])
        : _vm._e(),
      _vm._v(" "),
      _vm.permissionType === "basic"
        ? _c("div", { staticClass: "form-group" }, [
            _c(
              "label",
              { staticClass: "label", attrs: { for: "display_name" } },
              [_vm._v("Slug")]
            ),
            _vm._v(" "),
            _c("input", {
              staticClass: "form-control",
              attrs: { type: "text", name: "name", id: "name" }
            })
          ])
        : _vm._e(),
      _vm._v(" "),
      _vm.permissionType === "basic"
        ? _c("div", { staticClass: "form-group" }, [
            _c(
              "label",
              { staticClass: "label", attrs: { for: "display_name" } },
              [_vm._v("Description")]
            ),
            _vm._v(" "),
            _c("input", {
              staticClass: "form-control",
              attrs: {
                type: "text",
                name: "description",
                id: "description",
                placeholder: "Describe what this permission does"
              }
            })
          ])
        : _vm._e(),
      _vm._v(" "),
      _vm.permissionType === "crud"
        ? _c("div", { staticClass: "form-group" }, [
            _c(
              "label",
              { staticClass: "label", attrs: { for: "display_name" } },
              [_vm._v("Resource")]
            ),
            _vm._v(" "),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.resource,
                  expression: "resource"
                }
              ],
              staticClass: "form-control",
              attrs: {
                type: "text",
                name: "resource",
                id: "resource",
                placeholder: "The name of the resource"
              },
              domProps: { value: _vm.resource },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.resource = $event.target.value
                }
              }
            })
          ])
        : _vm._e(),
      _vm._v(" "),
      _vm.permissionType == "crud"
        ? _c("div", { staticClass: "form-group" }, [
            _c("div", { staticClass: "form-check" }, [
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.crudSelected,
                    expression: "crudSelected"
                  }
                ],
                staticClass: "form-check-input",
                attrs: {
                  type: "checkbox",
                  name: "crud_selected[]",
                  value: "create"
                },
                domProps: {
                  checked: Array.isArray(_vm.crudSelected)
                    ? _vm._i(_vm.crudSelected, "create") > -1
                    : _vm.crudSelected
                },
                on: {
                  change: function($event) {
                    var $$a = _vm.crudSelected,
                      $$el = $event.target,
                      $$c = $$el.checked ? true : false
                    if (Array.isArray($$a)) {
                      var $$v = "create",
                        $$i = _vm._i($$a, $$v)
                      if ($$el.checked) {
                        $$i < 0 && (_vm.crudSelected = $$a.concat([$$v]))
                      } else {
                        $$i > -1 &&
                          (_vm.crudSelected = $$a
                            .slice(0, $$i)
                            .concat($$a.slice($$i + 1)))
                      }
                    } else {
                      _vm.crudSelected = $$c
                    }
                  }
                }
              }),
              _vm._v(" "),
              _c("label", { staticClass: "form-check-label" }, [
                _vm._v("Create")
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "form-check" }, [
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.crudSelected,
                    expression: "crudSelected"
                  }
                ],
                staticClass: "form-check-input",
                attrs: {
                  type: "checkbox",
                  name: "crud_selected[]",
                  value: "read"
                },
                domProps: {
                  checked: Array.isArray(_vm.crudSelected)
                    ? _vm._i(_vm.crudSelected, "read") > -1
                    : _vm.crudSelected
                },
                on: {
                  change: function($event) {
                    var $$a = _vm.crudSelected,
                      $$el = $event.target,
                      $$c = $$el.checked ? true : false
                    if (Array.isArray($$a)) {
                      var $$v = "read",
                        $$i = _vm._i($$a, $$v)
                      if ($$el.checked) {
                        $$i < 0 && (_vm.crudSelected = $$a.concat([$$v]))
                      } else {
                        $$i > -1 &&
                          (_vm.crudSelected = $$a
                            .slice(0, $$i)
                            .concat($$a.slice($$i + 1)))
                      }
                    } else {
                      _vm.crudSelected = $$c
                    }
                  }
                }
              }),
              _vm._v(" "),
              _c("label", { staticClass: "form-check-label" }, [_vm._v("Read")])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "form-check" }, [
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.crudSelected,
                    expression: "crudSelected"
                  }
                ],
                staticClass: "form-check-input",
                attrs: {
                  type: "checkbox",
                  name: "crud_selected[]",
                  value: "update"
                },
                domProps: {
                  checked: Array.isArray(_vm.crudSelected)
                    ? _vm._i(_vm.crudSelected, "update") > -1
                    : _vm.crudSelected
                },
                on: {
                  change: function($event) {
                    var $$a = _vm.crudSelected,
                      $$el = $event.target,
                      $$c = $$el.checked ? true : false
                    if (Array.isArray($$a)) {
                      var $$v = "update",
                        $$i = _vm._i($$a, $$v)
                      if ($$el.checked) {
                        $$i < 0 && (_vm.crudSelected = $$a.concat([$$v]))
                      } else {
                        $$i > -1 &&
                          (_vm.crudSelected = $$a
                            .slice(0, $$i)
                            .concat($$a.slice($$i + 1)))
                      }
                    } else {
                      _vm.crudSelected = $$c
                    }
                  }
                }
              }),
              _vm._v(" "),
              _c("label", { staticClass: "form-check-label" }, [
                _vm._v("Update")
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "form-check" }, [
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.crudSelected,
                    expression: "crudSelected"
                  }
                ],
                staticClass: "form-check-input",
                attrs: {
                  type: "checkbox",
                  name: "crud_selected[]",
                  value: "delete"
                },
                domProps: {
                  checked: Array.isArray(_vm.crudSelected)
                    ? _vm._i(_vm.crudSelected, "delete") > -1
                    : _vm.crudSelected
                },
                on: {
                  change: function($event) {
                    var $$a = _vm.crudSelected,
                      $$el = $event.target,
                      $$c = $$el.checked ? true : false
                    if (Array.isArray($$a)) {
                      var $$v = "delete",
                        $$i = _vm._i($$a, $$v)
                      if ($$el.checked) {
                        $$i < 0 && (_vm.crudSelected = $$a.concat([$$v]))
                      } else {
                        $$i > -1 &&
                          (_vm.crudSelected = $$a
                            .slice(0, $$i)
                            .concat($$a.slice($$i + 1)))
                      }
                    } else {
                      _vm.crudSelected = $$c
                    }
                  }
                }
              }),
              _vm._v(" "),
              _c("label", { staticClass: "form-check-label" }, [
                _vm._v("Delete")
              ])
            ])
          ])
        : _vm._e()
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "col-md-6" }, [
      _c("div", { attrs: { id: "form-group" } }, [
        _vm.resource.length >= 3 && _vm.crudSelected.length > 0
          ? _c("table", { staticClass: "table table-bordered" }, [
              _vm._m(0),
              _vm._v(" "),
              _c(
                "tbody",
                _vm._l(_vm.crudSelected, function(item) {
                  return _c("tr", [
                    _c("td", {
                      domProps: { textContent: _vm._s(_vm.crudName(item)) }
                    }),
                    _vm._v(" "),
                    _c("td", {
                      domProps: { textContent: _vm._s(_vm.crudSlug(item)) }
                    }),
                    _vm._v(" "),
                    _c("td", {
                      domProps: {
                        textContent: _vm._s(_vm.crudDescription(item))
                      }
                    })
                  ])
                })
              )
            ])
          : _vm._e()
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("th", [_vm._v("Name")]),
      _vm._v(" "),
      _c("th", [_vm._v("Slug")]),
      _vm._v(" "),
      _c("th", [_vm._v("Description")])
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-07883eff", module.exports)
  }
}

/***/ })

});
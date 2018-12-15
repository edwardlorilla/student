webpackJsonp([0],{

/***/ 204:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(19)
/* script */
var __vue_script__ = __webpack_require__(334)
/* template */
var __vue_template__ = __webpack_require__(335)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
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
Component.options.__file = "resources\\assets\\js\\components\\Layout\\Users\\operation.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-d72ab110", Component.options)
  } else {
    hotAPI.reload("data-v-d72ab110", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 334:
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
    props: ['errors'],
    data: function data() {
        return {
            edit_d: {
                name: ''
            },
            roles: [],
            rolesSelect: []
        };
    },
    beforeRouteEnter: function beforeRouteEnter(to, from, next) {
        axios.get('/api/' + to.meta.url + '/' + (to.params.id ? to.params.id : 'create')).then(function (response) {
            next(function (vm) {
                return vm.setData(response.data);
            });
        });
    },
    beforeRouteUpdate: function beforeRouteUpdate(to, from, next) {
        axios.get('/api/' + to.meta.url + '/' + (to.params.id ? to.params.id : 'create')).then(function (response) {
            vm.setData(response.data);
            next();
        });
    },

    methods: {
        json_m: function json_m(parse) {
            return JSON.stringify(parse);
        },
        setData: function setData(response) {
            var vm = this;
            if (response.user) {
                vm.edit_d = response.user;
            }
            vm.roles = response.roles;
            vm.rolesSelect = _.map(response.user.roles, 'id');
        }
    }
});

/***/ }),

/***/ 335:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "row" }, [
    _c("div", { staticClass: "col-md-6" }, [
      _c(
        "div",
        { staticClass: "form-group" },
        [
          _c("input", {
            attrs: { type: "hidden", name: "id" },
            domProps: {
              value: _vm.$route.params.id ? _vm.$route.params.id : ""
            }
          }),
          _vm._v(" "),
          _c("label", { attrs: { for: "name" } }, [_vm._v("Email address")]),
          _vm._v(" "),
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.edit_d.email,
                expression: "edit_d.email"
              }
            ],
            staticClass: "form-control",
            class: _vm.errors.email ? "is-invalid" : "",
            attrs: {
              name: "email",
              type: "text",
              id: "email",
              placeholder: "Enter name"
            },
            domProps: { value: _vm.edit_d.email },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(_vm.edit_d, "email", $event.target.value)
              }
            }
          }),
          _vm._v(" "),
          _vm._l(_vm.errors.email, function(error) {
            return _vm.errors.email
              ? _c(
                  "span",
                  { staticClass: "invalid-feedback", attrs: { role: "alert" } },
                  [_c("strong", [_vm._v(_vm._s(error))])]
                )
              : _vm._e()
          })
        ],
        2
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "form-group" },
        [
          _c("label", { attrs: { for: "name" } }, [_vm._v("Username")]),
          _vm._v(" "),
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.edit_d.name,
                expression: "edit_d.name"
              }
            ],
            staticClass: "form-control",
            class: _vm.errors.name ? "is-invalid" : "",
            attrs: {
              name: "name",
              type: "text",
              id: "name",
              placeholder: "Enter Username"
            },
            domProps: { value: _vm.edit_d.name },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(_vm.edit_d, "name", $event.target.value)
              }
            }
          }),
          _vm._v(" "),
          _vm._l(_vm.errors.name, function(error) {
            return _vm.errors.name
              ? _c(
                  "span",
                  { staticClass: "invalid-feedback", attrs: { role: "alert" } },
                  [_c("strong", [_vm._v(_vm._s(error))])]
                )
              : _vm._e()
          })
        ],
        2
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "form-group" },
        [
          _c("label", { attrs: { for: "name" } }, [_vm._v("First Name")]),
          _vm._v(" "),
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.edit_d.first_name,
                expression: "edit_d.first_name"
              }
            ],
            staticClass: "form-control",
            class: _vm.errors.first_name ? "is-invalid" : "",
            attrs: {
              name: "first_name",
              type: "text",
              id: "first_name",
              placeholder: "Enter First Name"
            },
            domProps: { value: _vm.edit_d.first_name },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(_vm.edit_d, "first_name", $event.target.value)
              }
            }
          }),
          _vm._v(" "),
          _vm._l(_vm.errors.first_name, function(error) {
            return _vm.errors.first_name
              ? _c(
                  "span",
                  { staticClass: "invalid-feedback", attrs: { role: "alert" } },
                  [_c("strong", [_vm._v(_vm._s(error))])]
                )
              : _vm._e()
          })
        ],
        2
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "form-group" },
        [
          _c("label", { attrs: { for: "name" } }, [_vm._v("Middle Name")]),
          _vm._v(" "),
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.edit_d.middle_name,
                expression: "edit_d.middle_name"
              }
            ],
            staticClass: "form-control",
            class: _vm.errors.middle_name ? "is-invalid" : "",
            attrs: {
              name: "middle_name",
              type: "text",
              id: "middle_name",
              placeholder: "Enter Middle Name"
            },
            domProps: { value: _vm.edit_d.middle_name },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(_vm.edit_d, "middle_name", $event.target.value)
              }
            }
          }),
          _vm._v(" "),
          _vm._l(_vm.errors.middle_name, function(error) {
            return _vm.errors.middle_name
              ? _c(
                  "span",
                  { staticClass: "invalid-feedback", attrs: { role: "alert" } },
                  [_c("strong", [_vm._v(_vm._s(error))])]
                )
              : _vm._e()
          })
        ],
        2
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "form-group" },
        [
          _c("label", { attrs: { for: "name" } }, [_vm._v("Last Name")]),
          _vm._v(" "),
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.edit_d.last_name,
                expression: "edit_d.last_name"
              }
            ],
            staticClass: "form-control",
            class: _vm.errors.last_name ? "is-invalid" : "",
            attrs: {
              name: "last_name",
              type: "text",
              id: "last_name",
              placeholder: "Enter Last Name"
            },
            domProps: { value: _vm.edit_d.last_name },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(_vm.edit_d, "last_name", $event.target.value)
              }
            }
          }),
          _vm._v(" "),
          _vm._l(_vm.errors.last_name, function(error) {
            return _vm.errors.last_name
              ? _c(
                  "span",
                  { staticClass: "invalid-feedback", attrs: { role: "alert" } },
                  [_c("strong", [_vm._v(_vm._s(error))])]
                )
              : _vm._e()
          })
        ],
        2
      )
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "col-md-6" }, [
      _c("input", {
        attrs: { type: "hidden", name: "roles" },
        domProps: { value: _vm.json_m(_vm.rolesSelect) }
      }),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "form-check" },
        _vm._l(_vm.roles, function(role) {
          return _c("div", { attrs: { id: "form-group" } }, [
            _c("div", { staticClass: "form-check" }, [
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.rolesSelect,
                    expression: "rolesSelect"
                  }
                ],
                staticClass: "form-check-input",
                attrs: { type: "checkbox" },
                domProps: {
                  value: role.id,
                  checked: Array.isArray(_vm.rolesSelect)
                    ? _vm._i(_vm.rolesSelect, role.id) > -1
                    : _vm.rolesSelect
                },
                on: {
                  change: function($event) {
                    var $$a = _vm.rolesSelect,
                      $$el = $event.target,
                      $$c = $$el.checked ? true : false
                    if (Array.isArray($$a)) {
                      var $$v = role.id,
                        $$i = _vm._i($$a, $$v)
                      if ($$el.checked) {
                        $$i < 0 && (_vm.rolesSelect = $$a.concat([$$v]))
                      } else {
                        $$i > -1 &&
                          (_vm.rolesSelect = $$a
                            .slice(0, $$i)
                            .concat($$a.slice($$i + 1)))
                      }
                    } else {
                      _vm.rolesSelect = $$c
                    }
                  }
                }
              }),
              _vm._v(" "),
              _c(
                "label",
                { staticClass: "form-check-label", attrs: { for: role.id } },
                [_vm._v(_vm._s(role.display_name))]
              )
            ])
          ])
        })
      )
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-d72ab110", module.exports)
  }
}

/***/ })

});
webpackJsonp([15],{

/***/ 308:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(19)
/* script */
var __vue_script__ = __webpack_require__(354)
/* template */
var __vue_template__ = __webpack_require__(355)
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
Component.options.__file = "resources\\assets\\js\\components\\Layout\\Students\\add.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3665f470", Component.options)
  } else {
    hotAPI.reload("data-v-3665f470", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 354:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

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
            edit_d: {
                first_name: '',
                middle_name: '',
                last_name: ''
            },
            disabled: false
        };
    },
    beforeRouteEnter: function beforeRouteEnter(to, from, next) {
        if (to.params.id) {
            axios.get('/api/' + to.meta.url + '/' + to.params.id).then(function (response) {
                next(function (vm) {
                    return vm.setData(response.data);
                });
            });
        } else {
            next();
        }
    },
    beforeRouteUpdate: function beforeRouteUpdate(to, from, next) {
        var vm = this;
        if (to.params.id) {
            axios.get('/api/' + to.meta.url + '/' + to.params.id).then(function (response) {
                vm.setData(response.data);
                next();
            });
        } else {
            next();
        }
    },

    methods: {
        setData: function setData(response) {
            var vm = this;
            vm.edit_d = response;
        },
        submit_m: function submit_m() {
            var vm = this;

            var formData = new FormData(vm.$refs.students);
            var jsonObject = {};

            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = formData.entries()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var _ref = _step.value;

                    var _ref2 = _slicedToArray(_ref, 2);

                    var key = _ref2[0];
                    var value = _ref2[1];

                    jsonObject[key] = value;
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator.return) {
                        _iterator.return();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }

            if (jsonObject.course !== '""' && jsonObject.section !== '""' && jsonObject.student !== "[]" && jsonObject.subject !== '""' && jsonObject.unit !== "" && jsonObject.www !== "[]") {
                vm.disabled = true;
                axios({
                    method: 'post',
                    url: '/api/students/add',
                    data: vm.$route.params.id ? jsonObject : formData
                }).then(function (response) {
                    vm.disabled = false;
                    vm.$message({
                        showClose: true,
                        message: response.data,
                        type: 'success'
                    });
                }).catch(function (error) {
                    vm.disabled = false;
                    if (error) {
                        vm.$message({
                            showClose: true,
                            message: 'Something went wrong!',
                            type: 'error'
                        });
                    }
                });
            } else {
                vm.$message({
                    showClose: true,
                    message: 'Fill the required field!',
                    type: 'warning'
                });
            }
        }
    }
});

/***/ }),

/***/ 355:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "container-fluid" }, [
    _c("div", { staticClass: "card card-default" }, [
      _c("div", { staticClass: "card-header" }, [
        _c("h3", { staticClass: "card-title" }, [
          _vm._v(_vm._s(_vm.$route.meta.title))
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "card-body" }, [
        _c(
          "form",
          {
            ref: "students",
            attrs: { id: "students" },
            on: {
              submit: function($event) {
                $event.preventDefault()
                return _vm.submit_m($event)
              }
            }
          },
          [
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col-md-6" }, [
                _c("div", { staticClass: "form-group" }, [
                  _c("input", {
                    attrs: { type: "hidden", name: "id" },
                    domProps: {
                      value: _vm.$route.params.id ? _vm.$route.params.id : ""
                    }
                  }),
                  _vm._v(" "),
                  _c("label", { attrs: { for: "first_name" } }, [
                    _vm._v("First Name")
                  ]),
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
                    attrs: {
                      name: "first_name",
                      type: "text",
                      id: "first_name",
                      placeholder: "Enter first name"
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
                  })
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "form-group" }, [
                  _c("label", { attrs: { for: "middle_name" } }, [
                    _vm._v("Middle Name")
                  ]),
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
                    attrs: {
                      name: "middle_name",
                      type: "text",
                      id: "middle_name",
                      placeholder: "Enter middle name"
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
                  })
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "form-group" }, [
                  _c("label", { attrs: { for: "last_name" } }, [
                    _vm._v("Last Name")
                  ]),
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
                    attrs: {
                      name: "last_name",
                      type: "text",
                      id: "last_name",
                      placeholder: "Enter last name"
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
                  })
                ])
              ])
            ])
          ]
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "card-footer" }, [
        _c(
          "button",
          {
            staticClass: "btn btn-primary",
            attrs: { form: "students", disabled: _vm.disabled, type: "submit" }
          },
          [
            _vm._v(
              _vm._s(_vm.$route.params.id ? "Edit" : "Create New") +
                " Student\n            "
            )
          ]
        )
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-3665f470", module.exports)
  }
}

/***/ })

});
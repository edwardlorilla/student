webpackJsonp([18],{

/***/ 300:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(19)
/* script */
var __vue_script__ = __webpack_require__(326)
/* template */
var __vue_template__ = __webpack_require__(327)
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
Component.options.__file = "resources\\assets\\js\\components\\Layout\\Roles\\create.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-286cc166", Component.options)
  } else {
    hotAPI.reload("data-v-286cc166", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 326:
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

/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            permissions: []
        };
    },
    beforeRouteEnter: function beforeRouteEnter(to, from, next) {
        axios.get("/api/" + to.meta.url + "/create").then(function (response) {
            next(function (vm) {
                return vm.setData(response.data);
            });
        });
    },
    beforeRouteUpdate: function beforeRouteUpdate(to, from, next) {
        var vm = this;
        axios.get("/api/" + to.meta.url + "/create").then(function (response) {
            vm.setData(response.data);
            next();
        });
    },

    methods: {
        setData: function setData(response) {
            var vm = this;
            vm.permissions = response;
        }
    }
});

/***/ }),

/***/ 327:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "row" }, [
    _vm._m(0),
    _vm._v(" "),
    _c("div", { staticClass: "col-md-6" }, [
      _c(
        "div",
        { attrs: { id: "form-group" } },
        _vm._l(_vm.permissions, function(permission) {
          return _c("div", { staticClass: "form-check" }, [
            _c("input", {
              staticClass: "form-check-input",
              attrs: { name: "permissions[]", type: "checkbox" },
              domProps: { value: permission.id }
            }),
            _vm._v(" "),
            _c(
              "label",
              {
                staticClass: "form-check-label",
                attrs: { for: permission.id }
              },
              [_vm._v(_vm._s(permission.display_name))]
            )
          ])
        })
      )
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-6" }, [
      _c("div", { staticClass: "form-group" }, [
        _c("label", { attrs: { for: "display_name" } }, [
          _vm._v("Name (Human Readable)")
        ]),
        _vm._v(" "),
        _c("input", {
          staticClass: "form-control",
          attrs: { type: "text", name: "display_name", id: "display_name" }
        })
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "form-group" }, [
        _c("label", { attrs: { for: "name" } }, [
          _vm._v("Slug (Can not be changed)")
        ]),
        _vm._v(" "),
        _c("input", {
          staticClass: "form-control",
          attrs: { type: "text", name: "name", id: "name" }
        })
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "form-group" }, [
        _c("label", { attrs: { for: "description" } }, [_vm._v("Description")]),
        _vm._v(" "),
        _c("input", {
          staticClass: "form-control",
          attrs: { type: "text", name: "description", id: "description" }
        })
      ])
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-286cc166", module.exports)
  }
}

/***/ })

});
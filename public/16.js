webpackJsonp([16],{

/***/ 306:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(19)
/* script */
var __vue_script__ = __webpack_require__(352)
/* template */
var __vue_template__ = __webpack_require__(353)
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
Component.options.__file = "resources\\assets\\js\\components\\Layout\\Student\\create.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4b364a68", Component.options)
  } else {
    hotAPI.reload("data-v-4b364a68", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 352:
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
            start_year: new Date().getFullYear(),
            start_time: '17:30',
            end_time: '19:00',
            room_d: '',
            day_d: 'TTH',
            www: [],
            sectionOption: [],
            sectionSelect: '',
            courseOption: [],
            courseSelect: '',
            subjectOption: [],
            subjectSelect: '',
            loading: false,

            name: {
                first_name: '',
                middle_name: '',
                last_name: ''
            },
            header: ['first_name', 'middle_name', 'last_name'],
            body: []
        };
    },

    computed: {
        end_year_c: function end_year_c() {
            return (_.parseInt(this.start_year) + 1).toString();
        }
    },
    methods: {
        sectionRemote: function sectionRemote(query) {
            var vm = this;

            if (query !== '') {
                vm.loading = true;
                axios.get('/api/sections/search?search=' + query).then(function (query) {
                    vm.sectionOption = query.data.map(function (item) {
                        vm.loading = false;
                        return { value: item.id, label: item.name };
                    });
                });
            } else {
                vm.sectionOption = [];
            }
        },
        courseRemote: function courseRemote(query) {
            var vm = this;

            if (query !== '') {
                vm.loading = true;
                axios.get('/api/courses/search?search=' + query).then(function (query) {
                    vm.courseOption = query.data.map(function (item) {
                        vm.loading = false;
                        return { value: item.id, label: item.name };
                    });
                });
            } else {
                vm.courseOption = [];
            }
        },
        subjectRemote: function subjectRemote(query) {
            var vm = this;

            if (query !== '') {
                vm.loading = true;
                axios.get('/api/subjects/search?search=' + query).then(function (query) {
                    vm.subjectOption = query.data.map(function (item) {
                        vm.loading = false;
                        return { value: item.id, label: item.name };
                    });
                });
            } else {
                vm.subjectOption = [];
            }
        },
        add_time_m: function add_time_m() {
            var vm = this;
            var www = {};
            www.day = vm.day_d;
            www.start_time = vm.start_time;
            www.end_time = vm.end_time;
            www.room = vm.room_d;
            vm.www.push(www);
        },
        add_m: function add_m() {
            var vm = this;
            vm.body.push(vm.name);
        },
        split_m: function split_m(string) {
            var split_array = _.split(string, '_');
            return _.capitalize(split_array[0]) + ' ' + _.capitalize(split_array[1]) + ' ';
        },
        json_m: function json_m(parse) {
            return JSON.stringify(parse);
        },
        handleSelectedFile: function handleSelectedFile(convertedData) {
            var vm = this;
            vm.header = convertedData.header;
            vm.body = convertedData.body;
        }
    }
});

/***/ }),

/***/ 353:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "row" }, [
    _c("div", { staticClass: "col-md-6" }, [
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-md-6" }, [
          _c("div", { staticClass: "form-group" }, [
            _c("label", { attrs: { for: "start_year" } }, [
              _vm._v("Start_Year")
            ]),
            _vm._v(" "),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.start_year,
                  expression: "start_year"
                }
              ],
              staticClass: "form-control",
              attrs: {
                required: "",
                name: "year",
                type: "number",
                min: _vm.start_year,
                id: "start_year",
                placeholder: "Enter start year"
              },
              domProps: { value: _vm.start_year },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.start_year = $event.target.value
                }
              }
            })
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-md-6" }, [
          _c("div", { staticClass: "form-group" }, [
            _c("label", { attrs: { for: "end_year" } }, [_vm._v("End Year")]),
            _vm._v(" "),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.end_year_c,
                  expression: "end_year_c"
                }
              ],
              staticClass: "form-control",
              attrs: {
                disabled: "",
                type: "number",
                id: "end_year",
                placeholder: "Enter end year"
              },
              domProps: { value: _vm.end_year_c },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.end_year_c = $event.target.value
                }
              }
            })
          ])
        ])
      ]),
      _vm._v(" "),
      _vm._m(0),
      _vm._v(" "),
      _vm._m(1)
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "col-md-6" }, [
      _c(
        "div",
        { staticClass: "form-group" },
        [
          _c("label", [_vm._v("Course")]),
          _vm._v(" "),
          _c("input", {
            attrs: { type: "hidden", name: "course" },
            domProps: { value: _vm.json_m(_vm.courseSelect) }
          }),
          _vm._v(" "),
          _c(
            "el-select",
            {
              staticStyle: { width: "100%" },
              attrs: {
                filterable: "",
                remote: "",
                "collapse-tags": "",
                "reserve-keyword": "",
                placeholder: "Please enter a keyword",
                "remote-method": _vm.courseRemote,
                loading: _vm.loading
              },
              model: {
                value: _vm.courseSelect,
                callback: function($$v) {
                  _vm.courseSelect = $$v
                },
                expression: "courseSelect"
              }
            },
            _vm._l(_vm.courseOption, function(item) {
              return _c("el-option", {
                key: item.value,
                attrs: { label: item.label, value: item.value }
              })
            })
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "form-group" },
        [
          _c("label", [_vm._v("Section")]),
          _vm._v(" "),
          _c("input", {
            attrs: { type: "hidden", name: "section" },
            domProps: { value: _vm.json_m(_vm.sectionSelect) }
          }),
          _vm._v(" "),
          _c(
            "el-select",
            {
              staticStyle: { width: "100%" },
              attrs: {
                filterable: "",
                remote: "",
                "collapse-tags": "",
                "reserve-keyword": "",
                placeholder: "Please enter a keyword",
                "remote-method": _vm.sectionRemote,
                loading: _vm.loading
              },
              model: {
                value: _vm.sectionSelect,
                callback: function($$v) {
                  _vm.sectionSelect = $$v
                },
                expression: "sectionSelect"
              }
            },
            _vm._l(_vm.sectionOption, function(item) {
              return _c("el-option", {
                key: item.value,
                attrs: { label: item.label, value: item.value }
              })
            })
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "form-group" },
        [
          _c("label", [_vm._v("Subject")]),
          _vm._v(" "),
          _c("input", {
            attrs: { type: "hidden", name: "subject" },
            domProps: { value: _vm.json_m(_vm.subjectSelect) }
          }),
          _vm._v(" "),
          _c(
            "el-select",
            {
              staticStyle: { width: "100%" },
              attrs: {
                filterable: "",
                remote: "",
                "collapse-tags": "",
                "reserve-keyword": "",
                placeholder: "Please enter a keyword",
                "remote-method": _vm.subjectRemote,
                loading: _vm.loading
              },
              model: {
                value: _vm.subjectSelect,
                callback: function($$v) {
                  _vm.subjectSelect = $$v
                },
                expression: "subjectSelect"
              }
            },
            _vm._l(_vm.subjectOption, function(item) {
              return _c("el-option", {
                key: item.value,
                attrs: { label: item.label, value: item.value }
              })
            })
          )
        ],
        1
      )
    ]),
    _vm._v(" "),
    _vm._m(2),
    _vm._v(" "),
    _c("div", { staticClass: "col-md-12" }, [
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-md-6" }, [
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col-md-6" }, [
              _c("div", { staticClass: "form-group" }, [
                _c("label", { attrs: { for: "start_time" } }, [
                  _vm._v("Start Time")
                ]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.start_time,
                      expression: "start_time"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: {
                    type: "time",
                    id: "start_time",
                    placeholder: "Enter Time"
                  },
                  domProps: { value: _vm.start_time },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.start_time = $event.target.value
                    }
                  }
                })
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-md-6" }, [
              _c("div", { staticClass: "form-group" }, [
                _c("label", { attrs: { for: "end_time" } }, [
                  _vm._v("End Time")
                ]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.end_time,
                      expression: "end_time"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: {
                    type: "time",
                    id: "end_time",
                    placeholder: "Enter Time"
                  },
                  domProps: { value: _vm.end_time },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.end_time = $event.target.value
                    }
                  }
                })
              ])
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col-md-6" }, [
              _c("div", { staticClass: "form-group" }, [
                _c("label", { attrs: { for: "room" } }, [_vm._v("Room")]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.room_d,
                      expression: "room_d"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: {
                    type: "number",
                    id: "room",
                    placeholder: "Enter Room"
                  },
                  domProps: { value: _vm.room_d },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.room_d = $event.target.value
                    }
                  }
                })
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-md-6" }, [
              _c("div", { staticClass: "form-group" }, [
                _c("label", { attrs: { for: "day" } }, [_vm._v("Day")]),
                _vm._v(" "),
                _c(
                  "select",
                  {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.day_d,
                        expression: "day_d"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: { placeholder: "Enter Day", id: "day" },
                    on: {
                      change: function($event) {
                        var $$selectedVal = Array.prototype.filter
                          .call($event.target.options, function(o) {
                            return o.selected
                          })
                          .map(function(o) {
                            var val = "_value" in o ? o._value : o.value
                            return val
                          })
                        _vm.day_d = $event.target.multiple
                          ? $$selectedVal
                          : $$selectedVal[0]
                      }
                    }
                  },
                  [
                    _c("option", { attrs: { value: "TTH" } }, [_vm._v("TTH")]),
                    _vm._v(" "),
                    _c("option", { attrs: { value: "MW" } }, [_vm._v("MW")])
                  ]
                )
              ])
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "form-group" }, [
            _c(
              "div",
              {
                staticClass: "btn btn-secondary",
                on: { click: _vm.add_time_m }
              },
              [_vm._v("Add Time/Day")]
            )
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-md-6" }, [
          _c("table", { staticClass: "table table-condensed" }, [
            _vm._m(3),
            _vm._v(" "),
            _c(
              "tbody",
              _vm._l(_vm.www, function(obj) {
                return _c("tr", [
                  _c("td", [_vm._v(_vm._s(obj.day))]),
                  _vm._v(" "),
                  _c("td", [_vm._v(_vm._s(obj.start_time))]),
                  _vm._v(" "),
                  _c("td", [_vm._v(_vm._s(obj.end_time))]),
                  _vm._v(" "),
                  _c("td", [_vm._v(_vm._s(obj.room))]),
                  _vm._v(" "),
                  _c("td", [
                    _c(
                      "div",
                      {
                        staticClass: "btn btn-danger",
                        on: {
                          click: function($event) {
                            _vm.www.splice(_vm.www.indexOf(obj), 1)
                          }
                        }
                      },
                      [_vm._v("Delete")]
                    )
                  ])
                ])
              })
            )
          ]),
          _vm._v(" "),
          _c("input", {
            attrs: { type: "hidden", name: "www" },
            domProps: { value: _vm.json_m(_vm.www) }
          })
        ])
      ])
    ]),
    _vm._v(" "),
    _vm._m(4),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "col-md-6" },
      [
        _c(
          "div",
          { staticClass: "form-group" },
          [
            _c("label", [_vm._v("File input")]),
            _vm._v(" "),
            _c("br"),
            _vm._v(" "),
            _c(
              "vue-xlsx-table",
              { on: { "on-select-file": _vm.handleSelectedFile } },
              [_vm._v("Import File")]
            )
          ],
          1
        ),
        _vm._v(" "),
        _vm._l(_vm.header, function(obj) {
          return _c("div", { staticClass: "form-group" }, [
            _c("label", { attrs: { for: obj } }, [
              _vm._v(_vm._s(_vm.split_m(obj)))
            ]),
            _vm._v(" "),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.name[obj],
                  expression: "name[obj]"
                }
              ],
              staticClass: "form-control",
              attrs: { type: "text" },
              domProps: { value: _vm.name[obj] },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(_vm.name, obj, $event.target.value)
                }
              }
            })
          ])
        }),
        _vm._v(" "),
        _c("div", { staticClass: "form-group" }, [
          _c("div", { staticClass: "btn btn-info", on: { click: _vm.add_m } }, [
            _vm._v("Add Student")
          ])
        ])
      ],
      2
    ),
    _vm._v(" "),
    _c("div", { staticClass: "col-md-6" }, [
      _c("div", { staticClass: "form-group" }, [
        _c("table", { staticClass: "table table-condensed" }, [
          _c("thead", [
            _c(
              "tr",
              _vm._l(_vm.header, function(obj) {
                return _c("th", [_vm._v(_vm._s(_vm.split_m(obj)))])
              })
            )
          ]),
          _vm._v(" "),
          _c(
            "tbody",
            _vm._l(_vm.body, function(entry) {
              return _c(
                "tr",
                [
                  _vm._l(_vm.header, function(key) {
                    return _c("td", [
                      _vm._v(
                        "\n                        " +
                          _vm._s(entry[key]) +
                          "\n                    "
                      )
                    ])
                  }),
                  _vm._v(" "),
                  _c("td", [
                    _c(
                      "div",
                      {
                        staticClass: "btn btn-danger",
                        on: {
                          click: function($event) {
                            _vm.body.splice(_vm.body.indexOf(entry), 1)
                          }
                        }
                      },
                      [_vm._v("Delete")]
                    )
                  ])
                ],
                2
              )
            })
          ),
          _vm._v(" "),
          _c("input", {
            attrs: { type: "hidden", name: "student" },
            domProps: { value: _vm.json_m(_vm.body) }
          })
        ])
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "form-group" }, [
      _c("label", { attrs: { for: "unit" } }, [_vm._v("Unit")]),
      _vm._v(" "),
      _c("input", {
        staticClass: "form-control",
        attrs: {
          required: "",
          type: "number",
          step: "1.0",
          min: "0",
          max: "5",
          name: "unit",
          id: "unit",
          placeholder: "Enter Unit"
        }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "form-group" }, [
      _c("label", { attrs: { for: "semester" } }, [_vm._v("Semester")]),
      _vm._v(" "),
      _c(
        "select",
        {
          staticClass: "form-control",
          attrs: { name: "semester", id: "semester" }
        },
        [
          _c("option", { attrs: { value: "1" } }, [_vm._v("1st Semester")]),
          _vm._v(" "),
          _c("option", { attrs: { value: "2" } }, [_vm._v("2nd Semester")])
        ]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-12" }, [
      _c("hr", { staticClass: "style6" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", [_vm._v("Day")]),
        _vm._v(" "),
        _c("th", [_vm._v("Start Time")]),
        _vm._v(" "),
        _c("th", [_vm._v("End Time")]),
        _vm._v(" "),
        _c("th", [_vm._v("Room")]),
        _vm._v(" "),
        _c("th", [_vm._v("Action")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-12" }, [
      _c("hr", { staticClass: "style6" })
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-4b364a68", module.exports)
  }
}

/***/ })

});
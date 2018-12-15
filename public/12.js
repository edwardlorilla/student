webpackJsonp([12],{

/***/ 314:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(382)
}
var normalizeComponent = __webpack_require__(19)
/* script */
var __vue_script__ = __webpack_require__(384)
/* template */
var __vue_template__ = __webpack_require__(385)
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
Component.options.__file = "resources\\assets\\js\\components\\Layout\\Dashboard\\print.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-618ff56c", Component.options)
  } else {
    hotAPI.reload("data-v-618ff56c", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 382:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(383);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(49)("3f1cc554", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-618ff56c\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./print.vue", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-618ff56c\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./print.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 383:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)(false);
// imports


// module
exports.push([module.i, "\n.column {\n    float: left;\n    width: 50%;\n}\n\n/* Clear floats after the columns */\n.row-1:after {\n    content: \"\";\n    display: table;\n    clear: both;\n}\n", ""]);

// exports


/***/ }),

/***/ 384:
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
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            students: [],
            schedule: {
                appointments: [],
                course: {},
                section: {},
                subject: {},
                unit: '',
                year: ''

            },
            studentLength: 0,
            studentPassed: 0,
            studentFailed: 0,
            studentDrop: 0,
            studentInc: 0,
            studentAW: 0,
            isCheck: false,
            conditional: false
        };
    },
    beforeRouteEnter: function beforeRouteEnter(to, from, next) {
        axios.get('/api/' + to.meta.url + '/print/' + to.params.id).then(function (response) {
            next(function (vm) {
                return vm.setData(response.data);
            });
        }).catch(function () {
            next();
        });
    },
    beforeRouteUpdate: function beforeRouteUpdate(to, from, next) {
        var vm = this;
        //this.users = this.links = this.meta = null
        axios.get('/api/' + to.meta.url + '/print/' + to.params.id).then(function (response) {
            vm.setData(response.data);
            next();
        }).catch(function () {
            next();
        });
    },

    computed: {
        summaryStudent: function summaryStudent() {
            var vm = this,
                students = vm.students;
            vm.studentLength = students.length;
            vm.studentPassed = _.filter(students, ['remark', 'PASSED']).length;
            vm.studentFailed = _.filter(students, ['remark', 'FAILED']).length;
            vm.studentDrop = _.filter(students, ['remark', 'DROP']).length;
            vm.studentInc = _.filter(students, ['remark', 'INC']).length;
            vm.studentAW = _.filter(students, ['remark', 'AW/UW']).length;
            return students;
        }
    },
    methods: {
        gradingSystemResult: function gradingSystemResult(i) {
            var vm = this,
                dataResult = _.parseInt(vm.students[i]["prelim"]) * 0.4 + (_.parseInt(vm.students[i]["midterm"]) + _.parseInt(vm.students[i]["final"])) / 2 * 0.6;
            var gradeSystem = 0;
            vm.students[i]["result"] = _.clone(dataResult);
            if (_.parseInt(vm.students[i]["final"]) !== 0 && _.parseInt(vm.students[i]["ce"]) !== 0 && vm.conditional) {
                dataResult = _.parseInt(vm.students[i]["final"]) * 0.3 + _.parseInt(vm.students[i]["ce"]) * 0.7;
            }
            if (_.parseInt(vm.students[i]["prelim"]) !== 0 && _.parseInt(vm.students[i]["midterm"]) !== 0 && _.parseInt(vm.students[i]["final"]) !== 0 && vm.students[i]["remark"] !== "DROP" && vm.students[i]["remark"] !== "INC" && vm.students[i]["remark"] !== "AW/UW") {
                if (dataResult >= 98 && dataResult <= 100) {
                    gradeSystem = 1.0;
                } else if (dataResult >= 97 && dataResult <= 95) {
                    gradeSystem = 1.25;
                } else if (dataResult >= 92 && dataResult <= 94) {
                    gradeSystem = 1.5;
                } else if (dataResult >= 90 && dataResult <= 93) {
                    gradeSystem = 1.75;
                } else if (dataResult >= 86 && dataResult <= 89) {
                    gradeSystem = 2.0;
                } else if (dataResult >= 83 && dataResult <= 85) {
                    gradeSystem = 2.25;
                } else if (dataResult >= 80 && dataResult <= 84) {
                    gradeSystem = 2.5;
                } else if (dataResult >= 77 && dataResult <= 83) {
                    gradeSystem = 2.75;
                } else if (dataResult >= 75 && dataResult <= 82) {
                    gradeSystem = 3.0;
                } else if (dataResult >= 1 && dataResult <= 74) {
                    gradeSystem = 5.0;
                }
                if (gradeSystem >= 1 && gradeSystem <= 3) {
                    vm.students[i]["remark"] = "PASSED";
                } else if (gradeSystem == 5) {
                    vm.students[i]["remark"] = "FAILED";
                }
            } else if (_.parseInt(vm.students[i]["prelim"]) == 0 || _.parseInt(vm.students[i]["midterm"]) == 0 || _.parseInt(vm.students[i]["final"]) == 0) {
                if (vm.students[i]["remark"] !== "DROP" && vm.students[i]["remark"] !== "INC" && vm.students[i]["remark"] !== "AW/UW") {
                    vm.students[i]["remark"] = "";
                }
            }

            if (vm.students[i]["remark"] === "DROP") {
                vm.students[i]["remark"] = "DROP";
            } else if (vm.students[i]["remark"] === "PASSED") {
                vm.students[i]["remark"] = "PASSED";
            } else if (vm.students[i]["remark"] === "FAILED") {
                vm.students[i]["remark"] = "FAILED";
            } else if (vm.students[i]["remark"] === "INC") {
                vm.students[i]["remark"] = "INC";
            } else if (vm.students[i]["remark"] === "AW/UW") {
                vm.students[i]["remark"] = "AW/UW";
            }

            vm.students[i]["gradeEquivalent"] = gradeSystem;
            return gradeSystem;
        },
        dataResult: function dataResult(i) {
            var vm = this,
                x = _.parseInt(vm.students[i]["prelim"]) * 0.4,
                y = (_.parseInt(vm.students[i]["midtermPercentage"]) + _.parseInt(vm.students[i]["finalPercentage"])) / 2 * 0.6;

            return _.parseInt(vm.students[i]["prelim"]) !== 0 && _.parseInt(vm.students[i]["midtermPercentage"]) !== 0 && _.parseInt(vm.students[i]["finalPercentage"]) !== 0 ? x + y : 0;
        },
        cfgResult: function cfgResult(i) {
            var vm = this;
            var cfg = _.parseInt(vm.students[i]["final"]) * 0.3 + _.parseInt(vm.students[i]["ce"]) * 0.7;
            vm.students[i]["cfgResult"] = cfg;
            return cfg;
        },
        midterm_m: function midterm_m(index, object, midterm) {
            var vm = this;
            vm.students[index][object] = _.parseInt(midterm) <= _.parseInt(vm.schedule.items) ? _.parseInt(midterm) / _.parseInt(vm.schedule.items) * 50 + 50 : 0;

            return vm.students[index][object];
        },
        final_m: function final_m(index, object, final) {
            var vm = this;
            vm.students[index][object] = _.parseInt(final) <= _.parseInt(vm.schedule.items) ? _.parseInt(final) / _.parseInt(vm.schedule.items) * 50 + 50 : 0;

            return vm.students[index][object];
        },
        nameFormat: function nameFormat(student) {
            var vm = this;
            return student.last_name.toUpperCase() + ',' + vm.sentenceCase(student.first_name + ' ' + student.middle_name);
        },
        yearFormat: function yearFormat(year) {
            var vm = this,
                sem = _.parseInt(year);
            return sem + '-' + (sem + 1);
        },
        sentenceCase: function sentenceCase(str) {
            if (str === null || str === '') return false;else str = str.toString();

            return str.replace(/\w\S*/g, function (txt) {
                return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
            });
        },
        setData: function setData(response) {
            var vm = this;
            vm.students = response.students;
            vm.schedule = response.schedule;
            for (var i = 0; i < vm.students.length; i++) {
                vm.students[i]["result"] = vm.dataResult(i);
                vm.students[i]["gradeEquivalent"] = vm.gradingSystemResult(i);
                vm.students[i]["cfgResult"] = 0;
                vm.students[i]["midtermPercentage"] = 0;
                vm.students[i]["finalPercentage"] = 0;
            }
            if (vm.schedule.isChecked == 0) {
                vm.isCheck = false;
            } else {
                vm.isCheck = true;
            }
            if (vm.schedule.isConditional == 0) {
                vm.conditional = false;
            } else {
                vm.conditional = true;
            }
        }
    }
});

/***/ }),

/***/ 385:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.students && _vm.schedule
    ? _c("div", { staticClass: "dv" }, [
        _c("div", { staticClass: "dv-header" }, [
          _c(
            "div",
            { staticClass: "dv-header-title" },
            [
              _c(
                "el-button",
                {
                  directives: [
                    {
                      name: "print",
                      rawName: "v-print",
                      value: "#report",
                      expression: "'#report'"
                    }
                  ],
                  attrs: { type: "primary" }
                },
                [_vm._v("Print")]
              )
            ],
            1
          )
        ]),
        _vm._v(" "),
        _c("div", { staticStyle: { margin: "18px" } }, [
          _c(
            "table",
            {
              staticClass: "grid",
              staticStyle: { "page-break-after": "always" },
              attrs: { id: "report" }
            },
            [
              _c("thead", { staticStyle: { display: "table-header-group" } }, [
                _vm._m(0),
                _vm._v(" "),
                _c(
                  "tr",
                  {
                    staticStyle: {
                      "font-size": "18px",
                      "text-align": "left",
                      width: "100%"
                    }
                  },
                  [
                    _c("td"),
                    _c("td", [
                      _c("br"),
                      _c("span", { staticStyle: { "font-weight": "bold" } }, [
                        _vm._v("SCHEDULE ID: ")
                      ]),
                      _vm._v(_vm._s(_vm.schedule.id))
                    ])
                  ]
                ),
                _vm._v(" "),
                _c(
                  "tr",
                  {
                    staticStyle: {
                      "font-size": "18px",
                      "text-align": "left",
                      width: "100%"
                    }
                  },
                  [
                    _c("td"),
                    _c("td", [
                      _c("span", { staticStyle: { "font-weight": "bold" } }, [
                        _vm._v("SUBJECT: ")
                      ]),
                      _vm._v(
                        _vm._s(
                          _vm.schedule.subject ? _vm.schedule.subject.name : ""
                        ) + "\n                "
                      )
                    ]),
                    _vm._v(" "),
                    _c("td", [
                      _c("span", { staticStyle: { "font-weight": "bold" } }, [
                        _vm._v("DESCRIPTION: ")
                      ]),
                      _vm._v(_vm._s(_vm.schedule.subject.description))
                    ]),
                    _vm._v(" "),
                    _c("td", [
                      _c("span", { staticStyle: { "font-weight": "bold" } }, [
                        _vm._v("UNITS: ")
                      ]),
                      _vm._v(_vm._s(_vm.schedule.unit))
                    ])
                  ]
                ),
                _vm._v(" "),
                _c(
                  "tr",
                  {
                    staticStyle: {
                      "font-size": "18px",
                      "text-align": "left",
                      width: "100%"
                    }
                  },
                  [
                    _c("td"),
                    _c("td", [
                      _c("span", { staticStyle: { "font-weight": "bold" } }, [
                        _vm._v("COURSE: ")
                      ]),
                      _vm._v(
                        _vm._s(
                          _vm.schedule.course ? _vm.schedule.course.name : ""
                        ) + "\n                "
                      )
                    ]),
                    _vm._v(" "),
                    _c("td", [
                      _c("span", { staticStyle: { "font-weight": "bold" } }, [
                        _vm._v("SEM/YEAR: ")
                      ]),
                      _vm._v(
                        _vm._s(
                          _vm.schedule.semester === 1
                            ? "1st Semester"
                            : "2nd Semester"
                        ) +
                          "/" +
                          _vm._s(_vm.yearFormat(_vm.schedule.year)) +
                          "\n                "
                      )
                    ]),
                    _vm._v(" "),
                    _c("td", [
                      _c("span", { staticStyle: { "font-weight": "bold" } }, [
                        _vm._v("CLASS: ")
                      ]),
                      _vm._v(
                        _vm._s(
                          _vm.schedule.section ? _vm.schedule.section.name : ""
                        ) + "\n                "
                      )
                    ])
                  ]
                ),
                _vm._v(" "),
                _c(
                  "tr",
                  {
                    staticStyle: {
                      "font-size": "18px",
                      "text-align": "left",
                      width: "100%"
                    }
                  },
                  [
                    _c("td"),
                    _c(
                      "td",
                      { attrs: { colspan: "12" } },
                      [
                        _c("span", { staticStyle: { "font-weight": "bold" } }, [
                          _vm._v("TIME/DAY/RM: ")
                        ]),
                        _vm._l(_vm.schedule.appointments, function(
                          appointment
                        ) {
                          return _c("span", [
                            _vm._v(
                              _vm._s(_vm.$root.clock(appointment.start_time)) +
                                "-" +
                                _vm._s(_vm.$root.clock(appointment.end_time)) +
                                "/" +
                                _vm._s(appointment.day) +
                                "/ROOM-" +
                                _vm._s(appointment.room)
                            )
                          ])
                        })
                      ],
                      2
                    )
                  ]
                )
              ]),
              _vm._v(" "),
              _c("tfoot", { staticStyle: { display: "table-footer-group" } }, [
                _c("tr", [
                  _c(
                    "td",
                    {
                      staticClass: "report-footer-cell",
                      attrs: { colspan: "12" }
                    },
                    [
                      _c("div", { staticClass: "footer-info form-group" }, [
                        _c("div", { staticClass: "row-1" }, [
                          _c("div", { staticClass: "column" }, [
                            _vm._m(1),
                            _vm._v(" "),
                            _c("div", [
                              _c("div", { staticClass: "form-group" }, [
                                _vm.summaryStudent
                                  ? _c("table", [
                                      _c("tr", [
                                        _c("th", [_vm._v("Summary:")]),
                                        _vm._v(" "),
                                        _c(
                                          "th",
                                          {
                                            staticStyle: {
                                              width: "20%",
                                              "border-bottom": "solid",
                                              "text-align": "center"
                                            }
                                          },
                                          [
                                            _vm._v(
                                              "\n                                                    " +
                                                _vm._s(_vm.studentLength) +
                                                "\n                                                "
                                            )
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _c("th", [_vm._v("Passed:")]),
                                        _vm._v(" "),
                                        _c(
                                          "th",
                                          {
                                            staticStyle: {
                                              width: "20%",
                                              "border-bottom": "solid",
                                              "text-align": "center"
                                            }
                                          },
                                          [
                                            _vm._v(
                                              "\n                                                    " +
                                                _vm._s(_vm.studentPassed) +
                                                "\n                                                "
                                            )
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _c("th", [_vm._v("Failed:")]),
                                        _vm._v(" "),
                                        _c(
                                          "th",
                                          {
                                            staticStyle: {
                                              width: "20%",
                                              "border-bottom": "solid",
                                              "text-align": "center"
                                            }
                                          },
                                          [
                                            _vm._v(
                                              "\n                                                    " +
                                                _vm._s(_vm.studentFailed) +
                                                "\n                                                "
                                            )
                                          ]
                                        )
                                      ]),
                                      _vm._v(" "),
                                      _c("tr", [
                                        _c("th", [_vm._v("INC::")]),
                                        _vm._v(" "),
                                        _c(
                                          "th",
                                          {
                                            staticStyle: {
                                              width: "20%",
                                              "border-bottom": "solid",
                                              "text-align": "center"
                                            }
                                          },
                                          [
                                            _vm._v(
                                              "\n                                                    " +
                                                _vm._s(_vm.studentInc) +
                                                "\n                                                "
                                            )
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _c("th", [_vm._v("DROP:")]),
                                        _vm._v(" "),
                                        _c(
                                          "th",
                                          {
                                            staticStyle: {
                                              width: "20%",
                                              "border-bottom": "solid",
                                              "text-align": "center"
                                            }
                                          },
                                          [
                                            _vm._v(
                                              "\n                                                    " +
                                                _vm._s(_vm.studentDrop) +
                                                "\n                                                "
                                            )
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _c("th", [_vm._v("AW/UW:")]),
                                        _vm._v(" "),
                                        _c(
                                          "th",
                                          {
                                            staticStyle: {
                                              width: "20%",
                                              "border-bottom": "solid",
                                              "text-align": "center"
                                            }
                                          },
                                          [
                                            _vm._v(
                                              "\n                                                    " +
                                                _vm._s(_vm.studentAW) +
                                                "\n                                                "
                                            )
                                          ]
                                        )
                                      ])
                                    ])
                                  : _vm._e()
                              ])
                            ])
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "column" }, [
                            _c("div"),
                            _vm._v(" "),
                            _c("div", [
                              _c("div", [
                                _c("table", { attrs: { width: "90%" } }, [
                                  _vm._m(2),
                                  _vm._v(" "),
                                  _c("tr", [
                                    _c(
                                      "td",
                                      {
                                        staticStyle: {
                                          width: "20%",
                                          "border-bottom": "solid",
                                          "text-align": "center"
                                        }
                                      },
                                      [
                                        _c("strong", [
                                          _vm._v(
                                            _vm._s(
                                              _vm.$root.store.state.roles
                                                .faculty
                                                ? _vm.$root.store.state.user.last_name.toUpperCase() +
                                                  " , " +
                                                  _vm.$root.store.state.user
                                                    .first_name +
                                                  "  " +
                                                  _vm.$root.store.state.user
                                                    .middle_name
                                                : _vm.schedule.user.last_name.toUpperCase() +
                                                  " , " +
                                                  _vm.schedule.user.first_name +
                                                  "  " +
                                                  _vm.schedule.user.middle_name
                                            )
                                          )
                                        ])
                                      ]
                                    )
                                  ]),
                                  _vm._v(" "),
                                  _vm._m(3)
                                ])
                              ])
                            ]),
                            _vm._v(" "),
                            _c("div"),
                            _vm._v(" "),
                            _c("div", [
                              _c("div", [
                                _c("table", { attrs: { width: "90%" } }, [
                                  _vm._m(4),
                                  _vm._v(" "),
                                  _c("tr", [
                                    _c(
                                      "td",
                                      {
                                        staticStyle: {
                                          width: "20%",
                                          "border-bottom": "solid",
                                          "text-align": "center"
                                        }
                                      },
                                      [
                                        _c("strong", [
                                          _vm._v(
                                            _vm._s(
                                              _vm.$root.store.state.setting
                                                ? _vm.$root.store.state.setting
                                                    .dean
                                                : ""
                                            )
                                          )
                                        ])
                                      ]
                                    )
                                  ]),
                                  _vm._v(" "),
                                  _vm._m(5)
                                ])
                              ])
                            ])
                          ])
                        ])
                      ])
                    ]
                  )
                ])
              ]),
              _vm._v(" "),
              _c("tbody", { staticClass: "report-content" }, [
                _c("tr", [
                  _c(
                    "td",
                    {
                      staticClass: "report-content-cell",
                      attrs: { colspan: "12" }
                    },
                    [
                      _c(
                        "div",
                        {
                          staticClass: "main",
                          staticStyle: { margin: "18px" }
                        },
                        [
                          _c("table", { staticClass: "table table-striped" }, [
                            _vm._m(6),
                            _vm._v(" "),
                            _c(
                              "tbody",
                              _vm._l(_vm.students, function(student, index) {
                                return _c("tr", [
                                  _c("td", [_vm._v(_vm._s(index + 1))]),
                                  _vm._v(" "),
                                  _c("td", [
                                    _vm._v(
                                      _vm._s(
                                        student.student
                                          ? _vm.nameFormat(student.student)
                                          : "NO NAME"
                                      )
                                    )
                                  ]),
                                  _vm._v(" "),
                                  _c("td"),
                                  _vm._v(" "),
                                  _c("td"),
                                  _vm._v(" "),
                                  _c("td", [
                                    _vm._v(
                                      _vm._s(_vm.gradingSystemResult(index))
                                    )
                                  ]),
                                  _vm._v(" "),
                                  _c("td", [_vm._v(_vm._s(student.remark))])
                                ])
                              })
                            )
                          ])
                        ]
                      )
                    ]
                  )
                ])
              ])
            ]
          )
        ])
      ])
    : _vm._e()
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("tr", { staticStyle: { width: "100%" } }, [
      _c("td"),
      _c("td", { staticClass: "report-header-cell", attrs: { width: "40%" } }, [
        _c("img", {
          staticStyle: { "padding-top": "18px", "padding-bottom": "20px" },
          attrs: { width: "180px", src: "/storage/images/logo.png", alt: "" }
        })
      ]),
      _vm._v(" "),
      _c(
        "td",
        {
          staticClass: "report-header-cell",
          staticStyle: {
            "text-align": "center",
            "padding-right": "66px",
            "font-size": "21px"
          },
          attrs: { width: "20%" }
        },
        [
          _c(
            "div",
            {
              staticStyle: {
                "padding-bottom": "99px",
                width: "100%",
                height: "66px"
              }
            },
            [
              _c("div", { staticStyle: { width: "300px" } }, [
                _c("br"),
                _vm._v(
                  "\n                            Republic of the Philippine University of Southeastern Philippine Obrero, Davao City\n                        "
                )
              ]),
              _vm._v(" "),
              _c("br"),
              _vm._v(" "),
              _c(
                "p",
                { staticStyle: { "font-size": "36px", "font-weight": "bold" } },
                [_vm._v("Report of Grades")]
              )
            ]
          ),
          _vm._v(" "),
          _c("br"),
          _vm._v(" "),
          _c("br"),
          _vm._v(" "),
          _c("br")
        ]
      ),
      _vm._v(" "),
      _c("td", {
        staticClass: "report-header-cell",
        staticStyle: { "text-align": "center" },
        attrs: { width: "40%" }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [
      _c("table", [
        _c("tr", [
          _c("th", [_vm._v("Note:")]),
          _vm._v(" "),
          _c("th", [_vm._v("Grade Sheets must be")])
        ]),
        _vm._v(" "),
        _c("tr", [
          _c("td"),
          _vm._v(" "),
          _c("th", [_vm._v("Accomplished in triplicate")])
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("tr", [_c("th", [_vm._v("Submitted By:")])])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("tr", [
      _c(
        "td",
        {
          staticClass: "blockquote-footer",
          staticStyle: { "text-align": "center" }
        },
        [_c("em", [_vm._v("Instructor")])]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("tr", [_c("th", [_vm._v("Noted By:")])])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("tr", [
      _c(
        "td",
        {
          staticClass: "blockquote-footer",
          staticStyle: { "text-align": "center" }
        },
        [
          _c("em", [
            _vm._v(
              "Dean,\n                                                    ENGG"
            )
          ])
        ]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", [_vm._v("NO.")]),
        _vm._v(" "),
        _c("th", [_vm._v("NAME OF STUDENTS")]),
        _vm._v(" "),
        _c("th", [_vm._v("PRELIM")]),
        _vm._v(" "),
        _c("th", [_vm._v("MIDTERM")]),
        _vm._v(" "),
        _c("th", [_vm._v("FINAL")]),
        _vm._v(" "),
        _c("th", [_vm._v("REMARKS")])
      ])
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-618ff56c", module.exports)
  }
}

/***/ })

});
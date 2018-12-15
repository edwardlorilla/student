webpackJsonp([3],{

/***/ 313:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(369)
}
var normalizeComponent = __webpack_require__(19)
/* script */
var __vue_script__ = __webpack_require__(371)
/* template */
var __vue_template__ = __webpack_require__(381)
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
Component.options.__file = "resources\\assets\\js\\components\\Layout\\Dashboard\\show.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4033a3f0", Component.options)
  } else {
    hotAPI.reload("data-v-4033a3f0", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 369:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(370);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(49)("4c9ee305", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-4033a3f0\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./show.vue", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-4033a3f0\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./show.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 370:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)(false);
// imports


// module
exports.push([module.i, "\n.el-table .warning-row {\n    background: oldlace;\n}\n.el-table .success-row {\n    background: aliceblue;\n}\n", ""]);

// exports


/***/ }),

/***/ 371:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__edit_vue__ = __webpack_require__(372);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__edit_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__edit_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__remarks_vue__ = __webpack_require__(375);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__remarks_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__remarks_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__schedule_vue__ = __webpack_require__(378);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__schedule_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__schedule_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




var getData = function getData(url, page, callback) {
    axios.get('/api/' + url, { params: page }).then(function (response) {
        callback(null, { data: response.data, page: page });
    }).catch(function (error) {
        callback(error, error.response.data);
    });
};
/* harmony default export */ __webpack_exports__["default"] = ({
    components: {
        Edit: __WEBPACK_IMPORTED_MODULE_0__edit_vue___default.a,
        Remark: __WEBPACK_IMPORTED_MODULE_1__remarks_vue___default.a,
        Schedule: __WEBPACK_IMPORTED_MODULE_2__schedule_vue___default.a
    },
    data: function data() {
        var _this = this;

        var sortOrders = {};
        return {
            isCheck: false,
            conditional: false,
            items: 0,
            roles: {},
            schedule: {},
            isDisabled: false,
            tableProps: {
                rowClassName: function rowClassName(_ref) {
                    var row = _ref.row,
                        rowIndex = _ref.rowIndex;

                    if (row.gradeEquivalent == 5) {
                        return "warning-row";
                    } else {
                        return "success-row";
                    }
                    return "";
                }
            },
            columnsSearch: [{ id: "student.first_name", name: "First Name" }, { id: "student.middle_name", name: "Middle Name" }, { id: "student.last_name", name: "Last Name" }, { id: "prelim", name: "Prelim" }, { id: "midterm", name: "Midterm" }, { id: "final", name: "Final" }, { id: "ce", name: "CE" }, { id: "created_at", name: "Created at" }, { id: "updated_at", name: "Updated at" }],
            filters: [{
                value: "",
                search_prop: "id" // define search_prop for backend usage.
            }],
            dialogMessage: { title: "", message: "" },
            dialogVisible: false,
            actionCol: {
                label: "Action",
                props: {
                    align: "center"
                },
                buttons: [{
                    handler: function handler(row) {
                        var vm = _this;
                        vm.dialogMessage = {
                            title: "Remove",
                            message: 'Are you sure to delete ' + row.id + '?',
                            row: row
                        };
                        vm.dialogVisible = true;
                    },
                    label: "Remove"
                }]
            },
            query: {
                page: 1,
                column: "id",
                direction: "desc",
                per_page: 15,
                search_column: "all",
                search_operator: "like",
                search_input: ""
            },
            operators: {
                equal: "=",
                not_equal: "<>",
                less_than: "<",
                greater_than: ">",
                less_than_or_equal_to: "<=",
                greater_than_or_equal_to: ">=",
                in: "IN",
                like: "LIKE"
            },
            columns: [{}],
            sortKey: "",
            sortOrders: sortOrders,
            data: [],
            meta: {},
            links: {
                first: null,
                last: null,
                next: null,
                prev: null
            },
            error: null,
            filterKey: "",
            loading: false,
            _numberLoad: 0
        };
    },
    mounted: function mounted() {
        var vm = this,
            roles = window.Laravel.roles;
        for (var i = 0; i < roles.length; i++) {
            vm.roles[roles[i]] = true;
        }
    },

    computed: {
        ce_c: function ce_c() {
            var vm = this;
            return _.isEmpty(_.filter(vm.filteredData, function (response) {
                return _.parseInt(response.prelim) && _.parseInt(response.midterm) && _.parseInt(response.final);
            }));
        },
        ceResult_c: function ceResult_c() {
            var vm = this;
            return _.isEmpty(_.filter(vm.filteredData, function (response) {
                return _.parseInt(response.ce);
            }));
        },

        filteredData: function filteredData() {
            var sortKey = this.sortKey;
            var filterKey = this.filterKey && this.filterKey.toLowerCase();
            var order = this.sortOrders[sortKey] || 1;
            var data = this.data;
            if (filterKey) {
                data = data.filter(function (row) {
                    return Object.keys(row).some(function (key) {
                        return String(row[key]).toLowerCase().indexOf(filterKey) > -1;
                    });
                });
            }
            if (sortKey) {
                data = data.slice().sort(function (a, b) {
                    a = a[sortKey];
                    b = b[sortKey];
                    return (a === b ? 0 : a > b ? 1 : -1) * order;
                });
            }
            return data;
        },

        nextPage: function nextPage() {
            if (!this.meta || this.meta.current_page === this.meta.last_page) {
                return;
            }
            var vm = this;
            return this.meta.current_page + 1;
        },
        prevPage: function prevPage() {
            if (!this.meta || this.meta.current_page === 1) {
                return;
            }
            var vm = this;
            return this.meta.current_page - 1;
        },
        paginatonCount: function paginatonCount() {
            if (!this.meta) {
                return;
            }
            var _meta = this.meta,
                current_page = _meta.current_page,
                last_page = _meta.last_page;

            return 'Displaying ' + current_page + ' of ' + last_page + ' rows';
        }
    },

    filters: {
        capitalize: function capitalize(str) {
            return str.charAt(0).toUpperCase() + str.slice(1);
        }
    },

    beforeRouteEnter: function beforeRouteEnter(to, from, next) {
        getData(to.meta.url + '/' + to.params.id, to.query, function (err, data) {
            next(function (vm) {
                return vm.setData(err, data);
            });
        });
    },


    // when route changes and this component is already rendered,
    // the logic will be slightly different.
    beforeRouteUpdate: function beforeRouteUpdate(to, from, next) {
        var _this2 = this;

        //this.users = this.links = this.meta = null
        getData(to.meta.url + '/' + to.params.id, to.query, function (err, data) {
            _this2.setData(err, data);
            next();
        });
    },


    methods: {
        changeItem: function changeItem() {
            var vm = this;
            axios.put('/api/schedules/' + vm.schedule.id, { items: vm.items }).then(function (response) {
                vm.schedule.items = vm.items;
            });
        },
        midterm_m: function midterm_m(index, object, midterm) {
            var vm = this;
            vm.data[index][object] = _.parseInt(midterm) <= _.parseInt(vm.schedule.items) ? _.parseInt(midterm) / _.parseInt(vm.schedule.items) * 50 + 50 : 0;

            return vm.data[index][object];
        },
        final_m: function final_m(index, object, final) {
            var vm = this;
            vm.data[index][object] = _.parseInt(final) <= _.parseInt(vm.schedule.items) ? _.parseInt(final) / _.parseInt(vm.schedule.items) * 50 + 50 : 0;

            return vm.data[index][object];
        },
        onPrint: function onPrint() {
            var vm = this;
            vm.isDisabled = true;
            vm.$router.push({ name: "schedules.print", params: { id: vm.$route.params.id } }, function () {
                vm.isDisabled = false;
            });
        },
        isChecked: function isChecked() {
            var vm = this;
            vm.isCheck = !vm.isCheck;
            axios.put('/api/schedules/' + vm.schedule.id, { isChecked: vm.conditional });
        },
        isCondition: function isCondition() {
            var vm = this;
            vm.conditional = !vm.conditional;
            axios.put('/api/schedules/' + vm.schedule.id, { isConditional: vm.conditional });
        },
        _delete: function _delete(row) {
            var vm = this;
            if (row) {
                vm.loading = true;
                axios.delete('/api/semesters/' + row.id).then(function (response) {
                    vm.data.splice(vm.data.indexOf(row), 1);
                    vm.loading = false;
                    vm.dialogVisible = false;
                    vm.dialogMessage = { title: "", message: "", row: {} };
                    vm.$message({ message: response.statusText, type: "success" });
                }).catch(function (error) {
                    vm.$message({ message: error.statusText, type: "warning" });
                    vm.loading = false;
                });
            }
        },
        handleClose: function handleClose(done) {
            this.$confirm("Are you sure to close this dialog?").then(function (_) {
                done();
            }).catch(function (_) {});
        },
        update: function update(index, event, object) {
            var vm = this;
            vm.data[index][object] = event;
            //vm.$set(vm.data, index, vm.data[object])
        },
        _create: function _create() {
            var vm = this;
            vm.$router.push({ name: "students.create", params: { id: vm.$route.params.id } });
        },


        sortBy: function sortBy(key) {
            this.sortKey = key;
            this.sortOrders[key] = this.sortOrders[key] * -1;
        },

        loadData: _.debounce(function (event) {
            var vm = this;

            vm.loading = true;
            var option = _.clone(vm.$route.query);

            if (event.type === "sort") {
                option.column = event.sort.prop;
                option.direction = event.sort.order == "ascending" ? "asc" : "desc";
            }

            if (event.type === "page") {
                option.page = event.page;
                option.per_page = event.pageSize;
            }
            if (event.type != "init") {
                if (event.type === "filter" && vm.filters[0].value.length != 0) {
                    option.search_column = vm.query.search_column;
                    option.search_operator = vm.query.search_operator;
                    option.search_input = vm.filters[0].value;
                } else {
                    delete option.search_input;
                }
                vm.$router.push({
                    path: '' + vm.$route.path,
                    query: option
                }, function () {
                    vm.loading = false;
                }, function () {
                    vm.loading = false;
                });
            } else {
                vm.loading = false;
            }
        }, 500),
        dataResult: function dataResult(i) {

            var vm = this,
                midterm = _.parseInt(vm.data[i]["midterm"]) <= _.parseInt(vm.schedule.items) ? _.parseInt(vm.data[i]["midterm"]) / _.parseInt(vm.schedule.items) * 50 + 50 : 0,
                final = _.parseInt(vm.data[i]["final"]) <= _.parseInt(vm.schedule.items) ? _.parseInt(vm.data[i]["final"]) / _.parseInt(vm.schedule.items) * 50 + 50 : 0,
                x = _.parseInt(vm.data[i]["prelim"]) * 0.4,
                y = (midterm + final) / 2 * 0.6;

            return _.parseInt(vm.data[i]["prelim"]) !== 0 && midterm !== 0 && final !== 0 ? x + y : 0;
        },
        cfgResult: function cfgResult(i) {
            var vm = this;
            var cfg = _.parseInt(vm.data[i]["final"]) * 0.3 + _.parseInt(vm.data[i]["ce"]) * 0.7;
            vm.data[i]["cfgResult"] = _.parseInt(vm.data[i]["final"]) && _.parseInt(vm.data[i]["ce"]) ? cfg : 0;
            return _.parseInt(vm.data[i]["final"]) && _.parseInt(vm.data[i]["ce"]) ? cfg : 0;;
        },
        gradingSystemResult: function gradingSystemResult(i, conditional) {
            var vm = this,
                dataResult = _.parseInt(vm.data[i]["prelim"]) * 0.4 + (_.parseInt(vm.data[i]["midterm"]) + _.parseInt(vm.data[i]["final"])) / 2 * 0.6;
            var gradeSystem = 0;
            vm.data[i]["result"] = _.clone(dataResult);
            if (_.parseInt(vm.data[i]["final"]) !== 0 && _.parseInt(vm.data[i]["ce"]) !== 0 && vm.conditional) {
                dataResult = _.parseInt(vm.data[i]["final"]) * 0.3 + _.parseInt(vm.data[i]["ce"]) * 0.7;
            }
            if (_.parseInt(vm.data[i]["prelim"]) !== 0 && _.parseInt(vm.data[i]["midterm"]) !== 0 && _.parseInt(vm.data[i]["final"]) !== 0 && vm.data[i]["remark"] !== "DROP" && vm.data[i]["remark"] !== "INC" && vm.data[i]["remark"] !== "AW/UW") {
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
                    vm.data[i]["remark"] = "PASSED";
                } else if (gradeSystem == 5) {
                    vm.data[i]["remark"] = "FAILED";
                }
            } else if (_.parseInt(vm.data[i]["prelim"]) == 0 || _.parseInt(vm.data[i]["midterm"]) == 0 || _.parseInt(vm.data[i]["final"]) == 0) {
                if (vm.data[i]["remark"] !== "DROP" && vm.data[i]["remark"] !== "INC" && vm.data[i]["remark"] !== "AW/UW") {
                    vm.data[i]["remark"] = "";
                }
            }

            if (vm.data[i]["remark"] === "DROP") {
                vm.data[i]["remark"] = "DROP";
            } else if (vm.data[i]["remark"] === "PASSED") {
                vm.data[i]["remark"] = "PASSED";
            } else if (vm.data[i]["remark"] === "FAILED") {
                vm.data[i]["remark"] = "FAILED";
            } else if (vm.data[i]["remark"] === "INC") {
                vm.data[i]["remark"] = "INC";
            } else if (vm.data[i]["remark"] === "AW/UW") {
                vm.data[i]["remark"] = "AW/UW";
            }

            vm.data[i]["gradeEquivalent"] = gradeSystem;
            return gradeSystem;
        },
        setData: function setData(err, data) {
            var vm = this;
            if (err) {
                if (err.response.status === 404) {
                    vm.$router.push({ name: "error.not-found", params: { "0": "/" } });
                }

                vm.error = err.toString();
            } else {
                vm.data = data.data.model.data;
                vm.schedule = data.data.schedules;
                vm.items = vm.schedule.items;
                for (var i = 0; i < vm.data.length; i++) {
                    vm.data[i]["result"] = vm.dataResult(i);
                    vm.data[i]["gradeEquivalent"] = vm.gradingSystemResult(i);
                    vm.data[i]["cfgResult"] = 0;
                    vm.data[i]["midtermPercentage"] = 0;
                    vm.data[i]["finalPercentage"] = 0;
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
                vm.links.first_page_url = data.data.model.first_page_url;
                vm.links.last_page_url = data.data.model.last_page_url;
                vm.links.prev_page_url = data.data.model.prev_page_url;
                vm.links.next_page_url = data.data.model.next_page_url;

                vm.meta.current_page = data.data.model.current_page;
                vm.meta.from = data.data.model.from;
                vm.meta.last_page = data.data.model.last_page;
                vm.query.per_page = _.parseInt(data.data.model.per_page);
                vm.meta.to = data.data.model.to;
                vm.meta.total = data.data.model.total;
                /*
                
                                    //                    vm.columns = data.data.columns;
                                    if (data.page.search_input) {
                                        vm.filters[0].value = data.page.search_input;
                                        vm.filters[0].search_prop = vm.search_column; // define search_prop for backend usage.
                                    }
                */
            }
        }
    }
});

/***/ }),

/***/ 372:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(19)
/* script */
var __vue_script__ = __webpack_require__(373)
/* template */
var __vue_template__ = __webpack_require__(374)
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
Component.options.__file = "resources\\assets\\js\\components\\Layout\\Dashboard\\edit.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-983a2f06", Component.options)
  } else {
    hotAPI.reload("data-v-983a2f06", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 373:
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

/* harmony default export */ __webpack_exports__["default"] = ({
    props: ['scopeModel', 'name', 'url', 'valueObject'],
    data: function data() {
        return {
            edit_: null,
            isEdit: false,
            isDisabled: false
        };
    },
    mounted: function mounted() {
        var vm = this;
        vm.edit_ = _.clone(vm.scopeModel);
    },

    methods: {
        update: function update() {

            var vm = this;

            vm.isDisabled = true;
            var edit = {};
            edit[vm.valueObject] = vm.edit_;
            axios.put(vm.url, edit).then(function (response) {
                vm.$emit('update', vm.edit_);
                vm.isDisabled = false;
                vm.isEdit = false;
            }).catch(function (response) {
                vm.isDisabled = false;
                vm.isEdit = false;
                vm.$emit('update', vm.scopeModel);
            });
        }
    }
});

/***/ }),

/***/ 374:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.isEdit
    ? _c("div", { staticStyle: { "margin-top": "15px" } }, [
        _c("input", {
          directives: [
            {
              name: "model",
              rawName: "v-model",
              value: _vm.edit_,
              expression: "edit_"
            }
          ],
          staticClass: "form-control",
          attrs: {
            type: "number",
            disabled: _vm.isDisabled,
            placeholder: "Please input " + _vm.name
          },
          domProps: { value: _vm.edit_ },
          on: {
            keyup: [
              function($event) {
                if (
                  !("button" in $event) &&
                  _vm._k($event.keyCode, "tab", 9, $event.key, "Tab")
                ) {
                  return null
                }
                return _vm.update($event)
              },
              function($event) {
                if (
                  !("button" in $event) &&
                  _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")
                ) {
                  return null
                }
                return _vm.update($event)
              },
              function($event) {
                if (
                  !("button" in $event) &&
                  _vm._k($event.keyCode, "esc", 27, $event.key, "Escape")
                ) {
                  return null
                }
                _vm.isEdit = !_vm.isEdit
              }
            ],
            input: function($event) {
              if ($event.target.composing) {
                return
              }
              _vm.edit_ = $event.target.value
            }
          }
        })
      ])
    : _c(
        "span",
        {
          on: {
            dblclick: function($event) {
              _vm.isEdit = !_vm.isEdit
            }
          }
        },
        [
          _c("el-button", { attrs: { type: "text" } }, [
            _c("abbr", { attrs: { title: "Change " + _vm.name } }, [
              _vm._v(_vm._s(_vm.scopeModel))
            ])
          ])
        ],
        1
      )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-983a2f06", module.exports)
  }
}

/***/ }),

/***/ 375:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(19)
/* script */
var __vue_script__ = __webpack_require__(376)
/* template */
var __vue_template__ = __webpack_require__(377)
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
Component.options.__file = "resources\\assets\\js\\components\\Layout\\Dashboard\\remarks.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-a8044160", Component.options)
  } else {
    hotAPI.reload("data-v-a8044160", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 376:
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

/* harmony default export */ __webpack_exports__["default"] = ({
    props: ['scopeModel', 'name', 'url', 'valueObject'],
    data: function data() {
        return {
            edit_: null,
            isEdit: false,
            isDisabled: false
        };
    },
    mounted: function mounted() {
        var vm = this;
        vm.edit_ = _.clone(vm.scopeModel);
    },

    methods: {
        update: function update() {
            var vm = this;
            vm.isDisabled = true;
            var edit = {};
            edit[vm.valueObject] = vm.edit_;

            axios.put(vm.url, edit).then(function (response) {
                vm.$emit('update', vm.edit_);
                vm.isDisabled = false;
                vm.isEdit = false;
            }).catch(function (response) {
                vm.isDisabled = false;
                vm.isEdit = false;
                vm.$emit('update', vm.scopeModel);
            });
        }
    }
});

/***/ }),

/***/ 377:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "el-popover",
    {
      attrs: { placement: "top" },
      model: {
        value: _vm.isEdit,
        callback: function($$v) {
          _vm.isEdit = $$v
        },
        expression: "isEdit"
      }
    },
    [
      _c(
        "select",
        {
          directives: [
            {
              name: "model",
              rawName: "v-model",
              value: _vm.edit_,
              expression: "edit_"
            }
          ],
          staticClass: "form-control",
          attrs: { name: "remark", id: "remark" },
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
              _vm.edit_ = $event.target.multiple
                ? $$selectedVal
                : $$selectedVal[0]
            }
          }
        },
        [
          _c("option", { attrs: { value: "" } }, [_vm._v("NONE")]),
          _vm._v(" "),
          _c("option", { attrs: { value: "DROP" } }, [_vm._v("DROP")]),
          _vm._v(" "),
          _c("option", { attrs: { value: "INC" } }, [_vm._v("INC")]),
          _vm._v(" "),
          _c("option", { attrs: { value: "AW/UW" } }, [_vm._v("AW/UW")])
        ]
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticStyle: { "text-align": "right", margin: "0" } },
        [
          _c(
            "el-button-group",
            { staticStyle: { "margin-top": "15px" } },
            [
              _c(
                "el-button",
                {
                  attrs: { size: "mini", type: "primary" },
                  on: { click: _vm.update }
                },
                [_vm._v("Change Remark")]
              ),
              _vm._v(" "),
              _c(
                "el-button",
                {
                  attrs: { size: "mini " },
                  on: {
                    click: function($event) {
                      _vm.isEdit = !_vm.isEdit
                    }
                  }
                },
                [_vm._v("Cancel")]
              )
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "el-button",
        {
          attrs: { slot: "reference", type: "text" },
          on: {
            dblclick: function($event) {
              _vm.isEdit = !_vm.isEdit
            }
          },
          slot: "reference"
        },
        [_vm._v(_vm._s(_vm.scopeModel ? _vm.scopeModel : "---------"))]
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-a8044160", module.exports)
  }
}

/***/ }),

/***/ 378:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(19)
/* script */
var __vue_script__ = __webpack_require__(379)
/* template */
var __vue_template__ = __webpack_require__(380)
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
Component.options.__file = "resources\\assets\\js\\components\\Layout\\Dashboard\\schedule.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-d229cdec", Component.options)
  } else {
    hotAPI.reload("data-v-d229cdec", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 379:
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

/* harmony default export */ __webpack_exports__["default"] = ({
    props: ['schedule']
});

/***/ }),

/***/ 380:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.schedule
    ? _c("div", { staticStyle: { padding: "10px 15px" } }, [
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-md" }, [
            _c("span", { staticStyle: { "font-weight": "bold" } }, [
              _vm._v("SUBJECT: ")
            ]),
            _vm._v(
              _vm._s(_vm.schedule.subject ? _vm.schedule.subject.name : "") +
                "\n        "
            )
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-md" }, [
            _c("span", { staticStyle: { "font-weight": "bold" } }, [
              _vm._v("DESCRIPTION: ")
            ]),
            _vm._v(
              _vm._s(
                _vm.schedule.subject ? _vm.schedule.subject.description : ""
              ) + "\n        "
            )
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-md" }, [
            _c("span", { staticStyle: { "font-weight": "bold" } }, [
              _vm._v("UNITS: ")
            ]),
            _vm._v(_vm._s(_vm.schedule.unit) + "\n        ")
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-md" }, [
            _c("span", { staticStyle: { "font-weight": "bold" } }, [
              _vm._v("COURSE: ")
            ]),
            _vm._v(
              _vm._s(_vm.schedule.course ? _vm.schedule.course.name : "") +
                "\n        "
            )
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-md" }, [
            _c("span", { staticStyle: { "font-weight": "bold" } }, [
              _vm._v("SEM/YEAR: ")
            ]),
            _vm._v(
              _vm._s(_vm.schedule.semester === 1 ? "1st Semester" : "") +
                "\n        "
            )
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-md" }, [
            _c("span", { staticStyle: { "font-weight": "bold" } }, [
              _vm._v("CLASS: ")
            ]),
            _vm._v(
              _vm._s(_vm.schedule.section ? _vm.schedule.section.name : "") +
                "\n        "
            )
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "row" }, [
          _c(
            "div",
            { staticClass: "col-md" },
            [
              _c("span", { staticStyle: { "font-weight": "bold" } }, [
                _vm._v("SEM/YEAR: ")
              ]),
              _vm._l(_vm.schedule.appointments, function(appointment) {
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
        ])
      ])
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-d229cdec", module.exports)
  }
}

/***/ }),

/***/ 381:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.data
    ? _c(
        "div",
        { staticClass: "dv" },
        [
          _c("schedule", { attrs: { schedule: _vm.schedule } }),
          _vm._v(" "),
          _c("div", { staticClass: "dv-header" }, [
            _c(
              "div",
              { staticClass: "dv-header-title", staticStyle: { flex: "4" } },
              [
                _c(
                  "el-button-group",
                  [
                    _c(
                      "el-button",
                      {
                        attrs: { size: "mini", type: "primary" },
                        on: { click: _vm._create }
                      },
                      [_vm._v("Create " + _vm._s(_vm.$route.meta.title))]
                    ),
                    _vm._v(" "),
                    _vm.roles.superadministrator || _vm.roles.faculty
                      ? _c(
                          "el-button",
                          {
                            attrs: {
                              size: "mini",
                              type: "info",
                              disabled: _vm.ce_c
                            },
                            on: { click: _vm.onPrint }
                          },
                          [_vm._v("Print")]
                        )
                      : _vm._e()
                  ],
                  1
                )
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "dv-header-columns" },
              [
                _c("span", { staticClass: "dv-header-pre" }, [
                  _vm._v("Search: ")
                ]),
                _vm._v(" "),
                _c(
                  "el-select",
                  {
                    attrs: { placeholder: "Select" },
                    model: {
                      value: _vm.query.search_column,
                      callback: function($$v) {
                        _vm.$set(_vm.query, "search_column", $$v)
                      },
                      expression: "query.search_column"
                    }
                  },
                  [
                    _c("el-option", { attrs: { label: "All", value: "all" } }),
                    _vm._v(" "),
                    _vm._l(_vm.columnsSearch, function(value, key) {
                      return _c("el-option", {
                        key: key,
                        attrs: { label: value.name, value: value.id }
                      })
                    })
                  ],
                  2
                )
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "dv-header-operators" },
              [
                _c(
                  "el-select",
                  {
                    attrs: { placeholder: "Select" },
                    model: {
                      value: _vm.query.search_operator,
                      callback: function($$v) {
                        _vm.$set(_vm.query, "search_operator", $$v)
                      },
                      expression: "query.search_operator"
                    }
                  },
                  _vm._l(_vm.operators, function(value, key) {
                    return _c("el-option", {
                      key: key,
                      attrs: { label: value, value: key }
                    })
                  })
                )
              ],
              1
            ),
            _vm._v(" "),
            _c("div", { staticClass: "dv-header-search" }, [
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.filters[0].value,
                    expression: "filters[0].value"
                  }
                ],
                staticClass: "form-control",
                attrs: { placeholder: "Search" },
                domProps: { value: _vm.filters[0].value },
                on: {
                  keyup: function($event) {
                    if (
                      !("button" in $event) &&
                      _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")
                    ) {
                      return null
                    }
                    return _vm.loadData($event)
                  },
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.filters[0], "value", $event.target.value)
                  }
                }
              })
            ])
          ]),
          _vm._v(" "),
          _c(
            "el-dialog",
            {
              attrs: {
                "show-close": false,
                title: _vm.dialogMessage.title,
                visible: _vm.dialogVisible,
                width: "30%",
                "before-close": _vm.handleClose
              },
              on: {
                "update:visible": function($event) {
                  _vm.dialogVisible = $event
                }
              }
            },
            [
              _c("span", [_vm._v(_vm._s(_vm.dialogMessage.message))]),
              _vm._v(" "),
              _c(
                "span",
                {
                  staticClass: "dialog-footer",
                  attrs: { slot: "footer" },
                  slot: "footer"
                },
                [
                  _c(
                    "el-button",
                    {
                      attrs: { disabled: _vm.loading },
                      on: {
                        click: function($event) {
                          _vm.dialogVisible = false
                        }
                      }
                    },
                    [_vm._v("Cancel")]
                  ),
                  _vm._v(" "),
                  _c(
                    "el-button",
                    {
                      attrs: { loading: _vm.loading, type: "primary" },
                      on: {
                        click: function($event) {
                          _vm._delete(_vm.dialogMessage.row)
                        }
                      }
                    },
                    [_vm._v("Confirm")]
                  )
                ],
                1
              )
            ]
          ),
          _vm._v(" "),
          _c("div", { staticStyle: { padding: "10px 15px" } }, [
            _c(
              "div",
              [
                _vm.roles.superadministrator || _vm.roles.checker
                  ? _c("el-input", {
                      staticStyle: { width: "30%" },
                      attrs: { size: "mini", placeholder: "Please input" },
                      model: {
                        value: _vm.items,
                        callback: function($$v) {
                          _vm.items = $$v
                        },
                        expression: "items"
                      }
                    })
                  : _vm._e(),
                _vm._v(" "),
                _c(
                  "el-button-group",
                  [
                    _vm.roles.superadministrator || _vm.roles.checker
                      ? _c(
                          "el-button",
                          {
                            attrs: { size: "mini", type: "primary" },
                            on: { click: _vm.changeItem }
                          },
                          [_vm._v("Change No. of items")]
                        )
                      : _vm._e(),
                    _vm._v(" "),
                    _vm.roles.superadministrator || _vm.roles.faculty
                      ? _c(
                          "el-button",
                          {
                            attrs: {
                              size: "mini",
                              type: "success",
                              disabled: _vm.ce_c
                            },
                            on: { click: _vm.isCondition }
                          },
                          [
                            _vm._v(
                              "\n                    Conditional\n                "
                            )
                          ]
                        )
                      : _vm._e()
                  ],
                  1
                )
              ],
              1
            )
          ]),
          _vm._v(" "),
          _vm.nextPage ||
          _vm.prevPage ||
          !_vm.nextPage ||
          !_vm.prevPage ||
          _vm.meta
            ? _c(
                "data-tables-server",
                {
                  attrs: {
                    data: _vm.filteredData,
                    "action-col":
                      _vm.roles.superadministrator || _vm.roles.faculty
                        ? _vm.actionCol
                        : {},
                    total: _vm.meta.total,
                    filters: _vm.filters,
                    "pagination-props": {
                      background: true,
                      pageSize: _vm.query.per_page,
                      pageSizes: [_vm.query.per_page, 10, 20, 30]
                    },
                    "page-size": _vm.query.per_page,
                    "current-page": _vm.meta.current_page,
                    "table-props": _vm.tableProps,
                    loading: _vm.loading
                  },
                  on: { "query-change": _vm.loadData }
                },
                [
                  _c("el-table-column", {
                    key: "student.first_name",
                    attrs: { prop: "student.first_name", label: "First Name" },
                    scopedSlots: _vm._u([
                      {
                        key: "default",
                        fn: function(scope) {
                          return [_vm._v(_vm._s(scope.row.student.first_name))]
                        }
                      }
                    ])
                  }),
                  _vm._v(" "),
                  _c("el-table-column", {
                    key: "student.last_name",
                    attrs: { prop: "student.last_name", label: "Last Name" },
                    scopedSlots: _vm._u([
                      {
                        key: "default",
                        fn: function(scope) {
                          return [_vm._v(_vm._s(scope.row.student.last_name))]
                        }
                      }
                    ])
                  }),
                  _vm._v(" "),
                  _vm.roles.superadministrator || _vm.roles.faculty
                    ? _c("el-table-column", {
                        key: "prelim",
                        attrs: { prop: "prelim", label: "Prelim" },
                        scopedSlots: _vm._u([
                          {
                            key: "default",
                            fn: function(scope) {
                              return [
                                _c("edit", {
                                  attrs: {
                                    url: "/api/semesters/" + scope.row.id,
                                    "value-object": "prelim",
                                    name: "prelim",
                                    "scope-model": scope.row.prelim
                                  },
                                  on: {
                                    update: function($event) {
                                      _vm.update(scope.$index, $event, "prelim")
                                    }
                                  }
                                })
                              ]
                            }
                          }
                        ])
                      })
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.roles.superadministrator || _vm.roles.checker
                    ? _c("el-table-column", {
                        key: "midterm",
                        attrs: { prop: "midterm", label: "Midterm" },
                        scopedSlots: _vm._u([
                          {
                            key: "default",
                            fn: function(scope) {
                              return [
                                _c("edit", {
                                  attrs: {
                                    url: "/api/semesters/" + scope.row.id,
                                    "value-object": "midterm",
                                    name: "midterm",
                                    "scope-model": scope.row.midterm
                                  },
                                  on: {
                                    update: function($event) {
                                      _vm.update(
                                        scope.$index,
                                        $event,
                                        "midterm"
                                      )
                                    }
                                  }
                                })
                              ]
                            }
                          }
                        ])
                      })
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.roles.superadministrator || _vm.roles.checker
                    ? _c("el-table-column", {
                        key: "midtermPercentage",
                        attrs: {
                          prop: "midtermPercentage",
                          label: "Midterm %"
                        },
                        scopedSlots: _vm._u([
                          {
                            key: "default",
                            fn: function(scope) {
                              return [
                                _vm._v(
                                  "\n                " +
                                    _vm._s(
                                      _vm.midterm_m(
                                        scope.$index,
                                        "midtermPercentage",
                                        scope.row.midterm
                                      )
                                    ) +
                                    "\n            "
                                )
                              ]
                            }
                          }
                        ])
                      })
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.roles.superadministrator || _vm.roles.checker
                    ? _c("el-table-column", {
                        key: "final",
                        attrs: { prop: "final", label: "Final" },
                        scopedSlots: _vm._u([
                          {
                            key: "default",
                            fn: function(scope) {
                              return [
                                _c("edit", {
                                  attrs: {
                                    url: "/api/semesters/" + scope.row.id,
                                    "value-object": "final",
                                    name: "final",
                                    "scope-model": scope.row.final
                                  },
                                  on: {
                                    update: function($event) {
                                      _vm.update(scope.$index, $event, "final")
                                    }
                                  }
                                })
                              ]
                            }
                          }
                        ])
                      })
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.roles.superadministrator || _vm.roles.checker
                    ? _c("el-table-column", {
                        key: "finalPercentage",
                        attrs: { prop: "finalPercentage", label: "Final %" },
                        scopedSlots: _vm._u([
                          {
                            key: "default",
                            fn: function(scope) {
                              return [
                                _vm._v(
                                  "\n                " +
                                    _vm._s(
                                      _vm.final_m(
                                        scope.$index,
                                        "finalPercentage",
                                        scope.row.final
                                      )
                                    ) +
                                    "\n            "
                                )
                              ]
                            }
                          }
                        ])
                      })
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.roles.superadministrator ||
                  _vm.roles.checker ||
                  _vm.roles.faculty
                    ? _c("el-table-column", {
                        key: "result",
                        staticClass: "warning",
                        attrs: { prop: "result", label: "Result" },
                        scopedSlots: _vm._u([
                          {
                            key: "default",
                            fn: function(scope) {
                              return [
                                _vm._v(_vm._s(_vm.dataResult(scope.$index)))
                              ]
                            }
                          }
                        ])
                      })
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.conditional &&
                  (_vm.roles.superadministrator || _vm.roles.faculty)
                    ? _c("el-table-column", {
                        key: "ce",
                        attrs: { prop: "ce", label: "CE" },
                        scopedSlots: _vm._u([
                          {
                            key: "default",
                            fn: function(scope) {
                              return [
                                _c("edit", {
                                  attrs: {
                                    url: "/api/semesters/" + scope.row.id,
                                    "value-object": "ce",
                                    name: "ce",
                                    "scope-model": scope.row.ce
                                  },
                                  on: {
                                    update: function($event) {
                                      _vm.update(scope.$index, $event, "ce")
                                    }
                                  }
                                })
                              ]
                            }
                          }
                        ])
                      })
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.conditional &&
                  (_vm.roles.superadministrator || _vm.roles.faculty)
                    ? _c("el-table-column", {
                        key: "cfgResult",
                        attrs: { prop: "cfgResult", label: "CFG Result" },
                        scopedSlots: _vm._u([
                          {
                            key: "default",
                            fn: function(scope) {
                              return [
                                _vm._v(_vm._s(_vm.cfgResult(scope.$index)))
                              ]
                            }
                          }
                        ])
                      })
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.roles.superadministrator || _vm.roles.faculty
                    ? _c("el-table-column", {
                        key: "gradeEquivalent",
                        attrs: {
                          prop: "gradeEquivalent",
                          label: "Grade Equivalent"
                        },
                        scopedSlots: _vm._u([
                          {
                            key: "default",
                            fn: function(scope) {
                              return [
                                _vm._v(
                                  _vm._s(
                                    _vm.gradingSystemResult(
                                      scope.$index,
                                      _vm.conditional
                                    )
                                  )
                                )
                              ]
                            }
                          }
                        ])
                      })
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.roles.superadministrator || _vm.roles.faculty
                    ? _c("el-table-column", {
                        key: "remark",
                        attrs: { prop: "remark", label: "Remark" },
                        scopedSlots: _vm._u([
                          {
                            key: "default",
                            fn: function(scope) {
                              return [
                                _c("remark", {
                                  attrs: {
                                    url: "/api/semesters/" + scope.row.id,
                                    "value-object": "remark",
                                    name: "remark",
                                    "scope-model": scope.row.remark
                                  },
                                  on: {
                                    update: function($event) {
                                      _vm.update(scope.$index, $event, "remark")
                                    }
                                  }
                                })
                              ]
                            }
                          }
                        ])
                      })
                    : _vm._e()
                ],
                1
              )
            : _vm._e()
        ],
        1
      )
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-4033a3f0", module.exports)
  }
}

/***/ })

});
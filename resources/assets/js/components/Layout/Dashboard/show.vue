<template>
    <div v-if="data" class="dv">
        <schedule :schedule="schedule"/>
        <div class="dv-header">
            <div style="flex:4;" class="dv-header-title">
                <el-button-group>
                    <el-button size="mini" type="primary" @click="_create">Create {{$route.meta.title}}</el-button>
                    <el-button v-if="roles.superadministrator || roles.faculty" size="mini" type="info" :disabled="ce_c" @click="onPrint">Print</el-button>

                </el-button-group>

            </div>
            <div class="dv-header-columns">
                <span class="dv-header-pre">Search: </span>
                <el-select v-model="query.search_column" placeholder="Select">
                    <el-option label="All"
                               value="all"></el-option>
                    <el-option
                            v-for="(value, key) in columnsSearch"
                            :key="key"
                            :label="value.name"
                            :value="value.id">
                    </el-option>
                </el-select>

            </div>
            <div class="dv-header-operators">
                <el-select v-model="query.search_operator" placeholder="Select">
                    <el-option
                            v-for="(value, key) in operators"
                            :key="key"
                            :label="value"
                            :value="key">
                    </el-option>
                </el-select>
            </div>
            <div class="dv-header-search">
                <input placeholder="Search" class="form-control" @keyup.enter="loadData" v-model="filters[0].value"/>
            </div>
        </div>
        <el-dialog
                :show-close="false"
                :title="dialogMessage.title"
                :visible.sync="dialogVisible"
                width="30%"
                :before-close="handleClose">
            <span>{{dialogMessage.message}}</span>
            <span slot="footer" class="dialog-footer">
                <el-button :disabled="loading" @click="dialogVisible = false">Cancel</el-button>
                <el-button :loading="loading" type="primary" @click="_delete(dialogMessage.row)">Confirm</el-button>
              </span>
        </el-dialog>
        <div style="padding: 10px 15px;" >
            <div>
                <el-input v-if="roles.superadministrator || roles.checker" size="mini" style="width: 30%;" placeholder="Please input" v-model="items">                </el-input>
                <el-button-group>
                    <el-button size="mini" type="primary"   v-if="roles.superadministrator || roles.checker"  @click="changeItem">Change No. of items</el-button>
                    <el-button size="mini" type="success" v-if="roles.superadministrator || roles.faculty" :disabled="ce_c" @click="isCondition">
                        Conditional
                    </el-button>
                    <!--<el-button size="mini" type="primary" v-if="roles.faculty" :disabled="ce_c" @click="onPrint">Save
                    </el-button>-->
                </el-button-group>
            </div>
        </div>
        <data-tables-server v-if="nextPage || prevPage || !nextPage || !prevPage || meta"
                            :data="filteredData"
                            :action-col="roles.superadministrator || roles.faculty ? actionCol : {}"
                            :total="meta.total"
                            :filters="filters"
                            :pagination-props="{ background: true, pageSize: query.per_page ,  pageSizes: [query.per_page, 10, 20, 30] }"
                            :page-size="query.per_page"
                            :current-page="meta.current_page"
                            @query-change="loadData"
                            :table-props="tableProps"
                            :loading="loading">
            <el-table-column prop="student.first_name"
                             label="First Name"
                             key="student.first_name">
                <template slot-scope="scope">{{scope.row.student.first_name}}</template>
            </el-table-column>
            <el-table-column prop="student.last_name"
                             label="Last Name"
                             key="student.last_name">
                <template slot-scope="scope">{{scope.row.student.last_name}}</template>
            </el-table-column>
            <el-table-column prop="prelim"
                             v-if="roles.superadministrator || roles.faculty"
                             label="Prelim"
                             key="prelim">
                <template slot-scope="scope">
                    <edit @update="update(scope.$index, $event, 'prelim')" :url="'/api/semesters/' +scope.row.id"
                          value-object="prelim" name="prelim" :scope-model="scope.row.prelim"/>
                </template>
            </el-table-column>
            <el-table-column prop="midterm"
                             v-if="roles.superadministrator || roles.checker"
                             label="Midterm"
                             key="midterm">
                <template slot-scope="scope">
                    <edit @update="update(scope.$index, $event, 'midterm')" :url="'/api/semesters/' +scope.row.id"
                          value-object="midterm" name="midterm" :scope-model="scope.row.midterm"/>
                </template>
            </el-table-column>

            <el-table-column prop="midtermPercentage"
                             v-if="roles.superadministrator || roles.checker"
                             label="Midterm %"
                             key="midtermPercentage">
                <template slot-scope="scope">
                    {{midterm_m(scope.$index, 'midtermPercentage', scope.row.midterm)}}
                </template>
            </el-table-column>
            <el-table-column prop="final"
                             v-if="roles.superadministrator || roles.checker"
                             label="Final"
                             key="final">
                <template slot-scope="scope">
                    <edit @update="update(scope.$index, $event, 'final')" :url="'/api/semesters/' +scope.row.id"
                          value-object="final" name="final" :scope-model="scope.row.final"/>
                </template>
            </el-table-column>
            <el-table-column prop="finalPercentage"
                             v-if="roles.superadministrator || roles.checker"
                             label="Final %"
                             key="finalPercentage">
                <template slot-scope="scope">
                    {{final_m(scope.$index, 'finalPercentage', scope.row.final)}}
                </template>
            </el-table-column>
            <el-table-column class="warning"
                             prop="result"
                             v-if="roles.superadministrator || roles.checker || roles.faculty"
                             label="Result"
                             key="result">
                <template slot-scope="scope">{{dataResult(scope.$index)}}</template>
            </el-table-column>
            <el-table-column v-if="(conditional) && (roles.superadministrator || roles.faculty)"
                             prop="ce"
                             label="CE"
                             key="ce">
                <template slot-scope="scope">
                    <edit @update="update(scope.$index, $event, 'ce')" :url="'/api/semesters/' +scope.row.id"
                          value-object="ce" name="ce" :scope-model="scope.row.ce"/>
                </template>
            </el-table-column>
            <el-table-column v-if="(conditional) && (roles.superadministrator || roles.faculty)"
                             prop="cfgResult"
                             label="CFG Result"
                             key="cfgResult">
                <template slot-scope="scope">{{cfgResult(scope.$index)}}</template>
            </el-table-column>
            <el-table-column prop="gradeEquivalent"
                             v-if="roles.superadministrator || roles.faculty"
                             label="Grade Equivalent"
                             key="gradeEquivalent">
                <template slot-scope="scope">{{gradingSystemResult(scope.$index, conditional)}}</template>
            </el-table-column>
            <el-table-column prop="remark"
                             v-if="roles.superadministrator || roles.faculty"
                             label="Remark"
                             key="remark">
                <template slot-scope="scope">
                    <remark @update="update(scope.$index, $event, 'remark')" :url="'/api/semesters/' +scope.row.id"
                            value-object="remark" name="remark" :scope-model="scope.row.remark"/>
                </template>
            </el-table-column>
        </data-tables-server>
    </div>
</template>
<style>
    .el-table .warning-row {
        background: oldlace;
    }

    .el-table .success-row {
        background: aliceblue;
    }
</style>
<script>
    import Edit from './edit.vue'
    import Remark from './remarks.vue'
    import Schedule from './schedule.vue'
    const getData = (url, page, callback) => {
        axios
            .get(`/api/${url}`, {params: page})
            .then(response => {
                callback(null, {data: response.data, page: page});
            }).catch(error => {
            callback(error, error.response.data);
        });
    };
    export default  {
        components: {
            Edit,
            Remark,
            Schedule
        },
        data() {
            var sortOrders = {};
            return {
                isCheck: false,
                conditional: false,
                items: 0,
                roles: {},
                schedule: {},
                isDisabled: false,
                tableProps: {
                    rowClassName: function ({row, rowIndex}) {
                        if (row.gradeEquivalent == 5) {
                            return "warning-row";
                        } else {
                            return "success-row";
                        }
                        return "";
                    }
                },
                columnsSearch: [
                    {id: "student.first_name", name: "First Name"},
                    {id: "student.middle_name", name: "Middle Name"},
                    {id: "student.last_name", name: "Last Name"},
                    {id: "prelim", name: "Prelim"},
                    {id: "midterm", name: "Midterm"},
                    {id: "final", name: "Final"},
                    {id: "ce", name: "CE"},
                    {id: "created_at", name: "Created at"},
                    {id: "updated_at", name: "Updated at"}
                ],
                filters: [
                    {
                        value: "",
                        search_prop: "id" // define search_prop for backend usage.
                    }
                ],
                dialogMessage: {title: "", message: ""},
                dialogVisible: false,
                actionCol: {
                    label: "Action",
                    props: {
                        align: "center"
                    },
                    buttons: [
                        {
                            handler: row => {
                                let vm = this;
                                vm.dialogMessage = {
                                    title: "Remove",
                                    message: `Are you sure to delete ${row.id}?`,
                                    row: row
                                };
                                vm.dialogVisible = true;
                            },
                            label: "Remove"
                        }
                    ]
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
        mounted() {
            var vm = this,
                roles = window.Laravel.roles;
            for (var i = 0; i < roles.length; i++) {
                vm.roles[roles[i]] = true;
            }
        },
        computed: {
            ce_c() {
                var vm = this;
                return _.isEmpty(
                    _.filter(vm.filteredData, function (response) {
                        return (
                            _.parseInt(response.prelim) &&
                            _.parseInt(response.midterm) &&
                            _.parseInt(response.final)
                        );
                    })
                );
            },

            ceResult_c() {
                var vm = this;
                return _.isEmpty(
                    _.filter(vm.filteredData, function (response) {
                        return _.parseInt(response.ce);
                    })
                );
            },
            filteredData: function () {
                var sortKey = this.sortKey;
                var filterKey = this.filterKey && this.filterKey.toLowerCase();
                var order = this.sortOrders[sortKey] || 1;
                var data = this.data;
                if (filterKey) {
                    data = data.filter(function (row) {
                        return Object.keys(row).some(function (key) {
                            return (
                                String(row[key])
                                    .toLowerCase()
                                    .indexOf(filterKey) > -1
                            );
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

            nextPage() {
                if (!this.meta || this.meta.current_page === this.meta.last_page) {
                    return;
                }
                var vm = this;
                return this.meta.current_page + 1;
            },

            prevPage() {
                if (!this.meta || this.meta.current_page === 1) {
                    return;
                }
                var vm = this;
                return this.meta.current_page - 1;
            },

            paginatonCount() {
                if (!this.meta) {
                    return;
                }
                const {current_page, last_page} = this.meta;
                return `Displaying ${current_page} of ${last_page} rows`;
            }
        },

        filters: {
            capitalize: function (str) {
                return str.charAt(0).toUpperCase() + str.slice(1);
            }
        },

        beforeRouteEnter(to, from, next) {
            getData(`${to.meta.url}/${to.params.id}`, to.query, (err, data) => {
                next(vm => vm.setData(err, data));
            });
        },

        // when route changes and this component is already rendered,
        // the logic will be slightly different.
        beforeRouteUpdate(to, from, next) {
            //this.users = this.links = this.meta = null
            getData(`${to.meta.url}/${to.params.id}`, to.query, (err, data) => {
                this.setData(err, data);
                next();
            });
        },

        methods: {
            changeItem(){
                var vm = this
                axios.put(`/api/schedules/${vm.schedule.id}`, {items: vm.items}).then(function (response) {
                    vm.schedule.items = vm.items
                })
            },
            midterm_m(index, object, midterm){
                var vm = this
                vm.data[index][object] = _.parseInt(midterm) <= _.parseInt(vm.schedule.items) ? (_.parseInt(midterm) / _.parseInt(vm.schedule.items)) * 50 + 50 : 0

                return vm.data[index][object]
            },
            final_m(index, object, final){
                var vm = this
                vm.data[index][object] = _.parseInt(final) <= _.parseInt(vm.schedule.items) ? (_.parseInt(final) / _.parseInt(vm.schedule.items)) * 50 + 50 : 0

                return vm.data[index][object]
            },
            onPrint() {
                var vm = this;
                vm.isDisabled = true;
                vm.$router.push(
                    {name: "schedules.print", params: {id: vm.$route.params.id}},
                    function () {
                        vm.isDisabled = false;
                    }
                );
            },
            isChecked(){
                var vm = this
                vm.isCheck = !vm.isCheck
                axios.put(`/api/schedules/${vm.schedule.id}`, {isChecked: vm.conditional})
            },
            isCondition(){
                var vm = this
                vm.conditional = !vm.conditional
                axios.put(`/api/schedules/${vm.schedule.id}`, {isConditional: vm.conditional})
            },
            _delete(row) {
                var vm = this;
                if (row) {
                    vm.loading = true;
                    axios
                        .delete(`/api/semesters/${row.id}`)
                        .then(function (response) {
                            vm.data.splice(vm.data.indexOf(row), 1);
                            vm.loading = false;
                            vm.dialogVisible = false;
                            vm.dialogMessage = {title: "", message: "", row: {}};
                            vm.$message({message: response.statusText, type: "success"});
                        })
                        .catch(function (error) {
                            vm.$message({message: error.statusText, type: "warning"});
                            vm.loading = false;
                        });
                }
            },

            handleClose(done) {
                this.$confirm("Are you sure to close this dialog?")
                    .then(_ => {
                        done();
                    })
                    .catch(_ => {
                    });
            },

            update(index, event, object) {
                var vm = this;
                vm.data[index][object] = event;
                //vm.$set(vm.data, index, vm.data[object])
            },

            _create() {
                let vm = this;
                vm.$router.push({name: "students.create", params: {id: vm.$route.params.id}});
            },

            sortBy: function (key) {
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
                    vm.$router.push(
                        {
                            path: `${vm.$route.path}`,
                            query: option
                        },
                        function () {
                            vm.loading = false;
                        },
                        function () {
                            vm.loading = false;
                        }
                    );
                } else {
                    vm.loading = false;
                }
            }, 500),
            dataResult(i) {

                var vm = this,
                    midterm = _.parseInt(vm.data[i]["midterm"]) <= _.parseInt(vm.schedule.items) ? ((_.parseInt(vm.data[i]["midterm"]) ) / _.parseInt(vm.schedule.items)) * 50 + 50 : 0,
                    final = _.parseInt(vm.data[i]["final"]) <= _.parseInt(vm.schedule.items) ? ((_.parseInt(vm.data[i]["final"]) ) / _.parseInt(vm.schedule.items)) * 50 + 50 : 0,
                    x = _.parseInt(vm.data[i]["prelim"]) * 0.4,
                    y = ((midterm + final) /
                        2) *
                        0.6;

                return _.parseInt(vm.data[i]["prelim"]) !== 0 &&
                midterm !== 0 &&
                final !== 0
                    ? x + y
                    : 0;
            },

            cfgResult(i) {
                var vm = this;
                var cfg =
                    _.parseInt(vm.data[i]["final"]) * 0.3 +
                    _.parseInt(vm.data[i]["ce"]) * 0.7;
                vm.data[i]["cfgResult"] = _.parseInt(vm.data[i]["final"]) && _.parseInt(vm.data[i]["ce"]) ? cfg : 0;
                return _.parseInt(vm.data[i]["final"]) && _.parseInt(vm.data[i]["ce"]) ? cfg : 0;;
            },
            gradingSystemResult(i, conditional) {
                var vm = this,
                    dataResult =
                        _.parseInt(vm.data[i]["prelim"]) * 0.4 +
                        ((_.parseInt(vm.data[i]["midterm"]) +
                        _.parseInt(vm.data[i]["final"])) /
                        2) *
                        0.6;
                var gradeSystem = 0;
                vm.data[i]["result"] = _.clone(dataResult);
                if (_.parseInt(vm.data[i]["final"]) !== 0 && _.parseInt(vm.data[i]["ce"]) !== 0 && vm.conditional) {
                    dataResult = _.parseInt(vm.data[i]["final"]) * 0.3 + _.parseInt(vm.data[i]["ce"]) * 0.7;
                }
                if (
                    _.parseInt(vm.data[i]["prelim"]) !== 0 &&
                    _.parseInt(vm.data[i]["midterm"]) !== 0 &&
                    _.parseInt(vm.data[i]["final"]) !== 0 &&
                    vm.data[i]["remark"] !== "DROP" &&
                    vm.data[i]["remark"] !== "INC" &&
                    vm.data[i]["remark"] !== "AW/UW"
                ) {
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
                } else if (
                    _.parseInt(vm.data[i]["prelim"]) == 0 ||
                    _.parseInt(vm.data[i]["midterm"]) == 0 ||
                    _.parseInt(vm.data[i]["final"]) == 0
                ) {
                    if (
                        vm.data[i]["remark"] !== "DROP" &&
                        vm.data[i]["remark"] !== "INC" &&
                        vm.data[i]["remark"] !== "AW/UW"
                    ) {
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

            setData(err, data) {
                var vm = this;
                if (err) {
                    if (err.response.status === 404) {
                        vm.$router.push({name: "error.not-found", params: {"0": "/"}});
                    }

                    vm.error = err.toString();
                } else {
                    vm.data = data.data.model.data;
                    vm.schedule = data.data.schedules
                    vm.items = vm.schedule.items
                    for (var i = 0; i < vm.data.length; i++) {
                        vm.data[i]["result"] = vm.dataResult(i);
                        vm.data[i]["gradeEquivalent"] = vm.gradingSystemResult(i);
                        vm.data[i]["cfgResult"] = 0;
                        vm.data[i]["midtermPercentage"] = 0;
                        vm.data[i]["finalPercentage"] = 0;
                    }
                    if (vm.schedule.isChecked == 0) {
                        vm.isCheck = false
                    } else {
                        vm.isCheck = true
                    }
                    if (vm.schedule.isConditional == 0) {
                        vm.conditional = false
                    } else {
                        vm.conditional = true
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
    }
</script>

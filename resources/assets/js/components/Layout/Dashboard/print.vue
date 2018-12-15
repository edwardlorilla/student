<template>
    <div v-if="students && schedule" class="dv">
        <div class="dv-header">
            <div class="dv-header-title">
                <el-button type="primary" v-print="'#report'">Print</el-button>
            </div>
        </div>

        <div style="margin: 18px;">
            <table id="report"  style="page-break-after: always;" class="grid">
                <thead style="display: table-header-group;">
                <tr style="width:100%;">
                    <td>
                    <td class="report-header-cell" width="40%">
                        <img style="padding-top: 18px;padding-bottom: 20px;" width="180px"
                             src="/storage/images/logo.png" alt="">
                    </td>
                    <td class="report-header-cell" width="20%"
                        style="text-align: center;  padding-right: 66px;font-size: 21px; ">
                        <div style="padding-bottom:99px;width: 100%; height:66px;">
                            <div style="width:300px;">
                                <br>
                                Republic of the Philippine University of Southeastern Philippine Obrero, Davao City
                            </div>
                            <br>
                            <p style='font-size: 36px; font-weight: bold;'>Report of Grades</p>
                        </div>
                        <br>
                        <br>
                        <br>

                    </td>
                    <td class="report-header-cell" style="text-align: center;" width="40%"></td>
                    </td>
                </tr>

                <tr style="font-size: 18px;text-align: left;width:100%;">
                    <td>
                    <td><br><span style="font-weight: bold;">SCHEDULE ID: </span>{{schedule.id}}</td>
                    </td>
                </tr>
                <tr style="font-size: 18px;text-align: left;width:100%;">
                    <td>
                    <td><span style="font-weight: bold;">SUBJECT: </span>{{schedule.subject ? schedule.subject.name :
                        ''}}
                    </td>
                    <td><span style="font-weight: bold;">DESCRIPTION: </span>{{schedule.subject.description}}</td>
                    <td><span style="font-weight: bold;">UNITS: </span>{{schedule.unit}}</td>
                    </td>
                </tr>
                <tr style="font-size: 18px;text-align: left;width:100%;">
                    <td>
                    <td><span style="font-weight: bold;">COURSE: </span>{{schedule.course ? schedule.course.name : ''}}
                    </td>
                    <td><span style="font-weight: bold;">SEM/YEAR: </span>{{schedule.semester === 1 ? '1st Semester' :
                        '2nd Semester'}}/{{yearFormat(schedule.year)}}
                    </td>
                    <td><span style="font-weight: bold;">CLASS: </span>{{schedule.section ? schedule.section.name : ''}}
                    </td>
                    </td>
                </tr>
                <tr style="font-size: 18px;text-align: left; width:100%;">
                    <td>
                    <td colspan="12"><span style="font-weight: bold;">TIME/DAY/RM: </span><span
                            v-for="appointment in schedule.appointments">{{$root.clock(appointment.start_time)}}-{{$root.clock(appointment.end_time)}}/{{appointment.day}}/ROOM-{{appointment.room}}</span>
                    </td>
                    </td>
                </tr>
                </thead>
                <tfoot style="display: table-footer-group;">
                <tr>
                    <td colspan="12" class="report-footer-cell">
                        <div class="footer-info form-group">

                            <div class="row-1">
                                <div class="column">
                                    <div>
                                        <table>
                                            <tr>
                                                <th>Note:</th>
                                                <th>Grade Sheets must be</th>
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <th>Accomplished in triplicate</th>
                                            </tr>
                                        </table>
                                    </div>
                                    <div>
                                        <div class="form-group">
                                            <table v-if="summaryStudent">
                                                <tr>
                                                    <th>Summary:</th>
                                                    <th style="width:20%;border-bottom: solid; text-align:center;">
                                                        {{studentLength}}
                                                    </th>
                                                    <th>Passed:</th>
                                                    <th style="width:20%;border-bottom: solid;text-align:center;">
                                                        {{studentPassed}}
                                                    </th>
                                                    <th>Failed:</th>
                                                    <th style="width:20%;border-bottom: solid;text-align:center;">
                                                        {{studentFailed}}
                                                    </th>
                                                </tr>
                                                <tr>
                                                    <th>INC::</th>
                                                    <th style="width:20%;border-bottom: solid; text-align:center;">
                                                        {{studentInc}}
                                                    </th>
                                                    <th>DROP:</th>
                                                    <th style="width:20%;border-bottom: solid;text-align:center;">
                                                        {{studentDrop}}
                                                    </th>
                                                    <th>AW/UW:</th>
                                                    <th style="width:20%;border-bottom: solid;text-align:center;">
                                                        {{studentAW}}
                                                    </th>
                                                </tr>
                                            </table>
                                        </div>
                                    </div>

                                </div>
                                <div class="column">
                                    <div></div>
                                    <div>
                                        <div>
                                            <table width="90%">
                                                <tr>
                                                    <th>Submitted By:</th>
                                                </tr>
                                                <tr>
                                                    <td style="width:20%;border-bottom: solid; text-align:center;">
                                                        <strong>{{$root.store.state.roles.faculty ? `${$root.store.state.user.last_name.toUpperCase()} , ${$root.store.state.user.first_name}  ${$root.store.state.user.middle_name}`  : `${schedule.user.last_name.toUpperCase()} , ${schedule.user.first_name}  ${schedule.user.middle_name}`}}</strong>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td style="text-align:center;" class="blockquote-footer"><em>Instructor</em>
                                                    </td>
                                                </tr>
                                            </table>
                                        </div>
                                    </div>
                                    <div></div>
                                    <div>
                                        <div>
                                            <table width="90%">
                                                <tr>
                                                    <th>Noted By:</th>
                                                </tr>
                                                <tr>
                                                    <td style="width:20%;border-bottom: solid; text-align:center;">
                                                        <strong>{{$root.store.state.setting ?
                                                            $root.store.state.setting.dean : '' }}</strong>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td style="text-align:center;" class="blockquote-footer"><em>Dean,
                                                        ENGG</em></td>
                                                </tr>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </td>
                </tr>
                </tfoot>
                <tbody class="report-content">
                <tr>
                    <td colspan="12" class="report-content-cell">
                        <div style="margin: 18px;" class="main">
                            <table class="table table-striped">
                                <thead>
                                <tr>
                                    <th>NO.</th>
                                    <th>NAME OF STUDENTS</th>
                                    <th>PRELIM</th>
                                    <th>MIDTERM</th>
                                    <th>FINAL</th>
                                    <th>REMARKS</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr v-for="(student, index) in students">
                                    <td>{{index + 1}}</td>
                                    <td>{{student.student ? nameFormat(student.student): 'NO NAME' }}</td>
                                    <td></td>
                                    <td></td>
                                    <td>{{gradingSystemResult(index)}}</td>
                                    <td>{{student.remark}}</td>
                                </tr>

                                </tbody>
                            </table>
                        </div>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
<style>
    .column {
        float: left;
        width: 50%;
    }

    /* Clear floats after the columns */
    .row-1:after {
        content: "";
        display: table;
        clear: both;
    }
</style>
<script>
    export default {
        data(){
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
                conditional: false,
            }
        },
        beforeRouteEnter (to, from, next) {
            axios.get(`/api/${to.meta.url}/print/${to.params.id}`).then(function (response) {
                next(vm => vm.setData(response.data))
            }).catch(function () {
                next()
            })
        },
        beforeRouteUpdate (to, from, next) {
            var vm = this
            //this.users = this.links = this.meta = null
            axios.get(`/api/${to.meta.url}/print/${to.params.id}`).then(function (response) {
                vm.setData(response.data)
                next()
            }).catch(function () {
                next()
            })
        },
        computed: {
            summaryStudent(){
                var vm = this, students = vm.students;
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
            gradingSystemResult(i) {
                var vm = this,
                    dataResult =
                        _.parseInt(vm.students[i]["prelim"]) * 0.4 +
                        ((_.parseInt(vm.students[i]["midterm"]) +
                        _.parseInt(vm.students[i]["final"])) /
                        2) *
                        0.6;
                var gradeSystem = 0;
                vm.students[i]["result"] = _.clone(dataResult);
                if (_.parseInt(vm.students[i]["final"]) !== 0 && _.parseInt(vm.students[i]["ce"]) !== 0 && vm.conditional) {
                    dataResult = _.parseInt(vm.students[i]["final"]) * 0.3 + _.parseInt(vm.students[i]["ce"]) * 0.7;
                }
                if (
                    _.parseInt(vm.students[i]["prelim"]) !== 0 &&
                    _.parseInt(vm.students[i]["midterm"]) !== 0 &&
                    _.parseInt(vm.students[i]["final"]) !== 0 &&
                    vm.students[i]["remark"] !== "DROP" &&
                    vm.students[i]["remark"] !== "INC" &&
                    vm.students[i]["remark"] !== "AW/UW"
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
                        vm.students[i]["remark"] = "PASSED";
                    } else if (gradeSystem == 5) {
                        vm.students[i]["remark"] = "FAILED";
                    }
                } else if (
                    _.parseInt(vm.students[i]["prelim"]) == 0 ||
                    _.parseInt(vm.students[i]["midterm"]) == 0 ||
                    _.parseInt(vm.students[i]["final"]) == 0
                ) {
                    if (
                        vm.students[i]["remark"] !== "DROP" &&
                        vm.students[i]["remark"] !== "INC" &&
                        vm.students[i]["remark"] !== "AW/UW"
                    ) {
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
            dataResult(i) {
                var vm = this,
                    x = _.parseInt(vm.students[i]["prelim"]) * 0.4,
                    y =
                        ((_.parseInt(vm.students[i]["midtermPercentage"]) +
                        _.parseInt(vm.students[i]["finalPercentage"])) /
                        2) *
                        0.6;

                return _.parseInt(vm.students[i]["prelim"]) !== 0 &&
                _.parseInt(vm.students[i]["midtermPercentage"]) !== 0 &&
                _.parseInt(vm.students[i]["finalPercentage"]) !== 0
                    ? x + y
                    : 0;
            },
            cfgResult(i) {
                var vm = this;
                var cfg =
                    _.parseInt(vm.students[i]["final"]) * 0.3 +
                    _.parseInt(vm.students[i]["ce"]) * 0.7;
                vm.students[i]["cfgResult"] = cfg;
                return cfg;
            },
            midterm_m(index, object, midterm){
                var vm = this
                vm.students[index][object] = _.parseInt(midterm) <= _.parseInt(vm.schedule.items) ? (_.parseInt(midterm) / _.parseInt(vm.schedule.items)) * 50 + 50 : 0

                return vm.students[index][object]
            },
            final_m(index, object, final){
                var vm = this
                vm.students[index][object] = _.parseInt(final) <= _.parseInt(vm.schedule.items) ? (_.parseInt(final) / _.parseInt(vm.schedule.items)) * 50 + 50 : 0

                return vm.students[index][object]
            },
            nameFormat(student){
                var vm = this
                return student.last_name.toUpperCase() + ',' + vm.sentenceCase(student.first_name + ' ' + student.middle_name)
            },
            yearFormat(year){
                var vm = this,
                    sem = _.parseInt(year)
                return `${sem}-${sem + 1}`
            },
            sentenceCase (str) {
                if ((str === null) || (str === ''))
                    return false;
                else
                    str = str.toString();

                return str.replace(/\w\S*/g, function (txt) {
                    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
                });
            },
            setData(response){
                var vm = this
                vm.students = response.students
                vm.schedule = response.schedule
                for (var i = 0; i < vm.students.length; i++) {
                    vm.students[i]["result"] = vm.dataResult(i);
                    vm.students[i]["gradeEquivalent"] = vm.gradingSystemResult(i);
                    vm.students[i]["cfgResult"] = 0;
                    vm.students[i]["midtermPercentage"] = 0;
                    vm.students[i]["finalPercentage"] = 0;
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

            }
        }
    }
</script>

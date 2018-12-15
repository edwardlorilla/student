<template>
    <div class="row">
        <div class="col-md-6">
            <div class="row">
                <div class="col-md-6">
                    <div class="form-group">
                        <label  for="start_year">Start_Year</label>
                        <input required name="year" type="number" v-model="start_year" :min="start_year" class="form-control" id="start_year"
                               placeholder="Enter start year">
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="form-group">
                        <label for="end_year">End Year</label>
                        <input  disabled type="number" v-model="end_year_c" class="form-control" id="end_year"
                               placeholder="Enter end year">
                    </div>
                </div>
            </div>

            <div class="form-group">
                <label for="unit">Unit</label>
                <input required type="number" step="1.0" min="0" max="5" class="form-control" name="unit" id="unit"
                       placeholder="Enter Unit">
            </div>
            <div class="form-group">
                <label for="semester">Semester</label>
                <select class="form-control" name="semester" id="semester">
                    <option value="1">1st Semester</option>
                    <option value="2">2nd Semester</option>
                </select>
            </div>
        </div>

        <div class="col-md-6">
            <div class="form-group">
                <label>Course</label>
                <input type="hidden" name="course" :value="json_m(courseSelect)">
                <el-select
                        style="width: 100%;"
                        v-model="courseSelect"
                        filterable
                        remote
                        collapse-tags
                        reserve-keyword
                        placeholder="Please enter a keyword"
                        :remote-method="courseRemote"
                        :loading="loading">
                    <el-option
                            v-for="item in courseOption"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                    </el-option>
                </el-select>
            </div>
            <div class="form-group">
                <label>Section</label>
                <input type="hidden" name="section" :value="json_m(sectionSelect)">
                <el-select
                        style="width: 100%;"
                        v-model="sectionSelect"
                        filterable
                        remote
                        collapse-tags
                        reserve-keyword
                        placeholder="Please enter a keyword"
                        :remote-method="sectionRemote"
                        :loading="loading">
                    <el-option
                            v-for="item in sectionOption"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                    </el-option>
                </el-select>
            </div>
            <div class="form-group">
                <label>Subject</label>
                <input type="hidden" name="subject" :value="json_m(subjectSelect)">
                <el-select
                        style="width: 100%;"
                        v-model="subjectSelect"
                        filterable
                        remote
                        collapse-tags
                        reserve-keyword
                        placeholder="Please enter a keyword"
                        :remote-method="subjectRemote"
                        :loading="loading">
                    <el-option
                            v-for="item in subjectOption"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                    </el-option>
                </el-select>
            </div>

        </div>
        <div class="col-md-12">
            <hr class="style6">
        </div>
        <div class="col-md-12">
            <div class="row">
                <div class="col-md-6">
                    <div class="row">
                        <div class="col-md-6">
                            <div class="form-group">
                                <label for="start_time">Start Time</label>
                                <input type="time" v-model="start_time" class="form-control" id="start_time"
                                       placeholder="Enter Time">
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group">
                                <label for="end_time">End Time</label>
                                <input type="time" v-model="end_time" class="form-control" id="end_time"
                                       placeholder="Enter Time">
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-6">
                            <div class="form-group">
                                <label for="room">Room</label>
                                <input v-model="room_d" type="number" class="form-control" id="room"  placeholder="Enter Room">
                            </div>

                        </div>
                        <div class="col-md-6">
                            <div class="form-group">
                                <label for="day">Day</label>
                                <select  v-model="day_d" placeholder="Enter Day" id="day"  class="form-control">
                                    <option value="TTH" >TTH</option>
                                    <option value="MW" >MW</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div class="form-group">
                        <div  @click="add_time_m" class="btn btn-secondary">Add Time/Day</div>
                    </div>
                </div>
                <div class="col-md-6">
                    <table class="table table-condensed">
                        <thead>
                        <tr>
                            <th>Day</th>
                            <th>Start Time</th>
                            <th>End Time</th>
                            <th>Room</th>
                            <th>Action</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr v-for="obj in www">
                            <td>{{obj.day}}</td>
                            <td>{{obj.start_time}}</td>
                            <td>{{obj.end_time}}</td>
                            <td>{{obj.room}}</td>
                            <td><div class="btn btn-danger" @click="www.splice(www.indexOf(obj), 1)">Delete</div></td>
                        </tr>
                        </tbody>
                    </table>
                    <input type="hidden" name="www" :value="json_m(www)"/>
                </div>
            </div>


        </div>
        <div class="col-md-12">
            <hr class="style6">
        </div>
        <div class="col-md-6">
            <div class="form-group">
                <label>File input</label>
                <br>
                <vue-xlsx-table @on-select-file="handleSelectedFile">Import File</vue-xlsx-table>
            </div>
            <div v-for="obj in header" class="form-group">
                <label :for="obj">{{split_m(obj)}}</label>
                <input class="form-control" type="text" v-model="name[obj]">
            </div>
            <div class="form-group">
                <div  class="btn btn-info" @click="add_m">Add Student</div>
            </div>

        </div>
        <div class="col-md-6">
            <div class="form-group">
                <table class="table table-condensed">
                    <thead>
                    <tr>
                        <th v-for="obj in header">{{split_m(obj)}}</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="entry in body">
                        <td v-for="key in header">
                            {{entry[key]}}
                        </td>
                        <td><div class="btn btn-danger" @click="body.splice(body.indexOf(entry), 1)">Delete</div></td>

                    </tr>
                    </tbody>
                    <input type="hidden" name="student" :value="json_m(body)"/>
                </table>
            </div>
        </div>
    </div>
</template>
<script>
    export default{
        data(){
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
                    last_name: '',
                },
                header: ['first_name', 'middle_name', 'last_name'],
                body: []
            }
        },
        computed:{
            end_year_c(){
                return (_.parseInt(this.start_year) + 1).toString()
            }
        },
        methods: {
            sectionRemote(query) {
                var vm = this

                if (query !== '') {
                    vm.loading = true
                    axios.get('/api/sections/search?search=' + query).then(function (query) {
                        vm.sectionOption = query.data.map(item => {
                            vm.loading = false
                            return {value: item.id, label: item.name};
                        })
                    })
                } else {
                    vm.sectionOption = [];
                }
            },
            courseRemote(query) {
                var vm = this

                if (query !== '') {
                    vm.loading = true
                    axios.get('/api/courses/search?search=' + query).then(function (query) {
                        vm.courseOption = query.data.map(item => {
                            vm.loading = false
                            return {value: item.id, label: item.name};
                        })
                    })
                } else {
                    vm.courseOption = [];
                }
            },
            subjectRemote(query) {
                var vm = this

                if (query !== '') {
                    vm.loading = true
                    axios.get('/api/subjects/search?search=' + query).then(function (query) {
                        vm.subjectOption = query.data.map(item => {
                            vm.loading = false
                            return {value: item.id, label: item.name};
                        })
                    })
                } else {
                    vm.subjectOption = [];
                }
            },
            add_time_m(){
                var vm = this
                var www = {}
                www.day = vm.day_d
                www.start_time = vm.start_time
                www.end_time = vm.end_time
                www.room = vm.room_d
                vm.www.push(www)
            },
            add_m(){
                var vm = this
                vm.body.push(vm.name)
            },
            split_m(string){
                var split_array = _.split(string, '_')
                return `${_.capitalize(split_array[0])} ${_.capitalize(split_array[1])} `
            },
            json_m(parse){
                return JSON.stringify(parse)
            },
            handleSelectedFile (convertedData) {
                var vm = this
                vm.header = convertedData.header
                vm.body = convertedData.body
            }
        }
    }
</script>

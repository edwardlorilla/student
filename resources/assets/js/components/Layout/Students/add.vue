<template>
    <div class="container-fluid">
        <div class="card card-default">
            <div class="card-header">
                <h3 class="card-title">{{$route.meta.title}}</h3>
            </div>
            <div class="card-body">
                <form id="students" @submit.prevent="submit_m" ref="students">
                    <div class="row">
                        <div class="col-md-6">
                            <div class="form-group">
                                <input type="hidden" name="id" :value="$route.params.id ? $route.params.id : ''">
                                <label for="first_name">First Name</label>
                                <input v-model="edit_d.first_name" name="first_name" type="text" class="form-control"
                                       id="first_name" placeholder="Enter first name">
                            </div>
                            <div class="form-group">
                                <label for="middle_name">Middle Name</label>
                                <input v-model="edit_d.middle_name" name="middle_name" type="text" class="form-control"
                                       id="middle_name" placeholder="Enter middle name">
                            </div>
                            <div class="form-group">
                                <label for="last_name">Last Name</label>
                                <input v-model="edit_d.last_name" name="last_name" type="text" class="form-control"
                                       id="last_name" placeholder="Enter last name">
                            </div>
                        </div>
                    </div>
                </form>
            </div>
            <div class="card-footer">
                <button form="students" :disabled="disabled" class="btn btn-primary" type="submit">{{$route.params.id ?
                    'Edit' : 'Create New'}} Student
                </button>
            </div>
        </div>
    </div>
</template>
<script>
    export default{
        data(){
            return {
                edit_d: {
                    first_name: '',
                    middle_name: '',
                    last_name: ''
                },
                disabled: false
            }
        },
        beforeRouteEnter (to, from, next) {
            if (to.params.id) {
                axios.get(`/api/${to.meta.url}/${to.params.id}`).then(function (response) {
                    next(vm => vm.setData(response.data))
                })
            } else {
                next()
            }
        },
        beforeRouteUpdate (to, from, next) {
            var vm = this
            if (to.params.id) {
                axios.get(`/api/${to.meta.url}/${to.params.id}`).then(function (response) {
                    vm.setData(response.data)
                    next()
                })
            } else {
                next()
            }
        },
        methods: {
            setData(response){
                var vm = this
                vm.edit_d = response
            },
            submit_m(){
                var vm = this

                const formData = new FormData(vm.$refs.students);
                let jsonObject = {};

                for (const [key, value]  of formData.entries()) {
                    jsonObject[key] = value;
                }
                if ((jsonObject.course !== '""' && jsonObject.section !== '""' && jsonObject.student !== "[]" && jsonObject.subject !== '""' && jsonObject.unit !== "" && jsonObject.www !== "[]")) {
                    vm.disabled = true
                    axios({
                        method:  'post',
                        url: '/api/students/add' ,
                        data: vm.$route.params.id ? jsonObject : formData
                    }).then(function (response) {
                        vm.disabled = false
                        vm.$message({
                            showClose: true,
                            message: response.data,
                            type: 'success'
                        });
                    }).catch(function (error) {
                        vm.disabled = false
                        if (error) {
                            vm.$message({
                                showClose: true,
                                message: 'Something went wrong!',
                                type: 'error'
                            })
                        }

                    })
                } else {
                    vm.$message({
                        showClose: true,
                        message: 'Fill the required field!',
                        type: 'warning'
                    })
                }
            },
        }
    }
</script>
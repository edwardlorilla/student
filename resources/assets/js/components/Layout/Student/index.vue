<template>
    <div class="container-fluid">
        <div class="card card-default">
            <div class="card-header">
                <h3 class="card-title">{{$route.meta.title}}</h3>
            </div>
            <div class="card-body">
                <form id="students" @submit.prevent="submit_m" ref="students">
                    <router-view/>
                </form>
            </div>
            <div class="card-body">
                <button form="students" :disabled="disabled" class="btn btn-primary" type="submit">{{$route.params.id ? 'Edit' : 'Create New'}} Schedule</button>
            </div>
        </div>
    </div>
</template>
<style>
</style>
<script>
    export default{
        data(){
            return{
                disabled: false,
                errors: {},
            }
        },
        methods: {
            submit_m(){
                var vm = this

                const formData = new FormData(vm.$refs.students);
                let jsonObject = {};

                for (const [key, value]  of formData.entries()) {
                    jsonObject[key] = value;
                }

                if((jsonObject.course !== '""' && jsonObject.section !== '""' && jsonObject.student !== "[]" && jsonObject.subject !== '""' && jsonObject.unit !== "" && jsonObject.www !== "[]")) {
                    vm.disabled = true
                    axios({
                        method: vm.$route.params.id ? 'put' : 'post',
                        url: '/api/students' + (vm.$route.params.id ? '/' + vm.$route.params.id : '' ),
                        data: vm.$route.params.id ? jsonObject : formData
                    }).then(function (response) {
                        vm.errors = {}
                        vm.disabled = false
                        vm.$message({
                            showClose: true,
                            message: response.data,
                            type: 'success'
                        });
                    }).catch(function (error) {
                        vm.errors = {}
                        vm.disabled = false
                        if (error.response.data.errors) {
                            vm.errors = error.response.data.errors;
                        }
                        if(error.response.status === 500) {
                            vm.$message({
                                message: error.response.statusText,
                                type: 'warning'
                            });
                        }

                    })
                }else{
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

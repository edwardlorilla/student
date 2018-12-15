<template>
    <div class="container-fluid">
        <div class="card card-default">
            <div class="card-header">
                <h3 class="card-title">{{$route.meta.title}}</h3>
            </div>
            <div class="card-body">
                <form id="users" @submit.prevent="submit_m" ref="form">
                    <router-view :errors="errors" />
                </form>
            </div>
            <div class="card-body">
                <button form="users" class="btn btn-primary" type="submit">{{$route.params.id ? 'Edit' : 'Create New'}} User</button>
            </div>
        </div>
    </div>
</template>
<style>
</style>
<script>
    export default{
        data(){
            return {
                disabled: false,
                errors: {},
            }
        },
        methods: {
            submit_m(){
                var vm = this
                const formData = new FormData(vm.$refs.form);
                let jsonObject = {};
                for (const [key, value]  of formData.entries()) {
                    jsonObject[key] = value;
                }

                axios({
                    method: 'post',
                    url: '/api/users' ,
                    data:  formData
                }).then(function (response) {
                    vm.errors = {}
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
            },
        }
    }
</script>

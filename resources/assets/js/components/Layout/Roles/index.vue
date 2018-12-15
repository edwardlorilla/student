<template>
    <div class="container-fluid">
        <div class="card card-default">
            <div class="card-header">
                <h3 class="card-title">{{$route.meta.title}}</h3>
            </div>
            <div class="card-body">
                <form id="roles" @submit.prevent="submit_m" ref="role">
                    <router-view/>
                </form>
            </div>
            <div class="card-body">
                <button form="roles" class="btn btn-primary" type="submit">{{$route.params.id ? 'Edit' : 'Create New'}} Role</button>
            </div>
        </div>
    </div>
</template>
<style>
</style>
<script>
    export default{
        methods: {
            submit_m(){
                var vm = this
                const formData = new FormData(vm.$refs.role);
                let jsonObject = {};

                for (const [key, value]  of formData.entries()) {
                    jsonObject[key] = value;
                }
                axios({
                    method: vm.$route.params.id  ? 'put' : 'post',
                    url: '/api/roles' + (vm.$route.params.id ? '/' + vm.$route.params.id : '' ) ,
                    data:  vm.$route.params.id ? jsonObject : formData
                }).then(function (response) {
                    vm.$message({
                        showClose: true,
                        message: response.data,
                        type: 'success'
                    });
                }).catch(function (error) {
                    if (error) {
                        vm.$message({
                            showClose: true,
                            message: 'Something went wrong!',
                            type: 'error'
                        })
                    }

                })
            },
        }
    }
</script>

<template>
    <div class="row">
        <div class="col-md-6">
            <div class="form-group">
                <input type="hidden" name="id" :value="$route.params.id ? $route.params.id : ''">
                <label for="name">Name</label>
                <input v-model="edit_d.name" name="name" type="text" class="form-control"
                       id="name" placeholder="Enter Name">
            </div>
        </div>
    </div>
</template>
<script>
    export default{
        data(){
            return{
                edit_d:{
                    name: ''
                }
            }
        },
        beforeRouteEnter (to, from, next) {
            if(to.params.id) {
                axios.get(`/api/${to.meta.url}/${to.params.id}`).then(function (response) {
                    next(vm => vm.setData(response.data))
                })
            }else {
                next()
            }

        },
        beforeRouteUpdate (to, from, next) {
            if(to.params.id){
                axios.get(`/api/${to.meta.url}/${to.params.id}`).then(function (response) {
                    vm.setData(response.data)
                    next()
                })
            }else {
                next()
            }
        },
        methods:{
            setData(response){
                var vm = this
                vm.edit_d = response
            }
        }
    }
</script>

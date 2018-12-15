<template>
    <div class="row">
        <div class="col-md-12">
            <div  class="form-group">
                <label for="display_name" class="label">Name (Display Name)</label>
                <input v-model="edit_d.name" type="text" name="display_name" id="display_name" class="form-control">
            </div>
            <div  class="form-group">
                <label for="description" class="label">Description</label>
                <input v-model="edit_d.description" type="text" name="description" id="description" placeholder="Describe what this permission does"
                       class="form-control">
            </div>
        </div>

    </div>

</template>
<script>
    export default{
        data(){
            return {
                edit_d: {}
            }
        },
        beforeRouteEnter (to, from, next) {
            if (to.params.id) {
                axios.get(`/api/${to.meta.url}/${to.params.id}`).then(function (response) {
                    next(vm => vm.setData(response.data) )
                })
            } else {
                next()
            }
        },
        beforeRouteUpdate (to, from, next) {
            var vm = this
            if (to.params.id) {
                axios.get(`/api/${to.meta.url}${to.params.id ? '/' + to.params.id : ''}`).then(function (response) {
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
            }
        }
    }
</script>

<template>
    <div class="row">
        <div class="col-md-6">
            <div class="form-group">
                <label for="display_name">Name (Human Readable)</label>
                <input type="text" name="display_name" class="form-control" id="display_name">
            </div>
            <div class="form-group">
                <label for="name">Slug (Can not be changed)</label>
                <input type="text" name="name" class="form-control" id="name">
            </div>
            <div class="form-group">
                <label for="description">Description</label>
                <input type="text" name="description" class="form-control" id="description">
            </div>
        </div>
        <div class="col-md-6">
            <div id="form-group">
                <div class="form-check" v-for="permission in permissions">
                    <input v-model="selectedPermission" name="permissions[]" type="checkbox" class="form-check-input" :value="permission.id">
                    <label class="form-check-label" :for="permission.id">{{permission.display_name}}</label>
                </div>
            </div>
        </div>

    </div>
</template>
<script>
    export default{
        data(){
            return {
                permissions: [],
                role: {},
                selectedPermission: []
            }
        },
        beforeRouteEnter (to, from, next) {
            axios.get(`/api/${to.meta.url}${to.params.id ? '/' + to.params.id : ''}`).then(function (response) {
                next(vm => vm.setData(response.data))
            })
        },
        beforeRouteUpdate (to, from, next) {
            var vm = this
            axios.get(`/api/${to.meta.url}${to.params.id ? '/' + to.params.id : ''}`).then(function (response) {
                vm.setData(response.data)
                next()
            })
        },
        methods: {
            setData(response){
                var vm = this
                vm.permissions = response.permissions
                vm.role = response.role
                vm.selectedPermission = _.map(response.role.permissions, 'id')
            }
        }
    }
</script>

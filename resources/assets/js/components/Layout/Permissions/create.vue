<template>
        <div class="row">
            <div class="col-md-6">
                <div class="form-group">
                    <div class="form-check">
                        <input v-model="permissionType" class="form-check-input" type="radio" name="permission_type"
                               value="basic">
                        <label class="form-check-label">Basic Permission</label>
                    </div>
                    <div class="form-check">
                        <input v-model="permissionType" class="form-check-input" type="radio" name="permission_type"
                               value="crud">
                        <label class="form-check-label">CRUD Permission</label>
                    </div>
                </div>
                <div v-if="permissionType === 'basic'" class="form-group">
                    <label for="display_name" class="label">Name (Display Name)</label>
                    <input type="text" name="display_name" id="display_name" class="form-control">
                </div>
                <div v-if="permissionType === 'basic'" class="form-group">
                    <label for="display_name" class="label">Slug</label>
                    <input type="text" name="name" id="name" class="form-control">
                </div>
                <div v-if="permissionType === 'basic'" class="form-group">
                    <label for="display_name" class="label">Description</label>
                    <input type="text" name="description" id="description" placeholder="Describe what this permission does"
                           class="form-control">
                </div>
                <div v-if="permissionType === 'crud'" class="form-group">
                    <label for="display_name" class="label">Resource</label>
                    <input type="text" name="resource" v-model="resource" id="resource" placeholder="The name of the resource"
                           class="form-control">
                </div>
                <div class="form-group" v-if="permissionType == 'crud'">
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" name="crud_selected[]" v-model="crudSelected" value="create">
                        <label class="form-check-label">Create</label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" name="crud_selected[]" v-model="crudSelected" value="read">
                        <label class="form-check-label">Read</label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" name="crud_selected[]" v-model="crudSelected" value="update">
                        <label class="form-check-label">Update</label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" name="crud_selected[]" v-model="crudSelected" value="delete">
                        <label class="form-check-label">Delete</label>
                    </div>
                </div>
            </div>
            <div class="col-md-6">
                <div id="form-group">
                    <table v-if="resource.length >= 3 && crudSelected.length > 0" class="table table-bordered">
                        <thead>
                        <th>Name</th>
                        <th>Slug</th>
                        <th>Description</th>
                        </thead>
                        <tbody>
                        <tr v-for="item in crudSelected">
                            <td v-text="crudName(item)"></td>
                            <td v-text="crudSlug(item)"></td>
                            <td v-text="crudDescription(item)"></td>
                        </tr>
                        </tbody>
                    </table>
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
                permissionType: 'basic',
                resource: '',
                crudSelected: ['create', 'read', 'update', 'delete']
            }
        },
        methods: {

            crudName: function (item) {
                var vm = this
                return item.substr(0, 1).toUpperCase() + item.substr(1) + " " + vm.resource.substr(0, 1).toUpperCase() + vm.resource.substr(1);
            },
            crudSlug: function (item) {
                var vm = this
                return item.toLowerCase() + "-" + vm.resource.toLowerCase();
            },
            crudDescription: function (item) {
                var vm = this
                return "Allow a User to " + item.toUpperCase() + " a " + vm.resource.substr(0, 1).toUpperCase() + vm.resource.substr(1);
            }
        }

    }
</script>

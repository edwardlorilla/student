<template>
    <div class="row">
        <div class="col-md-6">
            <div class="form-group">
                <input type="hidden" name="id" :value="$route.params.id ? $route.params.id : ''">
                <label for="name">Email address</label>
                <input v-model="edit_d.email"
                       name="email"
                       type="text"
                       class="form-control"
                       id="email"
                       :class="errors.email ? 'is-invalid' : ''"
                       placeholder="Enter name">
                <span v-if="errors.email" v-for="error in errors.email" class="invalid-feedback" role="alert">
                                        <strong>{{ error }}</strong>
                                    </span>
            </div>

            <div class="form-group">
                <label for="name">Username</label>
                <input v-model="edit_d.name"
                       :class="errors.name ? 'is-invalid' : ''"
                       name="name" type="text" class="form-control" id="name" placeholder="Enter Username">
                <span v-if="errors.name" v-for="error in errors.name" class="invalid-feedback" role="alert">
                                        <strong>{{ error }}</strong>
                                    </span>
            </div>
            <div class="form-group">
                <label for="name">First Name</label>
                <input v-model="edit_d.first_name"
                       :class="errors.first_name ? 'is-invalid' : ''"
                       name="first_name" type="text" class="form-control" id="first_name"
                       placeholder="Enter First Name">
                <span v-if="errors.first_name" v-for="error in errors.first_name" class="invalid-feedback" role="alert">
                                        <strong>{{ error }}</strong>
                                    </span>
            </div>
            <div class="form-group">
                <label for="name">Middle Name</label>
                <input v-model="edit_d.middle_name"
                       :class="errors.middle_name ? 'is-invalid' : ''"
                       name="middle_name" type="text" class="form-control" id="middle_name"
                       placeholder="Enter Middle Name">
                <span v-if="errors.middle_name" v-for="error in errors.middle_name" class="invalid-feedback"
                      role="alert">
                                        <strong>{{ error }}</strong>
                                    </span>
            </div>
            <div class="form-group">
                <label for="name">Last Name</label>
                <input v-model="edit_d.last_name"
                       :class="errors.last_name ? 'is-invalid' : ''"
                       name="last_name" type="text" class="form-control" id="last_name"
                       placeholder="Enter Last Name">
                <span v-if="errors.last_name" v-for="error in errors.last_name" class="invalid-feedback" role="alert">
                                        <strong>{{ error }}</strong>
                                    </span>
            </div>

        </div>
        <div class="col-md-6">
            <input type="hidden" name="roles" :value="json_m(rolesSelect)">
            <div class="form-check">

                <div id="form-group" v-for="role in roles">
                    <div class="form-check">

                        <input type="checkbox" class="form-check-input" v-model="rolesSelect" :value="role.id">
                        <label class="form-check-label" :for="role.id">{{role.display_name}}</label>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default{
        props: [
            'errors'
        ],
        data(){
            return {
                edit_d: {
                    name: ''
                },
                roles: [],
                rolesSelect: []
            }
        },
        beforeRouteEnter (to, from, next) {
            axios.get(`/api/${to.meta.url}/${to.params.id ? to.params.id : 'create'}`).then(function (response) {
                next(vm => vm.setData(response.data))
            })
        },
        beforeRouteUpdate (to, from, next) {
            axios.get(`/api/${to.meta.url}/${to.params.id ? to.params.id : 'create'}`).then(function (response) {
                vm.setData(response.data)
                next()
            })
        },
        methods: {
            json_m(parse){
                return JSON.stringify(parse)
            },
            setData(response){
                var vm = this
                if (response.user) {
                    vm.edit_d = response.user
                }
                vm.roles = response.roles
                vm.rolesSelect = _.map(response.user.roles, 'id')
            }
        }
    }
</script>
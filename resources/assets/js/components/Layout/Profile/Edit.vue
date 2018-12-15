<template>
    <form @submit.prevent="edit_m" ref="form" class="form-horizontal">
        <div class="form-group">
            <label for="name" class="col-sm-2 control-label">Name</label>

            <div class="col-sm-10">
                <input v-model="edit_d.name" name="name" type="name" class="form-control" id="name"
                       placeholder="Name">
            </div>
        </div>

        <div class="form-group">
            <label for="email" class="col-sm-2 control-label">Email</label>

            <div class="col-sm-10">
                <input v-model="edit_d.email" name="email" type="email" class="form-control" id="email"
                       placeholder="Email">
            </div>
        </div>
        <div class="form-group">
            <label for="address" class="col-sm-2 control-label">Address</label>

            <div class="col-sm-10">
                <input v-model="edit_d.address" name="address" type="text" class="form-control"
                       id="address" placeholder="Address">
            </div>
        </div>
        <div class="form-group">
            <label for="phone" class="col-sm-2 control-label">Phone</label>

            <div class="col-sm-10">
                <input v-model="edit_d.phone" name="phone" type="number" class="form-control" id="phone"
                       placeholder="Phone">
            </div>
        </div>
        <div class="form-group">
            <div class="col-sm-offset-2 col-sm-10">
                <button type="submit" class="btn btn-danger">Submit</button>
            </div>
        </div>
    </form>
</template>
<script>
    export default{
        data(){
            return{
                edit_d: {}
            }
        },
        beforeRouteEnter (to, from, next) {
            axios.get(`/api/users/edit/${window.Laravel.userId}`).then(function (response) {
                next(vm => vm.setData(response.data))
            })
        },
        beforeRouteUpdate (to, from, next) {
            var vm = this
            axios.get(`/api/users/edit/${window.Laravel.userId}`).then(function (response) {
                vm.setData(response.data)
                next()
            })
        },
        methods: {
            setData(response){
                this.edit_d = response
            },
            edit_m(){
                var vm = this

                axios.post(`/api/users` , vm.edit_d).then(function (response) {
                    vm.$root.store.dispatch('userChange', response.data)
                })
            }
        }
    }

</script>

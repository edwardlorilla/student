<template>
    <form v-if="setting_d" ref="form" @submit.prevent="form_m" class="form-horizontal">
        <div class="form-group">
            <div class="text-center">
                <img class="profile-user-img img-fluid img-circle"
                     :src="$root.store.state.setting.photo ?  '/storage/images/' + $root.store.state.setting.photo.file : '/storage/AdminLTELogo.png'"
                     alt="avatar">
            </div>
        </div>
        <div class="form-group">
            <label for="inputName" class="col-sm-2 control-label">Name</label>

            <div class="col-sm-10">
                <input v-model="setting_d.name" type="text" class="form-control" name="name" placeholder="Name">
            </div>
        </div>
        <div class="form-group">
            <label for="upload" class="col-sm-2 control-label">Upload</label>
            <div class="col-sm-10">
                <div class="btn btn-primary yum-file">
                    Upload Logo
                    <input name="file" type="file">
                </div>
            </div>
        </div>
        <div class="form-group">
            <div class="col-sm-offset-2 col-sm-10">
                <input type="submit" class="btn btn-danger"/>
            </div>
        </div>
    </form>
</template>
<style>
    .yum-file {
        cursor: pointer;
        position: relative;
        overflow: hidden;
    }

    .yum-file input[type=file] {
        position: absolute;
        top: 0;
        right: 0;
        min-width: 100%;
        min-height: 100%;
        text-align: right;
        filter: alpha(opacity=0);
        opacity: 0;
        outline: none;
        cursor: inherit;
        display: block;
    }
</style>
<script>
    import UploadButton from './../UploadFile/UploadButton.vue'
    export default{
        components: {
            UploadButton
        },
        data(){
            return {
                setting_d: []
            }
        },
        beforeRouteEnter (to, from, next) {
            axios.get(`/api/settings/1`).then(function (response) {
                next(vm => vm.setData(response.data))
            })
        },
        beforeRouteUpdate (to, from, next) {
            var vm = this
            axios.get(`/api/settings/1`).then(function (response) {
                vm.setData(response.data)
                next()
            })
        },
        methods: {

            setData(response){
                this.setting_d = response
            },
            form_m(){
                var vm = this
                var formdata = new FormData(vm.$refs.form);
                axios.post('/api/settings', formdata).then(function (response) {
                    vm.$root.store.dispatch('settingChange', response.data)
                })
            }
        },

    }
</script>

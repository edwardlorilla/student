<template>
    <form ref="form" method="post" enctype="multipart/form-data">
        <div style="margin-top: 10px" class="btn btn-primary jbtn-file">
            {{ title }}
            <input ref="inputFile"
                   type="file"
                   :name="nameupload"
                   :multiple="multipleupload"
                   v-on:input="fileSelected">
        </div>
    </form>

</template>

<script>
    export default {
        name: 'upload-button',
        props: {
            selectedCallback: Function,
            title: String,
            multipleupload: {
                type: Boolean,
                default: false
            },
            api: String,
            nameupload: String
        },
        methods: {
            fileSelected(e) {
                var vm = this;
                var form = new FormData();
                form.append('file', e.target.files[0])
                form.append('_id', vm.$root.store.state.user.id)

                if(vm.$root.store.state.user.photo){
                    form.append('photo', _.toString(vm.$root.store.state.user.photo.file))
                    form.append('photo_id', _.toString(vm.$root.store.state.user.photo.id))
                }
                axios.post(vm.api, form).then(function (response) {
                    vm.$root.store.state.user.photo = response.data
                }).catch(function (error) {
                    console.log(error)
                });
            }
        }
    }
</script>

<style scoped>
    .jbtn-file {
        cursor: pointer;
        position: relative;
        overflow: hidden;
    }

    .jbtn-file input[type=file] {
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
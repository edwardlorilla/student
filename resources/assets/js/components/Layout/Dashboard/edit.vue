<template>
    <div v-if="isEdit" style="margin-top: 15px;">
        <input  type="number" class="form-control" :disabled="isDisabled" :placeholder="'Please input ' + name" v-model="edit_"
                @keyup.tab="update" @keyup.enter="update" @keyup.esc="isEdit =! isEdit" />
    </div>
    <span @dblclick="isEdit =!isEdit;" v-else>
        <el-button type="text" ><abbr :title="'Change ' +  name">{{scopeModel}}</abbr></el-button>
    </span>
</template>
<script>
    export default{
        props: ['scopeModel', 'name', 'url', 'valueObject'],
        data(){
            return {
                edit_: null,
                isEdit: false,
                isDisabled: false
            }
        },
        mounted(){
            var vm = this
            vm.edit_ = _.clone(vm.scopeModel)
        },
        methods: {
            update(){

                var vm = this

                vm.isDisabled = true
                var edit = {}
                edit[vm.valueObject] = vm.edit_
                axios.put(vm.url, edit).then(function (response) {
                    vm.$emit('update', vm.edit_)
                    vm.isDisabled = false
                    vm.isEdit = false
                }).catch(function (response) {
                    vm.isDisabled = false
                    vm.isEdit = false
                    vm.$emit('update', vm.scopeModel)
                })

            },
        }
    }
</script>

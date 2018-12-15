<template>
    <el-popover
            placement="top"
            v-model="isEdit">
        <select v-model="edit_" class="form-control" name="remark" id="remark">
            <option value="">NONE</option>
            <option value="DROP">DROP</option>
            <option value="INC">INC</option>
            <option value="AW/UW">AW/UW</option>
        </select>

        <div style="text-align: right; margin: 0">
            <el-button-group style="margin-top: 15px;">
                <el-button size="mini" type="primary" @click="update">Change Remark</el-button>
                <el-button size="mini "@click="isEdit =! isEdit">Cancel</el-button>
            </el-button-group>
        </div>
        <el-button type="text" @dblclick="isEdit =!isEdit;" slot="reference">{{scopeModel ? scopeModel : '---------'}}</el-button>
    </el-popover>
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

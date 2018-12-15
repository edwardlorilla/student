<template>
    <form @submit.prevent="changePassword_m" ref="form" class="form-horizontal">
        <div class="form-group">
            <label for="old_password" class="control-label">Old Password</label>

            <div class="col-sm-10">
                <input name="old_password" type="password" class="form-control" id="old_password" placeholder="Password">
            </div>
        </div>
        <div class="form-group">
            <label for="new_password" class="control-label">New Password</label>

            <div class="col-sm-10">
                <input name="new_password" type="password" class="form-control" id="new_password" placeholder="Password">
            </div>
        </div>
        <div class="form-group">
            <label for="confirm" class="control-label">Confirm Password</label>

            <div class="col-sm-10">
                <input name="confirm_password" type="password" class="form-control" id="confirm"
                       placeholder="Confirm Password">
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
    methods:{
        changePassword_m(){
            var vm = this
            const formData = new FormData(vm.$refs.form);
            let jsonObject = {};

            for (const [key, value]  of formData.entries()) {
                jsonObject[key] = value;
            }
            axios.put(`/api/users/${window.Laravel.userId}`, jsonObject).then(function (response) {
            })
        }
    }
}
</script>

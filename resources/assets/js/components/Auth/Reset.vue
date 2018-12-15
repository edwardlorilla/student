<template>
    <transition name="fade">
        <div v-if="show" class="login-box">
            <pre-loader/>
            <div class="card">
                <div class="card-body login-card-body">
                    <p class="login-box-msg">Reset your password?</p>

                    <form @submit.prevent="reset">
                        <div class="form-group has-feedback">
                            <label for="email">Email address</label>
                            <input id="email" v-model="credential.email" type="email" class="form-control"
                                   :class="errors.message ? 'is-invalid' : ''" placeholder="Email">
                            <span v-if="errors.message" v-for="error in errors.message" class="invalid-feedback" role="alert">
                                        <strong>{{ error }}</strong>
                                    </span>
                        </div>
                        <div class="row">
                            <div class="col-4">
                                <button type="submit" :disabled="isDisabled" class="btn btn-primary btn-block btn-flat">Reset</button>
                            </div>
                        </div>
                    </form>
                    <p class="mb-1">
                        <a href="/login">Go back to login</a>
                    </p>
                </div>
                <!-- /.login-card-body -->
            </div>
        </div>
    </transition>
</template>
<style>
    @import url('./../../../libs/font-awesome/css/font-awesome.min.css');
    @import url('~element-ui/lib/theme-chalk/index.css');
    @import url('./../../../libs/admin-lte/adminlte.min.css');
    @import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700');
    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s;

    }
    .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */
    {

        opacity: 0;
    }
    .transform {
        -webkit-transition: all 2s ease;
        -moz-transition: all 2s ease;
        -o-transition: all 2s ease;
        -ms-transition: all 2s ease;
        transition: all 2s ease;
    }
    .transform-active {
        background-color: #ffffff;
    }
</style>
<script>
    export default{
        data(){
            return {
                errors: {},
                credential: {
                    email: '',
                },
                show: true,
                isDisabled: false,
                setting_d: {name: ''}
            }
        },
        methods: {
            reset(){
                let vm = this
                vm.errors = ''
                vm.isDisabled = true
                axios.post('/password/email', vm.credential).then(function () {
                    window.location.href = window.location.href;
                    vm.show = false
                    $('.transform').toggleClass('transform-active');
                }).catch(function (error) {
                    vm.errors = {}
                    vm.isDisabled = false
                    if(error.response.data.errors){
                        vm.errors = error.response.data.errors;
                    }
                    if(error.response.status === 500) {
                        vm.$message({
                            message: error.response.statusText,
                            type: 'warning'
                        });
                    }
                })
            }
        }
    }
</script>

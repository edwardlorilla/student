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
                                   :class="errors.email ? 'is-invalid' : ''" placeholder="Email">
                            <span v-if="errors.email" v-for="error in errors.email" class="invalid-feedback" role="alert">
                                        <strong>{{ error }}</strong>
                                    </span>
                        </div>
                        <div class="form-group has-feedback">
                            <label for="password">Password</label>
                            <input id="password" v-model="credential.password" type="password" class="form-control"
                                   :class="errors.password ? 'is-invalid' : ''" placeholder="Email">
                            <span v-if="errors.password" v-for="error in errors.password" class="invalid-feedback" role="alert">
                                        <strong>{{ error }}</strong>
                                    </span>
                        </div>
                        <div class="form-group has-feedback">
                            <label for="password-confirm">Confirm Password</label>
                            <input id="password-confirm" v-model="credential.password_confirmation" type="password" class="form-control"
                                   :class="errors.password_confirmation ? 'is-invalid' : ''">
                            <span v-if="errors.password_confirmation" v-for="error in errors.password_confirmation" class="invalid-feedback" role="alert">
                                        <strong>{{ error }}</strong>
                                    </span>
                        </div>

                        <div class="row">
                            <div class="col-4">
                                <button type="submit" :disabled="isDisabled" class="btn btn-primary btn-block btn-flat">Reset</button>
                            </div>
                            <div class="col-8">
                                <a href="/login">Go back to login</a>
                            </div>
                        </div>
                    </form>
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
                    password: '',
                    password_confirmation: '',
                    token:''
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
                vm.credential.token = location.pathname.split('/')[location.pathname.split('/').length-1]
                axios.post('/password/reset', vm.credential).then(function (response) {
                    console.log(response)
                    window.location.href = window.location.href
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

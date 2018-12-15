/**
* Created by Edward Lance Lorilla on 7/5/2018.
*/
try {
    window.$ = window.jQuery = require('jquery');
    require('bootstrap');
} catch (e) {}
window.axios = require('axios');

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

let token = document.head.querySelector('meta[name="csrf-token"]');

if (token) {
    window.axios.defaults.headers.common['X-CSRF-TOKEN'] = token.content;
} else {
    console.error('CSRF token not found: https://laravel.com/docs/csrf#csrf-x-csrf-token');
}

window.Vue = require('vue')
import {Message } from 'element-ui';
Vue.component('pre-loader', require('./components/Utilities/Preloader.vue'));
Vue.prototype.$message = Message;
new Vue({
render: h => h(require('./components/Auth/Login.vue'))
}).$mount('#login');
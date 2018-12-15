require('./bootstrap');

window.Vue = require('vue')
import NProgress from 'nprogress';
import ElementUI from 'element-ui';
import lang from 'element-ui/lib/locale/lang/en'
import locale from 'element-ui/lib/locale'
import VueDataTables from 'vue-data-tables'
import Auth from './components/Plugin/Auth'
import VueRouter from 'vue-router'
import vueXlsxTable from './components/Layout/XLSX/index'
import Print from 'vue-print-nb'
Vue.use(Print);
Vue.use(vueXlsxTable, {rABS: false})
Vue.use(ElementUI);
locale.use(lang)
Vue.use(VueDataTables)
Vue.use(VueRouter)

Vue.use(Auth);
Vue.component('pre-loader', require('./components/Utilities/Preloader.vue'));
const router = new VueRouter({
    mode: 'history',
    base: '/dashboard',
    routes: [
        {
            path: "/:model(users*|sections*|students*|subjects*|permissions*|courses*|roles*)",
            component: resolve => {
                require.ensure(["./components/Layout/Table/Grid.vue"], () => {
                    resolve(require("./components/Layout/Table/Grid.vue"))
                })
            },
            meta: {roles: ['superadministrator', 'faculty']},
            name: "model.index"
        },
        {
            path: "/roles",
            component:  resolve => require(["./components/Layout/Roles/index.vue"], resolve),
            meta: {title: 'Role'},
            children: [
                {
                    path: "create",
                    component:  resolve => require(["./components/Layout/Roles/create.vue"], resolve),
                    name: "roles.create",
                    meta: {title: 'Create New Role', url: 'roles'}
                },
                {
                    path: "edit/:id",
                    component:  resolve => require(["./components/Layout/Roles/edit.vue"], resolve),
                    name: "roles.edit",
                    meta: {title: 'Edit Role', url: 'roles'   }
                },
            ]
        },{
            path: "/users",
            component:  resolve => require(["./components/Layout/Users/index.vue"], resolve),
            meta: {title: 'Users'},
            children: [
                {
                    path: "create",
                    component:  resolve => require(["./components/Layout/Users/operation.vue"], resolve),
                    name: "users.create",
                    meta: {title: 'Create New User', url: 'users'}
                },
                {
                    path: "edit/:id",
                    component:  resolve => require(["./components/Layout/Users/operation.vue"], resolve),
                    name: "users.edit",
                    meta: {title: 'Edit User', url: 'users'   }
                },
            ]
        },{
            path: "/courses",
            component:  resolve => require(["./components/Layout/Courses/index.vue"], resolve),
            meta: {title: 'Course'},
            children: [
                {
                    path: "create",
                    component:  resolve => require(["./components/Layout/Courses/operation.vue"], resolve),
                    name: "courses.create",
                    meta: {title: 'Create New Course', url: 'courses'}
                },
                {
                    path: "edit/:id",
                    component:  resolve => require(["./components/Layout/Courses/operation.vue"], resolve),
                    name: "courses.edit",
                    meta: {title: 'Edit Course', url: 'courses'   }
                },
            ]
        },{
            path: "/sections",
            component:  resolve => require(["./components/Layout/Sections/index.vue"], resolve),
            meta: {title: 'Section'},
            children: [
                {
                    path: "create",
                    component:  resolve => require(["./components/Layout/Sections/operation.vue"], resolve),
                    name: "sections.create",
                    meta: {title: 'Create New Section', url: 'sections'}
                },
                {
                    path: "edit/:id",
                    component:  resolve => require(["./components/Layout/Sections/operation.vue"], resolve),
                    name: "sections.edit",
                    meta: {title: 'Edit Section', url: 'sections'   }
                },
            ]
        },{
            path: "/students",
            component:  resolve => require(["./components/Layout/Student/index.vue"], resolve),
            meta: {title: 'Students'},
            children: [
                {
                    path: "create",
                    component:  resolve => require(["./components/Layout/Student/create.vue"], resolve),
                    name: "schedules.create",
                    meta: {title: 'Create New Students', url: 'students'}
                },
                {
                    path: "edit/:id",
                    component:  resolve => require(["./components/Layout/Student/edit.vue"], resolve),
                    name: "students.edit",
                    meta: {title: 'Edit Students', url: 'students'   }
                },
            ]
        },
        {
            path: "/students/add/:id",
            component:  resolve => require(["./components/Layout/Students/add.vue"], resolve),
            name: "students.create",
            meta: {title: 'Add New Students', url: 'students'}
        },
        {
            path: "/permissions",
            component:  resolve => require(["./components/Layout/Permissions/index.vue"], resolve),
            meta: {title: 'Permission'},
            children: [
                {
                    path: "create",
                    component:  resolve => require(["./components/Layout/Permissions/create.vue"], resolve),
                    name: "permissions.create",
                    meta: {title: 'Create New Permission'}
                },
                {
                    path: "edit/:id",
                    component:  resolve => require(["./components/Layout/Permissions/edit.vue"], resolve),
                    name: "permissions.edit",
                    meta: {title: 'Edit Permission', 'url': 'permissions'   }
                },
            ]
        },
        {
            path: "/",
            component: resolve => {
                require.ensure(["./components/Layout/Dashboard/wrapper.vue"], () => {
                    resolve(require("./components/Layout/Dashboard/wrapper.vue"))
                })
            },
            meta: {title: 'Dashboard'},
            children:[
                {
                    path: '',
                    component:  resolve => require(["./components/Layout/Dashboard/index.vue"], resolve),
                    meta: {title: 'Schedules', 'url': 'schedules'   },
                    name: "schedules.index",
                },
                {
                    path: 'view/:id',
                    component:  resolve => require(["./components/Layout/Dashboard/show.vue"], resolve),
                    meta: {title: 'Enrolled Students', 'url': 'schedules'   },
                    name: "schedules.view",
                },
                {
                    path: 'print/:id',
                    component:  resolve => require(["./components/Layout/Dashboard/print.vue"], resolve),
                    meta: {title: 'Print Report of Grades', 'url': 'schedules'   },
                    name: "schedules.print",
                },
            ]
        },
        {
            path: "/profile",
            component: resolve => {
                require.ensure(["./components/Layout/Profile/Profile.vue"], () => {
                    resolve(require("./components/Layout/Profile/Profile.vue"))
                })
            },
            name: "profile.index",
            meta: {title: 'Profile'},
            children: [
                {
                    path: "edit",
                    component: resolve => {
                        require.ensure(["./components/Layout/Profile/Edit.vue"], () => {
                            resolve(require("./components/Layout/Profile/Edit.vue"))
                        })
                    },
                    name: "profile.edit",
                },
                {
                    path: "change-password",
                    component: resolve => {
                        require.ensure(["./components/Layout/Profile/ChangePassword.vue"], () => {
                            resolve(require("./components/Layout/Profile/ChangePassword.vue"))
                        })
                    },
                    name: "change.password"
                },
                {
                    path: "settings",
                    component: resolve => {
                        require.ensure(["./components/Layout/Profile/Setting.vue"], () => {
                            resolve(require("./components/Layout/Profile/Setting.vue"))
                        })
                    },
                    name: "setting.index"
                }
            ]
        },
        {path: '*', name: 'error.not-found', component: require('./components/Layout/Errors/404.vue')},
    ]
});
router.beforeResolve((to, from, next) => {
    if (to.path) {
        NProgress.start()
    }
    next()
});
router.beforeEach((to, from, next) => {
    if (to.params.model) {
        to.meta.url = to.params.model
        to.meta.title = _.startCase(to.params.model)
    }
    var isAuth = false
    if (to.meta.roles) {
        _.forEach(to.meta.roles, function (select) {
            if (window.Laravel.roles.indexOf(select) !== -1) {
                isAuth = true
                next()
            }
        });
        if (!isAuth) {
            next(false)
        }
    } else {
        next()
    }
});
router.afterEach(() => {
    NProgress.done()
});
const app = new Vue({
    router,
    data(){
        return {
            store: {
                state: {
                    roles:{},
                    user: {},
                    setting: {},
                    loading: false
                },
                mutations: {
                    userChange(state, data){
                        _.merge(state.user, data)
                    },
                    settingChange(state, data){
                        state.setting = data
                    },
                    loadingChange(state, data){
                        state.loading = data
                    }
                },
                dispatch(mutation, data = {}){
                    this.mutations[mutation](this.state, data)
                }
            }
        }
    },
    mounted(){
        var vm = this,
            roles = window.Laravel.roles;
        axios.get('/api/user').then(function (response) {
            vm.store.state.user = response.data.user
            vm.store.state.setting = response.data.setting
        }).catch(function (err) {

        })
        for (var i = 0; i < roles.length; i++) {
            vm.store.state.roles[roles[i]] = true;
        }

    },
    methods:{
        clock(twentyFourHour) {
            var now = twentyFourHour.split(':');
            var TwentyFourHour = now[0];
            var hour = now[0];
            var min = now[1];
            var mid = ' PM';
            if (min < 10) {
                min = "0" + min;
            }
            if (hour > 12) {
                hour = hour - 12;
            }
            if (hour == 0) {
                hour = 12;
            }
            if (TwentyFourHour < 12) {
                mid = ' AM';
            }
            return hour + ':' + min + mid;
        },
    },
    render: h => h(require('./components/App.vue'))
}).$mount('#app');

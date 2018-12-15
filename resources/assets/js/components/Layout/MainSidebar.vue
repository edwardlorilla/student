<template>
    <aside class="main-sidebar sidebar-dark-primary elevation-4">
        <!-- Brand Logo -->
        <router-link class="brand-link" :to="{name: 'schedules.index'}">
            <div class="text-center" style="margin-bottom: 8px;">
                <img class="profile-user-img img-fluid img-circle"
                     :src="  $root.store.state.setting.photo ?   '/storage/images/' + $root.store.state.setting.photo.file : '/storage/AdminLTELogo_logo.png'"
                     alt="AdminLTE Logo" style="opacity: 0.8;width: 51px;">
            </div>
            <div class="brand-text text-center"><p
                    style="margin: 0 auto;max-width: 300px;padding: 12px;overflow-wrap: break-word;white-space: pre-wrap;hyphens: auto;">{{$root.store.state.setting.name}}</p></div>
        </router-link>

        <!-- Sidebar -->
        <div class="sidebar">
            <!-- Sidebar user panel (optional) -->
            <div v-if="$root.store.state.user.name" class="user-panel mt-3 pb-3 mb-3 d-flex">
                <div class="image">
                    <img :src="$root.store.state.user.photo ? '/storage/images/' + $root.store.state.user.photo.file : '/storage/avatar.png'"
                         class="img-circle elevation-2" alt="User Image">
                </div>
                <div class="info">
                    <router-link class="d-block" :to="{name: 'profile.edit'}">{{$root.store.state.user.name}}
                    </router-link>
                </div>
            </div>

            <!-- Sidebar Menu -->
            <nav class="mt-2">
                <ul class="nav nav-pills nav-sidebar flex-column">
                    <li v-for="route in filterRoute" class="nav-item">
                        <router-link class="nav-link"
                                     :to="route.to">
                            <i class="fa  nav-icon" :class="route.icon ? route.icon : 'fa-circle-o' "></i>
                            <p>{{route.name}}</p>
                        </router-link>
                    </li>
                </ul>
            </nav>
        </div>
    </aside>
</template>
<script>
    export default {
        computed: {
            filterRoute(){
                var vm = this,
                    routes = [
                        {
                            to: '/',
                            name: 'Dashboard',
                            icon: 'fa-dashboard ',
                            roles: ['superadministrator', 'faculty', 'checker']
                        },{
                            to: '/users',
                            name: 'Users',
                            icon: 'fa-users ',
                            roles: ['superadministrator']
                        },
                        {
                            to: '/students',
                            name: 'Students',
                            icon: 'fa-vcard ',
                            roles: ['superadministrator']
                        },
                        {
                            to: '/subjects',
                            name: 'Subjects',
                            icon: 'fa-book ',
                            roles: ['superadministrator', 'faculty']
                        },{
                            to: '/sections',
                            name: 'Sections',
                            icon: 'fa-th-large ',
                            roles: ['superadministrator', 'faculty']
                        },
                        {
                            to: '/permissions',
                            name: 'Permissions',
                            icon: 'fa-lock ',
                            roles: ['superadministrator']
                        },
                        {
                            to: '/roles',
                            name: 'Roles',
                            icon: 'fa-tasks ',
                            roles: ['superadministrator']
                        },
                        {
                            to: '/courses',
                            name: 'Courses',
                            icon: 'fa-tags',
                            roles: ['superadministrator', 'faculty']
                        },
                    ],
                    selectedFilter = _.map(routes, function (select) {
                        var filter = _.filter(select.roles, function (role) {
                            return window.Laravel.roles.indexOf(role) !== -1
                        })
                        return !_.isEmpty(filter) ? select : null
                    });
                return _.compact(selectedFilter)
            }
        }
    }
</script>
<template>
    <div id="app"  v-loading="$root.store.state.loading" class="wrapper">
        <pre-loader/>
        <navigation/>
        <main-sidebar/>
        <main-content>
            <router-view />
        </main-content>
        <control-sidebar/>
        <!--<main-footer/>-->
    </div>
</template>
<script>
    import Navigation from './Navigation.vue'
    import MainSidebar from './MainSidebar.vue'
    import MainContent from './MainContent.vue'
    import ControlSidebar from './ControlSidebar.vue'
//    import MainFooter from './MainFooter.vue'
    export default{
        components:{
            Navigation,
            MainSidebar,
            MainContent,
            ControlSidebar,
        },
    }
</script>

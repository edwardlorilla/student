<style src="element-ui/lib/theme-chalk/index.css"></style>

<style>
    @import url('./../../libs/font-awesome/css/font-awesome.min.css');
    @import url('./../../libs/admin-lte/adminlte.min.css');
    @import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700');

</style>
<style src="nprogress/nprogress.css"></style>
<script>
    import './../../libs/admin-lte/adminlte.min.js';
    import Main from './Layout/Wrapper.vue';
    export default {
        components:{
            Main,
        },
        render: h => h(Main)
    }
</script>
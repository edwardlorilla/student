<template>
    <div class="content-wrapper">
        <content-header />
        <div class="content">
            <div class="container-fluid">
                <slot></slot>
            </div>
        </div>
    </div>
</template>
<script>
    import ContentHeader from './ContentHeader.vue'
    export default {
        components: {ContentHeader}
    }
</script>
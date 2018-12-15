<template>
    <div class="preloader">
        <div class="loader_img"><img src="./../../../images/loader.gif" alt="loading..." height="64" width="64"></div>
    </div>
</template>
<style>
    .preloader {
        position: fixed;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        z-index: 100000;
        backface-visibility: hidden;
        background: #ffffff;
    }
    .loader_img {
        width: 50px;
        height: 50px;
        position: absolute;
        left: 50%;
        top: 50%;
        background-position: center;
        margin: -25px 0 0 -25px;
    }

</style>
<script>
    $(document).ready(function () {
        $(window).on('load', function () {
            $('.preloader img').fadeOut();
            $('.preloader').fadeOut();
        });
    });
</script>

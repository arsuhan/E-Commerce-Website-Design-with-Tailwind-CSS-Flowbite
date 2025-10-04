<template>

    <Layout>
        <div class="container mx-auto  mt-5">
            <Breadcrumb />
        </div>
        <div class="container mx-auto">
            <Title />
        </div>
        <div class="container mx-auto">
            <Filtter />
        </div>
        <div class="container mx-auto">
            <Gallery />
        </div>
    </Layout>

</template>

<script setup>
import Layout from '../Layout/Layout.vue';
import Breadcrumb from '../Products/Breadcrumb.vue';
import Title from '../Products/Title.vue';
import Filtter from '../Products/Filtter.vue';
import Gallery from '../Products/Gallery.vue';
</script>
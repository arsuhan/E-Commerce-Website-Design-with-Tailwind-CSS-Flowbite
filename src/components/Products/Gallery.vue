<script setup>

import { reactive } from 'vue';
import GridCard from './Components/GridCard.vue';

    const state = reactive({
        data1 : [
            {
            id : 1,
            name: 'Medicin',
            price: 200,
            img: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg"
        },
        {
            id : 2,
            name: 'Nike Shose',
            price: 1550,
            img: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg"
        },
        {
            id : 3,
            name: 'Black Beg',
            price: 850,
            img: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg"
        },
        {
            id : 4,
            name: 'Pin Pop',
            price: 300,
            img: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg"
        },
        {
            id : 5,
            name: 'Night Light',
            price: 600,
            img: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-8.jpg"
        },
        {
            id : 6,
            name: 'I-phon Cherger',
            price: 1250,
            img: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-9.jpg"
        },
        {
            id : 7,
            name: 'Game Remote',
            price: 750,
            img: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-10.jpg"
        },
        {
            id : 8,
            name: 'Women Beg',
            price: 500,
            img: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-11.jpg"
        },
        {
            id : 9,
            name: 'Medicin',
            price: 200,
            img: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg"
        },
        {
            id : 10,
            name: 'Nike Shose',
            price: 1550,
            img: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg"
        },
        {
            id : 4,
            name: 'Pin Pop',
            price: 300,
            img: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg"
        },
        {
            id : 5,
            name: 'Night Light',
            price: 600,
            img: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-8.jpg"
        },
    ]
    })

</script>

<template>
    

<div class="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
    <GridCard :Product-Data="state.data1" />
</div>

</template>
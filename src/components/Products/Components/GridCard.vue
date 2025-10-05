<script setup>
// import { stringify } from 'querystring';
import { ref } from 'vue';

import PreviewModal from './PreviewModal.vue';

const props = defineProps(['ProductData'])

const addProduct = (product) => {
    console.log('addProduct', product);
}

// const addProduct = () => {
//     // console.log('addProduct', product);
//         const sessionProduct = JSON.parse(sessionStorage.getItem('addProduct')) || []
//         if (sessionProduct.length > 0) {
//             sessionProduct.push(props.data)
//             sessionStorage.setItem('addToCart',JSON.stringify([sessionProduct]))
            
//         } else {
//             sessionStorage.setItem('addToCart',JSON.stringify([props.data]))

//         }
// }

</script>

<template>
    <div v-for="data in ProductData" :key="data">
        <img class="h-auto max-w-full rounded-lg" :src="data.img" alt="">
        <p class="font-bold text-xl pt-2">{{ data.name }}</p>
        <div class="flex pt-2 justify-between">
            <p class="font-semibold">$ {{ data.price }}</p>
            <button type="button" class="text-white bg-gradient-to-br cursor-pointer from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2 text-center me-2 mb-2">Buy Now</button>
            <PreviewModal :data="data" />
        </div>
    </div>
    
</template>
<script setup>

defineProps(['ProductData'])

const addProduct = (product) => {
    console.log('addProduct', product);
}

</script>

<template>
    <div v-for="data in ProductData" :key="data">
        <img class="h-auto max-w-full rounded-lg" :src="data.img" alt="">
        <p class="font-bold text-xl pt-2">{{ data.name }}</p>
        <div class="flex pt-2 justify-between">
            <p class="font-semibold">$ {{ data.price }}</p>
            <button @click="addProduct(product)" type="button" class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2 text-center me-2 mb-2">Buy Now</button>
        </div>
    </div>
</template>
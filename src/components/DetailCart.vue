<template>
    <div class="flex flex-col md:flex-row justify-between items-center w-full px-5 py-2 mt-4">
        <div class="flex w-full">
            <img :src="'/src/assets/img/' + produk.gambar" class="h-32 w-36 mr-4 border-[.5px] border-black/10" alt="" srcset="">
            <div class="flex flex-col justify-center text-left items-center">
                <div class="text-2xl font-bold w-full">{{ produk.nmProduk }}</div>
                <div class="text-lg font-semibold mt-2 w-full">Rp. {{ mixin.formatRupiah(produk.harga) }}</div>
            </div>
        </div>
        <div class="flex justify-between md:justify-around w-full mt-3 md:mt-0">
            <div class="flex mr-2 lg:mr-0">
                <button @click="emit('decrest', produk._id)" :class="produk.qty == 1 ? 'bg-green-400/80' : 'bg-green-500/80' " class="flex items-center decrest bg-green-500/80 focus:outline-none text-white font-bold tracking-widest text-center shadow-sm py-1 px-3 w-full" :disabled="produk.qty == 1">-</button>
                <input class="text-center border-[1px] w-40 sm:w-auto focus:outline-none border-black/20 px-2" type="text" name="qty" :value="produk.qty" readonly>
                <button @click="emit('increst', produk._id)" class="flex items-center increst bg-green-500/80 focus:outline-none text-white font-bold tracking-widest text-center shadow-sm py-1 px-3 w-full">+</button>
            </div>
            <div class="flex">
                <button @click="emit('deleteProduct', produk._id)" class="bg-red-500 focus:outline-none text-white font-bold tracking-widest text-center rounded-sm shadow-sm py-1 px-4 w-full">
                    X
                </button>
            </div>
        </div>
    </div>
    <div class="w-full border-b-[1px] mt-3 border-emerald-500/20"></div>
</template>

<script setup>
    import mixin from "../mixins/index";
    defineProps({
        produk: Object
    });

    const emit = defineEmits(['deleteProduct','increst','decrest'])
</script>

<style>

</style>
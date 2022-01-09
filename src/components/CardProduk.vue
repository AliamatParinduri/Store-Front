<template>
    <div class="flex flex-col justify-center items-center bg-white shadow-lg shadow-black/40 rounded-lg p-7 mb-2 space-y-3">
        <img :src="'/src/assets/img/' +data.gambar" class="rounded-lg object-cover object-center max-h-40 h-40" alt="" srcset="">
        <div class="font-bold text-2xl">
            {{ data.nmProduk }}
        </div>
        <div class="font-semibold text-xl">
            Rp. {{ mixin.formatRupiah(data.harga) }}
        </div>
        <button @click="detail('detailProduct', data._id)" class="bg-green-500/80 focus:outline-none text-white font-bold tracking-widest text-center rounded-lg shadow-sm py-3 px-4 w-full">
            Detail
        </button>
    </div>
</template>

<script setup>
    import mixin from "../mixins/index";

    defineProps({
        data: Object
    })

    const detail = defineEmits(['detailProduct'])
</script>

<style>

</style>
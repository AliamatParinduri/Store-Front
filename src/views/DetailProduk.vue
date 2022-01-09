<template>
    <div class="flex flex-col bg-white/50 justify-center items-center mx-auto w-10/12 md:w-9/12 lg:w-[55%] p-4 space-y-4">
        <img :src="'/src/assets/img/'+value.gambar" class="max-h-[25rem] h-56 md:h-72 lg:h-[25rem]" alt="">
        <div class="flex justify-between items-center w-full">
            <div class="flex text-2xl md:text-4xl font-bold">
                {{ value.nmProduk }}
            </div>
            <div class="flex text-lg md:text-2xl font-bold">
                Rp. {{ mixin.formatRupiah(value.harga) }}
            </div>
        </div>
        <div class="flex justify-start w-full text-justify leading-relaxed text-md md:text-lg">
            Averange rating: 5
        </div>
        <button @click="addToCart" class="bg-green-500/80 focus:outline-none text-white font-bold tracking-widest text-center rounded-lg shadow-sm py-3 px-4 w-full">
            Add to Cart
        </button>
        <div class="text-justify leading-relaxed font-semibold text-md md:text-lg">
            {{ value.deskripsi }}
        </div>
    </div>
</template>

<script setup>
    import mixin from "../mixins/index";
    import { useToast } from "vue-toastification";
    import { computed, reactive } from "vue";
    import { useStore } from "vuex";
    const store = useStore();
    const toast = useToast();

    const {value} = computed(() => store.state.dataProduct);
    defineProps({
        id: String
    })

    const list = reactive({
        data: [],
    })

    const addToCart = () => {
        const listCartProduk = JSON.parse(localStorage.getItem('listCartQue')) || [];
        let dataPush = null;
        
        if (listCartProduk.length < 1) {
            value['qty'] = 1;
            value['ttl_harga'] = value.harga;
            list.data.push(value)
            dataPush = JSON.stringify(list.data);
        }else{
            listCartProduk.filter((e,i) => {
                if (e._id == value._id) {
                    listCartProduk.splice(i, 1);
                    value['qty'] = e.qty + 1;
                    value['ttl_harga'] = value.harga * value.qty;
                }else{
                    value['qty'] = 1;
                    value['ttl_harga'] = value.harga;
                }
            })
            listCartProduk.push(value);
            dataPush = JSON.stringify(listCartProduk);
        }
        
        localStorage.setItem('listCartQue', dataPush);
        toast.success("Berhasil Add Cart");
    }
</script>

<style>

</style>
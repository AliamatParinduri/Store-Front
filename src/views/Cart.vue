<template>
    <div class="flex flex-col mx-auto items-center w-11/12 lg:w-9/12 bg-white/80 p-4 rounded-lg overflow-hidden">
        <div class="flex justify-start text-4xl font-bold w-full ml-9">Shopping Cart</div>
        <div class="border-b-2 w-full mt-4 border-emerald-500"></div>
        <div v-if="listProduk.dt.length > 0" class="w-full">
            <div v-for="produk in listProduk.dt" :key="produk._id">
                <DetailCart @increst="incres" @decrest="decres" @deleteProduct="deleteProduk" :produk="produk" />
            </div>
            <div class="p-4 text-2xl font-bold flex justify-end w-full">
                Total: Rp. {{ mixin.formatRupiah(totalHarga) }}
            </div>
            <button class="bg-green-500/80 focus:outline-none text-white font-bold tracking-widest mt-4 text-center rounded-lg shadow-sm py-3 px-16 w-full">
                Checkout
            </button>
        </div>
        <div v-else class="flex items-center bg-red-500 mt-4 px-4 py-3 text-2xl text-white shadow-md tracking-wide rounded-lg">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> Maaf Cart Anda Kosong
        </div>
    </div>
</template>

<script setup>
    import { useToast } from "vue-toastification";
    import { reactive, ref } from "vue";
    import DetailCart from "../components/DetailCart.vue";
    import mixin from "../mixins/index";
    const toast = useToast();

    let listProduk = reactive({
        dt: JSON.parse(localStorage.getItem('listCartQue'))
    });

    const totalHarga = listProduk.dt.length > 0 ?  ref(listProduk.dt.map(e => e.ttl_harga).reduce((curr, acc) => curr+=acc)) : null;

    const deleteProduk = params => {
        listProduk.dt.filter((e,i) => {
            if (e._id == params) {
                listProduk.dt.splice(i, 1);
                if (listProduk.dt.length > 0) {
                    totalHarga.value = listProduk.dt.map(e => e.ttl_harga).reduce((curr, acc) => curr+=acc);
                }
            }
        })
        
        localStorage.setItem('listCartQue',JSON.stringify(listProduk.dt));

        toast.success("Berhasil Delete Cart");
    }

    const incres = params => {
        listProduk.dt.filter((e,i) => {
            if (e._id == params) {
                e.qty+=1;
                e.ttl_harga = e.harga*e.qty;

                totalHarga.value = listProduk.dt.map(e => e.ttl_harga).reduce((curr, acc) => curr+=acc);
            }
        })
        localStorage.setItem('listCartQue',JSON.stringify(listProduk.dt));
    }
    const decres = params => {
        listProduk.dt.filter((e,i) => {
            if (e._id == params) {
                e.qty-=1;
                e.ttl_harga = e.harga*e.qty;
                
                totalHarga.value = listProduk.dt.map(e => e.ttl_harga).reduce((curr, acc) => curr+=acc);
            }
        })
        localStorage.setItem('listCartQue',JSON.stringify(listProduk.dt));
    }
</script>

<style>

</style>
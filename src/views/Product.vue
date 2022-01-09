<template>
    <div class="flex justify-center items-center">
        <div class=" w-10/12 xl:w-2/3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div v-for="product in list.products" :key="product._id">
                <CardProduk @detailProduct="detail" :data="product" />
            </div>
        </div>
    </div>
</template>

<script setup>
    import CardProduk from "../components/CardProduk.vue";
    import router from "../router";
    import { useStore } from "vuex";
    import { computed, reactive } from "@vue/reactivity";
    
    const store = useStore();

    const list = reactive({
        products: []
    });

    store.dispatch("getProducts");
    list.products = computed(() => {
        return store.state.products
    });
    
    const detail = params => {
        list.products.filter((e) => {
            if (e._id == params) {
                store.commit('setProduct', e);
            }
        })
        router.push({name: 'DetailProduk', params: {id: params}})
    }
</script>

<style>

</style>
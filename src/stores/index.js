import { createStore } from "vuex";
import axios from "axios";
import createPersistedState from "vuex-persistedstate";

export default createStore({
    plugins: [createPersistedState()],
    state() {
        return {
            dataProduct: {},
            products: []
        }
    },
    mutations: {
        setProduct(state, paylaod) {
            state.dataProduct = paylaod;
        },
        setProducts(state, paylaod) {
            state.products = paylaod;
        },
    },
    actions: {
        async getProducts({commit}) {
            const getProducts = await axios.get("http://127.0.0.1:8000/produk").then(e => e.data).catch(e => console.log("Error: " +e));
            commit('setProducts', getProducts);
        }
    }
})
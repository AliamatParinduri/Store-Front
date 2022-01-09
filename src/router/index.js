import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: '/',
        component: () => import('../views/Index.vue'),
        name: 'Home',
    },
    {
        path: '/cart',
        component: () => import('../views/Cart.vue'),
        name: 'Cart',
    },
    {
        path: '/detail_produk/:id',
        component: () => import('../views/DetailProduk.vue'),
        name: 'DetailProduk',
        props: true,
    },
];

const router = new createRouter({
    routes,
    history: createWebHistory()
});

export default router
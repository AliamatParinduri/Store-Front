<template>
    <Suspense>
        <template #default>
            <Product />
        </template>
        <template #fallback>
            <LoadingPage />
        </template>
    </Suspense>
</template>

<script setup>
import Product from "./Product.vue";
import LoadingPage from "../components/Loading.vue";
</script>

<style>

</style>
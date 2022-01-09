<template>
  <div class="flex justify-between bg-white items-center px-8 py-1 mb-4">
    <router-link :to="{name: 'Home'}" class="text-4xl focus:outline-none font-bold text-emerald-600 tracking-wide">VueStore</router-link>
    <div class="p-4">
      <router-link :to="{name: 'Cart'}" class="text-md focus:outline-none font-bold rounded-lg text-white px-6 tracking-widest py-3 shadow-md bg-emerald-500">Cart</router-link>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
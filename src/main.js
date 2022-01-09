import { createApp } from 'vue'
import App from './App.vue'
import Router from './router/index'
import Store from './stores/index'

import Toast from "vue-toastification";
// Import the CSS or use your own!
import "vue-toastification/dist/index.css";

const options = {
    // You can set your default options here
    timeout: 1000
};

createApp(App)
    .use(Router)
    .use(Store)
    .use(Toast, options)
    .mount('#app')

import { createApp } from 'vue'
import { VueQueryPlugin } from "@tanstack/vue-query";

import App from './App.vue'
import router from './router/index.ts';

import './style.css'

import '@/store/store';

const app = createApp(App);

console.log('VueQueryPlugin', VueQueryPlugin);

// const vueQueryPlugin = new VueQueryPlugin();

// app.use(VueQueryPlugin)

VueQueryPlugin.install(app, {
    queryClientConfig:{
        defaultOptions: {
            queries:{
                cacheTime: 1000 * 120, // 2 minutes
                refetchOnReconnect: 'always',
            }
        }
    }
})

app.use(router);

app.mount('#app');
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import router from './router';

const pinia = createPinia();

const chatApp = createApp(App);
chatApp.use(pinia);
chatApp.use(router);
chatApp.mount('#app');

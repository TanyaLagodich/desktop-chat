import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

const chatApp = createApp(App);
chatApp.use(store);
chatApp.use(router);
chatApp.mount('#app');

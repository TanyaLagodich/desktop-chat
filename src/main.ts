import { createApp, markRaw } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import router from './router';

const pinia = createPinia();
// https://pinia.vuejs.org/core-concepts/plugins.html#adding-new-external-properties
pinia.use(({ store }) => {
  store.router = markRaw(router);
});

const chatApp = createApp(App);
chatApp.use(pinia);
chatApp.use(router);
chatApp.mount('#app');

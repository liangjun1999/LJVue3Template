import { createApp } from 'vue';
import App from './App';
import { router } from './router';
import { createPinia } from 'pinia';
import svgIcon from './icons/index.vue';
createApp(App).use(router).use(createPinia()).component('svg-icon', svgIcon).mount('#app');

import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '../views/home/index.vue';
import Login from '../views/login/index.vue';
const routes = [
  { path: '/', redirect: '/home' },
  {
    path: '/home',
    name: 'home',
    component: Home,
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
  },
];
export const router = createRouter({
  history: createWebHashHistory(),
  routes: routes,
});

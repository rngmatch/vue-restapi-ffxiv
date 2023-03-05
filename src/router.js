import { createRouter, createWebHistory, VueRouter } from 'vue-router'
import HomePageView from '@/views/HomePageView.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePageView,
  },
  // ...
];
const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
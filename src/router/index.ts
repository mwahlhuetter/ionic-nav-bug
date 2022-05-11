import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import Home from '../views/HomePage.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: Home
    // redirect: '/tabs/tab1'
  },
  {
    path: '/working',
    component: () => import('@/views/WorkingNavPage.vue')
    // redirect: '/tabs/tab1'
  },
  {
    path: '/breaking',
    component: () => import('@/views/BreakingNavPage.vue')
    // redirect: '/tabs/tab1'
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
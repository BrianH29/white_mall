import Vue from 'vue';
import VueRouter from 'vue-router';
import createListView from '@/views/CreateListView.js';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect: '/main',
  },
  {
    path: '/main',
    name: 'main',
    component: () => import('@/views/MainPage.vue'),
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/components/user/Login.vue'),
  },
  {
    path: '/men',
    name: 'men',
    component: createListView('men'),
  },
  {
    path: '/*',
    component: () => import('@/views/PageNotFound.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

export default router;

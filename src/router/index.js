import Vue from 'vue';
import VueRouter from 'vue-router';
import createListView from '@/views/CreateListView.js';
import bus from '@/utils/bus';

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
    name: "men's clothing",
    component: createListView('MEN'),
  },
  {
    path: '/women',
    name: "women's clothing",
    component: createListView('WOMEN'),
  },
  {
    path: '/jewelery',
    name: 'jewelery',
    component: createListView('JEWELERY'),
  },
  {
    path: '/electronics',
    name: 'electronics',
    component: createListView('ELECTRONICS'),
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('@/components/user/MemberRegister'),
    beforeEnter(to, from, next) {
      try {
        bus.$emit('on:loading');
        next();
      } catch (error) {
        new Error(`fail to open register ${error}`);
      }
    },
  },
  {
    path: '/*',
    component: () => import('@/views/PageNotFound.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.VUE_APP_PUBLIC_PATH,
  routes,
});

export default router;

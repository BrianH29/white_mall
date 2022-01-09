import Vue from 'vue';
import VueRouter from 'vue-router';
import createListView from '@/views/CreateListView.js';
import store from '@/store/index';
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
    async beforeEnter(to, from, next) {
      try {
        bus.$emit('on:loading');
        await store.dispatch('FETCH_CATEGORY');
        next();
      } catch (error) {
        new Error(`failed to fetch main ${error}`);
        next('/error');
      }
    },
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/components/user/Login.vue'),
  },
  {
    path: '/men',
    name: "men's clothing",
    component: createListView('men'),
    async beforeEnter(to, from, next) {
      try {
        console.log('men > ');
        bus.$emit('on:loading');
        await store.dispatch('FETCH_CATEGORY_MEN', this.$route.name);
        next();
      } catch (error) {
        new Error(`fail to fetch ${error}`);
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
  routes,
});

export default router;

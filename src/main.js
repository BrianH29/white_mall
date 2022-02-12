import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import common from '@/utils/common';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faBars,
  faBasketShopping,
  faStore,
  faCircleInfo,
  faUser,
  faLocationDot,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(
  faBars,
  faBasketShopping,
  faStore,
  faCircleInfo,
  faUser,
  faLocationDot,
  faChevronRight,
);

Vue.prototype.$store = store;
Vue.prototype.$utils = common;

Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');

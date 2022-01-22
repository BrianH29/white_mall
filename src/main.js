import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import common from '@/utils/common';

Vue.prototype.$store = store;
Vue.prototype.$utils = common;

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');

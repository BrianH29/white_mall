import Vue from 'vue';
import Vuex from 'vuex';

import carts from '@/store/carts';
import users from '@/store/users';
import products from '@/store/products';
import createPersistedState from 'vuex-persistence';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    carts,
    users,
    products,
  },
  plugins: [createPersistedState()],
});

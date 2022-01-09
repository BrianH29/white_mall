import { fetchCategory } from '@/api/product';

const actions = {
  async FETCH_CATEGORY({ commit }) {
    const { data } = await fetchCategory();
    commit('SET_CATEGORY', data);
  },
};
export default actions;

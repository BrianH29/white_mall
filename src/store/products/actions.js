import { fetchCategory, fetchCategoryPrd } from '@/api/product';

const actions = {
  async FETCH_CATEGORY({ commit }) {
    const { data } = await fetchCategory();
    commit('SET_CATEGORY', data);
  },

  async FETCH_CATEGORY_PRD({ commit }, payload) {
    const result = await fetchCategoryPrd(payload);
    commit('SET_CATEGORY_PRD', result.data);
    return result;
  },
};
export default actions;

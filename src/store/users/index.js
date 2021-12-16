import actions from './actions';
import mutations from './mutations';
import getDefaultState from './state';
import getters from './getters';

const state = getDefaultState;
export default {
  defaultState: getDefaultState,
  actions,
  mutations,
  state,
  getters,
};

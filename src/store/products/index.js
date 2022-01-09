import actions from './actions';
import mutations from './mutations';
import getDefaultState from './state';

const state = getDefaultState;
export default {
  defaultState: getDefaultState,
  actions,
  mutations,
  state,
};

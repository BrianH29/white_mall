const mutations = {
  SET_USERDATA(state, payload) {
    state.userData = payload;
  },
  SET_COOKIE(state, payload) {
    state.uuid = payload;
  },
};

export default mutations;

import { saveUserToCookie, saveUUIDToCookie } from '@/utils/cookies';
import { v4 as uuidv4 } from 'uuid';
// import { validate as uuidValidate } from 'uuid';

const actions = {
  registerMember({ commit }, userData) {
    const uuid = uuidv4();
    // const check = uuidValidate(this.uuid);
    console.log('actions uuid', uuid);
    commit('SET_USERDATA', userData);
    commit('SET_COOKIE', uuid);
    saveUUIDToCookie(uuid);
    saveUserToCookie(userData.email);
  },
};
export default actions;

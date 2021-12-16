import Vue from 'vue';
import wrapper from './axiosInterceptor';
import VueAxios from 'vue-axios';
import qs from 'qs';

Vue.use(VueAxios, wrapper);

const axios = {
  get(resource, params) {
    return Vue.axios.get(resource, params).catch(error => {
      throw new Error(`[Api config error] ${error}`);
    });
  },
  post(resource, params) {
    return Vue.axios({
      method: 'POST',
      url: `${resource}`,
      data: qs.stringify(params),
    });
  },
  postJson(resource, params) {
    return Vue.axios({
      method: 'POST',
      url: `${resource}`,
      headers: {
        'content-type': 'application/json',
      },
      data: params,
    });
  },
  update(resource, params) {
    return Vue.axios.put(resource, params).catch(error => {
      throw new Error(`[Api config error] ${error}`);
    });
  },
  delete(resource, params) {
    return Vue.axios.delete(resource, params).catch(error => {
      throw new Error(`[Api config error] ${error}`);
    });
  },
};

export default axios;

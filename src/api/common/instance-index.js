import axios from 'axios';
import { setRequestInterceptor } from '@/api/common/axiosInterceptor';
// import {
//   setResponseInterceptor,
//   setRequestInterceptor,
// } from './axiosInterceptor';

// const options = {};

function productPath(url, options = {}) {
  const instance = axios.create(Object.assign({ baseURL: url }, options));
  return setRequestInterceptor(instance);
}

// function userPath(url, options = {}) {
//   return axios.create(Object.assign({ baseURL: url }, options));
// }

const product = productPath(`${process.env.VUE_APP_BASE_URL}products/`);
// const user = userPath(`${process.env.VUE_APP_BASE_URL}user/`);
export { product };

import axios from 'axios';
// import {
//   setResponseInterceptor,
//   setRequestInterceptor,
// } from './axiosInterceptor';

// const options = {};

const VUE_APP_BASE_URL = 'https://fakestoreapi.com/';

function productPath(url, options = {}) {
  return axios.create(Object.assign({ baseURL: url }, options));
}

// function userPath(url, options = {}) {
//   return axios.create(Object.assign({ baseURL: url }, options));
// }

const product = productPath(`${VUE_APP_BASE_URL}products/`);
// const user = userPath(`${VUE_APP_BASE_URL}user/`);
export { product };

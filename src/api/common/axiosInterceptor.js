import store from '@/store';

function setRequestInterceptor(instance) {
  instance.interceptors.request.use(
    config => {
      config.headers.Authorization = store.state.uuid;
      return config;
    },
    error => {
      return Promise.reject(error);
    },
  );
  return instance;
}

function setResponseInterceptor(instance) {
  instance.interceptors.response.use(
    response => {
      return response;
    },
    error => {
      return Promise.reject(error);
    },
  );
}

export { setResponseInterceptor, setRequestInterceptor };

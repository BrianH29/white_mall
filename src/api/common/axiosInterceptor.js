function setRequestInterceptor(instance) {
  instance.interceptors.request.use(
    config => {
      return config;
    },
    error => {
      return Promise.reject(error);
    },
  );
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

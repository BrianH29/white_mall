const common = {
  isNull(object) {
    return object === null || object === '' || typeof object === 'undefined';
  },
};

export default common;

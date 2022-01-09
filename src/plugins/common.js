const common = {
  isNull(object) {
    return object === null || object === '' || typeof object === 'undefined';
  },

  firstLetterCapitalize(str) {
    return str.replace(/^\w/g, x => x[0].toUpperCase());
  },
};

export default common;

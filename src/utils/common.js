const common = {
  isNull(object) {
    return object === null || object === '' || typeof object === 'undefined';
  },

  firstLetterCapitalize(str) {
    return str.replace(/^\w/g, x => x[0].toUpperCase());
  },
  next($event, nextRefName) {
    const currentElement = $event.target;

    if (currentElement.value.length >= currentElement.maxLength - 1) {
      setTimeout(() => {
        nextRefName.focus();
      }, 200);
    }
  },
};

export default common;

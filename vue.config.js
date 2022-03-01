module.exports = {
  devServer: {
    overlay: false,
  },
  css: {
    loaderOptions: {
      sass: {
        additionalData: `@import "@/assets/scss/index.scss";`,
      },
    },
  },
};

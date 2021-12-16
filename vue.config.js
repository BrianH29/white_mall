module.exports = {
  devServer: {
    overlay: false,
  },
  css: {
    loaderOptions: {
      scss: {
        additionalData: `@import "@/assets/scss/main.scss";`,
      },
    },
  },
};

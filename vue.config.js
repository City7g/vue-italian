module.exports = {
  css: {
    sourceMap: true,
    loaderOptions: {
      sass: {
        prependData: `@import "~@/assets/scss/main.scss";`,
      },
    },
  },
}

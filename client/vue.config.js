module.exports = {
  css: {
    loaderOptions: {
      scss: {
        additionalData: `
          @import "@/_styles/_mixins.scss";
          @import "@/_styles/_variables.scss";
        `
      }
    }
  }
};
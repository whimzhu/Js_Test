const path = require('path'); //引入path模块

module.exports = {
  lintOnSave: false,
  configureWebpack: {
    resolve: {
      alias: {
        "@": path.resolve("./src")
      }
    }
  }
};
const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  devServer: {
    onBeforeSetupMiddleware: require('./src/mock/index.js') // 引入 mock/index.js
  },
  transpileDependencies: true
})

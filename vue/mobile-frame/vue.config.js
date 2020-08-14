const path = require('path'); //引入path模块

module.exports = {
  publicPath: './',
  lintOnSave: false,
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.resolve('./src')
      }
    }
  },
  css: {
    loaderOptions: {
      css: {},
      postcss: {
        plugins: [
          require('postcss-px2rem')({
            remUnit: 37.5 //根据设计图
            //375的图就给37.5，也就是1rem=37.5px
          })
        ]
      },
      scss: {
        // 8.0 以上版本将 data 改为 prependData
        prependData: `@import '@/assets/css/_variables.scss';`
      }
    }
  },
};

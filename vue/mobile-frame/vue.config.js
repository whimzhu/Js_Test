const path = require('path'); //引入path模块
console.log(process.env.NODE_ENV);
module.exports = {
  publicPath: './',
  lintOnSave: false,
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.resolve('./src')
      }
    },
    devServer: {
      proxy: {
        //名字可以自定义，用于指定哪些请求需要被 target 对应的主机代理
        // 当前 devServer 的地址是 localhost:8080 , 需要代理的地址是 localhost:3000
        '/douban': {
          target: 'http://api.douban.com/', //设置你调用的接口域名和端口号 别忘了加http
          ws: true,
          changeOrigin: true, //这里设置是否跨域
          pathRewrite: {
            // 路径重写
            '^/douban': ''
          }
        }
      }
    }
  },
  css: {
    loaderOptions: {
      css: {},
      postcss: {
        plugins: [
          require('autoprefixer'),
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
  }
};

const path = require("path");
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/main.js",
  output: {
    path: path.resolve(__dirname, "../dist"),
    filename: "index.js",
    // publicPath: "dist/",
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/,
        use: [
          {
            loader: "url-loader", //还需要安装file-loader,无需配置
            options: {
              limit: 8192, //小于8m使用base64
              name: "./img/[name]-[hash:8].[ext]",
              esModule: false,
            },
          },
        ],
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env"],
            },
          },
        ],
      },
      {
        test: /\.vue$/,
        exclude: /(node_modules|bower_components)/,
        use: ["vue-loader"],
      },
    ],
  },
  resolve: {
    alias: {
      // 修改 Vue 被导入时候的包的路径
      vue$: "vue/dist/vue.js",
    },
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template: "index.html",
    }),
  ],
};

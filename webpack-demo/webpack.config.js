const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");//清空正式环境的打包文件 

module.exports = {
  // entry: "./src/script/main.js",
  // entry: ["./src/script/main.js", "./src/script/a.js"],//合并main和a
  entry: { main: "./src/script/main.js", a: "./src/script/a.js" },
  output: {
    // path: "./dist/js",
    path: path.resolve(__dirname, "./dist"),
    filename: "js/[name].js",
    // filename: "js/main-[hash].js"
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: path.resolve(__dirname, "./node_modules"),
        query: { presets: ["@babel/preset-env"] },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader", "postcss-loader"],
        // loader: "style-loader!css-loader!postcss-loader",
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "postcss-loader", "sass-loader"],
        // loader:"style-loader!css-loader!postcss-loader!sass-loader"
      },
      {
        test: /\.html$/,
        use: ["html-loader"],
      },
      {
        test: /\.(jpg|png|gif|jpeg)$/,
        // loader: "file-loader",
        // options: {
        //   name: "[name].[ext]?[hash]"
        // }
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name]-[hash].[ext]",
              outputPath: "assets/",
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new htmlWebpackPlugin({
      filename: "index.html", // 生成的模板文件的名字
      template: "index.html", //模板来源文件
      inject: "head",
      title: "我来设置标题",
      minify: {
        removeComments: true,
      },
      chunks: ["main"],
    }),
    new htmlWebpackPlugin({
      filename: "a.html",
      template: "index.html",
      inject: "head",
      title: "a页面",
      minify: {
        removeComments: true,
      },
      chunks: ["a"],
    }),
    new CleanWebpackPlugin(),
  ],
};

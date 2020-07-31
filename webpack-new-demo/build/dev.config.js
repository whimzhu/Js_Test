const { merge } = require("webpack-merge");
const common = require("./base.config.js");

module.exports = merge(common, {
  devServer: {
    contentBase: "./dist",
    open: true,
    hot: true,
    port: 3000,
  },
});

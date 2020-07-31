const UglifyjsWebpackPlugin = require("uglifyjs-webpack-plugin");
const { merge } = require("webpack-merge");
const common = require("./base.config.js");

module.exports = merge(common, {
  plugins: [new UglifyjsWebpackPlugin()],
});

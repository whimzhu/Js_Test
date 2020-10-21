/*
 * @Description: 
 * @version: 
 * @Author: whimzhu
 * @Date: 2020-10-20 09:31:32
 * @LastEditors: whimzhu
 * @LastEditTime: 2020-10-20 09:45:21
 */
module.exports = {
  root: true,
  env: {
    node: true
  },
  // extends: ['plugin:vue/essential', '@vue/prettier'],
  extends: ["plugin:vue/essential", "eslint:recommended"],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    // 'prettier/prettier': [
    //   'error',
    //   {
    //     semi: false,
    //     singleQuote: true
    //   }
    // ]
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
};

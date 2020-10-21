/*
 * @Description: 
 * @version: 
 * @Author: whimzhu
 * @Date: 2020-10-20 09:31:32
 * @LastEditors: whimzhu
 * @LastEditTime: 2020-10-20 09:37:35
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

console.log("index");

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

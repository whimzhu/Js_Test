/*
 * @Description: 
 * @version: 
 * @Author: whimzhu
 * @Date: 2020-10-20 09:31:32
 * @LastEditors: whimzhu
 * @LastEditTime: 2020-10-20 09:37:50
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

console.log("page1");

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

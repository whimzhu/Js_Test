/*
 * @Description: 
 * @version: 
 * @Author: whimzhu
 * @Date: 2020-10-20 09:31:32
 * @LastEditors: whimzhu
 * @LastEditTime: 2020-10-20 10:01:16
 */
import Vue from 'vue'
import Router from 'vue-router'
import home from './views/index.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '*',
      redirect: '/home'
    }
  ]
})

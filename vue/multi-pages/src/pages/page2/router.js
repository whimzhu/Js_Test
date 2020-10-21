/*
 * @Description: 
 * @version: 
 * @Author: whimzhu
 * @Date: 2020-10-20 09:31:32
 * @LastEditors: whimzhu
 * @LastEditTime: 2020-10-20 10:01:40
 */
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/home',
      name: 'home',
      component: () => import('./views/page2-1.vue')
    },
    {
      path: '/page2-2',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ './views/page2-2.vue')
    },
    {
      path: '*',
      redirect: '/home'
    }
  ]
})

import Vue from 'vue'
import Router from 'vue-router'

const OnePage = () => import('../views/OnePage.vue') //组件页面地址
const TwoPage = () => import('../views/TwoPage.vue') //组件页面地址

//vue引入路由插件
Vue.use(Router)

export default new Router({
  mode: 'history', //用来消除路径中的#/
  routes: [
    //路由数组，其中每个对象都是一个页面信息
    {
      path: '/one', //虚拟路径path，也就是浏览器中的路径
      title: 'OnePage页面',
      beforeEnter: (to, from, next) => {
        next()
      },
      component: OnePage
    },
    {
      path: '/two', //虚拟路径path，也就是浏览器中的路径
      title: 'TwoPage页面',
      beforeEnter: (to, from, next) => {
        next()
      },
      component: TwoPage
    },
    {
      path: '*',
      redirect: '/one'
    }
  ]
})

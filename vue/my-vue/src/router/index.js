import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import One from '@/components/One'
import Two from '@/components/Two'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/', // 默认页面重定向到主页
      redirect: '/home'
    },
    {
      path: '/home', // 主页路由
      name: 'Home',
      component: Home,
      children: [
        // 嵌套子路由
        {
          path: 'one', // 子页面1
          component: One
        },
        {
          path: 'two', // 子页面2
          component: Two
        }
      ]
    },
    {
      path: 'one', // 子页面1
      name: 'one',
      component: One
    },
    {
      path: '/home/two/:id/:name', // 子页面2
      component: Two
    }
  ]
})

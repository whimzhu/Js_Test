import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import("@/views/home/Home")
const Hot = () => import("@/views/hot/Hot")
const Profile = () => import("@/views/profile/Profile")
const Detail = () => import("@/views/detail/Detail")

Vue.use(VueRouter)

const routes = [{
  path: "/home",
  name: "home",
  meta: {
    title: "首页"
  },
  component: Home
}, {
  path: "/hot",
  name: "hot",
  meta: {
    title: "热点"
  },
  component: Hot
}, {
  path: "/profile",
  name: "profile",
  meta: {
    title: "我的"
  },
  component: Profile
}, {
  path: "/detail/:id",
  name: "detail",
  meta: {
    title: "详情"
  },
  component: Detail
}, {
  path: "*",
  redirect: "/home"
}]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// 解决路由重复点击报错问题
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
VueRouter.prototype.replace = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

export default router

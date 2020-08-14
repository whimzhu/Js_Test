import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import("@/views/home/Home")
const Hot = () => import("@/views/hot/Hot")
const Profile = () => import("@/views/profile/Profile")

Vue.use(VueRouter)

const routes = [{
  path: "/home",
  component: Home
}, {
  path: "/hot",
  component: Hot
}, {
  path: "/profile",
  component: Profile
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

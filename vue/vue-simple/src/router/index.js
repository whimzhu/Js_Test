import Vue from "vue";
import VueRouter from "vue-router";

import {
  routes
} from "./routes";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  routes
});

//解决ElementUI 中vue-router 重复点击菜单报错BUG
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err);
};

export default router

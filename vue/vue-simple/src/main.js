import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App.vue";

// 引入element-ui
import Element from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

import {
  routes
} from "./routes";

import {
  store
} from "./store/store";

Vue.use(Element, {
  size: "small"
});

Vue.use(VueRouter);

//解决ElementUI 中vue-router 重复点击菜单报错BUG
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err);
};

const router = new VueRouter({
  mode: "history",
  routes
});

export const eventBus = new Vue({});

new Vue({
  el: "#app",
  router,
  store,
  render: h => h(App)
});

import Vue from "vue";
import VueRounter from "vue-router";
import App from "./App.vue";

// 引入element-ui
import Element from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

import { routes } from "./routes";

import { store } from "./store/store";

Vue.use(Element, { size: "small" });

Vue.use(VueRounter);

//解决ElementUI 中vue-router 重复点击菜单报错BUG
const originalPush = VueRounter.prototype.push;
VueRounter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err);
};

const router = new VueRounter({
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

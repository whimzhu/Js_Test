import Vue from "vue";
import App from "./App";
import router from '@/router'

// 引入element-ui
import Element from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

import {
  store
} from "./store/store";

Vue.use(Element, {
  size: "small"
});

export const eventBus = new Vue({});

new Vue({
  el: "#app",
  router,
  store,
  render: h => h(App)
});

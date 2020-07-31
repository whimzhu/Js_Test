const { add } = require("./function");

add(1, 2);

// 加载css
require("./css/index.css");

//引入Vue
import Vue from "vue";

import App from "./vue/App.vue";

const app = new Vue({
  el: "#app",
  template: "<App></App>",
  // template: `<div>{{otherMessage}}</div>`,
  // data: {
  //   message: "VUE COME HERE!",
  //   otherMessage: "替换#app!"
  // },
  // components: {
  //   myApp: {
  //     template: `<div>{{otherMessage}}</div>`,
  //     data() {
  //       return {
  //         message: "VUE COME HERE!",
  //         otherMessage: "替换#app!"
  //       }
  //     }
  //   },
  // }
  components: {
    App,
  },
});

document.writeln("<div>hehe</div>");

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import 'normalize.css/normalize.css'; //引入normalize.css
import './assets/fonts/iconfont.css'; //引入iconfont.css

import 'amfe-flexible'; //引入amfe-flexible

Vue.prototype.$bus = new Vue();

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

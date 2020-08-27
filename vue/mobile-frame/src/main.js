import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import mock from '@/mock/mock';

import Loading from 'vant/lib/loading';
import 'vant/lib/loading/style';

Vue.use(Loading);

import 'normalize.css/normalize.css'; //引入normalize.css
import './assets/css/base.scss'; //引入base.scss
import './assets/fonts/iconfont.css'; //引入iconfont.css

import 'amfe-flexible'; //引入amfe-flexible

Vue.prototype.$bus = new Vue();

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

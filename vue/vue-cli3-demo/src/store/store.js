import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 存放状态
    name: 'whim',
    age: 32
  },
  getters: {
    // state的计算属性
  },
  mutations: {
    // 更改state中状态的逻辑，同步操作
  },
  actions: {
    // 提交mutation，异步操作
  },
  // 如果将store分成一个个的模块的话，则需要用到modules。
  //然后在每一个module中写state, getters, mutations, actions等。
  modules: {
    // a: moduleA,
    // b: moduleB,
    // ...
  }
})

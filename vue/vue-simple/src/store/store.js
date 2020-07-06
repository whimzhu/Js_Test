import Vue from "vue";
import Vuex from "vuex";
import demoTags from "./modules/demo/tags";

Vue.use(Vuex);

export const store = new Vuex.Store({
  modules: {
    demoTags
  }
});

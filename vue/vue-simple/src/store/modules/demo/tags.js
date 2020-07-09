const state = {
  id:0,
  tags: []
};

const mutations = {
  saveTag: (state, value) => {
    state.tags.push({
      name: value,
      type: "",
      id: state.id++
    });
  },
  deleteTag: (state, id) => {
    state.tags.forEach((v, i) => {
      if (v.id == id) {
        state.tags.splice(i, 1);
      }
    });
  }
};

const actions = {
  saveTagAsync: ({ commit }, value) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        commit("saveTag", value);
        resolve("恭喜你，提交成功！！");
      }, 1000);
    });
  },
  deleteTagAsync({commit},id){
    return new Promise((resolve,reject)=>{
      setTimeout(() => {
        commit("deleteTag",id);
        resolve("恭喜你，删除成功！！");
      }, 1000);
    })
  }
};

const getters = {
  getTags: state => {
    return state.tags;
  }
};

export default {
  state,
  mutations,
  actions,
  getters
};

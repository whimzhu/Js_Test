const state = {
  id: 0,
  tags: [],
  // obj: {
  //   name: "messi",
  //   age: 33
  // }
};

const mutations = {
  saveTag: (state, value) => {
    state.tags.push({
      name: value,
      type: "",
      id: state.id++
    });
  },
  deleteTag: (state, index) => {
    state.tags.splice(index, 1);
  }
};

const actions = {
  saveTagAsync: ({
    commit
  }, value) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        commit("saveTag", value);
        resolve("恭喜你，提交成功！！");
      }, 1000);
    });
  },
  deleteTagAsync({
    state,
    commit
  }, id) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        state.tags.forEach((v, i) => {
          if (v.id == id) {
            commit("deleteTag", i);
          }
        });
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

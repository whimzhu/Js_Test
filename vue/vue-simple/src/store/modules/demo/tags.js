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

const actions = {};

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

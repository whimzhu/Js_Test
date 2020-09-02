import * as type from './mutations-type';

const mutations = {
  [type.SAVE_MOVIE](state, payload) {
    state.myMovieList.push(payload);
  },
  [type.DELETE_MOVIE](state, payload) {
    state.myMovieList.splice(payload, 1);
  }
}

export default mutations

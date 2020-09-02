import * as type from './actions-type';
import * as types from './mutations-type';

const actions = {
  [type.DELETE_MOVIE]({
    commit,
    state
  }, payload) {
    state.myMovieList.forEach((v, i) => {
      if (v.id == payload.id) {
        commit(types.DELETE_MOVIE, i)
      }
    });
  }
}

export default actions

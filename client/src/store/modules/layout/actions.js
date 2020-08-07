import * as actionTypes from './actionTypes'
import * as mutationTypes from './mutationTypes'

export default {
  [actionTypes.USER_LOG_IN]({ commit }, user) {
    commit(
      mutationTypes.USER_SET,
      {
        name: user.name,
        nickname: user.nickname,
        sub: user.sub,
        picture: user.picture,
        handle: user['https://GameDeckWut/screen_name'],
        roles: user['https://GameDeckWut/roles'].map(m => m)
      }
    );
  },
  [actionTypes.USER_LOG_OUT]({ commit }) {
    commit(
      mutationTypes.USER_SET,
      null
    );
  },
  [actionTypes.LOADING_SET]({ commit }, isLoading) {
    commit(
      mutationTypes.IS_LOADING_SET,
      isLoading
    );
  },
  [actionTypes.NAV_OPEN_SET]({ commit }, isNavOpen) {
    commit(
      mutationTypes.IS_NAV_OPEN_SET,
      isNavOpen
    );
  },
}
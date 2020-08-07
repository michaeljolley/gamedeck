import * as actionTypes from './actionTypes'
import * as mutationTypes from './mutationTypes'

import {
  ChallengesService,
  SessionsService
} from '@/services';

export default {
  [actionTypes.CHALLENGES_GET_ALL]({ commit }) {
    return ChallengesService.get()
      .then(({ data }) => {
        commit(
          mutationTypes.CHALLENGES_SET_ALL,
          data.challenges);
      })
      .catch((error) => {
        throw new Error(error);
      });
  },
  [actionTypes.SESSIONS_GET]({ commit }, sessionId) {
    return SessionsService.get(sessionId)
      .then(({ data }) => {
        commit(
          mutationTypes.SESSIONS_SET,
          data);
      })
      .catch((error) => {
        throw new Error(error);
      });
  },
  [actionTypes.SESSIONS_SAVE]({ commit }, session) {
    return SessionsService.put(session)
      .then(({ data }) => {
        commit(
          mutationTypes.SESSIONS_SET,
          data
        );
      })
      .catch((error) => {
        throw new Error(error);
      });
  },
}
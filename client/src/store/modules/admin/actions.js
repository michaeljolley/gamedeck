import * as actionTypes from './actionTypes';
import * as mutationTypes from './mutationTypes';

import {
  ChallengesService,
  ContestantsService,
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
  [actionTypes.CHALLENGES_SAVE]({ commit }, challenge) {
    if (challenge._id === undefined) {
      return ChallengesService.post(challenge)
        .then(({ data }) => {
          commit(
            mutationTypes.CHALLENGES_ADD,
            data
          );
        })
        .catch((error) => {
          throw new Error(error);
        });
    } else {
      return ChallengesService.put(challenge)
        .then(({ data }) => {
          commit(
            mutationTypes.CHALLENGES_UPDATE,
            data
          );
        })
        .catch((error) => {
          throw new Error(error);
        });
    }
  },
  [actionTypes.CHALLENGES_DELETE]({ commit }, challenge) {
    return ChallengesService.delete(challenge._id)
      .then(() => {
        commit(
          mutationTypes.CHALLENGES_REMOVE,
          challenge);
      })
      .catch((error) => {
        throw new Error(error);
      });
  },
  [actionTypes.CONTESTANTS_GET_ALL]({ commit }) {
    return ContestantsService.get()
      .then(({ data }) => {
        commit(
          mutationTypes.CONTESTANTS_SET_ALL,
          data.contestants);
      })
      .catch((error) => {
        throw new Error(error);
      });
  },
  [actionTypes.CONTESTANTS_SAVE]({ commit }, contestant) {
    if (contestant._id === undefined) {
      return ContestantsService.post(contestant)
        .then(({ data }) => {
          commit(
            mutationTypes.CONTESTANTS_ADD,
            data
          );
        })
        .catch((error) => {
          throw new Error(error);
        });
    } else {
      return ContestantsService.put(contestant)
        .then(({ data }) => {
          commit(
            mutationTypes.CONTESTANTS_UPDATE,
            data
          );
        })
        .catch((error) => {
          throw new Error(error);
        });
    }
  },
  [actionTypes.CONTESTANTS_DELETE]({ commit }, contestant) {
    return ContestantsService.delete(contestant._id)
      .then(() => {
        commit(
          mutationTypes.CONTESTANTS_REMOVE,
          contestant);
      })
      .catch((error) => {
        throw new Error(error);
      });
  },
  [actionTypes.SESSIONS_GET_ALL]({ commit }) {
    return SessionsService.get()
      .then(({ data }) => {
        commit(
          mutationTypes.SESSIONS_SET_ALL,
          data);
      })
      .catch((error) => {
        throw new Error(error);
      });
  },
  [actionTypes.SESSIONS_SAVE]({ commit }, session) {
    if (session._id === undefined) {
      return SessionsService.post(session)
        .then(({ data }) => {
          commit(
            mutationTypes.SESSIONS_ADD,
            data
          );
        })
        .catch((error) => {
          throw new Error(error);
        });
    } else {
      return SessionsService.put(session)
        .then(({ data }) => {
          commit(
            mutationTypes.SESSIONS_UPDATE,
            data
          );
        })
        .catch((error) => {
          throw new Error(error);
        });
    }
  },
  [actionTypes.SESSIONS_DELETE]({ commit }, session) {
    return SessionsService.delete(session._id)
      .then(() => {
        commit(
          mutationTypes.SESSIONS_REMOVE,
          session);
      })
      .catch((error) => {
        throw new Error(error);
      });
  },
}
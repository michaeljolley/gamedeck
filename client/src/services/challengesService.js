import Vue from 'vue';

import { apiUrl } from '@/utils';

const baseUrl = `${apiUrl}/challenges`;

export const ChallengesService = {
  get() {
    return Vue.axios.get(baseUrl)
      .catch((error) => {
        throw new Error(error);
      });
  },
  post(challenge) {
    return Vue.axios.post(baseUrl, { challenge })
      .catch((error) => {
        throw new Error(error);
      });
  },
  put(challenge) {
    return Vue.axios.put(baseUrl, { challenge })
      .catch((error) => {
        throw new Error(error);
      });
  },
  delete(challengeId) {
    return Vue.axios.delete(`${baseUrl}/${challengeId}`)
      .catch((error) => {
        throw new Error(error);
      });
  },
};
import Vue from 'vue';

import { apiUrl } from '@/utils';

const baseUrl = `${apiUrl}/sessions`;

export const SessionsService = {
  get() {
    return Vue.axios.get(baseUrl)
      .catch((error) => {
        throw new Error(error);
      });
  },
  post(session) {
    return Vue.axios.post(baseUrl, { session })
      .catch((error) => {
        throw new Error(error);
      });
  },
  put(session) {
    return Vue.axios.put(baseUrl, { session })
      .catch((error) => {
        throw new Error(error);
      });
  },
  delete(sessionId) {
    return Vue.axios.delete(`${baseUrl}/${sessionId}`)
      .catch((error) => {
        throw new Error(error);
      });
  },
};
import Vue from 'vue';

import { apiUrl } from '@/utils';

const baseUrl = `${apiUrl}/contestants`;

export const ContestantsService = {
  get() {
    return Vue.axios.get(baseUrl)
      .catch((error) => {
        throw new Error(error);
      });
  },
  post(contestant) {
    return Vue.axios.post(baseUrl, { contestant })
      .catch((error) => {
        throw new Error(error);
      });
  },
  put(contestant) {
    return Vue.axios.put(baseUrl, { contestant })
      .catch((error) => {
        throw new Error(error);
      });
  },
};
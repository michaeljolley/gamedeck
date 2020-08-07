import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import admin from './modules/admin/store';
import games from './modules/games/store';
import layout from './modules/layout/store';

export default new Vuex.Store({
  modules: {
    layout,
    admin,
    games,
  },
});

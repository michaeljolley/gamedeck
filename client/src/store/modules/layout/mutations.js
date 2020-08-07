import * as mutationTypes from './mutationTypes';

export default {
  [mutationTypes.USER_SET](currentState, user) {
    currentState.user = user;
  },
  [mutationTypes.IS_LOADING_SET](currentState, isLoading) {
    currentState.isLoading = isLoading;
  },
  [mutationTypes.IS_NAV_OPEN_SET](currentState, isNavOpen) {
    currentState.isNavOpen = isNavOpen;
  },
}
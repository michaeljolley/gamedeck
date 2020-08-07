import * as mutationTypes from './mutationTypes';

export default {
  [mutationTypes.CHALLENGES_SET_ALL](currentState, challenges) {
    currentState.challenges = challenges;
  },
  [mutationTypes.SESSIONS_SET](currentState, session) {
    currentState.session = session;
  },
}
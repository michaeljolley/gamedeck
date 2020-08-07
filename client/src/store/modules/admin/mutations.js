import * as mutationTypes from './mutationTypes';

export default {
  [mutationTypes.CHALLENGES_SET_ALL](currentState, challenges) {
    currentState.challenges = challenges;
  },
  [mutationTypes.CHALLENGES_ADD](currentState, challenge) {
    currentState.challenges = [
      ...currentState.challenges,
      challenge
    ];
  },
  [mutationTypes.CHALLENGES_UPDATE](currentState, challenge) {
    currentState.challenges = [
      ...currentState.challenges.filter((c) => c._id !== challenge._id),
      challenge
    ];
  },
  [mutationTypes.CHALLENGES_REMOVE](currentState, challenge) {
    currentState.challenges =
      currentState.challenges.filter((c) => c._id !== challenge._id);
  },
  [mutationTypes.CONTESTANTS_SET_ALL](currentState, contestants) {
    currentState.contestants = contestants;
  },
  [mutationTypes.CONTESTANTS_ADD](currentState, contestant) {
    currentState.contestants = [
      ...currentState.contestants,
      contestant
    ];
  },
  [mutationTypes.CONTESTANTS_UPDATE](currentState, contestant) {
    currentState.contestants = [
      ...currentState.contestants.filter((c) => c._id !== contestant._id),
      contestant
    ];
  },
  [mutationTypes.CONTESTANTS_REMOVE](currentState, contestant) {
    currentState.contestants =
      currentState.contestants.filter((c) => c._id !== contestant._id);
  },
  [mutationTypes.SESSIONS_SET_ALL](currentState, sessions) {
    currentState.sessions = sessions;
  },
  [mutationTypes.SESSIONS_ADD](currentState, session) {
    currentState.sessions = [
      ...currentState.sessions,
      session
    ];
  },
  [mutationTypes.SESSIONS_UPDATE](currentState, session) {
    currentState.sessions = [
      ...currentState.sessions.filter((c) => c._id !== session._id),
      session
    ];
  },
  [mutationTypes.SESSIONS_REMOVE](currentState, session) {
    currentState.sessions =
      currentState.sessions.filter((c) => c._id !== session._id);
  },
}
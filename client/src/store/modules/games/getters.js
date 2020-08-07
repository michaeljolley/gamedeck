export default {
  availableChallenges: (currentState) => (contestant) => {
    return currentState.challenges.filter((f) =>
      !currentState.session.completedChallenges ||
      !currentState.session.completedChallenges.some((s) =>
        s.challenge === f._id &&
        s.handle === contestant.handle
      )
    );
  },
}
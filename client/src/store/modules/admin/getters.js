
export default {
  availableSessions: (currentState) => (contestant) => {
    return currentState.sessions.filter((f) =>
      !contestant.sessions.some((s) => s._id === f._id)
    )
  }
}
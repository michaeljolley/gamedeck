const allSessionsQuery = `
query getAllSessions {
  allSessions(_size:1000) {
    data {
      _id
      room
      sessionId
      showDate
      isActive
      participants {
        data {
          _id
          sub
          handle
          isActive
          picture
        }
      }
      completedChallenges {
          handle
          description
          challenge
          points
          completedAt
      }
    }
  }
}`
const getSessionByIdQuery = `
query getSessionById($id: ID!) {
  findSessionByID(id: $id) {
    _id
    room
    sessionId
    showDate
    isActive
    participants {
      data {
        _id
        sub
        handle
        isActive
        picture
      }
    }
    completedChallenges {
        handle
        description
        challenge
        points
        completedAt
    }
  }
}`

module.exports = {
  allSessionsQuery, getSessionByIdQuery
}
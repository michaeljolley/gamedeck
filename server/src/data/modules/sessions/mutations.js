
const updateSession = `
mutation updateSession($id: ID!, $data: SessionInput!) {
  updateSession(id: $id, data: $data) {
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
      data {
        _id
        handle
        description
        challenge
        points
        completedAt
      }
    }
  }
}
`
const createSession = `
mutation addSession($data: SessionInput!) {
  createSession(data: $data) {
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
      data {
        _id
        handle
        description
        challenge
        points
        completedAt
      }
    }
  }
}
`

module.exports = {
  createSession,
  updateSession
}
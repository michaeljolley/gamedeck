
const updateChallenge = `
mutation updateChallenge($id: ID!, $data: ChallengeInput!) {
  updateChallenge(id: $id, data: $data) {
    _id
    name
    description
    criteria
    points
    isActive
  }
}
`
const createChallenge = `
mutation addChallenge($data: ChallengeInput!) {
  createChallenge(data: $data) {
    _id
    name
    description
    criteria
    points
    isActive
  }
}
`

const deleteChallenge = `
mutation deleteChallenge($id: ID!) {
  deleteChallenge(id: $id) {
    _id
    name
    description
    criteria
    points
    isActive
  }
}
`

module.exports = {
  createChallenge,
  updateChallenge,
  deleteChallenge,
}
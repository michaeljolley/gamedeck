
const updateContestant = `
mutation updateContestant($id: ID!, $data: ContestantInput!) {
  updateContestant(id: $id, data: $data) {
    _id
    sub
    picture
    handle
    isActive
    sessions {
      data {
        _id
        showDate
        room
        isActive
      }
    }
  }
}
`
const createContestant = `
mutation addContestant($data: ContestantInput!) {
  createContestant(data: $data) {
    _id
    sub
    picture
    handle
    isActive
    sessions {
      data {
        _id
        showDate
        room
        isActive
      }
    }
  }
}
`

module.exports = {
  createContestant,
  updateContestant
}
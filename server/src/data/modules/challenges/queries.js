const allChallengesQuery = `
query getAllChallenges {
  allChallenges(_size:1000) {
    data {
      _id
      name
      description
      criteria
      points
      isActive
    }
  }
}`

module.exports = {
  allChallengesQuery,
}
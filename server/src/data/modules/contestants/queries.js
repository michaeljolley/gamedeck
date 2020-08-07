const allContestantsQuery = `
query getAllContestants {
  allContestants(_size:1000) {
    data {
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
}`;

module.exports = {
  allContestantsQuery,
}
const fauna = require('faunadb');
const q = fauna.query;

class faunadb {

  faunaSecret = process.env.FAUNADB_SECRET
  client = new fauna.client({ secret: this.faunaSecret })

  mapResponse(payload) {
    return {
      ...payload.data,
      _id: payload.ref.value.id
    }
  }

  /**
   * Retrieves a session from Fauna that relates to the provided room name
   * @param {string} room
   */
  async getSession(room) {
    let session

    try {
      let response = await this.client.query(
        q.Map(
          q.Paginate(q.Match(q.Index('sessions_room'), room)),
          q.Lambda("sessions", q.Get((q.Var("users"))))
        )
      )
      if (response.data && response.data.length > 0) {
        session = this.mapResponse(response.data[0])
      }
    }
    catch (err) {
      console.log(err);
    }

    return session
  }

  /**
   * Create a session
   * @param session - 
   */
  async createSession(session) {
    let newSession

    try {
      let response = await this.client.query(
        q.Create(
          q.Collection("sessions", {
            data: session
          })
        )
      )
      newSession = this.mapResponse(response)
    }
    catch (err) {
      console.log(err);
    }

    return newSession
  }

  /**
   * Create a token for the provided session Id
   * @param sessionId - Id of the session to join
   */
  createToken(sessionId) {

  }


}

module.exports = faunadb
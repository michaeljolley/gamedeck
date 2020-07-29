const dotenv = require('dotenv')
const ot = require('opentok')

dotenv.config()

class opentok {

  apiKey = process.env.opentok_api_key


  /**
   * Create a session
   * @param roomName - The name of the room to associate with the new session
   */
  createSession(roomName) {

  }

  /**
   * Create a token for the provided session Id
   * @param sessionId - Id of the session to join
   */
  createToken(sessionId) {

  }


}

module.exports = opentok
const Lokka = require("lokka").Lokka;
const Transport = require("lokka-transport-http").Transport;

const faunaSecret = process.env.FAUNADB_SECRET
const headers = {
  Authorization: `Bearer ${faunaSecret}`,
};
const transport = new Transport("https://graphql.fauna.com/graphql", {
  headers,
});
const client = new Lokka({
  transport: transport,
});

const contestants = require('./modules/contestants');
const challenges = require('./modules/challenges');
const sessions = require('./modules/sessions');

const fauna = {

  async getAllContestants() {

    try {

      const response = await client.query(contestants.queries.allContestantsQuery);

      if (response) {
        const payload = {
          contestants: response.allContestants.data.map(m => {
            return {
              _id: m._id,
              sub: m.sub,
              picture: m.picture,
              handle: m.handle,
              isActive: m.isActive,
              sessions: m.sessions.data.map(s => {
                return {
                  _id: s._id,
                  showDate: s.showDate,
                  room: s.room,
                  isActive: s.isActive
                }
              })
            }
          })
        }
        return payload;
      }
    }
    catch (err) {
      console.log(err);
    }

    return null
  },

  async updateContestant(contestant) {
    try {
      const id = contestant._id
      delete contestant._id
      const variables = {
        id: id,
        data: contestant
      }

      const response = await client.query(contestants.mutations.updateContestant, variables);

      if (response && response.updateContestant) {
        const m = response.updateContestant;
        const payload = {
          _id: m._id,
          sub: m.sub,
          picture: m.picture,
          handle: m.handle,
          isActive: m.isActive,
          sessions: m.sessions.data.map(s => {
            return {
              _id: s._id,
              showDate: s.showDate,
              room: s.room,
              isActive: s.isActive
            }
          })
        }
        return payload;
      }
    }
    catch (err) {
      console.log(err);
    }
    return null
  },

  async addContestant(contestant) {
    try {
      console.dir(contestant);
      const variables = {
        data: contestant
      }

      const response = await client.query(contestants.mutations.createContestant, variables);

      if (response && response.createContestant) {
        const m = response.createContestant;
        const payload = {
          _id: m._id,
          sub: m.sub,
          picture: m.picture,
          handle: m.handle,
          isActive: m.isActive,
          sessions: m.sessions.data.map(s => {
            return {
              _id: s._id,
              showDate: s.showDate,
              room: s.room,
              isActive: s.isActive
            }
          })
        }
        return payload;
      }
    }
    catch (err) {
      console.log(err);
    }
    return null
  },

  async getAllChallenges() {

    try {

      const response = await client.query(challenges.queries.allChallengesQuery);

      if (response) {
        const payload = {
          challenges: response.allChallenges.data
        };
        return payload;
      }
    }
    catch (err) {
      console.log(err);
    }

    return null
  },

  async updateChallenge(challenge) {
    try {
      const id = challenge._id
      delete challenge._id
      const variables = {
        id: id,
        data: challenge
      }

      const response = await client.query(challenges.mutations.updateChallenge, variables);

      if (response && response.updateChallenge) {
        return response.updateChallenge;
      }
    }
    catch (err) {
      console.log(err);
    }
    return null
  },

  async addChallenge(challenge) {
    try {
      const variables = {
        data: challenge
      }

      const response = await client.query(challenges.mutations.createChallenge, variables);

      if (response && response.createChallenge) {
        return response.createChallenge;
      }
    }
    catch (err) {
      console.log(err);
    }
    return null
  },

  async deleteChallenge(challengeId) {
    try {
      const variables = {
        id: challengeId
      }

      const response = await client.query(challenges.mutations.deleteChallenge, variables);

      if (response && response.deleteChallenge) {
        return response.deleteChallenge;
      }
    }
    catch (err) {
      console.log(err);
    }
    return null
  },

  async getAllSessions() {

    try {

      const response = await client.query(sessions.queries.allSessionsQuery);

      if (response && response.allSessions) {
        return response.allSessions.data.map(s => {
          return {
            ...s,
            participants: s.participants.data.map(m => {
              return {
                _id: m._id,
                sub: m.sub,
                handle: m.handle,
                isActive: m.isActive,
                picture: m.picture
              }
            })
          };
        });
      }
    }
    catch (err) {
      console.log(err);
    }

    return null
  },

  async getSessionById(sessionId) {

    try {
      const variables = {
        id: sessionId
      }

      const response = await client.query(sessions.queries.getSessionByIdQuery, variables);

      if (response && response.findSessionByID) {
        return {
          ...response.findSessionByID,
          participants: response.findSessionByID.participants.data.map(m => {
            return {
              _id: m._id,
              sub: m.sub,
              handle: m.handle,
              isActive: m.isActive,
              picture: m.picture
            }
          })
        };
      }
    }
    catch (err) {
      console.log(err);
    }

    return null
  },

  async updateSession(session) {
    try {
      const id = session._id
      delete session._id
      const variables = {
        id: id,
        data: session
      }

      const response = await client.query(sessions.mutations.updateSession, variables);

      if (response && response.updateSession) {
        return response.updateSession;
      }
    }
    catch (err) {
      console.log(err);
    }
    return null
  },

  async addSession(session) {
    try {
      const variables = {
        data: session
      }

      const response = await client.query(sessions.mutations.createSession, variables);

      if (response && response.createSession) {
        return response.createSession;
      }
    }
    catch (err) {
      console.log(err);
    }
    return null
  },

  async deleteSession(sessionId) {
    try {
      const variables = {
        id: sessionId
      }

      const response = await client.query(sessions.mutations.deleteSession, variables);

      if (response && response.deleteSession) {
        return response.deleteSession;
      }
    }
    catch (err) {
      console.log(err);
    }
    return null
  },

}

module.exports = fauna
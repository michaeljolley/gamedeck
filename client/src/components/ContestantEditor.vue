<template>
  <div class="user" v-if="contestant">
    <div class="container">
      <h1>
        <ProfileImage :src="contestant.picture" />
        {{contestant.handle}}
      </h1>

      <div class="activeSessions">
        <h2>Assigned Shows</h2>
        <p v-if="contestant.sessions.length === 0">No assigned shows</p>
        <ul>
          <li v-for="session in contestant.sessions" :key="session._id">
            {{session.showDate}}
            <button @click.prevent="removeSession(session)">-</button>
          </li>
        </ul>
      </div>

      <div class="availableSessions">
        <h2>Available Shows</h2>
        <p v-if="availableSessions.length === 0">No available shows</p>
        <ul>
          <li v-for="session in availableSessions(contestant)" :key="session._id">
            {{session.showDate}}
            <button @click.prevent="addSession(session)">+</button>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState, mapGetters } from "vuex";
import { adminStore } from "@/store/modules";
import ProfileImage from "./ProfileImage";

export default {
  props: ["contestant"],
  components: {
    ProfileImage,
  },
  computed: {
    ...mapState(["sessions"]),
    ...mapGetters(["availableSessions"]),
  },
  methods: {
    addSession(session) {
      this.$store.dispatch(adminStore.actionTypes.CONTESTANTS_SAVE, {
        ...this.contestant,
        sessions: {
          connect: session._id,
        },
      });
    },
    removeSession(session) {
      this.$store.dispatch(adminStore.actionTypes.CONTESTANTS_SAVE, {
        ...this.contestant,
        sessions: {
          disconnect: session._id,
        },
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.user {
  height: 100%;
  .container {
    padding: 20px;
    height: 100%;
  }
  h1 {
    img {
      border-radius: 30px;
      width: 60px;
    }
  }
  h2 {
    color: $purple;
  }
}
</style>
<template>
  <div class="lobby">
    <div class="sessions">
      <Session :v-if="!isAdmin" v-for="session in sessions" :key="session._id" :session="session" />
      <Session
        :v-if="isAdmin"
        v-for="session in allSessions"
        :key="session._id"
        :session="session"
      />
    </div>
  </div>
</template>

<script>
import Session from "@/components/Session";
import { mapState } from "vuex";
export default {
  components: {
    Session,
  },
  data() {
    return {
      isAdmin: this.user && this.user.roles.indexOf("admin") < -1,
    };
  },
  computed: {
    ...mapState(["allSessions", "user", "sessions"]),
  },
};
</script>

<style lang="scss" scoped>
.lobby {
  display: flex;
  height: 100%;

  .sessions {
    flex: 0 0 100%;
  }
}
</style>
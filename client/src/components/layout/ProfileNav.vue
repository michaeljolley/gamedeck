<template>
  <div class="profilenav">
    <ul>
      <li v-if="isAdmin">
        <router-link to="/admin">Administration</router-link>
      </li>
      <li>
        <a href="#" @click.prevent="logout">Logout</a>
      </li>
    </ul>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["isAdmin"]),
  },
  methods: {
    logout() {
      this.$auth.logout();
      this.$router.push({ path: "/" });
    },
  },
};
</script>
<style lang="scss" scoped>
.profilenav {
  overflow-y: hidden;
  background: $gray3;
  position: absolute;
  top: 72px;
  width: 200px;
  padding: 10px;
  right: 0;

  ul {
    list-style: none;
    margin: 0 10px 0 0;
    padding: 0;

    li {
    }

    a {
      color: $white;
    }
  }
}
</style>
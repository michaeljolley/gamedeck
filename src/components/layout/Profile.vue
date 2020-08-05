<template>
  <div v-if="$auth.isAuthenticated && !$auth.loading">
    <a href="#" @click.prevent="logout">
      Log Out
      <span class="pull-right glyphicon glyphicon-log-out"></span>
    </a>
  </div>
</template>

<script>
export default {
  computed: {
    user() {
      return this.$auth.user;
    },
  },
  methods: {
    logout() {
      this.$auth.logout();
      this.$router.push({ path: "/" });
    },
  },
};
</script>

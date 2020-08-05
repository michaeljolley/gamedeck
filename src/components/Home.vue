<template>
  <div class="home">
    home
    <button v-on:click="login">Here we go</button>
  </div>
</template>
<script>
export default {
  methods: {
    login: function () {
      this.$auth.loginWithRedirect();
    },
  },
};
</script>

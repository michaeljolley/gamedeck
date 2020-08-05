<template>
  <div>
    <button type="button" v-on:click="gogoGadget">GoGo</button>
  </div>
</template>

<script>
export default {
  methods: {
    async gogoGadget() {
      console.dir(this.$auth.user);

      const claims = await this.$auth.getIdTokenClaims();
      console.dir(claims);

      const jwt = await this.$auth.getTokenSilently();
      await fetch("/api/authorized", {
        method: "get",
        headers: [["Authorization", `BEARER ${jwt}`]],
      });
    },
  },
};
</script>

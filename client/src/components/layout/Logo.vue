<template>
  <div class="logo">
    <router-link to="/games">
      <img :src="tlnbLogo" />
    </router-link>
  </div>
</template>

<script>
import tlnbLogo from "@/assets/tlnb-logo-white.png";

export default {
  data() {
    return {
      tlnbLogo,
    };
  },
};
</script>

<style lang="scss">
.logo {
  flex: 0 0 30%;

  img {
    width: 250px;
  }
}
</style>

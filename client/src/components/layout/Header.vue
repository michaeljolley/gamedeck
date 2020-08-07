<template>
  <header>
    <Logo />
    <Navigation />
    <Profile />
  </header>
</template>

<script>
import Logo from "./Logo";
import Navigation from "./Navigation";
import Profile from "./Profile";

export default {
  components: {
    Logo,
    Navigation,
    Profile,
  },
};
</script>

<style lang='scss' scoped>
header {
  display: flex;
  justify-content: space-evenly;
  background-color: $black;
  padding: 10px;
}
</style>
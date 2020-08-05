<template>
  <header>
    <Logo />
    <Navigation />
    <Profile />
  </header>
</template>

<script>
import Logo from "./Logo.vue";
import Navigation from "./Navigation.vue";
import Profile from "./Profile.vue";

export default {
  components: {
    Logo,
    Navigation,
    Profile,
  },
};
</script>

<style>
</style>
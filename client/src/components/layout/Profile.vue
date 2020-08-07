<template>
  <div class="profile">
    <div title="View User Options">
      {{currentUser.handle}}
      <ProfileImage :imageUrl="currentUser.picture" />
    </div>
    <ProfileNav />
  </div>
</template>
<script>
import ProfileImage from "../ProfileImage.vue";
import ProfileNav from "./ProfileNav.vue";
import { mapGetters } from "vuex";

export default {
  components: {
    ProfileImage,
    ProfileNav,
  },
  computed: {
    ...mapGetters(["currentUser"]),
  },
};
</script>
<style lang="scss" scoped>
.profile {
  flex: 0 0 20%;
  margin-top: 5px;
  text-align: right;
  max-height: 50px;
  overflow: hidden;
  color: $white;
  cursor: pointer;

  transition-property: all;
  transition-duration: 0.5s;
  transition-timing-function: cubic-bezier(0, 1, 0.5, 1);

  &:hover {
    color: $magenta;
    max-height: 250px;

    .profilenav {
      display: inline-block;
    }
  }

  img {
    margin: 0px 10px;
    width: 40px;
    border-radius: 20px;
  }
}
</style>
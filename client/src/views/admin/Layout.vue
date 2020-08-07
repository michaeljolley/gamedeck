<template>
  <Layout>
    <router-view></router-view>
  </Layout>
</template>

<script>
import Layout from "@/components/layout/Layout.vue";
import { adminStore } from "@/store/modules";

export default {
  components: {
    Layout,
  },
  created() {
    this.$store.dispatch(adminStore.actionTypes.CHALLENGES_GET_ALL);
    this.$store.dispatch(adminStore.actionTypes.SESSIONS_GET_ALL);
    this.$store.dispatch(adminStore.actionTypes.CONTESTANTS_GET_ALL);
  },
};
</script>

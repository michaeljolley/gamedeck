<template>
  <Layout>
    dec
    <router-view></router-view>
  </Layout>
</template>

<script>
import Layout from "@/components/layout/Layout.vue";

export default {
  components: {
    Layout,
  },
};
</script>

<template>
  <div class="layout">
    <Header />
    <div class="content">
      <slot />
    </div>
  </div>
</template>

<script>
import Header from "./Header";

export default {
  components: { Header },
};
</script>
<style lang="scss" scoped>
.layout,
.content {
  height: 100%;
}
</style>

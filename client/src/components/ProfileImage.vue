<template>
  <img :src="imageUrl" />
</template>

<script>
export default {
  props: ["imageUrl"],
};
</script>

<style lang="scss" scoped>
img {
  width: 50px;
  border-radius: 25px;
}
</style>
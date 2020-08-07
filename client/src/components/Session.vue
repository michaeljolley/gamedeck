<template>
  <article>
    <h3>{{session.showDate}}</h3>
    <font-awesome-icon :icon="['fa', 'bars']" />
  </article>
</template>
<script>
export default {
  props: ["session", "showRemove", "showAdd"],
};
</script>
<style lang="scss" scoped>
article {
  background-color: $gray1;
  border: solid 1px $gray3;
  max-width: 200px;
  padding: 10px;
  margin: 5px;
  display: flex;

  h3 {
    margin: 0;
    color: $purple;
    flex: 0 0 80%;
  }
}
</style>
<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>
<style lang="scss">
@import "@/_styles/_reset.scss";

html {
  scroll-behavior: smooth;
  height: 100%;
}

body {
  font-family: "Roboto", sans-serif;
  font-size: 0.9em;
  font-weight: normal;
  line-height: 1.5em;
  height: 100%;

  #app {
    height: 100%;
  }

  ul {
    list-style: none;
  }

  a {
    color: $magenta;
    text-decoration: none;
  }
  h1 {
    margin-bottom: 30px;
    color: $magenta;
  }

  button {
    background-color: $black;
    color: $white;
    padding: 10px 20px;
    border-radius: 10px;
    border: 0px;

    &:hover {
      background-color: $cyan;
    }
  }
}
</style>
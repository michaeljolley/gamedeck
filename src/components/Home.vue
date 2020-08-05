<template>
  <div class="home">
    <UserWidget />
    <DigitalMK />
  </div>
</template>
<script>
import UserWidget from "./UserWidget.vue";
import DigitalMK from "./DigitalMK.vue";

export default {
  components: { UserWidget, DigitalMK },
};
</script>

<template>
  <div class="background" @click="change_state_login"></div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "Background",
  methods: {
    ...mapActions(["change_state_login"]),
  },
};
</script>

<style lang="scss">
.background {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  background-color: rgba(0, 0, 0, 0.2);
}
</style>
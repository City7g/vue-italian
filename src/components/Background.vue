<template>
  <div class="background" @click="hideAllPopups"></div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "Background",
  methods: {
    ...mapActions(["change_state_login", "change_state_register"]),
    hideAllPopups() {
      this.change_state_login(false);
      this.change_state_register(false);
    },
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
  z-index: 99;

  background-color: rgba(0, 0, 0, 0.2);
}
</style>
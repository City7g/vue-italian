<template>
  <transition name="background">
    <NoWifiIcon class="no-wifi" v-if="!isConnected" />
  </transition>
</template>

<script>
import NoWifiIcon from "@/assets/images/no-wifi.svg?inline";

export default {
  components: {
    NoWifiIcon
  },
  data() {
    return {
      isConnected: true
    };
  },
  mounted() {
    window.addEventListener('offline', () => {
      this.isConnected = false
    });
    window.addEventListener('online', () => {
      this.isConnected = true
    });
  }
};
</script>

<style lang="scss">
.no-wifi {
  position: fixed;
  left: 20px;
  bottom: 20px;
  z-index: 1001;

  width: 24px;
  height: 24px;

  & .fill-black {
    fill: red !important;
  }
}
</style>
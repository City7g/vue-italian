<template>
  <div class="preloader">
    <Logo />
  </div>
</template>

<script>
import Logo from "@/assets/images/logo.svg?inline";

export default {
  components: {
    Logo,
  },
};
</script>

<style lang="scss">
.preloader {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1002;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #fff;

  & svg {
    animation: preloader 0.8s infinite;
  }
}

@keyframes preloader {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
</style>
<template>
  <router-link :to="{ name: path ? path : 'Home' }" class="main-logo">
    <Logo />
  </router-link>
</template>

<script>
import Logo from "@/assets/images/logo.svg?inline";

export default {
  name: "MainLogo",
  props: {
    path: {
      type: String,
      require: false,
    },
  },
  components: {
    Logo,
  },
};
</script>

<style lang="scss">
.main-logo {
  display: flex;

  & svg {
    @media (min-width: 1200px) {
      width: 90px;
    }
  }
}
</style>
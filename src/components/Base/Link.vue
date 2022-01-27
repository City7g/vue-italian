<template>
  <router-link
    :to="path ?? '#'"
    class="main-link"
  >
    {{ text }}
  </router-link>
</template>

<script>
export default {
  name: "BaseLink",
  props: {
    text: {
      type: String,
      require: true,
    },
    path: {
      type: String,
      require: false,
    },
  },
};
</script>

<style lang="scss">
.main-link {
  color: $black;
  font-size: 14px;
  line-height: 21px;
  letter-spacing: 0.03em;
  transition: $transition;

  &:hover {
    color: $green;
  }
}
</style>
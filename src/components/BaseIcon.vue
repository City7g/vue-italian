<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="width"
    :height="height"
    :viewBox='`0 0 ${width} ${height}`'
    :aria-labelledby="iconName"
    role="presentation"
    fill="red"
    class="c-svg"
  >
    <title :id="iconName" lang="en">{{ iconName }} icon</title>
    <slot />
  </svg>
</template>

<script>
export default {
  name: "BaseIcon",
  props: {
    iconName: {
      type: String,
      default: "box",
    },
    width: {
      type: Number,
      default: 18,
    },
    height: {
      type: Number,
      default: 18,
    },
    iconColor: {
      type: String,
      default: "currentColor",
    },
  },
};
</script>

<style lang="scss">
.c-svg {
  fill: $white;
  transition: 3s all ease;
}

.svg-black {
  fill: $black;
  transition: 3s all ease;
}

.svg-black--light {
  fill: $grey-bg;
  transition: 3s all ease;
}
</style>
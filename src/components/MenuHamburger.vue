<template>
  <button
    class="menu-hamburger"
    :class="{ active: active }"
    @click="$emit('update:active', !active)"
  >
    <span></span>
    <span></span>
    <span></span>
  </button>
</template>

<script>
export default {
  name: "MenuHamburger",
  props: {
    active: Boolean,
  },
  emits: ["update:active"],
};
</script>

<style lang="scss">
.menu-hamburger {
  position: relative;
  z-index: 11;
  display: none;
  height: 30px;
  width: 30px;

  @media (max-width: 991px) {
    display: block;
  }

  cursor: pointer;

  & span {
    display: block;

    position: absolute;
    top: 50%;
    left: 50%;

    width: 25px;
    height: 2px;

    background-color: $grey-text;
    border-radius: $border;
    transition: $transition;

    &:first-child {
      transform: translate(-50%, -7px);
    }

    &:nth-child(2) {
      transform: translateX(-50%);
    }

    &:last-child {
      transform: translate(-50%, 7px);
    }
  }

  &.active {
    & span:first-child {
      transform: translate(-50%, 0) rotate(45deg);
    }

    & span:nth-child(2) {
      opacity: 0;
    }

    & span:last-child {
      transform: translate(-50%, 0) rotate(-45deg);
    }
  }
}
</style>
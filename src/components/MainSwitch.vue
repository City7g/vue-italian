<template>
  <div
    class="main-switch"
    :class="{ active: isActive }"
    @click="isActive = !isActive"
  >
    <div class="main-switch__circle" />
  </div>
</template>

<script>
export default {
  name: "MainSwitch",
  data() {
    return {
      isActive: false,
    };
  },
};
</script>

<style lang="scss">
.main-switch {
  position: relative;

  width: 47px;
  height: 28px;

  background-color: transparent;
  border: 1px solid #d8d8d8;
  border-radius: 14px;
  transition: 0.3s all ease;

  @media (max-width: 768px) {
    width: 35px;
    height: 21px;
  }

  &.active {
    background-color: $green;
    border: 1px solid $green;
  }

  &__circle {
    position: absolute;
    top: 2px;
    left: 2px;

    width: 22px;
    height: 22px;

    background-color: #D8D8D8;
    border-radius: 50%;
    transition: 0.3s all ease;

    @media (max-width: 768px) {
      width: 15px;
      height: 15px;
    }
  }

  &.active &__circle {
    left: 21px;

    background-color: $white;

    @media (max-width: 768px) {
      left: 15px;
    }
  }
}
</style>
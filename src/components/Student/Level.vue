<template>
  <div class="level">
    <svg viewBox="0 0 42 42" class="level__wrap">
      <circle
        r="18"
        cx="21"
        cy="21"
        class="level__back"
      ></circle>
      <circle
        r="18"
        cx="21"
        cy="21"
        stroke-linecap="round"
        stroke-dasharray="30 60"
        class="level__fill"
      ></circle>
    </svg>
    <span class="text-regular level__text">68%</span>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.level {
  position: relative;

  &__wrap {
    width: 60px;
    height: 60px;
  }

  &__back {
    stroke: $grey-bg;
    fill: transparent;
    stroke-width: 5;
  }

  &__fill {
    stroke: $green;
    fill: transparent;
    stroke-width: 5;
  }

  &__text {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}
</style>
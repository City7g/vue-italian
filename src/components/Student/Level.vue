<template>
  <div class="level">
    <svg viewbox="0 0 60 60" class="level__wrap">
      <circle
        r="25"
        cx="30"
        cy="30"
        stroke-width="3"
        stroke="#ccc"
        class="level__bg"
      />
      <circle
        r="25"
        cx="30"
        cy="30"
        stroke-width="3"
        class="level__line"
        stroke-linecap="round"
        :stroke-dasharray="strokeDasharray"
        ref="level"
      />
      <text x="50%" y="50%" dominant-baseline="central" text-anchor="middle">
        {{ value }}%
      </text>
    </svg>
    <!-- <span class="text-regular level__text">68%</span> -->
  </div>
</template>

<script>
export default {
  name: "Level",
  props: {
    value: {
      type: Number,
      require: true,
    },
  },
  data() {
    return {
      strokeDasharray: '0 10000'
    };
  },
  computed: {
    // strokeDasharray() {
    //   return `${this.length * this.value / 100} ${this.length}`
    // }
  },
  mounted() {
    const length = this.$refs.level.getTotalLength()
    setTimeout(() => {
      this.strokeDasharray = `${length * this.value / 100} ${length}`
    }, 200);
  },
};
</script>

<style lang="scss">
.level {
  position: relative;

  &__wrap {
    width: 60px;
    height: 60px;
  }

  &__bg {
    stroke: #ccc;
    fill: transparent;
  }

  &__line {
    stroke: #39b100;
    fill: transparent;

    transition: 0.8s all ease;
    transform: rotate(-90deg);
    transform-origin: center center;
  }

  & circle {
    transition: 0.8s all ease;
  }
}
</style>
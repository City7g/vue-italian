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
      <text
        ref="text"
        x="50%"
        y="50%"
        dominant-baseline="central"
        text-anchor="middle"
      >
        {{ value }}%
      </text>
    </svg>
    <!-- <span class="text-regular level__text">68%</span> -->
  </div>
</template>

<script>
import gsap from "gsap";

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
      strokeDasharray: "0 10000",
    };
  },
  watch: {
    value() {
      this.changeLevel()
    }
  },
  methods: {
    changeLevel() {
      const length = this.$refs.level.getTotalLength();

      setTimeout(() => {
        this.strokeDasharray = `${(length * this.value) / 100} ${
          (length * (100 - this.value)) / 100
        }`;
        gsap.fromTo(
          this.$refs.text,
          {
            textContent: 0 + "%",
          },
          {
            textContent: this.value + "%",
            duration: 2,
            snap: { textContent: 1 },
          }
        );
      }, 10);
    },
  },
  mounted() {
    this.changeLevel()
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

    transition: 2s all ease;
    transform: rotate(-90deg);
    transform-origin: center center;
  }
}
</style>
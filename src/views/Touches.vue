<template>
  <div class="touches">
    <section class="touches-section">
      <div class="container">
        <h1 class="title-h2 touches-section__title">
          Коснитесь пальцем экрана
        </h1>
        <p class="touches-section__number">{{ countTouches }}</p>
      </div>
    </section>

    <div
      v-for="(touche, index) in touches"
      :key="index"
      v-show="touche.isShow"
      :style="{
        top: `${touche.positionY}px`,
        left: `${touche.positionX}px`,
      }"
      class="touch"
      :class="'touch--' + classIndex[index]"
    />
  </div>
</template>

<script>
// import NoWifiIcon from "@/assets/images/no-wifi.svg?inline";
// import MainVideo from "@/components/MainVideo.vue"

export default {
  name: "Touches",
  data() {
    return {
      countTouches: 0,

      classIndex: ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'],

      touches: [
        {
          isShow: false,
          positionX: 0,
          positionY: 0,
        },
        {
          isShow: false,
          positionX: 0,
          positionY: 0,
        },
        {
          isShow: false,
          positionX: 0,
          positionY: 0,
        },
        {
          isShow: false,
          positionX: 0,
          positionY: 0,
        },
        {
          isShow: false,
          positionX: 0,
          positionY: 0,
        },
      ],
    };
  },
  mounted() {
    window.addEventListener("touchstart", (e) => {
      this.countTouches = e.touches.length;
      this.touches[e.touches.length - 1].isShow = true;
      this.touches[e.touches.length - 1].positionX =
        e.touches[e.touches.length - 1].clientX;
      this.touches[e.touches.length - 1].positionY =
        e.touches[e.touches.length - 1].clientY;
    });
    window.addEventListener("touchmove", (e) => {
      for (var key in e.touches) {
        this.touches[key].positionX = e.touches[key].clientX;
        this.touches[key].positionY = e.touches[key].clientY;
      }
    });
    window.addEventListener("touchend", (e) => {
      this.countTouches = e.touches.length;
      this.touches[e.touches.length].isShow = false;
    });
  },
};
</script>

<style lang="scss">
.touches {
  margin-top: auto;

  text-align: center;

  &-section__number {
    margin-top: 30px;
    font-size: 50px;
    line-height: 62px;
  }
}

.touch {
  position: fixed;
  top: 100px;
  left: 100px;
  transform: translate(-50%, -50%);
  z-index: 100;

  width: 80px;
  height: 80px;
  border-radius: 50%;
  border: 3px solid $green;
  box-shadow: 0 0 8px $green, inset 0 0 8px $green;
  transition: 0.5s border ease, 0.5s box-shadow ease;

  &--two {
    border-color: $red;
    box-shadow: 0 0 8px $red, inset 0 0 8px $red;
  }

  &--three {
    border-color: Blue;
    box-shadow: 0 0 8px rgba(Blue, 0.8), inset 0 0 8px rgba(Blue, 0.8);
  }

  &--four {
    border-color: Yellow;
    box-shadow: 0 0 8px rgba(Yellow, 0.8), inset 0 0 8px rgba(Yellow, 0.8);
  }

  &--five {
    border-color: #C0C0C0;
    box-shadow: 0 0 8px rgba(#C0C0C0, 0.8), inset 0 0 8px rgba(#C0C0C0, 0.8);
  }

  &--six {
    border-color: Aqua;
    box-shadow: 0 0 8px rgba(Aqua, 0.8), inset 0 0 8px rgba(Aqua, 0.8);
  }

  &--seven {
    border-color: Black;
    box-shadow: 0 0 8px rgba(Black, 0.8), inset 0 0 8px rgba(Black, 0.8);
  }

  &--eight {
    border-color: Fuchsia;
    box-shadow: 0 0 8px rgba(Fuchsia, 0.8), inset 0 0 8px rgba(Fuchsia, 0.8);
  }

  &--nine {
    border-color: Tomato;
    box-shadow: 0 0 8px rgba(Tomato, 0.8), inset 0 0 8px rgba(Tomato, 0.8);
  }

  &--ten {
    border-color: Violet;
    box-shadow: 0 0 8px rgba(Violet, 0.8), inset 0 0 8px rgba(Violet, 0.8);
  }
}
</style>
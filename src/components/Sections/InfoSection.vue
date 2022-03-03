<template>
  <section class="info-section" :class="{ 'info-section--grey': isGrey }">
    <div class="container">
      <div class="info-section__content" ref="content">
        <h1 class="title-h1 info-section__title">
          {{ title }}
        </h1>
        <p class="text-main info-section__description" v-html="text"></p>

        <div class="info-section__btn">
          <slot></slot>
        </div>

        <img
          v-if="isHomeWeClewImg"
          src="@/assets/images/home-we-clew.svg"
          alt=""
          class="info-section__clew"
        />
      </div>

      <div
        class="info-section__img"
        :class="{ 'info-section__img--first': isFirstImg }"
        ref="image"
      >
        <component :is="img" />
      </div>
    </div>
  </section>
</template>

<script>
import gsap from "gsap";
import HomeFirst from "@/assets/images/home-first.svg?inline";
import HomeWe from "@/assets/images/home-we.svg?inline";
import HomeNext from "@/assets/images/home-next.svg?inline";
import AboutSchool from "@/assets/images/about-school.svg?inline";
import Computer from "@/assets/images/computer.svg?inline";
import BlogImg from "@/assets/images/blog-img.svg?inline";
import CatNearTheBoard from "@/assets/images/cat-near-the-board.svg?inline";

export default {
  name: "InfoSection",
  components: {
    HomeFirst,
    HomeWe,
    HomeNext,
    AboutSchool,
    Computer,
    BlogImg,
    CatNearTheBoard,
  },
  props: {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    img: {
      type: String,
      required: true,
    },
    isGrey: {
      type: Boolean,
      default: false,
    },
    isFirstImg: {
      type: Boolean,
      default: false,
    },
    isHomeWeClewImg: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      text: this.description,
    };
  },
  mounted() {
    console.log(this.$refs.content)
    gsap.from(this.$refs.content, {
      y: '-100%',
      opacity: 0,
      duration: 1.4
    })
    gsap.from(this.$refs.image, {
      y: '100%',
      opacity: 0,
      duration: 1.4,
    })
  }
};
</script>

<style lang="scss">
.info-section {
  position: relative;
  background-color: $white;

  &--grey {
    background-color: $grey-bg;
  }

  & .container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
    gap: 100px;

    @media (max-width: 768px) {
      grid-template-columns: 1fr;
      gap: 40px;
    }
  }

  &__img {
    text-align: center;

    &--first {
      order: -1;
    }

    & svg {
      width: 80%;
    }
  }

  &__content {
    position: relative;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    max-width: 500px;

    @media (max-width: 768px) {
      grid-row-start: 1;
    }
  }

  &__description {
    margin-top: 20px;

    @media (max-width: 1200px) {
      margin-top: 10px;
    }
  }

  &__btn {
    margin-top: 60px;

    @media (max-width: 1200px) {
      margin-top: 30px;
    }
  }

  &__clew {
    position: absolute;
    right: -20px;
    bottom: -110px;
    width: 160px;

    @media (max-width: 1200px) {
      right: -10px;
      bottom: -30px;
      width: 100px;
    }

    @media (max-width: 768px) {
      right: 1px;
      width: 85px;
    }
  }
}
</style>
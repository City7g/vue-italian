<template>
  <div class="c-slider">
    <swiper
      :slides-per-view="1"
      :space-between="50"
      navigation
      class="slider__one"
    >
      <swiper-slide v-for="item in 10" :key="item" class="c-slider__item">
        <img src="@/assets/images/slider/item-1.svg" alt="" />
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import SwiperCore, { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";

SwiperCore.use([Navigation]);

export default {
  name: "MainSlider",
  components: { Swiper, SwiperSlide },
};
</script>

<style lang="scss">
@import "swiper/swiper.scss";
@import "swiper/components/navigation/navigation.scss";
.c-slider {
  &__item {
    padding: 60px 30px;

    background-color: $grey-bg;

    &:nth-child(2n) {
      background-color: $green;
    }

    @media (max-width: 992px) {
      padding: 30px 30px;
    }

    & img {
      margin: 0 auto;
    }
  }

  & .swiper-button-prev,
  & .swiper-button-next {
    position: absolute;
    left: auto;
    top: auto;
    bottom: 0;

    width: 60px;
    height: 70px;

    color: $white;
    background-color: $green;
    border: 1px solid $black;
    transition: $transition;
    z-index: 3;

    @media (max-width: 768px) {
      width: 30px;
      height: 40px;
    }

    &::after {
      font-size: 25px;

      @media (max-width: 768px) {
        font-size: 15px;
      }
    }
  }

  & .swiper-button-prev {
    right: 59px;

    @media (max-width: 768px) {
      right: 29px;
    }
  }

  & .swiper-button-next {
    right: 0;
  }
  & .swiper-button-disabled {
    opacity: 1;
    color: $black;
    background-color: $white;
  }
}
.slider__item {
  flex: 0 0 50%;

  padding: 30px;

  background-color: $grey-bg;
}
.slider__item:nth-child(2n) {
  background-color: $green;
}
</style>
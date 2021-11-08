<template>
  <section class="media-section" :class="{ 'media-section--grey': isGrey }">
    <div class="container">
      <h2 class="title-h2 media-section__title">{{ title }}</h2>
      <p class="text-main media-section__description">{{ description }}</p>

      <div class="media-section__list">
        <router-link
          :to="{name: 'Video', params: { id: image }}"
          v-for="(image, index) in images"
          :key="index"
          class="media-item"
        >
          <img
            :src="require(`@/assets/images/media/item-${image}.jpg`)"
            alt=""
            class="media-item__image"
          />
          <img
            src="@/assets/images/play-icon.svg"
            alt=""
            class="media-item__play"
          />
        </router-link>
      </div>

      <button class="white-btn--green media-section__btn">
        Смотреть больше
      </button>
    </div>
  </section>
</template>

<script>
export default {
  name: "MediaSection",
  props: {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    images: {
      type: Array,
      default: () => {
        return [1, 1, 1];
      },
    },
    isGrey: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss">
.media-section {
  padding: 40px 0 72px;

  @media (max-width: 768px) {
    padding: 30px 0 50px;
  }

  &--grey {
    background-color: $grey-bg;
  }

  &__title,
  &__description {
    margin-left: 33px;

    @media (max-width: 768px) {
      margin-left: 20px;
    }
  }

  &__list {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 22px;

    margin-top: 25px;

    @media (max-width: 992px) {
      grid-template-columns: repeat(2, 1fr);

      margin-top: 20px;
    }

    @media (max-width: 576px) {
      grid-template-columns: 1fr;
      gap: 15px;
    }
  }

  &__btn {
    margin-top: 25px;

    @media (max-width: 992px) {
      margin-top: 20px;
    }
  }
}

.media-item {
  position: relative;

  border-radius: $border-image;
  overflow: hidden;

  &__image {
    width: 100%;

    transition: 0.3s all ease;

    &:hover {
      transform: scale(1.03);
    }
  }

  &__play {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}
</style>
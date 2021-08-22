<template>
  <div class="standart-head">
    <img :src="require(`@/assets/images/${page}-head.svg`)" alt="" />
  </div>
</template>

<script>
export default {
  name: "StandartHead",
  props: {
    page: {
      type: String,
      default: "about",
    },
  },
};
</script>

<style lang="scss">
.standart-head {
  overflow: hidden;

  & img {
    max-width: none;
    min-width: 100%;

    @media (max-width: 1200px) {
      height: 130px;
    }

    @media (max-width: 768px) {
      height: 90px;
    }

    @media (max-width: 576px) {
      height: 75px;
    }
  }
}
</style>
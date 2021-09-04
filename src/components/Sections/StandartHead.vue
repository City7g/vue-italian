<template>
  <div class="standart-head">
    <component :is="page" />
  </div>
</template>

<script>
import presentation from "@/assets/images/presentation-head.svg?inline";
import materials from "@/assets/images/materials-head.svg?inline";
import media from "@/assets/images/media-head.svg?inline";
import about from "@/assets/images/about-head.svg?inline";

export default {
  name: "StandartHead",
  components: {
    presentation,
    materials,
    media,
    about
  },
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

  background-color: $white;

  & img,
  & svg {
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
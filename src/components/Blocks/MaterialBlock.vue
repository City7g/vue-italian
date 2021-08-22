<template>
  <div class="grammar-block">
    <div v-for="item in grammarList" :key="item.id" class="grammar-card">
      <h3 class="title-h2 grammar-card__title">{{ item.title }}</h3>
      <p class="text-main grammar-card__description">
        {{ item.description }}
      </p>
      <img
        class="grammar-card__img"
        :src="require(`@/assets/images/grammar/${item.img}`)"
        alt=""
      />
      <router-link to="/" class="button-bold grammar-card__link">
        Смотреть материалы
        <img src="@/assets/images/arrow-right-link-red.svg" alt="" />
      </router-link>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "MaterialBlock",
  computed: {
    ...mapState(["grammarList"]),
  },
};
</script>

<style lang="scss">
.grammar-block {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 22px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 10px;
  }
}

.grammar-card {
  display: grid;
  grid-template-columns: minmax(auto, 60px) 1fr;
  justify-content: flex-start;
  gap: 20px 80px;

  padding: 60px 50px 40px 55px;

  border: 1px solid $black;
  border-radius: $border;

  @media (max-width: 992px) {
    gap: 15px 55px;

    padding: 35px 30px 32px 40px;
  }

  @media (max-width: 576px) {
    grid-template-columns: minmax(auto, 55px) 1fr;
    gap: 10px 40px;

    padding: 30px 25px 25px 30px;
  }

  &:hover &__link {
    visibility: visible;
  }

  &__title {
    grid-column: 2 / 3;
    grid-row: 1 / 2;
  }

  &__description {
    grid-column: 2 / 3;
    grid-row: 2 / 3;
  }

  &__img {
    grid-column: 1 / 2;
    grid-row: 1 / 4;
  }

  &__link {
    justify-self: flex-start;
    grid-column: 2 / 3;
    grid-row: 3 / 4;

    display: flex;
    align-items: center;

    visibility: hidden;

    & img {
      margin-left: 23px;
    }
  }
}
</style>
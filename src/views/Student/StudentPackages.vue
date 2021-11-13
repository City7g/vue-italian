<template>
  <div class="studen-package">
    <img src="@/assets/images/package-preview.svg" alt="" class="studen-package__preview" />
    <img :src="require(`@/assets/images/offer/${currentPackage.img}`)" alt="" class="studen-package__img" />

    <p class="text-main studen-package__description">{{currentPackage.description}}</p>

    <button class="main-btn studen-package__more">Подробнее</button>

    <form class="studen-package__form studen-package-form" @submit.prevent>
      <p class="text-regular">Пакет занятий</p>
      <h2 class="title-h2 studen-package-form__title">{{currentPackage.title}}</h2>
      <p class="text-main">Выберете удобную конфигурацию</p>

      <button type="submit">Выбрать пакет</button>
    </form>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "StudentPackages",
  computed: {
    ...mapState(["packagesList"]),
    currentPackage() {
      return this.packagesList[this.$route.params.id];
    },
  },
};
</script>

<style lang="scss">
.studen-package {
  display: grid;
  grid-template-columns: 1fr 360px;
  align-content: flex-start;
  gap: 0 60px;

  padding: 36px 50px;

  &__form {
    grid-column: 2 / 3;
    grid-row: 1 / 5;
    align-self: flex-start;
  }

  &__preview {
    margin-bottom: 15px;
  }

  &__description {
    margin-top: 60px;
  }

  &__more {
    justify-self: start;
    
    margin-top: 20px;
  }
}

.studen-package-form {
  padding: 40px 30px;

  background-color: #F7F7F7;
  border-radius: 2px;
}
</style>
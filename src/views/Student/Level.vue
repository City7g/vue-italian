<template>
  <div class="student-level">
    <CatNearTheBoard class="student-level__head" />

    <h1 class="title-h2 student-level__title">А ты уже знаешь свой уровень?</h1>

    <div class="select-level">
      <SelectLevel class="select-level__img" />
      <h3 class="title-h3 select-level__title">
        Да знаю...<br />И выберу сам!
      </h3>
      <p class="text-regular select-level__description">
        Если вы примерно знаете, какой у вас уровень - выберите его из списка.
        Это ни к чему не обязывает, но облегчит нам подготовку к занятию.
      </p>
      <h5 class="button-bold">Мой уровень:</h5>
      <div class="select-level__select">
        <MainSelect />
      </div>

      <select>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
      </select>
    </div>
  </div>
</template>

<script>
import MainSelect from "@/components/MainSelect.vue";
import CatNearTheBoard from "@/assets/images/blog-head.svg?inline";
import SelectLevel from "@/assets/images/select-level.svg?inline";

export default {
  name: "LevelStudent",
  components: { MainSelect, CatNearTheBoard, SelectLevel },
};
</script>

<style lang="scss">
.student-level {
  padding: 20px 20px 200px;

  max-width: 900px;
  margin: 0 auto 0 110px;

  @media (max-width: 1899px) {
    margin: 0 auto 0 80px;
  }

  @media (max-width: 1440px) {
    margin: 0 auto;
  }

  &__head {
    height: 135px;
    overflow: visible;
    margin-bottom: 80px;
  }

  &__title {
    margin-bottom: 35px;
  }
}

.select-level {
  display: grid;
  grid-template-columns: 1fr auto auto;
  gap: 0 10px;

  max-width: 355px;
  padding: 23px 33px;

  background-color: $grey-bg;
  border-radius: $border;

  &__img,
  &__title,
  &__description {
    grid-column: 1 / -1;
  }

  &__img {
    margin-bottom: 18px;
  }

  &__description {
    margin-bottom: 35px;
    max-width: 80%;

    line-height: 19px;
    color: #4b4b4b;
  }

  &__select {
    position: relative;
    width: 80px;
  }
}
</style>
<template>
  <div class="error-page">
    <div class="container">
      <img
        class="error-page__img"
        src="@/assets/images/computer.svg"
        alt=""
      />
      <h1 class="error-page__title">404</h1>
      <p class="text-main">Страница не найдена</p>
      <router-link to="/" class="white-btn error-page__btn"
        >На главную</router-link
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "Error",
};
</script>

<style lang="scss">
.error-page {
  padding: $section-x 0;
  margin-top: auto;

  & .container {
    display: grid;
    grid-template-columns: repeat(2, auto);
    grid-template-rows: repeat(3, auto);
    justify-content: center;
    align-items: center;
    gap: 0 50px;

    @media (max-width: 768px) {
      grid-template-columns: auto;
      text-align: center;
    }
  }

  &__img {
    grid-column: 1 / 2;
    grid-row: 1 / 4;

    @media (max-width: 992px) {
      margin-bottom: 20px;
    }
  }

  &__title {
    color: $grey-text;

    font-size: 60px;
    line-height: 62px;

    @media (max-width: 992px) {
      font-size: 45px;
      line-height: 48px;
    }
  }

  &__btn {
    margin-top: 28px;
  }
}
</style>
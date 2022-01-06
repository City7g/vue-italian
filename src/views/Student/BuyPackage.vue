<template>
  <section v-if="!loading" class="buy-package">
    <img
      src="@/assets/images/buy-package.svg"
      alt=""
      class="buy-package__img"
    />
    <h2 class="title-h1 buy-package__title">
      Покупка пакета «{{ currentPackage.title }}» прошла успешно!
    </h2>
    <p class="text-main buy-package__text">
      Выбери симпатичного тебе преподавателя и удобное время для занятий.
    </p>
    <router-link
      :to="{ name: 'StudentHome' }"
      class="main-btn buy-package__button"
    >
      Продолжить
    </router-link>
  </section>
</template>

<script>
import axios from "axios";

export default {
  name: "BuyPackage",
  data() {
    return {
      currentPackage: null,
      loading: true,
    };
  },
  mounted() {
    axios.get("https://italian-back.herokuapp.com/classes").then((data) => {
      for (let i = 0; i < data.data.length; i++) {
        data.data[i].advantages = JSON.parse(data.data[i].advantages);
      }
      this.currentPackage = data.data.find(
        (c) => c.id === +this.$route.params.id
      );
      this.loading = false;
    });
  },
};
</script>

<style lang="scss">
.buy-package {
  max-width: 460px;
  padding: 60px 30px;

  // @media (max-width: 768px) {
  //   max-width: 350px;
  // }

  // @media (max-width: 576px) {
  //   max-width: 300px;
  // }

  &__img {
    margin-bottom: 50px;

    @media (max-width: 768px) {
      margin-bottom: 70px;
    }
  }

  &__text {
    margin-top: 23px;

    @media (max-width: 768px) {
      margin-top: 18px;
    }
  }

  &__button {
    margin-top: 46px;

    @media (max-width: 768px) {
      margin-top: 30px;
    }
  }
}
</style>
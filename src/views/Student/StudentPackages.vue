<template>
  <div v-if="!loading" class="student-package">
    <div class="student-package__content">
      <img
        src="@/assets/images/package-preview.svg"
        alt=""
        class="student-package__preview"
      />
      <img
        :src="require(`@/assets/images/offer/${currentPackage.img}`)"
        alt=""
        class="student-package__img"
      />

      <p class="text-main student-package__description">
        {{ currentPackage.description }}
      </p>

      <ul class="advantages-list student-package__advantages">
        <li
          v-for="(advantage, index) in currentPackage.advantages"
          :key="index"
          class="text-bold advantages-list__item"
        >
          <img src="@/assets/images/hello/check-icon.svg" alt="" />
          {{ advantage }}
        </li>
      </ul>

      <button class="small-btn student-package__more">Подробнее</button>
    </div>

    <form
      class="student-package__form student-package-form"
      @submit.prevent="buyPackage"
    >
      <p class="text-regular student-package-form__head">Пакет занятий</p>
      <p class="text-regular student-package-form__sale">Скидка - 10%</p>
      <h2 class="title-h2 student-package-form__title">
        {{ currentPackage.title }}
      </h2>
      <p class="text-main">Выберете удобную конфигурацию</p>

      <select name="" id="">
        <option value="">90 мин</option>
        <option value="">60 мин</option>
        <option value="">40 мин</option>
      </select>

      <select name="" id="">
        <option value="">90 мин</option>
        <option value="">60 мин</option>
        <option value="">40 мин</option>
      </select>

      <h4 class="text-bold student-package-form__price-text">К оплате:</h4>
      <h5 class="title-h3 student-package-form__price">30 000 р.</h5>

      <button class="main-btn student-package-form__btn" type="submit">
        Выбрать пакет
      </button>
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "StudentPackages",
  data() {
    return {
      currentPackage: null,
      loading: true,
    };
  },
  methods: {
    buyPackage() {
      axios
        .post("https://italian-back.herokuapp.com/classes/buy", {
          email: "City7gor@gmail.com",
          classes: this.currentPackage.slug,
        })
        .then(() => {
          this.$router.push({
            name: "BuyPackage",
            params: { id: this.$route.params.id },
          });
        })
        .catch((err) => {
          console.log(err);
        });
    },
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
.student-package {
  display: grid;
  grid-template-columns: 1fr 360px;
  align-items: flex-start;
  gap: 50px 60px;

  max-width: 950px;
  padding: 36px 50px;

  @media (max-width: 1350px) {
    grid-template-columns: 1fr;
  }

  @media (max-width: 992px) {
    grid-template-columns: 1fr 1fr;
    gap: 35px;

    padding: 36px 27px;
  }

  @media (max-width: 560px) {
    grid-template-columns: 1fr;

    padding: 28px 21px;
  }

  &__preview {
    margin-bottom: 15px;
  }

  &__description {
    margin-top: 60px;

    @media (max-width: 768px) {
      margin-top: 40px;
    }
  }

  &__advantages {
    margin-top: 15px;
  }

  &__more {
    justify-self: start;

    margin-top: 20px;
  }
}

.advantages-list {
  &__item {
    display: flex;
    justify-content: flex-start;
    align-items: baseline;

    color: $green;

    &:not(:last-child) {
      margin-bottom: 11px;
    }

    & img {
      margin-right: 7px;

      @media (max-width: 768px) {
        height: 17px;
      }
    }
  }
}

.student-package-form {
  position: relative;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0 13px;

  padding: 40px 30px;

  background-color: #f7f7f7;
  border-radius: 2px;

  @media (max-width: 768px) {
    padding: 30px 30px;
  }

  & > * {
    grid-column: 1 / -1;
  }

  &__head {
    margin-bottom: 3px;

    @media (max-width: 768px) {
      margin-bottom: 8px;
    }
  }

  &__sale {
    position: absolute;
    top: 0;
    right: -30px;

    padding: 7px;

    color: $green;
    border: 1px solid $green;
    border-radius: 0px 2px 0px 0px;
  }

  &__title {
    margin-bottom: 36px;

    @media (max-width: 768px) {
      margin-bottom: 25px;
    }
  }

  & select {
    grid-column: auto;

    padding: 15px 20px;
    margin-top: 25px;

    background-color: transparent;
    border: 1px solid #d8d8d8;
  }

  &__price-text {
    grid-column: auto;

    margin-top: 35px;

    @media (max-width: 768px) {
      margin-top: 20px;
    }
  }

  &__price {
    grid-column: auto;

    margin-top: 35px;

    color: $green;
    text-align: right;

    @media (max-width: 768px) {
      margin-top: 20px;
    }
  }

  &__btn {
    margin-top: 34px;

    @media (max-width: 768px) {
      margin-top: 30px;
    }
  }
}
</style>
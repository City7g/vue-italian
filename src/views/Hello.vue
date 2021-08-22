<template>
  <section class="hello-page">
    <div class="container">
      <!-- Step 1 -->
      <template v-if="currentStep === 1">
        <div class="hello__wrap">
          <img
            src="@/assets/images/cat-with-map.svg"
            class="hello__img"
            alt=""
          />
          <h1 class="hello__title">
            Ciao!<br />Хочешь изучать<br />итальянский язык с нами?
          </h1>
          <p class="hello__description">Сначала расскажи немного о себе!</p>
          <button class="hello__btn" @click="currentStep++">Вперед!</button>
        </div>
      </template>

      <!-- Step 2 -->
      <template v-if="currentStep === 2">
        <h1 class="hello__title">Кто ты?</h1>
        <ul class="hello__gender">
          <li :class="{ active: gender === 'male' }">
            <label for="male">
              <img src="@/assets/images/hello/male.svg" alt="" />
              <img src="@/assets/images/hello/male-hover.svg" alt="" />
              <input
                type="radio"
                name="gender"
                id="male"
                value="male"
                v-model="gender"
              />
              Мужчина
            </label>
          </li>
          <li :class="{ active: gender === 'female' }">
            <label for="female">
              <img src="@/assets/images/hello/female.svg" alt="" />
              <img src="@/assets/images/hello/female-hover.svg" alt="" />
              <input
                type="radio"
                name="gender"
                id="female"
                value="female"
                v-model="gender"
              />
              Женщина
            </label>
          </li>
          <li :class="{ active: gender === 'cat' }">
            <label for="cat">
              <img src="@/assets/images/hello/cat.svg" alt="" />
              <img src="@/assets/images/hello/cat-hover.svg" alt="" />
              <input
                type="radio"
                name="gender"
                id="cat"
                value="cat"
                v-model="gender"
              />
              Кот
            </label>
          </li>
        </ul>
        <button class="hello__btn" :disabled="!gender" @click="currentStep++">
          Продолжить
        </button>
      </template>

      <!-- Step 3 -->
      <template v-if="currentStep === 3">
        <div class="hello__wrap">
          <img
            src="@/assets/images/cat-with-eat.svg"
            alt=""
            class="hello__img"
          />
          <h1 class="hello__title">Зачем тебе язык?</h1>
          <ul class="hello__list">
            <li>
              <input
                type="radio"
                name="some"
                id="one"
                value="one"
                v-model="some"
              />
              <label for="one" class="text-bold">
                Хочу общаться с итальянцами
              </label>
            </li>
            <li>
              <input
                type="radio"
                name="some"
                id="two"
                value="two"
                v-model="some"
              />
              <label for="two" class="text-bold">Нужен по работе</label>
            </li>
            <li>
              <input
                type="radio"
                name="some"
                id="three"
                value="three"
                v-model="some"
              />
              <label for="three" class="text-bold">
                Хочу говорить по-итальянски в поездках
              </label>
            </li>
            <li>
              <input
                type="radio"
                name="some"
                id="four"
                value="four"
                v-model="some"
              />
              <label for="four" class="text-bold"
                >Красивый язык, хочу попробовать поучить</label
              >
            </li>
          </ul>
          <button class="hello__btn" :disabled="!some" @click="finishSteps">
            Вперед!
          </button>
        </div>
      </template>
    </div>
  </section>
</template>

<script>
export default {
  name: "Hello",
  data() {
    return {
      currentStep: 1,

      gender: null,
      some: null,
    };
  },
  methods: {
    finishSteps() {
      this.$router.push("/");
    },
  },
};
</script>

<style scoped lang="scss">
.hello {
  &-page {
    margin-top: auto;
    
    @media (max-width: 992px) {
      text-align: center;
    }
  }

  &__img {
    grid-row: 1 / 4;
    grid-column: 2 / 3;

    margin: 0 auto;

    @media (max-width: 992px) {
      grid-row: auto;
      grid-column: auto;

      margin-bottom: 80px;
    }

    @media (max-width: 768px) {
      margin-bottom: 50px;
    }
  }

  &__wrap {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    justify-items: flex-start;
    align-items: center;
    align-content: center;
    gap: 0 30px;

    @media (max-width: 922px) {
      grid-template-columns: 1fr;
      justify-items: center;
    }
  }

  &__gender {
    display: flex;
    align-items: center;
    justify-content: flex-start;

    @media (max-width: 992px) {
      margin-bottom: 45px;
      justify-content: center;
    }

    & li {
      & ~ li {
        margin-left: 75px;
      }

      &:hover label {
        color: $green;
      }
    }

    & img {
      &:first-of-type {
        position: absolute;
        top: 0;
        left: 0;
      }
    }

    & li:hover {
      & img:last-of-type {
        opacity: 0;
      }
    }

    & label {
      position: relative;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;

      margin-top: 20px;

      transition: $transition;
      cursor: pointer;
    }

    & input {
      appearance: none;
    }
  }

  &__list {
    max-width: max-content;

    @media (max-width: 992px) {
      margin: 25px auto 55px;
      text-align: left;
    }

    & li {
      display: flex;
      align-items: center;
    }

    & li ~ li {
      margin-top: 20px;
    }

    & input {
      appearance: none;
    }

    & label {
      padding-left: 37px;

      transition: 0.3s color ease;
      cursor: pointer;

      &:hover {
        color: $green;
      }
    }

    & input:checked ~ label {
      color: $green;

      background-image: url(~@/assets/images/hello/check-icon.svg);
      background-size: auto;
      background-repeat: no-repeat;
      background-position: left center;
    }
  }

  &__title {
    margin-bottom: 20px;

    font-size: 30px;
    line-height: 34px;
    font-weight: 700;
    letter-spacing: 0.03em;

    @media (max-width: 768px) {
      margin-bottom: 10px;
    }
  }

  &__description {
    margin-bottom: 25px;

    color: $grey-text;
    font-size: 16px;
    line-height: 27px;

    @media (max-width: 768px) {
      margin-bottom: 10px;
    }
  }

  &__btn {
    padding: 12px 30px;
    margin-top: 25px;

    font-size: 16px;
    line-height: 21px;
    font-weight: 700;

    color: $white;
    background-color: $green;
    border-radius: $border;
    transition: $transition;

    &:hover {
      background-color: $green-hover;
    }

    &::selection {
      color: $green;
      background-color: $white;
    }

    &:disabled {
      background-color: $grey-disabled;
    }

    @media (max-width: 768px) {
      margin-top: 10px;
    }
  }
}
</style>
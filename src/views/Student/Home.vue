<template>
  <div class="student-home">
    <div class="info-bar">
      <div class="info-bar-level">
        <div class="info-bar-level__wrap">
          <h4 class="text-bold info-bar-level__title">Ваш уровень</h4>
          <img src="@/assets/images/grammar/level1.svg" alt="" />
        </div>

        <div class="info-bar-level__wrap">
          <p class="text-regular info-bar-level__subtitle">Грамматика</p>
          <Level />
        </div>

        <div class="info-bar-level__wrap">
          <p class="text-regular info-bar-level__subtitle">Лексика</p>
          <Level />
        </div>
      </div>
      <div class="info-bar-trial">
        <h4 class="text-bold info-bar-trail__title">
          Хочешь узнать, как у нас классно?<br />Пройди пробное занятие
        </h4>
        <button class="main-btn info-bar-trail__button">Вперед!</button>
        <img
          src="@/assets/images/info-bar-trail.svg"
          alt=""
          class="info-bar-trial__image"
        />
      </div>
    </div>

    <div class="special-offers">
      <h3 class="title-h3 special-offers__title">Специальные предложения</h3>
      <button class="main-btn--white special-offers__btn">
        Экзамен на сертификат
      </button>
      <div class="special-offers__wrap">
        <div class="special-offer" v-for="(item, index) in 3" :key="item">
          <span class="special-offer__sale">Скидка 5-15%</span>
          <img
            :src="require(`@/assets/images/offer/offer-${index + 1}.svg`)"
            alt=""
            class="special-offer__img"
          />
          <h3 class="title-h3 special-offer__title">Классические занятия</h3>
          <p class="text-main special-offer__text">5 - 30 занятий</p>
        </div>
      </div>
    </div>

    <div class="user-notifications">
      <h3 class="title-h3 user-notifications__title">Уведомления</h3>
      <div class="user-notification" v-for="item in 4" :key="item">
        <img
          src="@/assets/images/user-notification.svg"
          alt=""
          class="user-notification__img"
        />
        <h4 class="user-notification__text">
          Занятие с
          <router-link to="#" class="user-notification__teacher"
            >Анна Батьковна</router-link
          >
          начнется через 30 минут.
        </h4>
        <router-link to="#" class="user-notification__link"
          >Перейти к занятию</router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
import Level from "@/components/Student/Level.vue";

export default {
  name: "StudentHome",
  components: { Level },
};
</script>

<style lang="scss">
.student-home {
  padding: 20px;

  max-width: 900px;
  margin: 0 auto;
}

.info-bar {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;

  margin-bottom: 90px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 13px;
  }
}

.info-bar-level {
  display: grid;
  grid-template-columns: 1fr 25% 25%;
  gap: 15px;

  padding: 25px 20px;

  border: 1px solid $grey-text;
  border-radius: $border;

  &__title,
  &__subtitle {
    margin-bottom: 18px;
  }

  &__wrap:not(:first-child) {
    text-align: center;
  }
}

.info-bar-trial {
  display: grid;
  grid-template-columns: 1fr auto;
  justify-items: flex-start;
  gap: 25px 15px;

  padding: 25px 20px;

  border: 1px solid $grey-text;
  border-radius: $border;

  &__image {
    grid-row: 1 / 3;
    grid-column: 2 / 3;
  }
}

.special-offers {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  gap: 20px;

  margin-top: 90px;
  margin-bottom: 90px;

  &__btn {
    justify-self: flex-end;
  }

  &__wrap {
    grid-column: 1 / -1;

    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;

    @media (max-width: 768px) {
      gap: 25px;
    }

    @media (max-width: 768px) {
      grid-template-columns: repeat(2, 1fr);
      gap: 20px;
    }
  }
}

.special-offer {
  position: relative;
  min-height: 280px;
  padding: 50px 30px 30px;

  background-color: $grey-bg;

  @media (max-width: 768px) {
    min-height: auto;
    padding: 40px 18px 25px;
  }

  &__img {
    margin-bottom: 35px;
  }

  &__title {
    margin-bottom: 8px;

    @media (max-width: 768px) {
      font-size: 16px;
      line-height: 20px;
    }
  }

  &__sale {
    position: absolute;
    right: 0;
    top: 0;

    padding: 7px;

    font-size: 14px;
    line-height: 14px;

    color: $green;
    border: 1px solid $green;
    border-top-right-radius: $border;
    cursor: pointer;

    @media (max-width: 768px) {
      font-size: 10px;
      line-height: 10px;
    }
  }
}

.user-notifications {
  &__title {
    margin-bottom: 15px;
  }
}

.user-notification {
  display: flex;
  justify-content: flex-start;
  align-items: center;

  padding: 28px 23px;
  margin-top: 2px;

  border: 1px solid $grey-disabled;
  border-radius: $border;

  @media (max-width: 992px) {
    padding: 25px 20px;
  }

  @media (max-width: 768px) {
    padding: 12px;
  }

  &__img {
    margin-right: 23px;

    @media (max-width: 768px) {
      width: 30px;
      margin-right: 10px;
    }
  }

  &__text {
    font-size: 14px;
    line-height: 20px;

    @media (max-width: 768px) {
      font-size: 10px;
      line-height: 15px;
    }
  }

  &__teacher {
    color: $red;
    text-decoration: underline;
  }

  &__link {
    margin-left: auto;

    @media (max-width: 768px) {
      display: none;
    }
  }
}
</style>
<template>
  <div class="student-settings">
    <h1 class="title-h3 student-settings__title">Настройки профиля</h1>

    <div class="student-settings__main">
      <img src="@/assets/images/settings-avatar.png" alt="" class="student-settings__avatar" />

      <div class="student-settings__info">
        <input type="text" placeholder="Ваше имя" value="Дмитрий">
        <input type="tel" placeholder="Ваш телефон" value="+7(068)104-11-22">
        <input type="text" placeholder="Ваша фамилия" value="Релик">
      </div>

      <div class="student-settings__passwords">
        <p class="text-regular student-settings__subtitle">Изменение пароля</p>
        <input type="password" placeholder="Старый пароль">
        <input type="email" placeholder="Dinrelik@gmail.com">
        <input type="password" placeholder="Новый пароль">
      </div>

      <button class="main-btn student-settings__btn">Сохранить изменения</button>
    </div>

    <h2 class="title-h3 student-settings__title">Настройки уведомлений</h2>

    <div class="student-settings__notification">
      <img
        src="@/assets/images/settings-notification.svg"
        alt=""
        class="student-settings__notification-images"
      />

      <label class="student-settings__checkbox">
        <span class="text-bold">Уведомления о занятиях</span>
        <MainSwitch />
      </label>

      <label class="student-settings__checkbox">
        <span class="text-bold">Уведомления о занятиях</span>
        <MainSwitch />
      </label>

      <label class="student-settings__checkbox">
        <span class="text-bold">Уведомления о занятиях</span>
        <MainSwitch />
      </label>
    </div>
  </div>
</template>

<script>
import MainSwitch from "@/components/MainSwitch.vue";

export default {
  name: "StudentSettings",
  components: { MainSwitch },
};
</script>

<style lang="scss">
.student-settings {
  max-width: 900px;
  padding: 40px 30px;

  &__title {
    margin-bottom: 30px;

    @media (max-width: 992px) {
      margin-bottom: 15px;
    }

    @media (max-width: 768px) {
      margin-bottom: 25px;
    }
  }

  &__main {
    display: grid;
    grid-template-columns: max-content 1fr;
    gap: 0 32px;

    padding: 38px 30px;
    margin-bottom: 80px;

    background-color: #f7f7f7;
    border-radius: 2px;

    @media (max-width: 768px) {
      grid-template-columns: 1fr;
      gap: 20px 32px;

      padding: 32px 30px;
      margin-bottom: 50px;
    }
  }

  &__avatar {
    grid-row: 1 / 4;
  }

  &__notification {
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
    gap: 10px 130px;

    padding: 38px 30px;

    background-color: #f7f7f7;
    border-radius: 2px;

    @media (max-width: 1200px) {
      gap: 10px 80px;
    }

    @media (max-width: 768px) {
      grid-template-columns: 1fr;
      gap: 20px;

      padding: 32px 30px;
    }

    &-images {
      grid-row: 1 / 4;

      @media (max-width: 768px) {
        grid-row: 4 / 5;

        margin-top: 10px;
      }
    }
  }

  &__info,
  &__passwords {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 0 30px;

    @media (max-width: 768px) {
      grid-template-columns: 1fr;
    }
  }

  &__subtitle {
    grid-column: 1 / -1;

    margin-bottom: 14px;
  }

  &__checkbox {
    display: flex;
    justify-content: space-between;
    align-items: center;

    & span {
      margin-right: 5px;
    }

    & .main-switch {
      flex-shrink: 0;
    }
  }
}
</style>
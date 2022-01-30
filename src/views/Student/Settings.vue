<template>
  <div class="student-settings" v-if="user">
    <h1 class="title-h3 student-settings__title">Настройки профиля</h1>

    <form @submit.prevent="editUser" class="student-settings__main" novalidate>
      <img
        src="@/assets/images/settings-avatar.png"
        alt=""
        class="student-settings__avatar"
      />

      <div class="student-settings__info">
        <input type="text" placeholder="Ваше имя" v-model="user.name" />
        <input type="tel" placeholder="Ваш телефон" v-model="user.phone" />
        <input type="text" placeholder="Ваша фамилия" v-model="user.name" />
      </div>

      <div class="student-settings__passwords">
        <p class="text-regular student-settings__subtitle">Изменение пароля</p>
        <input
          type="text"
          placeholder="Старый пароль"
          v-model="user.password"
        />
        <input type="email" placeholder="some@mail.com" v-model="user.email" />
        <input type="text" placeholder="Новый пароль" v-model="user.password" />
      </div>

      <BaseButton type="submit" text="Сохранить изменения" :loading="loading" />
      <!-- <button class="main-btn student-settings__btn">Сохранить изменения</button> -->
    </form>

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
import axios from "axios";
import MainSwitch from "@/components/MainSwitch.vue";

export default {
  name: "StudentSettings",
  components: { MainSwitch },
  data() {
    return {
      user: {
        name: null,
        phone: null,
        email: null,
        password: null,
      },

      loading: false,
    };
  },
  methods: {
    editUser() {
      this.loading = true;
      axios
        .post('https://italian-back.herokuapp.com/edit', {
          name: this.user.name,
          phone: this.user.phone,
          email: this.user.email,
          password: this.user.password,
        })
        .then((data) => {
          console.log(data);
          this.loading = false;
        })
        .catch((err) => {
          console.log(err);
          this.loading = false;
        });
    },
  },
  mounted() {
    const { name, phone, email, password } = this.$store.getters.getUser;
    this.user.name = name;
    this.user.phone = phone;
    this.user.email = email;
    this.user.password = password;
  },
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

    background-color: $grey-bg;
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

    background-color: $grey-bg;
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
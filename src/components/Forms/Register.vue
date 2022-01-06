<template>
  <div class="popup-login">
    <div class="popup-login__close" @click="change_state_register(false)">
      <img src="@/assets/images/popup-close-icon.svg" alt="" />
    </div>

    <div class="popup-login__wrap">
      <h2 class="title-h2 popup-login__title">Быстрая регистрация</h2>
      <p class="text-regular popup-login__description">
        Для доступа к функциям личного кабинета необходимо зарегистрироваться.
      </p>

      <form @submit.prevent="register" class="popup-login__form">
        <input type="text" placeholder="Ваше имя" v-model="name" />
        <input type="email" placeholder="Ваша почта" v-model="email" />
        <input
          type="password"
          placeholder="Придумайте пароль"
          v-model="password"
        />
        <BaseButton
          type="submit"
          text="Зарегистрироваться"
          :loading="loading"
        />
        <p v-if="error" class="popup-login__error">{{ error }}</p>
      </form>

      <p class="text-main popup-login__text">Регистрация через:</p>
      <ul class="popup-login__social">
        <li class="text-main">
          <a href="#">
            <img src="@/assets/images/google-social-icon.svg" alt="" />
          </a>
        </li>
        <li class="text-main">
          <a href="#">
            <img src="@/assets/images/facebook-social-icon.svg" alt="" />
          </a>
        </li>
        <li class="text-main">
          <a href="#">
            <img src="@/assets/images/vk-social-icon.svg" alt="" />
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { mapActions } from "vuex";
import BaseButton from "@/components/Base/Button";

export default {
  name: "Register",
  components: {
    BaseButton,
  },
  data() {
    return {
      name: null,
      email: null,
      password: null,
      loading: false,

      error: null,
    };
  },
  methods: {
    ...mapActions(["change_state_register"]),
    register() {
      this.loading = true;

      axios
        .post("https://italian-back.herokuapp.com/register", {
          name: this.name,
          email: this.email,
          password: this.password,
        })
        .then(() => {
          setTimeout(() => {
            this.$router.push({ name: "StudentHome" });
            this.change_state_register(false);
            this.name = "";
            this.email = "";
            this.password = "";
            this.loading = false;
          }, 2000);
        })
        .catch((err) => {
          this.loading = false;
          this.error = err.response.data;
        });
    },
  },
};
</script>

<style lang="scss">
.popup-login {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: 50vw;
  z-index: 100;

  // display: flex;
  // flex-direction: column;
  // justify-content: center;
  // align-items: flex-start;

  padding: 150px 100px 40px;

  background-color: $white;
  overflow: auto;
  scrollbar-width: none;

  @media (max-width: 1499px) {
    padding: 80px 65px 40px;
  }

  @media (max-width: 768px) {
    width: 350px;

    padding: 120px 65px 40px;
  }

  @media (max-width: 450px) {
    width: 100%;

    padding: 100px 50px 40px;
  }

  @media (max-width: 350px) {
    padding: 80px 35px;
  }

  &__close {
    position: absolute;
    top: 15px;
    left: 15px;
    padding: 7px;

    cursor: pointer;
  }

  &__wrap {
    max-width: 310px;
  }

  &__title {
    margin-bottom: 30px;

    @media (max-width: 768px) {
      margin-bottom: 15px;
    }
  }

  &__description {
    margin-bottom: 30px;
  }

  &__text {
    margin-top: 40px;

    text-align: center;
  }

  &__error {
    padding-top: 10px;

    color: $red;
  }

  &__social {
    display: flex;
    justify-content: center;
    align-items: center;

    margin-top: 5px;

    & li {
      margin: 0 6px;
    }
  }

  &__form {
    & button {
      margin-top: 25px;

      // Delete
      @media (max-width: 1199px) {
        padding-top: 11px;
        padding-bottom: 11px;
      }
    }
  }
}

form {
  display: flex;
  flex-direction: column;
}

input {
  padding: 13px 50px;
  margin-bottom: 15px;

  font-family: "Circe";
  font-size: 16px;
  line-height: 27px;

  color: $black;
  background-color: $white;
  background-size: auto;
  background-repeat: no-repeat;
  background-position: 23px center;
  border: 1px solid $grey-disabled;
  border-radius: $border;

  @media (max-width: 768px) {
    padding: 10px 20px 10px 34px;
    margin-bottom: 10px;

    background-position: 12px center;
  }

  &:focus {
    border: 1px solid $black;
    outline: none;
  }
}

input[type="text"] {
  background-image: url(~@/assets/images/user-icon-input.svg);
}

input[type="email"] {
  background-image: url(~@/assets/images/mail-icon-input.svg);
}

input[type="password"] {
  background-image: url(~@/assets/images/lock-icon-input.svg);
}

input[type="tel"] {
  background-image: url(~@/assets/images/tel-icon-input.svg);
}
</style>

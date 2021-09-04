<template>
  <div class="student-aside">
    <MainLogo class="student-aside-logo" />

    <div class="student-aside-social">
      <!-- <li>
        <a href="#">
          <img src="@/assets/images/social/youtube.svg" alt="">
        </a>
      </li>
      <li>
        <a href="#">
          <img src="@/assets/images/social/facebook.svg" alt="">
        </a>
      </li>
      <li>
        <a href="#">
          <img src="@/assets/images/social/instagram.svg" alt="">
        </a>
      </li> -->
      <button class="student-aside-social__button">
        <img src="@/assets/images/social/youtube.svg" alt="" />
      </button>
      <button class="student-aside-social__button">
        <img src="@/assets/images/social/facebook.svg" alt="" />
      </button>
      <button class="student-aside-social__button">
        <img src="@/assets/images/social/instagram.svg" alt="" />
      </button>
    </div>

    <div class="student-aside-user">
      <img
        src="@/assets/images/user-avatar.svg"
        alt=""
        class="student-aside-user__avatar"
      />
      <h4>Дмитрий Релик</h4>
      <button
        @click="userNotification = !userNotification"
        class="student-aside-user__notification"
        :class="{
          'student-aside-user__notification--active': userNotification,
        }"
      >
        <img src="@/assets/images/user-notification-icon.svg" alt="" />
      </button>
    </div>

    <ul class="student-aside-nav">
      <li
        v-for="item in navList"
        :key="item.name"
        class="student-aside-nav__item"
        :class="{ 'student-aside-nav__item--special': item.special }"
      >
        <router-link
          class="student-aside-nav__link"
          :class="{ 'student-aside-nav__link--special': item.special }"
          to="#"
        >
          <img
            :src="require(`@/assets/images/${item.img}-nav-icon.svg`)"
            alt=""
            class="student-aside-nav__img"
            :class="{ 'student-aside-nav__img--special': item.special }"
          />
          <img
            v-if="item.special"
            :src="require(`@/assets/images/special-aside-left.svg`)"
            alt=""
            class="student-aside-nav__special"
          />
          <span
            class="student-aside-nav__text"
            :class="{
              'text-regular student-aside-nav__text--special': item.special,
              'title-h3': !item.special,
            }"
            >{{ item.name }}</span
          >
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import MainLogo from "@/components/MainLogo.vue";

export default {
  components: { MainLogo },
  data() {
    return {
      userNotification: false,
      navList: [
        {
          name: "Груповые занятия",
          path: "/",
          img: "group",
        },
        {
          name: "Преподаватели",
          path: "/",
          img: "vine",
        },
        {
          name: "Мой календарь",
          path: "/",
          img: "diamond",
        },
        {
          name: "Настройки",
          path: "/",
          img: "qeen",
        },
        {
          name: "Ищешь что-то особенное?",
          path: "/",
          img: "cloud",
          special: true,
        },
        {
          name: "Поддержка",
          path: "/",
          img: "list",
        },
        {
          name: "Выйти",
          path: "/",
          img: "close",
        },
      ],
    };
  },
};
</script>

<style lang="scss">
.student-aside {
  position: sticky;
  top: 0;
  z-index: 10;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-content: flex-start;
  gap: 60px 20px;

  height: 100vh;
  padding: 20px 28px 30px 120px;
  overflow: auto;

  background-color: $white;

  scrollbar-width: none;

  & > * {
    grid-column: 1 / -1;
  }

  @media (max-width: 991px) {
    display: flex;
    justify-content: space-between;
    align-items: center;

    height: 50px;
    border: 1px solid red;
    padding: 0;
  }
}

.student-aside-logo {
  grid-column: auto;
  justify-self: flex-start;
}

.student-aside-social {
  grid-column: auto;
  justify-self: flex-end;

  display: flex;
  justify-content: center;
  align-content: inherit;

  @media (max-width: 991px) {
    margin-left: auto;
  }

  &__button ~ &__button {
    margin-left: 10px;
  }

  &__button {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 28px;
    height: 28px;

    border: 1px solid $grey-text;
    border-radius: $border;

    @media (max-width: 768px) {
      width: 20px;
      height: 20px;

      & img {
        transform: scale(0.75);
      }
    }
  }
}

.student-aside-user {
  position: relative;

  display: flex;
  justify-content: flex-start;
  align-items: center;

  padding: 18px 25px 18px 18px;
  margin-top: 20px;

  background-color: $grey-bg;
  border-radius: $border;

  @media (max-width: 991px) {
    display: none;
  }

  &__avatar {
    margin-right: 14px;

    border: 2px solid $red;
    border-radius: 50%;
  }

  &__notification {
    position: absolute;
    top: 18px;
    right: 14px;

    cursor: pointer;

    &:focus {
      outline-offset: 3px;
    }

    &--active::after {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%) rotate(-45deg);
      width: 140%;
      height: 2px;
      background-color: $black;

      content: "";
    }
  }
}

.student-aside-nav {
  @media (max-width: 991px) {
    display: none;
  }

  &__item {
    margin: 20px 0;

    &--special {
      margin: 65px 0;
    }
  }

  &__link {
    position: relative;
    display: inline-flex;
    justify-content: flex-start;
    align-items: center;

    padding-left: 40px;
    padding-right: 3px;

    &--special {
      padding: 25px 15px 25px 40px;
    }
  }

  &__img {
    position: absolute;
    top: 50%;
    left: 15px;
    transform: translate(-50%, -50%);
    max-height: 100%;

    &--special {
      left: 0;
      width: 100%;
      transform: translateY(-50%);
    }
  }

  &__special {
    position: absolute;
    left: -120px;
    top: 50%;
    transform: translateY(-50%);
  }

  &__text {
    position: relative;
    z-index: 1;

    transition: $transition;

    &:hover {
      color: $green;
    }

    &--special:hover {
      color: $red;
    }
  }
}
</style>
<template>
  <div class="student-aside" v-bottom-shadow="'student-aside--shadow'">
    <MenuHamburger
      v-model:active="isOpenMenu"
      class="student-aside-hamburger"
    />

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
      <UserAvatar class="student-aside-user__avatar" />
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

    <ul class="student-aside-nav" :class="{ active: isOpenMenu }">
      <li
        v-for="item in navList"
        :key="item.name"
        class="student-aside-nav__item"
        :class="{ 'student-aside-nav__item--special': item.special }"
      >
        <router-link
          class="student-aside-nav__link"
          :class="{ 'student-aside-nav__link--special': item.special }"
          :to="{ name: item.path }"
          @click="isOpenMenu = !isOpenMenu"
        >
          <!-- <img
            :src="require(`@/assets/images/${item.img}-nav-icon.svg`)"
            alt=""
            class="student-aside-nav__img"
            :class="{ 'student-aside-nav__img--special': item.special }"
          /> -->
          <component
            :is="item.img"
            class="student-aside-nav__img"
            :class="{ 'student-aside-nav__img--special': item.special }"
          />
          <SpecialAsideLeft
            v-if="item.special"
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
import MenuHamburger from "@/components/MenuHamburger.vue";
import MainLogo from "@/components/MainLogo.vue";
import UserAvatar from "@/assets/images/user-avatar.svg?inline";
import SpecialAsideLeft from "@/assets/images/special-aside-left.svg?inline";
import Group from "@/assets/images/group-nav-icon.svg?inline";
import Vine from "@/assets/images/vine-nav-icon.svg?inline";
import Diamond from "@/assets/images/diamond-nav-icon.svg?inline";
import Qeen from "@/assets/images/qeen-nav-icon.svg?inline";
import Cloud from "@/assets/images/cloud-nav-icon.svg?inline";
import List from "@/assets/images/list-nav-icon.svg?inline";
import Close from "@/assets/images/close-nav-icon.svg?inline";
import bottomShadow from "@/directives/addBottomShadow.js";

export default {
  components: {
    MenuHamburger,
    MainLogo,
    UserAvatar,
    SpecialAsideLeft,
    Group,
    Vine,
    Diamond,
    Qeen,
    Cloud,
    List,
    Close,
  },
  directives: { bottomShadow },
  data() {
    return {
      isOpenMenu: false,
      userNotification: false,
      navList: [
        {
          name: "Груповые занятия",
          path: "StudentLevel",
          img: "Group",
        },
        {
          name: "Преподаватели",
          path: "AllTeachers",
          img: "Vine",
        },
        {
          name: "Мой календарь",
          path: "StudentLevel",
          img: "Diamond",
        },
        {
          name: "Настройки",
          path: "StudentSettings",
          img: "Qeen",
        },
        {
          name: "Ищешь что-то особенное?",
          path: "StudentLevel",
          img: "Cloud",
          special: true,
        },
        {
          name: "Поддержка",
          path: "StudentFAQ",
          img: "List",
        },
        {
          name: "Выйти",
          path: "StudentLevel",
          img: "Close",
        },
      ],
    };
  },
  methods: {
    addCardUserToMenu() {
      if (window.innerWidth <= 991) {
        document
          .querySelector(".student-aside-nav")
          .prepend(document.querySelector(".student-aside-user"));
      } else {
        document
          .querySelector(".student-aside-nav")
          .before(document.querySelector(".student-aside-user"));
      }
    },
  },
  watch: {
    isOpenMenu(old) {
      if (old) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "auto";
      }
    },
  },
  mounted() {
    this.addCardUserToMenu();
    window.addEventListener("resize", this.addCardUserToMenu);
  },
  beforeUnmount() {
    window.removeEventListener("resize", this.addCardUserToMenu);
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
  padding: 20px 30px 30px 150px;
  overflow: auto;

  background-color: $white;
  border-right: 1px solid $black;

  scrollbar-width: thin;
  scrollbar-color: black white;

  & > * {
    grid-column: 1 / -1;
  }

  @media (max-width: 1649px) {
    gap: 40px 20px;

    padding-left: 120px;
  }

  @media (max-width: 1199px) {
    gap: 30px 20px;

    padding-left: 60px;
    padding-right: 20px;
  }

  @media (max-width: 991px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 0;

    width: 100%;
    max-width: 900px;
    height: 50px;
    padding: 0 20px;
    margin: 0 auto;

    border-right: none;

    &--shadow {
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    }
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
    margin-top: 0;
    margin-bottom: 50px;
  }

  @media (max-width: 575px) {
    padding: 16px 25px 16px 16px;
  }

  &__avatar {
    width: 60px;
    margin-right: 14px;

    border: 2px solid $red;
    border-radius: 50%;

    @media (max-width: 575px) {
      width: 40px;
    }
  }

  &__notification {
    position: absolute;
    top: 18px;
    right: 14px;

    cursor: pointer;

    @media (max-width: 575px) {
      top: 14px;
      right: 11px;
    }

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
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;

    width: 100%;
    max-width: 300px;
    padding: 50px 20px 20px 40px;
    transform: scaleX(0);
    transition: 0.3s transform ease, $transition-theme background-color ease;
    transform-origin: left;
    z-index: 10;

    background-color: $white;
    overflow: auto;

    @media (max-width: 359px) {
      max-width: none;
      padding-left: 50px;
    }

    &.active {
      transform: scaleX(1);
    }
  }

  &__item {
    margin: 20px 0;

    &--special {
      margin: 65px 0;

      @media (max-width: 1199px) {
        margin: 35px 0;
      }
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
    left: -150px;
    top: 50%;
    width: 120px;
    max-height: none;
    transform: translateY(-50%);

    @media (max-width: 1649px) {
      left: -120px;
    }

    @media (max-width: 1199px) {
      width: 80px;
      left: -60px;
    }
  }

  &__text {
    position: relative;
    z-index: 1;

    transition: $transition;
  }

  &__link:hover &__text,
  &__link.router-link-exact-active {
    color: $green;
  }

  &__link--special:hover &__text {
    color: $red;
  }
}

.student-aside-hamburger {
  margin-right: 28px;

  @media (max-width: 319px) {
    margin-right: 18px;
  }
}
</style>
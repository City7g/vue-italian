<template>
  <header class="header" v-bottom-shadow="'header--shadow'">
    <div class="container">
      <MainLogo class="header-logo" />

      <nav class="header-nav" :class="{ active: isOpenMenu }">
        <ul class="header-nav__list">
          <li
            v-for="link in menuList"
            :key="link.title"
            class="header-nav__item"
          >
            <!-- <router-link
              @click="isOpenMenu = false"
              :to="link.path"
              class="main-link header-nav__link"
            >
              {{ link.title }}
            </router-link> -->
            <BaseLink
              @click="isOpenMenu = false"
              class="header-nav__link"
              :path="link.path"
              :text="link.title"
            />
          </li>
          <li class="header-nav__item">
            <BaseLink
              @click="$i18n.locale = 'en'"
              class="header-nav__link"
              :text="$t('login')"
            />
          </li>
        </ul>
      </nav>

      <div class="header-social">
        <button class="header-social__button">
          <YoutubeIcon />
        </button>
        <button class="header-social__button">
          <FacebookIcon />
        </button>
        <button class="header-social__button">
          <InstagramIcon />
        </button>
      </div>

      <div class="header-btn">
        <button class="white-btn" @click="change_state_login(true)">
          {{$t('login')}}
        </button>
        <button class="small-btn" @click="changeTheme">Тема</button>
      </div>

      <MenuHamburger v-model:active="isOpenMenu" class="header-hamburger" />
    </div>
  </header>
</template>

<script>
import { mapActions } from "vuex";
import MainLogo from "@/components/MainLogo.vue";
import MenuHamburger from "@/components/MenuHamburger.vue";
import bottomShadow from "@/directives/addBottomShadow.js";
import YoutubeIcon from "@/assets/images/social/youtube.svg?inline";
import FacebookIcon from "@/assets/images/social/facebook.svg?inline";
import InstagramIcon from "@/assets/images/social/instagram.svg?inline";

export default {
  name: "MainHeader",
  components: {
    MainLogo,
    MenuHamburger,
    YoutubeIcon,
    FacebookIcon,
    InstagramIcon,
  },
  directives: { bottomShadow },
  data() {
    return {
      isHeaderShadow: false,
      isOpenMenu: false,
      isLightTheme: false,

      menuList: [
        {
          title: "В разработке",
          path: "/home",
        },
        // {
        //   title: "Обучение",
        //   path: "/some",
        // },
        {
          title: "Материалы",
          path: "/materials",
        },
        {
          title: "Грамматика ",
          path: "/test",
        },
        {
          title: "Медиатека",
          path: "/media",
        },
        {
          title: "Презентации",
          path: "/presentation",
        },

        {
          title: "Блог",
          path: "/blog",
        },
        {
          title: "О нас",
          path: "/about",
        },
      ],
    };
  },
  methods: {
    ...mapActions(["change_state_login"]),
    addSocialToMenu() {
      if (window.innerWidth <= 768) {
        document
          .querySelector(".header-nav")
          .append(document.querySelector(".header-social"));
      } else {
        document
          .querySelector(".header-nav")
          .after(document.querySelector(".header-social"));
      }
    },
    changeTheme() {
      if (this.isLightTheme) {
        document.body.style.setProperty("--main-text", "#fff");
        document.body.style.setProperty("--main-text--light", "#F7F7F7");
        document.body.style.setProperty("--main-bg", "#000");
        document.body.style.setProperty("--main-bg--light", "#1e1e1e");
      } else {
        document.body.style.setProperty("--main-text", "#000");
        document.body.style.setProperty("--main-text--light", "#131313");
        document.body.style.setProperty("--main-bg", "#fff");
        document.body.style.setProperty("--main-bg--light", "#bebebe");
      }
      this.isLightTheme = !this.isLightTheme;
    },
  },
  mounted() {
    this.addSocialToMenu();
    window.addEventListener("resize", this.addSocialToMenu);
  },
  beforeUnmount() {
    window.removeEventListener("resize", this.addSocialToMenu);
  },
};
</script>

<style lang="scss">
.header {
  position: sticky;
  top: 0;
  z-index: 10;

  background-color: $white;

  &--shadow {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }

  & .container {
    display: flex;
    justify-content: space-between;
    align-items: center;

    height: 80px;

    @media (max-width: 991px) {
      height: 50px;
    }
  }
}

.header-logo {
  @media (max-width: 992px) {
    margin-right: auto;
  }
}

// .header-nav {
//   @media (max-width: 1200px) {
//     position: fixed;
//     top: 0;
//     right: 0;
//     bottom: 0;
//     width: 300px;
//     transform: scaleX(0);
//     transition: $transition;
//     transform-origin: right;

//     display: flex;
//     flex-direction: column;
//     justify-content: flex-start;
//     align-items: flex-start;

//     padding: 50px 40px 20px 40px;

//     background-color: $white;

//     &.active {
//       transform: scaleX(1);
//     }
//   }

//   &__link {
//     margin: 0 12px;

//     @media (max-width: 1200px) {
//       margin: 10px 0px;
//     }
//   }
// }

.header-nav {
  @media (max-width: 992px) {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    max-width: 280px;
    transform: scaleX(0);
    transition: 0.3s transform ease, $transition-theme background-color ease;
    transform-origin: right;
    z-index: 10;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;

    padding: 70px 40px 20px 40px;

    background-color: $white;

    &.active {
      transform: scaleX(1);
    }

    // &:focus-within {
    //   transform: scaleX(1);
    // }
  }

  &__list {
    display: flex;

    @media (max-width: 992px) {
      flex-direction: column;
    }
  }

  &__item {
    margin: 0 12px;

    @media (max-width: 1200px) {
      margin: 0 8px;
    }

    @media (max-width: 992px) {
      margin: 10px 0px;
    }
  }

  &__link.router-link-exact-active,
  &__link:focus {
    color: $green;
    transition: 8s color ease;
    // outline-offset: 2px;
  }
}

.header-social {
  display: flex;
  justify-content: center;
  align-content: inherit;

  @media (max-width: 992px) {
    margin-right: 28px;
  }

  @media (max-width: 768px) {
    margin-top: 40px;
  }

  &__button ~ &__button {
    margin-left: 10px;

    @media (max-width: 1199px) {
      margin-left: 5px;
    }
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

.header-btn {
  & button {
    position: relative;
    z-index: 11;
  }

  & button ~ button {
    margin-left: 8px;
  }

  @media (max-width: 319px) {
    & button:last-child {
      display: none;
    }
  }
}

.header-hamburger {
  margin-left: 28px;

  @media (max-width: 768px) {
    margin-left: 18px;
  }

  @media (max-width: 349px) {
    margin-left: 8px;
  }
}
</style>

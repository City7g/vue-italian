<template>
  <footer class="footer">
    <FooterCatFoot class="footer-cat-foot" />
    <FooterCatFoot class="footer-cat-foot" />
    <div class="container">
      <MainLogo class="footer-first" />

      <ul class="footer-list">
        <li
          v-for="link in menuList"
          :key="link.title"
          class="footer-list__item"
        >
          <router-link :to="link.path" class="main-link footer-list__link">
            {{ link.title }}
          </router-link>
        </li>
      </ul>

      <button class="main-btn--white footer-write footer-btn">
        Написать нам
      </button>

      <div class="footer-copy">
        <span class="text-main">
          Designed by <strong>Id.</strong> and <strong>GroupTechno</strong>
        </span>

        <span class="text-main">© Studia.it 2019</span>
      </div>
    </div>
  </footer>
</template>

<script>
import MainLogo from "@/components/MainLogo.vue";
import FooterCatFoot from "@/assets/images/footer-cat-foot.svg?inline";

export default {
  name: "MainFooter",
  components: { MainLogo, FooterCatFoot },
  data() {
    return {
      menuList: [
        {
          title: "Обучение",
          path: "/",
        },
        {
          title: "Блог",
          path: "/",
        },
        {
          title: "Материалы",
          path: "/",
        },
        {
          title: "О школе ",
          path: "/",
        },
        {
          title: "Подход к обучению",
          path: "/",
        },
        {
          title: "Личный кабинет",
          path: "/",
        },
        {
          title: "Вход / Регистрация",
          path: "/",
        },
      ],
    };
  },
};
</script>

<style lang="scss">
.footer {
  position: relative;
  padding: 60px 0 60px;
  margin-top: auto;

  background-color: $grey-bg;
  overflow: hidden;

  @media (max-width: 768px) {
    padding-top: 25px;
    padding-bottom: 30px;
  }

  &-cat-foot {
    position: absolute;
    bottom: 0;

    pointer-events: none;

    @media (max-width: 992px) {
      width: 200px;
    }

    @media (max-width: 576px) {
      width: 150px;
    }

    &:first-of-type {
      left: calc(50% - 530px);

      @media (max-width: 992px) {
        left: 50px;
      }

      @media (max-width: 576px) {
        left: -30px;
      }
    }

    &:last-of-type {
      right: calc(50% - 530px);

      @media (max-width: 992px) {
        right: 50px;
      }

      @media (max-width: 576px) {
        right: -30px;
      }
    }
  }

  & .container {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-wrap: wrap;

    @media (max-width: 768px) {
      align-items: center;
      justify-content: flex-start;
    }
  }
}

.footer-first {
  order: -1;

  @media (max-width: 768px) {
    width: calc(50% + 15px);
  }
}

.footer-list {
  column-count: 3;
  column-gap: 60px;

  color: #353535;

  @media (max-width: 1200px) {
    column-count: 2;
  }

  @media (max-width: 768px) {
    order: 3;

    column-gap: 30px;

    width: 100%;
    margin-top: 40px;
  }

  &__item {
    display: block;

    margin-bottom: 10px;
  }
}

.footer-btn {
  @media (max-width: 768px) {
    order: 2;
  }
}

.footer-copy {
  order: 10;

  width: 100%;
  margin-top: 20px;

  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-wrap: wrap;

  @media (max-width: 1200px) {
    margin-top: 30px;
  }

  @media (max-width: 768px) {
    margin-top: 60px;
  }

  & span {
    white-space: nowrap;
  }

  & span ~ span {
    margin-left: 114px;

    @media (max-width: 768px) {
      margin-left: 35px;
    }
  }
}
</style>

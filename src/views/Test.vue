<template>
  <main class="test-page">
    <section class="test-section">
      <div class="container">
        <div class="test-section__img">
          <HomeNext />
        </div>

        <div class="test-section__content">
          <h1 class="title-h2 test-section__title">
            Тест на знание Итальянского
          </h1>

          <p class="text-regular test-section__text">
            <!-- <img src="@/assets/images/numbers/1.svg" alt="" /> -->
            Dolor aute enim pariatur veniam adipisicing laborum sunt
            reprehenderit.?
          </p>

          <ul class="test-list test-section__list">
            <li
              class="test-list__item"
              :class="{ active: selectedItem === index }"
              v-for="(item, index) in 3"
              :key="index"
              @click="selectedItem = index"
            >
              Dolor aute enim pariatur veniam
            </li>
          </ul>

          <button class="main-btn test-section__btn">Продолжить</button>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import gsap from "gsap";
import HomeNext from "@/assets/images/home-next.svg?inline";

export default {
  name: "Test",
  components: { HomeNext },
  data() {
    return {
      selectedItem: null,
      currentCount: 0,
    };
  },
  methods: {
    hideBG() {
      return new Promise((resolve) => {
        const timeline = gsap.timeline();

        timeline
          .to(".test-section__img", 0.5, { opacity: 0, scale: 0 })
          .to(".test-section__content", 0.5, { opacity: 0, scale: 0 })
          .add(resolve);
      });
    },
    showBG() {
      const timeline = gsap.timeline();

      timeline
        .from(".test-section__img", 0.5, { opacity: 0, scale: 0 }, "+=0.1")
        .from(
          ".test-section__content",
          0.5,
          { opacity: 0, scale: 0 },
          "-=0.25"
        );
    },
  },
  beforeRouteLeave(to, from, next) {
    this.hideBG().then(next);
  },
  mounted() {
    this.showBG();
  },
};
</script>

<style lang="scss">
.test-page {
  flex-grow: 1;
}

.test-section {
  background-color: $white;

  & .container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 100px;

    @media (max-width: 768px) {
      grid-template-columns: 1fr;
      gap: 40px;
    }
  }

  &__title {
    margin-bottom: 40px;
  }

  &__text {
    position: relative;

    margin-left: 70px;

    & img {
      position: absolute;
      top: 50%;
      left: -70px;
      transform: translateY(-50%);
    }
  }

  &__list {
    margin-left: 70px;
    margin-top: 30px;
  }

  &__btn {
    margin-left: 70px;
    margin-top: 70px;
  }
}

.test-list {
  display: flex;
  flex-direction: column;
  gap: 24px;

  &__item {
    position: relative;

    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 18px;

    cursor: pointer;

    &::before {
      // position: absolute;
      display: block;
      width: 18px;
      height: 18px;

      background-color: $red;
      border-radius: 50%;
      border: 4px solid $red;
      opacity: 0.3;
      content: "";
    }

    &.active::before {
      opacity: 1;
    }
  }
}

.list-item {
  display: inline-block;
  margin-right: 10px;
}
.list-enter-active,
.list-leave-active {
  transition: all 1s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
</style>
<template>
  <main class="home">
    <!-- Начни учить итальянский прямо сейчас! -->
    <InfoSection
      title="Начни учить итальянский прямо сейчас!"
      description="Studia.it предлагает новый подход к изучению итальянского языка! Мы
            раскладываем язык по полочкам, проникаем в самую его суть и
            вытаскиваем из недр самое нужное."
      button="Начать обучение"
      img="home-first.svg"
    >
      <button class="main-btn" @click="change_state_login">Начать</button>
    </InfoSection>

    <!-- Кто мы? -->
    <InfoSection
      title="Кто мы?"
      description="Studia.it предлагает новый подход к изучению итальянского языка! Мы
            раскладываем язык по полочкам, проникаем в самую его суть и
            вытаскиваем из недр самое нужное. Разрабатываем навыки, избавляемся
            от барьеров и препятствий, ищем интересное, знакомимся, общаемся и
            дружим! Мы за гибкость и интерактивность.<br /><br />Хочешь узнать
            больше? Жми!"
      img="home-we.svg"
      isGrey
      isFirstImg
      isHomeWeClewImg
    >
      <router-link class="main-btn" :to="{ name: 'About' }">
        Узнать больше!
      </router-link>
    </InfoSection>

    <section class="home-grammar">
      <div class="container">
        <h2 class="title-h1 transform-text home-grammar__title">
          <router-link to="/grammar">Грамматика</router-link>
        </h2>

        <MaterialBlock />
      </div>
    </section>

    <section class="home-presentation">
      <div class="container">
        <div class="home-presentation__img">
          <HomePresentation />
        </div>

        <div class="home-presentation__content">
          <h2 class="title-h1 home-presentation__title">Презентации</h2>
          <div class="home-presentation__slider">
            <div>
              <MainSlider />
            </div>
          </div>
          <p class="title-h2 home-presentation__description">
            Итальянская грамматика наглядно и доступно
          </p>
        </div>
      </div>
    </section>

    <!-- Что дальше? -->
    <InfoSection
      title="Что дальше?"
      description="Exercitation enim non Lorem nostrud nisi commodo aliqua dolor eu
            tempor veniam non nisi do. Cillum sunt aliquip eu proident excepteur
            aute nostrud eiusmod dolore non voluptate laborum."
      img="home-next.svg"
      isGrey
    >
      <button class="main-btn" @click="change_state_login">Начать</button>
    </InfoSection>

    <section class="home-blog">
      <div class="container">
        <h2 class="title-h1 transform-text home-blog__title">
          <router-link to="/blog">Блог</router-link>
        </h2>

        <div class="home-blog__wrap">
          <router-link
            :to="`/blog#${category.value}`"
            v-for="category in blogCategory"
            :key="category.id"
            class="blog-card"
          >
            <img
              :src="require(`@/assets/images/blog/${category.img}`)"
              alt=""
              class="blog-card__img"
            />
            <h3 class="title-h2 blog-card__title">#{{ category.title }}</h3>
          </router-link>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import { mapState, mapActions } from "vuex";
import InfoSection from "@/components/Sections/InfoSection.vue";
import MaterialBlock from "@/components/Blocks/MaterialBlock.vue";
import MainSlider from "@/components/MainSlider.vue";
// Images
import HomePresentation from "@/assets/images/home-presentation.svg?inline";

export default {
  name: "Home",
  components: { InfoSection, MaterialBlock, MainSlider,HomePresentation },
  computed: {
    ...mapState(["blogCategory", "grammarList"]),
  },
  methods: {
    ...mapActions(["change_state_login"]),
  },
};
</script>

<style lang="scss">
.home-grammar {
  background-color: $white;

  &__title {
    margin-bottom: 60px;

    @media (max-width: 1200px) {
      margin-bottom: 40px;
    }

    @media (max-width: 768px) {
      margin-bottom: 30px;
    }
  }
}

.home-blog {
  background-color: $white;

  &__wrap {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 22px;

    @media (max-width: 1200px) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 768px) {
      grid-template-columns: 1fr;
      gap: 10px;
    }
  }

  &__title {
    margin-bottom: 55px;

    @media (max-width: 1200px) {
      margin-bottom: 40px;
    }

    @media (max-width: 768px) {
      margin-bottom: 30px;
    }
  }
}

.blog-card {
  width: 100%;
  max-width: 400px;
  padding: 80px 40px 60px;
  margin: 0 auto;

  border: 1px solid $black;
  border-radius: $border;
  text-align: center;
  cursor: pointer;

  @media (max-width: 1200px) {
    padding: 50px 30px 45px;
  }

  @media (max-width: 576px) {
    padding: 45px 20px 40px;
  }

  &:hover &__title,
  &:focus &__title {
    color: $red;
  }

  &__title {
    transition: $transition;
  }

  &__img {
    margin: 0 auto 60px;

    @media (max-width: 1200px) {
      margin-bottom: 50px;
    }

    @media (max-width: 768px) {
      margin-bottom: 40px;
    }
  }
}

.home-presentation {
  background-color: $white;

  & .container {
    display: grid;
    grid-template-columns: repeat(2, minmax(100px, 1fr));
    align-items: center;
    gap: 100px;

    @media (max-width: 768px) {
      grid-template-columns: minmax(100px, 1fr);
      gap: 40px;
    }
  }

  &__img img,
  &__img svg {
    width: 100%;
  }

  &__content {
    @media (max-width: 768px) {
      order: -1;
    }
  }

  &__title {
    margin-bottom: 30px;

    @media (max-width: 768px) {
      margin-bottom: 25px;
    }
  }

  &__description {
    margin-top: 25px;

    @media (max-width: 768px) {
      margin-top: 15px;
    }
  }
}
</style>
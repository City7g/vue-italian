<template>
  <main class="blog">
    <StandartHead page="blog" />

    <!-- Блог Studia.it -->
    <InfoSection
      title="Блог Studia.it"
      description="Studia.it предлагает новый подход к изучению итальянского языка! Мы
            раскладываем язык по полочкам, проникаем в самую его суть и
            вытаскиваем из недр самое нужное. Разрабатываем навыки, избавляемся
            от барьеров и препятствий, ищем интересное, знакомимся, общаемся и
            дружим! Мы за гибкость и интерактивность. Хочешь узнать больше? Жми!"
      button="Узнать больше!"
      img="BlogImg"
      isGrey
      isFirstImg
    />

    <section class="blog-content">
      <div class="container">
        <ul class="blog-tab">
          <li
            v-for="category in blogCategory"
            :key="category.id"
            @click="currentCategory = category.value"
            class="title-h2 blog-tab__item"
            :class="{ active: category.value === currentCategory }"
          >
            {{ category.title }}
          </li>
        </ul>

        <div class="blog-posts">
          <div v-for="post in showBlogList" :key="post.id" class="blog-post">
            <img
              :src="require(`@/assets/images/blog/${post.img}`)"
              alt=""
              class="blog-post__img"
            />
            <h2 class="text-main blog-post__title">{{ post.title }}</h2>
            <p class="blog-post__date">{{ post.date }}</p>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import { mapState } from "vuex";
import StandartHead from "@/components/Sections/StandartHead.vue";
import InfoSection from "@/components/Sections/InfoSection.vue";

export default {
  name: "Blog",
  components: { StandartHead, InfoSection },
  data() {
    return {
      currentCategory: "italy",
    };
  },
  computed: {
    ...mapState(["blogCategory", "blogList"]),
    showBlogList() {
      return this.blogList.filter((c) =>
        c.categories.includes(this.currentCategory)
      );
    },
  },
  mounted() {
    if (this.$route.hash) {
      const hash = this.$route.hash;
      this.currentCategory = hash.replace(/^#/, "");
      const scrollByTop =
        document.querySelector(".blog-content").offsetTop -
        document.querySelector(".header").clientHeight;

      window.scrollTo(0, scrollByTop);
    }
  },
};
</script>

<style lang="scss">
.blog-content {
  background-color: $white;
}

.blog-posts {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 60px 25px;

  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 40px 20px;
  }

  @media (max-width: 576px) {
    grid-template-columns: 1fr;
    gap: 30px;
  }
}

.blog-post {
  &__img {
    width: 100%;
  }

  &__title {
    margin-bottom: 5px;

    @media (max-width: 576px) {
      margin-bottom: 2px;
    }
  }

  &__date {
    color: #9e9e9e;

    font-size: 18px;
    line-height: 31px;
    letter-spacing: 0.05em;
  }
}

.blog-tab {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  margin-bottom: 60px;

  &__item {
    margin: 0 85px;

    cursor: pointer;

    @media (max-width: 1200px) {
      margin: 0 20px;
    }

    @media (max-width: 576px) {
      margin: 0 12px;
    }

    @media (max-width: 359px) {
      margin: 0 8px;
    }
  }

  & .active {
    color: $red;
  }
}
</style>
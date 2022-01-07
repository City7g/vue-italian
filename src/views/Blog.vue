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
        <svg
          v-if="loading"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
          class="blog-content__loading"
        >
          <path
            d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50"
          >
            <animateTransform
              attributeName="transform"
              type="rotate"
              dur="1s"
              from="0 50 50"
              to="360 50 50"
              repeatCount="indefinite"
            />
          </path>
        </svg>

        <template v-else>
          <ul class="blog-tab">
            <li
              v-for="category in blogCategory"
              :key="category.id"
              @click="filterBlog(category.value)"
              class="title-h2 blog-tab__item"
              :class="{ active: category.value === currentCategory }"
            >
              {{ category.title }}
            </li>
          </ul>

          <div class="blog-posts">
            <div
              v-for="post in blogList"
              :key="post.id"
              class="blog-post"
              :style="{
                display: post.category.includes(currentCategory)
                  ? 'block'
                  : 'none',
              }"
            >
              <img :src="post.img" alt="" class="blog-post__img" />
              <h2 class="text-main blog-post__title">{{ post.title }}</h2>
              <p class="blog-post__date">{{ formatDate(post.createdAt) }}</p>
            </div>
          </div>
        </template>
      </div>
    </section>
  </main>
</template>

<script>
// import { gsap } from "gsap";
// import { Flip } from "gsap/Flip";

import axios from "axios";
import { mapState } from "vuex";
import StandartHead from "@/components/Sections/StandartHead.vue";
import InfoSection from "@/components/Sections/InfoSection.vue";

export default {
  name: "Blog",
  components: { StandartHead, InfoSection },
  data() {
    return {
      currentCategory: "italy",
      blogList: null,
      loading: true,
    };
  },
  methods: {
    formatDate(value) {
      const now = new Date(value)
        .toLocaleString("ru", {
          day: "numeric",
          month: "long",
          year: "numeric",
        })
        .slice(0, -3);
      return now;
    },
    filterBlog(value) {
      this.currentCategory = value;
      // const state = Flip.getState(".blog-post");

      // console.log(state);
      // Flip.from(state, {
      //   duration: 0.7,
      //   scale: true,
      //   absolute: true,
      //   stagger: 0.08,
      // });
    },
  },
  computed: {
    ...mapState(["blogCategory"]),
    // showBlogList() {
    //   return this.blogList.filter((c) =>
    //     c.category.includes(this.currentCategory)
    //   );
    // },
  },
  mounted() {
    // gsap.registerPlugin(Flip);
    if (this.$route.hash) {
      const hash = this.$route.hash;
      this.currentCategory = hash.replace(/^#/, "");
      const scrollByTop =
        document.querySelector(".blog-content").offsetTop -
        document.querySelector(".header").clientHeight;

      window.scrollTo(0, scrollByTop);
    }
    axios.get("https://italian-back.herokuapp.com/blog").then((data) => {
      for (let i = 0; i < data.data.length; i++) {
        data.data[i].category = JSON.parse(data.data[i].category);
      }
      this.loading = false;
      this.blogList = data.data;
    });
  },
};
</script>

<style lang="scss">
.blog-content {
  background-color: $white;

  &__loading {
    display: block;
    width: 50px;
    margin: 0 auto;

    fill: $green;
  }
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
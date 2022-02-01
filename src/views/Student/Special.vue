<template>
  <div class="student-special">
    <BlogImg class="student-special__head" />

    <div class="student-special__content">
      <div class="student-special__left">
        <SpecialAsideLeft class="student-special__img" />
        <p>Специальное занятие не интерисует ???</p>
      </div>

      <h1 class="title-h2--bold student-special__title">
        Написание резюме, подготовка к собеседованию?
      </h1>
      <p class="text-main">
        Если у вас есть какая-то конкретная задача, которая не вписывается в
        рамки обычных занятий языком, напишите об этом нам, и мы придумаем, как
        вам помочь! Написание резюме, подготовка к собеседованию, подготовка
        публичного выступления, презентации, экзаменационных речей...
      </p>

      <BaseButton class="student-special__button" text="Заполнить анкету" />
    </div>
  </div>
</template>

<script>
import SpecialAsideLeft from "@/assets/images/special-aside-left.svg?inline";
import BlogImg from "@/assets/images/blog-head.svg?inline";
// import TeacherInformation from "@/components/Student/TeacherInformation.vue";

export default {
  name: "AllTeachers",
  components: { SpecialAsideLeft, BlogImg },
  data() {
    return {
      teacherList: null,
      loading: true,
    };
  },
  // mounted() {
  //   axios.get("https://italian-back.herokuapp.com/teacher").then((data) => {
  //     this.loading = false;
  //     this.teacherList = data.data;
  //   });
  // },
};
</script>

<style lang="scss">
.student-special {
  max-width: 900px;

  padding: 40px 30px;

  @media (max-width: 768px) {
    padding: 20px;
  }

  &__head {
    margin-bottom: 80px;

    @media (max-width: 768px) {
      margin-bottom: 40px;
    }
  }

  &__content {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
    gap: 0 50px;

    @media (max-width: 991px) {
      display: block;
    }
  }

  &__left {
    grid-column: 1 / 2;
    grid-row: 1 / 4;
  }

  &__title {
    margin-bottom: 12px;

    @media (max-width: 768px) {
      margin-bottom: 10px;
    }
  }

  &__button {
    justify-self: start;
    margin-top: 40px;

    @media (max-width: 768px) {
      margin-top: 25px;
    }
  }

  &__loading {
    display: block;
    width: 50px;
    margin: 0 auto;

    fill: $green;
  }
}
</style>
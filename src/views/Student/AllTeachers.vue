<template>
  <div class="all-teachers">
    <h1 class="title-h2--bold all-teachers__title">
      Выбери своего первого преподавателя!
    </h1>

    <svg
      v-if="loading"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      class="all-teachers__loading"
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
      <TeacherInformation
        v-for="teacherInfo in teacherList"
        :key="teacherInfo.id"
        :teacherInfo="teacherInfo"
      />
    </template>
  </div>
</template>

<script>
import axios from "axios";
import TeacherInformation from "@/components/Student/TeacherInformation.vue";

export default {
  name: "AllTeachers",
  components: { TeacherInformation },
  data() {
    return {
      teacherList: null,
      loading: true,
    };
  },
  mounted() {
    axios.get("https://italian-back.herokuapp.com/teacher").then((data) => {
      this.loading = false;
      this.teacherList = data.data;
    });
  },
};
</script>

<style lang="scss">
.all-teachers {
  max-width: 900px;

  padding: 40px 30px;

  @media (max-width: 768px) {
    padding: 20px;
  }

  &__title {
    margin-bottom: 60px;

    @media (max-width: 768px) {
      margin-bottom: 40px;
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
<template>
  <div class="student-calendar">
    <h1 class="title-h3 student-calendar__title">Выберите дату занятия</h1>

    <MainCalendar />
  </div>
</template>

<script>
import MainCalendar from "@/components/Calendar/Main.vue";

export default {
  name: "StudentCalendar",
  components: { MainCalendar },
};
</script>

<style lang="scss">
.student-calendar {
  max-width: 900px;
  padding: 38px 30px;

  @media (max-width: 992px) {
    padding: 20px 30px 30px;
  }

  @media (max-width: 768px) {
    padding: 10px 17px 15px;
  }

  &__title {
    margin-bottom: 25px;
  }
}
</style>
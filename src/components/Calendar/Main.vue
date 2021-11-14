<template>
  <div class="calendar">
    <div class="calendar__head">
      <div
        class="text-regular calendar__title"
        v-for="(day, index) in daysList"
        :key="index"
      >
        {{ day }}
      </div>
    </div>

    <div class="calendar__body">
      <div
        class="title-h3 calendar__day"
        :class="{ active: index === 12 }"
        v-for="(day, index) in 31"
        :key="index"
      >
        <span class="title-h3--bold calendar__number">
          {{ day }}
        </span>

        <img
          v-if="index === 12"
          src="@/assets/images/calendar/lesson.svg"
          alt=""
          class="calendar__lesson"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MainCalendar",
  data() {
    return {
      daysList: ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"],
    };
  },
};
</script>

<style lang="scss">
.calendar {
  max-width: 900px;
  padding: 38px 48px;

  background-color: $grey-bg;
  border-radius: 2px;

  @media (max-width: 992px) {
    padding: 38px 25px;
  }

  @media (max-width: 768px) {
    padding: 30px 20px;
  }

  &__head {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    gap: 2px;

    margin-bottom: 25px;
  }

  &__body {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    gap: 2px;
  }

  &__title {
    padding: 0 18px;

    text-align: right;

    @media (max-width: 992px) {
      padding: 0 15px;
    }
  }

  &__day {
    position: relative;

    padding: 12px 18px;
    aspect-ratio: 1 / 0.85;

    text-align: right;
    background-color: $white;
    border: 1px solid $white;
    border-radius: 2px;
    transition: 0.3s all ease;
    cursor: pointer;

    @media (max-width: 992px) {
      padding: 10px 15px;
    }

    @media (max-width: 768px) {
      padding: 5px 6px;
    }

    &:hover {
      border-color: #4b4b4b;
    }

    &.active {
      background-color: #f1ffea;
      border-color: $green;
    }
  }

  &__day.active &__number {
    color: $green;
  }

  &__lesson {
    position: absolute;
    bottom: 14px;
    left: 12px;
    width: 36px;

    @media (max-width: 992px) {
      bottom: 12px;
      left: 10px;
      width: 30px;
    }

    @media (max-width: 768px) {
      bottom: 5px;
      left: 5px;
      width: 15px;
    }
  }
}
</style>
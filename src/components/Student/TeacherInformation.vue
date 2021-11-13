<template>
  <div
    class="teacher-information"
    :class="{ active: isActive }"
    ref="teacher-information"
  >
    <div class="user-details teacher-information__avatar" ref="user-details">
      <img
        :src="require(`@/assets/images/teachers/${teacherInfo.avatar}`)"
        alt=""
        class="user-details__img"
      />
      <h4 class="text-bold user-details__name">{{ teacherInfo.name }}</h4>
      <h5 class="text-main user-details__nationality">
        {{ teacherInfo.nationality }}
      </h5>
    </div>

    <p
      class="text-main teacher-information__description"
      v-html="teacherInfo.description"
    />

    <div class="teacher-information__arrow" @click="showinformation" />

    <div class="teacher-information__info">
      <span></span>
      <span></span>
      <span></span>
    </div>

    <button class="white-btn teacher-information__video">
      Посмотреть видео
    </button>

    <button class="main-btn teacher-information__start">
      Назначить занятие
    </button>
  </div>
</template>

<script>
export default {
  name: "TeacherInformation",
  props: {
    teacherInfo: {
      type: Object,
      require: true,
    },
  },
  data() {
    return {
      isActive: false,
    };
  },
  methods: {
    showinformation() {
      this.isActive = !this.isActive;
    },
  },
  mounted() {
    // document.querySelector(".teacher-information").addEventListener("click", () => {
    //   if (
    //     document.querySelector(".teacher-information").classList.contains("no-active")
    //   ) {
    //     // console.log(+getComputedStyle(document.querySelector('.teacher-information')).paddingTop.substring(0, 2))
    //     // console.log(+getComputedStyle(document.querySelector('.teacher-information')).paddingBottom.substring(0, 2))
    //     // console.log(document.querySelector(".teacher-information").offsetHeight)
    //     // console.log(document.querySelector(".teacher-information").scrollHeight)
    //     document.querySelector(".teacher-information").style.height =
    //     document.querySelector(".teacher-information").scrollHeight + 60 + "px";
    //     document.querySelector('.teacher-information').classList.remove('no-active')
    //   } else {
    //     console.log(document.querySelector(".teacher-information"))
    //     document.querySelector(".teacher-information").style.height =
    //       document.querySelector(".teacher-information").scrollHeight + "px";
    //     document.querySelector(".teacher-information").style.transition =
    //       "0.5s all ease";
    //     setTimeout(() => {
    //       document.querySelector(".teacher-information").style.height = "144px";
    //       document.querySelector(".teacher-information").classList.add("no-active");
    //     }, 10);
    //   }
    // });
  },
};
</script>

<style lang="scss">
.teacher-information {
  display: grid;
  grid-template-columns: 5fr 6fr auto auto;
  grid-template-rows: auto auto auto 1fr;
  align-items: flex-start;
  gap: 0 40px;

  height: 144px;
  padding: 30px;
  margin-bottom: 13px;

  background-color: #f7f7f7;
  border-radius: 2px;
  transition: 0.2s all ease;
  overflow: hidden;

  @media (max-width: 768px) {
    grid-template-columns: 1fr auto auto;
    align-items: center;

    height: 90px;
    padding: 15px 18px;
  }

  &.active {
    height: auto;
  }

  // &.no-active &__description > p:first-child {
  //   overflow: hidden;
  //   text-overflow: ellipsis;
  //   display: -webkit-box;
  //   -webkit-line-clamp: 3;
  //   -webkit-box-orient: vertical;
  // }

  &__description {
    grid-column: 2 / 3;
    grid-row: 1 / 5;

    @include count-line(3);

    @media (max-width: 768px) {
      grid-column: 1 / -1;
      grid-row: auto;

      margin-top: 16px;
    }
  }

  &.active &__description {
    display: block;
  }

  &__arrow {
    grid-column: 3 / 4;
    grid-row: 1 / 5;

    width: 14px;
    height: 14px;

    border: solid #251c1c;
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);

    @media (max-width: 768px) {
      grid-column: 2 / 3;
      grid-row: 1 / 2;
    }
  }

  &__info {
    grid-column: 4 / 5;
    grid-row: 1 / 5;

    display: flex;
    flex-direction: column;
    gap: 4px;

    @media (max-width: 768px) {
      grid-column: 3 / 4;
      grid-row: 1 / 2;
    }

    & span {
      display: block;

      width: 6px;
      height: 6px;

      border-radius: 50%;
      background-color: #c4c4c4;
    }
  }

  &__video {
    margin-top: 48px;

    @media (max-width: 768px) {
      grid-column: 1 / -1;

      margin-top: 20px;
    }
  }

  &__start {
    margin-top: 13px;

    @media (max-width: 768px) {
      grid-column: 1 / -1;

      margin-top: 11px;
    }
  }
}

.user-details {
  display: grid;
  grid-template-columns: auto 1fr;
  align-content: center;
  gap: 0 23px;

  @media (max-width: 768px) {
    gap: 0 16px;
  }

  &__img {
    grid-row: 1 / 3;

    width: 86px;
    height: 86px;

    border-radius: 50%;

    @media (max-width: 768px) {
      width: 60px;
      height: 60px;
    }
  }

  &__name {
    margin-top: auto;
  }

  &__nationality {
    margin-bottom: auto;
  }
}
</style>
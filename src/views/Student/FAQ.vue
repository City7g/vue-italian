<template>
  <div class="student-faq">
    <h1 class="title-h3--bold student-faq__title">Поддержка пользователей</h1>

    <div class="faq-item" v-for="item in FAQList" :key="item.id">
      <img
        :src="require(`@/assets/images/${item.img}`)"
        alt=""
        class="faq-item__img"
      />
      <h2 class="text-bold faq-item__title">{{ item.title }}</h2>
      <p class="text-main faq-item__description">{{ item.description }}</p>
      <div class="faq-item__arrow" />
    </div>
  </div>
</template>

<script>
// import MainSwitch from "@/components/MainSwitch.vue";

export default {
  name: "StudentFAQ",
  // components: { MainSwitch },
  data() {
    return {
      FAQList: [
        {
          id: 0,
          title: "Как пользоваться Studia.it?",
          description:
            "Exercitation officia ad officia sit amet laboris Lorem Lorem. Veniam tur sint amet in cupidatat ea cillum. Irure fugiat magna deserunt labore veniam cupidatatxercitation officia ad officia sit amet laboris Lorem Lorem. Veniam tur sint amet in cupidatat ea cillum. Irure fugiat magna deserunt labore veniam cupidatatxercitation officia ad officia sit amet laboris Lorem Lorem. Veniam tur sint amet in cupidatat ea cillum. Irure fugiat magna deserunt labore veniam cupidatatxercitation officia ad officia sit amet laboris Lorem Lorem. Veniam tur sint amet in cupidatat ea cillum. Irure fugiat magna deserunt labore veniam cupidatat",
          img: "FAQ-1.svg",
        },
        {
          id: 1,
          title: "Что такое Studia.it?",
          description:
            "Exercitation officia ad officia sit amet laboris Lorem Lorem. Veniam tur sint amet in cupidatat ea cillum. Irure fugiat magna deserunt labore veniam cupidatatxercitation officia ad officia sit amet laboris Lorem Lorem. Veniam tur sint amet in cupidatat ea cillum. Irure fugiat magna deserunt labore veniam cupidatatxercitation officia ad officia sit amet laboris Lorem Lorem. Veniam tur sint amet in cupidatat ea cillum. Irure fugiat magna deserunt labore veniam cupidatatxercitation officia ad officia sit amet laboris Lorem Lorem. Veniam tur sint amet in cupidatat ea cillum. Irure fugiat magna deserunt labore veniam cupidatat",
          img: "FAQ-2.svg",
        },
        {
          id: 2,
          title: "Как повышать уровень?",
          description:
            "Exercitation officia ad officia sit amet laboris Lorem Lorem. Veniam tur sint amet in cupidatat ea cillum. Irure fugiat magna deserunt labore veniam cupidatatxercitation officia ad officia sit amet laboris Lorem Lorem. Veniam tur sint amet in cupidatat ea cillum. Irure fugiat magna deserunt labore veniam cupidatatxercitation officia ad officia sit amet laboris Lorem Lorem. Veniam tur sint amet in cupidatat ea cillum. Irure fugiat magna deserunt labore veniam cupidatatxercitation officia ad officia sit amet laboris Lorem Lorem. Veniam tur sint amet in cupidatat ea cillum. Irure fugiat magna deserunt labore veniam cupidatat",
          img: "FAQ-3.svg",
        },
        {
          id: 3,
          title: "Хочу работать у вас преподавателем! Куда мне писать?",
          description:
            "Exercitation officia ad officia sit amet laboris Lorem Lorem. Veniam tur sint amet in cupidatat ea cillum. Irure fugiat magna deserunt labore veniam cupidatatxercitation officia ad officia sit amet laboris Lorem Lorem. Veniam tur sint amet in cupidatat ea cillum. Irure fugiat magna deserunt labore veniam cupidatatxercitation officia ad officia sit amet laboris Lorem Lorem. Veniam tur sint amet in cupidatat ea cillum. Irure fugiat magna deserunt labore veniam cupidatatxercitation officia ad officia sit amet laboris Lorem Lorem. Veniam tur sint amet in cupidatat ea cillum. Irure fugiat magna deserunt labore veniam cupidatat",
          img: "FAQ-4.svg",
        },
        {
          id: 4,
          title: "Забыл пароль, что делать?",
          description:
            "Exercitation officia ad officia sit amet laboris Lorem Lorem. Veniam tur sint amet in cupidatat ea cillum. Irure fugiat magna deserunt labore veniam cupidatatxercitation officia ad officia sit amet laboris Lorem Lorem. Veniam tur sint amet in cupidatat ea cillum. Irure fugiat magna deserunt labore veniam cupidatatxercitation officia ad officia sit amet laboris Lorem Lorem. Veniam tur sint amet in cupidatat ea cillum. Irure fugiat magna deserunt labore veniam cupidatatxercitation officia ad officia sit amet laboris Lorem Lorem. Veniam tur sint amet in cupidatat ea cillum. Irure fugiat magna deserunt labore veniam cupidatat",
          img: "FAQ-5.svg",
        },
      ],
    };
  },
};
</script>

<style lang="scss">
.student-faq {
  max-width: 900px;
  padding: 40px 30px;

  &__title {
    margin-bottom: 30px;
  }
}

.faq-item {
  display: grid;
  grid-template-columns: auto 1fr auto;
  gap: 10px 50px;

  padding: 35px 30px;

  background-color: #f7f7f7;
  border-radius: 2px;

  &:not(:last-child) {
    margin-bottom: 13px;
  }

  @media (max-width: 768px) {
    gap: 3px 15px;
  }

  &__img {
    grid-row: 1 / 3;

    @media (max-width: 768px) {
      max-width: 50px;
    }
  }

  &__title,
  &__description {
    grid-column: 2 / 3;

    max-width: 500px;
  }

  &__description {
    @include count-line(3);

    @media (max-width: 768px) {
      @include count-line(2);
    }
  }
}
</style>
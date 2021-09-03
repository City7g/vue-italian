<template>
  <main class="media-page">
    <StandartHead page="presentation" />

    <InfoSection
      title="Презентации"
      description="Studia.it предлагает новый подход к изучению итальянского языка!<br>Мы раскладываем язык по полочкам, проникаем в самую его суть и вытаскиваем из недр самое нужное."
      img="about-school.svg"
      isFirstImg
    />

    <section class="presentation-slider">
      <div class="container">
        <div class="presentation-slider__wrap">
          <MainSlider />

          <MainSlider />
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import StandartHead from "@/components/Sections/StandartHead.vue";
import InfoSection from "@/components/Sections/InfoSection.vue";
import MainSlider from "@/components/MainSlider.vue";

export default {
  name: "Presentation",
  components: { StandartHead, InfoSection, MainSlider },
};
</script>

<style lang="scss">
.presentation-slider {
  &__wrap {
    display: grid;
    grid-template-columns: repeat(2, minmax(200px, calc(50% - 12px)));
    gap: 24px;

    @media (max-width: 768px) {
      grid-template-columns: 100%;
    }
  }

  &__item {
    overflow: hidden;
  }

  // & > * {
  //   flex: 0 0 250px;
  // }
}

// .slider__item:nth-child(2n) {
//   background-color: $green;
// }
</style>
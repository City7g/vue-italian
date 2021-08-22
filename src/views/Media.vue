<template>
  <main class="media-page">
    <StandartHead page="media" />

    <InfoSection
      title="Медиатека"
      description="Studia.it предлагает новый подход к изучению итальянского языка! Мы
            раскладываем язык по полочкам, проникаем в самую его суть и
            вытаскиваем из недр самое нужное. Разрабатываем навыки, избавляемся
            от барьеров и препятствий, ищем интересное, знакомимся, общаемся и
            дружим! Мы за гибкость и интерактивность. Хочешь узнать больше? Жми!"
      button="Узнать больше!"
      img="computer.svg"
      isFirstImg
    >
      <button class="main-btn">Узнать больше!</button>
    </InfoSection>

    <MediaSection
      title="О Италии"
      description="Studia.it предлагает новый подход к изучению итальянского языка!"
      :images="[1, 2, 2]"
      isGrey
    />

    <MediaSection
      title="О итальянской кухне"
      description="Studia.it предлагает новый подход к изучению итальянского языка!"
      :images="[3, 4, 5]"
    />

    <MediaSection
      title="О итальянском языке"
      description="Studia.it предлагает новый подход к изучению итальянского языка!"
      :images="[6, 7, 8]"
      isGrey
    />
  </main>
</template>

<script>
import StandartHead from "@/components/Sections/StandartHead.vue";
import InfoSection from "@/components/Sections/InfoSection.vue";
import MediaSection from "@/components/Sections/MediaSection.vue";

export default {
  name: "Home",
  components: { StandartHead, InfoSection, MediaSection },
};
</script>

<style lang="scss"></style>
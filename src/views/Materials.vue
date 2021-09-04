<template>
  <main class="about">
    <StandartHead page="materials" />

    <InfoSection
      title="Материалы для обучения"
      description="Studia.it предлагает новый подход к изучению итальянского языка! Мы раскладываем язык по полочкам, проникаем в самую его суть и вытаскиваем из недр самое нужное. Разрабатываем навыки, избавляемся от барьеров и препятствий, ищем интересное, знакомимся, общаемся и дружим! Мы за гибкость и интерактивность. Хочешь узнать больше? Жми!"
      img="CatNearTheBoard"
      isFirstImg
    >
    </InfoSection>
  </main>
</template>

<script>
import StandartHead from "@/components/Sections/StandartHead.vue";
import InfoSection from "@/components/Sections/InfoSection.vue";

export default {
  name: "Materials",
  components: { StandartHead, InfoSection },
};
</script>

<style lang="scss"></style>
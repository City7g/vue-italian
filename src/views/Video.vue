<template>
  <main class="video">
    <section class="video-section">
      <div class="container">
        <div class="video-section__content">
          <h1 class="title-h2 video-section__content-title">Италия. Летний Weekend.</h1>
          <p class="text-main">Sit ipsum nisi commodo amet ex quis minim. Id cillum irure aliquip dolore cupidatat magna Lorem officia proident non laborum do enim non. Ipsum incididunt adipisicing consequat sint ex consequat duis Lorem ipsum deserunt adipisicing officia. Dolore irure culpa ullamco</p>
        </div>

        <div class="video-section__video">
          <MainVideo />
        </div>
      </div>
    </section>
  </main>
</template>

<script>
// import NoWifiIcon from "@/assets/images/no-wifi.svg?inline";
import MainVideo from "@/components/MainVideo.vue"

export default {
  components: {
    MainVideo
  },
  data() {
    return {
      isConnected: true
    };
  },
  mounted() {
    console.log(this.$route)
  }
};
</script>

<style lang="scss">
.video-section {
  & .container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
    gap: 20px;

    @media (max-width: 992px) {
      grid-template-columns: 1fr;
    }
  }

  &__content {
    &-title {
      margin-bottom: 22px;
    }
  }
}
</style>
<template>
  <div class="touches">
    <section class="touches-section">
      <div class="container">
        <h1 class="title-h2 video-section__content-title">Коснитесь пальцем экрана</h1>
      </div>
    </section>

    <div v-show="touches[0].isShow" :style="{top: `${touches[0].positionY}px`, left: `${touches[0].positionX}px`}" class="touch__one"></div>
  </div>
</template>

<script>
// import NoWifiIcon from "@/assets/images/no-wifi.svg?inline";
// import MainVideo from "@/components/MainVideo.vue"

export default {
  name: 'Touches',
  data() {
    return {
      touches: [
        {
          isShow: false,
          positionX: 0,
          positionY: 0
        }
      ]
    };
  },
  mounted() {
    window.addEventListener('touchstart', e => {
      this.touches[0].isShow = true
      this.touches[0].positionX = e.touches[0].clientX
      this.touches[0].positionY = e.touches[0].clientY
    })
    window.addEventListener('touchmove', e => {
      console.log(e)
      this.touches[0].positionX = e.touches[0].clientX
      this.touches[0].positionY = e.touches[0].clientY
    })
    window.addEventListener('touchend', () => {
      this.touches[0].isShow = false
    })
  }
};
</script>

<style lang="scss">
.touches {
  margin-top: auto;
  
  text-align: center;
}

.touch__one {
  position: fixed;
  top: 100px;
  left: 100px;
  transform: translate(-50%, -50%);
  z-index: 100;

  width: 80px;
  height: 80px;
  border: 3px solid red;
  border-radius: 50%;
  box-shadow: 0 0 8px rgba(255, 0, 0, 0.8), inset 0 0 8px rgba(255, 0, 0, 0.8);
}
</style>
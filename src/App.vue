<template>
  <StudentLayout v-if="$route.meta.layout === 'student'" />
  <MainLayout v-else />
  <transition name="background">
    <Background v-show="stateLogin || stateRegister" />
  </transition>
  <transition name="popup">
    <Login v-show="stateLogin" />
  </transition>
  <transition name="popup">
    <Register v-show="stateRegister" />
  </transition>
  <NoWiFi />
</template>

<script>
import { mapGetters } from "vuex";
import StudentLayout from "@/layout/StudentLayout.vue";
import MainLayout from "@/layout/MainLayout.vue";
import Background from "@/components/Background.vue";
import Login from "@/components/Forms/Login.vue";
import Register from "@/components/Forms/Register.vue";
import NoWiFi from "@/components/NoWiFi.vue";

export default {
  components: {
    StudentLayout,
    MainLayout,
    Background,
    Login,
    Register,
    NoWiFi
  },
  computed: {
    ...mapGetters(["stateLogin", "stateRegister"]),
  },
  mounted() {
    let touchStart;
    let allowTransfromApp;
    window.addEventListener('touchstart', e => {
      touchStart = e.touches[0].pageY
      allowTransfromApp = window.pageYOffset < 10 && e.touches[0].pageX < 120 ? true : false
    })
    window.addEventListener('touchend', () => {
      document.querySelector('#app').style.transition = '0.3s all ease'
      document.querySelector('#app').style.transform = 'translateY(0)'
      setTimeout(() => {
        document.querySelector('#app').style.transition = 'none'
      }, 300);
    })
    window.addEventListener('touchmove', e => {
      console.log(allowTransfromApp)
      if(e.touches[0].pageY > touchStart && allowTransfromApp) {
        e.preventDefault()
        document.querySelector('#app').style.transform = `translateY(${Math.pow(e.touches[0].pageY - touchStart, 0.8)}px)`
      }
    }, { passive: false })
  }
};
</script>

<style lang="scss">
#app {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: stretch;

  min-height: 100vh;

  & .footer {
    margin-top: auto;
  }

  &::after {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 100vh;
    transform: translateY(-100vh);

    background-color: $green;
    content: '';
  }
}

// Fixed nprogress color
#nprogress .bar  {
  background-color: $green !important;
}

.background-enter-active,
.background-leave-active {
  transition: opacity 0.5s ease;
}

.background-enter-from,
.background-leave-to {
  opacity: 0;
}

.popup-enter-active,
.popup-leave-active {
  transition: transform 0.5s ease;
}

.popup-enter-from,
.popup-leave-to {
  transform: translateX(100%);
}
</style>

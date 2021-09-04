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
</template>

<script>
import { mapGetters } from "vuex";
import StudentLayout from "@/layout/StudentLayout.vue";
import MainLayout from "@/layout/MainLayout.vue";
import Background from "@/components/Background.vue";
import Login from "@/components/Forms/Login.vue";
import Register from "@/components/Forms/Register.vue";

export default {
  components: {
    StudentLayout,
    MainLayout,
    Background,
    Login,
    Register
  },
  computed: {
    ...mapGetters(["stateLogin", "stateRegister"]),
  },
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

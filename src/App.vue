<template>
  <StudentLayout v-if="$route.meta.layout === 'student'" />
  <MainLayout v-else />
  <transition name="background">
    <Background v-if="stateLogin" />
  </transition>
  <transition name="popup">
    <Login v-if="stateLogin" />
  </transition>
</template>

<script>
import { mapGetters } from "vuex";
import StudentLayout from "@/layout/StudentLayout.vue";
import MainLayout from "@/layout/MainLayout.vue";
import Background from "@/components/Background.vue";
import Login from "@/components/Login.vue";

export default {
  components: {
    StudentLayout,
    MainLayout,
    Background,
    Login,
  },
  computed: {
    ...mapGetters(["stateLogin"]),
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

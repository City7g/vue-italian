<template>
  <transition name="background">
    <Preloader v-if="loading" />
  </transition>
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
import Preloader from "@/components/Preloader.vue";

export default {
  components: {
    StudentLayout,
    MainLayout,
    Background,
    Login,
    Register,
    NoWiFi,
    Preloader,
  },
  data() {
    return {
      loading: true,
    };
  },
  computed: {
    ...mapGetters(["stateLogin", "stateRegister"]),
  },
  watch: {
    $route() {
      document.title = this.$route.meta.title || "Italian";

      if (window.location.hash === "#message=login") {
        this.$store.dispatch("change_state_login", true);
      }
    },
  },
  mounted() {
    setTimeout(() => {
      this.loading = false;
    }, 1000);
    if (localStorage.getItem("email") && localStorage.getItem("password")) {
      this.$store.dispatch("login", {
        email: localStorage.getItem("email"),
        password: localStorage.getItem("password"),
      });
    }
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

// Fixed nprogress color
#nprogress .bar {
  background-color: $green !important;
}

#nprogress .peg {
  box-shadow: 0 0 10px $green, 0 0 5px $green;
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

<template>
  <!-- <MainHeader /> -->
  <main class="layout-main">
    <StudentSidebar />
    <router-view />
  </main>
  <!-- <MainFooter /> -->
</template>

<script>
import StudentSidebar from "@/components/StudentSidebar.vue";

export default {
  components: {
    StudentSidebar
    
  },
};
</script>

<style lang="scss">
.layout-main {
  display: grid;
  grid-template-columns: 500px 1fr;

  min-height: 100vh;

  @media (max-width: 1649px) {
    grid-template-columns: 400px 1fr;
  }

  @media (max-width: 1199px) {
    grid-template-columns: 300px 1fr;
  }

  @media (max-width: 991px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto 1fr;
  }
}
</style>
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
  grid-template-columns: 400px 1fr;
  justify-content: center;

  min-height: 100vh;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
}
</style>
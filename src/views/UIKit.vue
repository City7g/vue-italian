<template>
  <section class="ui-kit">
    <div class="container">
      <div class="ui-kit__titles">
        <h2 class="title-h2">Titles</h2>
        <p class="title-h1">title-h1</p>
        <p class="title-h2">title-h2</p>
        <p class="title-h3">title-h3</p>
      </div>
      <div class="ui-kit__text">
        <h2 class="title-h2">Text</h2>
        <p class="text-main">Text/Main Regular 14 pt - text-main</p>
        <p class="text-regular">Text/Main Regular 16pt - text-regular</p>
        <p class="text-bold">Text/Main Bold 18pt - text-bold</p>
      </div>

      <input type="text" v-model="val" ref="input" style="display: block" />
    </div>
  </section>
</template>

<script>
export default {
  name: "UIKit",
  data() {
    return {
      val: null,
    };
  },
  mounted() {
    document.querySelectorAll("p").forEach((item) => {
      item.addEventListener("click", () => {
        if (item.getAttribute("class")) {
          this.val = item.getAttribute("class");
          setTimeout(() => {
            this.$refs.input.select();
            document.execCommand("copy");
            this.$refs.input.blur();
          }, 10);
        }
      });
    });
  },
};
</script>

<style lang="scss">
.ui-kit {
  & .container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 40px;
  }
  h2 {
    margin-bottom: 20px;
  }
  p {
    margin-bottom: 10px;

    cursor: pointer;
  }
}
</style>
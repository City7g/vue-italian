<template>
  <div
    v-if="!isMobileDevice"
    class="main-select"
    :class="{ active: isOpen }"
    @click="isOpen = !isOpen"
  >
    <div class="button-bold main-select__selected">
      {{ currentItem }}
    </div>
    <div
      v-for="item in showItems"
      :key="item.id"
      @click.stop="selectItem(item.id)"
      class="button-bold main-select__other"
    >
      {{ item.value }}
    </div>
    <svg
      width="12"
      height="7"
      viewBox="0 0 12 7"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      class="main-select__arr"
      :class="{ active: isOpen }"
    >
      <path
        d="M1 6L6 1L11 6"
        stroke="#39B100"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  </div>

  <select v-else class="basic-select" v-model="currentValue">
    <option v-for="item in selectValues" :key="item.id" value="item.id">
      {{ item.value }}
    </option>
  </select>
</template>

<script>
export default {
  name: "MainSelect",
  data() {
    return {
      currentValue: 0,
      isOpen: false,

      selectValues: [
        {
          id: 0,
          value: "А1",
        },
        {
          id: 1,
          value: "А2",
        },
        {
          id: 2,
          value: "B1",
        },
        {
          id: 3,
          value: "B2",
        },
        {
          id: 4,
          value: "C1",
        },
      ],
    };
  },
  methods: {
    selectItem(id) {
      this.isOpen = false;
      this.currentValue = id;
    },
  },
  watch: {
    currentValue(newValue) {
      console.log(newValue);
    },
  },
  computed: {
    currentItem() {
      return this.selectValues.find((c) => c.id === this.currentValue).value;
    },
    showItems() {
      return this.selectValues.filter((c) => c.id !== this.currentValue);
    },

    isMobileDevice() {
      return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      );
    },
  },
  mounted() {
    window.addEventListener("click", (e) => {
      // if (e.target.contains(document.querySelector(".main-select"))) {
      if (!document.querySelector(".main-select").contains(e.target)) {
        this.isOpen = false;
      }
    });
  },
};
</script>

<style lang="scss">
.main-select {
  position: absolute;
  top: 50%;
  transform: translateY(-18px);

  display: inline-block;
  max-height: 35px;
  padding: 7px 35px 7px 15px;

  background-color: $white;
  border: 1px solid $grey-disabled;
  border-radius: $border;
  overflow: hidden;
  cursor: pointer;
  transition: 0.5s max-height linear;

  &:focus {
    outline: 2px solid red;
  }

  &.active {
    max-height: 200px;

    transition: 0.5s max-height linear;
  }

  &__selected {
    color: $green;
  }

  &__other {
    margin-top: 8px;

    color: #4b4b4b;
  }

  &__arr {
    position: absolute;
    right: 12px;
    top: 13px;

    transition: 0.3s transform ease;

    &.active {
      transform: rotate(180deg);
    }
  }
}

.basic-select {
  padding: 8px;
}
</style>
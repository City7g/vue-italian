<template>
  <button class="small-btn">
    {{text}}
    <svg v-if="loading" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
        <path fill="#fff" d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50">
          <animateTransform 
            attributeName="transform"
            type="rotate"
            dur="1s" 
            from="0 50 50"
            to="360 50 50" 
            repeatCount="indefinite" />
      </path>
    </svg>
  </button>
</template>

<script>
export default {
  name: 'BaseButton',
  props: {
    text: {
      type: String,
      require: true
    },
    loading: {
      type: Boolean,
      require: false
    }
  }
}
</script>

<style lang="scss">
.small-btn {
  position: relative;
}
.small-btn svg {
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
}

.main-btn {
  padding: 14px 36px;

  font-size: 16px;
  line-height: 21px;
  font-weight: 700;

  color: white;
  background-color: $red;
  border-radius: $border;
  transition: $transition;

  &:hover {
    background-color: $red-hover;
  }

  &::selection {
    color: $red;
    background-color: $white;
  }

  @media (max-width: 1200px) {
    padding: 7px 25px;
    
    font-size: 12px;
    line-height: 16px;
  }
}

.main-btn--white {
  padding: 14px 36px;

  font-size: 16px;
  line-height: 21px;
  font-weight: 700;

  color: $red;
  background-color: transparent;
  border: 1px solid $red;
  border-radius: $border;
  transition: $transition;

  &:hover {
    color: white;
    background-color: $red;
  }

  &::selection {
    color: $red;
    background-color: $white;
  }

  @media (max-width: 1200px) {
    padding: 7px 25px;
    
    font-size: 12px;
    line-height: 16px;
  }

  @media (max-width: 991px) {
    padding: 7px 20px;
  }

  @media (max-width: 575px) {
    padding: 7px 12px;
  }

  @media (max-width: 359px) {
    padding: 7px 10px;
  }
}

.small-btn {
  padding: 12px 30px;

  font-size: 16px;
  line-height: 21px;
  font-weight: 700;

  color: white;
  background-color: $green;
  border-radius: $border;
  transition: $transition;

  &:hover {
    background-color: $green-hover;
  }

  &::selection {
    color: $green;
    background-color: $white;
  }

  &:disabled {
    background-color: $grey-disabled;
  }

  @media (max-width: 1200px) {
    padding: 7px 17px;
    
    font-size: 12px;
    line-height: 16px;
  }
}

.white-btn {
  padding: 11px 30px;

  font-size: 16px;
  line-height: 21px;
  font-weight: 700;

  color: $black;
  background-color: transparent;
  border: 1px solid $black;
  border-radius: $border;
  transition: $transition;

  &:hover {
    color: $green;
    border-color: $green;
  }

  @media (max-width: 1200px) {
    padding: 7px 17px;
    
    font-size: 12px;
    line-height: 16px;
  }
}

.white-btn--green {
  padding: 12px 30px;

  font-size: 16px;
  line-height: 21px;
  font-weight: 700;

  color: $green;
  background-color: transparent;
  border: 1px solid $green;
  border-radius: $border;
  transition: $transition;

  &:hover {
    color: $white;
    background-color: $green;
  }

  &::selection {
    color: $green;
    background-color: $white;
  }

  @media (max-width: 1200px) {
    padding: 7px 17px;
    
    font-size: 12px;
    line-height: 16px;
  }
}
</style>
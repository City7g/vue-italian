<template>
  <div class="main-video">
    <video
      :src="require(`@/assets/video/video-placeholder.mp4`)"
      ref="video"
      @click="playVideo($event)"
    ></video>

    <div class="controls">
      <div class="controls__play"></div>
      <div class="controls__progress">
        <input
          type="range"
          min="0"
          :max="videoLenght"
          v-model="progressVideo"
          @change="changeTimeVideo"
        />
      </div>
    </div>

    <img
      v-if="!isPlayVideo"
      class="main-video__play"
      src="@/assets/images/play-icon.svg"
      alt=""
      ref="video-play"
      @click="playVideo"
    />
  </div>
</template>

<script>
export default {
  name: "MainVideo",
  data() {
    return {
      currentTime: 0,
      videoLenght: 0,

      progressVideo: 0,
      isPlayVideo: false,
    };
  },
  methods: {
    clickVideo() {
      console.log(this.$refs.video.duration);
    },
    playVideo() {
      if (!this.isPlayVideo) {
        this.$refs.video.play();
        this.isPlayVideo = true;
      } else {
        this.$refs.video.pause();
        this.isPlayVideo = false;
      }
    },
    changeTimeVideo() {
      this.$refs.video.currentTime = this.progressVideo;
    },
  },
  mounted() {
    this.$refs.video.addEventListener("durationchange", () => {
      this.videoLenght = Math.ceil(this.$refs.video.duration);
    });

    this.$refs.video.addEventListener("timeupdate", () => {
      this.progressVideo = this.$refs.video.currentTime;
    });

    this.$refs.video.addEventListener("ended", () => {
      this.isPlayVideo = false;
      this.progressVideo = this.videoLenght;
    });
  },
};
</script>

<style lang="scss">
.main-video {
  position: relative;

  &__play {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    cursor: pointer;
  }

  .controls {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;

    &__progress {
      & input {
        width: 100%;
      }
    }
  }
}

input[type="range"] {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background-color: transparent;
  border: none;

  padding: 0 15px;

  &:hover,
  &:active,
  &:focus {
    border: none;
  }
}
// input[type="range"]::-webkit-slider-runnable-track {
//   border-radius: 10px/100%;
//   height: 7px;
//   border: 1px solid cyan;
//   background-color: #fff;
// }
// input[type="range"]::-webkit-slider-thumb {
//   background: #ecf0f1;
//   border: 1px solid red;
//   border-radius: 10px/100%;
//   cursor: pointer;
//   width: 15px;
//   height: 15px;
//   -webkit-appearance: none;
//   margin-top: -4px;
// }

input::-moz-range-progress {
  background-color: red;
  border: 2px solid red;
  height: 5px;
}

input[type="range"]::-moz-range-track {
  border-radius: 10px/100%;
  height: 5px;
  border: 2px solid $white;
  background-color: transparent;
  border-radius: 0;
}
input[type="range"]::-moz-range-thumb {
  background: transparent;
  appearance: none;
  border: 1px solid transparent;
  cursor: pointer;
}
</style>
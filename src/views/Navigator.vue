<template>
  <main>
    <section>
      <div class="container">
        <h1 class="title-h1 mb-2">Navigator</h1>

        <p ref="appCodeName" class="navigator__battery">!appCodeName -</p>
        <p ref="appVersion" class="navigator__battery">!appVersion -</p>
        <p ref="orientation" class="navigator__battery">orientation -</p>
        <!-- <p
          v-if="navigator.getBattery()"
          ref="battery"
          class="navigator__battery"
        >
          Battery - {{ batteryLevel }}
        </p> -->
        <!-- <p ref="connection" class="navigator__battery">connection -</p> -->
        <!-- <p ref="geolocation" class="navigator__battery">geolocation -</p> -->
        <p ref="language" class="navigator__battery">language -</p>
        <p ref="languages" class="navigator__battery">languages -</p>
        <p ref="onLine" class="navigator__battery">onLine -</p>
        <p ref="oscpu" class="navigator__battery">oscpu -</p>
        <p ref="platform" class="navigator__battery">platform -</p>
        <p ref="userAgent" class="navigator__battery">userAgent -</p>
        <p ref="cookieEnabled" class="navigator__battery">cookieEnabled -</p>
        <p ref="vibrate" class="navigator__battery" @click="vibrate">
          vibrate -
        </p>
        <p id="level"></p>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  name: "Navigator",
  data() {
    return {
      batteryLevel: null,
    };
  },
  methods: {
    vibrate() {
      navigator.vibrate([
        100, 30, 100, 30, 100, 200, 200, 30, 200, 30, 200, 200, 100, 30, 100,
        30, 100,
      ]);
    },
    showBatteryLevel(battery) {
      this.batteryLevel = battery.level * 100 + "%";
    },
  },
  mounted() {
    // var connection =
    //   navigator.connection ||
    //   navigator.mozConnection ||
    //   navigator.webkitConnection;
    // if (connection) {
    //   this.$refs.mimeTypes.textContent += connection.effectiveType;
    // } else {
    //   this.$refs.mimeTypes.textContent += "false";
    // }

    // var options = {
    //   enableHighAccuracy: true,
    //   timeout: 5000,
    //   maximumAge: 0,
    // };

    // let vm = this

    // function success(pos) {
    //   var crd = pos.coords;

    //   console.log(pos)

    //   console.log("Your current position is:");
    //   console.log(`Latitude : ${crd.latitude}`);
    //   vm.$refs.geolocation.textContent += `Latitude : ${crd.latitude}, `
    //   vm.$refs.geolocation.textContent += `Longitude: ${crd.longitude}`
    //   console.log(`Longitude: ${crd.longitude}`);
    //   console.log(`More or less ${crd.accuracy} meters.`);
    // }

    // console.log(navigator.geolocation.getCurrentPosition())

    // function error(err) {
    //   console.warn(`ERROR(${err.code}): ${err.message}`);
    // }

    // navigator.geolocation.getCurrentPosition(success, error, options);
    this.$refs.appCodeName.textContent += navigator.appCodeName;
    this.$refs.orientation.textContent += screen.orientation.type;
    this.$refs.appVersion.textContent += navigator.appVersion;
    // this.$refs.connection.textContent += NetworkInformation.effectiveType;
    this.$refs.language.textContent += navigator.language;
    this.$refs.languages.textContent += navigator.languages;
    this.$refs.onLine.textContent += navigator.onLine;
    this.$refs.oscpu.textContent += navigator.oscpu;
    this.$refs.platform.textContent += navigator.platform;
    // this.$refs.plugins.textContent += navigator.plugins;
    // this.$refs.product.textContent += navigator.product;
    this.$refs.userAgent.textContent += navigator.userAgent;
    this.$refs.cookieEnabled.textContent += navigator.cookieEnabled;
    this.$refs.vibrate.textContent += navigator.vibrate;

    window.addEventListener("offline", function () {
      alert("offline");
    });

    window.addEventListener("online", function () {
      alert("online");
    });

    // console.log(navigator.geolocation);
  },
};
</script>

<style lang="scss">
.mb-2 {
  margin-bottom: 10px;
}
</style>
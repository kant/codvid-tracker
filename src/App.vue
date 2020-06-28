<template>
  <div id="app">
    <app-header></app-header>
    <router-view></router-view>
    <app-footer></app-footer>
  </div>
</template>

<script>
import Header from "./components/header.vue";
// import Main from "./components/main.vue";
import Footer from "./components/footer.vue";

export default {
  name: "App",
  components: {
    "app-header": Header,
    // "app-main": Main,
    "app-footer": Footer,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Fjalla+One&display=swap");
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Fjalla One", sans-serif;
}
#app {
  width: 100%;
}
</style>

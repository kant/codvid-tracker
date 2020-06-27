<template>
  <div id="app">
    <app-header></app-header>
    <app-main></app-main>
    <app-footer></app-footer>
  </div>
</template>

<script>
import Header from "./components/header.vue";
import Main from "./components/main.vue";
import Footer from "./components/footer.vue";

export default {
  name: "App",
  components: {
    "app-header": Header,
    "app-main": Main,
    "app-footer": Footer
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  width: 100%;
  height: 100vh;
}
</style>

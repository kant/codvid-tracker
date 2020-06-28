<template>
  <div id="header">
    <router-link class="router-link" v-bind:to="'/main'">
      <img class="logo link" src="../assets/Group 5logo2.png" alt />
    </router-link>
    <router-link class="router-link" v-bind:to="'/main'">
      <h3 class="link">HOME</h3>
    </router-link>
    <router-link class="router-link" v-bind:to="'/about'">
      <h3 class="link">ABOUT</h3>
    </router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      logo: "",
    };
  },
};
</script>

<style scoped>
#header {
  background: linear-gradient(to right, #1f1c18, #8e0e00);
  color: snow;
  padding: 10px;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.logo {
  width: 200px;
}
.link {
  color: snow;
  padding: 10px;
  margin: 5px;
}
.link:hover {
  text-decoration: none;
  border: 3px solid snow;
  border-radius: 50%;
  transition: ease 1s;
}
.router-link {
  text-decoration: none;
}
@media (max-width: 490px) {
  #header {
    flex-direction: column;
  }
}
</style>

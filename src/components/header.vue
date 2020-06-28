<template>
  <div id="header">
    <img class="logo" src="../assets/Group 5logo2.png" alt />
  </div>
</template>

<script>
export default {
  data() {
    return {
      logo: ""
    };
  }
};
</script>


<style scoped>
#header {
  background: linear-gradient(to right, #1f1c18, #8e0e00);
  color: snow;
  padding: 10px;
}
.logo {
  width: 200px;
}
</style>

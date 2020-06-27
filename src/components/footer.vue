<template>
  <div id="footer">
    <p>
      Created by
      <a target="_blank" href="https://github.com/Korak-997">Korak Kurani (Dani)</a>
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style scoped>
#footer {
  background: linear-gradient(to right, #1f1c18, #8e0e00);
  color: snow;
  padding: 10px;
  text-align: center;
  height: 5vh;
}
a {
  color: snow;
  padding: 10px;
}
a:hover {
  text-decoration: none;
  border: snow 2px solid;
  transition: ease-out 1s;
}
</style>
<template>
  <div id="footer">
    <p>
      Created by
      <a target="_blank" href="https://github.com/Korak-997"
        >Korak Kurani (Dani)</a
      >
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style scoped>
#footer {
  background: linear-gradient(to right, #1f1c18, #8e0e00);
  color: snow;
  padding: 10px;
  text-align: center;
}
a {
  color: snow;
  padding: 10px;
}
a:hover {
  text-decoration: none;
  border: 3px solid snow;
  border-radius: 50%;
  transition: ease 1s;
}
</style>

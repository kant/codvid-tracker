<template>
  <div id="main">
    <div class="info">
      <h1>Corona Tracker</h1>
      <p>Please search for the country and hit search</p>
    </div>
    <div class="search-box">
      <input
        type="text"
        id="search-input"
        v-model="search"
        placeholder="SEARCH COUNTRY - EX : GERMANY .... "
      />
      <button class="search-btn">SEARCH</button>
    </div>
    <div class="result-box">
      <h3>GERMANY</h3>
      <div class="results">
        <div class="result">
          <h5>CONFIRMED:</h5>
          <p>54</p>
        </div>
        <div class="result">
          <h5>RECOVERED:</h5>
          <p>54</p>
        </div>
        <div class="result">
          <h5>DEATHS:</h5>
          <p>54</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      search: ""
    };
  }
};
</script>

<style scoped>
#main {
  margin: 20px auto;
  background: linear-gradient(to right, #1f1c18, #8e0e00);
  color: snow;
  padding: 20px;
  width: 90%;
  border-radius: 45px;
  text-align: center;
}
.info {
  border-bottom: 2px solid snow;
  padding: 20px;
  font-size: 20px;
}

.search-box {
  margin: 10px auto;
  width: fit-content;
}
#search-input {
  font-size: 18px;
  padding: 10px;
  width: 400px;
  background-color: transparent;
  border: none;
  border-bottom: 2px solid snow;
  color: snow;
  outline: none;
}
#search-input:focus {
  border: none;
  border-left: 2px solid snow;
  outline: none;
}

.search-btn {
  background-color: transparent;
  border: 2px solid snow;
  color: snow;
  padding: 10px;
  margin-left: 20px;
  font-size: 18px;
  cursor: pointer;
}
.search-btn:hover {
  border-radius: 40px;
  font-weight: bold;
  transition: ease-in 1s;
}
.result-box {
  border: 2px solid snow;
  margin: 40px;
  padding: 30px;
  font-size: 25px;
  text-align: center;
}

.results {
  margin: 20px auto;
  width: 50%;
  display: flex;
  justify-content: space-around;
}
</style>
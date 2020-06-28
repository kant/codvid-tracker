<template>
  <div id="main">
    <div class="info">
      <h1>Corona Tracker</h1>
      <p>Please Hit Latest to get Latest Data</p>
      <p>Also if you like you can Search for latest Data in your Desired Country.</p>
    </div>
    <div class="search-boxes">
      <div class="manual">
        <input
          type="text"
          id="search-input"
          v-model="search"
          placeholder="SEARCH ,EX : GERMANY OR DE"
          v-show="!error"
        />
        <button v-show="!error" @click="getLatestM" class="search-btn">SEARCH</button>
        <div v-show="error" class="errorMsg">
          <p>Sorry !!!</p>
          <p>There has been an Error</p>
          <P>We do not have Data for the Choosen Country</P>
          <button @click="removeError" class="error-btn">X</button>
        </div>
      </div>

      <div class="defaults">
        <div class="search-box">
          <div v-show="!noLocation">
            <h3>Current Location : {{currentLocation}}</h3>
            <button @click="getLatestCL" class="search-btn">LATEST</button>
          </div>
          <div v-show="noLocation">
            <p>Sorry were not able to get your Location !</p>
            <p>Please try to refresh the Page and allow locations. So we can show you the Statics for your Current Location.</p>
          </div>
        </div>

        <div class="search-box">
          <h3>Worldwide Statics</h3>
          <button @click="getLatestW" class="search-btn">LATEST</button>
        </div>
      </div>
    </div>

    <div class="result-box">
      <div v-show="loading">
        <H3>Loading please wait ...</H3>
        <div class="sk-cube-grid">
          <div class="sk-cube sk-cube1"></div>
          <div class="sk-cube sk-cube2"></div>
          <div class="sk-cube sk-cube3"></div>
          <div class="sk-cube sk-cube4"></div>
          <div class="sk-cube sk-cube5"></div>
          <div class="sk-cube sk-cube6"></div>
          <div class="sk-cube sk-cube7"></div>
          <div class="sk-cube sk-cube8"></div>
          <div class="sk-cube sk-cube9"></div>
        </div>
      </div>
      <div v-show="!loading">
        <h3>Latest</h3>
        <div class="results">
          <div class="result">
            <h5>CONFIRMED:</h5>
            <p>{{location}}</p>

            <p>{{confirmed}}</p>
          </div>
          <div class="result">
            <h5>DEATHS:</h5>
            <p>{{location}}</p>

            <p>{{deaths}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import country from "../countryCodes.js";
export default {
  data() {
    return {
      search: "",
      deaths: "-",
      confirmed: "-",
      noLocation: false,
      location: "",
      currentLocation: "",
      countryCode: "",
      error: false,
      checked: false,
      loading: false
    };
  },

  beforeMount() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        const requestOptions = {
          method: "GET",
          redirect: "follow"
        };

        fetch(
          `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${position.coords.latitude}&longitude=${position.coords.longitude}`,
          requestOptions
        )
          .then(response => response.json())
          .then(result => {
            this.currentLocation = result.city;
            this.countryCode = result.countryCode;
          })
          .catch(error => console.log("error", error));
      });
    } else {
      (this.noLocation = true), (this.location = "No location Provided");
    }
  },
  methods: {
    getLatestW() {
      const requestOptions = {
        method: "GET",
        redirect: "follow"
      };
      fetch(
        "https://coronavirus-tracker-api.herokuapp.com/v2/latest",
        requestOptions
      )
        .then(response => {
          this.loading = true;
          return response.json();
        })
        .then(result => {
          this.confirmed = result.latest.confirmed;
          this.deaths = result.latest.deaths;
          this.loading = false;
        })
        .catch(error => console.log("error", error));
      this.location = "Worldwide";
    },
    removeError() {
      this.error = false;
    },

    getLatestM() {
      country.forEach(element => {
        if (element.Name == this.search) {
          const code = element.Code;
          console.log(code);
          this.countryCode = code;
          this.checked = true;
        } else if (element.Code == this.search) {
          console.log(element.Code);
          this.countryCode = element.Code;
          this.checked = true;
        }
      });
      if (this.checked) {
        const requestOptions = {
          method: "GET",
          redirect: "follow"
        };
        fetch(
          `https://coronavirus-tracker-api.herokuapp.com/v2/locations?country_code=${this.countryCode}`,
          requestOptions
        )
          .then(response => {
            this.loading = true;
            return response.json();
          })
          .then(result => {
            this.confirmed = result.latest.confirmed;
            this.deaths = result.latest.deaths;
            this.location = result.locations[0].country;
            console.log(result.locations[0].country);
            this.loading = false;
          })
          .catch(error => console.log("error", error));

        this.search = "";
      }
    },
    getLatestCL() {
      const requestOptions = {
        method: "GET",
        redirect: "follow"
      };

      fetch(
        `https://coronavirus-tracker-api.herokuapp.com/v2/locations?country_code=${this.countryCode}`,
        requestOptions
      )
        .then(response => {
          this.loading = true;
          return response.json();
        })
        .then(result => {
          this.confirmed = result.latest.confirmed;
          this.deaths = result.latest.deaths;
          this.location = this.currentLocation;
          this.loading = false;
        })
        .catch(error => console.log("error", error));
    }
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
  height: 80vh;
}
.info {
  border-bottom: 2px solid snow;
  padding: 20px;
  font-size: 20px;
}
.errorMsg {
  border: 2px snow solid;
  padding: 20px;
  font-size: 20px;
  background-color: rgb(170, 0, 0);
}
.sk-cube-grid {
  width: 40px;
  height: 40px;
  margin: 10px auto;
}

.sk-cube-grid .sk-cube {
  width: 33%;
  height: 33%;
  background-color: snow;
  float: left;
  -webkit-animation: sk-cubeGridScaleDelay 1.3s infinite ease-in-out;
  animation: sk-cubeGridScaleDelay 1.3s infinite ease-in-out;
}
.sk-cube-grid .sk-cube1 {
  -webkit-animation-delay: 0.2s;
  animation-delay: 0.2s;
}
.sk-cube-grid .sk-cube2 {
  -webkit-animation-delay: 0.3s;
  animation-delay: 0.3s;
}
.sk-cube-grid .sk-cube3 {
  -webkit-animation-delay: 0.4s;
  animation-delay: 0.4s;
}
.sk-cube-grid .sk-cube4 {
  -webkit-animation-delay: 0.1s;
  animation-delay: 0.1s;
}
.sk-cube-grid .sk-cube5 {
  -webkit-animation-delay: 0.2s;
  animation-delay: 0.2s;
}
.sk-cube-grid .sk-cube6 {
  -webkit-animation-delay: 0.3s;
  animation-delay: 0.3s;
}
.sk-cube-grid .sk-cube7 {
  -webkit-animation-delay: 0s;
  animation-delay: 0s;
}
.sk-cube-grid .sk-cube8 {
  -webkit-animation-delay: 0.1s;
  animation-delay: 0.1s;
}
.sk-cube-grid .sk-cube9 {
  -webkit-animation-delay: 0.2s;
  animation-delay: 0.2s;
}

@-webkit-keyframes sk-cubeGridScaleDelay {
  0%,
  70%,
  100% {
    -webkit-transform: scale3D(1, 1, 1);
    transform: scale3D(1, 1, 1);
  }
  35% {
    -webkit-transform: scale3D(0, 0, 1);
    transform: scale3D(0, 0, 1);
  }
}

@keyframes sk-cubeGridScaleDelay {
  0%,
  70%,
  100% {
    -webkit-transform: scale3D(1, 1, 1);
    transform: scale3D(1, 1, 1);
  }
  35% {
    -webkit-transform: scale3D(0, 0, 1);
    transform: scale3D(0, 0, 1);
  }
}
.error-btn {
  width: 30px;
  height: 30px;
  background-color: transparent;
  border: 2px solid snow;
  color: snow;
  padding: 5px;
  margin: 10px auto;
  font-size: 18px;
  cursor: pointer;
}
.error-btn:hover {
  border-radius: 40px;
  font-weight: bold;
  transition: ease-in 1s;
}
.search-boxes {
  margin: 10px auto;
  width: fit-content;
  display: flex;
  flex-direction: column;
}
.defaults {
  display: flex;
  justify-content: space-around;
  width: fit-content;
}
.manual {
  margin: 30px auto;
}

.search-box {
  border: 2px solid snow;
  padding: 20px;
  text-align: center;
  margin: 10px;
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
  margin: 10px auto;
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
  margin: 20px;
  padding: 30px;
  font-size: 22px;
  text-align: center;
}

.results {
  margin: 20px auto;

  display: flex;
  justify-content: space-between;
}
</style>
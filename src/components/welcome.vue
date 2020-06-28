<template>
  <div id="container">
    <div>
      <h1>___Welcome___</h1>
      <p>This is a Corona Virus (Codvid-19) Tracker</p>
      <p>
        Developed by
        <a href=" https://twitter.com/Dani60579343" class="link" target="_blank"
          >Korak Kurani (Dani)</a
        >
      </p>
      <br />
      <h3>Some info about the App :</h3>
      <p>The application is still under Development.</p>
      <p>We are Sorry if there will be any Issues</p>
      <h4>How the App works ?</h4>
      <p>
        When the Application starts it asks for Permmision to use your Location.
      </p>
      <p>
        Please Provide us that Permission so we will be able to show your
        Current Location.
      </p>
      <p>
        As default, By clicking <strong>Latest</strong> on the Worldwide or
        Current Location. You will be able to get Statics (Number of Deathes and
        Confrimed cases).
      </p>
      <p>
        Otherwise you are able to make a Manual search by Writing the country
        name in the search Fiel and hit Search.
      </p>
      <p>Currently we are only able to provide Statics based on Countries.</p>
      <p>
        We also can only provide <strong>Number of Death</strong> and
        <strong>Number of confirmed cases</strong>
      </p>
      <br />
      <h3>NOTE:</h3>
      <p>
        The searches are based on the Country names or their ISO-2 digit code.
      </p>
      <p>
        In order to face no problems please write the correct Search values.
      </p>
      <p>Country names like : Germany</p>
      <p>ISO-2 digit code like : DE</p>
      <router-link v-bind:to="'/about'" class="router-link"
        ><p class="link">Click Here to Read More</p></router-link
      >
    </div>
    <router-link v-bind:to="'/main'" class="router-link"
      ><p class="link">CONTINUE</p></router-link
    >
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
#container {
  margin: 20px auto;
  background: linear-gradient(to right, #1f1c18, #8e0e00);
  color: snow;
  padding: 20px;
  width: 90%;
  border-radius: 45px;
  text-align: center;
  height: fit-content;
  font-size: 20px;
  line-height: 30px;
  transition: ease 1s;
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
</style>

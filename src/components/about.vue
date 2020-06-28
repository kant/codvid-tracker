<template>
  <div id="container">
    <div class="info-header">
      <h1>Welcome</h1>
      <h3>In this page i am Going to explain my Application.</h3>
    </div>
    <hr />
    <div class="app-info">
      <h2>About the Application :</h2>

      <p>This is a Corona Tracker Webapp.</p>
      <p>
        The Application was Created and developed by:
        <strong>Korak Kurani (Dani)</strong>
      </p>
      <p>
        Main point of the App was learning. So there maybe Issues and Mistakes
        that can be catched easily!
      </p>
      <p>The Application was Created using VueJs-Cli3 and some Apis.</p>
      <p>
        The application have
        <a href="https://en.wikipedia.org/wiki/MIT_License" target="_blank"
          >MITLicense</a
        >
      </p>
      <p>
        That means everyone is free to use this Application freely under the
        <strong>
          <a href="https://opensource.org/osd-annotated" target="_blank"
            >Open-Source-Rules</a
          >
        </strong>
      </p>
    </div>
    <hr />
    <div class="dev-info">
      <h2>For Developers :</h2>
      <p>As mentioned above this App is an Open-Source App</p>
      <p>Everyone is welcomed to modify the Application the way they want.</p>
      <h3>Want to Contribute ?</h3>
      <p>
        You found a Bug ,an Error or like to Change something in the Application
        or Add something !
      </p>
      <p>I will be more than happy to accept your suggestion/s.</p>
      <p>Please feel free to contact me or Contribute to the Project !</p>
    </div>
    <hr />
    <div class="author-info">
      <h2>About me ( THE DEVELOPER ) :</h2>
      <p>My name is Korak Kurani , love to be called Dani</p>
      <p>
        I am a Self-Tuaght Programmer. Mostly focused in Web developemnt and Web
        designs
      </p>
      <p>
        Still i am at my first steps , so maybe the project will not be 100%
        perfect !
      </p>
      <p>I do learn by myself and improve my skills daily.</p>
      <p>My last station will be a Fullstack Developer :)</p>
    </div>
    <hr />
    <div class="contact">
      <h2>Contact informations:</h2>
      <ul>
        <li>
          <a href=" https://twitter.com/Dani60579343" target="_blank"
            >TWITTER</a
          >
        </li>
        <li>
          <a href="https://github.com/Korak-997" target="_blank">GITHUB</a>
        </li>
        <li>Gmail : korak.kurani.info@gmail.com</li>
      </ul>
      <h3>Contributions can be made to :</h3>
      <a
        href="https://github.com/Korak-997/codvid-tracker/tree/test"
        target="_blank"
        >Github-repo/Test branch</a
      >
      <h3>Source Code is at :</h3>
      <a
        href="https://github.com/Korak-997/codvid-tracker/tree/test"
        target="_blank"
        >Github-repo/Test branch</a
      >
    </div>
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
.info-header,
.app-info,
.dev-info,
.author-info,
.contact {
  padding: 20px;
}
li {
  list-style: none;
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
@media (max-width: 490px) {
  #info-main {
    font-size: 16px;
  }
  .info-header,
  .app-info,
  .dev-info,
  .author-info,
  .contact {
    padding: 10px;
  }
}
</style>

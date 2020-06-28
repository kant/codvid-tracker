import Main from "./components/main.vue";
import Welcome from "./components/welcome.vue";
import About from "./components/about.vue";

export default [
  { path: "/", component: Welcome },
  { path: "/main", component: Main },
  { path: "/about", component: About },
];

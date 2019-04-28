<template>
  <div id="app">
    <Header/>
    <!-- <HelloWorld/> -->
    <Demo></Demo>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import Demo from "./components/Demo.vue";
import Header from "./components/core/Header/Header.vue";
export default {
  name: "app",
  components: {
    HelloWorld,
    Header,
    Demo
  }
};
</script>

<style>
@import url("https://use.fontawesome.com/releases/v5.8.1/css/all.css");
body {
  /* overflow: hidden; */
  margin: 0;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>
<template>
  <div id="app">
    <Header/>
    <TranscribedText></TranscribedText>
    <!-- <Sounds></Sounds> -->
  </div>
</template>

<script>
import Header from "./components/core/Header/Header.vue";
import TranscribedText from "./components/TranscribedText/TranscribedText";
// import Sounds from "./components/Sounds/Sounds";
export default {
  name: "app",
  components: {
    TranscribedText,
    Header
    // Sounds
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
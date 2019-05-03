<template src="./MusicLibrary.html"></template>

<script>
export default {
  name: "MusicLibrary",
  components: {},
  data() {
    return {
      menus: [],
      selectedMenu: "",
      results: [],
      selectedAudio: ""
    };
  },
  created() {
    (this.menus = [
      { label: "Ambient", value: "ambient" },
      { label: "Morning", value: "morning" },
      { label: "Sad", value: "sad" },
      { label: "Mystery", value: "mystery" },
      { label: "Sunny", value: "sunny" }
    ]),
      (this.selectedMenu = this.menus[0].value),
      (this.results = [
        { icon: "fa fa-play-circle", text: "Claps" },
        { icon: "fa fa-play-circle", text: "Lift" },
        { icon: "fa fa-play-circle", text: "People Talking" },
        { icon: "fa fa-play-circle", text: "Birds Chirping" }
      ]),
      (this.selectedAudio = this.results[0].text);
  },
  methods: {
    changeOption(ev) {
      this.selectedMenu = ev.value;
    },
    changeAudio(audio) {
      this.selectedAudio = audio.text;
    }
  }
};
</script>

<style src="./MusicLibrary.css" scoped lang="css">
@import url("https://use.fontawesome.com/releases/v5.8.1/css/all.css");
</style>
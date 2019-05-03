<template src="./Sounds.html"></template>

<script>
import MusicLibrary from "./MusicLibrary/MusicLibrary";
import YourMedia from "./Media/Media";
export default {
  name: "Sounds",
  components: {
    MusicLibrary,
    YourMedia
  },
  data() {
    return {
      selectedSoundOption: ""
    };
  },
  created() {
    this.selectedSoundOption = "musicLibrary";
  },
  methods: {
    toggle(tab) {
      this.selectedSoundOption = tab;
    }
  }
};
</script>

<style src="./Sounds.scss" lang="scss">
</style>

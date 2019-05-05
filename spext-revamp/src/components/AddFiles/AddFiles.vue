<template  src="./AddFiles.html"></template>
<style lang="scss" src="./AddFiles.scss">
</style>
<script>
import SpecsDocs from "./../SpextDocs/SpextDocs";
import Sounds from "./../Sounds/Sounds";
import UploadMedia from "./../UploadMedia/UploadMedia";
export default {
  name: "AddFiles",
  actionList: [],
  components: { SpecsDocs, Sounds, UploadMedia },
  data() {
    return { selectedOption: "" };
  },
  created() {
    this.actionList = [
      {
        label: "Spext Docs",
        name: "spextdocs",
        path: "/addfile/spextdocs"
      },
      {
        label: "Sounds",
        name: "sounds",
        path: "/addfile/sounds"
      },
      {
        label: "Upload Media",
        name: "uploadmedia",
        path: "/addfile/uploadmedia"
      }
    ];
    this.selectedOption = this.actionList[1].name;
  },
  methods: {
    changeView(option, index) {
      this.selectedOption = option.name;
    },
    closePopover() {
      this.$emit("closePopover");
    }
  }
};
</script>
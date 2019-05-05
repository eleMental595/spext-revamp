<template src="./Header.html"></template>

<script>
import Popover from "./../Popover/Popover";
export default {
  data() {
    return {
      config: {
        show: false,
        style: {
          width: "",
          left: "",
          top: "",
          "border-radius": "",
          "box-sizing": "",
          "box-shadow": ""
        }
      }
    };
  },
  components: {
    Popover
  },
  created() {
    this.config = {
      show: false,
      style: {
        width: "300px",
        left: "",
        top: "",
        "border-radius": "5px",
        "box-sizing": "border - box",
        "box-shadow": "0px 4px 4px rgba(116, 116, 116, 0.25)"
      }
    };
  },
  methods: {
    openTranscript(event) {
      this.config.show = !this.config.show;
      var style = {
        width: "300px",
        left: this.$refs.editTranscript.offsetLeft + "px",
        top: this.$refs.navbar.offsetHeight - 4 + "px",
        "border-radius": "5px",
        "box-sizing": "border - box",
        "box-shadow": "0px 4px 4px rgba(116, 116, 116, 0.25)"
      };
      this.$set(this.config, "style", style);
    }
  }
};
</script>


<style lang="css" scoped src="./Header.css">
</style>


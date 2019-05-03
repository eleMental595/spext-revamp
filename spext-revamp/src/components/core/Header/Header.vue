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
          top: ""
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
        top: ""
      }
    };
  },
  methods: {
    openTranscript(event) {
      this.config.show = !this.config.show;
      var style = {
        width: "300px",
        left: this.$refs.editTranscript.offsetLeft + "px",
        top: this.$refs.navbar.offsetHeight - 8 + "px"
      };
      this.$set(this.config, "style", style);
    }
  }
};
</script>


<style lang="css" scoped src="./Header.css">
</style>


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
        width: "275px",
        left: "",
        top: ""
      }
    };
  },
  methods: {
    openTranscript(event) {
      this.config.show = !this.config.show;
      var style = {
        width: "275px",
        left: this.$refs.editTranscript.offsetLeft + "px",
        top: this.$refs.navbar.offsetHeight - 8 + "px"
      };
      this.$set(this.config, "style", style);
      // this.config.style.leftPos =
      // this.config.style.topPos = this.$refs.navbar.offsetHeight - 8 + "px";
      // this.config.style = Object.assign({}, this.config.style);
      // console.log(this.config);
    }
  }
};
</script>


<style lang="css" scoped src="./Header.css">
</style>


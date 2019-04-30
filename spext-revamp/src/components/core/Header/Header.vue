<template src="./Header.html"></template>

<script>
import Popover from "./../Popover/Popover";
export default {
  config: {},
  data() {
    return (this.config = {
      show: false,
      leftPos: "",
      topPos: ""
    });
  },
  components: {
    Popover
  },
  methods: {
    openTranscript(event) {
      this.show = !this.show;
      this.leftPos = this.$refs.editTranscript.offsetLeft + "px";
      this.topPos = this.$refs.navbar.offsetHeight - 8 + "px";
    }
  }
};
</script>


<style lang="css" scoped src="./Header.css">
</style>


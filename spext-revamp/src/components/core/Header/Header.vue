<template src="./Header.html"></template>

<script>
export default {
  data() {
    return {
      showMenu: false,
      leftPos: "",
      topPos: ""
    };
  },
  methods: {
    openTranscript(event) {
      this.showMenu = !this.showMenu;
      console.log(this.$refs);
      this.leftPos = this.$refs.editTranscript.offsetLeft + "px";
      this.topPos = this.$refs.navbar.offsetHeight - 8 + "px";
    }
  }
};
</script>


<style lang="css" scoped src="./Header.css">
</style>


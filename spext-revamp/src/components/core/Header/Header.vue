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
      this.leftPos = this.$refs.editTranscript.offsetLeft + "px";
      this.topPos = this.$refs.navbar.offsetHeight - 8 + "px";
    },
    documentClick(event) {
      if (
        event.target.parentElement.className !==
        "menu-middle anchor menu-active"
      ) {
        this.showMenu = false;
      }
    }
  },
  created() {
    window.addEventListener("click", this.documentClick);
  }
};
</script>


<style lang="css" scoped src="./Header.css">
</style>


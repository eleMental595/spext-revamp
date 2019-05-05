<template src="./Popover.html"></template>

<script>
export default {
  name: "Popover",
  props: {
    config: Object
  },
  methods: {
    documentClick(event) {
      if (event.target.classList[0] === "overlay") {
        console.log("overlay clicked");
        this.config.show = false;
      }
    }
  },
  created() {
    window.addEventListener("click", this.documentClick);
  }
};
</script>


<style lang="scss" scoped src="./Popover.scss">
</style>


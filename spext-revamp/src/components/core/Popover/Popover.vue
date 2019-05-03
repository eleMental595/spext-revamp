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
        this.config.show = false;
      }
    }
  },
  created() {
    window.addEventListener("click", this.documentClick);
  }
};
</script>


<style lang="css" scoped src="./Popover.css">
</style>


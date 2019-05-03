<template  src="./AddFiles.html"></template>
<style lang="scss" src="./AddFiles.scss">
</style>
<script>
export default {
  name: "AddFiles",
  data() {
    return {
      actionList: [
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
      ]
    };
  },
  methods: {}
};
</script>
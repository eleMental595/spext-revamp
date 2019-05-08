<template src="./UploadMedia.html"></template>
import { clearInterval } from 'timers';
import { setTimeout } from 'timers';
<style lang="scss" src="./UploadMedia.scss"></style>
<script>
export default {
  name: "UploadMedia",
  titleName: "",
  uploadStatus: "enter",
  percentage: 0,

  data() {
    return {
      titleName: "",
      uploadStatus: "enter",
      percentage: 0
    };
  },
  methods: {
    uploadFromComputer() {
      this.uploadStatus = "uploadFile";
    },
    uploadFile() {
      if (this.titleName) {
        this.uploadStatus = "inprogress";
        var t = setInterval(() => {
          this.percentage += 10;
          document.getElementById("progress-inner").style.width = `${
            this.percentage
          }%`;

          if (this.percentage === 100) {
            clearInterval(t);
            this.uploadStatus = "complete";
          }
        }, 1000);
      }
    }
  }
};
</script>
<template>
  <div>
    <nav>
      <div class="nav-right-wrapper">
        <div class="arrow-back">
          <i class="fa fa-chevron-left"></i>
        </div>
        <div class="audio-description">
          <span>Zoom_wav.mp3</span>
          <span>Shared with Jogn Doe & 15 others</span>
        </div>
      </div>
      <div
        class="menu-middle anchor"
        @click="toggleShow"
        v-bind:class="{ 'menu-active': showMenu }"
      >
        <i class="fa fa-h-square"></i>
        <span>Edit Transcript</span>
        <i class="fa fa-chevron-down"></i>
        <div v-if="showMenu" class="menu">
          <div class="menu-item">
            <div class="menu-list">
              <div class="menu-icon">
                <i class="fa fa-volume-up"></i>
              </div>
              <div class="menu-element">
                <span class="bold">Edit Media</span>
                <span>Shows filter words, silence etc</span>
              </div>
            </div>
            <div class="menu-list">
              <div class="menu-icon">
                <i class="fa fa-volume-up"></i>
              </div>
              <div class="menu-element">
                <span class="bold">Edit Board</span>
                <span>visualize the transcript as a grid</span>
              </div>
            </div>
            <div class="menu-list">
              <div class="menu-icon">
                <i class="fa fa-volume-up"></i>
              </div>
              <div class="menu-element">
                <span class="bold">Edit Transcript</span>
                <span>Correct the transcript for errors</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="sub-menu">
        <div class="sub-menu-left">
          <button class="btn-share">Share</button>
          <span>
            Export
            <i class="fa fa-chevron-down"></i>
          </span>
          <i class="fa fa-search"></i>
          <i class="fa fa-link"></i>
          <i class="fa fa-link"></i>
          <i class="fa fa-ellipsis-h"></i>
        </div>
        <div class="sub-menu-right">
          <i class="fa fa-question-circle"></i>
          <i class="fa fa-bell"></i>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showMenu: false
    };
  },
  methods: {
    toggleShow: function() {
      this.showMenu = !this.showMenu;
    },
    itemClicked: function(item) {
      this.toggleShow();
      this.onClick(item);
    }
  }
};
</script>


<style lang="css" scoped>
.anchor {
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid transparent;
  padding: 0.75rem 2rem;
  font-size: 1rem;
  border-radius: 0.25rem;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  color: #fff;
}
.bold {
  font-weight: bold;
}
.menu-active {
  background: #5b6b72;
}
.menu {
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid rgba(0, 0, 0, 0.15);
  border-radius: 0.25rem;
  color: #212529;
  cursor: pointer;
  display: -webkit-box;
  display: -ms-flexbox;
  -ms-flex-direction: column;
  flex-direction: column;
  font-size: 1rem;
  list-style: none;
  position: absolute;
  left: 550px;
  top: 74px;
  -webkit-box-shadow: 0px 5px 4px 0px rgba(189, 189, 189, 1);
  -moz-box-shadow: 0px 5px 4px 0px rgba(189, 189, 189, 1);
  box-shadow: 0px 5px 4px 0px rgba(189, 189, 189, 1);
}

.menu-item {
  color: #212529;
  /* padding: 0.25rem 1.5rem; */
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}

.menu-item .menu-list {
  display: flex;
  padding: 8px;
  color: #324851;
}
.menu-list:not(:last-child) {
  border-bottom: 1px solid black;
}

.menu-item .menu-icon {
  border: 1px solid gray;
  align-self: center;
  padding: 12px 6px;
  margin: 8px;
}
.menu-item .menu-list .menu-element {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 8px;
}

.menu-item:hover {
  background-color: #f4f6f6;
  cursor: pointer;
}

nav {
  background-color: #324851;
  color: #ffffff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  cursor: pointer;
}
nav .sub-menu {
  display: flex;
}
nav .menu-middle {
  width: 150px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
nav .nav-right-wrapper .arrow-back {
  padding-right: 16px;
}
nav .nav-right-wrapper {
  display: flex;
  align-items: center;
}

nav .nav-right-wrapper .audio-description {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

nav .nav-right-wrapper .audio-description span {
  padding: 2px 0;
}

nav .sub-menu-left {
  border-right: 1px solid #ffffff;
  display: flex;
  justify-content: space-between;
  width: 300px;
  align-items: center;
  padding: 0 16px;
}

nav .sub-menu-left .btn-share {
  padding: 8px 16px;
  border-radius: 4px;
  border: none;
  font-size: 14px;
  background: #1899f7;
  color: #ffffff;
  cursor: pointer;
}

nav .sub-menu-right {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 46px;
  padding-left: 16px;
}
</style>


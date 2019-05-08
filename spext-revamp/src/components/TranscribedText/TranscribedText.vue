<template src="./TranscribedText.html"></template>
<style lang="scss" src="./TranscribedText.scss">
</style>
<script>
import Popover from "./../core/Popover/Popover";
import AddFiles from "./../AddFiles/AddFiles";
let handleOutsideClick;
export default {
  name: "TranscribedText",
  config: {},
  components: {
    Popover,
    AddFiles
  },

  data() {
    return {
      todos: [],
      colors: [
        { code: "#f44236", isFocused: false },
        { code: "#e91d61", isFocused: false },
        { code: "#00bbd4", isFocused: false },
        { code: "#efc00c", isFocused: false },
        { code: "#363f46", isFocused: false },
        { code: "#4b4f46", isFocused: false },
        { code: "#78554a", isFocused: false },
        { code: "#1400ff", isFocused: false },
        { code: "#ffaaaa", isFocused: false },
        { code: "#673ab5", isFocused: false },
        { code: "#9c25b1", isFocused: false },
        { code: "#e48130", isFocused: false }
      ],
      numbers: [1, 2, 3, 4, 5, 6],
      text: "",
      addFilePopover: false,
      addFilePopoverConfig: {
        show: false,
        showFullScreen: true,
        transition: "bounce-center",
        style: {
          width: "",
          margin: "auto",
          "max-height": "800px"
        }
      },
      fileTitle: "Zoom_wave.mp3"
    };
  },

  created() {
    this.todos = [
      {
        title: `1: Lorem Ipsum is simply dummy text of the printing and typesetting industry.
       `,

        labelColor: "",
        showHorizontalLine: false,
        showIcons: false,
        labelName: "",
        labelPopoverConfig: {
          show: false,
          isPositionFixed: false,
          transition: "bounce-in-left",
          style: {}
        },
        addActionPopoverConfig: {
          show: false,
          isPositionFixed: false,
          transition: "bounce-in-left",
          style: {}
        }
      },
      {
        title: `2: Contrary to popular belief, Lorem Ipsum is not simply random text.
       `,

        labelColor: "",
        showHorizontalLine: false,
        showIcons: false,
        labelName: "",
        labelPopoverConfig: {
          show: false,
          isPositionFixed: false,
          transition: "bounce-in-left",
          style: {}
        },
        addActionPopoverConfig: {
          show: false,
          isPositionFixed: false,
          transition: "bounce-in-left",
          style: {}
        }
      },
      {
        title: `3: Contrary to popular belief, Lorem Ipsum is not simply random text..
        `,

        labelColor: "",
        showHorizontalLine: false,
        showIcons: false,
        labelName: "",
        labelPopoverConfig: {
          show: false,
          isPositionFixed: false,
          transition: "bounce-in-left",
          style: {}
        },
        addActionPopoverConfig: {
          show: false,
          isPositionFixed: false,
          transition: "bounce-in-left",
          style: {}
        }
      }
    ];

    this.activeTodoIndex = -1;
    this.activeDraggedItem = -1;
    this.lastMovedIndex = -1;
  },
  methods: {
    addEventListener() {
      var todoItems = document.getElementsByClassName("todo-wrapper");
      for (let i = 0; i < todoItems.length; i++) {
        todoItems[i].setAttribute("draggable", true);
      }
    },
    dragStart(which, ev) {
      this.activeDraggedItem = which;
      ev.dataTransfer.setData("Text", this.id);
      ev.dataTransfer.dropEffect = "move";
      this.dragging = which;
      this.todos[which]["dragging"] = true;
      var draggedElement = ev.srcElement;
      if (draggedElement) {
        draggedElement.style.opacity = "0.4";
        document.getElementById("label" + which).style.display = "none";
        document.getElementById("add" + which).style.display = "none";
        document.getElementById("drag" + which).style.opacity = "0";
        var psuedoEle = document.createElement("div");
        psuedoEle.innerHTML = draggedElement.innerHTML;
        psuedoEle.id = "draggedPsuedoEle";
        const computedStyle = window.getComputedStyle(draggedElement);

        Array.from(computedStyle).forEach(key =>
          psuedoEle.style.setProperty(
            key,
            computedStyle.getPropertyValue(key),
            computedStyle.getPropertyPriority(key)
          )
        );
      }
      psuedoEle.style.position = "absolute";
      psuedoEle.style.top = "0px";
      psuedoEle.style.left = "-100%";
      psuedoEle.classList.add("draggedItem");
      document.body.appendChild(psuedoEle);
      var dragGhost = draggedElement.cloneNode(true);
      dragGhost.classList.add("hidden-drag-ghost");
      dragGhost.id = "dragGhost";
      document.body.appendChild(dragGhost);
      ev.dataTransfer.setDragImage(dragGhost, 0, 0);
    },
    dragEnter(ev, i) {
      this.todos[this.dragging].show;
      document.getElementById("label" + this.dragging).style.display = "block";
      document.getElementById("add" + this.dragging).style.display = "block";
      document.getElementById("drag" + this.dragging).style.opacity = "1";

      if (this.activeTodoIndex != i && this.activeTodoIndex != -1) {
        document
          .getElementById("todo-wrapper" + this.activeTodoIndex)
          .classList.remove("border-bottom");
        document
          .getElementById("todo-wrapper" + this.activeTodoIndex)
          .classList.remove("border-top");
      }
      this.activeTodoIndex = i;
      if (this.activeDraggedItem >= i) {
        document.getElementById("todo-wrapper" + i).classList.add("border-top");
      } else {
        document
          .getElementById("todo-wrapper" + i)
          .classList.add("border-bottom");
      }
    },
    dragLeave(ev, i) {
      document.getElementById("label" + this.dragging).style.display = "block";
      document.getElementById("add" + this.dragging).style.display = "block";
      document.getElementById("drag" + this.dragging).style.opacity = "1";

      if (this.activeTodoIndex != i) {
        document
          .getElementById("todo-wrapper" + i)
          .classList.remove("border-bottom");
        document
          .getElementById("todo-wrapper" + i)
          .classList.remove("border-top");
      }
    },
    dragEnd(ev) {
      document.getElementById("label" + this.dragging).style.display = "block";
      document.getElementById("add" + this.dragging).style.display = "block";
      document.getElementById("drag" + this.dragging).style.opacity = "1";
      this.dragging = -1;
      var todoItems = document.getElementsByClassName("todo-wrapper");
      for (let i = 0; i < todoItems.length; i++) {
        todoItems[i].setAttribute("draggable", false);
        todoItems[i].classList.remove("border-bottom");
        todoItems[i].classList.remove("border-top");
      }
      this.activeTodoIndex = -1;
      this.activeDraggedItem = -1;
      ev.srcElement.style.opacity = "1";

      // remove element
      var psuedoEle = document.getElementById("draggedPsuedoEle");
      var dragghost = document.getElementById("dragGhost");
      if (psuedoEle) {
        psuedoEle.parentNode.removeChild(psuedoEle);
      }
      if (dragghost) {
        dragghost.parentNode.removeChild(dragghost);
      }
    },
    dragFinish(to, ev) {
      document.getElementById("label" + this.dragging).style.display = "block";
      document.getElementById("add" + this.dragging).style.display = "block";
      document.getElementById("drag" + this.dragging).style.opacity = "1";
      this.moveItem(this.dragging, to);
      this.todos[to]["dragging"] = false;
      // ev.target.style.marginTop = "2px";
      // ev.target.style.marginBottom = "2px";
      // ev.srcElement.style.opacity = "1";
      this.activeTodoIndex = -1;
      // remove element
      var psuedoEle = document.getElementById("draggedPsuedoEle");
      if (psuedoEle) {
        psuedoEle.parentNode.removeChild(psuedoEle);
      }
      var dragghost = document.getElementById("dragGhost");
      if (dragghost) {
        dragghost.parentNode.removeChild(dragghost);
      }
      this.todos[to].showIcons = false;
    },
    removeItemAt(index) {
      this.todos.splice(index, 1);
    },
    moveItem(from, to) {
      if (to === -1) {
        this.removeItemAt(from);
      } else {
        this.todos.splice(to, 0, this.todos.splice(from, 1)[0]);
      }
    },
    onDrag(event) {
      var psuedoEle = document.getElementById("draggedPsuedoEle");
      if (psuedoEle) {
        var xPos = event.clientX;
        var yPos = event.clientY;
        psuedoEle.style.position = "absolute";
        psuedoEle.style.left = xPos - 10 + "px";
        psuedoEle.style.top = yPos + 2 + "px";
        psuedoEle.style.opacity = "1";
      }
    },

    selectLabelColor(selectedIndex, selectedColorCode) {
      this.todos[selectedIndex].labelColor = selectedColorCode;
      document.getElementById(
        "label" + selectedIndex
      ).style.color = selectedColorCode;
      this.todos[selectedIndex].labelColor = selectedColorCode;
    },
    addNewItem(event, i) {
      // if (event.keyCode === 13) {
      //   var rng = window.getSelection().getRangeAt(0);
      //   var newTitleToBeAdded =
      //     rng.commonAncestorContainer.parentNode.textContent;
      //   var textToBeReplaced =
      //     rng.commonAncestorContainer.parentElement.parentElement.firstChild
      //       .firstChild.data;
      //   var oldItem = {
      //     title: textToBeReplaced,
      //     labelPopoverConfig.show: false,
      //     addActionPopoverConfig.show: false,
      //     labelColor: ""
      //   };
      //   this.todos.splice(i, 1, oldItem);
      //   var newItem = {
      //     title: newTitleToBeAdded,
      //     labelPopoverConfig.show: false,
      //     addActionPopoverConfig.show: false,
      //     labelColor: ""
      //   };
      //   this.todos.splice(i + 1, 0, newItem);
      // } else if (event.keyCode === 8) {
      //   var textToAppend = window.getSelection().getRangeAt(0)
      //     .commonAncestorContainer.parentNode.textContent;
      //   if (textToAppend.trim().length === this.todos[i].title.trim().length) {
      //     this.todos[i - 1].title =
      //       this.todos[i - 1].title + " " + this.todos[i].title;
      //     this.todos.splice(i, 1);
      //   }
      // }
    },
    openPopover(type, selectedIndex) {
      switch (type) {
        case "addFile":
          this.todos[selectedIndex].addActionPopoverConfig.show = false;
          this.todos[selectedIndex].showHorizontalLine = false;
          this.addFilePopoverConfig.show = true;
          var style = {
            left: this.$refs.transcriber[0].offsetLeft + "px",
            width: this.$refs.transcriber[0].clientWidth + "px"
          };
          this.$set(this.addFilePopoverConfig, "style", style);
          break;
        case "label":
          this.todos[selectedIndex].labelPopoverConfig.show = !this.todos[
            selectedIndex
          ].labelPopoverConfig.show;
          if (this.todos[selectedIndex].addActionPopoverConfig.show) {
            this.todos[selectedIndex].addActionPopoverConfig.show = false;
            this.todos[selectedIndex].showHorizontalLine = false;
          }
          if (!this.todos[selectedIndex].labelColor) {
            this.todos[selectedIndex].labelColor = this.colors[0].code;
          }

          var style = {
            left: this.$refs["label" + selectedIndex][0].offsetLeft + 10 + "px",
            top: this.$refs["label" + selectedIndex][0].offsetTop + 20 + "px"
          };
          this.$set(
            this.todos[selectedIndex].labelPopoverConfig,
            "style",
            style
          );
          break;
        case "addAction":
          this.todos[selectedIndex].addActionPopoverConfig.show = !this.todos[
            selectedIndex
          ].addActionPopoverConfig.show;
          this.todos[selectedIndex].showHorizontalLine = !this.todos[
            selectedIndex
          ].showHorizontalLine;
          if (this.todos[selectedIndex].labelPopoverConfig.show) {
            this.todos[selectedIndex].labelPopoverConfig.show = false;
          }

          var style = {
            left: this.$refs["add" + selectedIndex][0].offsetLeft + 32 + "px",
            top: this.$refs["add" + selectedIndex][0].offsetTop + "px"
          };
          this.$set(
            this.todos[selectedIndex].addActionPopoverConfig,
            "style",
            style
          );
          break;
      }
    },

    displayIcons(i) {
      this.todos[i].showIcons = true;
    },
    hideIcons(i) {
      this.todos[i].showIcons = false;
    },

    closeAddFilePopover() {
      this.addFilePopoverConfig.show = false;
    },
    saveLabelName(event, i, labelName) {
      if (event.keyCode === 13) {
        event.preventDefault();
        this.todos[i].labelPopoverConfig.show = false;
      }
    }
  },
  mounted() {
    window.addEventListener("drag", this.onDrag);
  }
};
</script>
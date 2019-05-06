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
      config: {
        show: false,
        showFullScreen: true,
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
         Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
         Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
         Lorem Ipsum is simply dummy text of the printing and typesetting industry. `,
        showLabelModal: false,
        showAddActionModal: false,
        labelColor: "",
        showHorizontalLine: false,
        showIcons: false,
        labelName: ""
      },
      {
        title: `2: Contrary to popular belief, Lorem Ipsum is not simply random text. Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. `,
        showLabelModal: false,
        showAddActionModal: false,
        labelColor: "",
        showHorizontalLine: false,
        showIcons: false,
        labelName: ""
      },
      {
        title: `3: Contrary to popular belief, Lorem Ipsum is not simply random text.Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.`,
        showLabelModal: false,
        showAddActionModal: false,
        labelColor: "",
        showHorizontalLine: false,
        showIcons: false,
        labelName: ""
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
    displayPopover(selectedIndex, type) {
      switch (type) {
        case "label":
          var isOpen = !this.todos[selectedIndex].showLabelModal;
          this.todos[selectedIndex].showLabelModal = isOpen;
          if (this.todos[selectedIndex].showAddActionModal) {
            this.todos[selectedIndex].showAddActionModal = false;
            this.todos[selectedIndex].showHorizontalLine = false;
          }
          if (!this.todos[selectedIndex].labelColor) {
            this.todos[selectedIndex].labelColor = this.colors[0].code;
          }
          break;
        case "addAction":
          var isOpen = !this.todos[selectedIndex].showAddActionModal;
          this.todos[selectedIndex].showAddActionModal = isOpen;
          this.todos[selectedIndex].showHorizontalLine = !this.todos[
            selectedIndex
          ].showHorizontalLine;
          if (this.todos[selectedIndex].showLabelModal) {
            this.todos[selectedIndex].showLabelModal = false;
          }
          break;
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
      //     showLabelModal: false,
      //     showAddActionModal: false,
      //     labelColor: ""
      //   };
      //   this.todos.splice(i, 1, oldItem);
      //   var newItem = {
      //     title: newTitleToBeAdded,
      //     showLabelModal: false,
      //     showAddActionModal: false,
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
    openPopover(type, i) {
      this.todos[i].showAddActionModal = false;
      this.todos[i].showHorizontalLine = false;

      if (type === "addFile") {
        this.config.show = true;
        var style = {
          left: this.$refs.transcriber[0].offsetLeft + "px",
          width: this.$refs.transcriber[0].clientWidth + "px"
        };
        this.$set(this.config, "style", style);
      }
    },
    closePopover(ev) {
      this.config.show = false;
    },
    closeAllPopover() {
      for (let i = 0; i < this.todos.length; i++) {
        this.todos[i].showAddActionModal = false;
        this.todos[i].showLabelModal = false;
      }
    },
    displayIcons(i) {
      this.todos[i].showIcons = true;
    },
    hideIcons(i) {
      this.todos[i].showIcons = false;
      this.todos[i].showAddActionModal = false;
      this.todos[i].showLabelModal = false;
      this.todos[i].showHorizontalLine = false;
    },

    closeAddFilePopover() {
      this.config.show = false;
    },
    saveLabelName(event, i, labelName) {
      if (event.keyCode === 13) {
        event.preventDefault();
        this.todos[i].showLabelModal = false;
      }
    }
  },
  mounted() {
    window.addEventListener("drag", this.onDrag);
  }
};
</script>
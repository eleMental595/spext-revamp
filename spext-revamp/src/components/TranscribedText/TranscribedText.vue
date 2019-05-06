<template src="./TranscribedText.html"></template>
<style lang="scss" src="./TranscribedText.scss">
</style>
<script>
import Popover from "./../core/Popover/Popover";
import AddFiles from "./../AddFiles/AddFiles";
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
        { code: "#f44236" },
        { code: "#e91d61" },
        { code: "#00bbd4" },
        { code: "#efc00c" },
        { code: "#363f46" },
        { code: "#4b4f46" },
        { code: "#78554a" },
        { code: "#1400ff" },
        { code: "#ffaaaa" },
        { code: "#673ab5" },
        { code: "#9c25b1" },
        { code: "#e48130" }
      ],
      numbers: [1, 2, 3, 4, 5, 6],
      text: "",
      addFilePopover: false,
      config: {
        show: false,
        showFullScreen: true,
        style: {
          width: "900px",
          margin: "auto",
          "max-height": "800px"
        }
      }
    };
  },

  created() {
    this.todos = [
      {
        title: `1: Lorem ILorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
        showLabelModal: false,
        showAddActionModal: false,
        labelColor: "",
        showHorizontalLine: false
      },
      {
        title: `2: Contrary English versions from the 1914 translation by H. Rackha`,
        showLabelModal: false,
        showAddActionModal: false,
        labelColor: "",
        showHorizontalLine: false
      },
      {
        title: `3: Contrary to popular belief, Lorem Ipsum is not simply random text.`,
        showLabelModal: false,
        showAddActionModal: false,
        labelColor: "",
        showHorizontalLine: false
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
        if (this.todos[which].showLabelModal) {
          document.getElementById("label-modal" + which).style.display = "none";
        }
        if (this.todos[which].showAddActionModal) {
          document.getElementById("add-action-modal" + which).style.display =
            "none";
        }
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

      if (this.todos[this.dragging].showLabelModal) {
        document.getElementById("label-modal" + this.dragging).style.display =
          "block";
      }
      if (this.todos[this.dragging].showAddActionModal) {
        document.getElementById(
          "add-action-modal" + this.dragging
        ).style.display = "block";
      }
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

      document.getElementById("add" + to).classList.remove("active-icon");
      document.getElementById("label" + to).classList.remove("active-icon");
      this.todos[this.dragging].showHorizontalLine = false;
      this.moveItem(this.dragging, to);
      this.todos[to]["dragging"] = false;
      // ev.target.style.marginTop = "2px";
      // ev.target.style.marginBottom = "2px";
      ev.srcElement.style.opacity = "1";
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
    displayLabelPopover(selectedIndex) {
      let isOpen = !this.todos[selectedIndex].showLabelModal;
      this.todos[selectedIndex].showLabelModal = isOpen;
      if (this.todos[selectedIndex].showAddActionModal) {
        this.todos[selectedIndex].showAddActionModal = false;
      }
    },
    displayAddActionPopover(selectedIndex) {
      let isOpen = !this.todos[selectedIndex].showAddActionModal;
      this.todos[selectedIndex].showAddActionModal = isOpen;
      this.todos[selectedIndex].showHorizontalLine = isOpen;
      if (this.todos[selectedIndex].showLabelModal) {
        this.todos[selectedIndex].showLabelModal = false;
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
    openPopover(type) {
      console.log(type);
      if (type === "addFile") {
        this.config.show = true;
      }
    },
    closePopover(ev) {
      this.config.show = false;
    },
    displayIcons(i) {
      document
        .getElementById("handle-container" + i)
        .classList.add("active-handle-container");
    },
    hideIcons(i) {
      document
        .getElementById("handle-container" + i)
        .classList.remove("active-handle-container");
      document
        .getElementById("todo-item" + i)
        .classList.remove("active-todo-wrapper");
    },
    closeAddFilePopover() {
      this.config.show = false;
    }
  },
  mounted() {
    window.addEventListener("drag", this.onDrag);
  }
};
</script>
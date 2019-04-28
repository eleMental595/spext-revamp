<template>
  <div>
    <div contenteditable="true" ref="todoItem">
      <div
        v-for="(item,i) in todos"
        class="todo-item"
        @keyup="updateTodos($event,i)"
        v-bind:key="i"
      >{{item.title}}</div>
    </div>
    <button @click="show()">click</button>
  </div>
</template>
<style lang="scss">
.todo-item {
  padding: 16px;
}
</style>

<script>
export default {
  name: "Demo",
  todos: [],
  todoItemCount: 0,
  todoItemList: [],
  data() {
    return {
      todos: [
        {
          title:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum luctus, dui sit amet dapibus elementum, purus urna ultricies massa, a laoreet arcu nibh non est. Fusce risus orci, pulvinar at pretium vehicula, consequat sed lectus. Aliquam erat volutpat. Morbi iaculis vel eros ac sodales. Cras ut nisl pretium, semper massa ut, laoreet eros. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Morbi mauris ipsum, tincidunt in mollis ac, venenatis ac velit. Nullam posuere ac lectus vel blandit. Suspendisse potenti. Pellentesque magna lorem, placerat id ultrices id, tincidunt at odio."
        },
        {
          title:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum luctus, dui sit amet dapibus elementum, purus urna ultricies massa, a laoreet arcu nibh non est. Fusce risus orci, pulvinar at pretium vehicula, consequat sed lectus. Aliquam erat volutpat. Morbi iaculis vel eros ac sodales. Cras ut nisl pretium, semper massa ut, laoreet eros. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Morbi mauris ipsum, tincidunt in mollis ac, venenatis ac velit. Nullam posuere ac lectus vel blandit. Suspendisse potenti. Pellentesque magna lorem, placerat id ultrices id, tincidunt at odio."
        }
      ]
    };
  },

  methods: {
    show() {
      //   console.log(this.$refs);
      //   console.log(window.getSelection());
      this.todoItemCount = this.$refs.todoItem.childElementCount;
      //   console.log(this.todoItemCount);
      this.todoItemList = this.$refs.todoItem;
      //   console.log(JSON.parse(JSON.stringify(this.todoItemList.childNodes)));
      //   console.log(this.$refs.todoItem.childNodes);
      //   for (let i = 0; i < this.todoItemCount; i++) {
      //     console.log(this.$refs.todoItem.childNodes[i].innerText);
      //     // this.todos[i].title = this.$refs.todoItem.childNodes[i].innerText;

      //   }

      //   console.log(this.updatedTodos);
      //   this.todos[1].title = this.$refs.todoItem.childNodes[0].innerText;
    }
  }
};
</script>
<template>
  <input v-model="filterValue" placeholder="フィルタテキスト" />
  <br />
  <br />

  <input v-model="inputValue" />
  <button @click="handleClick">
    ToDoを追加する
  </button>
  <ul>
    <ToDoItem
      v-for="todo in filteredTodoItems"
      :key="todo.id"
      v-bind:done="todo.done"
      v-on:toggle="checkToDo(todo)"
    >
      {{ todo.text }}
    </ToDoItem>
  </ul>
  <br><hr>

  <button @click="openDialog">
    dialogを開く
  </button>
  <ModalDialog
  v-if="isOpenDialog"
  >
    <template v-slot:title>
      <span style="color: red;">タイトル（赤）</span>
    </template>
    <p>1. ダイアログの内容</p>
  </ModalDialog>
</template>

<style>
.todo-item.done {
  /* 背景を緑色にする */
  background-color: #3fb983;
  color: #ffffff;
}
</style>

<script>
import ToDoItem from './ToDoItem.vue'
import ModalDialog from './ModalDialog.vue'
import _ from 'lodash'

export default {
  components: {
    ToDoItem,
    ModalDialog
  },
  data () {
    const todoItems = [
      { id: 1, done: false, text: 'Go out to sea' },
      { id: 2, done: false, text: 'Invite the first member' }
    ]
    return {
      inputValue: '',
      todoItems: todoItems,
      filteredTodoItems: todoItems,
      filterValue: '',
      isOpenDialog: false,
    }
  },
  watch: {
    // filterValueの値の変更を監視し
    // filteredTodoItemsを再計算する
    filterValue () {
      this.updateFilteredTodoItems()
    },
    todoItems: {
      handler () {
        this.updateFilteredTodoItems()
      },
      // 深く監視することで配列要素の変更も監視する
      deep: true
    }
  },
  /**
  computed: {
    filteredTodoItems() {
      if (!this.filterValue) {
        return this.todoItems
      }

      return this.todoItems.filter((todo) => {
        console.log(todo.text)
        return todo.text.includes(this.filterValue)
      })
    }

  },
  */
  methods: {
    handleClick () {
      this.todoItems.push({
        id: this.todoItems.length + 1,
        text: this.inputValue
      })
      this.inputValue = ''
    },
    checkToDo(todo, count) {
      console.log(todo)
      todo.done = !todo.done
      console.log(count)
    },
    openDialog() {
      this.isOpenDialog = !this.isOpenDialog
    },

    /**
    // filteredTodoItemsに
    // 再計算した配列を与える
    updateFilteredTodoItems () {
      this.filteredTodoItems = this.filterValue
        ? this.todoItems.filter(todo => todo.text.includes(this.filterValue))
        : this.todoItems
    }
    **/

    // Lodashの遅延処理を組み込む場合
    updateFilteredTodoItems: _.debounce(function () {
      this.filteredTodoItems = this.filterValue
        ? this.todoItems.filter(todo => todo.text.includes(this.filterValue))
        : this.todoItems
    }, 0)
  }
}
</script>

<template>
  <li
    class="todo-item"
    v-bind:class="{'done': done}"
    v-on:click="handleClick"
  >
    <span v-if="done">✔</span>
    <!-- {{text}}をslotに置き換え -->
    <slot />
  </li>
</template>

<script>

export default {
  props: {
    done: {
      type: Boolean
    },
    count: {
      type: Number,
      default: 0,
    },
  },
  emits: ['toggle'],
  methods: {
    /** <li>のclickイベントを処理 */
    handleClick() {
      // カスタムイベントtoggleを発行
      this.$emit('toggle', this.count + 1)
    }
  }
}
</script>

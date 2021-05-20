<template>
  <Splitter>
    <SplitterPanel style="height: 300px" :size="15">
      <h3>デザインパーツ</h3>
      <img
        src="../assets/txt.png"
        style="width: 70px;"
        v-on:click="openDialog"
      />

      <Dialog
        v-model:header="dialogHeader"
        position="topleft"
        v-model:visible="display"
        v-on:hide="addText"
      >
        <InputText v-model="textVal"></InputText>
      </Dialog>
    </SplitterPanel>

    <SplitterPanel style="height: 300px" :size="85">
      <ol>
        <li v-for='c,k in components' :key="k">
          {{ c.text }}
        </li>
      </ol>
    </SplitterPanel>
  </Splitter>
</template>

<script>
export default {
  data () {
    return {
      display: false,
      dialogHeader: '',
      components: []
    }
  },
  methods: {
    openDialog () {
      this.textVal = ''
      this.display = true
      this.dialogHeader = 'テキスト'
    },
    addText() {
      this.components.push({
        text: this.textVal
      })
    }
  }
}
</script>

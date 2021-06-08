<template>
  <Splitter>
    <SplitterPanel style="height: 300px" :size="15">
      <h3>デザインパーツ</h3>
      <draggable
        class="dragArea list-group w-full"
        :list="list"
        @change="log"
        :clone="cloneComponent"
      >
        <Dialog header="Header" v-model:visible="display">
          <InputText v-model="textVal"></InputText>
        </Dialog>
        <img
          alt="Vue logo"
          src="../assets/txt.png"
          style="width: 70px;"
          @click="changeText"
        />
      </draggable>
    </SplitterPanel>
    <SplitterPanel :size="85">
      <div class="flex m-10">
        <draggable
          class="dragArea list-group w-full"
          :list="list"
          @change="log"
        >
          <div
            class="list-group-item bg-gray-300 m-1 p-3 rounded-md text-center"
            v-for="element in list"
            :key="element.name"
          >
            {{ element.name }}
          </div>

          <h6>{{ textVal }}</h6>
        </draggable>
      </div>
    </SplitterPanel>
  </Splitter>
</template>

<script>
import { VueDraggableNext } from 'vue-draggable-next'
//let id = 4
export default {
  components: {
    draggable: VueDraggableNext
  },
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data () {
    return {
      enabled: true,
      list: [
        { name: 'John', id: 1 },
        { name: 'Joao', id: 2 },
        { name: 'Jean', id: 3 },
        { name: 'Gerard', id: 4 }
      ],
      textVal: 'prime vue text val',
      visibleLeft: true,
      dragging: false,
      display: false,
      componentType: ''
    }
  },
  methods: {
    changeText () {
      this.componentType = 'txt'
    },
    cloneComponent (obj) {
      if (this.componentType === 'txt') {
        this.display = true
        //this.list.push({ name: 'new', id: id++ })
      }
      return obj
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

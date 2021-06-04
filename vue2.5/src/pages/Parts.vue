<template>
  <v-container class="parts-container">
    <v-row>
      <v-col cols="3" md="3" >
        <h2 class="my-3">パーツ</h2>
        <v-card 
          outlined
          tile
        >
          <v-list light>
            <v-list-item
             @click="textClick"
             >
              <v-list-item-action>
                <v-icon>mdi-format-text</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title>Text</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item @click="imageClick">
              <v-list-item-action>
                <v-icon>mdi-folder-image</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title>Image</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item link href="#">
              <v-list-item-action>
                <v-icon>mdi-information</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title>Info</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
          <TextDialog
          v-bind:open="textOpen"
          v-bind:text="inputText"
          v-on:click="textComplete"
          v-on:cancel="textCancel"
          />
          <ImageDialog
          v-bind:open="imageOpen"
          v-bind:text="inputText"
          v-on:click="imageComplete"
          v-on:cancel="imageCancel"
          />
        </v-card>
      </v-col>
      <v-col cols="9" md="9">
        <v-card 
          outlined
          tile
        >
          <Canvas v-bind:components="components"/>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
.parts-container {
  margin-left: 0;
  margin-right: 0;
}
.sidebar {
  background-color: #3fb983;
  color: #ffffff;
}
</style>

<script>
import Canvas from '../components/Canvas.vue'
import TextDialog from '../components/TextDialog.vue'
import ImageDialog from '../components/ImageDialog.vue'

export default {
  components: {
    Canvas,
    TextDialog,
    ImageDialog,
  },
  data () {
    return {
      drawer: true,
      components: [],
      textOpen: false,
      imageOpen: false,
      inputText: "",
    }
  },
  methods: {
    log () {
      console.log('log')
    },
    imageClick() {
      console.log('imageClick')
      this.imageOpen = true
    },
    imageCancel() {
      this.imageOpen = false
    },
    imageComplete(image) {
      this.components.push({
        type: 'image',
        id: this.components.length + 1,
        url: image.url,
        image: image.image,
        width: image.width,
      })
      this.imageOpen = false
    },
    textCancel() {
      this.textOpen = false
    },
    textClick() {
      console.log('textClick')
      this.textOpen = true
      this.inputText = ""
    },
    textComplete(text) {
      this.components.push({
        type: 'text',
        id: this.components.length + 1,
        text: text.inputText,
        align: text.align,
        url: text.inputURL,
        color: text.inputColor,
      })
      this.textOpen = false
    }
  },
  emits: ['toggle']
}
</script>

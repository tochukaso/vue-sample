<template>
  <v-dialog
    v-model="open"
    persistent
    max-width="800px"
    open-on-focus
    origin="top left"
  >
    <v-card>
      <v-card-title>Imageを選択してください</v-card-title>
      <v-file-input @change="previewImage" v-model="image"> </v-file-input>
      <v-img
       :src="url"
       :aspect-ratio="16/9"
       :width="width"
      ></v-img>
      <v-card-subtitle>横幅</v-card-subtitle>
      <v-slider
        v-model="width"
        class="align-self-stretch"
        min="200"
        max="800"
        step="1"
      ></v-slider>

      <v-card-actions>
        <v-btn @click="handleClick">確定 </v-btn>
        <v-btn @click="cancelClick">キャンセル</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: {
    open: {
      type: Boolean
    }
  },

  data() {
    return {
      image: "",
      url: "",
      width: "300",
    }
  },

  emit: ['click'],
  methods: {
    cancelClick() {
      this.$emit("cancel");
      this.clearInput();
    },
    handleClick () {
      this.$emit('click', this)
      this.clearInput();
    },
    previewImage() {
      this.url= URL.createObjectURL(this.image)
    },
    clearInput() {
      this.url = "";
      this.image = "";
      this.width= "300"
    }
  }
}
</script>

<template>
  <v-col md="3" v-if="open" class="sidebar">
    <h2 class="my-3">パーツ</h2>
    <v-card>
      <v-list light>
        <v-list-item link href="#">
          <v-list-item-action>
            <v-icon>mdi-format-text</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Text</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link href="#">
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
    </v-card>
  </v-col>
</template>

<style scoped>
.sidebar {
  background-color: #3fb983;
  color: #ffffff;
}
</style>

<script>
export default {
  props: {
    open: {
      type: Boolean
    }
  },
  data() {
    return {
      drawer: true
    };
  },
  methods: {
    log() {
      console.log("log");
    }
  },
  emits: ["toggle"]
};
</script>

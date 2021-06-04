<template>
  <v-menu v-model="open" offset-y absolute style="max-width: 400px">
    <template v-slot:activator="{ on, attrs }">
      <v-list-item v-bind="attrs" v-on="on">
        <v-list-item-action>
          <v-icon>mdi-format-text</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title>
            Text
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </template>
    <v-card>
      <v-card-title>Textを入力してください</v-card-title>
      <v-divider class="mx-4"></v-divider>

      <v-textarea
        v-model="text"
        counter
        clearable
        clear-icon="mdi-close-circle"
        label="Text"
        dark
      >
      </v-textarea>
      <v-btn @click="handleClick">確定</v-btn>
    </v-card>
  </v-menu>
</template>

<script>
export default {
  props: {
    text: {
      type: String
    },
    open: {
      type: Boolean
    }
  },

  emit: ["click"],
  methods: {
    handleClick() {
      this.$emit("click", this.text);
    }
  }
};
</script>

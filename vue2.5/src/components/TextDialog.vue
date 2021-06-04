<template>
  <v-dialog
    v-model="open"
    persistent
    max-width="400px"
    open-on-focus
    origin="top left"
  >
    <v-card>
      <v-card-title>Textを入力してください</v-card-title>

      <v-divider class="mx-4"></v-divider>

      <v-textarea
        v-model="inputText"
        counter
        clearable
        clear-icon="mdi-close-circle"
        label="Text"
        dark
        autofocus
      >
      </v-textarea>
      <v-card-subtitle>
        リンク先
      </v-card-subtitle>

      <v-text-field
        v-model="inputURL"
        clear-icon="mdi-close-circle"
        label="例:https://example.com"
        daark
      >
      </v-text-field>
      <v-card-subtitle>
        文字の配置
      </v-card-subtitle>

      <v-card-text>
        <v-row>
          <v-col sm="2">
            <v-icon @click="left">
              mdi-format-align-left
            </v-icon>
          </v-col>
          <v-col sm="2">
            <v-icon @click="center">
              mdi-format-align-center
            </v-icon>
          </v-col>
          <v-col sm="2">
            <v-icon @click="right">
              mdi-format-align-right
            </v-icon>
          </v-col>
        </v-row>
      </v-card-text>

      <v-card-subtitle>
        文字のカラー
      </v-card-subtitle>
      <v-color-picker v-model="inputColor" class="ma-2"></v-color-picker>
      <v-divider class="mx-4"></v-divider>

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
    text: {
      type: String
    },
    url: {
      type: String
    },
    open: {
      type: Boolean
    }
  },

  data() {
    return {
      align: "left",
      inputText: this.text,
      inputURL: this.url,
      inputColor: "#ffffff"
    };
  },

  emit: ["cancel", "click"],
  methods: {
    handleClick() {
      this.$emit("click", this);
      this.clearInput();
    },
    cancelClick() {
      this.$emit("cancel");
      this.clearInput();
    },
    left() {
      this.align = "left";
    },
    center() {
      this.align = "center";
    },
    right() {
      this.align = "right";
    },

    clearInput() {
      this.inputText = "";
      this.align = "left";
      this.inputURL = "";
      this.inputColor = "#ffffff";
    }
  }
};
</script>

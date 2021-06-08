<template>
  <v-navigation-drawer v-model="drawer" app absolute>
    <v-list dense>
      <v-list-item link exact :to="{ name: 'Home' }" @click="notPartsClick">
        <v-list-item-action>
          <v-icon>mdi-home</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title>Home</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <!--
            <v-list-item @click="partsClick">
            -->
      <v-list-item link exact :to="{ name: 'Parts' }" @click="notPartsClick">
        <v-list-item-action>
          <v-icon>mdi-hexagon-multiple</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title>Parts</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list-item link exact :to="{ name: 'Contact' }" @click="notPartsClick">
        <v-list-item-action>
          <v-icon>mdi-email</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title>Contact</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  data() {
    return {
      drawer: true
    };
  },
  emits: ["partsClick", "notPartsClick"],
  methods: {
    log() {
      console.log("log");
    },
    partsClick() {
      console.log("partsClick Navbar");
      this.$emit("partsClick");
    },
    notPartsClick() {
      this.$emit("notPartsClick");
    }
  }
};
</script>

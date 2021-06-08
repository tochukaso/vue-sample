<template>
  <v-app id="main">
    <navbar
      ref="navbar"
      v-on:partsClick="partsClick"
      v-on:notPartsClick="notPartsClick"
    />

    <app-header
      @toggle-drawer="$refs.navbar.drawer = !$refs.navbar.drawer"
    ></app-header>

    <v-main>
      <router-view></router-view>
    </v-main>

    <app-footer></app-footer>
  </v-app>
</template>

<script>
import Navbar from "./Navbar";
import Header from "./Header";
import Footer from "./Footer";

export default {
  name: "App",
  data() {
    return {
      sidebarOpen: false
    };
  },
  components: {
    navbar: Navbar,
    "app-header": Header,
    "app-footer": Footer
  },
  methods: {
    partsClick() {
      console.log("partsClick App");
      this.sidebarOpen = true;
    },
    notPartsClick() {
      this.sidebarOpen = false;
    }
  }
};
</script>

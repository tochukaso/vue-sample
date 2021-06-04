<template>
  <v-app-bar app color="indigo" dark>
    <v-app-bar-nav-icon
      @click.stop="$emit('toggle-drawer')"
    ></v-app-bar-nav-icon>
  </v-app-bar>
</template>

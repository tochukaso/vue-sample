<template>
  <div>
    <v-container style="margin-left:0;">
      <v-row >
        <v-col cols="2">
          This is a Home page

          <v-img
            :src="require('../assets/logo.svg')"
            class="my-3"
            contain
            height="200"
            style="background-position: left;"
            content-class="logo-img"
          />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<style scoped>
.logo-img {
    background-position: left;
}

.v-image__image--contain {
    background-position: left !important;
}

</style>

<script></script>

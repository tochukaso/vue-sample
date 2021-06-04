<template>
  <v-container>
    <v-row v-for="component in components" :key="component.id">
      <v-col>
        <p v-bind:class="'text-' + component.align" v-if="component.type === 'text'">
          <a v-bind:href="component.url" v-if="component.url">
            {{ component.text }}
          </a>
          <span
            v-else
            :style="component.color ? 'color:' + component.color : ''"
          >
            {{ component.text }}
          </span>
        </p>
        <p v-else-if="component.type === 'image'">

      <v-img
       :src="component.url"
       :aspect-ratio="16/9"
       :width="component.width"
       ></v-img>
        </p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  props: {
    components: {
      type: Array
    }
  },
  emit: ['addComponent']
  /**
  methods: {
    addComponent(type, id) {

    }
  }
  */
}
</script>

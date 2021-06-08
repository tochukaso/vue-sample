<template>
  <v-container>
    <draggable class="draggable-component" :list="components">
      <transition-group type="transition" name="flip-list">
        <v-row v-for="component in components" :key="component.id">
          <v-col class="draggable-component-item">
            <p
              v-bind:class="'text-' + component.align"
              v-if="component.type === 'text'"
            >
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
                :aspect-ratio="16 / 9"
                :width="component.width"
              ></v-img>
            </p>
          </v-col>
        </v-row>
      </transition-group>
    </draggable>
  </v-container>
</template>

<style scoped>

.draggable-component {
  cursor: pointer;
}

.draggable-component-item {
  cursor: move;
}

.flip-list-move {
  transition: transform 0.5s;
}

</style>

<script>
import draggable from 'vuedraggable'
export default {
  components: {
    draggable
  },
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

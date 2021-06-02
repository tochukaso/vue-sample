<template>
    <v-navigation-drawer v-model="drawer" app>
        <v-list dense>
            <v-list-item link exact :to="{ name: 'home' }">
                <v-list-item-action>
                    <v-icon>mdi-home</v-icon>
                </v-list-item-action>
                <v-list-item-content>
                    <v-list-item-title>Home</v-list-item-title>
                </v-list-item-content>
            </v-list-item>
            <v-list-item @click="log">
                <v-list-item-action >
                    <v-icon>mdi-hexagon-multiple</v-icon>
                </v-list-item-action>
                <v-list-item-content>
                    <v-list-item-title>Parts</v-list-item-title>
                </v-list-item-content>
            </v-list-item>
            <v-list-item link exact :to="{ name: 'contact' }">
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
            }
        },
        methods: {
          log() {
            console.log('log');
          }
        }
    }
</script>

<template>
  <div id="main-wrapper">
    <v-app-bar color="deep-purple accent-4" dense dark>
      <v-toolbar-title>{{ $route.name }}</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-menu left bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-btn color="primary" dark v-bind="attrs" v-on="on">
            {{ userName }}
          </v-btn>
        </template>
        <v-list>
          <v-list-item>
            <v-list-item-title>Perfíl</v-list-item-title>
          </v-list-item>
          <v-list-item @click="logout">
            <v-list-item-title>Cerrar sesión</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import Vue from "vue"
import { mapGetters } from "vuex"

export default Vue.extend({
  computed: {
    ...mapGetters(["userName"])
  },
  methods: {
    logout() {
      console.log("cerrando...")
    }
  }
})
</script>
<style lang="scss" scoped>
#main-wrapper {
  height: calc(100% - 48px);
}
</style>

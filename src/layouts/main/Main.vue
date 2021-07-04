<template>
  <div id="main-wrapper">
    <v-app-bar color="deep-purple accent-4" dense dark>
      <v-toolbar-title>{{ $route.name }}</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-menu left bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-btn icon v-bind="attrs" v-on="on">
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item v-for="n in 5" :key="n" @click="() => {}">
            <v-list-item-title>Option {{ n }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import Vue from "vue"

export default Vue.extend({})
</script>
<style lang="scss" scoped>
#main-wrapper {
  height: calc(100% - 48px);
}
</style>

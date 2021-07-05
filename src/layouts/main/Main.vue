<template>
  <div id="main-wrapper">
    <v-navigation-drawer v-model="sidebar" app>
      <v-list nav>
        <v-list-item
          v-for="item in menuItems"
          :key="item.title"
          :to="item.path"
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>{{ item.title }}</v-list-item-content>
        </v-list-item>
        <v-list-item @click="logoutUser">
          <v-list-item-action>
            <v-icon>mdi-exit-to-app</v-icon>
          </v-list-item-action>
          <v-list-item-content>Cerrar sesión</v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar>
      <v-app-bar-nav-icon @click="sidebar = !sidebar"></v-app-bar-nav-icon>
      <v-toolbar-title>
        <router-link to="/" tag="span" style="cursor: pointer">
          {{ $route.name }}
        </router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-xs-only">
        <v-btn>
          {{ userName }}
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>

    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import Vue from "vue"
import { mapGetters, mapActions } from "vuex"

export default Vue.extend({
  computed: {
    ...mapGetters(["userName"])
  },
  data: () => ({
    sidebar: false,
    menuItems: [
      { title: "Inicio", path: "/home", icon: "mdi-home" },
      { title: "Editar perfíl", path: "/edit", icon: "mdi-account" }
    ]
  }),
  methods: {
    /**
     * user session ends
     */
    logoutUser(): void {
      this.logout()
    },
    ...mapActions(["logout"])
  }
})
</script>
<style lang="scss" scoped>
#main-wrapper {
  height: calc(100% - 48px);
}
</style>

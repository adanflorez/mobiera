<template>
  <v-container fill-height>
    <v-row>
      <v-col>
        <Login />
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue"
import Login from "@/components/forms/Login.vue"

export default Vue.extend({
  components: { Login },
  name: "Home"
})
</script>

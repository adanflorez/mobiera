<template>
  <v-container fill-height>
    <v-row>
      <v-col>
        <LoginForm />
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue"
import LoginForm from "@/components/forms/Login.vue"

export default Vue.extend({
  components: { LoginForm },
  name: "Login"
})
</script>

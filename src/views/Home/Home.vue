<template>
  <div>{{ user }}</div>
</template>

<script lang="ts">
import { User } from "@/interfaces/user"
import Vue from "vue"

export default Vue.extend({
  name: "Home",
  computed: {
    user(): User {
      return this.$store.state.session.user
    }
  }
})
</script>

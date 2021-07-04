<template>
  <v-container fill-height>
    <v-row>
      <v-col cols="12" sm="10" lg="6" offset-sm="1" offset-lg="3">
        <UserCard :user="user" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import UserCard from "@/components/common/UserCard.vue"
import { User } from "@/interfaces/user"
import Vue from "vue"

export default Vue.extend({
  components: { UserCard },
  name: "Home",
  computed: {
    user(): User {
      return this.$store.state.session.user
    }
  }
})
</script>

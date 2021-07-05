<template>
  <v-container fill-height>
    <v-row>
      <v-col cols="12" sm="10" lg="8" offset-sm="1" offset-lg="2">
        <EditForm />
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue"
import EditForm from "@/components/forms/Edit.vue"

export default Vue.extend({
  components: { EditForm }
})
</script>

<style scoped></style>

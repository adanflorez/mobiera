<template>
  <v-card class="pa-2 mx-auto" max-width="344" elevation="2">
    <v-card-title class="justify-center" primary-title
      ><h3>Iniciar sesión</h3></v-card-title
    >
    <v-form v-model="isFormValid">
      <v-container class="d-flex flex-column justify-center">
        <v-text-field
          label="Correo"
          :rules="[rules.required, rules.email]"
          filled
          append-icon="mdi-email"
        ></v-text-field>
        <v-text-field
          label="Contraseña"
          filled
          type="password"
          append-icon="mdi-eye-outline"
          :rules="[rules.required]"
        ></v-text-field>
        <v-btn class="ma-2" :disabled="!isFormValid" color="secondary">
          Entrar
        </v-btn>
      </v-container>
    </v-form>
  </v-card>
</template>

<script lang="ts">
import Vue from "vue"
import rules from "@/plugins/vuetify/rules"

export default Vue.extend({
  data: () => ({
    rules,
    isFormValid: false
  })
})
</script>

<style scoped></style>

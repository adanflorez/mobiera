<template>
  <v-card class="pa-2 mx-auto" max-width="344" elevation="2">
    <v-card-title class="justify-center" primary-title
      ><h3>Iniciar sesión</h3></v-card-title
    >
    <v-form v-model="isFormValid">
      <v-container class="d-flex flex-column justify-center">
        <v-alert v-show="showError" border="top" color="red lighten-2" dark>
          Error en las credenciales
        </v-alert>
        <v-text-field
          label="Correo"
          :rules="[rules.required, rules.email]"
          filled
          append-icon="mdi-email"
          v-model="user.email"
        ></v-text-field>
        <v-text-field
          label="Contraseña"
          filled
          :type="showPassword ? 'text' : 'password'"
          :append-icon="
            showPassword ? 'mdi-eye-outline' : 'mdi-eye-off-outline'
          "
          :rules="[rules.required]"
          @click:append="togglePassword"
          v-model="user.password"
        ></v-text-field>
        <v-btn
          class="ma-2"
          :disabled="!isFormValid || loading"
          :loading="loading"
          color="secondary"
          @click="login"
        >
          Entrar
        </v-btn>
      </v-container>
    </v-form>
  </v-card>
</template>

<script lang="ts">
import Vue from "vue"
import rules from "@/plugins/vuetify/rules"
// interfaces
import { User } from "@/interfaces/user"

export default Vue.extend({
  data: () => ({
    rules,
    isFormValid: false,
    showPassword: false,
    user: {} as User,
    loading: false,
    showError: false
  }),
  methods: {
    /**
     * show / hide password
     */
    togglePassword(): void {
      this.showPassword = !this.showPassword
    },
    /**
     * user login
     */
    async login() {
      this.loading = true
      try {
        const payload = {
          email: this.user.email,
          password: this.user.password
        }
        this.$store
          .dispatch("login", payload)
          .then(() => {
            this.loading = false
          })
          .catch(() => {
            this.loading = false
            this.showError = true
            setTimeout(() => {
              this.showError = false
            }, 3000)
          })
      } catch (error) {
        console.error(error)
      }
    }
  }
})
</script>

<style scoped></style>

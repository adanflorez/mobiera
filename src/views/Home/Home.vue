<template>
  <v-container fill-height>
    <v-row>
      <v-col>
        <v-card class="pa-2 mx-auto" max-width="344" elevation="2">
          <v-card-title class="justify-center" primary-title
            ><h3>Iniciar sesión</h3></v-card-title
          >
          <v-form>
            <v-container class="d-flex flex-column justify-center">
              <v-text-field
                label="Correo"
                filled
                append-icon="mdi-email"
              ></v-text-field>

              <v-text-field
                label="Contraseña"
                filled
                type="password"
                append-icon="mdi-eye-outline"
              ></v-text-field>
              <v-btn class="ma-2" color="secondary"> Entrar </v-btn>
            </v-container>
          </v-form>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue"

export default Vue.extend({
  name: "Home"
})
</script>

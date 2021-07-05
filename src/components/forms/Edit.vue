<template>
  <v-card class="pa-2" light>
    <v-card-title class="justify-center" primary-title
      ><h3>Editar perfíl</h3></v-card-title
    >
    <v-form v-model="isFormValid">
      <v-container class="d-flex flex-column justify-center">
        <v-alert v-show="showError" border="top" color="red lighten-2" dark>
          Error al actualizar los datos
        </v-alert>
        <v-row>
          <v-col class="py-2"
            ><v-text-field
              label="Nombre"
              :rules="[rules.required]"
              filled
              append-icon="mdi-account"
              v-model="user.name"
            ></v-text-field
          ></v-col>
          <v-col class="py-2">
            <v-text-field
              label="Apellido"
              filled
              :rules="[rules.required]"
              append-icon="mdi-account"
              v-model="user.lastName"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col class="py-2"
            ><v-text-field
              label="Correo"
              :rules="[rules.required, rules.email]"
              filled
              append-icon="mdi-email"
              v-model="user.email"
            ></v-text-field
          ></v-col>
          <v-col class="py-2">
            <v-text-field
              label="Contraseña"
              filled
              :rules="[rules.required]"
              v-model="user.password"
              append-icon="mdi-lock"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-textarea
              filled
              name="input-7-4"
              label="Descripción"
              rows="2"
              row-height="20"
            ></v-textarea>
          </v-col>
        </v-row>
        <v-btn
          class="ma-2"
          :disabled="!isFormValid || loading"
          :loading="loading"
          color="secondary"
          @click="save"
        >
          Actualizar perfíl
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
    user: {} as User,
    loading: false,
    showError: false
  }),
  methods: {
    save() {
      console.log("guardando")
    }
  }
})
</script>

<style scoped></style>

<template>
  <v-card class="pa-2" light>
    <v-card-title class="justify-center" primary-title
      ><h3>Editar perfíl</h3></v-card-title
    >
    <v-form v-model="isFormValid">
      <v-container class="d-flex flex-column justify-center">
        <v-alert v-show="showAlert" dense text :type="alertType" dismissible>
          {{ alertMessage }}
        </v-alert>
        <v-row>
          <v-col class="py-0"
            ><v-text-field
              label="Nombre"
              :rules="[rules.required, rules.alpha]"
              filled
              append-icon="mdi-account"
              v-model="user.name"
            ></v-text-field
          ></v-col>
          <v-col class="py-0">
            <v-text-field
              label="Apellido"
              filled
              :rules="[rules.required, rules.alpha]"
              append-icon="mdi-account"
              v-model="user.lastName"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col class="py-0"
            ><v-text-field
              label="Correo"
              :rules="[rules.required, rules.email]"
              filled
              append-icon="mdi-email"
              v-model="user.user"
            ></v-text-field
          ></v-col>
          <v-col class="py-0">
            <v-text-field
              label="Contraseña"
              filled
              :type="showPassword ? 'text' : 'password'"
              :append-icon="
                showPassword ? 'mdi-eye-outline' : 'mdi-eye-off-outline'
              "
              @click:append="togglePassword"
              :rules="[rules.required, rules.password]"
              v-model="user.password"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-textarea
              filled
              name="input-7-4"
              label="Descripción"
              rows="3"
              row-height="30"
              v-model="user.description"
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
import { mapMutations } from "vuex"
import { UserMutations } from "@/enums/user-mutations"

export default Vue.extend({
  data: () => ({
    rules,
    isFormValid: false,
    loading: false,
    showAlert: false,
    alertType: "",
    alertMessage: "",
    showPassword: false
  }),
  computed: {
    user(): User {
      const userToEdit = Object.assign({}, this.$store.state.session.user)
      return userToEdit
    }
  },
  methods: {
    /**
     * Save updated user info
     */
    save() {
      this.loading = true
      try {
        setTimeout(() => {
          this[UserMutations.UPDATE_USER_INFO](this.user)
          this.loading = false
          this.alertType = "success"
          this.showAlert = true
          this.alertMessage = "Información actualizada"
        }, 3000)
      } catch (error) {
        this.loading = false
        this.alertType = "error"
        this.showAlert = true
        this.alertMessage = "Error al actualizar la información"
      }
    },
    /**
     * show / hide password
     */
    togglePassword(): void {
      this.showPassword = !this.showPassword
    },
    ...mapMutations([UserMutations.UPDATE_USER_INFO])
  }
})
</script>

<style scoped></style>

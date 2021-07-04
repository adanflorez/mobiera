<template>
  <v-card light class="mx-auto" elevation="20">
    <div class="d-flex flex-column flex-sm-row">
      <div>
        <v-img
          class="my-n2"
          :lazy-src="user.photoUrl"
          :src="user.photoUrl"
        ></v-img>
      </div>

      <div class="d-flex flex-column justify-space-between">
        <div>
          <v-card-title>{{ userName }}</v-card-title>
          <v-card-text class="blue-grey--text">
            <div class="font-weight-light text-caption">
              {{ user.description }}
              <br />
              <a href="#!">Leer más</a>
            </div>
          </v-card-text>
        </div>

        <v-card-text>
          <v-divider class="mb-4" light></v-divider>
          <div class="d-flex text-uppercase">
            <div class="mr-10 blue-grey--text">
              seguidores <br />
              <h3 class="black--text">{{ user.followers }}</h3>
            </div>
            <div class="blue-grey--text">
              seguidos <br />
              <h3 class="black--text">{{ user.following }}</h3>
            </div>
          </div>
        </v-card-text>
      </div>
    </div>
  </v-card>
</template>

<script lang="ts">
import { User } from "@/interfaces/user"
import Vue, { PropOptions } from "vue"

export default Vue.extend({
  props: {
    user: {
      required: true
    } as PropOptions<User>
  },
  computed: {
    userName(): string {
      return `${this.user.name} ${this.user.lastName}`
    }
  }
})
</script>

<style lang="scss" scoped>
.v-image {
  width: 100%;
  height: 250px;

  @media (min-width: 600px) {
    width: 250px;
    height: 400px;
  }
}
</style>

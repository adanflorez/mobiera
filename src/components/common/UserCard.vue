<template>
  <v-card light class="mx-auto" elevation="20">
    <div class="d-flex flex-column flex-sm-row">
      <div class="my-n2">
        <v-img :lazy-src="user.photoUrl" :src="user.photoUrl"></v-img>
      </div>

      <div class="d-flex flex-column justify-space-between">
        <div>
          <v-card-title>{{ userName }}</v-card-title>
          <v-card-text class="blue-grey--text">
            <div class="font-weight-light text-caption">
              {{ user.description | truncate(truncateLength) }}
              <br />
              <a @click="readMore" href="#!">{{ showMoreText }}</a>
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

import { USER_DESCRIPTION_TRUNCATE } from "@/constants/global"

export default Vue.extend({
  props: {
    user: {
      required: true
    } as PropOptions<User>
  },
  computed: {
    userName(): string {
      return `${this.user.name} ${this.user.lastName}`
    },
    truncateLength(): number {
      return this.showMore
        ? this.user.description.length
        : USER_DESCRIPTION_TRUNCATE
    }
  },
  data: () => ({
    showMore: false,
    showMoreText: "Leer más"
  }),
  methods: {
    /**
     * show / hide user info
     */
    readMore() {
      this.showMore = !this.showMore
      this.showMore
        ? (this.showMoreText = "Leer menos")
        : (this.showMoreText = "Leer más")
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

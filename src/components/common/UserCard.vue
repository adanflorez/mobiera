<template>
  <v-card light class="mx-auto" elevation="20">
    <div class="d-flex flex-column flex-sm-row">
      <div class="img-wrapper">
        <v-img :lazy-src="user.photoUrl" :src="user.photoUrl"></v-img>
        <div class="mx-auto btn-actions pa-2">
          <div class="d-flex justify-center">
            <v-btn rounded color="primary" dark @click="goToEdit">
              <v-icon left dark> mdi-account-edit-outline </v-icon> Editar
            </v-btn>
          </div>
        </div>
      </div>

      <div class="d-flex flex-column justify-space-between">
        <div>
          <v-card-title>{{ userName }}</v-card-title>
          <v-card-text class="blue-grey--text">
            <div class="font-weight-light text-caption">
              {{ user.description | truncate(truncateLength) }}
              <br />
              <a @click="readMore">{{ showMoreText }} </a>
            </div>
          </v-card-text>
        </div>

        <v-card-text>
          <v-divider class="mb-4" light></v-divider>
          <div class="d-flex justify-center text-center text-uppercase">
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
import { mapGetters } from "vuex"

export default Vue.extend({
  props: {
    user: {
      required: true
    } as PropOptions<User>
  },
  computed: {
    truncateLength(): number {
      return this.showMore
        ? this.user.description.length
        : USER_DESCRIPTION_TRUNCATE
    },
    ...mapGetters(["userName"])
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
    },
    /**
     * redirect to edit profile
     */
    goToEdit(): void {
      this.$router.push("/edit")
    }
  }
})
</script>

<style lang="scss" scoped>
.img-wrapper {
  position: relative;

  .v-image {
    width: 100%;
    height: 250px;

    @media (min-width: 600px) {
      width: 250px;
      height: 400px;
    }
  }

  .btn-actions {
    position: absolute;
    bottom: 0;
    right: 0;
    left: 0;
    background-color: rgba($color: #757575, $alpha: 0.5);
  }
}
</style>

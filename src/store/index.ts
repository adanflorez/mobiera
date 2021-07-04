import Vue from "vue"
import Vuex, { StoreOptions } from "vuex"

import { user } from "@/store/user"

Vue.use(Vuex)

const state = () => ({})

export type RootState = ReturnType<typeof state>

const store: StoreOptions<RootState> = {
  state,
  modules: {
    user
  }
}

export default new Vuex.Store<RootState>(store)

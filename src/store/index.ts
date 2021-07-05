import Vue from "vue"
import Vuex, { StoreOptions } from "vuex"

import { session } from "@/store/session"
import VuexPersistence from "vuex-persist"

const vuexLocal = new VuexPersistence<RootState>({
  storage: window.localStorage,
  key: "mobiera"
})

Vue.use(Vuex)

const state = () => ({})

export type RootState = ReturnType<typeof state>

const store: StoreOptions<RootState> = {
  state,
  modules: {
    session
  },
  plugins: [vuexLocal.plugin]
}

export default new Vuex.Store<RootState>(store)

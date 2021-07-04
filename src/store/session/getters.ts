import { GetterTree } from "vuex"
import { RootState } from ".."
import { SessionState } from "./types"

export const getters: GetterTree<SessionState, RootState> = {
  isLoggedIn: (state) => {
    return state.accessToken ? true : false
  }
}

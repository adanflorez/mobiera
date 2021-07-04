import { GetterTree } from "vuex"
import { RootState } from ".."
import { UserState } from "./types"

export const getters: GetterTree<UserState, RootState> = {
  isLoggedIn: (state) => {
    return state.accessToken ? true : false
  }
}

import { MutationTree } from "vuex"
import { RootState } from ".."

export const mutations: MutationTree<RootState> = {
  updateUserInfo(state, payload) {
    console.log(payload)
    console.log(state)
  }
}

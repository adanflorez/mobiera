import { MutationTree } from "vuex"
import { RootState } from ".."

import { UserMutations } from "@/enums/user-mutations"

export const mutations: MutationTree<RootState> = {
  [UserMutations.UPDATE_USER_INFO](state, payload) {
    console.log(payload)
    console.log(state)
  }
}

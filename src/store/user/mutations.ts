import { MutationTree } from "vuex"

import { UserMutations } from "@/enums/user-mutations"
import { UserState } from "./types"
import { UserAuth } from "@/interfaces/user-auth"

export const mutations: MutationTree<UserState> = {
  [UserMutations.UPDATE_USER_INFO](state, user: UserAuth) {
    state.user = Object.assign({}, user)
  },
  [UserMutations.SET_ACCESS_TOKEN](state, accessToken: string) {
    state.accessToken = accessToken
  }
}

import { MutationTree } from "vuex"

import { UserMutations } from "@/enums/user-mutations"
import { SessionState } from "./types"
import { User } from "@/interfaces/user"

export const mutations: MutationTree<SessionState> = {
  [UserMutations.UPDATE_USER_INFO](state, user: User) {
    state.user = Object.assign({}, user)
  },
  [UserMutations.SET_ACCESS_TOKEN](state, accessToken: string) {
    state.accessToken = accessToken
  }
}

import { Module } from "vuex"
import { RootState } from ".."
import { UserState } from "@/store/user/types"
import { actions } from "@/store/user/actions"
import { mutations } from "@/store/user/mutations"
import { UserAuth } from "@/interfaces/user-auth"

const state: UserState = {
  user: {} as UserAuth,
  accessToken: ""
}

export const user: Module<UserState, RootState> = {
  state,
  actions,
  mutations
}

import { Module } from "vuex"
import { RootState } from ".."
import { UserState } from "@/store/user/types"
import { actions } from "@/store/user/actions"
import { mutations } from "@/store/user/mutations"

const state: UserState = {
  name: "",
  lastName: "",
  photoUrl: ""
}

export const user: Module<UserState, RootState> = {
  state,
  actions,
  mutations
}

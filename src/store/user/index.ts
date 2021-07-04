import { Module } from "vuex"
import { RootState } from ".."
import { UserState } from "./types"

const state: UserState = {
  name: "",
  lastName: "",
  photoUrl: ""
}

export const user: Module<UserState, RootState> = {
  state
}

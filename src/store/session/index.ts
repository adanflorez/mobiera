import { Module } from "vuex"
import { RootState } from ".."
import { SessionState } from "@/store/session/types"
import { actions } from "@/store/session/actions"
import { mutations } from "@/store/session/mutations"
import { getters } from "@/store/session/getters"
import { User } from "@/interfaces/user"

const state: SessionState = {
  user: {} as User,
  accessToken: ""
}

export const session: Module<SessionState, RootState> = {
  state,
  actions,
  mutations,
  getters
}

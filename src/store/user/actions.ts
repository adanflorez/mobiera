import services from "@/http/services"
import { ActionTree } from "vuex"
import { RootState } from ".."
import { UserState } from "./types"

export const actions: ActionTree<UserState, RootState> = {
  login({ commit }, payload): Promise<unknown> {
    return new Promise((resolve, reject) => {
      services
        .login(payload.email, payload.password)
        .then((response) => {
          if (response.data) {
            console.log(response.data)
            commit("updateUserInfo", response.data, { root: true })
            resolve(response)
          } else {
            reject({ message: "Error en las credenciales!!!" })
          }
        })
        .catch((error) => {
          reject(error)
        })
    })
  }
}
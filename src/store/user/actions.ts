import services from "@/http/services"
import { ActionTree } from "vuex"
import { RootState } from ".."
import { UserState } from "@/store/user/types"

import { UserMutations } from "@/enums/user-mutations"

export const actions: ActionTree<UserState, RootState> = {
  /**
   * Returns Promise
   *
   * @param payload - email and password values
   */
  login({ commit }, payload): Promise<unknown> {
    return new Promise((resolve, reject) => {
      services
        .login(payload.email, payload.password)
        .then((response) => {
          if (response.data && response.data.length) {
            commit(UserMutations.UPDATE_USER_INFO, response.data[0])
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

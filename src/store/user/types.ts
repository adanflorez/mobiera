import { UserAuth } from "@/interfaces/user-auth"

export interface UserState {
  user: UserAuth
  accessToken: string
}

import { User } from "@/interfaces/user"

export interface SessionState {
  user: User
  accessToken: string
}

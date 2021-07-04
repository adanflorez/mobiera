import { AxiosInstance, AxiosResponse } from "axios"
import api from "../axios"

interface Response {
  data: Array<unknown>
}

const services = {
  login(email: string, password: string): Promise<Response> {
    return api.get(`users?user=${email}&password=${password}`)
  }
}

export default services

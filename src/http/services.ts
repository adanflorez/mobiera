import { AxiosInstance, AxiosResponse } from "axios"
import api from "../axios"

const services = {
  login(
    email: string,
    password: string
  ): Promise<AxiosResponse<AxiosInstance>> {
    return api.get(`users?user=${email}&password=${password}`)
  }
}

export default services

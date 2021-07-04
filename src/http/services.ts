import api from "../axios"

interface Response {
  data: Array<unknown>
}

const services = {
  /**
   * Returns the response from the endpoint to log in
   *
   * @param email - user email
   * @param password - user password
   * @returns Response type promise
   */
  login(email: string, password: string): Promise<Response> {
    return api.get(`users?user=${email}&password=${password}`)
  }
}

export default services

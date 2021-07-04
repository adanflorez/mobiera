// axios
import axios from "axios"

const urlApi = process.env.VUE_APP_BASE_URL
const api = axios.create({
  baseURL: urlApi
})

// Set Response Interceptor
api.interceptors.response.use(
  function (response) {
    return response
  },
  function (error) {
    return Promise.reject(error)
  }
)

export default api

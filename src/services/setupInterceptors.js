import {obterTokenNaStorage} from "@/utils/localStorage.js";
import { http } from './config'

export function apiInterceptor () {
  http.interceptors.request.use(
    (config) => {
      const token = obterTokenNaStorage();
      config.headers.Authorization = 'Bearer ' + token
      return config
    },
    (error) => {
      return Promise.reject(error)
    }
  )
  http.interceptors.response.use(
    (res) => {
      return res
    },
    async (err) => {
      console.log(err)
      return Promise.reject(err)
    }
  )
}

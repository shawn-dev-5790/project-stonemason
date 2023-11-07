import axios, { AxiosRequestConfig } from 'axios'
import { onReqFailure, onReqSuccess, onResFailure, onResSuccess } from './helpers/interceptor'

const instance = axios.create({
  baseURL: process.env.NODE_ENV,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
    Authorization: '',
    _exception_code: '',
  },
})

instance.interceptors.request.use(onReqSuccess, onReqFailure)
instance.interceptors.response.use(onResSuccess, onResFailure)

export interface IMakeRequest extends AxiosRequestConfig {
  _exception_code?: string
}
export default function makeRequest(config: IMakeRequest) {
  return instance({ ...config })
}

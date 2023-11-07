import axios, { AxiosRequestConfig } from 'axios'
import { onReqSuccess, onReqFailure, onResSuccess, onResFailure } from './helpers/interceptor'

const abortController = new AbortController()
const signal = abortController.signal

const instance = axios.create({
  baseURL: process.env.NODE_ENV,
  withCredentials: true,
  signal: signal,
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
export default function makeRequestAnalytics(config: IMakeRequest) {
  return instance({ ...config })
}

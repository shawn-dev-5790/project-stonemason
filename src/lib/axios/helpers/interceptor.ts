import { AxiosError, AxiosResponse, InternalAxiosRequestConfig } from 'axios'

export function onReqSuccess(req: InternalAxiosRequestConfig) {
  // const accessToken = 'pass'
  // const authorization = ['Bearer', accessToken].join(' ')
  return req
}

export function onReqFailure(err: AxiosError) {
  return Promise.reject(err)
}

export function onResSuccess(req: AxiosResponse) {
  return req
}

export function onResFailure(err: AxiosError) {
  const status = err.response?.status
  //   const refreshToken = ''

  if (status === 401) {
    console.log('update auth token')
    return Promise.resolve()
  }

  return Promise.reject(err)
}

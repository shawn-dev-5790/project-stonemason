import axios, { AxiosError, AxiosRequestConfig, AxiosResponse, InternalAxiosRequestConfig } from 'axios'

export default class RequestManager {
  // constants
  public static get DEFAULT_REQUEST_OPTS() {
    return {
      baseURL: process.env.NODE_ENV,
      withCredentials: true,
      headers: { 'Content-Type': 'application/json' },
    }
  }

  // system - create request instances
  public static create<Req extends AxiosRequestConfig, Res>(config: Req): Promise<AxiosResponse<Res, any>> {
    // create request option
    const opts: any = RequestManager.DEFAULT_REQUEST_OPTS

    // add custom header attrs
    opts.headers.Authorization = ''
    opts.headers.ExceptionCode = ''

    // create request instance
    const instance = axios.create(opts)

    // add request instance interceptors
    instance.interceptors.request.use(RequestManager.onReqSuccessInterceptor, RequestManager.onReqFailureInterceptor)
    instance.interceptors.response.use(RequestManager.onResSuccessInterceptor, RequestManager.onResFailureInterceptor)

    return instance(config)
  }

  // interceptors
  public static onReqSuccessInterceptor(req: InternalAxiosRequestConfig<any>) {
    return req
  }
  public static onReqFailureInterceptor(err: AxiosError) {
    return Promise.reject(err)
  }
  public static onResSuccessInterceptor(res: AxiosResponse<any, any>) {
    return res
  }
  public static onResFailureInterceptor(err: AxiosError) {
    return Promise.reject(err)
  }
}

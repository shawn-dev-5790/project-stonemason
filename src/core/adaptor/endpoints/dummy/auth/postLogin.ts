export const REQUEST_URL_POST_LOGIN = '/auth/login'

export interface IReqPostLogin {
  url: 'POST'
  data: {
    email: string
    password: string
  }
}

export interface IResPostLogin {
  code: string
  message: string
}

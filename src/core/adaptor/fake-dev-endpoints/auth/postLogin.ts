export interface IReqPostLogin {
  method: 'POST'
  url: '/auth/login' | string
  data: {
    email: string
    password: string
  }
}

export interface IResPostLogin {
  code: string
  message: string
}

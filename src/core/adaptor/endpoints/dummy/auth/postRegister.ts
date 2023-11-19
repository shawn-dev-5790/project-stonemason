export const REQUEST_URL_POST_REGISTER = '/auth/register'

export interface IReqPostRegister {
  method: 'POST'
  url: string
  data: {
    email: string
    password: string
    pincode: string
    service_lang_type: string
    name: string
    phone_number: string
  }
}

export interface IResPostRegister {
  code: string
  message: string
}

export interface IReqPostPinVerification {
  method: 'POST'
  url: '/auth/pin-verification' | string
  data: {
    confirmation_type: 'to_register' | 'to_recovery_password'
    email: string
    pincode: string
  }
}
export interface IResPostPinVerification {
  code: string
  message: string
}

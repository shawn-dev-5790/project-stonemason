export interface IReqPostEmailConfirmation {
  method: 'POST'
  url: '/auth/email-confirmation' | string
  data: {
    email: string
    confirmation_type: 'to_register' | 'to_recovery_password'
  }
}

export interface IResPostEmailConfirmation {
  code: string
  message: string
}

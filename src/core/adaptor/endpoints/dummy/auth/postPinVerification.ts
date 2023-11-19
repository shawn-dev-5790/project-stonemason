import { TConfirmationType } from '@/core/domain/types'

export const REQUEST_URL_POST_PIN_VERIFICATION = '/auth/pin-verification'

export interface IReqPostPinVerification {
  method: 'POST'
  url: string
  data: {
    confirmation_type: TConfirmationType
    email: string
    pincode: string
  }
}
export interface IResPostPinVerification {
  code: string
  message: string
}

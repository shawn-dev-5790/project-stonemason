import { TConfirmationType } from '@/core/domain/types'

export const REQUEST_URL_POST_EMAIL_CONFIRMATION = '/auth/email-confirmation'

export interface IReqPostEmailConfirmation {
  url: 'POST'
  data: {
    email: string
    confirmation_type: TConfirmationType
  }
}

export interface IResPostEmailConfirmation {
  code: string
  message: string
}

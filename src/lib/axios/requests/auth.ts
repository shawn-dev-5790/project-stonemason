import RequestManager from '../RequestManager'
import { IReqPostRegister, IResPostRegister } from '@/core/adaptor/fake-dev-endpoints/auth/postRegister'
import { IReqPostLogin, IResPostLogin } from '@/core/adaptor/fake-dev-endpoints/auth/postLogin'
import {
  IReqPostEmailConfirmation,
  IResPostEmailConfirmation,
} from '@/core/adaptor/fake-dev-endpoints/auth/postEmailConfirmation'
import {
  IReqPostPinVerification,
  IResPostPinVerification,
} from '@/core/adaptor/fake-dev-endpoints/auth/postPinVerification'

export const reqPostLogin = (data: IReqPostLogin['data']) => {
  return RequestManager.create<IReqPostLogin, IResPostLogin>({
    method: 'POST',
    url: '/auth/login',
    data,
  })
}
export const reqPostRegister = (data: IReqPostRegister['data']) => {
  return RequestManager.create<IReqPostRegister, IResPostRegister>({
    method: 'POST',
    url: '/auth/register',
    data,
  })
}
export const reqPostEmailConfirmation = (data: IReqPostEmailConfirmation['data']) => {
  return RequestManager.create<IReqPostEmailConfirmation, IResPostEmailConfirmation>({
    method: 'POST',
    url: '/auth/email-confirmation',
    data,
  })
}
export const reqPostPinVerification = (data: IReqPostPinVerification['data']) => {
  return RequestManager.create<IReqPostPinVerification, IResPostPinVerification>({
    method: 'POST',
    url: '/auth/pin-verification',
    data,
  })
}

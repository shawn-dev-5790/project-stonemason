import { Nullable } from '@/core/utils/types'

export interface ILoginPageUseCase {
  api: Nullable<any>
  state: Nullable<any>
}

export default class LoginPageUseCase {
  constructor(private _data: ILoginPageUseCase) {}

  public static init(): ILoginPageUseCase {
    return { api: null, state: null }
  }
  public toObject(): ILoginPageUseCase {
    return JSON.parse(JSON.stringify(this._data))
  }
  public reset(): ILoginPageUseCase {
    this._data = LoginPageUseCase.init()
    return this.toObject()
  }
}

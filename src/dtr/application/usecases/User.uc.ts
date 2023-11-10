import { IResGetUser } from '@/dtr/adaptor/endpoints/getUser'
import { Nullable } from '@/dtr/utils/types'

export interface IUserUseCase {
  api: { user: Nullable<IResGetUser> }
  state: {}
}

export default class UserUseCase {
  constructor(private _data: IUserUseCase) {}
  public static init() {
    const initialState = {
      api: { user: null },
      state: {},
    }
    return initialState
  }
  public reset() {
    this._data = UserUseCase.init()
    return this.toObject()
  }
  public toObject() {
    return JSON.parse(JSON.stringify(this._data))
  }
  public set user(user: IUserUseCase['api']['user']) {
    this._data.api.user = user
  }
  public get user() {
    return this._data.api.user
  }
  public get state() {
    return this._data.state
  }
}

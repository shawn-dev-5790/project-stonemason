import { EMAIL_REGEX } from '@/core/utils/regex'
import { Nullable } from '@/core/utils/types'
import setting from '@/core/setting.json'
import { getRouterUrl } from '@/core/utils/url'

export interface ILoginPageUseCase {
  api: Nullable<any>
  state: {
    email: string
    password: string
  }
}

export default class LoginPageUseCase {
  constructor(private _data: ILoginPageUseCase) {}

  // system
  public static init(): ILoginPageUseCase {
    return {
      api: null,
      state: {
        email: '',
        password: '',
      },
    }
  }
  public toObject(): ILoginPageUseCase {
    return JSON.parse(JSON.stringify(this._data))
  }
  public reset(): ILoginPageUseCase {
    this._data = LoginPageUseCase.init()
    return this.toObject()
  }

  // constants

  // getters & setters
  public get state() {
    return this._data.state
  }

  // values
  getRegisterPageUrl() {
    return getRouterUrl(setting.sitemap.register)
  }
  getPasswordRecoveryPageUrl() {
    return getRouterUrl(setting.sitemap.passwordRecovery)
  }
  getSitesPageUrl() {
    return getRouterUrl(setting.sitemap.sites)
  }

  // checkers
  verifyEmail(email: string): boolean {
    return EMAIL_REGEX.test(email)
  }
  verifyPassword(password: string): boolean {
    return password.length > 8
  }
  canLogin(): boolean {
    if (!this.verifyEmail(this.state.email)) return false
    if (!this.verifyPassword(this.state.password)) return false
    return true
  }

  // features
  onChangeEmail(email: string, onError: () => void) {
    if (!this.verifyEmail(email)) return onError()
    this._data.state.email = email
  }
  onChangePassword(password: string, onError: () => void) {
    if (!this.verifyPassword(password)) return onError()
    this._data.state.password = password
  }
  onChangeLanguage(LanguageManager: any) {
    if (!LanguageManager.onChangeLangTo) return
    LanguageManager.onChangeLangTo(prompt('insert language code') as string)
  }
  onLogin(APIManager: any) {
    if (!this.canLogin()) return
    if (!APIManager) return
    //call api
    // 200
  }
}

import EmailVO from '@/core/domain/valueObjects/EmailVO'
import PasswordVO from '@/core/domain/valueObjects/PasswordVO'
import setting from '@/core/setting.json'
import { getRouterUrl } from '@/core/utils/url'

export interface ILoginPageUseCase {
  api: null
  state: { email: string; password: string }
}

export default class LoginPageUseCase {
  constructor(private _data: ILoginPageUseCase) {}

  public static init(): ILoginPageUseCase {
    return {
      api: null,
      state: { email: '', password: '' },
    }
  }
  public static reset(): ILoginPageUseCase {
    return new LoginPageUseCase(LoginPageUseCase.init()).toObject()
  }
  public toObject(): ILoginPageUseCase {
    return JSON.parse(JSON.stringify(this._data))
  }

  private get state() {
    return this._data.state
  }
  private get email() {
    return new EmailVO(this.state.email)
  }
  private get password() {
    return new PasswordVO(this.state.password)
  }

  public getRegisterPageUrl() {
    return getRouterUrl(setting.sitemap.register)
  }
  public getPasswordRecoveryPageUrl() {
    return getRouterUrl(setting.sitemap.passwordRecovery)
  }
  public getSitesPageUrl() {
    return getRouterUrl(setting.sitemap.sites)
  }
  public canLogin(): boolean {
    const checkList = [this.email.verify(), this.password.verify()]
    return checkList.every((check) => check)
  }

  // features
  public onChangeEmail({ email }: { email: string }) {
    this._data.state.email = email
  }
  public onChangePassword({ password }: { password: string }) {
    this._data.state.password = password
  }
  public onChangeLanguage(LanguageManager: any) {
    if (!LanguageManager) return
    LanguageManager.onChangeLangTo(prompt('insert language code') as string)
  }
  public onLogin({ RequestManager }: { RequestManager: any }) {
    if (!this.canLogin()) return
    if (!RequestManager) return
    RequestManager(this.state.email, this.state.password).catch((err: any) => console.log(err))
  }
}

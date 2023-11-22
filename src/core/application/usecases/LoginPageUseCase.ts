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

  // system
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

  // getters & setters
  private get state() {
    return this._data.state
  }

  // constants

  // values
  public getRegisterPageUrl(): string {
    return getRouterUrl(setting.sitemap.register)
  }
  public getPasswordRecoveryPageUrl(): string {
    return getRouterUrl(setting.sitemap.passwordRecovery)
  }
  public getSitesPageUrl(): string {
    return getRouterUrl(setting.sitemap.sites)
  }
  public canLogin(): boolean {
    const email = new EmailVO(this.state.email)
    const password = new PasswordVO(this.state.password)
    return [email.verify(), password.verify()].every((check) => check)
  }
  public isShowEmailErrorMsg(): boolean {
    const email = new EmailVO(this.state.email)
    return email.value !== '' && !email.verify()
  }
  public isShowPasswordErrorMsg(): boolean {
    const password = new PasswordVO(this.state.password)
    return password.value !== '' && !password.verify()
  }

  // features
  public onChangeEmail(email: string): void {
    this._data.state.email = email
  }
  public onChangePassword(password: string): void {
    this._data.state.password = password
  }
  public onChangeLanguage(LanguageManager: any): void {
    if (!LanguageManager) return
    LanguageManager.onChangeLangTo(prompt('insert language code') as string)
  }
  public onLogin(RequestManager: any): void {
    if (!RequestManager) return
    if (!this.canLogin()) return
    RequestManager(this.state.email, this.state.password).catch((err: any) => console.log(err))
  }
}

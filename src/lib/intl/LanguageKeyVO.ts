export type TLanguageKeyDomain = 'common' | 'alimtalk' | 'friendtalk'
export type TLanguageKeyRole = 'tooltip' | 'toast' | 'dialog'
export type TLanguageKeyType = 'txt' | 'dtm'

export interface ILanguageKeyVO {
  domain: string
  role: string
  type: string
  name: string
  sep: string
}

export default class LanguageKeyVO {
  constructor(private _data: ILanguageKeyVO) {}
  public static init() {
    return { domain: '', role: '', type: '', name: '', sep: '.' }
  }
  public static create() {
    return new LanguageKeyVO(LanguageKeyVO.init())
  }
  public toObject() {
    return JSON.parse(JSON.stringify(this._data))
  }
  public toString() {
    this.validate()
    const { domain, role, type, name, sep } = this._data
    return [domain, role, type, name].join(sep)
  }
  public getDomain() {
    return this._data.domain
  }
  public getRole() {
    return this._data.role
  }
  public getType() {
    return this._data.type
  }
  public getName() {
    return this._data.name
  }
  public domain(domain: TLanguageKeyDomain) {
    this._data.domain = domain
    return this
  }
  public role(role: TLanguageKeyRole) {
    this._data.role = role
    return this
  }
  public type(type: TLanguageKeyType) {
    this._data.type = type
    return this
  }
  public name(name: string) {
    this._data.name = name
    return this
  }
  // validate
  public validate() {
    try {
      this.verifyDomain()
      this.verifyRole()
      this.verifyType()
      this.verifyName()
      this.verifySep()
    } catch (error: any) {
      throw new Error('LanguageKeyVO Error')
    }
  }
  // privates
  // check methods
  private checkTruthy(target: string) {
    if (!target) throw new Error('LanguageKeyVO.checkTruthy.Error')
  }
  private checkFormat(target: string) {
    const REGEX = /^[(a-z0-9_)]*$/ // 소문자, 숫자, _ 만 허용됨
    if (!REGEX.test(target)) throw new Error('LanguageKeyVO.checkFormat.Error')
  }
  // verify fields
  private verifyDomain() {
    this.checkTruthy(this._data.domain)
    this.checkFormat(this._data.domain)
  }
  private verifyRole() {
    this.checkTruthy(this._data.role)
    this.checkFormat(this._data.role)
  }
  private verifyType() {
    this.checkTruthy(this._data.type)
    this.checkFormat(this._data.type)
  }
  private verifyName() {
    this.checkTruthy(this._data.name)
    this.checkFormat(this._data.name)
  }
  private verifySep() {
    this.checkTruthy(this._data.sep)
  }
}

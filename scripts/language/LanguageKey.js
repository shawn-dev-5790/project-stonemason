class LanguageKey {
  // statics
  static ALLOW_DOMAINS = ['common', 'site', 'alimtalk', 'friendtalk', 'lms', 'email', 'banner', 'products']
  static ALLOW_ROLES = ['dialog', 'tooltip', 'toast']
  static ALLOW_TYPES = ['txt', 'dtm']
  static ALLOW_FORMAT_REGEX = /^[(a-z0-9_)]*$/
  static parseKeyToObj(key) {
    const [domain, role, type, name] = key.split('.')
    return LanguageKey.create().domain(domain).role(role).type(type).name(name).validate().toObject()
  }
  static parseObjToKey(obj) {
    const { domain, role, type, name } = obj
    return LanguageKey.create().domain(domain).role(role).type(type).name(name).validate().toString()
  }
  static create() {
    return new LanguageKey()
  }
  // attr
  _data = {
    domain: '',
    role: '',
    type: '',
    name: '',
  }
  /**
   * SELECT LANGUAGE KEY DOMAIN
   * @param {string} domain LanguageKey.ALLOW_DOMAINS
   * ex) common', 'site', 'alimtalk', 'friendtalk', ... etc
   * @returns LanguageKey
   */
  domain(domain) {
    this.verifyDomain(domain)
    this._data.domain = domain
    return this
  }
  /**
   * SELECT LANGUAGE KEY ROLE
   * @param {string} role LanguageKey.ALLOW_ROLES
   * ex) 'dialog', 'tooltip', 'toast' ... etc
   * @returns LanguageKey
   */
  role(role) {
    this.verifyRole(role)
    this._data.role = role
    return this
  }
  /**
   * SELECT LANGUAGE KEY TYPE LanguageKey.ALLOW_TYPES
   * @param {string} type ex) 'txt', 'dtm'
   * @returns LanguageKey
   */
  type(type) {
    this.verifyType(type)
    this._data.type = type
    return this
  }
  /**
   * INSERT LANGUAGE KEY NAME
   * @param {string} name your language key main name
   * @returns LanguageKey
   */
  name(name) {
    this.verifyName(name)
    this._data.name = name
    return this
  }
  toString() {
    return [this._data.domain, this._data.role, this._data.type, this._data.name].join('.')
  }
  toObject() {
    return JSON.parse(JSON.stringify(this._data))
  }
  checkTruthy(str) {
    if (!!str) return
    throw new Error('LanguageKey.checkTruthy.Error')
  }
  checkFormat(str) {
    if (LanguageKey.ALLOW_FORMAT_REGEX.test(str)) return // 소문자, 숫자, _ 만 허용됨
    throw new Error('LanguageKey.checkFormat.Error')
  }
  checkAllowDomain(str) {
    if (LanguageKey.ALLOW_DOMAINS.includes(str)) return
    throw new Error('LanguageKey.checkDomain.Error')
  }
  checkAllowRole(str) {
    if (LanguageKey.ALLOW_ROLES.includes(str)) return
    throw new Error('LanguageKey.checkRole.Error')
  }
  checkAllowType(str) {
    if (LanguageKey.ALLOW_TYPES.includes(str)) return
    throw new Error('LanguageKey.checkType.Error')
  }
  verifyDomain(str) {
    try {
      this.checkTruthy(str)
      this.checkFormat(str)
      this.checkAllowDomain(str)
    } catch (error) {
      throw new Error('LanguageKey.verifyDomain.Error')
    }
  }
  verifyRole(str) {
    try {
      this.checkTruthy(str)
      this.checkFormat(str)
      this.checkAllowRole(str)
    } catch (error) {
      throw new Error('LanguageKey.verifyRole.Error')
    }
  }
  verifyType(str) {
    try {
      this.checkTruthy(str)
      this.checkFormat(str)
      this.checkAllowType(str)
    } catch (error) {
      throw new Error('LanguageKey.verifyType.Error')
    }
  }
  verifyName(str) {
    try {
      this.checkTruthy(str)
      this.checkFormat(str)
    } catch (error) {
      throw new Error('LanguageKey.verifyName.Error')
    }
  }
  validate() {
    this.verifyDomain(this._data.domain)
    this.verifyRole(this._data.role)
    this.verifyType(this._data.type)
    this.verifyName(this._data.name)
    return this
  }
}

module.exports = LanguageKey

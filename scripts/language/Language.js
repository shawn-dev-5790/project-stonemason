const LanguageKey = require('./LanguageKey')

class Language {
  // attr
  _data = {
    id: '',
    nation: '',
    key: {
      domain: '',
      role: '',
      type: '',
      name: '',
    },
    value: '',
    desc: '',
    created_at: '',
    updated_at: '',
  }
  toObject() {
    return JSON.stringify(JSON.parse(this._data))
  }
  create(id, nation, key, value, desc) {
    this._data.id = id
    this._data.nation = nation
    this._data.key = LanguageKey.parseKeyToObj(key)
    this._data.value = value
    this._data.desc = desc
    this._data.created_at = Date.now()
    this._data.updated_at = Date.now()
  }
  update(value, desc) {
    this._data.value = value
    this._data.desc = desc
    this._data.updated_at = Date.now()
  }
  getKey() {
    return LanguageKey.parseObjToKey(this._data.key)
  }
  getValue() {
    return this._data.value
  }
  getNation() {
    return this._data.nation
  }
  getDomain() {
    return this._data.key.domain
  }
}

module.exports = Language

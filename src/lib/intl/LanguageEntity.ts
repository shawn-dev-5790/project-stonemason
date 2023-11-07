export interface ILanguageEntity {
  id: string
  nation: string // KR EN JP
  key: string
  value: string
  desc: string
  created_at: string
  updated_at: string
}

export default class LanguageEntity {
  constructor(private _data: ILanguageEntity) {}

  toObject() {
    return JSON.parse(JSON.stringify(this._data))
  }
}

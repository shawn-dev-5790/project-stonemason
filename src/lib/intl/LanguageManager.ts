import setting from '@/core/setting.json'

import langPackKo from './languages/ko.json'
import langPackEn from './languages/en.json'
import langPackJa from './languages/ja.json'

const langPacks: Record<string, typeof langPackKo> = {
  ko: langPackKo,
  en: langPackEn,
  ja: langPackJa,
}

type TLangPack = typeof langPackKo
type TLangPackKeys = keyof typeof langPacks

export default class LanguageManager {
  public static get locale(): TLangPackKeys {
    return localStorage.getItem(setting.local_storage.locale) || 'ko'
  }
  public static get message(): TLangPack {
    return langPacks[LanguageManager.locale]
  }
  public static onChangeLangTo(langCode: TLangPackKeys): void {
    if (localStorage.getItem(setting.local_storage.locale) === langCode) return
    if (!langPacks[langCode]) return

    localStorage.setItem(setting.local_storage.locale, langCode)
    window.location.reload()
  }
}

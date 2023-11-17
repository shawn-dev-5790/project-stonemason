import langPackKo from './data/ko.json'
import langPackEn from './data/en.json'
import langPackJa from './data/ja.json'

const langPacks: Record<string, typeof langPackKo> = {
  ko: langPackKo,
  en: langPackEn,
  ja: langPackJa,
}

export default class AppLanguage {
  public static locale() {
    return localStorage.getItem('locale') || 'ko'
  }
  public static message() {
    return langPacks[AppLanguage.locale()]
  }
  public static onChangeLangTo(langCode: keyof typeof langPacks) {
    if (localStorage.getItem('locale') === langCode) return

    if (!langPacks[langCode]) return

    localStorage.setItem('locale', langCode)

    window.location.reload()
  }
}

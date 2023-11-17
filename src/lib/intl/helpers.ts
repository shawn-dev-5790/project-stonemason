import langPackKo from './data/ko.json'
import langPackEn from './data/en.json'
import langPackJa from './data/ja.json'

export const onChangeLang = (code: string) => {
  let currentLangPack = {}

  switch (code) {
    case 'en':
      currentLangPack = langPackEn
      break
    case 'ko':
      currentLangPack = langPackKo
      break
    case 'ja':
      currentLangPack = langPackJa
      break
    default:
      currentLangPack = langPackKo
      break
  }

  localStorage.setItem('locale', code)

  return {
    locale: code,
    messages: currentLangPack,
  }
}

export const getLangData = onChangeLang(localStorage.getItem('locale') || 'ko')

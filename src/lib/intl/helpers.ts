import { LANG_PACK, LANG_PACK_EN } from './language'

export const onChangeLang = (code: string) => {
  let currentLangPack

  switch (code) {
    case 'en':
      currentLangPack = LANG_PACK_EN
      break
    case 'ko':
      currentLangPack = LANG_PACK
      break
    default:
      currentLangPack = LANG_PACK
      break
  }

  localStorage.setItem('locale', code)

  return {
    locale: code,
    messages: currentLangPack,
  }
}

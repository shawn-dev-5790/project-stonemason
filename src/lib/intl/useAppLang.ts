import { ReplaceType } from '@/dtr/utils/types'
import { useIntl } from 'react-intl'
import defaultLanguagePack from './data/ko.json'

type TLangCallback = (opts?: any) => string
type TLangMsg = ReplaceType<typeof defaultLanguagePack, TLangCallback>

export function useAppLang() {
  const { formatMessage: fm } = useIntl()

  const msg: TLangMsg = Object.fromEntries(
    Object.entries(defaultLanguagePack).map(([id, _]) => [
      [id],
      (opts) => fm({ id }, opts),
    ])
  )

  return { msg }
}

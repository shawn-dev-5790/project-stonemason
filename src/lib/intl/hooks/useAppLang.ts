import { ReplaceType } from '@/core/utils/types'
import { useIntl } from 'react-intl'
import langPackKo from '../data/ko.json'

export type TLangCallback = (opts?: any) => string
export type TLangMsg = ReplaceType<typeof langPackKo, TLangCallback>

export default function useAppLang() {
  const { formatMessage: fm } = useIntl()

  const msg: TLangMsg = Object.fromEntries(
    Object.entries(langPackKo).map(([id, _]) => [
      [id],
      (opts) => fm({ id }, opts),
    ])
  )

  return { msg }
}

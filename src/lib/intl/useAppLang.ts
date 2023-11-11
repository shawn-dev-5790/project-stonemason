import { ReplaceType } from '@/dtr/utils/types'
import { useMemo } from 'react'
import { useIntl } from 'react-intl'
import { LANG_PACK } from './language'

export function useAppLang() {
  const { formatMessage } = useIntl()

  const i18n = useMemo(() => {
    const updated = Object.entries(LANG_PACK).map(([k, _]) => [[k], (opts?: any) => formatMessage({ id: k }, opts || undefined)])
    const res: ReplaceType<typeof LANG_PACK, (opts?: any) => string> = Object.fromEntries(updated)
    return res
  }, [formatMessage])

  const get = (id: keyof typeof LANG_PACK, opts?: any) => i18n[id](opts)

  return { get, msg: i18n }
}

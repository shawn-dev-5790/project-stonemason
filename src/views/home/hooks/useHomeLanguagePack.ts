import { useMemo } from 'react'
import { useIntl } from 'react-intl'

export function useHomeLanguagePack() {
  const intl = useIntl()
  const i18n = useMemo(
    () => ({
      k: intl.formatMessage({ id: 'k' }),
    }),
    [intl]
  )

  return {
    intl,
    i18n,
  }
}

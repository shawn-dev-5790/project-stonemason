import { Children, useCallback, useMemo } from 'react'
import { useIntl } from 'react-intl'

const lang = {
  version: '0',
  rows: [
    { key: 'views.user-common.dialog.txt.ok1', ko: '확인', en: 'confirm', jp: '確認' },
    { key: 'views.user-common.dialog.txt.ok2', ko: '확인', en: 'confirm', jp: '確認' },
    { key: 'views.user-common.dialog.txt.ok3', ko: '확인', en: 'confirm', jp: '確認' },
    { key: 'views.user-common.dialog.txt.ok4', ko: '확인', en: 'confirm', jp: '確認' },
    { key: 'views.user-common.dialog.txt.ok5', ko: '확인', en: 'confirm', jp: '確認' },
    { key: 'views.user-common.dialog.txt.ok6', ko: '확인', en: 'confirm', jp: '確認' },
    { key: 'views.user-common.dialog.txt.ok7', ko: '확인', en: 'confirm', jp: '確認' },
    { key: 'views.user-common.dialog.txt.ok8', ko: '확인', en: 'confirm', jp: '確認' },
    { key: 'views.user-common.dialog.txt.ok9', ko: '확인', en: 'confirm', jp: '確認' },
    { key: 'views.user-common.dialog.txt.ok10', ko: '확인', en: 'confirm', jp: '確認' },
    { key: 'views.user-common.dialog.txt.ok11', ko: '확인', en: 'confirm', jp: '確認' },
  ],
}

export default function useUserLanguagePack() {
  const LANG_PACK = {
    k: 'k',
    k2: '<c1>c1</c1>@<c2>c2</c2>@<c3>c3</c3>@<c4>c4</c4>@<c5>c5</c5>',
    k3: '{n}',
  }
  const { formatMessage: fm } = useIntl()
  const d = Object.fromEntries(Object.entries(LANG_PACK).map(([k, _]) => [[k], (opts: any) => fm({ id: k }, opts || undefined)]))
  const i18n = useMemo(() => d, [d])

  return {
    static: i18n,
    mutable: {},
  }
}

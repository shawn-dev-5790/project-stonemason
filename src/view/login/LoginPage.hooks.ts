import { useMemo } from 'react'
import { useIntl } from 'react-intl'
import { ReplaceType } from '@/core/utils/types'
import langPackKo from '@/lib/intl/languages/ko.json'
import { useAppSelector } from '@/lib/react-redux/StoreManager'
import { actionsLoginPageUseCase, selectLoginPageUseCase } from '@/lib/react-redux/slices/LoginPageUseCaseSlice'
import LoginPageUseCase from '@/core/application/usecases/LoginPageUseCase'

type TLangCallback = (opts?: any) => string
type TLangMsg = ReplaceType<typeof langPackKo, TLangCallback>

/**
 * 단위별로 사용하는 랭귀지팩 훅
 * 랭귀지 메니저와 연결됨
 * @returns TLangMsg : ReplaceType<typeof langPackKo, TLangCallback>
 */
export function useLoginPageLang() {
  const { formatMessage: fm } = useIntl()
  const msg: TLangMsg = Object.fromEntries(
    Object.entries(langPackKo).map(([id, _]) => [[id], (opts) => fm({ id }, opts)])
  )

  return { msg }
}
/**
 * 페이지 단위로 사용되는 유즈케이스
 * 슬라이스와 연결되어 있음
 * @returns instanceType<LoginPageUseCase>
 */
export function useLoginPageUseCase() {
  const slice = useAppSelector(selectLoginPageUseCase)
  const uc = useMemo(() => new LoginPageUseCase(slice), [slice])

  return {
    uc,
    actions: actionsLoginPageUseCase,
  }
}

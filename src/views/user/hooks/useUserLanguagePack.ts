import { useMemo } from 'react'
import { useIntl } from 'react-intl'

export default function useUserLanguagePack() {
  const intl = useIntl()
  const i18n = useMemo(
    () => ({
      k: intl.formatMessage({ id: 'k' }, { n: 1 }),
    }),
    [intl]
  )

  // 합의 ) 랭귀지팩은 view.domain 별로 분할하여 (common 제외) 커스텀 훅으로 제공한다.
  // 문제 ) pre, post 단계에서 안쓰는 키를 없애는 방법 ===> 모델링의 정합성 체크 : 하나의 파일로 이루어 져야 함.(한 공간)
  //       집중해야 하는 부분 : 모델링 (형상, 위치, 형태)
  //       저장위치 : gs  === 메인 모델을 뭐로 할거냐 (랭귀지팩, 구글시트)

  // 1 | domain | role   | type | name | kr | jp | en
  // 1 | common | dialog | txt | ok | 확인 | arigato | confirm
  // 1 | common | dialog | txt | ok | 확인 | arigato | confirm
  // 1 | common | dialog | txt | ok | 확인 | arigato | confirm
  // 1 | common | dialog | txt | ok | 확인 | arigato | confirm
  // 1 | common | dialog | txt | ok | 확인 | arigato | confirm
  // 1 | common | dialog | txt | ok | 확인 | arigato | confirm
  // 1 | common | dialog | txt | ok | 확인 | arigato | confirm
  // 1 | common | dialog | txt | ok | 확인 | arigato | confirm
  // 1 | common | dialog | txt | ok | 확인 | arigato | confirm

  const res = [
    {
      id: 1,
      domain: 'common',
      role: 'dialog',
      type: 'txt',
      name: 'ok',
      kr: '확인',
      jp: 'arigato',
      en: 'confirm',
      desc: '',
    },
  ]

  return {
    intl,
    static: i18n,
    mutable: {},
  }
}

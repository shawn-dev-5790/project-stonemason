import './index.css'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { IntlProvider } from 'react-intl'
import { globalStore } from './lib/react-redux/globalStore'
import AppRouters from './lib/react-router-dom/AppRouters'
import { BrowserRouter } from 'react-router-dom'

const LANG_CODE = 'en'
export const LANG_PACK = {
  k: 'k',
  k2: '<c1>c1</c1>@<c2>c2</c2>@<c3>c3</c3>@<c4>c4</c4>@<c5>c5</c5>',
  k3: '{n}day {n}days',
  'member_login.section.txt.login': '로그인',
  'member_login.section.txt.register_yet': '아직 회원이 아니신가요?',
  'member_login.section.txt.register': '회원가입하기',
  'member_login.section.txt.email': '이메일',
  'member_login.section.txt.password': '비밀번호',
  'member_login.section.txt.forget_password': '비밀번호를 잊어버리셨나요?',
  'common.section.txt.unused': 'un-used: {n}days',
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={globalStore}>
    <IntlProvider locale={LANG_CODE} messages={LANG_PACK}>
      <BrowserRouter>
        <AppRouters />
      </BrowserRouter>
    </IntlProvider>
  </Provider>
)

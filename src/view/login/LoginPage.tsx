import LoginPageUseCase from '@/core/application/usecases/LoginPageUseCase'
import { reqPostLogin } from '@/lib/axios/requests/auth'
import LanguageManager from '@/lib/intl/LanguageManager'
import AppLanguage from '@/lib/intl/LanguageManager'
import useAppLang from '@/lib/intl/hooks/useAppLang'
import AppErrorBoundary from '@/lib/react-router-dom/components/ErrorBoundary'
import AppSuspense from '@/lib/react-router-dom/components/Suspense'
import { AppFlexBox } from '@/lib/styled-components/components/Box'
import { AppFullPageLayout } from '@/lib/styled-components/components/Layout'
import { Link } from 'react-router-dom'

const uc = new LoginPageUseCase(LoginPageUseCase.init())

export default function LoginPage() {
  return (
    <AppErrorBoundary>
      <AppSuspense>
        <Layout />
      </AppSuspense>
    </AppErrorBoundary>
  )
}

function Layout() {
  // call api
  return (
    <AppFullPageLayout>
      <Content />
    </AppFullPageLayout>
  )
}

function Content() {
  const text = {
    h1: 'STONEMASON',
    qr: 'QR.code',
  }
  const lang = useAppLang()
  const toast = (msg: string) => () => console.log(msg)

  return (
    <AppFlexBox flow='column' align='center center' w='100%' h='100%'>
      <AppFlexBox align='center center' pd='36px' gap='4px'>
        <AppFlexBox as='h1'>{text.h1}</AppFlexBox>
        <AppFlexBox as='button' mg='6px 0 0 0' pd='4px' onClick={() => uc.onChangeLanguage(AppLanguage)}>
          {LanguageManager.locale}
        </AppFlexBox>
      </AppFlexBox>
      <AppFlexBox flow='column' align='center center' gap='24px' pd='48px' b='1px solid #999'>
        <AppFlexBox flow='column' w='100%' gap='12px'>
          <AppFlexBox as='h2'>{lang.msg['member_login.section.txt.login']()}</AppFlexBox>
        </AppFlexBox>
        <AppFlexBox align='space-between flex-start' gap='48px' w='100%'>
          <AppFlexBox flow='column' align='space-between' gap='24px' w='300px' h='100%'>
            <AppFlexBox flow='column' w='100%' gap='8px'>
              <AppFlexBox as='label'>{lang.msg['member_login.section.txt.email']()}</AppFlexBox>
              <AppFlexBox
                as='input'
                w='100%'
                h='36px'
                pd='0 4px'
                b='1px solid #999'
                type='text'
                placeholder='email'
                onChange={(e) => uc.onChangeEmail(e.target.value, toast('err-email'))}
              />
              <AppFlexBox as='label' align='space-between center'>
                {lang.msg['member_login.section.txt.password']()}
              </AppFlexBox>
              <AppFlexBox
                as='input'
                w='100%'
                h='36px'
                pd='0 4px'
                b='1px solid #999'
                type='text'
                placeholder='password'
                onChange={(e) => {
                  // TODO: block auto-complete on chrome web
                  if (e.target.value.length > 1) e.currentTarget.type = 'password'
                  uc.onChangePassword(e.target.value, toast('err-password'))
                }}
              />
            </AppFlexBox>
            <AppFlexBox
              as='button'
              align='center center'
              w='100%'
              h='36px'
              bg='#efefef'
              disabled={!uc.canLogin()}
              onClick={() => uc.onLogin(reqPostLogin)}
            >
              {lang.msg['member_login.section.txt.login']()}
            </AppFlexBox>
          </AppFlexBox>
          <AppFlexBox align='center center' w='200px' h='200px' bg='#efefef'>
            {text.qr}
          </AppFlexBox>
        </AppFlexBox>
        <AppFlexBox align='space-between center' w='100%'>
          <Link to={uc.getRegisterPageUrl()}>{lang.msg['member_login.section.txt.register_yet']()}</Link>
          <Link to={uc.getPasswordRecoveryPageUrl()}>{lang.msg['member_login.section.txt.forget_password']()}</Link>
        </AppFlexBox>
      </AppFlexBox>
    </AppFlexBox>
  )
}

import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { reqPostLogin } from '@/lib/axios/requests/auth'
import LanguageManager from '@/lib/intl/LanguageManager'
import AppErrorBoundary from '@/lib/react-router-dom/components/ErrorBoundary'
import AppSuspense from '@/lib/react-router-dom/components/Suspense'
import { AppFlexBox } from '@/lib/styled-components/components/Box'
import { AppFullPageLayout } from '@/lib/styled-components/components/Layout'
import { useLoginPageLang, useLoginPageUseCase } from './LoginPage.hooks'
import { useAppDispatch } from '@/lib/react-redux/StoreManager'

export default function LoginPage() {
  return (
    <AppErrorBoundary>
      <AppFullPageLayout>
        <AppSuspense>
          <Content />
        </AppSuspense>
      </AppFullPageLayout>
    </AppErrorBoundary>
  )
}

function Content() {
  const lang = useLoginPageLang()
  const { uc, actions } = useLoginPageUseCase()
  const dispatch = useAppDispatch()

  useEffect(() => {
    return () => {
      dispatch(actions.onReset())
    }
  }, [actions, dispatch])

  return (
    <AppFlexBox flow='column' align='center center' w='100%' h='100%'>
      <AppFlexBox align='center center' pd='36px' gap='4px'>
        <AppFlexBox as='h1'>{lang.msg['common.h1.txt.app_title']()}</AppFlexBox>
        <AppFlexBox as='button' mg='6px 0 0 0' pd='4px' onClick={() => uc.onChangeLanguage(LanguageManager)}>
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
                onChange={(e) => dispatch(actions.onChangeEmail(e.target.value))}
              />
              {uc.isShowEmailErrorMsg() && (
                <AppFlexBox as='p' bg='gold' children={lang.msg['member_login.section.txt.email_error']()} />
              )}
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
                  dispatch(actions.onChangePassword(e.target.value))
                }}
              />
              {uc.isShowPasswordErrorMsg() && (
                <AppFlexBox as='p' bg='gold' children={lang.msg['member_login.section.txt.password_error']()} />
              )}
            </AppFlexBox>
            <AppFlexBox
              as='button'
              align='center center'
              w='100%'
              h='36px'
              bg={!uc.canLogin() ? '#efefef' : 'gold'}
              disabled={!uc.canLogin()}
              onClick={() => uc.onLogin(reqPostLogin)}
            >
              {lang.msg['member_login.section.txt.login']()}
            </AppFlexBox>
          </AppFlexBox>
          <AppFlexBox align='center center' w='200px' h='200px' bg='#efefef'>
            {lang.msg['common.section.txt.app_qr_code']()}
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

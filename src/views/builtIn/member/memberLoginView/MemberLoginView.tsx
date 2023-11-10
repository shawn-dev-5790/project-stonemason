import css from './MemberLoginView.module.css'
import AppErrorBoundary from '@/lib/react-router-dom/components/AppErrorBoundary'
import DtrLayout from '@/lib/dds/DtrLayout'
import { useAppLang } from '@/lib/intl/useAppLang'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { sitemapToMemberForgetView, sitemapToMemberRegisterView } from '@/lib/react-router-dom/helpers/sitemapTo'

export default function MemberLoginView() {
  const lang = useAppLang()

  // lang
  // uc
  const [cnt, setCnt] = useState(0)

  return (
    <AppErrorBoundary>
      <DtrLayout type='T'>
        <div className={css.wrap}>
          <div className={css.page_title}>
            <h2>{lang.msg['member_login.section.txt.login']()}</h2>
            <div>
              <strong>test</strong>
              <span>{lang.msg['common.section.txt.unused']({ n: cnt })}</span>
              <button onClick={() => setCnt((prev) => prev + 1)}>addCnt</button>
            </div>
            <p>
              {lang.get('member_login.section.txt.register_yet')}
              <Link to={sitemapToMemberRegisterView()}>{lang.get('member_login.section.txt.register')}</Link>
            </p>
          </div>
          <div className={css.page_cont}>
            <label htmlFor='user_email'>{lang.get('member_login.section.txt.email')}</label>
            <input type='email' id='user_email' autoComplete='off' />
            <label htmlFor='user_pwd'>
              <span>{lang.get('member_login.section.txt.password')}</span>
              <Link to={sitemapToMemberForgetView()}>{lang.get('member_login.section.txt.forget_password')}</Link>
            </label>
            <input type='password' id='user_pwd' autoComplete='off' />
            <button onClick={() => alert('TEST: LOGIN SUCCESS!')}>{lang.get('member_login.section.txt.login')}</button>
          </div>
        </div>
      </DtrLayout>
    </AppErrorBoundary>
  )
}

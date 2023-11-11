import css from './MemberLoginView.module.css'

import AppErrorBoundary from '@/lib/react-router-dom/components/AppErrorBoundary'
import { useAppLang } from '@/lib/intl/useAppLang'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  sitemapToMemberForgetView,
  sitemapToMemberRegisterView,
} from '@/lib/react-router-dom/helpers/sitemapTo'
import { AdsGridBoxType1 } from '@/lib/app-design-system/AdsGridBox'
import { AdsLayoutFullCenter } from '@/lib/app-design-system/AdsLayout'
import { AdsLogoSimple } from '@/lib/app-design-system/AdsLogo'

export default function MemberLoginView() {
  const lang = useAppLang()

  return (
    <AppErrorBoundary>
      <AdsLayoutFullCenter>
        <AdsLogoSimple />
        <div className={css.wrap}>
          <AdsGridBoxType1
            title={<Title />}
            info={<LanguageTestText />}
            sectionMain={<SectionMain />}
            sectionSub={<Sub />}
          />
        </div>
      </AdsLayoutFullCenter>
    </AppErrorBoundary>
  )

  function Title() {
    return (
      <div className={css.title}>
        <h2 children={lang.msg['member_login.section.txt.login']()} />
        <p className={css.desc}>
          <span
            children={lang.msg['member_login.section.txt.register_yet']()}
          />
          <Link
            to={sitemapToMemberRegisterView()}
            children={lang.msg['member_login.section.txt.register']()}
          />
        </p>
      </div>
    )
  }
  function LanguageTestText() {
    // FIXME: temp test file remove-me later
    const tempStyle = {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      background: 'gold',
      padding: '12px',
    }
    const [cnt, setCnt] = useState(0)

    return (
      <span style={tempStyle}>
        <strong>TEST</strong>
        <span>{lang.msg['common.section.txt.unused']({ n: cnt })}</span>
        <button onClick={() => setCnt((prev) => prev + 1)}>add count</button>
      </span>
    )
  }
  function SectionMain() {
    return (
      <div className={css.main}>
        <label
          htmlFor='user_email'
          children={lang.msg['member_login.section.txt.email']()}
        />
        <input type='email' id='user_email' autoComplete='off' />
        <label htmlFor='user_pwd'>
          <span children={lang.msg['member_login.section.txt.password']()} />
          <Link
            to={sitemapToMemberForgetView()}
            children={lang.msg['member_login.section.txt.forget_password']()}
          />
        </label>
        <input type='password' id='user_pwd' autoComplete='off' />
        <button
          onClick={() => alert('TEST: LOGIN SUCCESS!')}
          children={lang.get('member_login.section.txt.login')}
        />
      </div>
    )
  }
  function Sub() {
    return (
      <div className={css.sub}>
        <i className={css.img_grcode} children={'QR.code'} />
      </div>
    )
  }
}

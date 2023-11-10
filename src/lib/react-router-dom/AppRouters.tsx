import setting from '@/setting.json'

import { Route, Routes } from 'react-router-dom'
import { useScrollBehavior } from './helpers/useScrollBehavior'
import MemberLoginView from '@/views/builtIn/member/memberLoginView/MemberLoginView'
import MemberUpdateView from '@/views/builtIn/member/memberUpdateView/MemberUpdateView'
import MemberDetailView from '@/views/builtIn/member/memberDetailView/MemberDetailView'
import MemberRegisterView from '@/views/builtIn/member/memberRegisterView/MemberRegisterView'
import { AppExceptionNotFound } from './components/AppException'
import MemberForgetView from '@/views/builtIn/member/memberForgetView/MemberForgetView'

export default function AppRouters() {
  useScrollBehavior(0, 0)

  return (
    <Routes>
      <Route path={setting.sitemap.member_login} element={<MemberLoginView />} />
      <Route path={setting.sitemap.member_register} element={<MemberRegisterView />} />
      <Route path={setting.sitemap.member_forget} element={<MemberForgetView />} />

      <Route path={setting.sitemap.member}>
        <Route path={setting.sitemap.member_detail} element={<MemberDetailView />} />
        <Route path={setting.sitemap.member_update} element={<MemberUpdateView />} />
      </Route>

      <Route path={setting.sitemap.all} element={<AppExceptionNotFound />} />
    </Routes>
  )
}

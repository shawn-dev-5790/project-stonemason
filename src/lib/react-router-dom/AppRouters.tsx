import { Route, Routes } from 'react-router-dom'
import { useScrollBehavior } from './helpers/useScrollBehavior'
// import MemberLoginView from '@/views/builtIn/member/memberLoginView/MemberLoginView'
import setting from '@/core/setting.json'
import LoginPage from '@/view/login/LoginPage'
import { AppExceptionNotFound } from '../styled-components/components/Exception'

export default function AppRouters() {
  useScrollBehavior(0, 0)

  return (
    <Routes>
      <Route path={setting.sitemap.index} element={<LoginPage />} />

      <Route path={setting.sitemap.all} element={<AppExceptionNotFound />} />
    </Routes>
  )
}

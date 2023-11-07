import { Route, Routes } from 'react-router-dom'
import { useScrollBehavior } from './hooks/useScrollBehavior'
import { SITEMAP } from './_SITEMAP'
import { lazy } from 'react'
import { retry } from './helpers/retry'

const Home = lazy(() => retry(() => import('@/views/home/Home')))
const Users = lazy(() => retry(() => import('@/views/user/User')))

export default function AppRouters() {
  useScrollBehavior(0, 0)

  return (
    <Routes>
      <Route path={SITEMAP.home} element={<Home />} />
      <Route path={SITEMAP.users} element={<Users />} />
    </Routes>
  )
}
